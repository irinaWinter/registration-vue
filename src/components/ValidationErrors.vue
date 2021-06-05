<template>
  <section class="auth__errros errors">
    <h3 class="visually-hidden">Ошибки валидации</h3>
    <ul class="errors__list">
      <li
        class="errors__item"
        v-for="errorMessage in errorMessages"
        :key="errorMessage"
      >
        {{ errorMessage }}
      </li>
    </ul>
  </section>
</template>

<script>
import "./errors.less";

export default {
  name: "RvValidationErrors",
  props: {
    validationErrors: {
      type: Object,
      required: true,
    },
  },
  computed: {
    errorMessages() {
      return Object.keys(this.validationErrors).map((name) => {
        const messages = this.validationErrors[name].join(", ");
        return `${name} ${messages}`;
      });
    },
  },
};
</script>
