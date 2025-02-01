"use client"

import React, { useEffect, useRef } from 'react';
import Image from 'next/image'

export default function Contact() {

  const iframeRef = useRef(null);

  useEffect(() => {
    const hecticFrame = iframeRef.current;
    hecticFrame.src = `https://hello.withmoxie.com/01/morrow-manor-photography/marissa-website-form?inFrame=true&sourceUrl=${encodeURIComponent(window.location.href)}`;

    const resizeIframe = () => {
      iframeResizer(
        { heightCalculationMethod: 'min', sizeWidth: true, sizeHeight: true, log: false, checkOrigin: false },
        hecticFrame
      );
    };

    const timeoutId = setTimeout(resizeIframe, 100);

    return () => clearTimeout(timeoutId);
  }, []);
    return (
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 items-center">
          <Image
            src="/images/contact.png"
            alt="Picture of Marissa"
            className="lg:pr-8 lg:pt-4"
            width={2432}
            height={1442}
          />
      <div className="w-full min-h-[500px]">
      <iframe
        id="hectic-form"
        ref={iframeRef}
        allowTransparency="true"
        className="p-0 m-0 border-0 max-w-full min-w-full"
      />
    </div>
        </div>
      </div>
    );
  }
  