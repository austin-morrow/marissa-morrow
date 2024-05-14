<template>
  <header class="bg-[#F2F1EC]">
    <nav class="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
      <div class="flex lg:flex-1 text-2xl">
        <a href="/" class="-m-1.5 p-1.5 font-serif">
          <span class="sr-only">Your Company</span>
          <div>Marissa Morrow</div>
        </a>
      </div>
      <PopoverGroup class="flex flex-1 justify-end">
        <Popover class="relative">
          <PopoverButton class="flex items-center gap-x-1 text-2xl leading-6 text-gray-900 font-serif">
            Menu
          </PopoverButton>

          <transition enter-active-class="transition ease-out duration-200" enter-from-class="opacity-0 translate-y-1" enter-to-class="opacity-100 translate-y-0" leave-active-class="transition ease-in duration-150" leave-from-class="opacity-100 translate-y-0" leave-to-class="opacity-0 translate-y-1">
            <PopoverPanel class="absolute -right-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-[#52492D] shadow-lg ring-1 ring-gray-900/5">
              <div class="p-4">
                <div v-for="item in products" :key="item.name" class="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6">
                  <div class="flex-auto">
                    <a :href="item.href" class="block font-serif text-white text-xl">
                      {{ item.name }}
                      <span class="absolute inset-0" />
                    </a>
                  </div>
                </div>
              </div>
              <div class="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
               <!-- Add social icon -->
              </div>
            </PopoverPanel>
          </transition>
        </Popover>
      </PopoverGroup>
    </nav>
  </header>
</template>

<script setup>
import { ref } from 'vue'
import {
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from '@headlessui/vue'

const products = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Work', href: '/work' },
  { name: 'Contact', href: '/contact' },
]

const mobileMenuOpen = ref(false)
</script>