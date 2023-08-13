import Image from "next/image";

export default function Gallery() {
  const images = [
    "Admiring Teamlab.jpg",
    "After fierce softball game.jpg",
    "At farewell party of a friend.jpg",
    "At school library during lunar new year.jpg",
    "Beautiful Shinjuku Goen.jpg",
    "Completed 12km run.jpg",
    "Founder Institute Graduation.jpeg",
    "Hanging out.jpg",
    "Hiking near Tokyo.jpg",
    "New year celebration.jpg",
    "Rakuten Travel Tech MVP of the month.jpg",
    "Visited FGN event  in Fukuoka.jpg",
    "With our director at Founder Institute graduation.jpg",
  ];
  return (
    <div className="flex flex-row flex-wrap justify-center">
      {images.map((imageName) => {
        return (
          <div key={imageName} className="w-52 whitespace-normal">
            <Image
              src={`/images/gallery/${imageName}`}
              height={200}
              width={200}
              quality={50}
              // className="transition-opacity opacity-0 duration-[2s] p-1 md:p-2 rounded-lg overflow-hidden"
              // onLoadingComplete={(image) => image.classList.remove("opacity-0")}
              alt="graduation"
            />
            <p>{removeFileExtension(imageName)}</p>
          </div>
        );
      })}
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
