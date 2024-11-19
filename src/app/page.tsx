'use client'
import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div id="animatedDiv" className='text-white bg-white flex justify-center items-center h-screen w-full absolute z-50'>
      <Image
        src="/next.svg"
        alt="Next Logo"
        width={600}
        height={20}
        className={`w-52 ${styles.animateHeartbeat}`}
      />
    </div>
  );
}
