<!-- --------------------------Login------------------------------------ -->
<template>
    <div class="login_wrapper">
        <v-sheet width="300" class="mx-auto">
            <v-form fast-fail @submit.prevent>
                <v-text-field v-model="indexStore.login_data" label="Login" :rules="LoginRules"></v-text-field>
                <v-text-field :rules="passwordRules" v-model="indexStore.password_data" label="Password"></v-text-field>
                <v-btn @click="login" color="green" type="submit" block class="mt-2">Submit</v-btn>
                <v-btn @click="() => { this.$router.push('/') }" color="green" block class="mt-2">Back</v-btn>
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
            //after loginning sending to the private page ang setting the data of user to the local storage
            await this.indexStore.getUserAccaunt()
            if (this.indexStore.response.status == 200) {
                await this.$router.replace(`/user/${this.indexStore.user_data.user.id}`)
                localStorage.setItem("user", JSON.stringify(this.indexStore.user_data));
            }
        }
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