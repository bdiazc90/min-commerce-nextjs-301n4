import NextAuth from "next-auth"
import Google from "next-auth/providers/google"

import { PrismaAdapter } from "@auth/prisma-adapter"
import { prisma } from "@/lib/db"

export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: PrismaAdapter(prisma),
  session: { strategy: "jwt" },
  providers: [
    Google
  ],
  callbacks: {
    session({ session, token }) {
      if (token.sub && session.user) {
        session.user.id = token.sub
      }
      if (token.role && session.user) {
        session.user.role = token.role as string
      }
      return session
    },
    jwt({ token, user }) {
      if (user) {
        token.sub = user.id
        // Asignar role basado en el email
        token.role = user.email === "bruno@enter.edu.pe" ? "admin" : "user"
      }
      return token
    },
  },
})