export type Photo = {
  src: string;
  caption: string;
};

// Replace `src` with real photos in /public/images/photography/.
export const photos: Photo[] = [
  { src: "/images/photography/IMG_rani-ki-vav.jpg", caption: "An ornate stepwell, Patan, Gujarat" },
  { src: "/images/photography/IMG_pelican.jpg", caption: "Migratory pelicans on a saltwater lake, Western India" },
  { src: "/images/photography/IMG_tern.jpg", caption: "A gull-billed tern in flight" },
  { src: "/images/photography/IMG_owl.jpg", caption: "A spotted owlet, mid-afternoon" },
  { src: "/images/photography/IMG_lion.jpg", caption: "One of roughly six hundred wild Asiatic lions" },
];
