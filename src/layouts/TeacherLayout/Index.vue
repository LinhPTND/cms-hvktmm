<template>
  <div>
    <Header
      class="fixed z-50 top-0 w-screen"
      @hamburger-click="drawerVisible = true"
    />
    <div class="main-page">
      <div class="main-page__main-content">
        <div class="list-tab">
          <div
            class="tab-item"
            :class="{ active: tab.link === route.name }"
            v-for="tab in tabs"
            :key="tab.label"
            @click="redirect(tab.link)"
          >
            {{ tab.label }}
          </div>
        </div>
        <RouterView v-slot="{ Component, route }">
          <TransitionFade class="min-h-full" mode="out-in">
            <component :is="Component" :key="route.path" />
          </TransitionFade>
        </RouterView>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import TransitionFade from "@/components/animation/TransitionFade.vue";
import {onMounted, ref} from "vue";
import { RouterView, useRoute, useRouter } from "vue-router";
import Header from "./Header.vue";
import {fnJob} from "@/core/composables/useJob";
import AdminRepository from "@/repositories/AdminRepository";
import {useAppStore} from "@/stores/app";

const drawerVisible = ref(false);

const tabs = ref([
  { label: "Quản lý đơn từ", link: "TeacherIndex" },
  { label: "Thông tin cá nhân", link: "TeacherInfo" },
]);

const router = useRouter();

const route = useRoute();

const redirect = (linkName: string) => {
  router.push({ name: linkName });
};
</script>

<style lang="scss" scoped>
.main-page {
  font-family: "Roboto", sans-serif;
  background-color: #f3f6f9;
  min-height: 100vh;

  &__main-content {
    padding: 24px;
    padding-top: calc(60px + 24px);
    background: #f3f6f9;
    flex-grow: 1;
    position: relative;
  }

  .list-tab {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 24px;
    margin-top: 24px;
    .tab-item {
      font-size: 14px;
      padding: 8px 12px;
      border: 1px solid #dcdcdc;
      cursor: pointer;
      text-transform: uppercase;
      border-radius: 4px;

      &.active {
        background: #006e52;
        color: #ffff;
        border-color: #006e52;
      }
    }
  }
}
</style>
