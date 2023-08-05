import N404 from "@/public/assets/images/notfound.jpg";
import Image from "next/image";

export default function NotFound() {
  return (
    <>
      <div className="w-full h-screen justify-center items-center">
        <div>
          <Image src={N404} />
        </div>
      </div>
    </>
  );
}
