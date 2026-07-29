const Home3 = () => {
  return (
    <div className="mt-30 px-20 bg-[#faf7f3] py-20">

      <p className="text-orange-500 text-[20px] font-bold">
        POPULAR PICKS
      </p>

      <h1 className="text-[50px] font-bold mt-2">
        Top services this week
      </h1> 
      <div className="flex gap-50 mt-16">

        <div className="w-[420px] bg-white rounded-3xl border border-gray-200 p-8">
          <div className="w-18 h-18 bg-[#fdf0e8] rounded-2xl flex items-center justify-center text-3xl">
            ✨
          </div>

          <h2 className="text-4xl font-bold mt-8">
            Home Cleaning
          </h2>

          <p className="text-gray-600 text-xl mt-4 leading-8">
            Deep cleaning and regular maintenance by trained professionals.
          </p>

          <p className="text-orange-500 font-bold text-2xl mt-8">
            From ₹299
          </p>
        </div>

        <div className="w-[420px] bg-white rounded-3xl border border-gray-200 p-8">
          <div className="w-18 h-18 bg-[#fdf0e8] rounded-2xl flex items-center justify-center text-3xl">
            🔧
          </div>

          <h2 className="text-4xl font-bold mt-8">
            Appliance Repair
          </h2>

          <p className="text-gray-600 text-xl mt-4 leading-8">
            Same-day repair for AC, washing machine, refrigerator, and more.
          </p>

          <p className="text-orange-500 font-bold text-2xl mt-8">
            From ₹199
          </p>
        </div>

        <div className="w-[420px] bg-white rounded-3xl border border-gray-200 p-8">
          <div className="w-18 h-18 bg-[#fdf0e8] rounded-2xl flex items-center justify-center text-3xl">
            💧
          </div>

          <h2 className="text-4xl font-bold mt-8">
            Plumbing
          </h2>

          <p className="text-gray-600 text-xl mt-4 leading-8">
            Leakage repair, pipe fitting, and bathroom fixture installation.
          </p>

          <p className="text-orange-500 font-bold text-2xl mt-8">
            From ₹179
          </p>
        </div>

      </div>

    </div>
  );
};

export default Home3;