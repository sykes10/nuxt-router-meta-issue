// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  hooks: {
    "pages:extend": (pages) => {
      pages.length = 0;
      pages.push({
        path: "/",
        file: "~/pages/index.vue",
        meta: {
          index: "1231",
        },
      });
      pages.push({
        path: "/test",
        file: "~/pages/test.vue",
        meta: {
          test: true,
        },
      });
    },
  },
});
