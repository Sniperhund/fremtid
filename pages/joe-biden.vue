<script setup lang="ts">
useHead({
	title: "joe biden",
})
</script>

<template>
	<div>
		<!-- Why not? right? -->
		<img src="/joe-biden.png" class="joe-biden" />

		<p>poor kids are just as bright as white kids - joe biden</p>
	</div>
</template>

<style lang="css" scoped>
.joe-biden {
	width: 100vw;
	height: 100vh;
	object-fit: fill;
}

p {
	position: absolute;

	left: 50%;
	transform: translateX(50%);
	bottom: 50px;
	color: white; /* Gotta have that readablity */
}
</style>
