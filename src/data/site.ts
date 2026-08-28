export const site = {
    name: "Shikhar Srivastava",
    initial: "शि.श्री.",
    displayhindi: true,
    role: "Computer Science Student",
    resumeHref: "/resume.pdf",
    socials: [
        { label: "GitHub", href: "https://github.com/Shikhar-Srivastava-16" },
        { label: "LinkedIn", href: "https://linkedin.com/" },
        { label: "shikhars2006@gmail.com", href: "mailto:shikhars2006@gmail.com" },
    ],
};


export const navItems = [
    { label: "About", to: "/about", hi: "परिचय" },
    { label: "Projects", to: "/projects", hi: "रचनाएं" },
    { label: "Photography", to: "/photography", hi: "तस्वीर-कला" },
    { label: "3D & CAD", to: "/cad", hi: "सी.ए.डी." },
    { label: "Blog", to: "/blog", hi: "ब्लॉग" },
] as const;
 