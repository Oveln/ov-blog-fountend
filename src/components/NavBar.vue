<script setup lang="ts">
import { computed, reactive, ref } from 'vue';
import { useRouter, type RouteLocationRaw } from 'vue-router';


const router = useRouter();
let select = ref(0);

function onClick(id: number, path: RouteLocationRaw) {
  select.value = id;
  router.push(path)
}

let overlayStyle = computed(() => {
  if (window.innerWidth > 1024) {
    return {
      top: select.value * 82 + 'px',
    }
  } else {
    return {
      left: select.value * 82 + 'px'
    }
  }
})
</script>

<template>
    <nav>
        <div class="nav-item" :class="{active: select === 0}" @click="onClick(0,'/')">
          <House />
          <span>主页</span>
        </div>
        <div class="nav-item" :class="{active: select === 1}" @click="onClick(1,'/about')">
          <User />
          <span>关于</span>
        </div>
        <!-- 当屏幕宽度1024以上时top=select*82 + 'px' , 否则left=select*82 + 'px'-->
        <div class="nav-overlay" :style=overlayStyle></div>
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
        transition: .3s;
    }
    transition: .3s;
    color: var(--color-text);
    span {
      font-size: 12px;
      transition: .3s;
    }
    &.active, &:hover {
      span {
        font-size: 0px;
      }
    }
    &.active {
      svg {
        width: 55px;
        // color: red;
        transition: .3s;
      }
    }
    &:hover {
      svg {
        width: 55px;
        transition: .3s;
      }
    }
  }
  .nav-overlay {
    position: absolute;
    width: 82px;
    height: 82px;
    top: 0;
    left: 0;
    background-color: #e4f2ff;
    border-radius: 20px;
    opacity: .5;
    z-index: -1;
    transition: .3s;
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
