<template>
  <div class="dashboard">
    <section class="left-pane">
    </section>
    <section class="main-view">
      <div class="date-table">
        <div class="item-row">
          <div class="checkbox-button">
            <input type="hidden" :name="name" :value="value">
            <input type="checkbox" :true-value="1" :false-value="0" :checked="value" @change="$emit(\'input\', $event.target.value)" class="hidden">
          </div>
          <p>Thing #1.</p>
        </div>
        <div class="item-row">
          <div class="checkbox-button"></div>
          <p>Thing #2.</p>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  name: 'home',
  methods: {
  },
  components: {
  }
}
</script>
<style lang="scss" scoped>
  .main-view {
    text-align: left;
  }
  .date-table .item-row {
    padding: 40px 0 20px 0;
    font-family: "Roboto";
    font-size: 60px;
  }
  .p {
    font-size: 30px;
  }
</style>
