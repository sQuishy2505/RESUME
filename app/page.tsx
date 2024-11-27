import '../styles/global.css'

module.exports = {
  images: {
    domains: ['https://i.pinimg.com/736x/7d/f0/24/7df0249cd3d8564afb5c3c52120d321f.jpg'], // ใส่โดเมนของ URL รูปภาพที่อนุญาต
  },
};




export default function Home() {
  return (
  <>
   <body className="w-[100%] h-[100vh] bg-gradient-to-br from-black to-indigo-900 relative  overflow-hidden backdrop-blur-sm">
   <div className=" w-[100%] flex  mt-[50px] justify-between">
   <p className="text-[50px] font-bold ml-[100px]">HI, I AM</p>
    <img src="https://i.pinimg.com/736x/7d/f0/24/7df0249cd3d8564afb5c3c52120d321f.jpg" width={350} height={300} alt="Profile Picture" className=" mr-[100px] shadow-lg shadow-[0_0_15px_5px_rgba(255,0,255,0.8)]" />
    

   </div>

                              
   
   
  
   
    
   
    

    
    </body>
    
    
    
    <div className="rain-container">
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className="rain-drop"
          style={{
            '--random-x': Math.random(), // กำหนดตำแหน่ง X สุ่ม
            '--random-delay': `${Math.random() * 1.5}s`, // กำหนดการดีเลย์
          }}
        ></div>
      ))}
    </div>

  </>

  );
}
