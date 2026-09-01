import type { ProjectStatusValue } from "./ProjectStatus";

export type Project = {
  slug: string;
  name: string;
  description: string;
  image: string;
  tags: string[];
  gitlink: string;
  status: ProjectStatusValue; 
  placecard: boolean;
  href?: string;
};

export const projects: Project[] = [
  // {},
  {
    slug: "ferros",
    name: "FerrOS: A research Operating System in Rust",
    description:
      "An experimental operating system written entirely in Rust. Meant to explore potential ABI changes that can be introduced using the Rust platform, and to examine the advantages afforded, and problems introduced, by trading the Rust Type System in place of the older C type system.",
    image: "/images/projects/placeholder-1.svg",
    tags: ["Operating Systems", "Rust", "Functional Programming"],
    gitlink: "https://github.com/Shikhar-Srivastava-16/ferrOS",
    status: 0,
    placecard: false,
  },

  {
    slug: "haskell-gol",
    name: "Conway's Game of Life",
    description:
      "Conway's Game of life, implemented functionally in haskell using a single data structure which acts as a 'nested' State Machine - the game board acts as a state machine, whose input is dependent on other state machines which represent the cells within the game board.",
    image: "/images/projects/placeholder-1.svg",
    tags: ["State Machines", "Haskell", "Functional Programming","Graphics", "Games"],
    gitlink: "https://github.com/Shikhar-Srivastava-16/game-of-life-hs",
    status: 1,
    placecard: false,
  },

  {
    slug: "enigma",
    name: "Enigma Machine Emulator",
    description:
      "Digital twin of the Enigma Machine, written in C. Supports both Encryption and Descryption of strings via the command line.",
    image: "/images/projects/placeholder-1.svg",
    tags: ["C", "Encryption Systems", "Low-Level Programming"],
    gitlink: "https://github.com/Shikhar-Srivastava-16/game-of-life-hs",
    status: 2,
    placecard: false,
  },

];
