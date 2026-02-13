
import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import AdPlaceholder from '../components/AdPlaceholder';

export const POSTS_DATA = [
  {
    id: '11',
    title: '강아지 눈물 자국 원인과 지우는 법: 2026년 집사들의 필독 건강 관리 가이드',
    excerpt: '말티즈, 비숑 집사들의 최대 고민 눈물 자국! 단순한 미용 문제가 아닌 건강 신호일 수 있습니다. 과학적 원인 분석부터 식단 개선까지.',
    date: '2026.02.13',
    category: '건강관리/위생',
    icon: '💧🐕',
    color: 'bg-blue-50'
  },
  {
    id: '10',
    title: '노령견 건강 관리 필수 체크리스트: 우리 아이의 시계를 천천히 돌리는 법 (2026)',
    excerpt: '어느덧 하얘진 입 주변, 느려진 걸음걸이... 노화는 질병이 아니라 과정입니다. 7세 이후 시니어견을 위한 수의학적 7단계 케어 가이드.',
    date: '2026.02.12',
    category: '시니어케어',
    icon: '👴🐕',
    color: 'bg-indigo-50'
  },
  {
    id: '9',
    title: '강아지가 절대 먹으면 안 되는 치명적인 음식 10가지 (2026년 업데이트)',
    excerpt: '무심코 준 간식 한 입이 반려견의 생명을 위협할 수 있습니다. 수의학적 근거로 정리한 반드시 피해야 할 금기 음식 완벽 가이드.',
    date: '2026.02.11',
    category: '영양/안전',
    icon: '🚫',
    color: 'bg-red-50'
  },
  {
    id: '8',
    title: '강아지가 먹으면 안 되는 음식 10가지 (상세 분석)',
    excerpt: '반려견의 건강을 위해 집사가 꼭 알아야 할 금기 음식 리스트와 응급처치 방법.',
    date: '2026.02.08',
    category: '응급처치/영양',
    icon: '🍖',
    color: 'bg-orange-50'
  },
  {
    id: '7',
    title: '2026년 반려동물 트렌드: AI와 함께하는 펫 테크와 헬스케어 혁명',
    excerpt: '반려동물을 가족처럼 여기는 "펫 휴머니제이션"을 넘어, 이제는 AI가 24시간 아이들의 건강을 지키는 시대입니다. 2026년에 펼쳐질 놀라운 변화들을 미리 만나보세요.',
    date: '2026.02.08',
    category: '트렌드/IT',
    icon: '🚀',
    color: 'bg-purple-50'
  },
  {
    id: '4',
    title: '강아지가 초콜릿을 먹었어요! 치사량과 골든타임 응급처치',
    excerpt: '초콜릿 속 테오브로민 성분이 강아지에게 왜 치명적일까요? 먹은 즉시 해야 할 행동과 병원 방문 전 체크리스트를 정리했습니다.',
    date: '2026.02.05',
    category: '응급처치',
    icon: '🍫',
    color: 'bg-red-50'
  },
  {
    id: '5',
    title: '슬개골 탈구 예방부터 관리까지: 집사가 알아야 할 필수 지식',
    excerpt: '대한민국 소형견의 80%가 겪는 슬개골 탈구. 수술 없이 관리하는 법과 관절 건강을 지키는 생활 습관을 공개합니다.',
    date: '2026.02.02',
    category: '건강관리',
    icon: '🦴',
    color: 'bg-green-50'
  },
  {
    id: '6',
    title: '노령견과 행복한 노후 보내기: 노화 징후와 케어 팁',
    excerpt: '7세 이후부터 시작되는 강아지의 노년기. 시력 저하, 치매(CCD), 식단 조절 등 시니어견의 삶의 질을 높이는 방법을 알아봅니다.',
    date: '2026.01.28',
    category: '시니어케어',
    icon: '🐕',
    color: 'bg-indigo-50'
  },
  {
    id: '1',
    title: '우리 강아지가 나를 보고 웃는 진짜 이유 (과학적 분석)',
    excerpt: '강아지의 미소는 사람과 같을까요? 안면 근육의 구조부터 진화 심리학적 관점에서 분석한 강아지 웃음의 비밀을 공개합니다.',
    date: '2026.01.20',
    category: '행동심리',
    icon: '😊',
    color: 'bg-yellow-50'
  },
  {
    id: '2',
    title: '강아지 양치질, 실패 없이 3분 만에 끝내는 집사의 비법',
    excerpt: '치주 질환은 수명 단축의 주범! 양치를 싫어하는 아이들도 마법처럼 입을 벌리게 만드는 3단계 적응 훈련법을 소개합니다.',
    date: '2026.01.12',
    category: '건강관리',
    icon: '🪥',
    color: 'bg-blue-50'
  },
  {
    id: '3',
    title: '요즘 유행하는 강아지 수제 간식 레시피 Best 3',
    excerpt: '첨가물 걱정 없는 건강한 수제 간식! 집에서 에어프라이어로 뚝딱 만드는 영양 만점 레시피와 주의사항을 정리했습니다.',
    date: '2026.01.05',
    category: '트렌드/레시피',
    icon: '🍳',
    color: 'bg-orange-50'
  }
];

const Posts: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredPosts = useMemo(() => {
    const term = searchTerm.toLowerCase().trim();
    if (!term) return POSTS_DATA;
    
    return POSTS_DATA.filter(post => 
      post.title.toLowerCase().includes(term) ||
      post.excerpt.toLowerCase().includes(term) ||
      post.category.toLowerCase().includes(term)
    );
  }, [searchTerm]);

  return (
    <div className="max-w-4xl mx-auto space-y-8 px-4">
      <div className="text-center py-10 space-y-4">
        <h1 className="text-4xl font-black text-gray-800 tracking-tight">똑똑한 집사의 건강 칼럼</h1>
        <p className="text-gray-500 text-lg font-medium">반려견 전문가들이 전하는 생생한 지식과 팁</p>
      </div>

      <div className="relative max-w-lg mx-auto mb-12">
        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
          <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
        <input
          type="text"
          placeholder="궁금한 키워드를 검색해보세요 (예: 눈물자국, 사료)"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full pl-12 pr-4 py-4 bg-white border-2 border-orange-100 rounded-2xl shadow-sm focus:border-orange-500 focus:ring-4 focus:ring-orange-500/10 outline-none transition-all font-medium text-gray-700"
        />
        {searchTerm && (
          <button 
            onClick={() => setSearchTerm('')}
            className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-gray-600"
          >
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
            </svg>
          </button>
        )}
      </div>

      {filteredPosts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
          {filteredPosts.map((post) => (
            <Link 
              key={post.id} 
              to={`/posts/${post.id}`}
              className="group bg-white rounded-3xl border border-gray-100 overflow-hidden hover:shadow-2xl transition-all hover:-translate-y-1 flex flex-col"
            >
              <div className={`h-48 ${post.color} flex items-center justify-center text-7xl group-hover:scale-110 transition-transform`}>
                {post.icon}
              </div>
              <div className="p-6 space-y-3 flex-grow">
                <div className="flex justify-between items-center">
                  <span className="text-xs font-bold text-orange-500 px-2 py-1 bg-orange-50 rounded-full">{post.category}</span>
                  <span className="text-xs text-gray-400">{post.date}</span>
                </div>
                <h2 className="text-xl font-black text-gray-800 group-hover:text-orange-500 transition-colors leading-tight">
                  {post.title}
                </h2>
                <p className="text-gray-500 text-sm leading-relaxed line-clamp-2">
                  {post.excerpt}
                </p>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <div className="py-20 text-center animate-in zoom-in duration-300">
          <div className="text-6xl mb-4">🔍</div>
          <h3 className="text-xl font-bold text-gray-800 mb-2">검색 결과가 없습니다.</h3>
          <p className="text-gray-500">다른 키워드로 검색하거나 모든 글을 확인해보세요.</p>
          <button 
            onClick={() => setSearchTerm('')}
            className="mt-6 text-orange-500 font-bold underline"
          >
            검색어 초기화하기
          </button>
        </div>
      )}

      <AdPlaceholder placement="하단" />
    </div>
  );
};

export default Posts;
