import image1 from "./Images/ImportSources.png"
import image2 from "./Images/EnrichBackground.png" 
import image3 from "./Images/publish_pdp_blue.png" 
import image4 from "./Images/Retailer_Sources_Simplified.png"
import image5 from "./Images/Brand_Products.png"


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

export const moreInfoItems = [
  {
    heading: "Retailers & Marketplaces",
    subHeading:
      "Bring new suppliers online in minutes. Slash your time to market.",
    description: [
      "Effortlessly collect product information from suppliers or brands.",
      "Automatically standardize data to your content specifications.",
      "Improve the quality of your product listings to drive conversion.",
      "Integrate with your existing systems via a product feed.",
    ],
    image: image4,
  },
  {
    heading: "Brands",
    subHeading: "Enrich and update your products on any channel. Sell more.",
    description: [
      "Import your products from Shopify, spreadsheets, or your website.",
      "Generate descriptions, images, and assets consistent with your brand.",
      "Publish accurate product information to all of your sales channels.",
      "Optimize your messaging and listing quality to maximize sales.",
    ],
    image: image5,
  },
];