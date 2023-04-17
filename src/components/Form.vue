
<!-- -------------------------Profile From Settings----------------------------- -->
<template>
    <div class="container">
        <div class="main_section_wrapper">
            <div class="same_section">
                <div class="switch_wrap title_wrap">
                    <h3 class="form_title">Звонок через SIP</h3>
                    <div>
                        <label class="switch">
                            <input type="checkbox">
                            <span class="slider round"></span>
                        </label>
                    </div>
                </div>
                <div class="main_form">
                    <p class="form__inner__des">Включите эту функцию чтобы Авито и другие площадки не блокировали ваш
                        аккаунт. Будет выглядеть так,
                        будто звонки совершаются с разных номеров.</p>
                </div>
            </div>
            <div class="same_section">
                <div class="title_wrap">
                    <h3 class="form_title">Учётная запись</h3>
                </div>
                <div class="main_form">
                    <div class="form_inner">
                        <div class="label_wrap">
                            <span>Компания</span>
                        </div>
                        <v-sheet width="300">
                            <v-text-field v-model="indexStore.user_settings.companyname" required
                                :rules="rules"></v-text-field>
                        </v-sheet>
                    </div>
                    <div class="form_inner">
                        <div class="label_wrap">
                            <span>Логин</span>
                        </div>
                        <v-sheet width="300">
                            <v-text-field v-model="indexStore.user_settings.login" required :rules="rules"
                                label="....."></v-text-field>
                        </v-sheet>
                    </div>
                    <div class="form_inner">
                        <div class="label_wrap">
                            <span>Номер телефонов</span>
                        </div>
                        <v-sheet width="300">
                            <v-text-field v-model="indexStore.user_settings.phone" required :rules="rules"></v-text-field>
                        </v-sheet>
                    </div>
                    <div class="form_inner">
                        <div class="label_wrap">
                            <span>Имя</span>
                        </div>
                        <v-sheet width="300">
                            <v-text-field v-model="indexStore.user_settings.fname" required :rules="rules"></v-text-field>
                        </v-sheet>
                    </div>
                    <div class="form_inner">
                        <div class="label_wrap">
                            <span>Фамилия</span>
                        </div>
                        <v-sheet width="300">
                            <v-text-field v-model="indexStore.user_settings.lname" required :rules="rules"></v-text-field>
                        </v-sheet>
                    </div>
                </div>
            </div>
            <div class="same_section">
                <div class="title_wrap">
                    <h3 class="form_title">Оповещения о новых подборках</h3>
                </div>
                <div class="main_form">
                    <p class="form__inner__des">Выберите, куда будут приходить уведомления при появлении автомобилей,
                        которые подходят под критерии
                        вашей подборки.</p>
                    <v-radio-group>
                        <h4>Уведомления</h4>
                        <div>
                            <v-sheet width="300">
                                <v-radio-group v-model="calltypeLocal">
                                    <v-radio color="success" value="off_radio" label="Выкл" name="messages"
                                        id="radio_off"></v-radio>
                                </v-radio-group>
                                <v-divider></v-divider>
                            </v-sheet>
                        </div>
                        <div>
                            <v-sheet width="300">
                                <v-sheet width="300"></v-sheet>
                                <v-radio-group v-model="calltypeLocal">
                                    <v-radio color="success" value="Push" name="messages" id="push_radio"
                                        label="Push"></v-radio>
                                </v-radio-group>
                                <v-divider></v-divider>
                            </v-sheet>
                        </div>
                        <div>
                            <v-radio-group v-model="calltypeLocal">
                                <v-radio color="success" name="messages" value="email" label="Email"></v-radio>
                            </v-radio-group>
                            <v-sheet width="300">
                                <v-text-field v-model="indexStore.user_settings.email" required :rules="rules"
                                    label=".....@gmail.com"></v-text-field>
                                <v-divider></v-divider>
                            </v-sheet>
                        </div>
                        <div>
                            <v-radio-group v-model="calltypeLocal">
                                <v-radio color="success" name="messages" value="telegram_id" label="Telegram ID"></v-radio>
                            </v-radio-group>
                            <v-sheet width="300">
                                <v-sheet width="300"></v-sheet>
                                <v-text-field v-model="indexStore.user_settings.telegramChat" required :rules="rules"
                                    label="@example"></v-text-field>
                            </v-sheet>
                        </div>
                    </v-radio-group>
                </div>
            </div>
            <div class="same_section">
                <div class="title_wrap">
                    <h3 class="form_title">Переход в карточку</h3>
                </div>
                <div class="main_form">
                    <p class="form__inner__des">Выберите, каким образом будет открываться детальное представление выбранного
                        вами транспорта.</p>
                    <v-radio-group v-model="go_cart">
                        <div class="radio_group_wrap">
                            <v-radio color="success" value="В карточку текущем окне" label="В карточку текущем окне"
                                name="cards"></v-radio>
                            <v-divider></v-divider>
                        </div>
                        <div class="radio_group_wrap">
                            <v-radio color="success" value="В карточку отдельном окне" label="В карточку отдельном окне"
                                name="cards"></v-radio>
                            <v-divider></v-divider>
                        </div>
                        <div class="radio_group_wrap">
                            <v-radio color="success" value="На источник" label="На источник" name="cards"></v-radio>
                        </div>
                    </v-radio-group>
                </div>
            </div>
            <div class="same_section">
                <div class="title_wrap">
                    <h3 class="form_title">Прочие настройки</h3>
                </div>
                <div class="main_form">
                    <v-sheet width="200">
                        <div id="select_hour">
                            <label>Часовой пояс</label>
                            <v-select color="white" v-model="select" :hint="`${select.state}, ${select.abbr}`"
                                :items="items" item-title="state" id="mySelect" item-value="abbr" persistent-hint
                                return-object single-line></v-select>
                        </div>
                    </v-sheet>
                    <div>
                        <v-checkbox color="#2dc574" label="Автоматически переходить к новым обновлениям"></v-checkbox>
                    </div>
                    <div>
                        <v-checkbox color="#2dc574" v-model="lenta" label="Включить цвета в ленте"></v-checkbox>
                    </div>
                </div>
            </div>
            <v-sheet width="300px">
                <v-btn color="green" block style="margin-left: 90%;" class="mt-2 mb-2">Save</v-btn>
            </v-sheet>
        </div>
    </div>
</template>
<script>
import { useIndexStore } from '../stores';
import { mapStores } from 'pinia';
export default {
    data() {
        return {
            lenta: false,
            go_cart: '',
            calltypeLocal: '',
            ex7: 'red',
            ex8: 'primary',
            rules: [
                value => !!value || 'Required.',
                value => (value || '').length <= 20 || 'Max 20 characters',
            ],
            select: { state: 'Moscow', abbr: 'GMT +3' },
            items: [
                { state: 'Moscow', abbr: 'GMT +3' },
                { state: 'Kaliningrad', abbr: 'GMT +3' },
                { state: 'Samara', abbr: 'GMT +4' },
                { state: 'Omsk', abbr: 'GMT +3' },
                { state: 'Magadan', abbr: 'GMT +5' },
            ],
        }
    },
    computed: {
        ...mapStores(useIndexStore)
    },
    watch: {
        select: function (val) {
            this.indexStore.user_settings.timezone = val
        },
        calltypeLocal: function (val) {
            this.indexStore.user_settings.notifytype = val
        },
        go_cart: function (val) {
            this.indexStore.user_settings.sipid = val
        }
    }
}
</script>
<style lang="css">
.switch {
    position: relative;
    display: inline-block;
    width: 40px;
    height: 22px;
}

.switch input {
    opacity: 0;
    width: 0;
    height: 0;
}

.slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    -webkit-transition: .4s;
    transition: .4s;
}

.slider:before {
    position: absolute;
    content: "";
    height: 21px;
    width: 21px;
    left: 2px;
    /* bottom: 1px; */
    background-color: white;
    -webkit-transition: .4s;
    transition: .4s;
}

.switch input:checked+.slider {
    background-color: #2dc574;
}

.switch input:focus+.slider {
    box-shadow: 0 0 1px #2dc574;
}

.switch input:checked+.slider:before {
    -webkit-transform: translateX(16px);
    -ms-transform: translateX(16px);
    transform: translateX(16px);
}

/* Rounded sliders */
.slider.round {
    border-radius: 34px;
}

.slider.round:before {
    border-radius: 50%;
}

#select_hour .v-label {
    color: white !important;
}

#select_hour .v-icon {
    color: white !important;
}

#select_hour .v-text-field--outlined fieldset {
    border: white 1px solid !important;
}

#select_hour .v-field.v-field {
    background: #29af67;
    color: white;
    font-weight: 900;
}

.main_section_wrapper {
    display: flex;
    flex-direction: column;
}

.same_section {
    display: flex;
    margin-bottom: 20px;
}

.form_title {
    font-size: 18px;
    margin-right: 5px;
    font-family: Montserrat, Helvetica, Arial, sans-serif;
}

.switch_wrap {
    display: flex;
}

.title_wrap {
    width: 250px;
}

.main_form {
    width: 500px;
}

.container {
    padding: 30px 30px 0;
}

.form_inner {
    display: flex;
}

.label_wrap {
    width: 150px;
}

.form__inner__des {
    color: #686869;
    margin-bottom: 20px;
}

.radio_group_wrap {
    width: 300px;
}
</style>