<template>
  <section class="auth">
    <div class="auth__container container">
      <h1 class="auth__heading">Регистрация</h1>
      <p class="auth__text">Введите свои данные</p>
      <rv-validation-errors
        v-if="validationErrors"
        :validation-errors="validationErrors"
      />
      <form class="auth__form form" @submit.prevent="onSubmit">
        <input
          class="form__field"
          type="text"
          placeholder="Имя"
          v-model="username"
        />
        <input
          class="form__field"
          type="email"
          placeholder="Email"
          v-model="email"
        />
        <input
          class="form__field"
          type="password"
          placeholder="Пароль"
          v-model="password"
        />
        <button class="form__button" :disabled="isSubmitting">
          Зарегистрироваться
        </button>
      </form>
    </div>
  </section>
</template>

<script>
import RvValidationErrors from "@/components/ValidationErrors";
import { actionTypes } from "@/store/modules/auth";

export default {
  name: "RvRegister",
  components: {
    RvValidationErrors,
  },
  data() {
    return {
      username: "",
      email: "",
      password: "",
    };
  },
  computed: {
    isSubmitting() {
      return this.$store.state.auth.isSubmitting;
    },
    validationErrors() {
      return this.$store.state.auth.validationErrors;
    },
  },
  methods: {
    onSubmit() {
      this.$store
        .dispatch(actionTypes.register, {
          username: this.username,
          email: this.email,
          password: this.password,
        })
        .then(() => {
          this.$router.push({ name: "registerSuccess" });
        });
    },
  },
};
</script>
