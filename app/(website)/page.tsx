
export default function Home() {
  return (
  <>
   <body className="w-[100%] h-[100vh] bg-[#261264] relative">
  <div className="w-full flex flex-row items-start mt-[50px]"> 

    <div className="w-[50%] ml-[100px]">
      <p className="text-[50px] font-bold mt-[40px]">
        WELCOME TO MY 
        <span className="text-[50px] font-roboto ml-[10px] text-blue-500 text-shadow-glow">"WORLD!"</span>
      </p>
      <p className="text-[40px] text-white mt-[20px] font-bold ml-[10px]">
        I'M
        <span className="text-[40px] font-roboto ml-[10px] text-blue-500 text-shadow-glow">NAPHATTHAPOL KAMPHERA</span>
      </p>
    </div>
    
    
    <img
      src="https://i.pinimg.com/736x/7d/f0/24/7df0249cd3d8564afb5c3c52120d321f.jpg" 
      width={350} 
      height={300} 
      alt="Profile Picture" 
      className="ml-[200px] p-2 max-w-sm bg-[#ffffff] rounded-lg shadow-[0_0_15px_5px_rgba(0,0,255,0.7)]"
    />
  </div>
</body>

    
    
    
    

  </>

  );
}
