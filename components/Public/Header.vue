<template>
  <header class="header bg-primary">
    <div class="container flex justify-content-between align-items-center">
      <NuxtLink :to="localePath('/')" class="logo">
        <NuxtImg
          src="/logo.webp"
          alt="Travel Agency app logo"
          :title="$t('global.app_name')"
        />
      </NuxtLink>

      <div class="lang-switcher flex align-items-center gap-3">
        <NuxtLink
          v-for="locale in locales"
          :key="locale.code"
          :to="switchLocalePath(locale.code)"
          :class="
            'text-white text-sm font-normal' +
            (locale.code === 'ar' ? ' arabic' : '')
          "
        >
          {{ locale.name }}
        </NuxtLink>
      </div>
    </div>
  </header>
</template>

<script setup>
import { onMounted } from "vue";
const { locales } = useI18n();
const switchLocalePath = useSwitchLocalePath();
const localePath = useLocalePath();

onMounted(() => {
  // add class sticky to header when scroll
  window.addEventListener("scroll", handleScroll);
});

const handleScroll = () => {
  const header = document.querySelector(".header");
  const headerTop = header.getBoundingClientRect().top;

  if (headerTop <= 0) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
};
</script>

<style lang="scss" scoped>
.header {
  .logo {
    width: 60px;
    height: 60px;

    img {
      width: 100%;
      height: 100%;
      object-fit: contain;

      @media (max-width: 767px) {
        width: 70%;
      }
    }
  }

  &.sticky {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 999;
  }
}
</style>
