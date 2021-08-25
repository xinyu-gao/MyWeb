<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <van-button type="primary" @click="hello">主要按钮</van-button>
  </div>
</template>

<script>

import {helloApi} from "@/api/test";

export default {
  name: 'Home',
  components: {
  },
  methods: {
    hello() {
      // helloApi().then(data =>{
      //   console.log(data)
      // }).catch(err => {
      //   console.log(err)
      // })
    }
  }
}
</script>
