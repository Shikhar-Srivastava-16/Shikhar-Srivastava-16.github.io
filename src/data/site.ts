export const site = {
    name: "Shikhar Srivastava",
    initial: "印",
    displayJapanese: false,
    role: "Computer Science Student",
    resumeHref: "/resume.pdf",
    email: "hello@example.com",
    socials: [
        { label: "GitHub", href: "https://github.com/" },
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
