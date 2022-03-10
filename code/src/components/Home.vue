<template>
  <el-card shadow="hover">
    {{ someValue + "." + title }}<el-tag shadow="hover">{{ subtitle }}</el-tag>
  </el-card>
</template>
<script lang="ts">
import { computed, defineComponent } from "vue";
import { mapState, useStore } from "vuex";
export default defineComponent({
  name: "Home",
  setup() {
    const store = useStore();
    const getText = () =>
      store.dispatch("home/getText");
    return {
      title: computed(() => store.state.home.title),
      subtitle: computed(() => store.state.home.subtitle),
      getText,
    };
  },
  data() {
    return {};
  },
  computed: {
    ...mapState({
      someValue: (state: any) => state.someValue,
    }),
  },
  mounted() {
    this.getText();
  },
});
</script>
