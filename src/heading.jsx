const Heading = () => {
  return (
    <header>
      <div className="flex justify-between items-center mt-3 border-b border-[#12141c1a]">
        <h1 className="text-black font-bold text-[30px] ml-20">Home<span className="text-orange-500">Fix</span></h1>

        <nav>
          <ul className="flex gap-8 text-gray-500 text-[20px]">
            <li>
              <a href="/" className="hover:text-orange-500 active:text-orange-500">Home</a>
            </li>
            <li className="hover:text-orange-500">Service</li>
            <li className="hover:text-orange-500">About</li>
            <li  className="hover:text-orange-500">Contact</li>
          </ul>
        </nav>

        <div className="flex items-center gap-5 mr-50" >
        <p className="text-gray-500 text-[20px]">+91 98765 43210</p>
        <button className="bg-orange-500 text-white px-5 py-2 rounded-lg text-[20px]">Book a Service</button>
        </div>

      </div>
    </header>
  );
};

export default Heading;