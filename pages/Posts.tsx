
import React, { useState, useMemo, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AdPlaceholder from '../components/AdPlaceholder';

export const POSTS_DATA = [
  {
    id: '18',
    title: '반려견 이별 후 펫로스 증후군 극복하기: 마음의 치유를 위한 가이드',
    excerpt: '가족 같던 반려견을 떠나보낸 후 찾아오는 깊은 슬픔, 펫로스 증후군. 이를 건강하게 받아들이고 일상으로 돌아오기 위한 심리적 조언과 위로의 메시지를 전합니다.',
    date: '2026.02.21',
    category: '심리/위로',
    icon: '🌈🐕',
    color: 'bg-purple-50'
  },
  {
    id: '17',
    title: '강아지 치석 제거와 양치질 교육: 완벽한 구강 관리 가이드',
    excerpt: '강아지 수명을 결정하는 구강 건강! 치석이 쌓이면 단순한 입 냄새를 넘어 전신 질환으로 이어질 수 있습니다. 단계별 양치 교육법과 치석 관리 비법을 공개합니다.',
    date: '2026.02.20',
    category: '건강관리/위생',
    icon: '🦷🐕',
    color: 'bg-cyan-50'
  },
  {
    id: '16',
    title: '강아지 혈변 시 의심해 봐야 할 상황: 선홍색 변부터 흑변까지 완벽 가이드',
    excerpt: '갑작스러운 강아지의 피똥, 당황하지 마세요. 변의 색깔과 형태에 담긴 몸속 이상 신호와 즉시 병원에 달려가야 할 응급 상황을 정리했습니다.',
    date: '2026.02.19',
    category: '응급처치/질병',
    icon: '🩸🐕',
    color: 'bg-red-50'
  },
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
    title: '강아지 슬개골 탈구 예방과 관리법: 소형견 집사 필수 가이드',
    excerpt: '포메라니안, 푸들 등 소형견의 고질병 슬개골 탈구. 수술 전 예방할 수 있는 운동법과 생활 환경 개선 팁을 공개합니다.',
    date: '2026.02.10',
    category: '건강관리/질병',
    icon: '🦴🐕',
    color: 'bg-indigo-50'
  },
  {
    id: '9',
    title: '여름철 강아지 열사병 예방과 응급처치: 산책 전 꼭 확인하세요',
    excerpt: '뜨거운 아스팔트와 높은 습도, 강아지에게는 치명적일 수 있습니다. 열사병 증상 확인법과 체온을 낮추는 올바른 응급처치법.',
    date: '2026.02.08',
    category: '응급처치/안전',
    icon: '☀️🐕',
    color: 'bg-orange-50'
  },
  {
    id: '8',
    title: '강아지 양치질 싫어하는 아이를 위한 단계별 교육법',
    excerpt: '치석과 구취의 원인, 양치질! 억지로 시키면 더 싫어하게 됩니다. 간식을 활용한 긍정 강화 교육으로 즐거운 양치 시간을 만들어보세요.',
    date: '2026.02.05',
    category: '건강관리/위생',
    icon: '🪥🐕',
    color: 'bg-cyan-50'
  },
  {
    id: '7',
    title: '강아지 사료 보관법: 신선도를 유지하는 3가지 핵심 비결',
    excerpt: '사료도 유통기한보다 보관법이 중요합니다. 산패를 막고 영양소를 보존하는 올바른 보관 용기와 환경에 대해 알아봅니다.',
    date: '2026.02.03',
    category: '영양/식단',
    icon: '📦🥣',
    color: 'bg-stone-50'
  },
  {
    id: '6',
    title: '강아지 발바닥 습진(지간염) 원인과 홈케어 관리법',
    excerpt: '자꾸 발을 핥와는 우리 아이, 발가락 사이가 빨갛다면? 습진의 원인인 습기 관리부터 집에서 할 수 있는 안전한 케어 방법까지.',
    date: '2026.02.01',
    category: '건강관리/위생',
    icon: '🐾🐕',
    color: 'bg-rose-50'
  },
  {
    id: '5',
    title: '강아지 사회화 교육의 골든타임: 시기와 구체적인 방법',
    excerpt: '사회화는 단순히 다른 개를 만나는 것이 아닙니다. 세상의 다양한 자극에 익숙해지는 과정, 언제 어떻게 시작해야 할까요?',
    date: '2026.01.28',
    category: '행동/교육',
    icon: '🤝🐕',
    color: 'bg-violet-50'
  },
  {
    id: '4',
    title: '강아지 중성화 수술, 꼭 해야 할까요? 장단점 완벽 정리',
    excerpt: '중성화 수술의 시기와 건강상 이점, 그리고 발생할 수 있는 부작용까지. 보호자가 결정하기 전 꼭 알아야 할 의학적 사실들.',
    date: '2026.01.25',
    category: '건강관리/수술',
    icon: '🏥🐕',
    color: 'bg-slate-50'
  },
  {
    id: '3',
    title: '강아지 산책 매너 교육: 줄 당기지 않게 걷는 법',
    excerpt: '산책이 고통이 아닌 즐거움이 되려면? 줄을 당기는 원인 분석과 리드줄 핸들링 기술, 보상 기반 교육법을 소개합니다.',
    date: '2026.01.20',
    category: '행동/교육',
    icon: '🦮🐕',
    color: 'bg-lime-50'
  },
  {
    id: '2',
    title: '강아지에게 위험한 음식 10가지: 절대 주지 마세요',
    excerpt: '초콜릿, 양파, 포도... 우리가 즐겨 먹지만 강아지에게는 독이 되는 음식들. 섭취 시 증상과 대처법을 미리 숙지하세요.',
    date: '2026.01.15',
    category: '영양/안전',
    icon: '🚫🍎',
    color: 'bg-red-50'
  },
  {
    id: '1',
    title: '반려견 입양 전 체크리스트: 준비된 집사가 되는 법',
    excerpt: '강아지를 가족으로 맞이하기 위해 필요한 마음가짐, 환경 준비, 그리고 경제적 책임까지. 행복한 반려 생활의 첫걸음을 가이드합니다.',
    date: '2026.01.10',
    category: '입양/준비',
    icon: '🏠🐕',
    color: 'bg-orange-50'
  }
];

const ITEMS_PER_PAGE = 6;

const Posts: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  const filteredPosts = useMemo(() => {
    const term = searchTerm.toLowerCase().trim();
    if (!term) return POSTS_DATA;
    
    return POSTS_DATA.filter(post => 
      post.title.toLowerCase().includes(term) ||
      post.excerpt.toLowerCase().includes(term) ||
      post.category.toLowerCase().includes(term)
    );
  }, [searchTerm]);

  const totalPages = Math.ceil(filteredPosts.length / ITEMS_PER_PAGE);
  const currentPosts = useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredPosts.slice(start, start + ITEMS_PER_PAGE);
  }, [filteredPosts, currentPage]);

  useEffect(() => {
    setCurrentPage(1);
    window.scrollTo(0, 0);
  }, [searchTerm]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

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
          placeholder="궁금한 증상을 검색하세요 (예: 혈변, 구토)"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full pl-12 pr-4 py-4 bg-white border-2 border-orange-100 rounded-2xl shadow-sm focus:border-orange-500 focus:ring-4 focus:ring-orange-500/10 outline-none transition-all font-medium text-gray-700"
        />
      </div>

      {filteredPosts.length > 0 ? (
        <div className="space-y-12 pb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
            {currentPosts.map((post) => (
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

          {totalPages > 1 && (
            <div className="flex justify-center items-center gap-2 pt-8">
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="p-2 rounded-xl bg-white border border-gray-200 text-gray-600 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-orange-50 hover:text-orange-500 transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              
              {[...Array(totalPages)].map((_, i) => (
                <button
                  key={i + 1}
                  onClick={() => handlePageChange(i + 1)}
                  className={`w-12 h-12 rounded-xl font-bold transition-all ${
                    currentPage === i + 1
                      ? 'bg-orange-500 text-white shadow-lg scale-110'
                      : 'bg-white border border-gray-200 text-gray-600 hover:bg-orange-50 hover:text-orange-500'
                  }`}
                >
                  {i + 1}
                </button>
              ))}

              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="p-2 rounded-xl bg-white border border-gray-200 text-gray-600 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-orange-50 hover:text-orange-500 transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          )}
        </div>
      ) : (
        <div className="py-20 text-center animate-in zoom-in duration-300">
          <div className="text-6xl mb-4">🔍</div>
          <h3 className="text-xl font-bold text-gray-800 mb-2">검색 결과가 없습니다.</h3>
          <button 
            onClick={() => setSearchTerm('')}
            className="mt-6 text-orange-500 font-bold underline"
          >
             전체 글 보기
          </button>
        </div>
      )}

      <AdPlaceholder placement="하단" />
    </div>
  );
};

export default Posts;
