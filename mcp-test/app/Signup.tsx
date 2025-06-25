export default function Signup() {
  return (
    <div className="bg-white max-w-[375px] min-h-screen mx-auto px-6 py-8 flex flex-col">
      {/* 타이틀 */}
      <h1 className="text-[40px] font-normal font-['TAEBAEK_milkyway'] text-[#312c22] mb-2">
        회원가입
      </h1>
      <p className="text-base text-black mb-8 whitespace-pre-line">
        신나는 저축,{"\n"}티끌 모아 태산
      </p>

      {/* 이름 입력 */}
      <div className="mb-4">
        <label className="block text-sm font-medium mb-2">이름</label>
        <input
          type="text"
          className="w-full h-[57px] rounded-[9px] border border-[#adadad] px-4 text-sm"
          placeholder="이름을 입력하세요"
        />
      </div>

      {/* 아이디 입력 */}
      <div className="mb-4">
        <label className="block text-sm font-medium mb-2">아이디</label>
        <input
          type="text"
          className="w-full h-[57px] rounded-[9px] border border-[#adadad] px-4 text-sm"
          placeholder="아이디를 입력하세요"
        />
      </div>

      {/* 비밀번호 입력 */}
      <div className="mb-8">
        <label className="block text-sm font-medium mb-2">비밀번호</label>
        <input
          type="password"
          className="w-full h-[57px] rounded-[9px] border border-[#adadad] px-4 text-sm"
          placeholder="비밀번호를 입력하세요"
        />
      </div>

      {/* 회원가입 완료 버튼 */}
      <button className="w-full h-[50px] bg-[#f19209] text-white rounded-[12px] text-lg font-medium">
        회원가입 완료
      </button>
    </div>
  );
}
