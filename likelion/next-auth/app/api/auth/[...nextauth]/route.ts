// app/api/auth/[...nextauth]/route.ts

import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";

export const authOptions = {
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID!,
      clientSecret: process.env.GITHUB_SECRET!,
      authorization: { params: { scope: "repo user" } },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    // JWT에 accessToken과 login(username) 담기
    async jwt({ token, account, profile }) {
      if (account) {
        token.accessToken = account.access_token;
        // profile.login 에 GitHub 아이디가 들어있습니다
        token.login = (profile as any)?.login || token.login;
      }
      return token;
    },
    // 세션에 다시 꺼내서 주입
    async session({ session, token }) {
      session.accessToken = (token as any).accessToken;
      session.user.login = (token as any).login;
      return session;
    },
  },
  // User 타입 확장이 필요하면 next-auth.d.ts 에서 module augmentation
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
