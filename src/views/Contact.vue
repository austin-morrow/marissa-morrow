<template>
  <div
    class="relative isolate overflow-hidden bg-[#F5f5f3] lg:overflow-visible lg:px-16"
  >
    <div class="grid sm:grid-cols-2">
      <div class="flex flex-col items-center sm:order-1 pt-16">
        <div class="text-xl font-kaisei-decol">
        <img
          src="../assets/images/IMG_1845.JPG"
          alt="Image"
          class="w-full h-auto max-w-[500px] lg:max-w-[700px] lg:h-auto py-4"
        />
      </div>
      </div>

      <div class="flex flex-col items-center sm:order-2">
        <div style="width: 100%">
          <iframe
            ref="hecticForm"
            allowtransparency="true"
            style="border: 0; width: 100%; height: 800px"
            :height="iframeHeight"
          ></iframe>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  mounted() {
    // Access the iframe element using $refs
    const hecticFrame = this.$refs.hecticForm;

    // Set the iframe source
    hecticFrame.src =
      "https://hello.withmoxie.com/01/morrow-manor-photography/marissa-website-form?inFrame=true&sourceUrl=" +
      encodeURIComponent(window.location.href);

    // Set up iframe resizing after it's loaded
    hecticFrame.onload = () => {
      this.resizeIframe();
    };
  },
  methods: {
    resizeIframe() {
      // Resize the iframe using iframe-resizer
      iFrameResize(
        {
          heightCalculationMethod: "taggedElement", // Use the height of the content inside the iframe
          log: false,
          checkOrigin: false,
        },
        this.$refs.hecticForm
      );

      // Optional: Adjust iframe height dynamically
      const contentHeight =
        this.$refs.hecticForm.contentWindow.document.body.scrollHeight;
      this.iframeHeight = `${contentHeight}px`;
    },
  },
};
</script>
