<script setup lang="ts">
const sliderPos = useState("slider-position", () => 50)

const containerRef = useTemplateRef("container-ref")
let sliding = false

const startSlide = () => {
	sliding = true
}

const stopSlide = () => {
	sliding = false
}

const slide = (event: MouseEvent) => {
	if (!sliding || !containerRef.value) return

	const rect = containerRef.value.getBoundingClientRect()

	let pos = ((event.clientX - rect.left) / rect.width) * 100
	sliderPos.value = Math.min(100, Math.max(0, pos))
}

onMounted(() => {
	if (!window) return

	window.addEventListener("mousemove", slide)
	window.addEventListener("mouseup", stopSlide)
})

onUnmounted(() => {
	if (!window) return

	window.removeEventListener("mousemove", slide)
	window.removeEventListener("mouseup", stopSlide)
})
</script>

<template>
	<div class="before-after-container">
		<div class="slider-container" ref="container-ref">
			<!-- I made a mistake and flipped these lol -->
			<div
				class="before prevent-select"
				draggable="false"
				@dragstart.prevent
			>
				<slot name="after"></slot>
			</div>
			<div
				draggable="false"
				class="after prevent-select"
				@dragstart.prevent
				:style="{
					clipPath: `inset(0 calc(${100 - sliderPos}%) 0 0)`,
				}"
			>
				<slot name="before"></slot>
			</div>
			<div
				class="slider"
				:style="{ left: `${sliderPos}%` }"
				@mousedown="startSlide"
			>
				<div>
					<Icon name="uil:arrow" />
				</div>
			</div>
		</div>
	</div>
</template>

<style lang="css" scoped>
.before-after-container,
.slider-container,
.before {
	width: 100%;
}

.slider-container {
	position: relative;
	overflow: hidden;

	video,
	image {
		margin: 0 !important;
	}
}

.before > * {
	width: 100%;
	height: 100%;
	margin: 0 !important;
}

.after {
	position: absolute;
	top: 0;
	left: 0;
	height: 100%;
	overflow: hidden;

	& > * {
		width: 100%;
		height: 100%;
		object-fit: cover;
		margin: 0 !important;
	}
}

.slider {
	position: absolute;
	top: 0;
	width: 20px;
	height: 100%;

	transform: translateX(-50%);

	cursor: ew-resize;

	& > div {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);

		z-index: 2;

		aspect-ratio: 1;
		width: 32px;
		height: 32px;
		border-radius: 50%;

		background-color: white;

		display: flex;
		justify-content: center;
		align-items: center;

		border: 1px solid rgba(0, 0, 0, 0.2);

		& > span {
			font-size: 1.4rem;
			color: black;
		}
	}

	&::before {
		content: "";
		display: block;
		width: 2px;
		height: 100%;
		background-color: white;
		margin: 0 auto;
	}
}
</style>
