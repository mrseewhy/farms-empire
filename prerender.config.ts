export default {
  // Site URL for canonical URLs and OG tags
  siteUrl: "https://farmsempire.africa",

  // Routes to prerender
  routes: [
    {
      path: "/",
      priority: "1.0",
      meta: {
        title: "Farms Empire | Africa's leading United Nations SDG 2 intervention organization",
        description: "We are Africa's leading United Nations SDG 2 intervention organization against hunger and food insecurity. We are committed to ending hunger, achieving food security, improving nutrition, and promoting sustainable agriculture in Africa.",
      },
    },
    {
      path: "/who-we-are",
      priority: "0.8",
      meta: {
        title: "Who We Are | Farms Empire",
        description: "Bringing together landowners, communities, and experts for sustainable farms.",
      },
    },
    {
      path: "/our-story",
      priority: "0.8",
      meta: {
        title: "Our Story | Farms Empire",
        description: "We built this through years of real farming, not from a textbook.",
      },
    },
    {
      path: "/our-solution",
      priority: "0.8",
      meta: {
        title: "Our Solution | Farms Empire",
        description: "Africa has 60% of the world's uncultivated arable land but only contributes 10% of global agricultural output. We fix this.",
      },
    },
    {
      path: "/our-services",
      priority: "0.8",
      meta: {
        title: "Our Services | Farms Empire",
        description: "Consultancy, farm design, management, and market access under one roof.",
      },
    },
    {
      path: "/why-ujamaa",
      priority: "0.7",
      meta: {
        title: "Why Ujamaa? | Farms Empire",
        description: "The philosophy behind Africa's most effective communal farming model.",
      },
    },
    {
      path: "/sdg-2",
      priority: "0.7",
      meta: {
        title: "UN SDG 2 | Farms Empire",
        description: "Farming our way to Zero Hunger through sustainable agriculture.",
      },
    },
    {
      path: "/partner-with-us",
      priority: "0.9",
      meta: {
        title: "Partner With Us | Farms Empire",
        description: "Turn your idle land into a productive, income-generating farm asset.",
      },
    },
    {
      path: "/projects",
      priority: "0.8",
      meta: {
        title: "Projects | Farms Empire",
        description: "Real farms, real communities, real impact across Nigeria and Africa.",
      },
    },
    {
      path: "/publications",
      priority: "0.6",
      meta: {
        title: "Publications | Farms Empire",
        description: "Research, analysis, and knowledge from the field of communal agriculture.",
      },
    },
    {
      path: "/blog",
      priority: "0.7",
      meta: {
        title: "Blog | Farms Empire",
        description: "Stories, insights, and updates from the field of communal farming.",
      },
    },
    {
      path: "/faqs",
      priority: "0.5",
      meta: {
        title: "FAQs | Farms Empire",
        description: "Quick answers to common questions about partnering with Farms Empire.",
      },
    },
    {
      path: "/contact",
      priority: "0.7",
      meta: {
        title: "Contact Us | Farms Empire",
        description: "Reach out by phone, email, or visit any of our farm locations today.",
      },
    },
    {
      path: "/privacy-policy",
      priority: "0.3",
      meta: {
        title: "Privacy Policy | Farms Empire",
        description: "How we collect, use, protect, and manage your personal information.",
      },
    },
  ],

  // Dynamic routes (fetched at build time)
  async fetchDynamicRoutes() {
    const fs = await import("fs");
    const path = await import("path");
    const matter = (await import("gray-matter")).default;

    const contentDir = path.join(process.cwd(), "content/blog");
    const routes = [];

    if (fs.existsSync(contentDir)) {
      const files = fs.readdirSync(contentDir).filter((f) => f.endsWith(".mdx"));

      for (const file of files) {
        const filePath = path.join(contentDir, file);
        const fileContent = fs.readFileSync(filePath, "utf-8");
        const { data } = matter(fileContent);
        const id = file.replace(".mdx", "");

        routes.push({
          path: `/blog/${id}`,
          priority: "0.7",
          meta: {
            title: `${data.title} | Farms Empire`,
            description: data.excerpt || "",
          },
        });
      }
    }

    return routes;
  },
};
