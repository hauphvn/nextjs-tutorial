import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { providers } from "next-auth/core/routes";
import * as process from "process";

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: `${process.env.GOOGLE_CLIENT_ID}`,
      clientSecret: `${process.env.GOOGLE_CLIENT_SECRET}`
    })
  ],
  secret: `${process.env.NEXTAUTH_SECRET}`,
  callbacks: {
    // async redirect({ url, baseUrl }) {
    //   return url
    // },
    async redirect({url, baseUrl}) {
      if(url.startsWith('/')) return `${baseUrl}${url}`
      else if(new URL(url).origin === baseUrl) return url
      return baseUrl;
    }
  }
})
