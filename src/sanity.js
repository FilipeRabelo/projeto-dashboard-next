// skh6SB5ESTQ2CYuEqduw8NQMJkqEHDF7ttUpFDgnrtvJq26QW8WJigiRedC8QnDlEx0csswUqv1WVR7XyIU7tEWF1A9dyDnKxbYLHFmb9Df1CHiGoTHjXK4vP0o0CpjJLeWDownzNPmfpXQIftDji2YCH6LO7YEByHLYX5g06UyNgZcK9ltU

import { createClient } from "next-sanity";

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_DATASET,
  apiVersion: process.env.NEXT_PUBLIC_API_VERSION,
  useCdn: process.env.NEXT_PUBLIC_USE_CDN,
  token: process.env.NEXT_PUBLIC_TOKEN
});

export default client;