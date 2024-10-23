<template>
  <h1 @click="changeText">{{ bigText }}</h1>
</template>

<script>
export default {
  data() {
    return {
      text: 'Vue works'
    }
  },
  methods: {
    changeText() {
      this.text = 'Updated text'
    }
  },
  computed: {
    bigText() {
      return this.text.toUpperCase();
    }
  },
  watch: {

  }
}
</script>
