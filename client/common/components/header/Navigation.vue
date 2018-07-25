<template>
    <nav class="navigation">
        <div class="navigation__title">
            <button
                class="navigation__menu-button action-button"
                @click="showMenu"/>
            <main-menu
                v-click-outside="hideMenu"
                v-if="isMenuShown"
                @onMenuHide="hideMenu"
            />
            <logo class="navigation__logo"/>
        </div>
        <div v-if="name">
            <user-block
                :name="name"
                :profile-picture-url="profilePictureUrl"
            />
        </div>
        <div v-else>
            <authorization-block/>
        </div>
    </nav>
</template>

<script>
import { mapState } from 'vuex';
import clickOutside from 'common/directives/clickOutside';
import UserBlock from 'userModule/components/UserBlock';
import MainMenu from './MainMenu';
import Logo from './Logo';
import AuthorizationBlock from './AuthorizationBlock';

export default {
    components: {
        Logo,
        MainMenu,
        UserBlock,
        AuthorizationBlock
    },
    directives: {
        clickOutside
    },
    data() {
        return {
            isMenuShown: false
        };
    },
    computed:
    mapState({
        name: state => state.userData.name,
        profilePictureUrl: state => state.userData.profilePictureUrl
    }),
    methods: {
        showMenu() {
            this.isMenuShown = true;
        },
        hideMenu() {
            this.isMenuShown = false;
        }
    }
};
</script>

<style>
.navigation {
    position: fixed;
    z-index: 1;
    top: 0;

    display: flex;

    width: 100%;
    padding: 10px 0;

    color: #ffffff;
    border-bottom: 1px solid #ffffff;
    background-color: #31364c;

    align-items: center;
    justify-content: space-between;
}

.navigation__title {
    display: flex;

    align-items: center;
}

.navigation__menu-button {
    margin: 20px;
    padding: 20px;

    cursor: pointer;

    border: none;
    background: url(../../../assets/menu-burger.png);
    background-size: contain;
}
</style>

