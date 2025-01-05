
import Link from "next/link";
import Image from "next/image";
import Navbar from "../components/home/navbar";

export default function RootLayout({ children }) {
  return (
    <>

      <Navbar />
      {children}
    </>

  );
}
