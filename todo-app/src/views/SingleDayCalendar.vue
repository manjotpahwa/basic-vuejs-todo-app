<template>
  <el-container direction="vertical">
  <el-header>Header</el-header>
  <el-container direction="vertical">
    <!-- <el-aside>
      <el-menu default-active="2" background-color="#545c64">
      <el-submenu index="1">
          <span>Today</span>
      </el-submenu>
      <el-submenu index="2">
          <span>Tomorrow</span>
      </el-submenu>
      </el-menu>
    </el-aside> -->
    <sidebar-menu :menu="menu" width="200px">
    </sidebar-menu>
    <el-main>
      <el-table :data="tableData">
        <el-table-column prop="date" label="Date" color="white">
        </el-table-column>
        <el-table-column prop="name" label="Name" color="white">
        </el-table-column>
      </el-table>
    </el-main>
  </el-container>
  </el-container>
</template>
<script>
export default {
  name: 'home',
  methods: {
  },
  components: {
  },
  data() {
    const item = {
        date: '2016-05-02',
        name: 'Tom',
      };
      return {
        checked: true,
        tableData: Array(20).fill(item),
        menu: [
            {
                header: true,
                title: 'Main Navigation',
                hiddenOnCollapse: true
            },
            {
                href: '/',
                title: 'Dashboard',
                icon: 'fa fa-user'
            },
            {
                href: '/charts',
                title: 'Home',
                icon: 'fa fa-chart-area',
                child: [
                    {
                        href: '/charts/sublink',
                        title: 'Sub Link'
                    }
                ]
            }
        ]
      };
  }
}
</script>
<style lang="scss" scoped>

  .el-aside {
    width: 20%;
    height: 100%;
    color: white;
    border: 1px solid #eee;
    margin-right: 5px;
  }
  .el-menu {
    text-color: #fff;
  }
  .el-submenu {
    text-align: left;
  }
  .el-table {
    color: white;
  }
  .el-main {

  }
</style>
