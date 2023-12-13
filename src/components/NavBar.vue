<script setup lang="ts">
import { computed, ref } from "vue";
import NavBarItem from "./NavBarItem.vue";
import { House, User } from "@element-plus/icons-vue";

const items = [
    {
        name: "主页",
        icon: House,
        path: "/"
    },
    {
        name: "关于",
        icon: User,
        path: "/about"
    }
];

let select = ref(0);

let overlayStyle = computed(() => {
    if (window.innerWidth > 1024) {
        return {
            top: select.value * 82 + "px"
        };
    } else {
        return {
            left: select.value * 82 + "px"
        };
    }
});
</script>

<template>
    <!-- <nav>
        <-- <NavBarItem to="/" :id=0>
          <House />
          <span>主页</span>
        </NavBarItem>
        <div to="/about" class="nav-item" id="1" @click="onClick">
          <User />
          <span>关于</span>
        </div> -->
    <!-- 当屏幕宽度1024以上时top=select*82 + 'px' , 否则left=select*82 + 'px'-->
    <!-- <div class="nav-overlay" :style=overlayStyle></div> -->
    <!-- </nav> -->
    <nav>
        <NavBarItem
            v-for="(item, index) in items"
            :id="index"
            :key="index"
            :to="item.path"
            :class="{ active: select === index }"
            @update="
                (id: number) => {
                    select = id;
                }
            "
        >
            <component :is="item.icon" />
            <span>{{ item.name }}</span>
        </NavBarItem>
        <div class="nav-overlay" :style="overlayStyle" />
    </nav>
</template>

<style scoped lang="scss">
nav {
    position: relative;
    display: flex;
    flex-direction: column;
    place-items: center;
    place-content: center;
    font-size: 12px;
    text-align: center;
    line-height: 1.5;
    .nav-overlay {
        position: absolute;
        width: 82px;
        height: 82px;
        top: 0;
        left: 0;
        background-color: #e4f2ff;
        border-radius: 20px;
        opacity: 0.5;
        z-index: -1;
        transition: 0.3s;
    }
}
@media (max-width: 1024px) {
    nav {
        flex-direction: row;
        place-items: center;
        place-content: center;
        border-left: 0;
        border-right: 0;
        margin: 10px 0;
        // padding: 1rem 0;
    }
}
</style>
