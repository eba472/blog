import Image from "next/image";
import clsx from "clsx";
import localFont from "next/font/local";
import utilStyles from "./styles/utils.module.css";
import "./styles/global.css";
import Navbar from "./components/navbar";
import SocialNetwork from "./components/sns";

const name = "Tserendendev Enkhbaatar";
export const siteTitle = "Eba's personal blog";

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
      <body className="antialiased max-w-2xl mb-40 flex flex-col md:flex-row mx-4 mt-8 lg:mx-auto">
        <div className="max-w-36rem mx-auto px-4 py-0 my-16">
          <header className="flex flex-col items-center">
            <Image
              priority
              src="/images/profile.jpg"
              className="rounded-full"
              height={144}
              width={144}
              alt=""
            />
            <h1 className="text-3.5xl leading-6 font-extrabold tracking-tight mb-4 mt-4">
              {name}
            </h1>
          </header>
          <Navbar />
          <main>{children}</main>
          <SocialNetwork />
        </div>
      </body>
    </html>
  );
}
