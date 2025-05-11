import Link from "next/link";
import Image from "next/image";
import { MdAccountCircle } from "react-icons/md";
import { MdHomeFilled } from "react-icons/md";
import { AiFillShop } from "react-icons/ai";

const LOGO = "/logo.png";
const BUTTON =
  "w-8 h-8 text-[#f5ece6] hover:bg-[#D0B9A7] transition-all duration-300 cursor-pointer rounded-lg hover:text-[#7f5841] ";

export default function Navbar() {
  return (
    <header className="flex items-center justify-between pr-3 bg-[#714329] w-full h-15 shadow-[#95664b] shadow-lg rounded-b-lg">
      <Link href="/">
        <Image src={LOGO} alt="Logo" width={80} height={80} />
      </Link>
      <nav>
        <ul className="flex space-x-4">
          <li className="hidden sm:block">
            <Link href="/">
              <MdHomeFilled className={BUTTON} />
            </Link>
          </li>
          <li>
            <Link href="/products">
              <AiFillShop className={BUTTON} />
            </Link>
          </li>
        </ul>
      </nav>
      <Link href="/login">
        {/* <button className={BUTTON}>Sign In</button> */}
        <MdAccountCircle className={BUTTON} />
      </Link>
    </header>
  );
}
