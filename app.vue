<template>
	<div class="body">
		<NuxtPage />
		<Footer />
		<ScrollToTop />
	</div>
</template>

<style>
* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}

html {
	scroll-behavior: smooth;
}

.body {
	/* Used as a "virtual" body, as Nuxt already has a body */
	font-family: "Quicksand";
}

.limit-width {
	max-width: calc(1000px + 1.5rem);
	padding: 0 1.5rem;
	margin: 0 auto;
}

.v-popper--theme-tooltip .v-popper__inner {
	background: white;
	color: black;
	border: 1px solid rgba(0, 0, 0, 0.2);
}

.page-enter-active,
.page-leave-active {
	transition: all 0.1s;
}
.page-enter-from,
.page-leave-to {
	opacity: 0;
	filter: blur(1rem);
}
</style>
