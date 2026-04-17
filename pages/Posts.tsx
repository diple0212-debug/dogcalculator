
import React, { useState, useMemo, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { collection, getDocs, query, orderBy } from 'firebase/firestore';
import { db, handleFirestoreError, OperationType } from '../firebase';
import AdPlaceholder from '../components/AdPlaceholder';

export const POSTS_DATA = [
  {
    id: '42',
    title: '견종별 털 관리 및 빗질 도구 추천: 찰랑이는 모질을 위한 완벽 가이드',
    excerpt: '강아지의 털 타입에 따라 빗질 방법과 도구가 다르다는 사실, 알고 계셨나요? 단모종부터 장모종, 이중모까지 견종별 맞춤 털 관리법과 필수 브러시 추천을 3000자 이상의 상세 포스팅으로 확인해보세요.',
    date: '2026.04.12',
    category: '반려견 백과',
    icon: '✂️🐕',
    color: 'bg-orange-50'
  },
  {
    id: '41',
    title: '강아지 켄넬 훈련 방법과 장점: 우리 아이만의 아늑한 안식처 만들기',
    excerpt: '켄넬 훈련은 강아지에게 감옥이 아닌 가장 안전한 안식처를 선물하는 과정입니다. 켄넬 훈련의 놀라운 장점부터 단계별 성공 노하우까지 3000자 이상의 상세 가이드로 완벽하게 정리해 드립니다.',
    date: '2026.04.11',
    category: '반려견 백과',
    icon: '🏠🐕',
    color: 'bg-blue-50'
  },
  {
    id: '40',
    title: '강아지 지능 발달 장난감 추천: 우리 아이 천재 만들기 프로젝트',
    excerpt: '강아지의 뇌를 자극하는 지능 발달 장난감, 왜 필요할까요? 노즈워크부터 고난도 퍼즐까지, 반려견의 스트레스 해소와 치매 예방에 도움을 주는 단계별 장난감 추천 가이드를 3000자 이상의 상세 포스팅으로 만나보세요.',
    date: '2026.04.10',
    category: '반려견 백과',
    icon: '🧩🐕',
    color: 'bg-yellow-50'
  },
  {
    id: '39',
    title: '강아지 산책 가방 필수 아이템 체크리스트: 완벽한 외출을 위한 준비',
    excerpt: '즐거운 산책의 시작은 꼼꼼한 준비물 챙기기부터! 배변 봉투부터 비상용품까지, 강아지와 보호자 모두가 편안하고 안전한 산책을 위해 가방에 꼭 넣어야 할 필수 아이템들을 3000자 이상의 상세 가이드로 확인해보세요.',
    date: '2026.04.08',
    category: '생활정보/팁',
    icon: '🎒🐕',
    color: 'bg-green-50'
  },
  {
    id: '38',
    title: '세계에서 가장 영리한 강아지 순위: 우리 아이 지능은 몇 등일까?',
    excerpt: '강아지의 지능은 어떻게 측정될까요? 스탠리 코렌 교수의 연구를 바탕으로 한 세계에서 가장 똑똑한 견종 TOP 10과 지능 유형별 특징을 3000자 이상의 상세 가이드로 확인해보세요.',
    date: '2026.04.06',
    category: '반려견 백과',
    icon: '🧠🐕',
    color: 'bg-indigo-50'
  },
  {
    id: '37',
    title: '말티푸(Maltipoo)의 매력과 건강 관리법: 초보 집사를 위한 완벽 가이드',
    excerpt: '귀여운 외모와 똑똑한 지능을 겸비한 하이브리드 견종 말티푸! 말티푸의 성격적 매력부터 유전 질환 예방, 털 관리 노하우까지 3000자 이상의 상세 가이드로 만나보세요.',
    date: '2026.04.04',
    category: '반려견 백과',
    icon: '🐩💖',
    color: 'bg-pink-50'
  },
  {
    id: '36',
    title: '골든 리트리버의 성격과 키울 때 고려할 점: 천사견과 함께하는 행복한 동행',
    excerpt: '\'천사견\'이라 불리는 골든 리트리버! 하지만 입양 전 반드시 알아야 할 특징들이 있습니다. 성격부터 건강 관리, 주거 환경까지 3000자 이상의 상세 가이드로 완벽 정리해 드립니다.',
    date: '2026.04.03',
    category: '반려견 백과',
    icon: '🦮✨',
    color: 'bg-yellow-50'
  },
  {
    id: '35',
    title: '강아지 관절 건강을 위한 천연 식품 추천: 슬개골 탈구 예방 가이드',
    excerpt: '우리 아이의 튼튼한 다리를 위해! 슬개골 탈구와 관절염 예방에 도움을 주는 7가지 천연 식품과 올바른 급여 방법을 3000자 이상의 상세 가이드로 확인해보세요.',
    date: '2026.03.30',
    category: '건강관리/위생',
    icon: '🦴🐕',
    color: 'bg-blue-50'
  },
  {
    id: '34',
    title: '강아지 짖음 원인별 해결 방법: 이웃 갈등 끝내는 맞춤형 훈련법',
    excerpt: '강아지가 짖는 데는 다 이유가 있습니다. 요구성 짖음부터 경계, 불안, 지루함까지! 원인별 정확한 분석과 실전 해결 방법을 3000자 이상의 상세 가이드로 확인해보세요.',
    date: '2026.03.29',
    category: '행동교정/심리',
    icon: '📢🐕',
    color: 'bg-red-50'
  },
  {
    id: '33',
    title: '분리불안 완화를 위한 기다려 훈련: 단계별 실전 가이드',
    excerpt: '혼자 남겨진 강아지의 불안함, 어떻게 해결해야 할까요? 기초부터 심화까지, 분리불안을 근본적으로 해결하는 기다려 훈련법을 3000자 이상의 상세 가이드로 만나보세요.',
    date: '2026.03.28',
    category: '행동교정/심리',
    icon: '🧘🐕',
    color: 'bg-orange-50'
  },
  {
    id: '32',
    title: '강아지 산책 후 발 닦기: 물 세척 vs 물티슈 vs 샴푸',
    excerpt: '즐거운 산책 후 가장 고민되는 발 닦기! 물로 씻기는 게 좋을까요, 아니면 간편하게 물티슈로 닦는 게 좋을까요? 각 방법의 장단점부터 피부 건강을 지키는 올바른 세정법까지 3000자 이상의 상세 가이드로 완벽 정리해 드립니다.',
    date: '2026.03.27',
    category: '건강관리/위생',
    icon: '🐾🧼',
    color: 'bg-blue-50'
  },
  {
    id: '31',
    title: '강아지 카밍 시그널: 몸짓 언어 해석하기',
    excerpt: '강아지가 보내는 미세한 신호들, 혹시 놓치고 있지는 않으신가요? 꼬리 흔들기부터 하품, 눈 깜빡임까지, 강아지의 몸짓 언어를 정확히 이해하고 교감하는 방법을 3000자 이상의 상세 가이드로 알아보세요.',
    date: '2026.03.26',
    category: '행동교정/심리',
    icon: '🗣️🐕',
    color: 'bg-green-50'
  },
  {
    id: '30',
    title: '강아지 샴푸 고를 때 주의해야 할 성분: 소중한 내 아이의 피부를 지키는 법',
    excerpt: '강아지의 피부는 사람보다 3배나 얇고 예민하다는 사실, 알고 계셨나요? 샴푸 속 유해 성분이 피부염과 탈모를 유발할 수 있습니다. 꼭 피해야 할 성분부터 올바른 선택 기준까지 3000자 이상의 상세 가이드로 확인해보세요.',
    date: '2026.03.25',
    category: '건강관리/위생',
    icon: '🧴🐕',
    color: 'bg-indigo-50'
  },
  {
    id: '29',
    title: '강아지 분리불안 자가진단 테스트: 우리 아이의 마음을 읽는 20가지 체크리스트',
    excerpt: '혼자 남겨진 강아지의 불안함, 단순한 투정일까요? 분리불안의 정확한 증상부터 자가진단 테스트, 그리고 단계별 극복 방법까지 3000자 이상의 상세 가이드로 확인해보세요.',
    date: '2026.03.22',
    category: '행동교정/심리',
    icon: '🏠💔',
    color: 'bg-amber-50'
  },
  {
    id: '28',
    title: '강아지 눈가 털 정리 및 눈곱 관리: 눈 건강을 지키는 위생 관리 가이드',
    excerpt: '강아지 눈가에 뭉친 눈곱과 찌르는 털, 어떻게 관리해야 할까요? 눈물 자국 예방부터 안전한 털 정리법, 그리고 질병 신호 구별법까지 상세히 알려드립니다.',
    date: '2026.03.21',
    category: '건강관리/위생',
    icon: '👁️🐕',
    color: 'bg-teal-50'
  },
  {
    id: '27',
    title: '이중모 강아지 삭발 미용이 위험한 이유: 털을 밀면 더 더워하는 이유',
    excerpt: '포메라니안, 스피츠, 골든 리트리버와 같은 이중모 견종들, 여름에 덥다고 털을 싹 밀어줘도 될까요? 삭발 미용이 건강에 미치는 치명적인 영향과 올바른 관리법을 알려드립니다.',
    date: '2026.03.18',
    category: '건강관리/위생',
    icon: '✂️🐕',
    color: 'bg-rose-50'
  },
  {
    id: '26',
    title: '강아지 카시트 설치가 필요한 이유: 안전하고 편안한 드라이브를 위한 필수 가이드',
    excerpt: '반려견과 함께하는 자동차 여행, 안전벨트만으로 충분할까요? 급정거 시 위험성부터 멀미 예방, 그리고 올바른 카시트 선택 기준까지 상세히 알려드립니다.',
    date: '2026.03.17',
    category: '생활정보/상식',
    icon: '🚗🐕',
    color: 'bg-blue-50'
  },
  {
    id: '25',
    title: '아파트에서 키우기 좋은 견종 추천: 층간소음 걱정 없는 반려생활 가이드',
    excerpt: '좁은 공간에서도 행복하게 지낼 수 있고, 짖음이 적어 아파트 생활에 최적화된 견종들을 소개합니다. 우리 집 환경에 꼭 맞는 반려견을 찾아보세요.',
    date: '2026.03.13',
    category: '견종정보/상식',
    icon: '🏢🐕',
    color: 'bg-indigo-50'
  },
  {
    id: '24',
    title: '강아지 올바른 목욕 가이드: 주기 설정부터 스트레스 없는 목욕법까지',
    excerpt: '강아지 목욕, 얼마나 자주 시켜야 할까요? 피부 건강을 지키는 적정 주기와 목욕을 싫어하는 아이들을 위한 단계별 적응 훈련법을 상세히 알려드립니다.',
    date: '2026.03.08',
    category: '건강관리/위생',
    icon: '🛁🐕',
    color: 'bg-sky-50'
  },
  {
    id: '23',
    title: '강아지 사료 성분표 완벽 분석: 우리 아이를 위한 진짜 좋은 사료 고르는 법',
    excerpt: '사료 뒷면의 복잡한 성분표, 어떻게 읽어야 할까요? 원재료 명칭의 비밀부터 피해야 할 성분, 그리고 AAFCO 기준까지 똑똑한 집사가 상세히 알려드립니다.',
    date: '2026.03.07',
    category: '영양/사료',
    icon: '🥘🔍',
    color: 'bg-amber-50'
  },
  {
    id: '22',
    title: '강아지 탈수 증상 완벽 가이드: 우리 아이 수분 부족 신호와 음수량 늘리는 꿀팁',
    excerpt: '강아지에게 물은 생명과도 같습니다. 단순한 갈증을 넘어 생명을 위협할 수 있는 탈수의 위험 신호를 확인하는 법과, 물을 잘 안 마시는 아이들을 위한 효과적인 수분 섭취 유도법을 상세히 알려드립니다.',
    date: '2026.03.03',
    category: '건강관리/상식',
    icon: '💧🐕',
    color: 'bg-cyan-50'
  },
  {
    id: '21',
    title: '털 빠짐 적은 견종 TOP 7: 알레르기 걱정 없는 반려생활 가이드',
    excerpt: '강아지를 키우고 싶지만 털 빠짐 때문에 고민이신가요? 털이 거의 빠지지 않아 실내에서 키우기 좋고 알레르기 반응도 적은 견종 TOP 7을 상세히 소개합니다.',
    date: '2026.03.01',
    category: '견종정보/상식',
    icon: '🐩✨',
    color: 'bg-emerald-50'
  },
  {
    id: '20',
    title: '강아지 쿠싱증후군 완벽 가이드: 증상부터 식단 관리까지',
    excerpt: '노령견에게 흔히 발생하는 호르몬 질환, 쿠싱증후군. 단순한 노화로 착착하기 쉬운 초기 증상과 삶의 질을 높여주는 핵심 관리법을 상세히 알려드립니다.',
    date: '2026.02.28',
    category: '건강/질병',
    icon: '🧪🐕',
    color: 'bg-rose-50'
  },
  {
    id: '19',
    title: '강아지 중성화 수술의 모든 것: 장단점부터 수술 후 케어까지 완벽 가이드',
    excerpt: '중성화 수술, 꼭 해야 할까요? 수술을 통해 예방할 수 있는 질병과 성격 변화, 그리고 수술 후 집사님이 챙겨야 할 핵심 관리법을 상세히 알려드립니다.',
    date: '2026.02.22',
    category: '건강관리/수술',
    icon: '🏥🐕',
    color: 'bg-blue-50'
  },
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
    excerpt: '강아지 수명을 결정하는 구강 건강! 치석이 쌓이면 단순한 입 냄애를 넘어 전신 질환으로 이어질 수 있습니다. 단계별 양치 교육법과 치석 관리 비법을 공개합니다.',
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
  const [firebasePosts, setFirebasePosts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFirebasePosts = async () => {
      const path = 'posts';
      try {
        const q = query(collection(db, path), orderBy('createdAt', 'desc'));
        const querySnapshot = await getDocs(q);
        const fetched = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
          isFirebase: true // Flag to identify Firestore posts
        }));
        setFirebasePosts(fetched);
      } catch (error) {
        // We handle but don't block, so static posts still show
        console.error('Firebase posts fetch error:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchFirebasePosts();
  }, []);

  const allPosts = useMemo(() => {
    // Merge Firestore posts with static posts, avoiding duplicates if any
    const firebaseIds = new Set(firebasePosts.map(p => p.id));
    const filteredStatic = POSTS_DATA.filter(post => !firebaseIds.has(post.id));
    return [...firebasePosts, ...filteredStatic];
  }, [firebasePosts]);

  const filteredPosts = useMemo(() => {
    const term = searchTerm.toLowerCase().trim();
    if (!term) return allPosts;
    
    return allPosts.filter(post => 
      post.title.toLowerCase().includes(term) ||
      post.excerpt.toLowerCase().includes(term) ||
      post.category.toLowerCase().includes(term)
    );
  }, [searchTerm, allPosts]);

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
