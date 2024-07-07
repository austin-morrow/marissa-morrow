<template>
  <div
    class="header relative isolate overflow-hidden bg-[#F5F5F3] px-6 lg:overflow-visible lg:px-0"
  >
    <!-- Hero Section -->
    <section
      class="mx-auto max-w-7xl flex flex-col items-center py-6 lg:grid grid-cols-1 lg:grid-cols-2 gap-x-2 lg:gap-y-10 lg:mx-0 lg:max-w-none"
    >
      <div class="lg:sticky lg:top-4 lg:col-start-1 flex justify-center pb-8">
        <img
          class="w-5/6 max-w-none bg-gray-900 shadow-xl ring-1 ring-gray-400/10"
          src="../assets/images/hero_img.png"
          alt="Hero Image"
        />
      </div>
      <div
        class="lg:col-start-2 flex flex-col justify-center items-center lg:items-start"
      >
        <div class="text-center lg:text-left">
          <h2
            class="text-balance text-xl font-kaisei-decol tracking-tight text-neutral-800 sm:text-2xl lg:text-4xl lg:leading-tight xl:text-4xl xl:leading-tight"
          >
            Crafting narratives in every frame, I am a visual storyteller and
            photographer, capturing the essence of life's stories through my
            lens.
          </h2>
        </div>
      </div>
    </section>

    <section class="content">
      <section class="portfolio-grid-overlay collection-content-wrapper">
        <div class="grid-item">
          <div class="grid-image">
            <div class="grid-image-inner-wrapper">
              <h2 class="text-3xl font-kaisei-decol leading-normal tracking-wide">
                Life insurance is really doin’ <br />exactly what you like
                <br />And love ‘cause that’s that shit that keep the fire
                lightin’ up <br />Get out the dark and spark, yeah
                <br />Gon’ head, lighten up || Smino
              </h2>
            </div>
          </div>
        </div>

        <div class="grid-item">
          <div class="grid-image">
            <div class="grid-image-inner-wrapper">
              <img
                src="../assets/images/image_2.JPG"
                alt="Image 4"
                class="custom-image-class"
                width="1200"
                height="1800"
                sizes="(max-width: 767px) 100vw, 50vw"
                style="display: block; object-position: 50% 50%"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>
    </section>

    <section class="content">
      <section class="portfolio-grid-overlay collection-content-wrapper">
        <div class="grid-item">
          <div class="grid-image">
            <div class="grid-image-inner-wrapper">
              <img
                src="../assets/images/IMG_2873.jpg"
                alt="Image 3"
                width="1658"
                height="2500"
                sizes="(max-width: 767px) 100vw, 50vw"
                style="display: block; object-position: 50% 50%"
                loading="lazy"
              />
            </div>
          </div>
        </div>

        <div class="grid-item">
          <div class="grid-image">
            <div class="grid-image-inner-wrapper">
              <img
                src="../assets/images/IMG_6877.jpg"
                alt="Image 4"
                width="1658"
                height="2500"
                sizes="(max-width: 767px) 100vw, 50vw"
                style="display: block; object-position: 50% 50%"
                loading="lazy"
              />
            </div>
          </div>
        </div>

        <div class="my-4 px-4 pb-16">
          <div class="font-kaisei-decol mb-4 text-4xl">Portfolio</div>
          <div class="flex flex-wrap">
            <div
              v-for="(work, index) in works"
              :key="work.name"
              class="flex justify-center"
            >
              <a :href="work.href" class="text-xl font-kaisei-decol text-black">
                {{ work.name }}
              </a>
              <span v-if="index < works.length - 1" class="mx-6">|</span>
            </div>
          </div>
        </div>
      </section>
    </section>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";

const router = useRouter();

const works = [
  { name: "Concerts", href: `/portfolio?category=Concerts` },
  { name: "Portraits", href: `/portfolio?category=Portraits` },
];

// Extract category from URL query parameters
const params = new URLSearchParams(window.location.search);
const category = params.get("category");

// Function to navigate to works page with selected category
const navigateToWorks = (category) => {
  router.push(`/portfolio?category=${category}`);
};
</script>

<style>
.main-container {
  position: relative;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  max-width: calc((80rem) + 2 * (2.75rem));
  padding: 0 (2.75rem);
}

.portfolio-grid-overlay {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  grid-column-gap: 80px;
  grid-row-gap: 75px;
  grid-auto-columns: min-content;
  padding-top: 3.3vw;
  padding-bottom: 3.3vw;
  min-height: 33vh;
  max-width: 1400px;
  padding-left: 6vw;
  padding-right: 6vw;
  margin: 0 auto;
}

.collection-content-wrapper {
  width: 100%;
  box-sizing: border-box;
}

.portfolio-grid-overlay .grid-item {
  position: relative;
  padding-top: 150%;
}

.portfolio-grid-overlay .grid-item .grid-image {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
}

.portfolio-grid-overlay .grid-item .grid-image .grid-image-inner-wrapper {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

.content {
  width: 100%;
}

.custom-image-class {
  max-width: 80%;
  max-height: 80%;
}
</style>
