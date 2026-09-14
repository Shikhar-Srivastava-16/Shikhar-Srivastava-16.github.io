export const categories = ["Research", "Utility", "Display"] as const;
export type Category = typeof categories[number];

export type CadProject = {
  slug: string;
  name: string;
  tool: string;
  description: string;
  images: string[];
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
    images: [
      "/images/cad/b1.jpg",
      "/images/cad/b2.jpg",
      "/images/cad/b3.jpg",
      "/images/cad/b4.jpg",
      "/images/cad/b5.jpg",
      "/images/cad/b6.jpg",
      "/images/cad/b7.jpg",
      "/images/cad/b8.jpg",
      "/images/cad/b9.jpg",
      "/images/cad/b10.jpg",
      "/images/cad/b11.jpg",
      "/images/cad/b12.jpg",
      "/images/cad/b13.jpg",
    ],
    link: ["Published by The Griffith Institute", "https://tutankhamun.griffith.ox.ac.uk/stories/re-creating-tutankhamuns-mask-3d-harry-burtons-photographs-digital-model"],
    category: "Research",
  }
];
