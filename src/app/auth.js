import { connectDB } from "@/lib/db/connectDB";
import { UserModel } from "@/lib/models/User";
import NextAuth from "next-auth";
import Google from "next-auth/providers/google";

// async function handleLogin(obj) {
//   await connectDB();
//   const user = await UserModal.findOne({ email: obj.email });
//   if (user) {
//     return user;
//   } else {
//     let newUser = await UserModel(obj);
//     newUser = await newUser.save();
//     return newUser;
//   }
// }

async function handleLogin(obj) {
  await connectDB();
  const user = await UserModel.findOne({ email: obj.email }); // corrected UserModal to UserModel
  if (user) {
    return user;
  } else {
    let newUser = new UserModel(obj); // Correcting the way of instantiation
    newUser = await newUser.save();
    return newUser;
  }
}


export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [Google],
  callbacks: {
    async signIn({ account, profile }) {
      if (account.provider === "google") {
        let obj = {
          firstName: profile.given_name,
          lastName: profile.family_name,
          email: profile.email,
          picture: profile.picture,
        };
        const user = await handleLogin(obj);
        return { user }; // Do different verification for other providers that don't have `email_verified`
      }
    },
    async jwt({ token }) {
      const user = await handleLogin({ email: token.email });
      token.role = user.role;
      token._id = user._id;
      return token;
    },
    session({ session, token }) {
      session.user._id = token._id;
      session.user.role = token.role;
      return session;
    },
  },
});