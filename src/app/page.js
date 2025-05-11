import Image from "next/image";
import Link from "next/link";

const MAIN1 = "/main/main1.png";
const MAIN2 = "/main/main2.png";
const BUTTON =
  "bg-[#B08463] rounded-xl px-4 py-2 my-2 text-sm hover:bg-[#cca485] transition-all duration-300 cursor-pointer";

export default function Home() {
  return (
    <main className="flex flex-col sm:flex-row items-center justify-center w-full sm:h-[calc(100vh-5rem)] h-full px-6 ">
      <div className="w-full md:w-1/2 flex flex-col items-center md:items-start justify-center text-center md:text-left gap-4">
        <h1 className="text-5xl sm:text-6xl font-extrabold tracking-tight leading-snug bg-gradient-to-r from-[#714329] via-[#B9937B] via2-[#B5A192] to-[#714329] text-transparent bg-clip-text drop-shadow-md">
          Welcome to SoulTag
        </h1>
        <p className="text-lg sm:text-xl text-gray-700 max-w-md drop-shadow-sm animate-fadeIn">
          Your one-stop shop for all things soul.
        </p>
        <Link href="/products">
          <button
            className={`${BUTTON} font-semibolds text-gray-700 hover:text-white `}
          >
            Explore
          </button>
        </Link>
      </div>

      <div className="relative w-3/4 md:w-1/2 max-w-[250px] md:max-w-[400px] h-full flex items-center justify-center">
        <div className="relative left-3 bottom-7 sm:left-7 sm:bottom-15 z-20 w-1/2 transition-all duration-400 brightness-80 hover:brightness-100">
          <Image
            src={MAIN2}
            width={300}
            height={400}
            alt="Main product"
            className="rounded-lg"
            style={{ objectFit: "cover" }}
          />
        </div>

        <div className="relative right-3 top-7 sm:right-7 sm:top-15 z-15 w-1/2 brightness-80 hover:brightness-100 hover:z-30 transition-all duration-400">
          <Image
            src={MAIN1}
            width={300}
            height={400}
            alt="Secondary product"
            className="rounded-lg"
            style={{ objectFit: "cover" }}
          />
        </div>
      </div>
    </main>
  );
}
