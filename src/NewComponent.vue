<template>
  <div class="dummy">
	  <p class="message">{{message}}</p>
    <ul class="dummy-list">
      <li class="dummy-tem" v-bind:key="d" v-for="d in dummies">{{d}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "dummy",
  data: () => {
	  return {
		  message: 'Hello from Vue',
	  	dummies: ['I\'m item from Vue', 'Me too, from component', 'Last, but not least']
	  }
  }
  // Everything else is ommited
};
</script>

<style lang="scss">
.dummy {
	height: 400px;
	width: 400px;
}
.dummy-list {
  border: 1px solid lightgray;
  font-size: 16px;
  width: 350px;
}
</style>
