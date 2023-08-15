import Image from "next/image";
import teamlab from "/public/images/gallery/Admiring Teamlab.jpg";
import softball from "/public/images/gallery/After fierce softball game.jpg";
import farewell from "/public/images/gallery/At farewell party of a friend.jpg";
import library from "/public/images/gallery/At school library during lunar new year.jpg";
import shinjuku from "/public/images/gallery/Beautiful Shinjuku Goen.jpg";
import run from "/public/images/gallery/Completed 12km run.jpg";
import fi from "/public/images/gallery/Founder Institute Graduation.jpeg";
import hanging from "/public/images/gallery/Hanging out.jpg";
import hiking from "/public/images/gallery/Hiking near Tokyo.jpg";
import newYear from "/public/images/gallery/New year celebration.jpg";
import mvp from "/public/images/gallery/Rakuten Travel Tech MVP of the month.jpg";
import fgn from "/public/images/gallery/Visited FGN event  in Fukuoka.jpg";
import director from "/public/images/gallery/With our director at Founder Institute graduation.jpg";

export default function Gallery() {
  return (
    <div className="my-8">
      <div className="columns-2 sm:columns-3 gap-y-4 my-4">
        <div className="relative mb-2">
          <Image
            alt="Me speaking on stage at React Summit about the future of Next.js"
            src={library}
            priority
            className="rounded-lg"
          />
        </div>
        <div className="relative mb-2">
          <Image
            alt="Me, Lydia, and Delba filming the Next.js Conf keynote"
            src={teamlab}
            priority
            className="rounded-lg"
          />
        </div>
        <div className="relative mb-2">
          <Image
            alt="Me standing on stage at Reactathon delivering the keynote"
            src={farewell}
            priority
            className="rounded-lg"
          />
        </div>
        <div className="relative mb-2">
          <Image
            alt="Me standing on stage at SmashingConf giving a talk about my optimism for the web"
            src={softball}
            priority
            className="rounded-lg"
          />
        </div>
        <div className="relative mb-2">
          <Image
            alt="Me and Guillermo Rauch on stage for Vercel Ship, answering questions from the Next.js community"
            src={mvp}
            priority
            className="rounded-lg"
          />
        </div>
        <div className="relative mb-2">
          <Image
            alt="My badge on top of a pile of badges from a Vercel meetup we held"
            src={run}
            priority
            className="rounded-lg"
          />
        </div>
        <div className="relative mb-2">
          <Image
            alt="Me speaking on stage at React Summit about the future of Next.js"
            src={fi}
            priority
            className="rounded-lg"
          />
        </div>
        <div className="relative mb-2">
          <Image
            alt="Me, Lydia, and Delba filming the Next.js Conf keynote"
            src={hanging}
            priority
            className="rounded-lg"
          />
        </div>
        <div className="relative mb-2">
          <Image
            alt="Me standing on stage at Reactathon delivering the keynote"
            src={hiking}
            priority
            className="rounded-lg"
          />
        </div>
        <div className="relative mb-2">
          <Image
            alt="Me standing on stage at SmashingConf giving a talk about my optimism for the web"
            src={newYear}
            priority
            className="rounded-lg"
          />
        </div>
        <div className="relative mb-2">
          <Image
            alt="Me and Guillermo Rauch on stage for Vercel Ship, answering questions from the Next.js community"
            src={shinjuku}
            priority
            className="rounded-lg"
          />
        </div>
        <div className="relative mb-2">
          <Image
            alt="My badge on top of a pile of badges from a Vercel meetup we held"
            src={fgn}
            priority
            className="rounded-lg"
          />
        </div>
        <div className="relative mb-2">
          <Image
            alt="My badge on top of a pile of badges from a Vercel meetup we held"
            src={director}
            priority
            className="rounded-lg"
          />
        </div>
      </div>
    </div>
  );
}

function removeFileExtension(fileName) {
  const lastDotIndex = fileName.lastIndexOf(".");
  if (lastDotIndex === -1) {
    return fileName; // No extension found
  }
  return fileName.slice(0, lastDotIndex);
}
