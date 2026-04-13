export interface NavItem {
  labelKey: string;
  href: string;
}

export const navigationItems: NavItem[] = [
  { labelKey: "nav.home", href: "/" },
  { labelKey: "nav.projects", href: "/proyectos" },
  { labelKey: "nav.contact", href: "/contacto" },
];