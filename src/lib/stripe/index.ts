import Stripe from "stripe";

const stripeKey = process.env.STRIPE_SECRET_KEY;

let stripeClient: Stripe | null = null;

if (stripeKey) {
  stripeClient = new Stripe(stripeKey, {
    apiVersion: '2025-02-24.acacia',
    appInfo: {
      name: 'Leaderboard Saas',
      version: '0.1.0',
    },
  });
} else {
  console.warn("Stripe is not configured. Using mock Stripe instance.");
}

// Define a type-safe mock fallback
const stripeFallback = {
  charges: {
    create: async () => {
      throw new Error("Stripe not configured");
    },
  },
  paymentIntents: {
    create: async () => {
      throw new Error("Stripe not configured");
    },
  },
  // Add more methods if needed
} as unknown as Stripe;

export const stripe: Stripe = stripeClient ?? stripeFallback;
