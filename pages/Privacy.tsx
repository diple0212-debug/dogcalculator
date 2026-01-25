
import React from 'react';

const PageMeta = ({ title, description }: { title: string, description: string }) => {
  document.title = title;
  const descriptionMeta = document.querySelector('meta[name="description"]');
  if (descriptionMeta) {
    descriptionMeta.setAttribute('content', description);
  }
  return null;
};

const Privacy: React.FC = () => {
  return (
    <>
      <PageMeta 
        title="개인정보처리방침 | 똑똑한 집사"
        description="똑똑한 집사 웹사이트의 개인정보처리방침입니다. 쿠키 사용, 광고 서비스 및 데이터 수집에 대한 정책을 안내합니다."
      />
      <div className="w-full max-w-3xl mx-auto bg-white rounded-2xl shadow-lg p-6 md:p-10">
        <h1 className="text-3xl font-bold text-gray-800 text-center mb-8">개인정보처리방침</h1>
        <div className="prose max-w-none text-gray-700">
          <p>
            '똑똑한 집사'(이하 "사이트")는 이용자의 개인정보를 중요시하며, 정보통신망 이용촉진 및 정보보호에 관한 법률을 준수하고 있습니다. 본 사이트는 별도의 회원가입 절차 없이 모든 콘텐츠를 이용할 수 있으며, 이용자의 개인정보를 직접적으로 수집하지 않습니다.
            다만, 서비스 이용 과정에서 아래와 같은 정보들이 자동으로 생성되고 수집될 수 있습니다.
          </p>

          <h2>제1조 (수집하는 개인정보의 항목)</h2>
          <p>
            사이트는 이용자의 개인 식별이 가능한 어떠한 정보도 수집하지 않습니다.
            단, 서비스 개선 및 통계 분석, 맞춤형 광고 제공을 위해 서비스 이용 과정에서 기기 정보(OS, 브라우저 종류), 접속 로그, 쿠키(Cookie) 정보가 비식별 정보 형태로 자동 수집될 수 있습니다.
          </p>

          <h2>제2조 (쿠키(Cookie)의 사용 목적 및 거부)</h2>
          <p>
            1. 사이트는 이용자에게 보다 적합하고 유용한 서비스를 제공하기 위해 쿠키를 사용합니다. 쿠키는 웹사이트를 운영하는 데 이용되는 서버가 이용자의 브라우저에 보내는 아주 작은 텍스트 파일로서 이용자의 컴퓨터 하드디스크에 저장됩니다.
            <br />
            2. 쿠키는 이용자의 방문 기록, 이용 형태 등을 파악하여 최적화된 정보 제공을 가능하게 합니다.
            <br />
            3. 이용자는 쿠키 설치에 대한 선택권을 가지고 있습니다. 웹 브라우저의 옵션을 설정함으로써 모든 쿠키를 허용하거나, 쿠키가 저장될 때마다 확인을 거치거나, 아니면 모든 쿠키의 저장을 거부할 수도 있습니다. 단, 쿠키 저장을 거부할 경우 일부 서비스 이용에 어려움이 있을 수 있습니다.
          </p>

          <h2>제3조 (광고 서비스)</h2>
          <p>
            1. 본 사이트는 제3자 광고 서비스 제공업체인 구글 애드센스(Google AdSense)를 사용하고 있습니다.
            <br />
            2. 구글 애드센스는 사용자에게 맞춤형 광고를 제공하기 위해 쿠키(DoubleClick DART cookie)를 사용할 수 있습니다. 이 쿠키는 이용자가 사이트 및 다른 웹사이트를 방문한 기록을 기반으로 관심사에 맞는 광고를 게재하는 데 사용됩니다.
            <br />
            3. 이용자는 구글 광고 설정 페이지(<a href="https://adssettings.google.com" target="_blank" rel="noopener noreferrer">https://adssettings.google.com</a>)를 방문하여 맞춤형 광고 게재를 비활성화할 수 있습니다.
          </p>
          
          <h2>제4조 (개인정보보호를 위한 기술적, 관리적 대책)</h2>
          <p>
             사이트는 이용자의 개인정보를 처리함에 있어 개인정보가 분실, 도난, 유출, 변조 또는 훼손되지 않도록 안전성 확보를 위하여 기술적/관리적 대책을 강구하고 있습니다.
          </p>

          <h2>제5조 (개인정보처리방침의 변경)</h2>
          <p>
            현 개인정보처리방침 내용 추가, 삭제 및 수정이 있을 시에는 개정 최소 7일전부터 홈페이지의 '공지사항'을 통해 고지할 것입니다.
          </p>

          <p className="font-bold mt-8">
            본 방침은 2024년 1월 1일부터 시행됩니다.
          </p>
        </div>
      </div>
    </>
  );
};

export default Privacy;
