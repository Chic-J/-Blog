<template>
  <nav class="menu">
    <router-link :to="{ name: 'home' }" exact>首页</router-link>
    <span class="showAll" @click="showAll">全文</span>

    <!-- <div class="spacer"></div>
 -->
   <template v-if="$store.state.user">
      <a>{{ this.$store.state.user.username }}</a>
      <a @click="logout">Logout</a>
    </template>
    <router-link v-else :to="{name: 'edit'}">编辑</router-link>
  </nav>
</template>

<script>
  import store from '../store'
  import {mapGetters, mapActions} from 'vuex'
export default {
  computed: mapGetters([
  
  ]),
  methods: {
    ...mapActions({
      logout: 'logout',
      showAll: 'showAll',
    }),
  }

}
</script>
<style>
  .spacer {
    display: inline-block;
    margin-right: 75%;
  }
  .menu {
    font-size: 18px;
  }
  .showAll {
    color: gray;
    cursor: pointer;
  }
  .menu a ,.showAll {
    transition: color 0.3s ease-in;
  }
  .menu a:first-child {
    margin-left: 30px;  
  }
  .menu a:hover, .showAll:hover {
    color: black;
  }
</style>