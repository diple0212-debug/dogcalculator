
import React from 'react';
import { Link } from 'react-router-dom';
import AdPlaceholder from '../components/AdPlaceholder';

export const POSTS_DATA = [
  {
    id: '4',
    title: '강아지가 초콜릿을 먹었어요! 치사량과 골든타임 응급처치',
    excerpt: '초콜릿 속 테오브로민 성분이 강아지에게 왜 치명적일까요? 먹은 즉시 해야 할 행동과 병원 방문 전 체크리스트를 정리했습니다.',
    date: '2024.05.27',
    category: '응급처치',
    icon: '🍫',
    color: 'bg-red-50'
  },
  {
    id: '5',
    title: '슬개골 탈구 예방부터 관리까지: 집사가 알아야 할 필수 지식',
    excerpt: '대한민국 소형견의 80%가 겪는 슬개골 탈구. 수술 없이 관리하는 법과 관절 건강을 지키는 생활 습관을 공개합니다.',
    date: '2024.05.27',
    category: '건강관리',
    icon: '🦴',
    color: 'bg-green-50'
  },
  {
    id: '6',
    title: '노령견과 행복한 노후 보내기: 노화 징후와 케어 팁',
    excerpt: '7세 이후부터 시작되는 강아지의 노년기. 시력 저하, 치매(CCD), 식단 조절 등 시니어견의 삶의 질을 높이는 방법을 알아봅니다.',
    date: '2024.05.27',
    category: '시니어케어',
    icon: '🐕',
    color: 'bg-indigo-50'
  },
  {
    id: '1',
    title: '우리 강아지가 나를 보고 웃는 진짜 이유 (과학적 분석)',
    excerpt: '강아지의 미소는 사람과 같을까요? 안면 근육의 구조부터 진화 심리학적 관점에서 분석한 강아지 웃음의 비밀을 공개합니다.',
    date: '2024.05.26',
    category: '행동심리',
    icon: '😊',
    color: 'bg-yellow-50'
  },
  {
    id: '2',
    title: '강아지 양치질, 실패 없이 3분 만에 끝내는 집사의 비법',
    excerpt: '치주 질환은 수명 단축의 주범! 양치를 싫어하는 아이들도 마법처럼 입을 벌리게 만드는 3단계 적응 훈련법을 소개합니다.',
    date: '2024.05.26',
    category: '건강관리',
    icon: '🪥',
    color: 'bg-blue-50'
  },
  {
    id: '3',
    title: '요즘 유행하는 강아지 수제 간식 레시피 Best 3',
    excerpt: '첨가물 걱정 없는 건강한 수제 간식! 집에서 에어프라이어로 뚝딱 만드는 영양 만점 레시피와 주의사항을 정리했습니다.',
    date: '2024.05.26',
    category: '트렌드/레시피',
    icon: '🍳',
    color: 'bg-orange-50'
  }
];

const Posts: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto space-y-10 px-4">
      <div className="text-center py-10">
        <h1 className="text-4xl font-black text-gray-800 mb-4 tracking-tight">똑똑한 집사의 건강 칼럼</h1>
        <p className="text-gray-500 text-lg font-medium">반려견 전문가들이 전하는 생생한 지식과 팁</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-12">
        {POSTS_DATA.map((post) => (
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

      <AdPlaceholder placement="하단" />
    </div>
  );
};

export default Posts;
