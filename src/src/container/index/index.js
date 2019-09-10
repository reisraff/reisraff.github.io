export default {
  name: 'home',
  data: function () {
    return {
      showAdvanced: false
    }
  },
  methods: {
    reload: function () {
      window.location.reload();
    }
  }
}
