<template>
  <div id="kaiTest">
    <button @click="show = !show">Toggle</button>
    <transition name="fade">
      <p v-if="show">hello</p>
    </transition>
    <transition name="slide-fade">
      <p v-if="show">hello2</p>
    </transition>

    <br><br>
    <div id="list-complete-demo" class="demo">
      <button @click="shuffle">Shuffle</button>
      <button @click="add">Add</button>
      <button @click="remove">Remove</button>
      <transition-group name="list-complete" tag="p">
    <span
      v-for="item in items"
      :key="item"
      class="list-complete-item"
    >
      {{ item }}
    </span>
      </transition-group>
    </div>

  </div>
</template>

<script>
  export default{
    name: 'kaiTest',
      data(){
      return {
        msg: 'hello kai',
        show: true,
        items: [1,2,3,4,5,6,7,8,9],
        nextNum: 10
      }
    },
    components: {},
    methods: {
      onClickTest: function () {
        console.log('before update: ' + this.$name.textContent);
        this.message = 'on click test';
      },
      randomIndex: function () {
        return Math.floor(Math.random() * this.items.length)
      },
      add: function () {
        this.items.splice(this.randomIndex(), 0, this.nextNum++)
      },
      remove: function () {
        this.items.splice(this.randomIndex(), 1)
      },
      shuffle: function () {
        this.items = _.shuffle(this.items)
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


  .list-complete-item {
    transition: all 1s;
    display: inline-block;
    margin-right: 10px;
  }
  .list-complete-enter, .list-complete-leave-to
    /* .list-complete-leave-active for <2.1.8 */ {
    opacity: 0;
    transform: translateY(30px);
  }
  .list-complete-leave-active {
    position: absolute;
  }

</style>
