"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Dialog, DialogPanel } from "@headlessui/react";
import { IoLogoInstagram } from "react-icons/io5";
import { IconContext } from "react-icons";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header>
      <nav
        aria-label="Global"
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
      >
        <div className="flex lg:flex-1">
        <Link href="/" className="-m-1.5 p-1.5">
            <h1>Marissa Morrow</h1>
            </Link>
        </div>
        <div className="flex lg:flex-1 lg:justify-end">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <div>MENU</div>
          </button>
        </div>
      </nav>
      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="">
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-[#3E431A] px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
          <Image
                src="/images/flower.png"
                alt="flowers"
                width={75}
                height={75}
              />
          
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-white"
            >
              <div>CLOSE</div>
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-white-500/10">
              <div className="space-y-2 py-6">
                <Link
                  href="/"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white"
                >
                  Home
                </Link>
                <Link
                  href="/about"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white"
                >
                  About
                </Link>
                <Link
                  href="/portfolio"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white"
                >
                  Portfolio
                </Link>
                <Link
                  href="/pricing"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white"
                >
                  Pricing
                </Link>
                <Link
                  href="/contact"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white"
                >
                  Contact
                </Link>
              </div>
              <div className="py-6">
              <IconContext.Provider
              value={{ color: "white", className: "global-class-name" }}
            >
              <IoLogoInstagram />
            </IconContext.Provider>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}
