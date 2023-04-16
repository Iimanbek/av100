<!-- --------------------------Login------------------------------------ -->
<template>
    <div class="login_wrapper">
        <v-sheet width="300" class="mx-auto">
            <v-form fast-fail @submit.prevent>
                <v-text-field v-model="indexStore.login_data" label="Login" :rules="LoginRules"></v-text-field>
                <v-text-field :rules="passwordRules" v-model="indexStore.password_data" label="Password"></v-text-field>
                <v-btn @click="login" color="green" type="submit" block class="mt-2">Submit</v-btn>
            </v-form>
        </v-sheet>
    </div>
</template>
<script>
import { useIndexStore } from '../stores';
import { mapStores } from 'pinia';
export default {
    data: () => ({
        LoginRules: [
            value => {
                if (value?.length > 3) return true
                return 'Login must be at least 5 characters.'
            },
        ],
        passwordRules: [
            value => {
                if (value?.length > 3) return true
                return 'Password must be at least 5 characters.'
            },
        ],
        lastName: '123',
    }),
    methods: {
        async login() {
            await this.indexStore.getUserAccaunt()
            if (this.indexStore.response.status == 200) {
                localStorage.setItem("user", JSON.stringify(this.indexStore.user_data));
                await this.$router.push(`/user/${this.indexStore.user_data.user.id}`)
            }
        }
    },
    mounted() {
    },
    computed: {
        ...mapStores(useIndexStore)
    },
}
</script>
<style lang="css">
.login_wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
}
</style>