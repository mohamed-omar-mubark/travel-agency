<template>
  <main class="trip-profile py-5 bg-primary-50">
    <div class="container py-4">
      <p>
        By slug: <span class="text-primary">{{ route.params.slug }}</span>
        , we can get the trip from the backend and display it here
      </p>
    </div>
  </main>
</template>

<script setup>
const route = useRoute();
const { toCapitalize } = useUtilities();

useSeoMeta({
  title: `${toCapitalize(
    route.params.slug.replace(/-/g, " ")
  )} | Travel Agency`,
  ogTitle: `${toCapitalize(
    route.params.slug.replace(/-/g, " ")
  )} | Travel Agency`,
  description: "Your first destination to book flights",
  ogDescription: "Your first destination to book flights",
  ogImage:
    "https://images.pexels.com/photos/3935702/pexels-photo-3935702.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  twitterCard: "summary_large_image",
});
</script>

<style lang="scss" scoped></style>
