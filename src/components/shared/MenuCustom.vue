<template>
  <section>
    <avatar name="ZenekeZene" level="Ninja Developer"></avatar>
    <contribute v-if="$route.path !== '/edit'"></contribute>
    <credits></credits>
    <version></version>
  </section>
</template>
<script>
import Version from "@/components/shared/Version";
import Credits from "@/components/Credits";
import Contribute from "@/components/contribution/Contribute";

export default {
  name: "MenuCustom",
  components: {
    Version,
    Credits,
    Contribute
  }
};
</script>
