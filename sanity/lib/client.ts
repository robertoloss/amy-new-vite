import { createClient } from "@sanity/client";

export const client = createClient({
  apiVersion : "2023-12-10",
  dataset : "prod_vite",
  projectId : "qyyz7qna",
  useCdn : false,
})
