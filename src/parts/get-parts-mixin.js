export default {
  created() {
    this.$store.dispatch('getParts');
  },
  computed: {
    parts() {
      // "returns parts from store or a resonable default object..."
      return this.$store.state.parts || {
        heads: [],
        arms: [],
        torsos: [],
        bases: [],
      };
    },
  },
};
