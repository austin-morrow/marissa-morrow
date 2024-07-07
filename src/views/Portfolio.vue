<template>
  <div class="p-5 md:p-10 bg-[#f5f5f3]">
    <div class="mb-5 flex justify-center font-kaisei-decol">
      <template v-for="(category, index) in categories" :key="index">
        <div
          class="text-lg font-semibold cursor-pointer py-20 px-4 "
          :class="{ 'text-[#3e431a]': selectedCategory === category }"
          @click="selectCategory(category)"
        >
          {{ category }}
        </div>
        <span v-if="index !== categories.length - 1" class="mx-2 py-20 ">|</span>
      </template>
    </div>

    <div class="columns-1 gap-5 lg:gap-8 sm:columns-2 lg:columns-3 xl:columns-4 space-y-5 lg:space-y-8">
      <div v-for="(image, index) in filteredImages" :key="index" class="relative overflow-hidden">
        <img
          :src="image.src"
          :alt="image.alt"
          loading="lazy"
          class="object-cover w-full h-full"
        />
      </div>
    </div>
  </div>
</template>

<script>
import img1 from '../assets/works/IMG_1333.JPG';
import img2 from '../assets/works/IMG_1830.JPG';
import img3 from '../assets/works/IMG_1831.JPG';
import img4 from '../assets/works/IMG_1832.JPG';
import img5 from '../assets/works/IMG_1833.JPG';
import img6 from '../assets/works/IMG_1834.JPG';
import img7 from '../assets/works/IMG_1835.JPG';
import img8 from '../assets/works/IMG_1836.JPG';
import img9 from '../assets/works/IMG_1838.JPG';
import img10 from '../assets/works/IMG_1839.JPG';
import img11 from '../assets/works/IMG_1840.JPG';
import img12 from '../assets/works/IMG_1841.JPG';

export default {
  name: 'Portfolio',
  data() {
    return {
      selectedCategory: 'All',
      images: [
        { src: img1, alt: "Image 1", category: "Concerts" },
        { src: img2, alt: "Image 2", category: "Concerts" },
        { src: img3, alt: "Image 3", category: "Concerts" },
        { src: img4, alt: "Image 4", category: "Portraits" },
        { src: img5, alt: "Image 5", category: "Portraits" },
        { src: img6, alt: "Image 6", category: "Portraits" },
        { src: img7, alt: "Image 7", category: "Portraits" },
        { src: img8, alt: "Image 8", category: "Portraits" },
        { src: img9, alt: "Image 9", category: "Concerts" },
        { src: img10, alt: "Image 10", category: "Portraits" },
        { src: img11, alt: "Image 11", category: "Portraits" },
        { src: img12, alt: "Image 12", category: "Portraits" },
      ],
    };
  },
  computed: {
    filteredImages() {
      if (this.selectedCategory === 'All') {
        return this.images;
      }
      return this.images.filter(image => image.category === this.selectedCategory);
    },
    categories() {
      return ['All', 'Concerts', 'Portraits'];
    }
  },
  methods: {
    selectCategory(category) {
      this.selectedCategory = category;
      this.updateURL(category);
    },
    updateURL(category) {
      const params = new URLSearchParams(window.location.search);
      params.set('category', category);
      window.history.replaceState({}, '', `${window.location.pathname}?${params}`);
    }
  },
  mounted() {
    const params = new URLSearchParams(window.location.search);
    const category = params.get('category');
    if (category && this.categories.includes(category)) {
      this.selectedCategory = category;
    }
  }
};
</script>

<style scoped>
/* Add your styles here */
</style>
