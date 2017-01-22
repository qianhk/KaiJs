<template>
  <div id="kaiTest">
    <button @click="show = !show">Toggle</button>
    <transition name="fade">
      <p v-if="show">hello</p>
    </transition>
    <transition name="slide-fade">
      <p v-if="show">hello2</p>
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
    transition: opacity 1.5s
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
    opacity: 0
  }

  .slide-fade-enter-active {
    transition: all .3s ease;
  }
  .slide-fade-leave-active {
    transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
  .slide-fade-enter, .slide-fade-leave-to
    /* .slide-fade-leave-active for <2.1.8 */ {
    transform: translateX(10px);
    opacity: 0;
  }

</style>
