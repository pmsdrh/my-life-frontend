export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "MyLife",
  description: "اپ مدیریت زندگی",
  navItems: [
    {
      label: "خانه",
      href: "/",
    },
    {
      label: "پروژه ها",
      href: "/projects",
    },
  ],
  navMenuItems: [
    {
      label: "خانه",
      href: "/",
    },
    {
      label: "پروژه ها",
      href: "/projects",
    },
  ],
  links: {
    github: "https://github.com/pmsdrh/",
  },
};
