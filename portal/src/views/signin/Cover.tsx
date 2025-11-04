import Image from "next/image";

export default function Cover() {
  return (
    <div className="bg-primary-foreground w-full relative">
      <div className="w-full h-full absolute bg-linear-to-r from-background via-background/0 to-background  top-0 right-0"></div>
      <div className=" bg-primary-foreground rounded-lg">
        <Image
          src="/auth-cover.png"
          alt={"feature"}
          width={400}
          height={400}
          className=" h-screen w-max object-cover"
        />
      </div>
    </div>
  );
}
