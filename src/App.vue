<template>
  <div id="app">
      <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
}
</script>

<style lang='scss'>
  .content{
    background-color: #F2F6FC;
        display: flex;
        .bottomMain{
          width: 100%;
          height: 100%;
          padding-top: 30px;
        }
    }
</style>
