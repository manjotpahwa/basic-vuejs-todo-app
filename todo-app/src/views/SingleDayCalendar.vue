<template>
  <div class="dashboard">
    <section class="left-pane">
    </section>
    <section class="main-view">
      <div class="date-table">
          <div class="item-row">
            <!--<TaskCheckbox v-model="checked" label="Thing number
              1"></TaskCheckbox>-->
              <p> number 1</p>
              <p> number 2</p>
           <div class="input-row">
             <input v-model="inputField" v-on:keyup.enter="addTodo" class="mr-1" placeholder="Todo Item" />
             <button @click="addTodo" class="btn btn-primary">Add Todo</button>
          </div>
          </div>
      </div>
    </section>
  </div>
</template>
<script>
//import TaskCheckbox from '../components/TaskCheckbox';
export default {
  name: 'home',
  methods: {
  },
  components: {
    //TaskCheckbox
  }
}
</script>
<style lang="scss" scoped>
  .main-view {
    text-align: left;
  }
  .date-table .item-row {
    position: relative;
    padding: 40px 0 20px 40px;
    font-size: 16px;
    color: white;
  }
  .btn {
    margin-left: 10px;
  }
  .p {
    margin-left: 20px;
    font-size: 20px;
    text-align: centre;
  }
</style>
