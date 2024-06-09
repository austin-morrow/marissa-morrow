<template>
  <footer class="relative bg-[#52492D]">
    <div class="px-6 lg:px-8 pt-8 w-full lg:pt-24 text-white font-kaisei-decol">
      <div class="mx-auto max-w-2xl lg:max-w-none">
        <div class="pb-8">
          <div class="text-base sm:text-lg">Get in touch</div>
          <div class="text-xl sm:text-2xl">marissa.jackson13@gmail.com</div>
        </div>
        <div class="grid grid-cols-1 lg:grid-cols-2 relative z-10">
          <nav>
            <div class="grid grid-cols-3">
              <div v-for="(section, index) in sections" :key="index">
                <ul class="text-white font-kaisei-decol">
                  <li v-for="(link, linkIndex) in section.links" :key="linkIndex" class="mb-2">
                    <a :href="link.url">{{ link.text }}</a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
        <div class="pt-8 pb-4 text-sm sm:text-md">© 2024 Marissa Morrow. All rights reserved.</div>
      </div>
      <div class="hidden sm:flex absolute top-0 right-0 bottom-0 justify-end">
        <img class="max-h-full max-w-full rotate-12 object-contain" src="../assets/images/flower_white.png" alt="Flower" />
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      currentYear: new Date().getFullYear(),
      sections: [
        {
          links: [
            { text: "Home", url: "/" },
            { text: "About", url: "/about" },
          ],
        },
        {
          links: [
            { text: "Work", url: "/work" },
            { text: "Pricing", url: "/pricing" },
          ],
        },
        {
          links: [
            { text: "Contact", url: "/contact" },
          ],
        },
      ],
    };
  },
};
</script>

<style>
footer {
  position: relative;
  overflow: hidden;
}
</style>
