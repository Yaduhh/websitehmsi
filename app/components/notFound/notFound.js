import N404 from "@/public/assets/images/notfound.jpg";
import Image from "next/image";

export default function NotFound() {
  return (
    <>
      <div className="w-screen h-screen justify-center items-center overflow-hidden">
        <div>
          <Image src={N404} />
        </div>
      </div>
    </>
  );
}
