import '../styles/global.css'

module.exports = {
  images: {
    domains: ['https://i.pinimg.com/736x/7d/f0/24/7df0249cd3d8564afb5c3c52120d321f.jpg'], // ใส่โดเมนของ URL รูปภาพที่อนุญาต
  },
};




export default function Home() {
  return (
  <>
   <body className="w-[100%] h-[100vh] bg-indigo-900  relative">
   <div className=" w-[100%] flex  mt-[50px] justify-between">
   <p className="text-[50px] font-bold ml-[100px]">HI, I AM</p>
    <img src="https://i.pinimg.com/736x/7d/f0/24/7df0249cd3d8564afb5c3c52120d321f.jpg" width={350} height={300} alt="Profile Picture" className=" mr-[100px] p-2 max-w-sm mx-auto bg-[#ffffff] rounded-lg shadow-[0_0_15px_5px_rgba(0,0,255,0.7)]" />
    

   </div>

                          

    
    </body>
    
    
    
    

  </>

  );
}
