<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup>
const { locale } = useI18n();

useHead({
  htmlAttrs: {
    lang: locale.value,
    dir: locale.value === "ar" ? "rtl" : "ltr",
  },

  bodyAttrs: {
    style:
      locale.value === "ar"
        ? "font-family: 'Cairo', sans-serif;"
        : "font-family: 'Roboto', sans-serif;",
  },
});
</script>
