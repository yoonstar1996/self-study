"use client";

import { useEffect, useState } from "react";

import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";

export default function SignupPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [nickname, setNickname] = useState("");
  const [phone, setPhone] = useState("");

  const [isSent, setIsSent] = useState(false);
  const [isVerified, setIsVerified] = useState(false);
  const [alreadySignedUp, setAlreadySignedUp] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // 이메일 인증 후 새 탭에서 들어온 경우 유저 정보 확인
  useEffect(() => {
    const checkSession = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (user) {
        setEmail(user.email ?? "");
        setIsVerified(true);

        const { data: existingUser } = await supabase
          .from("users")
          .select("user_id")
          .eq("user_id", user.id)
          .maybeSingle();

        if (existingUser) {
          setAlreadySignedUp(true);
        }
      }
    };

    checkSession();
  }, []);

  const handleSendEmail = async (e: React.FormEvent) => {
    e.preventDefault();

    // 중복 이메일 확인
    const { data: existingUser, error: checkError } = await supabase
      .from("users")
      .select("email")
      .eq("email", email)
      .maybeSingle();

    if (existingUser) {
      setError("이미 가입된 이메일입니다. 로그인 페이지로 이동해주세요.");
      return;
    }

    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `${location.origin}/signup`,
      },
    });

    if (error) {
      if (error.message.includes("User already registered")) {
        setError("이미 가입된 이메일입니다. 로그인 페이지로 이동해주세요.");
      } else {
        setError(error.message);
      }
      return;
    }

    setIsSent(true);
  };

  const handleCompleteSignup = async () => {
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) return;

    const { error } = await supabase.from("users").insert({
      user_id: user.id,
      email: user.email,
      name,
      nickname,
      phone_number: phone,
    });

    if (!error) router.push("/");
  };

  return (
    <div className="max-w-md mx-auto p-6">
      {!isVerified ? (
        <form onSubmit={handleSendEmail} className="flex flex-col gap-3">
          <h2 className="text-lg font-semibold">회원가입</h2>

          <input
            type="email"
            placeholder="이메일"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border p-2 rounded"
            required
          />

          <input
            type="password"
            placeholder="비밀번호"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border p-2 rounded"
            required
          />

          <button
            type="submit"
            className="bg-blue-600 text-white py-2 rounded disabled:opacity-50"
            disabled={isSent}
          >
            인증 이메일 전송
          </button>

          {isSent && (
            <p className="text-green-600 text-sm">
              인증 메일이 전송되었습니다. 메일함을 확인해주세요. <br />
              <span className="text-gray-600">
                이 탭은 닫고, 새로 열린 탭에서 회원가입을 마무리해주세요.
              </span>
            </p>
          )}

          {error && (
            <>
              <p className="text-red-500 text-sm">{error}</p>
              {error.includes("이메일") && (
                <button
                  onClick={() => router.push("/login")}
                  className="bg-blue-500 text-white py-1 px-3 rounded mt-2"
                >
                  로그인 하러가기
                </button>
              )}
            </>
          )}
        </form>
      ) : alreadySignedUp ? (
        <div className="text-center space-y-4">
          <p className="text-gray-700">이미 가입된 계정입니다.</p>
          <button
            onClick={() => router.replace("/login")}
            className="bg-blue-600 text-white py-2 px-4 rounded"
          >
            로그인 하러 가기
          </button>
        </div>
      ) : (
        <div className="flex flex-col gap-3">
          <h2 className="text-lg font-semibold">추가 정보 입력</h2>

          <input
            type="email"
            value={email}
            disabled
            className="border p-2 rounded bg-gray-100"
          />

          <input
            type="password"
            value="********"
            disabled
            className="border p-2 rounded bg-gray-100"
          />

          <input
            type="text"
            placeholder="이름"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border p-2 rounded"
          />

          <input
            type="text"
            placeholder="닉네임"
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
            className="border p-2 rounded"
          />

          <input
            type="text"
            placeholder="전화번호"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="border p-2 rounded"
          />

          <button
            onClick={handleCompleteSignup}
            className="bg-blue-600 text-white py-2 rounded"
          >
            회원가입 완료
          </button>
        </div>
      )}
    </div>
  );
}
