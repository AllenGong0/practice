<template>
  <Counter></Counter>
</template>

<script>
// @ is an alias to /src
import Counter from './componentA'
export default {
  name: 'home',
  components: {
      Counter
  }
}
</script>
