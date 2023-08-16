import Image from "next/image";
import clsx from "clsx";
import localFont from "next/font/local";
import "./styles/global.css";
import Navbar from "./components/navbar";
import SocialNetwork from "./components/sns";
import { Analytics } from '@vercel/analytics/react';

const graphik = localFont({
  src: [
    {
      path: "../public/fonts/Graphik-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/Graphik-Medium.ttf",
      weight: "600",
      style: "bold",
    },
  ],
  variable: "--font-graphik",
  display: "swap",
});

export const metadata = {
  title: "Home",
  description: "Welcome to Next.js",
};

export default function Layout({ children }) {
  return (
    <html
      lang="en"
      className={clsx(
        "text-black bg-white dark:text-white dark:bg-[#111010]",
        graphik.variable
      )}
    >
      <body className="antialiased mb-40 flex flex-col md:flex-row mt-8 mx-auto text-lg/6">
        <div className="max-w-36rem mx-auto px-4 py-0 my-16">
          <header className="flex flex-col items-center">
            <Image
              priority
              src="/images/profile.jpg"
              className="rounded-full"
              height={144}
              width={144}
              alt="profile"
            />
            <h1 className="text-center font-extrabold tracking-tight mt-4">
              Tserendendev Enkhbaatar
              <br /> ( Eba )
            </h1>
          </header>
          <Navbar />
          <main className="w-full md:w-[650px] lg:w-[800px] mx-auto">
            {children}
          </main>
          <Analytics />
          <SocialNetwork />
        </div>
      </body>
    </html>
  );
}
