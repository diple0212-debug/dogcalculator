
import React from 'react';
import { Link } from 'react-router-dom';

const tools = [
  {
    to: "/age",
    title: "나이 계산기",
    desc: "우리 강아지 사람 나이로 몇 살일까?",
    icon: "🎂",
    color: "bg-orange-100 text-orange-600",
    border: "border-orange-200"
  },
  {
    to: "/obesity",
    title: "비만도(BCS)",
    desc: "만져보고 체크하는 우리 아이 비만도",
    icon: "⚖️",
    color: "bg-blue-100 text-blue-600",
    border: "border-blue-200"
  },
  {
    to: "/food",
    title: "사료량 계산",
    desc: "무게와 활동량에 따른 맞춤 급여량",
    icon: "🥣",
    color: "bg-green-100 text-green-600",
    border: "border-green-200"
  },
  {
    to: "/dog-mbti",
    title: "강아지 MBTI",
    desc: "우리 아이 성격 유형 1분 분석",
    icon: "🧠",
    color: "bg-purple-100 text-purple-600",
    border: "border-purple-200"
  },
  {
    to: "/anxiety-test",
    title: "분리불안 진단",
    desc: "혼자 있을 때 아이의 마음 체크",
    icon: "🏠",
    color: "bg-red-100 text-red-600",
    border: "border-red-200"
  },
  {
    to: "/health-advisor",
    title: "AI 건강상담",
    desc: "증상으로 물어보는 AI 수의사",
    icon: "🤖",
    color: "bg-indigo-100 text-indigo-600",
    border: "border-indigo-200"
  }
];

const Home: React.FC = () => {
  return (
    <div className="space-y-10 py-4 max-w-4xl mx-auto">
      <section className="text-center space-y-3 px-4">
        <h1 className="text-4xl md:text-5xl font-black text-gray-800 tracking-tight leading-tight">
          똑똑한 집사의 <br className="md:hidden" />
          <span className="text-orange-500">반려견 건강 가이드</span>
        </h1>
        <p className="text-gray-500 text-lg font-medium">데이터와 AI로 시작하는 스마트한 반려생활</p>
      </section>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-6 px-4">
        {tools.map((tool) => (
          <Link 
            key={tool.to}
            to={tool.to}
            className={`group p-5 md:p-8 rounded-[2rem] border-2 ${tool.border} bg-white hover:shadow-xl transition-all active:scale-95 flex flex-col items-center text-center`}
          >
            <div className={`w-14 h-14 md:w-20 md:h-20 ${tool.color} rounded-2xl flex items-center justify-center text-3xl md:text-5xl mb-4 group-hover:rotate-6 transition-transform`}>
              {tool.icon}
            </div>
            <h3 className="font-black text-lg md:text-xl text-gray-800 mb-1">{tool.title}</h3>
            <p className="text-gray-400 text-xs md:text-sm leading-tight hidden md:block">{tool.desc}</p>
          </Link>
        ))}
      </div>

      <Link to="/faq" className="mx-4 block p-6 bg-gray-800 rounded-3xl text-white hover:bg-gray-700 transition-colors shadow-lg">
        <div className="flex justify-between items-center">
          <div>
            <h3 className="text-xl font-bold mb-1">초보 집사를 위한 필수 가이드 📘</h3>
            <p className="text-gray-400 text-sm">보호자들이 가장 많이 묻는 건강 상식 15가지</p>
          </div>
          <span className="text-2xl animate-pulse">➔</span>
        </div>
      </Link>

      <section className="px-4 py-8 space-y-6">
        <h2 className="text-2xl font-black text-gray-800 border-l-4 border-orange-500 pl-4">최근 인기 칼럼</h2>
        <div className="space-y-4">
          <Link to="/faq" className="block bg-white p-5 rounded-2xl border border-gray-100 flex gap-4 items-center hover:shadow-md hover:border-orange-200 transition-all group">
            <div className="w-20 h-20 bg-orange-50 rounded-xl flex-shrink-0 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">🦴</div>
            <div>
              <h4 className="font-bold text-gray-800 mb-1 group-hover:text-orange-600 transition-colors">우리 아이 관절 건강, 5세부터 시작해야 하는 이유</h4>
              <p className="text-gray-400 text-xs leading-relaxed">전문의가 알려주는 슬개골 탈구 예방 수칙 및 체중 관리법</p>
            </div>
          </Link>
          <Link to="/faq" className="block bg-white p-5 rounded-2xl border border-gray-100 flex gap-4 items-center hover:shadow-md hover:border-orange-200 transition-all group">
            <div className="w-20 h-20 bg-green-50 rounded-xl flex-shrink-0 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">🌿</div>
            <div>
              <h4 className="font-bold text-gray-800 mb-1 group-hover:text-orange-600 transition-colors">강아지에게 먹여도 되는 안전한 과일 리스트</h4>
              <p className="text-gray-400 text-xs leading-relaxed">당뇨가 걱정된다면 블루베리! 절대 금지 식품인 포도와 양파 구분법</p>
            </div>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
