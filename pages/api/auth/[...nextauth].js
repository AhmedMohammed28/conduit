import { getCurrentUser, loginUser } from "@/lib/userApi";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    CredentialsProvider({
      async authorize(credentials, req) {
        // Add logic here to look up the user from the credentials supplied
        const userData = {
          user: {
            email: credentials.email,
            password: credentials.password,
          },
        };
        const user = await loginUser(userData);
        if (user) {
          return user;
        } else {
          // If you return null then an error will be displayed advising the user to check their details.
          return null;
        }
      },
    }),
    // ...add more providers here
  ],
  callbacks: {
    async signIn({ user, account, metadata }) {
      return true;
    },
    async jwt(token, user) {
      if (user) {
        token = user.user.token;
      }

      return token;
    },
    async session({ session, token }) {
      session.accessToken = token;
      return session;
    },
  },
};

export default NextAuth(authOptions);
