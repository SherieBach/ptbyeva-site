<template>
  <div class="form">
    <form @submit.prevent="submitForm" autocomplete="off">
      <div class="form-group">
        <label for="name">Name:</label>
        <input v-model="form.name" id="name">
        <p v-if="!nameIsValid" class="error-message">Ett namn måste fyllas i.</p>
      </div>
      <div class="form-group">
        <label for="phoneNum">Nummer:</label>
        <input v-model="form.phoneNum" id="phoneNum">
        <p v-if="!phoneNumIsValid" class="error-message">Ett telefonnummer krävs.</p>
      </div>
      <div>
        <button :disabled="!formIsValid"></button>
      </div>
    </form>

  </div>
</template>
<script>

export default {
  name: 'Form',

  data() {
    return {
      form: {
        name: null,
        phoneNum: null
      }
    }
  },
  computed: {
    nameIsValid() {
      return !!this.form.name
    },

    phoneNumIsValid() {
      return typeof  this.form.phoneNum === 'number'&& this.form.phoneNum > 9 && this.form.phoneNum < 10
    },
    formIsValid() {

      return this.nameIsValid() && this.phoneNumIsValid
    }
  },
  methods: {
    submitForm() {

      console.log('form is submitted');
      if (this.formIsValid) {

      } else {
        console.log('invalid form')
      }
    }
  }
}

</script>

<style scoped lang="scss">
@import "../styles/global";

</style>
