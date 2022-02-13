<template>
  <div>
    <div id="nav" v-if="account">
      <router-link to="/">Home</router-link> |
      <a @click="logout">Logout</a>
    </div>
    <div>
      <router-view />
    </div>
  </div>
</template>
<script>
import { accountService } from "@/_services";
export default {
  data() {
    return {
      account: null,
    };
  },
  created() {
    accountService.account.subscribe((x) => (this.account = x));
  },
  methods: {
    logout: accountService.logout,
  },
};
</script>