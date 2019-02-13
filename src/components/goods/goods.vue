<template>
  <div class="goods">
    <span class="icon" :class="classMap[2]"></span>
  </div>
</template>

<script>
export default {

  created() {
    this.classMap = ["decrease", "discount", "special", "invoice", "guarantee"]
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
@import '../../common/stylus/mixin.styl';

    .icon
          display: inline-block
          vertical-align: top
          width :12px
          height :12px
          margin-right :2px
          background-size :12px 12px
          background-repeat :no-repeat
          &.decrease
            bg-image("decrease_3")
          &.discount
            bg-image("discount_3")
          &.guarantee
            bg-image("guarantee_3")
          &.invoice
            bg-image("invoice_3")
          &.special  
            bg-image("special_3")
</style>
