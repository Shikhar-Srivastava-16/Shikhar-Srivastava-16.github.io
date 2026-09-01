---
title: Building Agent Harnesses in Rust
date: 2026-07-10
summary: Writing a crate to Build Agent Harnesses in Rust: The Good, The Bad, and The Absolutely Nonsensical
tags: Rust, AI Agents, work-in-progress
---

## Why?

If you've ever worked with Agentic AI or written Agent Harnesses, you would know that there are only a handful of possibilities to consider when choosing the platform that you use to build your tool. While I was interning at a Deep Tech and AI team, the most popular choice by far was a libary called LangChain and its family of other infrastructure libraries. This is what tools like OpenCode and OpenClaw use to accomplish the real 'Agent' behaviour which makes up the bulk of the runtime when you as a user provide directions to an AI tool.

It is also pretty much the only real choice, unless you want to use a language like Java or C and then use it to write requests and build all of the scaffolding from the ground up. The latter would be extremely impractical for a single prototype, so let us focus on the former. The LangChain family is written in python, with some dependencies like FAISS that are written in other languages. It exposes a front-end to users in either Python or TypeScript. This _looks_ familiar, because this is business-as-usual for Python developers. However, there is a big difference. The typical stack of a project that uses something like PyTorch, for instance, looks like this: 

The stack for most modern agent harnesses looks like this:

As is evident, there is considerably more python code being run here. The problem with this is that python is slow and error prone because it is interpreted an weakly typed, with most of the usual safety measures being enforced only by convention and not by a compiler or type checker. This is an especially big problem because agent harnesses deal with particulary high volumes of semi-structured data. Harnesses are incredibly complex as-is, and python's system of shared behaviour adds a number of unnecessary checks. It also means that a developer can quite easily induce errors without realising or being able to trace them, which adds a lot of extra problems and mandates extra testing. 

Additionally, if a developer wants to provide tools of their own, they have two options:
1. Use python - which carries all of the same issues that I have just provided.
2. Use another language and provide bingings into python - this would means either using a SDK and an MCP server, which makes for an overly complicated solution or the computational and human cost of having to set up the MCP server. 

## Fixes! 

Luckily, the fix for this is relatively simple. Let us look at our problems and their possible solutions:

 1. **Interpreted languages are slow**: We solve this just move our platform to a compiled language, preferably one that which fast, has a strong type system and an optimised compiler. 
 2. **Python's JSON is unstructured**: Python has very few provisions for controlling the structure of a JSON Object for API requests. We could build controlling measures in python and then use them. But this would also be solved by switching to a language with stronger typing. 
 3. **Polymorphism is Slow**: Shared behaviour is necessary for something like an Agent, especially when we start getting into orchestration (using multiple LLMs at the same time). It makes life significantly easier for the developers. Python, an object-oriented language, handles this through Inheritance and Polymorphism. The problem is, even languages like Java have the same problems because polymorphism (usually) is accomplished at runtime. To remedy this, we would have to pick to a language that doesn't have the same shortcomings.

So, we need to switch to a language that is *compiled*, *strongly typed* and *monomorphic*. That last factor is imporant - all languages can enforce monomorphism through convention, but that reintroduces one of the python problems. Therefore, we need a language that *enforces* monomorphism. As you may have guessed, there is an production-ready language that fulfills all of these criteria, along with a few other useful characteristics that can be useful, which I will talk about in subsequent posts. 