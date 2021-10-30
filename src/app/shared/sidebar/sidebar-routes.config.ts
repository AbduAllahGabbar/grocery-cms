import { RouteInfo } from "./sidebar.metadata";

export const ROUTES: RouteInfo[] = [
  {
    path: "/dashboard",
    title: "DASHBOARD",
    icon: "ft-home",
    class: "",
    badge: "",
    badgeClass: "",
    isExternalLink: false,
    submenu: [],
  },
  // {
  //   path: "/admins",
  //   title: "ADMIN",
  //   icon: "ft-bar-chart",
  //   class: "",
  //   badge: "",
  //   badgeClass: "",
  //   isExternalLink: false,
  //   submenu: [],
  // },
  {
    path: "/products",
    title: "PRODUCTS",
    icon: "ft-bar-chart",
    class: "",
    badge: "",
    badgeClass: "",
    isExternalLink: false,
    submenu: [],
  },
  {
    path: "/categories",
    title: "CATEGORIES",
    icon: "ft-menu",
    class: "",
    badge: "",
    badgeClass: "",
    isExternalLink: false,
    submenu: [],
  },
  {
    path: "/sub-category",
    title: "SUB_CATEGORY",
    icon: "ft-menu",
    class: "",
    badge: "",
    badgeClass: "",
    isExternalLink: false,
    submenu: [],
  },
  {
    path: "/out-of-stock",
    title: "OUT_OF_STOCK",
    icon: "ft-menu",
    class: "",
    badge: "",
    badgeClass: "",
    isExternalLink: false,
    submenu: [],
  },
  {
    path: "",
    title: "ORDERS",
    icon: "ft-check-square",
    class: "has-sub",
    badge: "",
    badgeClass: "badge badge-pill badge-success float-right mr-1 mt-1 ",
    isExternalLink: false,
    submenu: [
      {
        path: "/orders",
        title: "ONLINE_ORDERS",
        icon: "ft-check-square",
        class: "",
        badge: "",
        badgeClass: "",
        isExternalLink: false,
        submenu: [],
      },
      {
        path: "/subscription-orders",
        title: "SUBSCRIPTION_ORDERS",
        icon: "ft-check-square",
        class: "",
        badge: "",
        badgeClass: "",
        isExternalLink: false,
        submenu: [],
      },
      {
        path: "/pos/orders",
        title: "POS_ORDERS",
        icon: "ft-check-square",
        class: "",
        badge: "",
        badgeClass: "",
        isExternalLink: false,
        submenu: [],
      },
      {
        path: "/pos",
        title: "POS",
        icon: "ft-check-square",
        class: "",
        badge: "",
        badgeClass: "",
        isExternalLink: false,
        submenu: [],
      }
    ],
  },

  {
    path: "/banner",
    title: "BANNER",
    icon: "ft-menu",
    class: "",
    badge: "",
    badgeClass: "",
    isExternalLink: false,
    submenu: [],
  },
  {
    path: "/deals",
    title: "DEALS",
    icon: "ft-file-text",
    class: "",
    badge: "",
    badgeClass: "",
    isExternalLink: false,
    submenu: [],
  },

  {
    path: "/coupons",
    title: "COUPONS",
    icon: "ft-file-minus",
    class: "",
    badge: "",
    badgeClass: "",
    isExternalLink: false,
    submenu: [],
  },
  {
    path: "/users",
    title: "USERS",
    icon: "ft-user",
    class: "",
    badge: "",
    badgeClass: "",
    isExternalLink: false,
    submenu: [],
  },
  {
    path: "/notifications",
    title: "NOTIFICATIONS",
    icon: "fa fa-envelope",
    class: "",
    badge: "",
    badgeClass: "",
    isExternalLink: false,
    submenu: [],
  },
  // {
  //   path: "/notification-list",
  //   title: "Notification List",
  //   icon: "fa fa-envelope",
  //   class: "",
  //   badge: "",
  //   badgeClass: "",
  //   isExternalLink: false,
  //   submenu: [],
  // },
  {
    path: "/delivery-boy",
    title: "DELIVERY_BOYS",
    icon: "ft-user",
    class: "",
    badge: "",
    badgeClass: "",
    isExternalLink: false,
    submenu: [],
  },
  {
    path: "/settings/chat",
    title: "CHAT",
    icon: "ft-clock",
    class: "",
    badge: "",
    badgeClass: "",
    isExternalLink: false,
    submenu: [],
  },
  {
    path: "",
    title: "REPORTS",
    icon: "ft-settings",
    class: "has-sub",
    badge: "",
    badgeClass: "badge badge-pill badge-success float-right mr-1 mt-1 ",
    isExternalLink: false,
    submenu: [
      {
        path: "/reports/product-report",
        title: "PRODUCT_REPORTS",
        icon: "ft-clock",
        class: "",
        badge: "",
        badgeClass: "",
        isExternalLink: false,
        submenu: [],
      },
    ],
  },
  {
    path: "",
    title: "SETTINGS",
    icon: "ft-settings",
    class: "has-sub",
    badge: "",
    badgeClass: "badge badge-pill badge-success float-right mr-1 mt-1 ",
    isExternalLink: false,
    submenu: [
      {
        path: "/settings/working-hours",
        title: "WORKING_HOURS",
        icon: "ft-clock",
        class: "",
        badge: "",
        badgeClass: "",
        isExternalLink: false,
        submenu: [],
      },
      {
        path: "/settings/delivery-settings",
        title: "DELIVERY_TAX_SETTINGS",
        icon: "ft-map-pin",
        class: "",
        badge: "",
        badgeClass: "",
        isExternalLink: false,
        submenu: [],
      },
      {
        path: "/settings/languages",
        title: "LANGUAGES",
        icon: "fa fa-language",
        class: "",
        badge: "",
        badgeClass: "",
        isExternalLink: false,
        submenu: [],
      },
      {
        path: "/settings/currency",
        title: "CURRENCY_SETTINGS",
        icon: "fa fa-money",
        class: "",
        badge: "",
        badgeClass: "",
        isExternalLink: false,
        submenu: [],
      },
      {
        path: "/settings/about-us",
        title: "ABOUT_US",
        icon: "fa fa-info",
        class: "",
        badge: "",
        badgeClass: "",
        isExternalLink: false,
        submenu: [],
      },
      {
        path: "/settings/privacy-policy",
        title: "PRIVACY_POLICY",
        icon: "fa fa-info",
        class: "",
        badge: "",
        badgeClass: "",
        isExternalLink: false,
        submenu: [],
      },
      {
        path: "/settings/terms-and-conditions",
        title: "TERMS_AND_CONDITIONS",
        icon: "fa fa-info",
        class: "",
        badge: "",
        badgeClass: "",
        isExternalLink: false,
        submenu: [],
      },
      {
        path: "/settings/business-info",
        title: "BUSINESS_INFO",
        icon: "fa fa-info",
        class: "",
        badge: "",
        badgeClass: "",
        isExternalLink: false,
        submenu: [],
      },
    ],
  },
];