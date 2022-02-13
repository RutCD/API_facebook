<template>
  <div>
    <h2>Edit Account</h2>
    <p>
      Updating the local information here in this web application. It won't
      change anything in the Facebook database.
    </p>
    <form v-if="account" @submite.prevent="handleSubmit">
      <div>
        <label>Facebook Id</label>
        <div>{{ account.facebookId }}</div>
      </div>
      <div>
        <label>Full name</label>
        <input type="text" v-model="account.name" />
      </div>
      <div>
        <label>Extra info</label>
        <input type="text" v-model="account.extraInfo" />
      </div>
      <div>
        <button type="submit">Save</button>
        <router-link to="../../"></router-link>
      </div>
    </form>
    <div v-if="!account">
      <span>Record not located</span>
    </div>
  </div>
</template>
<script>
import { router } from "@/_helpers";
import { accountService } from "@/_services";
export default {
  data() {
    return {
      account: null,
    };
  },
  created() {
    accountService
      .getById(this.$route.params.id)
      .then((x) => (this.account = x));
  },
  methods: {
    handleSubmit() {
      accountService
        .update(this.$route.params.id, this.account)
        .then(() => {
          router.push("../");
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>