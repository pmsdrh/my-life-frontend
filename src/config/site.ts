export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "MyLife",
  description: "اپ مدیریت زندگی",
  navItems: [
    {
      label: "خانه",
      href: "/",
    },
  ],
  navMenuItems: [
    {
      label: "حساب کاربری",
      href: "/profile",
    },
    {
      label: "داشبورد",
      href: "/dashboard",
    },
    {
      label: "Projects",
      href: "/projects",
    },
    {
      label: "Team",
      href: "/team",
    },
    {
      label: "Calendar",
      href: "/calendar",
    },
    {
      label: "Settings",
      href: "/settings",
    },
    {
      label: "Help & Feedback",
      href: "/help-feedback",
    },
    {
      label: "Logout",
      href: "/logout",
    },
  ],
  links: {
    github: "https://github.com/pmsdrh/",
  },
};
