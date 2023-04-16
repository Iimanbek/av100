<!-- --------------------------Registration------------------------------------ -->
<template>
  <div>
  </div>
</template>
<script>
import { mapStores } from 'pinia';
import { useIndexStore } from '../stores/index'
export default {
  mounted() {
  },
  computed: {
    ...mapStores(useIndexStore)
  }
}
</script>
<style lang="css"></style>