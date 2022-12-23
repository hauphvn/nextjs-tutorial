import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import * as process from "process";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import clientPromise from "lib/mongodb";

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: `${process.env.GOOGLE_CLIENT_ID}`,
      clientSecret: `${process.env.GOOGLE_CLIENT_SECRET}`
    })
  ],
  adapter: MongoDBAdapter(clientPromise),
  secret: `${process.env.NEXTAUTH_SECRET}`,
  callbacks: {
    // async redirect({ url, baseUrl }) {
    //   return url
    // },
    // async jwt({
    //             token, user
    //           }) {
    //   if (user) {
    //     token.id = user.id
    //   }
    //   return token;
    // },
    // async session({ session, token }) {
    //   if (session.user && token?.id) {
    //     const newUser = {
    //       ...session.user,
    //       id: token.id
    //     }
    //     session.user = {...newUser};
    //   }
    //   return session;
    // },
    async redirect({ url, baseUrl }) {
      if (url.startsWith('/')) return `${baseUrl}${url}`
      else if (new URL(url).origin === baseUrl) return url
      return baseUrl;
    }
  },

})
