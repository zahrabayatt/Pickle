Vue.use(VueSilentbox.default);
const app = new Vue({
  el: "#app",
  data() {
    return {
      callToAction: "Submit your photos!",
      gallery: [],
    };
  },
  methods: {
    async loadImages() {
      // TODO: Use the Messaging API to use submitted photos
      // const response = await fetch("/api/")
      // TODO: Create a web-based API that matches this expected response
      this.gallery = [
        {
          src: "https://picsum.photos/id/82/200/300",
          description: "Look at these flowers",
          alt: "some flowers",
          thumbnailWidth: "200px",
        },
        {
          src: "https://picsum.photos/id/19/300/300",
          description: "A tree",
          alt: "It is beautiful:)",
          thumbnailWidth: "200px",
        },
      ];
    },
  },
  mounted() {
    this.loadImages();
  },
});
