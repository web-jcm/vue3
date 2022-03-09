<template>
  <el-card shadow="hover">
    {{ title }}<el-tag shadow="hover">{{ subtitle }}</el-tag>
  </el-card>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { get } from "../request/http";
export default defineComponent({
  name: "Home",
  setup() {},
  data() {
    return {
      title: "",
      subtitle: "",
    };
  },
  mounted() {
    get("sentences").then((res: any) => {
      if (res.code === 200) {
        this.title = res.result.name;
        this.subtitle = res.result.from;
      }
    });
  },
});
</script>
