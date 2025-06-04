"use client";

import { useState } from "react";
import Image from "next/image";

import Link from "next/link";
import {
  Dialog,
  DialogPanel,
  // Disclosure,
  // DisclosureButton,
  // DisclosurePanel,
  //Popover,
  //PopoverButton,
  PopoverGroup,
  //PopoverPanel,
} from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

//import { ChevronDownIcon } from "@heroicons/react/20/solid";

// const products = [
//   { name: "Creative Portraits" },
//   { name: "Family/Couples" },
//   { name: "Elopements and small weddings" },
//   { name: "Concerts/Band Promos" },
// ];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white font-serif">
      <nav
        aria-label="Global"
        className="relative mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8 my-24"
      >
        <div className="flex lg:hidden">
          <Link
            href={{
              pathname: "/",
            }}
            className="-m-1.5 p-1.5"
          >
            <div className="text-xl font-light">Marissa Morrow</div>
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="size-6" />
          </button>
        </div>
        <div className="absolute left-1/2 transform -translate-x-1/2 flex flex-col items-center">
          <div className="text-2xl font-lighttracking-wide hidden lg:flex mb-8 mt-14">
            <Link
              href={{
                pathname: "/",
              }}
            >
              <Image
                alt=""
                src="/images/marissalogo.png"
                width={200}
                height={64}
                className="
                object-cover mx-auto"
                style={{ maxWidth: "200px", width: "150px", height: "auto" }}
              />
            </Link>
          </div>
          <PopoverGroup className="hidden lg:flex lg:gap-x-12">
            {/* Eventually create seperate pages for each photo shoot type */}
            {/* <Popover className="relative">
              <PopoverButton className="flex items-center gap-x-1 text-sm/6 font-semibold text-gray-900">
                Portfolio
                <ChevronDownIcon
                  aria-hidden="true"
                  className="size-5 flex-none text-gray-400"
                />
              </PopoverButton>

              <PopoverPanel
                transition
                className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
              >
                <div className="p-4">
                  {products.map((item) => (
                    <div
                      key={item.name}
                      className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm/6 hover:bg-gray-50"
                    >
                      <div className="flex-auto">
                        <a
                          href={item.href}
                          className="block font-semibold text-gray-900"
                        >
                          {item.name}
                          <span className="absolute inset-0" />
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </PopoverPanel>
            </Popover> */}
            <Link
              className="text-md/6 font-light tracking-wide text-gray-900"
              href={{
                pathname: "/",
              }}
            >
              Home
            </Link>
            <Link
              className="text-md/6 font-light tracking-wide text-gray-900"
              href={{
                pathname: "/portfolio",
              }}
            >
              Portfolio
            </Link>

            <Link
              className="text-md/6 font-light tracking-wide text-gray-900"
              href={{
                pathname: "/about",
              }}
            >
              About
            </Link>
            <Link
              className="text-md/6 font-light tracking-wide text-gray-900"
              href={{
                pathname: "/details",
              }}
            >
              Details
            </Link>
            <Link
              className="text-md/6 font-light tracking-wide text-gray-900"
              href={{
                pathname: "/pricing",
              }}
            >
              Pricing
            </Link>
            <Link
              className="text-md/6 font-light tracking-wide text-gray-900"
              href={{
                pathname: "/contact",
              }}
            >
              Contact
            </Link>
          </PopoverGroup>
        </div>
      </nav>
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden"
      >
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                alt=""
                src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
                className="h-8 w-auto"
              />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="mt-6 flow-root font-serif">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {/* Eventually create seperate pages for each photo shoot type */}
                {/* <Disclosure as="div" className="-mx-3">
                  <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">
                    Portfolio
                    <ChevronDownIcon
                      aria-hidden="true"
                      className="size-5 flex-none group-data-[open]:rotate-180"
                    />
                  </DisclosureButton>
                  <DisclosurePanel className="mt-2 space-y-2">
                    {[...products].map((item) => (
                      <DisclosureButton
                        key={item.name}
                        as="a"
                        href={item.href}
                        className="block rounded-lg py-2 pl-6 pr-3 text-sm/7 font-semibold text-gray-900 hover:bg-gray-50"
                      >
                        {item.name}
                      </DisclosureButton>
                    ))}
                  </DisclosurePanel>
                </Disclosure> */}
                <Link
                  href={{
                    pathname: "/",
                  }}
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-light tracking-wide text-gray-900 hover:bg-gray-50"
                >
                  Home
                </Link>
                <Link
                  href={{
                    pathname: "/portfolio",
                  }}
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-light tracking-wide text-gray-900 hover:bg-gray-50"
                >
                  Portfolio
                </Link>
                <Link
                  href={{
                    pathname: "/about",
                  }}
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-light tracking-wide text-gray-900 hover:bg-gray-50"
                >
                  About
                </Link>
                <Link
                  href={{
                    pathname: "/details",
                  }}
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-light tracking-wide text-gray-900 hover:bg-gray-50"
                >
                  Details
                </Link>
                <Link
                  href={{
                    pathname: "/pricing",
                  }}
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-light tracking-wide text-gray-900 hover:bg-gray-50"
                >
                  Pricing
                </Link>
                <Link
                  href={{
                    pathname: "/contact",
                  }}
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-light tracking-wide text-gray-900 hover:bg-gray-50"
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}
