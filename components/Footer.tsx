
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0 text-center md:text-left">
            <h3 className="text-lg font-bold">똑똑한 집사</h3>
            <p className="text-sm text-gray-400">반려견의 건강한 삶을 위한 계산기</p>
          </div>
          <nav className="flex space-x-6">
            <Link to="/about" className="text-gray-300 hover:text-orange-400 transition-colors">사이트 소개</Link>
            <Link to="/terms" className="text-gray-300 hover:text-orange-400 transition-colors">이용약관</Link>
            <Link to="/privacy" className="text-gray-300 hover:text-orange-400 transition-colors">개인정보처리방침</Link>
          </nav>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-4 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} 똑똑한 집사. All Rights Reserved.</p>
          <p className="mt-1">본 사이트의 계산 결과는 참고용이며, 정확한 진단은 전문가와 상담하세요.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
