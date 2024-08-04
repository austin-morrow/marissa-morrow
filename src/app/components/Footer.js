import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <main className="mx-auto bg-[#3E431A] px-6 lg:px-8 mt-24 w-full sm:mt-32 lg:mt-40">
      <div className="mx-auto max-w-2xl lg:max-w-none">
        <div className="opacity: 1; transform: none;">
          <div className="grid grid-cols-1">
            <div className="text-white text-lg">Get in touch</div>
            <div className="text-white text-3xl">marissa.jackson13@gmail.com</div>
          </div>
          <div className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2">
            <nav>
              <ul
                role="list"
                className="grid grid-cols-2 sm:grid-cols-3 max-w-md"
              >
                <li>
                  <ul role="list" className="mt-4 text-sm text-white">
                    <li className="mt-4">Home</li>
                    <li className="mt-4">About</li>
                  </ul>
                </li>
                <li>
                  <ul role="list" className="mt-4 text-sm text-white">
                    <li className="mt-4">Work</li>
                    <li className="mt-4">Pricing</li>
                  </ul>
                </li>
                <li>
                  <ul role="list" className="mt-4 text-sm text-white">
                    <li className="mt-4">Contact</li>
                  </ul>
                </li>
              </ul>
            </nav>
            <div className="flex lg:justify-end">
              <Image
                src="/images/flower.png"
                alt="flowers"
                width={75}
                height={75}
              />
            </div>
          </div>
          <div className="mt-24 flex flex-wrap items-end justify-between gap-x-6 gap-y-4">
            <Link href="/" className="text-white">
              <div>© 2024 Marissa Morrow. All rights reserved.</div>
            </Link>
            <div className="text-white">Instragram</div>
          </div>
        </div>
      </div>
    </main>
  );
}
