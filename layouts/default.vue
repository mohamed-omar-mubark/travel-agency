<template>
  <div>
    <PublicHeader />
    <GlobalMainLoading />
    <slot />
    <PublicFooter />
  </div>
</template>

<script setup>
import { useLoadingStore } from "@/store/loading";
const loadingStore = useLoadingStore();
import { onMounted } from "vue";

onMounted(() => {
  // set loading to false after 1.5s in semulation of loading
  setTimeout(() => {
    loadingStore.setMainLoading(false);
  }, 1500);
});
</script>
