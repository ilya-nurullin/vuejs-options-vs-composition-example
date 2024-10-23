<template>
  <div>
    <h1 @click="changeText">{{ bigText }}</h1>
    <input type="text" v-model="suffix">
  </div>
</template>

<script setup>
import { computed, reactive, ref } from "vue";

const text = ref('Vue works')
const suffix = ref('')

function changeText() {
  text.value = 'Updated text'
}

const bigText = computed(() => text.value + suffix.value)

const arr = reactive("asdf")
console.log(arr.length)
arr.push(4)
console.log(arr.length)
console.log(arr)
arr.length = []
console.log(arr.length)
</script>

