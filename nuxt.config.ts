import { resolve } from "path";

export default defineNuxtConfig({
  // Disable strict
  typescript: {
    strict: false,
  },
  app: {
    head: {
      title: "Blog Post App",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { name: "description", content: "" },
      ],
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    },
  },
  alias: {
    "@": "/",
    prismaClient: resolve(__dirname, "./prisma/generated/prisma"),
  },
  ssr: true,
  server: {
    port: 3000, // Elastic Beanstalk expects port 3000
  },
  build: {
    // Optional: Optimize for production
    hardSource: true,
  },
});
