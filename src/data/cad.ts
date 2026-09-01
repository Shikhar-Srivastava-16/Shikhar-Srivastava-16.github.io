export const categories = ["Research", "Utility", "Display"] as const;
export type Category = typeof categories[number];

export type CadProject = {
  slug: string;
  name: string;
  tool: string;
  description: string;
  image: string;
  link?: [string, string];
  category: Category;
};

export const cadProjects: CadProject[] = [
  {
    slug: "king-tut",
    name: "King Tutankhamun's Death Mask",
    tool: "Blender",
    description:
      "High-Fidelity model of King Tut's Death Mask, made using the photogrammetry process on archival materials. Project conducted by the University of St Andrews in collaboration with The Griffith Institute.",
    image: "/images/cad/placeholder-1.svg",
    link: ["Published by The Griffith Institute", "https://tutankhamun.griffith.ox.ac.uk/stories/re-creating-tutankhamuns-mask-3d-harry-burtons-photographs-digital-model"],
    category: "Research",
  }
];
