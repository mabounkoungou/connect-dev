
import { db } from "@/db";
import { DrizzleAdapter } from "@auth/drizzle-adapter";
import GoogleProvider from "next-auth/providers/google";

import NextAuth from "next-auth";
import type { Adapter } from "next-auth/adapters";
//import { authConfig } from "@/lib/auth";

const handler = NextAuth({
    adapter: DrizzleAdapter(db) as Adapter, 
     providers: [
        GoogleProvider({
          clientId: process.env.GOOGLE_CLIENT_ID!,
          clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
        }),
        // ...add more providers here
      ],
});

export { handler as GET, handler as POST };
