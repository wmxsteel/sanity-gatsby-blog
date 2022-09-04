export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "6313fbd2892a15077963826b",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-kddwedet",
                  apiId: "080624d0-7d7d-419d-bee5-883ac7b25c19",
                },
                {
                  buildHookId: "6313fbd2063a0907f7a88c84",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-si37rxc4",
                  apiId: "6af3d5e1-81de-4988-8374-824887b9c81e",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/wmxsteel/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-si37rxc4.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
