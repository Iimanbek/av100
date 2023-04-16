<!-- --------------------------Registration------------------------------------ -->
<template>
  <div class="login_wrapper">
    <v-sheet width="300" class="mx-auto">
      <v-form fast-fail @submit.prevent>
        <v-text-field v-model="indexStore.login_data" label="Login" :rules="LoginRules"></v-text-field>
        <v-btn @click="registr" color="green" type="submit" block class="mt-2">Submit</v-btn>
      </v-form>
    </v-sheet>
  </div>
</template>
<script>
import { mapStores } from 'pinia';
import { useIndexStore } from '../stores/index'
export default {
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
<style lang="css"></style>