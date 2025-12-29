export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Bala Sankar",
  description: "Personal portfolio of Bala Sankar, showcasing passion projects and cool stuffs.",
  navItems: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "About",
      href: "/about",
    },
    {
      label: "Projects",
      href: "/projects",
    },
    {
      label: "Coolstuffs",
      href: "/coolstuffs",
    },
    {
      label: "Contact",
      href: "/contact",
    },
  ],
  links: {
    instagram: "https://instagram.com",
    medium: "https://medium.com",
    x: "https://x.com",
    youtube: "https://youtube.com",
    linkedin: "https://linkedin.com",
    email: "mailto:contact@balasankar.com",
  },
};
