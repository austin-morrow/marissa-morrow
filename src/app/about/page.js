import Image from "next/image";
import AboutImg from '../../../public/images/about.png'

export default function About() {
  return (
    <div className="overflow-hidden bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 items-center">
          <div className="lg:max-w-lg">
            <p className="mt-2 text-2xl tracking-tight text-gray-900 sm:text-3xl">
              As someone deeply rooted in the art of storytelling and capturing
              moments, my journey revolves around inspiring happiness and
              fulfillment through photography. With each click of the shutter, I
              strive to weave narratives that resonate with authenticity and
              emotion. Join me as I continue to refine my craft, find purpose,
              and uncover joy behind the lens.
            </p>
          </div>
          <Image
            src={AboutImg}
            alt="Example photo"
            className="lg:pr-8 lg:pt-4"
            width={2432}
            height={1442}
          />
        </div>
      </div>
    </div>
  );
}
