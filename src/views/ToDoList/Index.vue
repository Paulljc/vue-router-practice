<template>
  <div class="outer-layer">
    <div class="container">
      <div class="layout">
        <div class="title">{{ title }}</div>
        <div class="inner-content">
          <content-input></content-input>
          <ul :class="['items-list']">
            <content-list v-for="item in itemFilters" :item="item" :key="item.id"></content-list>
          </ul>
          <content-filter></content-filter>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ContentInput from "../../components/ToDoList/ContentInput";
import ContentList from "../../components/ToDoList/ContentList.vue";
import ContentFilter from "../../components/ToDoList/ContentFilter.vue";
import { mapGetters, mapState } from 'vuex'

export default {
  components: {
    ContentInput,
    ContentList,
    ContentFilter
  },
  created() {
    this.fetchData();
  },
  data() {
    return {
      title: "Simple Todo List with adding and filter by diff status.",
    };
  },
  methods: {
    fetchData: function() {
      this.$store.dispatch("initItems")
    }
  },
  computed: {
    ...mapGetters([
      'itemFilters'
    ]),
    ...mapState([
      'toDoList'
    ])
  }
};
</script>

<style lang="stylus" rel="stylesheet/stylus">
.outer-layer {
  padding: 40px 0 0;

  @media screen and (max-width: 767px) {
    padding: 50px 0 10px;
  }

  .layout {
    width: 640px;
    margin: 30px auto 0;

    @media screen and (max-width: 767px) {
      margin-top: 5px;
      width: 640px;
    }

    @media screen and (max-width: 640px) {
      width: 100%;
    }
  }
}

.title {
  margin-top: 20px;
  margin-bottom: 10px;
  font-size: 22px;
  line-height: 1;
  font-family: Microsoft YaHei;
  font-weight: 100;
  color: #2c3e50;
  user-select: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;

  @media screen and (max-width: 767px) {
    font-size: 40px;
    margin-bottom: 5px;
  }
}

.inner-content {
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 25px 50px 0 rgba(0, 0, 0, 0.1);
}

.items-list {
  list-style: none;
  padding: 0;
  margin: 0;
  border-top: 1px solid #e6e6e6;
  transition-duration: 0.3s;
  transition-timing-function: ease-in-out;

  & li {
    position: relative;
    font-size: 24px;
    border: 1px solid #ededed;
    border-left-width: 0;
    border-right-width: 0;
    margin-top: -1px;
  }
}
</style>
