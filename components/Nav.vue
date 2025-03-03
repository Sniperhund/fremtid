<script setup lang="ts">
const active = useState("nav-active", () => true)
</script>

<template>
	<nav class="nav">
		<h1>AI i Krig</h1>
		<h2>Kort version</h2>
		<h2>Lang version</h2>
	</nav>
	<div style="height: 60px"></div>
</template>

<style scoped>
.nav {
	position: fixed;
	left: 50%;
	transform: translateX(-50%);

	background-color: white;

	height: 60px;
	width: 100%;

	display: grid;
	grid-template-columns: repeat(3, 1fr);

	text-align: center;
	align-items: center;

	max-width: 1080px;
}

.icon {
	width: 32px;
	height: 32px;
	aspect-ratio: 1 / 1;

	position: absolute;

	left: 5px;
	top: 5px;

	cursor: pointer;
}
</style>
