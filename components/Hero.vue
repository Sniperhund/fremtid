<script setup lang="ts">
const { src, type = "image" } = defineProps<{
	src: string
	type?: "video" | "image"
}>()
</script>

<template>
	<img v-if="type == 'image'" :src="src" class="image" />
	<video v-else autoplay muted>
		<source :src="src" />
	</video>
</template>

<style lang="css" scoped>
.image {
	width: 100vw;
	height: 70vh;
	object-fit: cover;
	object-position: center;
}
</style>
