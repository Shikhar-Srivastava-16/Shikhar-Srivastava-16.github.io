export const site = {
    name: "Shikhar Srivastava",
    initial: "",
    displayJapanese: false,
    role: "Computer Science Student",
    resumeHref: "/resume.pdf",
    email: "shikhars2006@gmail.com",
    socials: [
        { label: "GitHub", href: "https://github.com/Shikhar-Srivastava-16" },
        { label: "LinkedIn", href: "https://linkedin.com/" },
    ],
};

export const navItems = [
    { label: "About", to: "/about", jp: "自己紹介" },
    { label: "Projects", to: "/projects", jp: "作品" },
    { label: "Photography", to: "/photography", jp: "写真" },
    { label: "3D & CAD", to: "/cad", jp: "設計" },
    { label: "Blog", to: "/blog", jp: "記事" },
] as const;
