// scaffold
<template>
  <div>
    <div>
      <div>
        <img :src="seller.avatar" alt="">
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
  // created() {
  //   console.log(this.seller,1)
  // },  
  // mounted() {
  //   console.log(this.seller,2)
  // },
  // watch: {
  //   seller: function(){
  //     console.log(this.seller,2)
  //   }  
  // },
  methods: {

  }
}

</script>

<style>

</style>
