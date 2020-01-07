module.exports = {
  head: [
    ["link", { rel: "icon", size: "192x192", href: "/logo.png" }],
    [
      "link",
      {
        rel: "apple-touch-icon",
        size: "192x192",
        href: "/logo.png"
      }
    ],
    ["meta", { name: "theme-color", content: "#ec546b" }],
    ["link", { rel: "stylesheet", href: "/main.css" }],
    ["link", { rel: "manifest", href: "/manifest.json" }],
    ["link", { rel: "shortcut icon", href: "/favicon.ico" }]
  ],
  locales: {
    "/": {
      lang: "ja",
      title: "MINUTES",
      description: " ",
      head: [
        ["meta", { name: "keywords", content: "MINUTES, MINUTES" }],
        ["meta", { property: "og:title", content: "MINUTES" }],
        [
          "meta",
          {
            name: "og:description",
            content: " Description"
          }
        ],
        ["meta", { property: "og:locale", content: "ja" }],
        ["meta", { property: "og:type", content: "website" }],
        ["meta", { property: "og:url", content: "https://MINUTES.com" }],
        ["meta", { property: "og:site_name", content: "MINUTES Blog" }],
        [
          "meta",
          {
            property: "og:image",
            content: "https://MINUTES.com/images/icons/icon-192x192.png"
          }
        ]
      ]
    }
  },
  themeConfig: {
    sidebar: "auto",
    nav: [{ text: "Github", link: "https://github.com/vuejs/vuepress" }]
  },
  plugins: [
    "smooth-scroll",
    "@vuepress/back-to-top",
    [
      "@vuepress/pwa",
      {
        serviceWorker: true,
        updatePopup: {
          "/": {
            message: "新しいコンテンツがあります。",
            buttonText: "更新する"
          }
        }
      }
    ],
    [
      "@vuepress/last-updated",
      {
        transformer: (timestamp, lang) => {
          const moment = require("moment");
          moment.locale(lang);
          return moment(timestamp).fromNow();
        }
      }
    ],
    [
      "@vuepress/google-analytics",
      {
        ga: "UA-MINUTES-1"
      }
    ]
  ],
  markdown: {
    extendMarkdown: md => {
      md.set({ breaks: true });
      md.use(require("markdown-it-mark"));
    }
  }
};
