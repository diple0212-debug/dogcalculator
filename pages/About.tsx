
import React from 'react';

const PageMeta = ({ title, description }: { title: string, description: string }) => {
  document.title = title;
  const descriptionMeta = document.querySelector('meta[name="description"]');
  if (descriptionMeta) {
    descriptionMeta.setAttribute('content', description);
  }
  return null;
};

const About: React.FC = () => {
  return (
    <>
      <PageMeta 
        title="사이트 소개 | 똑똑한 집사"
        description="똑똑한 집사는 반려견의 건강한 삶을 응원하는 모든 보호자를 위한 공간입니다. 과학적 데이터를 기반으로 한 강아지 계산기를 통해 반려 생활에 도움을 드립니다."
      />
      <div className="w-full max-w-3xl mx-auto bg-white rounded-2xl shadow-lg p-6 md:p-10">
        <h1 className="text-3xl font-bold text-gray-800 text-center mb-8">사이트 소개</h1>
        <div className="prose max-w-none text-lg text-gray-700">
          <p>
            '똑똑한 집사'는 소중한 반려견과 함께하는 모든 보호자님들을 위해 만들어진 공간입니다.
            말로 표현하지 못하는 반려견의 건강 상태를 객관적인 데이터를 통해 조금이나마 더 쉽게 이해하고,
            더 건강한 반려 생활을 이어 나가는 데 도움을 드리고자 합니다.
          </p>
          <p>
            저 역시 한 마리의 강아지를 키우는 보호자로서, '우리 아이 나이는 사람으로 치면 몇 살일까?', '지금 체중이 괜찮은 걸까?', '사료는 얼마나 줘야 하지?'와 같은 궁금증을 항상 가지고 있었습니다.
            인터넷에는 수많은 정보가 있었지만, 신뢰할 수 있는 정보를 찾고 복잡한 공식을 직접 계산하기는 번거로웠습니다.
          </p>
          <p>
            '똑똑한 집사'는 이러한 경험을 바탕으로, 꼭 필요하지만 찾기 번거로웠던 정보들을 한곳에 모아
            누구나 쉽고 빠르게 사용할 수 있는 계산기 형태로 제공합니다.
          </p>
          <h2 className="text-2xl font-bold text-gray-800 mt-10">제공하는 기능</h2>
          <ul>
            <li><strong>강아지 나이 계산기:</strong> 반려견의 크기와 실제 나이를 기반으로 사람 나이로 환산하여 생애 주기를 이해하는 데 도움을 줍니다.</li>
            <li><strong>강아지 비만도 계산기:</strong> 현재 체중과 이상적인 체중을 비교하여 비만도를 체크하고 건강한 체중 관리 계획을 세울 수 있도록 돕습니다.</li>
            <li><strong>강아지 사료량 계산기:</strong> 체중과 활동량에 맞는 하루 권장 급여량을 계산하여 과식과 영양 부족을 예방합니다.</li>
          </ul>
          <p>
            앞으로도 보호자님들에게 실질적인 도움이 될 수 있는 유용한 정보와 기능들을 꾸준히 업데이트해 나갈 예정입니다.
            '똑똑한 집사'와 함께 반려견의 건강을 지키고, 더 행복한 추억을 만들어 가시길 바랍니다.
          </p>
          <p className="mt-8 text-center font-semibold">
            모든 반려견과 보호자님의 행복한 삶을 응원합니다.
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
