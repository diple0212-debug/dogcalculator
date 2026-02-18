
import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import AdPlaceholder from '../components/AdPlaceholder';

export const POSTS_DATA = [
  {
    id: '15',
    title: '건식 사료 vs 습식 사료 완벽 비교: 우리 아이에게 딱 맞는 선택 가이드',
    excerpt: '사료 결정 장애는 이제 그만! 건식의 편리함과 습식의 영양 사이에서 고민하는 집사님들을 위해 수의학적 관점의 장단점과 혼합 급여 비법을 공개합니다.',
    date: '2026.02.18',
    category: '영양/식단',
    icon: '🥣🥫',
    color: 'bg-orange-50'
  },
  {
    id: '14',
    title: '강아지 귀 염증 관리와 올바른 귀 청소법: 원인부터 주기까지 완벽 가이드',
    excerpt: '자꾸 귀를 털고 긁는 우리 아이, 혹시 외이염일까요? 강아지 귀 구조의 비밀부터 전문가가 알려주는 안전한 귀 청소 기술까지 정리했습니다.',
    date: '2026.02.17',
    category: '건강관리/위생',
    icon: '👂🐕',
    color: 'bg-amber-50'
  },
  {
    id: '13',
    title: '강아지 구토 색깔별 원인과 응급처치: 색깔만 봐도 건강이 보인다 (2026)',
    excerpt: '노란토, 하얀토, 피토... 강아지 구토 색깔에 담긴 위험 신호들. 집에서 지켜봐도 되는 경우와 즉시 병원에 달려가야 할 골든타임을 구분해 드립니다.',
    date: '2026.02.15',
    category: '응급처치/질병',
    icon: '🤮🐕',
    color: 'bg-yellow-50'
  },
  {
    id: '12',
    title: '강아지 영양제 추천 및 고르는 법: 2026년 수의학 전문가가 제안하는 필수 성분 가이드',
    excerpt: '관절, 피부, 장 건강... 영양제 홍수 시대에 내 아이에게 꼭 필요한 것만 고르는 혜안. 실패 없는 선택을 위한 3대 핵심 기준을 공개합니다.',
    date: '2026.02.14',
    category: '영양/건강',
    icon: '💊🐕',
    color: 'bg-emerald-50'
  },
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
          placeholder="궁금한 키워드를 검색해보세요 (예: 사료, 영양)"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full pl-12 pr-4 py-4 bg-white border-2 border-orange-100 rounded-2xl shadow-sm focus:border-orange-500 focus:ring-4 focus:ring-orange-500/10 outline-none transition-all font-medium text-gray-700"
        />
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
