'use client';
import { useState } from 'react';
import Image from 'next/image'; // นำเข้า Image จาก next/image

export default function Home() {
  // State สำหรับการควบคุมการแสดงข้อมูล
  const [showInfo, setShowInfo] = useState(false);

  // ฟังก์ชันเพื่อ toggle การแสดงข้อมูล
  const toggleInfo = () => setShowInfo(!showInfo);

  return (
    <>
      <body className="__variable_1e4310 __variable_c3aa02 antialiased">
        <main className="min-h-screen w-full transition-colors duration-500 bg-[#0a0a0a] text-white">
          <div className="fixed inset-0 bg-gradient-to-br from-purple-900/30 via-transparent to-transparent"></div>
          <div className="fixed inset-0 overflow-hidden pointer-events-none">
            <div className="absolute -top-40 -left-40 w-96 h-96 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob bg-red-900"></div>
            <div className="absolute top-0 right-0 w-96 h-96 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000 bg-violet-700"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000 bg-blue-900 z-[-1]"></div>
          </div>

          <div className="relative z-10 w-full flex flex-row items-start mt-[50px]">
            <div className="w-[50%] ml-[100px]">
              <p className="text-[50px] font-bold mt-[40px]">
                WELCOME TO MY
                <span className="text-[50px] font-roboto ml-[10px] text-red-500 text-shadow-glow">WORLD!</span>
              </p>
              <p className="text-[40px] text-white mt-[20px] font-bold ml-[10px]">
                I&apos;M
                <span className="text-[40px] font-roboto ml-[10px] text-blue-500">NAPHATTHAPOL KAMPHERA</span>
              </p>
              <p className="text-[20px] text-white mt-[20px] font-mono ml-[10px]">
                Software Engineer 66
                <span className="text-[20px] font-mono ml-[10px] text-purple-500">University Of Phayao</span>
              </p>

              {/* ปุ่มทั้งหมด */}
              <div className="flex space-x-4 mt-[20px]">
                {/* ปุ่ม PROFILE */}
                <div
                  onClick={toggleInfo}
                  className={`w-[180px] h-[90px] bg-red-500 text-white font-bold flex justify-center items-center rounded-lg cursor-pointer hover:bg-red-600 transition-all
                    ${showInfo ? 'scale-105 transform transition-all' : 'scale-100'}`}
                >
                  {showInfo ? "HIDE" : "PROFILE"}
                </div>

                {/* ปุ่มใหม่ 3 ปุ่ม */}
                <div
                  onClick={toggleInfo}
                  className={`w-[180px] h-[90px] bg-green-500 text-white font-bold flex justify-center items-center rounded-lg cursor-pointer hover:bg-green-600 transition-all
                    ${showInfo ? 'scale-105 transform transition-all' : 'scale-100'}`}
                >
                  Button 1
                </div>
                <div
                  onClick={toggleInfo}
                  className={`w-[180px] h-[90px] bg-yellow-500 text-white font-bold flex justify-center items-center rounded-lg cursor-pointer hover:bg-yellow-600 transition-all
                    ${showInfo ? 'scale-105 transform transition-all' : 'scale-100'}`}
                >
                  Button 2
                </div>
                <div
                  onClick={toggleInfo}
                  className={`w-[180px] h-[90px] bg-blue-500 text-white font-bold flex justify-center items-center rounded-lg cursor-pointer hover:bg-blue-600 transition-all
                    ${showInfo ? 'scale-105 transform transition-all' : 'scale-100'}`}
                >
                  Button 3
                </div>
              </div>

              {/* ข้อมูลที่แสดงเมื่อคลิก */}
              {showInfo && (
                <div className="mt-4 p-4 bg-blue-500 text-white rounded-lg opacity-0 animate-fadeIn">
                  <p className="font-bold text-lg">More Information:</p>
                  <p className="mt-2">I am a software engineer passionate about technology and problem-solving. I have worked on various web and mobile applications.</p>
                </div>
              )}
            </div>

            <Image
              src="/gojo.jpg"
              width={350}
              height={300}
              alt="Profile Picture"
              className="ml-[200px] p-2 max-w-sm bg-[#231992] rounded-lg shadow-[0_0_15px_5px_rgba(0,0,255,0.7)]"
            />
          </div>
        </main>
      </body>

      <style jsx>{`
        .flip-card {
          margin-top: 20px;
          perspective: 1000px; 
        }

        .flip-card-inner {
          transform-style: preserve-3d;
          transition: transform 0.6s; 
        }

        .flip-card:hover .flip-card-inner {
          transform: rotateY(180deg); 
        }

        .flip-card-front,
        .flip-card-back {
          position: absolute;
          backface-visibility: hidden; 
          width: 100%;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .flip-card-back {
          transform: rotateY(180deg); 
        }

        @keyframes fadeIn {
          0% {
            opacity: 0;
            transform: translateY(10px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.6s ease-out forwards;
        }
      `}</style>
    </>
  );
}
