// seeds.js
// Edit this file to add / update products.
// Copy an existing block and change the fields.

const seeds = [
  {
    title: "Snippet Vault · Seed",
    priceLabel: "$3",
    priceType: "paid", // "paid" or "free"
    categories: ["paid", "writing"],
    description:
      "A tiny, local-only snippet bank for writers. Save fragments, quotes, and dialogue with tags, then filter as you write.",
    tags: ["local-first", "writing", "snippets"],
    primaryCtaLabel: "Buy with Stripe",
    primaryCtaUrl: "https://buy.stripe.com/your_snippet_vault_link",
    secondaryCtaLabel: "View README",
    secondaryCtaUrl: "#",
  },

  {
    title: "Dark Metaphor Generator",
    priceLabel: "$4",
    priceType: "paid",
    categories: ["paid", "writing", "weird"],
    description:
      "Feed it a line and get back strange, macabre metaphor variants. Built for dark-lit authors, poets, and chaos-adjacent thinkers.",
    tags: ["generator", "dark-lit", "experiment"],
    primaryCtaLabel: "Buy with Stripe",
    primaryCtaUrl: "https://buy.stripe.com/your_dark_metaphor_link",
    secondaryCtaLabel: "Demo GIF",
    secondaryCtaUrl: "#",
  },

  {
    title: "LibraryOS · Free Seed",
    priceLabel: "Free",
    priceType: "free",
    categories: ["free", "writing"],
    description:
      "Skeleton of a private EPUB library: shelf, simple metadata, and placeholder slots for your future features.",
    tags: ["library", "epub", "starter"],
    primaryCtaLabel: "Download .zip",
    primaryCtaUrl: "/SeedEngineer/thanks/libraryos.html",
    secondaryCtaLabel: "View source",
    secondaryCtaUrl: "#",
  },

  {
    title: "MicroGame Market · Seed",
    priceLabel: "$3",
    priceType: "paid",
    categories: ["paid", "weird"],
    description:
      "A tiny storefront template for showcasing 1–5 minute web experiments: microgames, proto-apps, and interactive curiosities.",
    tags: ["template", "games", "storefront"],
    primaryCtaLabel: "Buy with Stripe",
    primaryCtaUrl: "https://buy.stripe.com/your_microgame_market_link",
    secondaryCtaLabel: "See sample data",
    secondaryCtaUrl: "#",
  },

  {
    title: "TEST · Seed",
    priceLabel: "$3",
    priceType: "paid",
    categories: ["paid", "weird"],
    description:
      "A tiny storefront template for showcasing 1–5 minute web experiments: microgames, proto-apps, and interactive curiosities.",
    tags: ["template", "games", "storefront"],
    primaryCtaLabel: "Buy with Stripe",
    primaryCtaUrl: "https://buy.stripe.com/your_microgame_market_link",
    secondaryCtaLabel: "See sample data",
    secondaryCtaUrl: "#",
  },
];
