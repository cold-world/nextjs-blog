import { verifyPassword } from './../../../lib/auth';
import NextAuth from 'next-auth/next';
import CredentialsProvider from 'next-auth/providers/credentials';
import { checkExistingUser } from '../../../lib/db';

export default NextAuth({
  session: {
    strategy: 'jwt',
  },
  providers: [
    CredentialsProvider({
      name: 'Login with email and password',
      //@ts-ignore
      async authorize(credentials) {
        const user = await checkExistingUser(credentials!.email);
        if (!user) {
          return null;
        }
        const isValid = await verifyPassword(credentials!.password, user.password);
        if (!isValid) {
          return null;
        }
        return {
          user: user.email,
        };
      },
    }),
  ],
});
