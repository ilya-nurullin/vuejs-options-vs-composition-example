import { computed, ref } from "vue";

export const cart = ref({});

export function addToCart(id, count) {
    const c = cart.value[id]

    if (!c)
        cart.value[id] = count
    else
        cart.value[id] += count
}

export function inCart(id) {
    return cart.value[id] ?? 0
}

export const totalInCart = computed(() => {
    return Object.values(cart.value).reduce((sum, c) => sum + c, 0)
})
