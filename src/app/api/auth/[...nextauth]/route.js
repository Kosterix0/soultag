import CredentialsProvider from "next-auth/providers/credentials";
import connect from "@/lib/mongodb";
import User from "@/models/User";
import bcrypt from "bcrypt";
import NextAuth from "next-auth";
import { SigninFormSchema } from "@/lib/definitions";

export const authOptions = {
  providers: [
    CredentialsProvider({
      id: "credentials",
      name: "Credentials",
      credentials: {
        name: { label: "name", type: "text" },
        email: { label: "email", type: "email" },
        password: { label: "password", type: "password" },
      },
      async authorize(credentials) {
        await connect();

        try {
          const { email, password } = await SigninFormSchema.parseAsync(
            credentials
          );

          const user = await User.findOne({ email });
          if (user) {
            const isPasswordCorrect = await bcrypt.compare(
              password,
              user.password
            );
            if (isPasswordCorrect) {
              console.log("User found:", user);
              return user;
            }
          }
        } catch (error) {
          console.error("Error during authorization:", error);
          throw new Error(error);
        }
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
};

// const handler = NextAuth(authOptions);
// export { handler as GET, handler as POST };

export const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
