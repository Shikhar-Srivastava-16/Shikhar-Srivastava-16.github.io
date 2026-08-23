export type CadProject = {
  slug: string;
  name: string;
  tool: string;
  description: string;
  image: string;
  category: "Mechanical" | "Product" | "Structural";
};

// Content placeholder — swap in your real CAD/3D work. Structure mirrors
// the old portfolio: one card per project with the tool used, a short
// writeup, and a render/photo of the result.
export const cadProjects: CadProject[] = [
  {
    slug: "gearbox-housing",
    name: "Two-Stage Gearbox Housing",
    tool: "SolidWorks",
    description:
      "Split-line housing for a two-stage spur gearbox, designed for sand casting. Iterated on wall thickness and rib placement to keep the casting yield above 90% without adding mass.",
    image: "/images/cad/placeholder-1.svg",
    category: "Mechanical",
  },
  {
    slug: "camera-mount",
    name: "Modular Camera Mount",
    tool: "Fusion 360",
    description:
      "A quick-release mount system for field cameras, machined from 6061 aluminium. Uses a cam-lever clamp instead of a threaded knob so it can be operated with gloves on.",
    image: "/images/cad/placeholder-2.svg",
    category: "Product",
  },
  {
    slug: "truss-bridge",
    name: "Pedestrian Truss Bridge",
    tool: "AutoCAD + FEA",
    description:
      "Coursework structural design of a 20m pedestrian truss bridge, including a full load-path analysis and member sizing against a governing design code.",
    image: "/images/cad/placeholder-3.svg",
    category: "Structural",
  },
];
