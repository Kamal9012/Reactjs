import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <div className="flex">
      <div className="flex flex-col justify-start bg-red-200 h-100 w-200 m-10 box-border size-32  rounded-xl shadow-xl">
        <Image className="rounded-sm  " height={80} width={80} src="/boyimage.webp" alt="image"/>
        <div className="text-blue-300 text-2xl ">kamal thapa</div>
        
      
      </div>

        <div className="bg-blue-200 h-100 w-200 m-10 rounded-xl shadow-sm"></div>
      </div>

      <div className="flex">
        <div className="bg-yellow-200 h-100 w-200 m-10 rounded-sm shadow-xl"></div>

        <div className="bg-green-200 h-100 w-200 m-10 rounded-xl shadow-xl lksd"></div>
      </div>
    </div>
  );
}
