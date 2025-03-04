<template>
	<div class="body">
		<Nav />
		<div style="padding-top: 50px">
			<NuxtPage />
		</div>
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
	font-family: "Quicksand";
}

.limit-width {
	max-width: 1080px;
	margin: 0 auto;
}
</style>
