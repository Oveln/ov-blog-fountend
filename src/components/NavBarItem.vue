<template>
    <div class="nav-item" @click="onClick">
        <slot />
    </div>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";

let props = defineProps({
    to: {
        type: String,
        required: true
    },
    id: {
        type: Number,
        required: true
    }
});

let router = useRouter();

let emit = defineEmits<{
    (e: "update", id: number): void;
}>();

function onClick() {
    emit("update", props.id);
    router.push(props.to);
}
</script>

<style lang="scss">
.nav-item {
    display: flex;
    flex-direction: column;
    width: 82px;
    height: 82px;
    place-items: center;
    place-content: center;
    padding: 5px 1rem;
    cursor: pointer;
    svg {
        width: 50px;
        transition: 0.3s;
    }
    transition: 0.3s;
    color: var(--color-text);
    span {
        font-size: 12px;
        transition: 0.3s;
    }
    &.active,
    &:hover {
        span {
            font-size: 0px;
        }
    }
    &.active {
        svg {
            width: 55px;
            // color: red;
            transition: 0.3s;
        }
    }
    &:hover {
        svg {
            width: 55px;
            transition: 0.3s;
        }
    }
}
</style>
