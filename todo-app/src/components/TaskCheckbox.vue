<template>
  <div>
    <div class="checkbox-button">
      <input type="checkbox" :true-value="1" :false-value="0"
             v-on:change="toggle(todo)" v-bind:checked="todo.complete"
             class="col-sm-1 border border-danger"
             id="checkbox1" vmodel="checked">
      <del v-if="todo.complete" class="col-sm-8">
        <h5>{{ todo.name }}</h5>
      </del>
      <span v-else class="col-sm-8">
        <h5>{{ todo.name }}</h5>
      </span>
      <!--     <label v-if="label" for="checkbox1">{{ label }}</label> -->
  </div>
  <!--
    <div class="checkbox-button-1">
      <b-form-checkbox
      id="checkbox-1"
      v-model="status"
      size="lg"
      unchecked-value="not_accepted"
      >
      <label v-if="label">test</label>
      </b-form-checkbox>
    </div> -->
  </div>
</template>
<script>
export default {
  name: "TaskCheckbox"
}
</script>
<style lang="scss" scoped>
.checkbox-button {
  margin-left: 100px;
  text-align: left;
}
.checkbox-button-1 {
  margin-left: 100px;
  text-align: left;
}
</style>
