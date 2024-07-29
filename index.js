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
      const response = await fetch("https://pickle-1039.twil.io/api/pics");
      this.gallery = await response.json();
    },
  },
  mounted() {
    this.loadImages();
  },
});
