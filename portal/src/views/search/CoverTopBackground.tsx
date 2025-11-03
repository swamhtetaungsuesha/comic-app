import Image from "next/image";

export default function CoverTopBackground() {
  return (
    <div className="bg-primary-foreground w-full relative">
      <div className="w-full h-full absolute bg-linear-to-t from-background via-background/95 to-background  top-0 right-0"></div>
      <div className=" bg-primary-foreground rounded-lg">
        <Image
          src="/search-cover.jpg"
          alt={"feature"}
          width={400}
          height={400}
          className="w-full h-[600px] object-cover"
        />
      </div>
    </div>
  );
}
