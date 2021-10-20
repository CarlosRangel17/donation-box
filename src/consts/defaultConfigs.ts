const base = process.env.NEXT_PUBLIC_ENV_BASE || "www";

export const successStatusCodes: number[] = [200, 201];

export default {
  baseUrl: `https://${base}.example.com/`,
  development: process.env.NODE_ENV !== "production",
  production: process.env.NEXT_PUBLIC_ENV_BASE === "www",
};
