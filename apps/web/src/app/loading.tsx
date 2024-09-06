import Image from "next/image";

export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-full">
      <div className="animate-pulse flex flex-col py-8 sm:space-y-0">
        <div className="relative flex items-center justify-center w-40 h-40 ">
          <Image src={"/logo-black.png"} height={500} width={500} alt="logo" className="h-20 w-fit" priority />
          <div className="absolute animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-800/80" />
        </div>
      </div>
    </div>
  );
}
