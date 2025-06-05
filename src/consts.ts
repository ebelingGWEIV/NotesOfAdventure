// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

// Site title and description
export const SITE_LANG = "en";
export const SITE_TAB = "NoA";
export const SITE_TITLE = "Notes Of Adventure 🧗";
export const SITE_DESCRIPTION = "Adventure blog";
export const DATE_FORMAT = "ddd MMM DD YYYY";

// User profile information
export const USER_NAME = "Joey";
export const USER_SITE = "https://notesofadventure.com"; // At the same time, this is also the site retrieved by the i18n configuration.
export const USER_AVATAR = "/profile.webp";

// Server and transition settings
export const SERVER_URL = "https://notesofadventure.com";

// Theme settings
export const DAISYUI_THEME = {
  light: "winter",
  dark: "dracula",
};
export const CODE_THEME = {
  light: "github-light",
  dark: "github-dark",
};

// Menu items for navigation
export const menuItems = [
  { id: "home", text: "Home", href: "/", svg: "material-symbols:home-outline-rounded", target: "_self" }, // Home page
  { id: "about", text: "About", href: "/about", svg: "material-symbols:info-outline-rounded", target: "_self" }, // About page
  {
    id: "blog",
    text: "Blogs",
    href: "/blog",
    svg: "material-symbols:book-2-outline-rounded",
    target: "_self",
    subItems: [
      {
        id: "all",
        text: "All blogs",
        href: "/blog",
        svg: "material-symbols:ink-pen-outline-rounded",
        target: "_self",
      }, // All blog
      {
        id: "OutdoorAdventures",
        text: "Grand Adventures",
        href: "/blog/categories/OutdoorAdventures",
        svg: "material-symbols:earthquake-rounded",
        target: "_self",
      }, // OutdoorAdventure category
    ],
  }, // Blog page with sub-items
  {
    id: "contact",
    text: "Contact",
    href: "mailto:contact@notesofadventure.com", // Contact email
    target: "_blank", // Open in a new tab
    svg: "material-symbols:attach-email-outline-rounded",
  },
];

// Social media and contact icons
export const socialIcons = [
  {
    href: "https://spacey.space/@callmekenneth",
    ariaLabel: "Mastadon",
    title: "Mastadon",
    svg: "ri:cup-line",
  },
  {
    href: "/rss.xml",
    ariaLabel: "RSS Feed",
    title: "RSS Feed",
    svg: "ri:rss-line",
  },
];
