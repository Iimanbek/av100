<!-- --------------------------Registration------------------------------------ -->
<template>
  <div class="login_wrapper">
    <v-sheet width="300" class="mx-auto">
      <v-form fast-fail @submit.prevent>
        <v-text-field v-model="indexStore.login_data" label="Login" :rules="LoginRules"></v-text-field>
        <div v-show="indexStore?.text">
          <div v-html="indexStore?.text"></div>
        </div>
        <v-btn @click="registr" color="green" type="submit" block class="mt-2">Submit</v-btn>
        <v-btn @click="() => { this.$router.push('/') }" color="green" block class="mt-2">Back</v-btn>
      </v-form>
    </v-sheet>
  </div>
</template>
<script>
import { mapStores } from 'pinia';
import { useIndexStore } from '../stores/index'
export default {
  data() {
    return {
      user_text: ''
    }
  },
  methods: {
    registr() {
      this.indexStore.createUserAcc()
    }
  },
  mounted() {
  },
  computed: {
    ...mapStores(useIndexStore)
  }
}
</script>
<style lang="css">
.login_wrapper {
  height: 100vh;
  display: flex;
  align-items: center;
}

.notification {
  color: red;
  text-align: center;
}

.ok {
  color: green;
  text-align: center;
}

.not {
  color: red;
  text-align: center;
}
</style>