
import React from 'react';

// 이 컴포넌트는 애드센스 광고가 표시될 위치를 시각적으로 나타냅니다.
// 애드센스 승인 후, 이 컴포넌트의 내용을 애드센스 광고 코드로 교체하거나,
// 각 페이지에서 이 컴포넌트 대신 직접 광고 코드를 삽입할 수 있습니다.
const AdPlaceholder: React.FC<{ placement: string }> = ({ placement }) => {
  return (
    <div className="my-8 text-center">
      {/* 여기에 애드센스 광고 삽입 ({placement}) */}
      <div className="bg-gray-100 border-2 border-dashed border-gray-300 rounded-xl min-h-24 flex items-center justify-center">
        <span className="text-gray-400 font-medium">광고 영역</span>
      </div>
    </div>
  );
};

export default AdPlaceholder;
