const Home5 = () => {
    return (
    <div className="">
        <div className="bg-[#12141c] px-20 py-24">
        <p className="text-orange-500 font-bold tracking-widest uppercase">Reviews</p>
        <h1 className="text-white text-6xl font-bold mt-4"> What our customers say</h1>

        <div className="flex gap-8 mt-15">
            <div className="bg-[#1d2029] rounded-3xl p-10 border border-gray-700 pt-5 h-[270px] w-[500px]">
            <p className="text-orange-500 text-[20px]">★★★★★</p>
            <p className="text-gray-300 text-[18px] leading-10 pt-3">"The cleaning team was thorough, punctual, and left my home spotless. Booking was super easy."</p>
            <h2 className="text-white font-bold text-[18px] pt-3">Priya Sharma</h2>
            <p className="text-gray-500 text-[20px] ">Bengaluru</p>
            </div>
            <div className="bg-[#1d2029] rounded-3xl p-10 border border-gray-700 pt-5 h-[270px] w-[500px]">
            <p className="text-orange-500 text-[20px]">★★★★★</p>
            <p className="text-gray-300 text-   [18px] leading-10 pt-3">"AC repair done in under two hours. The technician explainedeverything clearly — great experience."</p>
            <h2 className="text-white font-bold text-[18px] pt-3">Rahul Mehta</h2>
            <p className="text-gray-500 text-[20px] mt-2">Mumbai</p>
            </div>
            <div className="bg-[#1d2029] rounded-3xl p-10 border border-gray-700 pt-5 h-[270px] w-[500px]   ">
            <p className="text-orange-500 text-2xl">★★★★★</p>  
            <p className="text-gray-300 text-[18px] leading-10 pt-3">"Painting job was flawless. The team covered all furniture and cleaned up after. Will use again."</p>
            <h2 className="text-white font-bold text-[18px] pt-3">Sneha Iyer</h2>
            <p className="text-gray-500 text-[20px] mt-2">Hyderabad</p>
            </div>
        </div>
        </div>
    </div>
  );
};  

export default Home5;