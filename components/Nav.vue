<script setup lang="ts">
const active = useState("nav-active", () => true)
</script>

<template>
	<div class="navContainer">
		<nav class="nav">
			<h1 class="mr-6">AI i Krig</h1>
			<NuxtLink to="/">
				<h2>Kort version</h2>
			</NuxtLink>
			<NuxtLink to="/long">
				<h2>Lang version</h2>
			</NuxtLink>
		</nav>
	</div>
</template>

<style scoped>
.navContainer {
	position: fixed;
	left: 50%;
	transform: translateX(-50%);
	border-bottom: 1px solid rgba(0, 0, 0, 0.1);
	width: 100%;

	background-color: white;
}

.nav {
	margin: 0 auto;

	height: 50px;
	width: 100%;

	display: flex;
	align-items: center;
	gap: 15px;

	font-weight: 400;
	font-size: 1.25rem;

	max-width: 1080px;

	-webkit-transform: translateZ(0);
	transform: translateZ(0);

	font-family: Inter;
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
