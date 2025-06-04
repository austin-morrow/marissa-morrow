"use client";

import Scroll from "./components/Scroll";

export default function Home() {
  return (
    <div className="overflow-hidden">
      <div className="lg:py-8">
        <Scroll />
      </div>

      {/* Possibly put in another page */}

      {/* <div className="mx-auto max-w-7xl px-6 lg:px-8 pb-24">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 items-center">
          <div className="lg:max-w-lg">
            <p className="mt-2 text-3xl tracking-tight text-gray-900">
              Life insurance is really doin’ exactly what you like And love
              ‘cause that’s that shit that keep the fire lightin’ up Get out the
              dark and spark, yeah Gon’ head, lighten up || Smino
            </p>
          </div>
        </div>
      </div> */}
    </div>
  );
}
