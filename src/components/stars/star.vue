<template>
  <div class="star" :class="starType">
    <span v-for="itemClass in itemClasses" :key='itemClass.id' :class="itemClass" class="star-item"></span>
  </div>
</template>

<script>
const LENGTH = 5;
const CLS_ON = 'on';
const CLS_HALF = 'half';
const CLS_OFF = 'off'
export default {
  props: {
    size: {},
    score: {}
  },
  computed: {
    starType() {
      return 'star-'+this.size
    },
    itemClasses() {
      let result = [];
      let score = Math.floor(this.score*20)/2
    }
  }
} 
</script>

<style>

</style>
