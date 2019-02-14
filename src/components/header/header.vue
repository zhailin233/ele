// scaffold
<template>
  <div class="header">
    <div class="content-wrapper">
      <div class="avatar">
        <img :src="seller.avatar" alt="">
      </div>
      <div class="content">
        <div class="title">
          <span class="brand"></span>
          <span class="name">{{seller.name}}</span>
        </div>
        <div class="description">
          {{seller.description}}/{{seller.deliveryTime}}分钟送达
        </div>
        <div class="supports" v-if="seller.supports">
          <span class="ico" :class="calssMap[seller.supports[0].type]"></span>
          <span class="text">{{seller.supports[0].description}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {
    // star
  },
  props: {
    seller: {}, 
  },
  created() {
    this.calssMap = ['decrease', 'discount', 'special', 'invoice', 'guarantee']
  },
  methods: {

  }
}

</script>

<style lang='stylus' rel='stylesheet/stylus'>
  @import '../../common/stylus/mixin.styl';
  .header
    color #fff
    position relative
    overflow hidden
    background rgba(7,17,27,0.5)
    .content-wrapper
      position relative
      padding 24px 12px 18px 24px
      font-size 0
      .avatar
        display inline-block
        img 
          width 64px
          border-radius 2px
      .content
        margin-left 16px
        display inline-block
        vertical-align top 
        font-size 12px
        .title
          margin 2px 0 8px 0
          .brand
            display inline-block
            vertical-align top
            width 30px
            height 18px
            bg-image('brand')
            background-size 30px 18px
            background-repeat no-repeat
          .name
            margin-left 16px
            font-size 16px
            line-height 18px
            font-weight bold
        .description
            font-size 12px
            margin-bottom 10px
            line-height 12px
</style>
