
import Link from "next/link";
import Image from "next/image";


export default function RootLayout({ children }) {
  return (
    <>
      <nav className="w-full h-16 bg-black text-white flex justify-around items-center ">
        <div>
          <p>
            <Image
              src="/images/jobLogo-remove.png"
              alt="Logo"
              width={90}
              height={90}
            />

          </p>
        </div>
        <div className="flex justify-between w-96  text-gray-400 ">
          <Link href="/" className="hover:text-white">Home </Link>
          <Link href="/pages/all-job" className="hover:text-white">Jobs </Link>
          <Link href="/" className="hover:text-white">About Us </Link>
          <Link href="/" className="hover:text-white">Contact Us </Link>
        </div>
        <div className="w-32 flex justify-between">
          <button className="mr-4 hover:drop-shadow-2xl"> <Link href="/auth/login">Login</Link> </button>
          <button className="py-2 rounded-md px-5 bg-[#309689] hover:bg-[#298377] hover:shadow-sm hover:shadow-white transition duration-500 ease-in-out"><Link href="/auth/register">Register</Link></button>
        </div>
      </nav>

      {children}
    </>

  );
}
