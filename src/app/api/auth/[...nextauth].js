import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';
import { connectToDatabase } from '../../../../lib/db';
import User from '../models/user';

export default NextAuth({
    providers: [
        Providers.Credentials({
            async authorize(credentials) {
                const client = await connectToDatabase();

                const user = await User.findOne({ email: credentials.email });

                if (user && user.password === credentials.password) {
                    return Promise.resolve(user);
                } else {
                    return Promise.resolve(null);
                }
            }
        })
    ],
    database: process.env.MONGODB_URI,
});
