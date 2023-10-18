import trips from "@/data/trips.json";

export default defineEventHandler((event) => {
  return trips;
});
