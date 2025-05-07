import NextAuth, { Session, User } from "next-auth";

import { JWT } from "next-auth/jwt";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const { username, password } = credentials ?? {};

        // 실제 DB 또는 API를 통한 사용자 인증 로직
        if (username === "newlec" && password === "1234") {
          // 34번줄의 user객체는 return된 객체를 의미한다.
          return {
            id: "1",
            name: "newlec",
            // 확장된 User 속성(next-auth.d.ts)
            username: "newlec_user",
            roles: ["ADMIN", "MEMBER"],
          };
        }

        return null;
      },
    }),
  ],
  // jwt의 5가지 속성 외에 추가적인 속성을 추가하기 위해서는 callbacks를 이용하여 jwt를 수정할 수 있다.
  callbacks: {
    // 여기서 user는 17번 줄의 authorize에서 반환한 객체를 의미한다.
    async jwt({ token, user }: { token: JWT; user: User }) {
      if (user) {
        token.id = user.id;
        token.username = user.username;
        token.roles = user.roles;
      }
      return token;
    },

    async session({ session, token }: { session: Session; token: JWT }) {
      if (token) {
        session.id = token.id;
        session.username = token.username;
        session.roles = token.roles;
      }
      return session;
    },
  },
  pages: {
    signIn: "/login",
  },
  session: {
    strategy: "jwt",
  },
  secret: process.env.AUTH_SECRET,
});

export { handler as GET, handler as POST };
