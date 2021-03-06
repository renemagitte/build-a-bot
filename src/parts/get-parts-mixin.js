export default {
  created() {
    this.$store.dispatch('robots/getParts');
  },
  computed: {
    parts() {
      // "returns parts from store or a resonable default object..."
      return this.$store.state.robots.parts || {
        heads: [],
        arms: [],
        torsos: [],
        bases: [],
      };
    },
  },
};
