<template>
  <div class="bg-[#F2F1EC]">
    <header class="inset-x-0 top-0 z-50 pt-2">
      <nav
        class="container mx-auto flex items-center justify-between p-6 lg:px-8" aria-label="Global"
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
                class="h-24 w-auto rotate-12"
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
                  class="-mx-3 block rounded-lg px-3 py-2 font-kaisei-decol text-5xl text-[#F0EAE2]"
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
