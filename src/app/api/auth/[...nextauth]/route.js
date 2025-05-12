import CredentialsProvider from "next-auth/providers/credentials";
import connect from "@/lib/mongodb";
import User from "@/models/User";
import bcrypt from "bcrypt";

export const authOptions = {
  adapter: MongoDBAdapter({
    db: (await clientPromise).db(),
  }),
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
          const user = await User.findOne({ email: credentials?.email });
          if (user) {
            const isPasswordCorrect = await bcrypt.compare(
              credentials?.password,
              user.password
            );
            if (isPasswordCorrect) {
              return user;
            }
          }
        } catch (error) {
          throw new Error(error);
        }
      },
    }),
  ],
  //   session: {
  //     strategy: "jwt",
  //   },
  //   secret: process.env.NEXTAUTH_SECRET,
  //   pages: {
  //     signIn: "/auth/signin",
  //     error: "/auth/error",
  //   },
};

// const handler = NextAuth(authOptions);
// export { handler as GET, handler as POST };
