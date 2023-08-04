import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const authOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        username: { label: "Username", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        // chech to see if email and password is valid
        if (!credentials.email || !credentials.password) {
          return nulll;
        }

        // cek kalo udah ada
        const user = await prisma.user.findUnique({
          where: {
            email: credentials.email,
          },
        });

        if (!user) {
          return null;
        }

        // cek cocok password
        const passwordsMatch = await bcrypt.compare(
          credentials.password,
          user.hashedPassword
        );

        // Password ga sama
        if (!passwordsMatch) {
          throw new Error("Passwordnya salah cuk");
        }

        // Jika user berhasil login
        return user;
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user, session, trigger }) {
      console.log("jwt callback", { token, user, session });

      if (trigger === "update" && session.name) {
        token.name = session.name;
      }

      if (user) {
        return {
          ...token,
          id: user.id,
          nomorAnggota: user.nomorAnggota,
        };
      }

      // update user name ke databse
      const newUser = await prisma.user.update({
        where: {
          id: token.id,
        },
        data: {
          name: token.name,
        },
      });
      console.log("update ", newUser);
      return token;
    },
    async session({ session, token, user }) {
      console.log("session callback", {
        session,
        token,
        user,
      });
      return {
        ...session,
        user: {
          ...session.user,
          id: token.id,
          nomorAnggota: token.nomorAnggota,
        },
      };
      return session;
    },

    async signOut({ req, res }) {
      await handleSignOut(req, res);
    },
  },

  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
  debug: process.env.NODE_ENV === "development",
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
