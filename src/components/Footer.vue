<template>
  <footer>
    <div
      class="px-6 lg:px-8 pt-8 w-full sm:pt-16 lg:pt-24 text-white font-kaisei-decol bg-[#52492D]"
    >
      <div class="mx-auto max-w-2xl lg:max-w-none">
        <div class="pb-8">
          <div class="text-lg">Get in touch</div>
          <div class="text-4xl">marissa.jackson13@gmail.com</div>
        </div>
        <div class="grid grid-cols-1 gap-y-16 lg:grid-cols-2">
          <nav>
            <div class="grid grid-cols-2 gap-4">
              <div v-for="(section, index) in sections" :key="index">
                <ul class="text-white font-kaisei-decol">
                  <li
                    v-for="(link, linkIndex) in section.links"
                    :key="linkIndex"
                    class="mb-4"
                  >
                    <a :href="link.url">{{ link.text }}</a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
          <div class="flex lg:justify-end"></div>
        </div>
        <div class="pt-8 pb-4">© 2024 Marissa Morrow. All rights reserved.</div>
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
            { text: "Works", url: "/works" },
            { text: "Contact", url: "/contact" },
          ],
        },
      ],
    };
  },
};
</script>
