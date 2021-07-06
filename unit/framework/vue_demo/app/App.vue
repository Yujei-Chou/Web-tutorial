<template lang="pug">
#app
  // Step 2 code here
  // 打包後，就能看到和 [semantic-ui 官網](https://semantic-ui.com/elements/input.html#action) 一樣的 input。
  #input.ui.input.action
    // Step 2.1
    //input(type="text", placeholder="add todo...")
    input(type="text", v-model='binding', placeholder="add todo...")

    // Step 2.2
    //button.ui.icon.button
      //i.plus.icon
    button.ui.icon.button(@click='addTask')


  // Step 3.2 code here
    p {{[binding]}}
  
  // Step 5 code here
  .task(v-for="task in tasks")
    .ui.checkbox(@click='toggleTask(task.name)')
      input(type="checkbox" v-model='task.toggle')
      label(v-if='!task.toggle') {{task.name}}
      label(v-if='task.toggle')
        del {{task.name}}
    i.delete.icon(v-if='task.toggle' @click='rmTask(task.name)')

</template>

<script>
export default {

  data() {return {

    // Step 3.3 code here
    binding: 'Data binding is cool!',
    
    // Step 4.2 code here
    tasks: [],
  }},

  methods: {

    // Step 4.3 code here
    addTask() {
      if (!this.binding)
        return
      this.tasks.push({
        name: this.binding,
        toggle: false
      })
      this.binding = ''
    },

    rmTask(tsk) {
      this.tasks = this.tasks.filter(task => task.name != tsk)
    },

    toggleTask(tsk) {
      const toggle = this.tasks.find(task => task.name === tsk).toggle
      this.tasks.find(task => task.name === tsk).toggle = !toggle

    }
  }
}
</script>

<style lang="sass">
html
  font-size: large
#app
  width: 22em
  margin: auto
  display: flex
  flex-direction: column
  padding: 2em
.task
  margin-top: 1em
  display: flex
  justify-content: space-between
</style>

