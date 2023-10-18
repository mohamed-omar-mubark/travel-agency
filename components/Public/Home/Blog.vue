<template>
  <section class="blog py-8 bg-white">
    <div class="container">
      <h2
        class="break-spaces mb-3 text-3xl md:text-5xl font-bold text-color text-center"
      >
        {{ $t("home.blog.title") }}
      </h2>
      <p
        class="mb-6 text-center font-medium text-color-secondary line-height-3"
      >
        {{ $t("home.blog.subtitle") }}
      </p>

      <div class="grid">
        <div
          class="col-12 sm:col-6 md:col-4 flex align-items-center"
          v-for="trip in trips"
          :key="trip.id"
        >
          <NuxtLink
            :to="localePath(`/blog/${trip.slug}`)"
            class="single-post h-full bg-gray-50 py-7 px-5 border-round w-12 text-center"
          >
            <h3 class="mb-3 post-title text-color">
              {{ trip.name }}
            </h3>
            <p class="text-color-secondary line-height-3">
              {{ trip.price + " " + $t("global.eg_pound") }}
            </p>
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const localePath = useLocalePath();
const { data: trips } = await useFetchTrips();
</script>

<style lang="scss" scoped>
.blog {
  .container {
    .single-post {
      transition: 0.3s;

      &:hover {
        background-color: #fff !important;
        box-shadow: 0 40px 40px 0 rgb(14 17 51 / 10%);
      }
    }
  }
}
</style>
