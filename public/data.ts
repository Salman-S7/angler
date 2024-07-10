import image1 from "./Images/ImportSources.png"
import image2 from "./Images/EnrichBackground.png" 
import image3 from "./Images/publish_pdp_blue.png" 
import image4 from "./Images/Retailer_Sources_Simplified.png"
import image5 from "./Images/Brand_Products.png"
import image6 from "./svgs/microsoft-logo.svg"
import image7 from "./svgs/meta-logo.svg";
import image8 from "./svgs/uber-eats-logo.svg";
import image9 from "./svgs/stanford-logo.svg";
import image10 from './Images/founder-1.jpeg';
import image11 from "./Images/ray.jpeg";



export const navItems = [
    {
      name: "ANGLER",
      link: "/",
    },
    {
      name: "About",
      link: "#about",
    },
    {
      name: "Demo",
      link: "/",
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

export const expertsFrom = [
  {
    title: "microsoft",
    image: image6,
  },
  {
    title: "meta",
    image: image7,
  },
  {
    title: "uber-eats",
    image: image8,
  },
  {
    title: "stanford",
    image: image9,
  },
];

export const founders = [
  {
    name: "Amay Aggarwal",
    image: image10,
    description:
      "Amay is the Co-Founder of Angler.He holds a Master's in Computer Science (AI/ML) and a Bachelor's in Management Science & Engineering from Stanford University.Previously, he was a Product Manager on the Uber AI team, where he led Catalog efforts to standardize, classify, & enrich the millions of products sold on Uber Eats.",
  },
  {
    name: "Ray Iyer",
    image: image11,
    description:
      "Ray is the co-founder of Angler. Before Angler, Ray spent 2 years as a Product Manager at Uber, where he led a XFN team to design and launch the end-to-end consumer and driver experiences for UberTasks (a 0->1 growth bet). Ray also launched the first foundational CPG Ads products (brand storefronts, sponsored items) on the Grocery & Retail marketplace. Ray has a MS and BS in Computer Science from Stanford, with an AI/ML specialization.",
  },
];