---
title: Choice of Language: How to Leverage Rust
date: 2026-07-12
summary: Understanding which features of rust make it ideal for this type of task, and why it allows us to solve problems that the prvious entry introduceWriting a crate to Build Agent Harnesses in Rust: The Good, The Bad, and The Absolutely Nonsensicald
summary: Writing a crate to Build Agent Harnesses in Rust: The Good, The Bad, and The Absolutely Nonsensical
tags: Rust, Type Systems, Framework development
---

## What Rust Has to Offer

### Structured Datatypes

Let us first explore the type system. The compiler enforces absolute type safety. This means that there is no 'any' type, no implicit coercion and no possibility of type errors at runtime. It also distinguishes considers mutable and immutable objects different types. In order to achieve this, all objects, parameters, functions and even shared behaviour is heavily type-annotated. This means that developers get to dictate the flow of control at the code level. Further, there is also a distinction made between static and dynamic types. The former is always resolved at compile time, while the latter requires checking at runtime. This uber-strong type system means that, at the expense of some fairly complex syntax, rust programs are written in such a way that allows the compiler to pretty much fully resolve the flow of control with very few exceptions (known as dynamic code).

The simplest advantage that we can leverage is to turn semi-structured JSON into structured data. This is accomplished by defining a fully qualified type that can represent the format of the API request and which is structrally identical to the data which the LLM's RESTful API endpoint expects to see. This resolves a significant disparity in the request process - the JSON request is semi-structured despite trying to access an endpoint whose input type is structured and therefore more rigid. This internal datatype within the Rust code allows us to ensure that the data is also structured within the code. The only time a 'request' is semi-structured is in flight, where we don't have to worry about it. 

### Rust's conversion and coercion systems. 

In rust, type conversion can *look* like other conversion systems, like those in Python and TypeScript:

```rust
#[derive(Debug)]
struct Number {
    value: i32,
}

[ ...assume there is a library here... ]

fn main() {
    let int = 5;
    // print is a function that takes something, converts it into a number, and prints it out
    // `into` converts between types without having to make different functions for each input/output type combination
    print(num.into());
}

```

However, this is not because the underlying process is the same as implicit coercion, but because the compiler is able to accoplish conversions beween  (think of this as shorthand in syntax which gets removed in pre-processing). All type conversions will use the same pattern during the build step. It uses the following underlying infrastructure, without which the `.into()` function throws a complication error:


```rust
use std::convert::From;
use std::convert::Into;

#[derive(Debug)]
struct Number {
    value: i32,
}

impl From<i32> for Number {
    fn from(item: i32) -> Self {
        Number { value: item }
    }
}

impl Into<Number> for i32 {
    fn into(self) -> Number {
        Number { value: self }
    }
}

[ ...assume there is a library here... ]

fn main() {
    let int = 5;
    print(int.into());
}

```

This means that the typecasting can be fully resolved by the compiler, just like other languages. As long as type annotations are present, the compiler can fully resolve all type conversions. Unlike other languages, we can define type-safe code that lets the compiler also check that invalid conversions are not being attempted anywhere in the code. Even in compiled languages like Java, explicit typecasting which is nonetheless invalid will throw a runtime error. This is because the compiler is unable to check whether an explicit typecast is valid and simply trusts the developer. This leads to extra work needed at runtime, and slows execution. 

### Shared Behaviour in Rust

Another advantage that follows on from these things is rust's polymorphism - or rather, the lack thereof. As we have established, Rust programs can sidestep dealing with unstructured data altogether. They also forbid implicit conversions. There two pieces of knowledge are important to keep in mind as we talk about the **Trait System**.

Rust implements shared behaviour using Traits and Generics, all of which have lifetimes to which they are bound - you can read about this in detail [here](https://doc.rust-lang.org/book/ch10-00-generics.html). For now, think about traits like interfaces, which are implemented *after* a struct is defined. This means that they can be used to retroactively add shared functionality. They can also be treated as types, meaning that there types can be annotated to include all implementations of a specific Trait or even multiple traits. Traits can also have dependencies, and likewise, those dependencies can be specified in type annotations. Generics, on the other hand, act almost exactly like they do in other languages. However, just like inputs, generics can also be annotated to only allow types which have specific functionality.

Put together, this means that any time you define shared behaviour in rust, you can define it to depend on other behaviours - which means that the compiler can *also* distinguish between variables on the basis of the functionality which they implement. Further down the line, this allows the compiler to completely resolve shared behaviour during compilation.

Languages like Java and Python have polymorphism as well. When a polymorphic method or function is called, the runtime finds the right method and then calls it via a process known as *Method Resolution*. Instead of this, Rust resolves a single polymorphic flow of control in code to being a whole bunch of monomorphic flows of control. It then rewrites the function calls to use the correct monomorphic flow of control. In cases where dynamic polymorphism (à la method resolution) is absolutely necessary, we can use the `dyn` keyword, which tells the compiler to make an exception in monomorphic resolution.
