import { ref } from "vue";

export function useCatalogStore() {
    const catalog = ref([{
        id: 1,
        title: 'Js',
        price: 1000,
    }, {
        id: 2, title: 'VueJS', price: 2000,
    }]);

    return { catalog }
}