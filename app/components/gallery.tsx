import Image from "next/image";

export default function Gallery() {
  return (
    <>
      <Image
        src="/images/graduation.jpeg"
        height={144}
        width={144}
        alt="graduation"
      />
    </>
  );
}
