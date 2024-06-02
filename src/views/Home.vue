<template>
  <div
    class="relative isolate overflow-hidden bg-[#F2F1EC] px-6 sm:py-32 lg:overflow-visible lg:px-0"
  >
    <div
      class="mx-auto max-w-7xl flex flex-col items-center lg:grid grid-cols-1 lg:grid-cols-2 gap-x-16 lg:gap-y-10 lg:mx-0 lg:max-w-none"
    >
      <!-- Hero Section -->
      <div
        class="lg:sticky pt-4 lg:top-4 lg:col-start-1 flex justify-center pb-8"
      >
        <img
          class="w-full max-w-none bg-gray-900 shadow-xl ring-1 ring-gray-400/10"
          src="../assets/images/hero_img.png"
          alt="Hero Image"
        />
      </div>
      <div
        class="lg:col-start-2 flex flex-col justify-center items-center lg:items-start"
      >
        <div class="text-center lg:text-left">
          <h2
            class="text-balance text-xl font-kaisei-decol tracking-tight text-neutral-800 md:text-2xl lg:text-4xl lg:leading-tight xl:text-4xl xl:leading-tight"
          >
            Crafting narratives in every frame, I am a visual storyteller and
            photographer, capturing the essence of life's stories through my
            lens.
          </h2>
        </div>
      </div>
    </div>

    <!-- Section 1 -->
    <div class="container mx-auto text-center pt-9">
      <div class="grid gap-8 md:grid-cols-2 md:items-center">
        <div class="relative md:order-2">
          <img
            src="../assets/images/image_2.JPG"
            alt="Image 2"
            class="inset-0 w-full h-full"
          />
        </div>
        <div class="md:order-1">
          <h2
            class="text-balance text-xl font-kaisei-decol tracking-tight text-neutral-800 md:text-2xl lg:text-4xl lg:leading-tight xl:text-4xl xl:leading-tight"
          >
            Life insurance is really doin’ exactly what you like And love ‘cause
            that’s that shit that keep the fire lightin’ up Get out the dark and
            spark, yeah Gon’ head, lighten up || Smino
          </h2>
        </div>
      </div>
    </div>

    <!-- Section 2 -->
    <div class="container mx-auto pt-9">
      <div class="grid gap-8 md:grid-cols-2 md:items-center">
        <div class="flex justify-center md:order-1">
          <img
            src="../assets/images/IMG_2873.jpg"
            alt="Image 3"
            class="w-full h-auto max-w-full lg:max-w-96"
          />
        </div>
        <div class="flex justify-center md:order-2">
          <img
            src="../assets/images/IMG_6877.jpg"
            alt="Image 4"
            class="w-full h-auto max-w-full lg:max-w-96"
          />
        </div>
      </div>

      <div class="my-8 px-4">
        <div class="font-kaisei-decol mb-4 text-2xl">Works</div>
        <div class="flex flex-wrap gap-4">
          <div
            v-for="(work, index) in works"
            :key="work.name"
            class="flex justify-center"
          >
            <a :href="work.href" class="text-lg font-kaisei-decol text-black">
              {{ work.name }}
            </a>
            <span v-if="index < works.length - 1" class="mx-2">|</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

const works = [
  { name: "Concerts", href: `/works?category=Concerts` },
  { name: "Portraits", href: `/works?category=Portraits` },
];

// Extract category from URL query parameters
const params = new URLSearchParams(window.location.search);
const category = params.get('category');

// Function to navigate to works page with selected category
const navigateToWorks = (category) => {
  router.push(`/works?category=${category}`);
};
</script>
