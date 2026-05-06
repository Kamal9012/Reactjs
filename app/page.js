import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-[#11121A] h-screen overflow-hidden">
      <div className=" flex justify-between px-70 py-4 border-b border-[#ffffff1a] ">
        {" "}
        <div className="flex gap-4 ">
          <div className="flex gap-center">
            <Image height={60} width={60} src="/logomo.svg" alt="image " />
          </div>
          <div className="flex gap-4 ">
            <button className=" px-4 py-1 rounded  text-white hover:bg-blue-600">
              Home
            </button>
            <button className="px-4 py-1 rounded bg-accent-400 text-[#FCFCFC] hover:bg-blue-600 ">
              Explore
            </button>
            <button className="px-4 py-1 rounded bg-blue-400 text-white hover:bg-blue-600 ">
              Blogs
            </button>
            <button className="px-4 py-1 rounded bg-blue-400 text-white hover:bg-blue-600 ">
              Contact Us
            </button>
            <button className="px-4 py-1 rounded bg-blue-400 text-white hover:bg-blue-600">
              About Us
            </button>
          </div>
        </div>
        <div className="flex gap-4">
          <button className="px-4 py-1 rounded bg-blue-400 text-white hover:bg-blue-600">
            login
          </button>
          <button className="px-4 py-1 rounded bg-blue-400 text-white hover:bg-blue-600">
            Signup
          </button>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center h-screen text-center">
        <h1 className="bg-linear-to-r from-purple-400 to-pink-600 bg-clip-text leading-[1.3] font-extrabold tracking-tight text-transparent lg:text-8xl lg:leading-[1.4]">
          Receive donations
          <br /> from your supporters
        </h1>
        <p className="text-white max-w-lg py-6">
          Easy way to support your work through your true followers. Start today
          receive donations for your work or start a campaign for the cause.
        </p>
        <div className="flex justify-center gap-1 border-2 border-green-500 px-5 py-2 rounded-2xl text-white" >
          <p className="text-green-700">+ buymeamomo.org/</p>
          <input type="search" placeholder="your name" />
        </div>
      </div>
    </div>
  );
}
