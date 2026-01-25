
import React from 'react';

const PageMeta = ({ title, description }: { title: string, description:string }) => {
  document.title = title;
  const descriptionMeta = document.querySelector('meta[name="description"]');
  if (descriptionMeta) {
    descriptionMeta.setAttribute('content', description);
  }
  return null;
};

const Terms: React.FC = () => {
  return (
    <>
      <PageMeta 
        title="이용약관 | 똑똑한 집사"
        description="똑똑한 집사 웹사이트의 서비스 이용약관입니다. 서비스 이용에 대한 권리, 의무 및 책임사항을 규정합니다."
      />
      <div className="w-full max-w-3xl mx-auto bg-white rounded-2xl shadow-lg p-6 md:p-10">
        <h1 className="text-3xl font-bold text-gray-800 text-center mb-8">이용약관</h1>
        <div className="prose max-w-none text-gray-700">
          <h2>제1조 (목적)</h2>
          <p>
            이 약관은 '똑똑한 집사'(이하 "사이트")가 제공하는 모든 서비스(이하 "서비스")의 이용 조건 및 절차, 이용자와 사이트의 권리, 의무, 책임사항과 기타 필요한 사항을 규정함을 목적으로 합니다.
          </p>

          <h2>제2조 (용어의 정의)</h2>
          <p>
            본 약관에서 사용하는 용어의 정의는 다음과 같습니다.
            <br />
            1. "서비스"라 함은 사이트가 제공하는 강아지 관련 계산기 및 정보 콘텐츠 등 제반 서비스를 의미합니다.
            <br />
            2. "이용자"라 함은 사이트에 접속하여 본 약관에 따라 사이트가 제공하는 서비스를 받는 회원을 포함한 모든 방문객을 의미합니다.
          </p>

          <h2>제3조 (서비스의 제공 및 변경)</h2>
          <p>
            1. 사이트는 다음과 같은 서비스를 제공합니다.
            <br />
            - 강아지 나이 계산기
            <br />
            - 강아지 비만도 계산기
            <br />
            - 강아지 하루 사료량 계산기
            <br />
            - 기타 반려견 관련 정보 제공
            <br />
            2. 사이트는 서비스의 내용, 품질, 또는 기술적 사양 등에 대해 사이트의 정책적인 판단에 따라 변경할 수 있습니다.
          </p>

          <h2>제4조 (서비스의 중단)</h2>
          <p>
            사이트는 컴퓨터 등 정보통신설비의 보수점검, 교체 및 고장, 통신두절 또는 운영상 상당한 이유가 있는 경우 서비스의 제공을 일시적으로 중단할 수 있습니다.
          </p>
          
          <h2>제5조 (면책 조항)</h2>
          <p>
            1. 사이트에서 제공하는 모든 계산 결과 및 정보는 일반적인 데이터를 기반으로 하며, 참고용으로만 제공됩니다. 이는 전문적인 수의학적 진단이나 처방을 대체할 수 없습니다.
            <br />
            2. 이용자는 제공된 정보를 바탕으로 한 모든 결정과 행동에 대해 스스로 책임을 지며, 사이트는 이로 인해 발생하는 어떠한 직접적, 간접적 손해에 대해서도 책임을 지지 않습니다.
            <br />
            3. 반려견의 건강에 관한 정확한 진단, 상담 및 치료는 반드시 자격을 갖춘 수의사와 상의하시기 바랍니다.
          </p>

          <h2>제6조 (저작권의 귀속)</h2>
          <p>
            사이트가 작성한 저작물에 대한 저작권 및 기타 지적재산권은 사이트에 귀속됩니다. 이용자는 사이트로부터 얻은 정보를 사이트의 사전 승낙 없이 복제, 송신, 출판, 배포, 방송 기타 방법에 의하여 영리 목적으로 이용하거나 제3자에게 이용하게 하여서는 안 됩니다.
          </p>

          <p className="font-bold mt-8">
            부칙
            <br />
            본 약관은 2024년 1월 1일부터 시행됩니다.
          </p>
        </div>
      </div>
    </>
  );
};

export default Terms;
