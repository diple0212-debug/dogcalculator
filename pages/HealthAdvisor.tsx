
import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI } from "@google/genai";
import AdPlaceholder from '../components/AdPlaceholder';

const PageMeta = ({ title, description }: { title: string, description: string }) => {
  useEffect(() => {
    document.title = title;
    const descriptionMeta = document.querySelector('meta[name="description"]');
    if (descriptionMeta) {
      descriptionMeta.setAttribute('content', description);
    }
  }, [title, description]);
  return null;
};

const HealthAdvisor: React.FC = () => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<{ role: 'user' | 'ai'; text: string }[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsLoading(true);

    try {
      // API Key가 없을 경우를 대비한 안전한 인스턴스 생성
      const apiKey = process.env.API_KEY;
      if (!apiKey) {
        throw new Error('API_KEY가 설정되지 않았습니다. Vercel 환경 변수를 확인해주세요.');
      }

      const ai = new GoogleGenAI({ apiKey });
      
      const streamResponse = await ai.models.generateContentStream({
        model: 'gemini-3-flash-preview',
        contents: userMessage,
        config: {
          systemInstruction: "너는 강아지 건강 관리 전문 AI '똑똑한 집사'야. 반려견 보호자의 질문에 대해 수의학적 기초 지식을 바탕으로 친절하게 답변해줘. 답변 마지막에는 반드시 면책 조항(AI 상담의 한계)을 포함해줘.",
          temperature: 0.7,
        }
      });

      let fullText = '';
      setMessages(prev => [...prev, { role: 'ai', text: '' }]);

      for await (const chunk of streamResponse) {
        const textChunk = chunk.text;
        if (textChunk) {
          fullText += textChunk;
          setMessages(prev => {
            const newMessages = [...prev];
            if (newMessages.length > 0) {
              newMessages[newMessages.length - 1].text = fullText;
            }
            return newMessages;
          });
        }
      }
    } catch (error: any) {
      console.error('AI 상담 중 오류 발생:', error);
      const errorMessage = error.message.includes('API_KEY') 
        ? '시스템 설정(API 키)이 완료되지 않았습니다. 관리자에게 문의하세요.'
        : '일시적인 연결 오류가 발생했습니다. 잠시 후 다시 시도해주세요.';
      setMessages(prev => [...prev, { role: 'ai', text: errorMessage }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <PageMeta 
        title="AI 강아지 건강 상담소 | 똑똑한 집사"
        description="우리 강아지의 건강 고민, AI 똑똑한 집사에게 물어보세요. 증상별 대처법과 건강 관리 팁을 실시간으로 알려드립니다."
      />
      <div className="w-full max-w-3xl mx-auto flex flex-col min-h-[calc(100vh-250px)]">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col flex-grow border border-orange-100">
          <div className="bg-orange-500 p-4 text-white text-center shadow-md">
            <h1 className="text-xl font-bold">🐾 AI 건강 상담소</h1>
            <p className="text-sm opacity-90">강아지의 건강 고민을 편하게 말씀해주세요</p>
          </div>

          <div className="flex-grow overflow-y-auto p-4 md:p-6 space-y-4 bg-orange-50/20 min-h-[450px]">
            {messages.length === 0 && (
              <div className="text-center py-20">
                <div className="bg-white rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4 shadow-sm border border-orange-100">
                  <span className="text-4xl">🐶</span>
                </div>
                <p className="text-gray-600 font-bold">"우리 아이 눈이 빨개요, 괜찮을까요?"</p>
                <p className="text-gray-400 text-sm mt-1">질문을 입력하면 AI 집사가 친절히 상담해 드립니다.</p>
              </div>
            )}
            
            {messages.map((msg, idx) => (
              <div key={`msg-${idx}`} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'} animate-fadeIn`}>
                <div className={`max-w-[85%] p-4 rounded-2xl shadow-sm ${
                  msg.role === 'user' 
                  ? 'bg-orange-500 text-white rounded-tr-none' 
                  : 'bg-white text-gray-800 border border-orange-100 rounded-tl-none'
                }`}>
                  <p className="whitespace-pre-wrap leading-relaxed text-[15px]">{msg.text}</p>
                </div>
              </div>
            ))}
            
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white p-4 rounded-2xl border border-orange-100 shadow-sm rounded-tl-none">
                  <div className="flex gap-1.5 items-center">
                    <div className="w-2 h-2 bg-orange-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-orange-400 rounded-full animate-bounce [animation-delay:-.3s]"></div>
                    <div className="w-2 h-2 bg-orange-400 rounded-full animate-bounce [animation-delay:-.5s]"></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={chatEndRef} />
          </div>

          <form onSubmit={handleSubmit} className="p-4 bg-white border-t border-orange-100 flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="궁금한 증상을 입력하세요..."
              className="flex-grow p-3 border border-orange-200 rounded-xl focus:ring-2 focus:ring-orange-500 outline-none"
            />
            <button 
              type="submit" 
              disabled={isLoading || !input.trim()}
              className="bg-orange-500 text-white p-3 rounded-xl hover:bg-orange-600 disabled:bg-gray-300 transition-colors shadow-md flex items-center justify-center"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 transform rotate-90" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
            </button>
          </form>
        </div>
        <div className="mt-6">
          <AdPlaceholder placement="하단" />
        </div>
      </div>
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out forwards;
        }
      `}</style>
    </>
  );
};

export default HealthAdvisor;
