import { verifyPassword } from './../../../lib/auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { checkExistingUser } from '../../../lib/db';
import NextAuth, { NextAuthOptions } from 'next-auth';

const authOptions: NextAuthOptions = {
  secret: process.env.NEXT_PUBLIC_SECRET,
  providers: [
    CredentialsProvider({
      name: 'Login with email and password',
      type: 'credentials',
      //@ts-ignore
      async authorize({ email, password }: Record<string, string | undefined>) {
        if (!email || !password) {
          return null;
        }
        const user = await checkExistingUser(email);
        if (!user) {
          return null;
        }
        const isValid = await verifyPassword(password, user.password);
        if (!isValid) {
          return null;
        }
        if (user && isValid) return user.email;
      },
    }),
  ],
};

export default NextAuth(authOptions);
