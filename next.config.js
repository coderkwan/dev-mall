/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    SUPABASE_ANON:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp4b2hubnVnd3B1cHhieWdrdnpwIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTMzMDgxMjAsImV4cCI6MTk2ODg4NDEyMH0.4sUIplowoB3DCWq8M9ZLTJJdmhjKqc74HfInzu1M3sg",
    SUPABASE_URL: "https://zxohnnugwpupxbygkvzp.supabase.co",
  },
};

module.exports = nextConfig;
