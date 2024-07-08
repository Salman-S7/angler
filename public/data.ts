import image1 from "./Images/ImportSources.png"
import image2 from "./Images/EnrichBackground.png" 
import image3 from "./Images/publish_pdp_blue.png" 

export const navItems = [
    {
      name: "ANGLER",
      link: "/",
    },
    {
      name: "About",
      link: "/about",
    },
    {
      name: "Demo",
      link: "/contact",
    },
];

export const howItWorksItems = [
  {
    heading: "Import",
    description: "Seamlessly import data from anywhere and maintain a single source of truth for product information.",
    image: image1
  },
  {
    heading: "Enrich",
    description: "Automatically enrich product images, descriptions, and attributes to improve discoverability and conversion.",
    image: image2
  },
  {
    heading: "Publish",
    description: "Generate a clean data feed to publish detailed product listings to your storefront and distribution channels.",
    image: image3
  }
]
  