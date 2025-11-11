const seeds = [
  {
    title: "Snippet Vault · Seed",
    priceLabel: "$3",
    priceType: "paid",
    categories: ["paid", "writing"],
    featured: true,
    description: "A tiny, local-only snippet bank for writers. Save fragments, quotes, and dialogue with tags.",
    tags: ["local-first", "writing", "snippets"],
    primaryCtaLabel: "Buy with Stripe",
    primaryCtaUrl: "https://buy.stripe.com/your_snippet_vault_link"
  },
  {
    title: "Dark Metaphor Generator",
    priceLabel: "$4",
    priceType: "paid",
    categories: ["paid", "writing", "weird"],
    featured: true,
    description: "Feed it a line and get back strange, macabre metaphor variants for dark literature.",
    tags: ["generator", "dark-lit", "experiment"],
    primaryCtaLabel: "Buy with Stripe",
    primaryCtaUrl: "https://buy.stripe.com/your_dark_metaphor_link"
  },
  {
    title: "LibraryOS · Free Seed",
    priceLabel: "Free",
    priceType: "free",
    categories: ["free", "writing"],
    featured: false,
    description: "Skeleton of a private EPUB library with shelf and metadata placeholders.",
    tags: ["library", "epub", "starter"],
    primaryCtaLabel: "Download .zip",
    primaryCtaUrl: "/downloads/libraryos-seed.zip"
  }
];
