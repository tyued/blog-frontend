<template>
  <div class="about">
    <h1>ref && reactive</h1>
    <h2>
      ref:{{count}}
    </h2>
    <h2>
      reactive:{{reactiveField}}
    </h2>
    <h2>
      reactive:{{a[0].a}}
    </h2>
    <h2>
      bb:{{b}}
    </h2>

    <button @click="addRef">addRef</button>
    <button @click="addReactive">addReactive</button>
    <button @click="addA">addA</button>
    <button @click="showbb">showbb</button>

  </div>
</template>
<script lang="ts">
import {defineComponent, reactive, readonly, ref, toRefs} from 'vue'
export default defineComponent({
  setup(){
    // console.log(this)
    const count = ref(0)
    const state = reactive({
      reactiveField:0,
      a:[{a:1}]
    })
    const bb = readonly({
      c:2,
      b:3
    })
    const addRef = () =>{
      count.value++
    }
    const addReactive = () =>{
      state.reactiveField++
    }
    const addA = () =>{
      state.a[0].a++
    }

    const showbb = () =>{
      console.log("5566")
      bb.b
    }

    return{
      count,
      ...toRefs(state),
      ...toRefs(bb),
      addA,
      addRef,
      addReactive,
      showbb
    }

    // console.log(count,"count")
  }
})
</script>
