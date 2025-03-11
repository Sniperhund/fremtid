<script lang="ts" setup>
const app = useNuxtApp()

const showScrollToTop = useState("scrollToTop", () => false)

const handleScroll = () => {
	if (window.scrollY > 600) {
		showScrollToTop.value = true
	} else {
		showScrollToTop.value = false
	}
}

const addListener = () => {
	if (window) {
		window.addEventListener("scroll", handleScroll)

		handleScroll()
	}
}

const scrollToTop = () => {
	if (window) {
		window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
	}
}

app.hook("page:finish", addListener)
</script>

<template>
	<div
		class="container"
		:class="showScrollToTop ? 'active' : ''"
		@click="scrollToTop"
	>
		<Icon name="solar:alt-arrow-up-linear" class="icon" />
	</div>
</template>

<style lang="css" scoped>
.container {
	position: fixed;
	bottom: 10px;
	right: 10px;

	display: flex;
	justify-content: center;
	align-items: center;

	width: 40px;
	height: 40px;

	border-radius: 50%;
	background-color: white;
	border: 1px solid rgba(0, 0, 0, 0.2);

	cursor: pointer;
	padding-bottom: 2px;

	opacity: 0;
	transition: opacity 0.1s ease-in-out;
}

.container.active {
	opacity: 1;
}

.icon {
	font-size: 30px;
}
</style>
