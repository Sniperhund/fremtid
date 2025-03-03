<template>
	<div class="body">
		<Nav />
		<NuxtPage />
	</div>
</template>

<style>
* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}

.body {
	/* Used as a "virtual" body, as Nuxt already has a body */
	overflow-y: hidden;
	font-family: "Inter";
}
</style>
