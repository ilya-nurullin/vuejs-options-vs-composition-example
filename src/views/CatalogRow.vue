<template>
  <tr>
    <td>{{ item.id }}</td>
    <td>{{ item.title }}</td>
    <td>{{ item.price }}</td>
    <td>
      <input type="number" v-model="count" />
      {{ inCart }} в корзине
    </td>
    <td>{ sum }</td>
    <td>
      <button class="btn btn-primary" @click="addToCart">
        В корзину
      </button>
    </td>
  </tr>
</template>

<script setup>
import {addToCart as addToStore, inCart as inCartStore} from '@/stores/cartStore'
import { computed, ref } from "vue";
const props = defineProps(['item'])

const count = ref(0)

const inCart = computed(() => inCartStore(props.item.id))

function addToCart() {
  addToStore(props.item.id, count.value)
  count.value = 0
}
</script>
