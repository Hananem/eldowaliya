import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://eldawlyaeg.com",
      lastModified: new Date(),
    },
    {
      url: "https://eldawlyaeg.com/services",
      lastModified: new Date(),
    },
    {
      url: "https://eldawlyaeg.com/projects",
      lastModified: new Date(),
    },
    {
      url: "https://eldawlyaeg.com/contact",
      lastModified: new Date(),
    },
  ];
}