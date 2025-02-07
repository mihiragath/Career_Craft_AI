import { Inngest } from "inngest";

export const inngest = new Inngest({
  id: "Sensai",
  name: "Sensai",
  credentials: {
    gemini: {
      apiKey: process.env.GEMINI_API_KEY,
    },
  },
});
