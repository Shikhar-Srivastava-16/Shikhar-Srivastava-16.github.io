export type Photo = {
  src: string;
  caption: string;
};

// Replace `src` with real photos in /public/images/photography/.
export const photos: Photo[] = [
  { src: "/images/photography/placeholder.svg", caption: "An ornate stepwell, Patan, Gujarat" },
  { src: "/images/photography/placeholder.svg", caption: "Migratory pelicans on a saltwater lake, Western India" },
  { src: "/images/photography/placeholder.svg", caption: "A gull-billed tern in flight" },
  { src: "/images/photography/placeholder.svg", caption: "A spotted owlet, mid-afternoon" },
  { src: "/images/photography/placeholder.svg", caption: "One of roughly six hundred wild Asiatic lions" },
  { src: "/images/photography/placeholder.svg", caption: "A thousand-year-old temple, upper Himalaya" },
];
