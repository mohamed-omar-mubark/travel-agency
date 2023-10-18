<template>
  <section class="banner py-8 bg-primary">
    <div class="container grid">
      <div
        class="col-12 md:col-6 flex justify-content-center align-items-center flex-order-1 md:flex-order-0"
      >
        <div class="text-content">
          <h1 class="mb-2 text-4xl md:text-6xl font-bold text-white">
            {{ $t("home.intro.title") }}
          </h1>
          <p class="mb-4 font-medium text-white line-height-3">
            {{ $t("home.intro.subtitle") }}
          </p>
        </div>
      </div>
      <div class="col-12 md:col-6 overflow-hidden flex-order-0 md:flex-order-1">
        <NuxtImg
          src="/intro-image.webp"
          alt="Intro image"
          class="mx-auto block"
          width="100%"
          height="auto"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
const localePath = useLocalePath();
</script>

<style lang="scss" scoped>
.banner {
  min-height: 797px;
  background-image: url("/assets/images/intro-bg.webp");
  background-position: center;
  background-repeat: no-repeat;
  @media (max-width: 767px) {
    background-position: left;
  }

  .container {
    img {
      width: 100%;
      max-width: 513px;
      height: auto;
      object-fit: contain;
    }
  }
}
</style>
