<template>
  <div id="kaiTest">
    <button @click="show = !show">Toggle</button>
    <transition name="fade">
      <p v-if="show">hello</p>
    </transition>
  </div>
</template>

<script>
  export default{
    name: 'kaiTest',
      data(){
      return {
        msg: 'hello kai',
        show: true
      }
    },
    components: {},
    methods: {
      onClickTest: function () {
        console.log('before update: ' + this.$name.textContent);
        this.message = 'on click test';
      }
    }
  }


</script>


<style>
  .fade-enter-active, .fade-leave-active {
    transition: opacity 0.5s
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
    opacity: 0
  }
</style>
