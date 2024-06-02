<!-- <template>
  <header class="bg-[#F2F1EC] pt-6">
    <nav class="container mx-auto flex items-center justify-between p-6 lg:px-8" aria-label="Global">
      <div class="flex lg:flex-1 text-2xl">
        <a href="/" class="-m-1.5 p-1.5 font-kaisei-decol">
          <span class="sr-only">Your Company</span>
          <div>Marissa Morrow</div>
        </a>
      </div>
      <PopoverGroup class="flex flex-1 justify-end">
        <Popover class="relative">
          <PopoverButton
            class="popover-button-double-underline flex items-center gap-x-1 text-xl leading-6 text-gray-900 font-kaisei-decol"
          >
            Menu
          </PopoverButton>

          <transition
            enter-active-class="transition ease-out duration-200"
            enter-from-class="opacity-0 translate-y-1"
            enter-to-class="opacity-100 translate-y-0"
            leave-active-class="transition ease-in duration-150"
            leave-from-class="opacity-100 translate-y-0"
            leave-to-class="opacity-0 translate-y-1"
          >
            <PopoverPanel
              class="absolute right-0 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-[#52492D] shadow-lg ring-1 ring-gray-900/5"
            >
              <div class="p-4">
                <div
                  v-for="item in products"
                  :key="item.name"
                  class="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6"
                >
                  <div class="flex-auto">
                    <a
                      :href="item.href"
                      class="block font-kaisei-decol text-white text-xl"
                    >
                      {{ item.name }}
                      <span class="absolute inset-0"></span>
                    </a>
                  </div>
                </div>
              </div>
              <div class="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
               Add social icon  
              </div>
            </PopoverPanel>
          </transition>
        </Popover>
      </PopoverGroup>
    </nav>
  </header>
</template>

<script setup>
import { ref } from "vue";
import { Popover, PopoverButton, PopoverGroup, PopoverPanel } from "@headlessui/vue";

const products = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Works", href: "/works" },
  { name: "Contact", href: "/contact" },
];
</script>

<style>
.popover-button-double-underline {
  position: relative;
  display: inline-block;
}

.popover-button-double-underline::after,
.popover-button-double-underline::before {
  content: "";
  display: block;
  width: 100%;
  height: 1px;
  background-color: currentColor;
  position: absolute;
  left: 0;
}

.popover-button-double-underline::before {
  bottom: -5px;
}

.popover-button-double-underline::after {
  bottom: -10px;
}

* {
  box-sizing: border-box;
}

html, body {
  overflow-x: hidden;
}
</style> -->

<template>
  <div class="bg-[#F2F1EC]">
    <header class="absolute inset-x-0 top-0 z-50">
      <nav
        class="flex items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div class="flex lg:flex-1 text-2xl">
          <a href="/" class="-m-1.5 p-1.5 font-kaisei-decol">
            <span class="sr-only">Your Company</span>
            <div>Marissa Morrow</div>
          </a>
        </div>
        <div class="flex">
          <button
            type="button"
            class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            @click="mobileMenuOpen = true"
          >
            <span class="sr-only">Open main menu</span>
            <div
              class="popover-button-double-underline flex items-center gap-x-1 text-xl leading-6 text-gray-900 font-kaisei-decol"
            >
              Menu
            </div>
          </button>
        </div>
      </nav>
      <Dialog @close="mobileMenuOpen = false" :open="mobileMenuOpen">
        <div class="fixed inset-0 z-50" />
        <DialogPanel
          class="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-[#52492D] px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10"
        >
          <div class="flex items-center justify-between">
            <a href="#" class="-m-1.5 p-1.5">
              <span class="sr-only">Your Company</span>
              <img
                class="h-20 w-auto rotate-12"
                src="../assets/images/flower_white.png"
                alt=""
              />
            </a>
            <button
              type="button"
              class="-m-2.5 rounded-md p-2.5 text-gray-700"
              @click="mobileMenuOpen = false"
            >
              <span class="sr-only">Close menu</span>
              <div
                class="popover-button-double-underline flex items-center gap-x-1 text-xl leading-6 text-[#F0EAE2] font-kaisei-decol"
              >
                Close
              </div>
            </button>
          </div>
          <div class="mt-6 flow-root">
            <div class="-my-6 divide-y divide-gray-500/10">
              <div class="space-y-2 py-6">
                <a
                  v-for="item in navigation"
                  :key="item.name"
                  :href="item.href"
                  class="-mx-3 block rounded-lg px-3 py-2 font-kaisei-decol leading-7 text-[#F0EAE2]"
                  >{{ item.name }}</a
                >
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { Dialog, DialogPanel } from "@headlessui/vue";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Works", href: "/works" },
  { name: "Pricing", href: "/pricing" },
  { name: "Contact", href: "/contact" },
];

const mobileMenuOpen = ref(false);
</script>

<style>
.popover-button-double-underline {
  position: relative;
  display: inline-block;
}

.popover-button-double-underline::after,
.popover-button-double-underline::before {
  content: "";
  display: block;
  width: 100%;
  height: 1px;
  background-color: currentColor;
  position: absolute;
  left: 0;
}

.popover-button-double-underline::before {
  bottom: -5px;
}

.popover-button-double-underline::after {
  bottom: -10px;
}

* {
  box-sizing: border-box;
}

html,
body {
  overflow-x: hidden;
}
</style>
