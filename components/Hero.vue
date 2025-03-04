<script setup lang="ts">
const props = defineProps<{ image: String }>()
</script>

<template>
	<img :src="props.image" class="image" />
</template>

<style lang="css" scoped>
.image {
	width: 100vw;
	height: 70vh;
	object-fit: cover;
	object-position: center;
}
</style>
