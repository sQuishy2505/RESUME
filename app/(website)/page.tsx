import Image from 'next/image'; // นำเข้า Image จาก next/image

export default function Home() {
  return (
  <>
   <body className="__variable_1e4310 __variable_c3aa02 antialiased">
  <main
    className="min-h-screen w-full transition-colors duration-500 bg-[#0a0a0a] text-white"
  >
   
    <div className="fixed inset-0 bg-gradient-to-br from-purple-900/30 via-transparent to-transparent"></div>
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      <div
        className="absolute -top-40 -left-40 w-96 h-96 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob bg-red-900"
      ></div>
      <div
        className="absolute top-0 right-0 w-96 h-96 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000 bg-violet-700"
      ></div>
      <div
        className="absolute bottom-0 right-0 w-96 h-96 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000 bg-blue-900 z-[-1]"
      ></div>
    </div>

   
    <div className="relative z-10 w-full flex flex-row items-start mt-[50px]">
      <div className="w-[50%] ml-[100px]">
        <p className="text-[50px] font-bold mt-[40px]">
          WELCOME TO MY
          <span
            className="text-[50px] font-roboto ml-[10px] text-red-500 text-shadow-glow"
            >WORLD!</span>
          
        </p>
        <p className="text-[40px] text-white mt-[20px] font-bold ml-[10px]">
          I&apos;M
          <span
            className="text-[40px] font-roboto ml-[10px] text-blue-500"
            >NAPHATTHAPOL KAMPHERA</span>
        </p>
        <p className="text-[20px] text-white mt-[20px] font-mono ml-[10px]">Software Engineer 66
        <span
            className="text-[20px] font-mono ml-[10px] text-purple-500"
            >University Of Phayao</span>
        </p>
      </div>

      <Image
        src="/gojo.jpg"
        width={350}
        height={300}
        alt="Profile Picture"
        className="ml-[200px] p-2 max-w-sm bg-[#ffffff] rounded-lg shadow-[0_0_15px_5px_rgba(0,0,255,0.7)]"
      />
    </div>
  </main>
</body>


    
    
    
    

  </>

  );
}
