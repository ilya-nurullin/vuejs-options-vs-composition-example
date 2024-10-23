<template>
  <component :is="reactComp" :h :text></component>

  <input type="text" v-model="text">
  <input type="number" v-model.number="h">

  <div class="catalog">
    <h1>Catalog</h1>
    <table class="table">
      <thead>
        <tr>
          <th>Артикул</th>
          <th>Название</th>
          <th>Цена</th>
          <th>Количество</th>
          <th>Сумма</th>
          <th>В корзину</th>
        </tr>
      </thead>
      <tbody>
        <Catalog-row v-for="item in catalog" :key="item.id" :item="item">

        </Catalog-row>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import CatalogRow from "./CatalogRow.vue";
import { useCatalogStore } from "@/stores/catalogStore";
import { computed, defineComponent, ref } from "vue";

const { catalog } = useCatalogStore()

const text = ref('Reactive')
const h = ref(1)

const reactComp = computed(() => defineComponent({
  props: ['h', 'text'],
  template: `<div v-html="src"></div>`,
  computed: {
    src() {
      if (this.h == 0){
        return `wrong number`
      }

      return `<h${this.h}>${this.text}</h${this.h}>`
    }
  }
})
)
</script>
