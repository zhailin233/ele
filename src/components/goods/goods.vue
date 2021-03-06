<template>
  <div class="goods">
    <div class="menu-wrapper" ref='menuWrapper'>
      <ul>
        <li v-for="(item, index) in goods" :key="item.id" class="menu-item" :class="{'current': currentIndex==index}
        " @click="selectMenu(index, $event)">
          <span class="text border-1px">
            <span class="icon" v-show="item.type>0" :class="classMap[item.type]"></span>
            {{item.name}}
          </span>
        </li>
      </ul>
    </div>
    <div class="foods-wrapper" ref="foodsWrapper">
      <ul>
        <li v-for="item in goods" :key='item.id' class="food-list food-list-hook">
          <h1 class="title">{{item.name}}</h1>
          <ul>
            <li v-for="food in item.foods" :key='food.id' class="food-item border-1px" @click="selectFood(food, $event)">
              <div class="icon">
                <img width="57" height="57" :src="food.icon" alt="">
              </div>
              <div class="content">
                <h2 class="name"><span>{{food.name}}</span></h2>
                <p class="desc">{{food.description}}</p>
                <div class="extra">
                  <span class="count">月售{{food.sellCount}}</span>
                  <span>好评率{{food.rating}}%</span>
                </div>
                <div class="price">
                  <span class="now">
                    <span class="money-icon">￥</span>
                    {{food.price}}
                  </span>
                  <span class="old" v-show="food.oldPrice">原件{{food.oldPrice}}</span>
                </div>
                <div class="cartcontrol-wrapper">
                  <cartcontrol :food="food" ></cartcontrol>
                </div>
              </div>
            </li>
          </ul>
        </li>
      </ul>
    </div>
    <shopcart ref='shopcart' :select-foods='selectFoods' :delivery-price='seller.deliveryPrice' :min-price='seller.minPrice'></shopcart>
    <food :food="selectedFood" ref="food"></food>
  </div>
</template>

<script>
import cartcontrol from "../cartcontrol/cartcontrol.vue";
import Bscroll from 'better-scroll';
import food from "../food/food.vue"
import shopcart from '../shopcart/shopcart.vue'
const ERR_OK=0;
export default {
  components: {
    cartcontrol,
    food,
    shopcart
  },
  data() {
    return {
      goods: {},
      listHeight: [],
      scrollY: 0,
      selectedFood: {}
    }
  },
  props: {
    seller: {}
  },
  created() {
    this.classMap = ["decrease", "discount", "special", "invoice", "guarantee"];
    this.$http.get('/api/goods').then((res) => {
      if (res.data.errno === ERR_OK) {
        this.goods = res.data.data
        this.$nextTick(()=>{
          this._initScroll();
          this.calculateHeight();
        });
      }
    })
  },
  methods: {
    _initScroll(){
      this.menuScroll = new Bscroll(this.$refs.menuWrapper,{
        click:true
      });
      this.foodsScroll = new Bscroll(this.$refs.foodsWrapper,{
        probeType:3,
        click:true
      });
      this.foodsScroll.on("scroll",(pos)=>{
        this.scrollY = Math.abs(Math.round(pos.y));
      });
    },        

    selectMenu(index, event) {
      if (!event._constructed) {
        return
      }
      let foodList = this.$refs.foodsWrapper.getElementsByClassName('food-list-hook');
      let el = foodList[index]
      this.foodsScroll.scrollToElement(el, 300)
    },

    calculateHeight() {
      let foodList = this.$refs.foodsWrapper.getElementsByClassName('food-list-hook');
      let height = 0;
      this.listHeight.push(height);
      for (let index = 0; index < foodList.length; index++) {
        const element = foodList[index];
        height += element.clientHeight;
        this.listHeight.push(height)
      }
    },
   
    selectFood(food, event) {
      if (!event._constructed) {
        return
      }
      this.selectedFood = food;
      this.$refs.food.show() //调用food组件show方法
    },
    
  },
  computed: {
    currentIndex() {
      for (let index = 0; index < this.listHeight.length; index++) {
        let height1 = this.listHeight[index];
        let height2 = this.listHeight[index+1];
        if (!height2 || (this.scrollY >= height1 && this.scrollY < height2)) {
          return index
        }
      }
      return 0
    },
    selectFoods() {
      let foods = [];
      for (const key in this.goods) {
        this.goods[key].foods.forEach(food => {
          if (food.count) {  // Vue.set('count')
            foods.push(food)
          }
        });
      }
      return foods
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
@import '../../common/stylus/mixin.styl';
  .goods
    display :flex
    overflow :hidden
    position :absolute
    top: 174px
    bottom :46px
    width: 100%
    .menu-wrapper
      flex:0 0 80px
      width :80px
      background :#f3f5f7
      .menu-item
        display :table
        height :54px
        width: 56px
        padding:0 12px
        line-height :14px
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
        .text
          display: table-cell
          width :56px
          vertical-align: middle
          font-size :12px
          border-1px(rgba(7,17,27,0.1))
        &.current
          position :relative
          margin-top :-1px
          z-index :10
          font-weight :700
          background :#ffffff
          .text
            border-none()
    .foods-wrapper
      flex:1
      .title
        padding-left :14px
        height: 26px
        line-height :26px
        border-left :2px solid #d9dde1
        font-size :12px
        color:rgb(147,153,159)
        background :#f3f5f7
      .food-item
        display: flex
        margin: 18px
        padding-bottom :18px
        border-1px(rgba(7,17,27,0.1))
        &:last-child
          border:none
          margin-bottom :0
        .icon
          flex:0 0 57px
          margin-right :10px
          border-radius :2px
        .content
          flex:1
          .name
            margin:2px 0 8px 0
            height :14px
            line-height :14px
            font-size :14px
            color :rgb(7,17,27)
          .desc,.extra

            line-height :10px
            font-size :10px
            color :rgb(147,153,159)
          .desc
            margin-bottom :8px
            line-height :14px
          .extra
            &.count
              margin-right :12px
          .price
            line-height :24px
            .now
              margin-right: 18px
              font-size :14px
              font-weight :700
              color:rgb(240,20,20)
              .money-icon
                font-size :10px
            .old
              text-decoration :line-through
              font-size :10px
              font-weight :700
              margin-left -15px
              color :rgb(147,153,159)

          .cartcontrol-wrapper
            position :absolute
            right:0
            bottom :12px
</style>
