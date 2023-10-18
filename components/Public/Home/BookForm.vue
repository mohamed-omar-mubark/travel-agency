<template>
  <section class="book-form py-8 bg-white">
    <div class="container">
      <h2
        class="break-spaces mb-3 text-3xl md:text-5xl font-bold text-color text-center"
      >
        {{ $t("home.book.title") }}
      </h2>
      <p
        class="mb-6 text-center font-medium text-color-secondary line-height-3"
      >
        {{ $t("home.book.subtitle") }}
      </p>

      <form
        @submit.prevent="handleSubmit(!v$.$invalid)"
        class="max-w-30rem mx-auto"
      >
        <div class="filed mb-2">
          <div class="flex flex-column gap-2">
            <label for="trip-date">{{ $t("global.trip_date") }}</label>
            <Calendar
              id="trip-date"
              v-model="v$.tripDate.$model"
              :minDate="minDate"
            />
          </div>
          <span v-if="v$.tripDate.$error && submitted">
            <small class="p-error">{{ $t("errors.trip_date") }}</small>
          </span>
          <small
            v-else-if="
              (v$.tripDate.$invalid && submitted) ||
              v$.tripDate.$pending.$response
            "
            class="p-error"
          >
            {{ $t("errors.trip_date") }}
          </small>
        </div>

        <div class="filed mb-2">
          <div class="flex flex-column gap-2">
            <label for="ticket-class">{{ $t("global.ticket_class") }}</label>
            <Dropdown
              id="ticket-class"
              v-model="v$.ticketClass.$model"
              :options="ticketClasses"
              optionLabel="name"
              optionValue="value"
              :placeholder="$t('global.ticket_class')"
              class="w-full"
            />
          </div>
          <span v-if="v$.ticketClass.$error && submitted">
            <small class="p-error">{{ $t("errors.ticket_class") }}</small>
          </span>
          <small
            v-else-if="
              (v$.ticketClass.$invalid && submitted) ||
              v$.ticketClass.$pending.$response
            "
            class="p-error"
          >
            {{ $t("errors.ticket_class") }}
          </small>
        </div>

        <div class="filed mb-2">
          <div class="flex flex-column gap-2">
            <label for="trip-type">{{ $t("global.trip_type") }}</label>
            <Dropdown
              id="trip-type"
              v-model="v$.tripType.$model"
              :options="tripTypes"
              optionLabel="name"
              optionValue="value"
              :placeholder="$t('global.trip_type')"
              class="w-full"
            />
          </div>
          <span v-if="v$.tripType.$error && submitted">
            <small class="p-error">{{ $t("errors.trip_type") }}</small>
          </span>
          <small
            v-else-if="
              (v$.tripType.$invalid && submitted) ||
              v$.tripType.$pending.$response
            "
            class="p-error"
          >
            {{ $t("errors.trip_type") }}
          </small>
        </div>

        <div class="filed mb-2">
          <div class="flex flex-column gap-2">
            <label for="passengers">{{ $t("global.passengers") }}</label>
            <InputText
              id="passengers"
              v-model="v$.passengers.$model"
              :class="{ 'p-invalid': v$.passengers.$invalid && submitted }"
              class="w-full"
              type="number"
            />
          </div>
          <span v-if="v$.passengers.$error && submitted">
            <small class="p-error">{{ $t("errors.passengers_details") }}</small>
          </span>
          <small
            v-else-if="
              (v$.passengers.$invalid && submitted) ||
              v$.passengers.$pending.$response
            "
            class="p-error"
          >
            {{ $t("errors.passengers") }}
          </small>
        </div>

        <Button
          class="bg-primary w-full"
          @click="handleSubmit(!v$.$invalid)"
          :label="$t('global.submit')"
          :loading="loading"
        />
      </form>
    </div>
  </section>
</template>

<script setup>
import { useVuelidate } from "@vuelidate/core";
import { required, numeric } from "@vuelidate/validators";
import Calendar from "primevue/calendar";
import Dropdown from "primevue/dropdown";
import InputText from "primevue/inputtext";
import Button from "primevue/button";
import { ref } from "vue";
// travel store
import { useTravelStore } from "@/store/travel";
const travelStore = useTravelStore();

const tripDate = ref("");
// min date is today to avoid past dates
const minDate = ref(new Date());
const ticketClass = ref("");
const ticketClasses = ref([
  {
    id: 1,
    name: "Economy",
    value: "economy",
  },
  {
    id: 2,
    name: "Business",
    value: "business",
  },
  {
    id: 3,
    name: "First Class",
    value: "first_class",
  },
]);
const tripType = ref("");
const tripTypes = ref([
  {
    id: 1,
    name: "One Way",
    value: "one_way",
  },
  {
    id: 2,
    name: "Round Trip",
    value: "round_trip",
  },
]);
const passengers = ref("");
const submitted = ref(false);
const loading = ref(false);

// validation rules
const rules = {
  tripDate: {
    required,
  },
  ticketClass: {
    required,
  },
  tripType: {
    required,
  },
  passengers: {
    required,
    numeric,
  },
};

const v$ = useVuelidate(rules, { tripDate, ticketClass, tripType, passengers });

const handleSubmit = async (isValid) => {
  submitted.value = true;
  if (isValid) {
    await travelStore.book({
      tripDate: tripDate.value,
      ticketClass: ticketClass.value,
      tripType: tripType.value,
      passengers: passengers.value,
    });
  }
};
</script>

<style lang="scss" scoped></style>
