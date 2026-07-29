const Bottom=()=>{
    return(
       <div className="bg-[#12141c] text-white px-20 py-16">
  <div className="flex justify-between">
    
    <div className="w-1/3">
      <h1 className="text-4xl font-bold">
        Home<span className="text-orange-500">Fix</span>
      </h1>

      <p className="mt-6 text-gray-400 leading-8">
        Professional home services delivered by verified experts.
        Trusted by 50,000+ households across India.
      </p>
    </div>

    <div>
      <h2 className="text-gray-500 font-bold mb-6 text-[20px] ">COMPANY</h2>
      <ul className="space-y-4 text-gray-400 text-[18px]">
        <li>About us</li>
        <li>Careers</li>
        <li>Press</li>
        <li>Blog</li>
      </ul>
    </div>

    
    <div>
      <h2 className="text-gray-500 font-bold mb-6 text-[20px]">QUICK LINKS</h2>
      <ul className="space-y-4 text-gray-400 text-[18px]">
        <li>Home</li>
        <li>Services</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </div>

  </div>
  <div className="flex">
    <p className="text-[18px] text-gray-400">© 2026 HomeFix Technologies Pvt. Ltd. All rights reserved.</p>
    <div className="flex gap-5">
    <p className="text-[18px] text-gray-400 ml-280">Privacy</p>
    <p className="text-[18px] text-gray-400">Terms</p>
    </div>
  </div>
</div>
    );
}
export default Bottom;