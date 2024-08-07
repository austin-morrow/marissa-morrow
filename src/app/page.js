"use client"

import Image from "next/image";
import { useRouter } from 'next/navigation';

export default function Home() {

  const router = useRouter();

  const handleNavigation = (category) => {
    router.push(`/portfolio/?category=${category}`);
  };

  return (
    <div className="overflow-hidden bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 items-center">
          <Image
            src="/images/hero_img.png"
            alt="Picture of Marissa"
            className="lg:pr-8 lg:pt-4"
            width={2432}
            height={1442}
          />
          <div className="lg:max-w-lg">
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Crafting narratives in every frame, I am a visual storyteller and
              photographer, capturing the essence of life's stories through my
              lens.
            </p>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 items-center">
          <div className="lg:max-w-lg">
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Life insurance is really doin’ exactly what you like And love
              ‘cause that’s that shit that keep the fire lightin’ up Get out the
              dark and spark, yeah Gon’ head, lighten up || Smino exactly what
              you like And love ‘cause that’s that shit that keep the fire
              lightin’ up Get out the dark and spark, yeah Gon’ head, lighten up
              || Smino
            </p>
          </div>
          <Image
            src="/images/home_quote.jpg"
            alt="Example photo"
            className="lg:pr-8 lg:pt-4"
            width={2432}
            height={1442}
          />
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 items-center">
          <Image
            src="/images/home_concerts.jpg"
            alt="Example photo"
            className="lg:pr-8 lg:pt-4"
            width={2432}
            height={1442}
          />
          <Image
            src="/images/home_portraits.jpg"
            alt="Example photo"
            className="lg:pr-8 lg:pt-4"
            width={2432}
            height={1442}
          />
        </div>
        <div className='pt-12'>
      <div className='text-3xl'>Portfolio</div>
      <div className='flex flex-row gap-x-4 pt-4 text-lg'>
        <div className='cursor-pointer' onClick={() => handleNavigation('concerts')}>Concerts</div>
        <div>|</div>
        <div className='cursor-pointer' onClick={() => handleNavigation('portraits')}>Portraits</div>
      </div>
    </div>
      </div>
    </div>
  );
}
