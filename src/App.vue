<template>
  <div id="app">
    <v_header></v_header>
    <div class="tab border-1px">
      <router-link v-for="item in tab" :key="item.id" :to='item.path' class="tab-item">{{item.name}}</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
import headerVue from './components/header/header.vue';
import urlParse from './common/js/util'
export default {
  name: 'App',
  components: {
    v_header: headerVue
  },
  data() {
    return {
      tab: [
        {name: '商品', path: '/goods'},
        {name: '评论', path: '/ratings'},
        {name: '商家', path: '/seller'},
      ],
      seller: {

      }
    }
  },
  created() {
    this.$router.push('/goods')
    this.$http.get("/api/seller").then((response)=>{
            console.log(response.data.data)
              response = response.data;
              if(response.errno===ERR_OK){
                  this.seller = response.data;

              }
          })
  }
}
</script>

<style lang='stylus' rel='stylesheet/stylus'>
@import './common/stylus/mixin.styl';
#app
  .tab
    display: flex
    width: 100
    height: 40px
    line-height: 40px
    border-1px(rgba(7,17,21,0.1))
    .tab-item
      flex: 1
      text-align: center
      font-size: 14px
      color: rgb(77,85,93)
      text-decoration: none
    .router-link-active
      color:rgb(240,20,20)
</style>
