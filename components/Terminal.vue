<script lang="ts" setup>
import { Text } from "#imports"

const starting = useState("starting", () => false)
const outputText = useState("terminal-output", () => "")
const textRef = useTemplateRef("text-ref")

let interval: NodeJS.Timeout | null

let hasBeenAnimated = false

onMounted(() => {
	starting.value = true
	let dots = 0
	interval = setInterval(() => {
		dots = (dots + 1) % 4
		outputText.value = `Connecting to server${".".repeat(dots)}`
	}, 500)

	const observer = new IntersectionObserver(
		(entries) => {
			if (!entries[0].isIntersecting) return

			if (hasBeenAnimated) return

			hasBeenAnimated = true
			animate()
		},
		{
			threshold: 0.75,
		}
	)

	observer.observe(textRef.value!)
})

let first = false
let beforeUserInput = false
let trainingPart = false
let combinedOffsetFromTraining = 0

const scrollDown = () => {
	setTimeout(() => {
		textRef.value?.scrollTo(0, textRef.value?.scrollHeight)
	}, 50)
}

let times: number[] = []

const animate = () => {
	const highestId = window.setTimeout(() => {
		for (let i = highestId; i >= 0; i--) {
			window.clearInterval(i)
		}
	}, 0)

	Text.map((value) => {
		let time = value.time * 1000

		if (trainingPart) {
			time += combinedOffsetFromTraining * 1000
		}

		if (value.trainingPart) {
			trainingPart = true
			times = []
			combinedOffsetFromTraining = 0

			for (let i = 0; i < 10; i++) {
				const epochTime = getRandomArbitrary(1, 2.5)

				times.push(epochTime + combinedOffsetFromTraining)
				combinedOffsetFromTraining += epochTime
			}
		}

		setTimeout(() => {
			if (!first) {
				if (interval) clearInterval(interval)
				starting.value = false
				outputText.value = ""

				first = true
			}

			if (beforeUserInput) {
				beforeUserInput = false

				let index = 0
				const typewriterInterval = setInterval(() => {
					if (index < value.text.length) {
						outputText.value += value.text.charAt(index)
						index++
					} else {
						clearInterval(typewriterInterval)
					}
				}, getRandomArbitrary(40, 75))

				scrollDown()

				return
			}

			if (value.trainingPart) {
				trainingPart = true
				let loss = 3.5

				for (let i = 1; i <= 10; i++) {
					setTimeout(() => {
						loss += getRandomArbitrary(-0.6, 0.1)

						if (loss < getRandomArbitrary(0.4, 0.7)) {
							loss = getRandomArbitrary(0.5, 0.8)
						}

						outputText.value += `Epoch ${i}/10 | Loss: ${loss.toFixed(
							2
						)}\n`

						scrollDown()
					}, times[i - 1] * 1000)
				}

				return
			}

			if (value.beforeUserInput) {
				beforeUserInput = true
				outputText.value += value.text
			} else {
				outputText.value += value.text

				let cursorShown = false
				if (value.showCursor) {
					setInterval(() => {
						if (cursorShown)
							outputText.value = outputText.value.slice(0, -1)
						else outputText.value += "|"
						cursorShown = !cursorShown
					}, 500)
				}
			}

			scrollDown()
		}, time)
	})
}
</script>

<template>
	<div class="terminal" :class="starting ? 'starting' : ''" ref="text-ref">
		{{ outputText }}
	</div>
</template>

<style lang="css" scoped>
@font-face {
	font-family: "JetbrainsMono NerdFont";
	src: url("/JetBrainsMonoNerdFont-Regular.ttf");
}

.terminal {
	font-family: "JetbrainsMono NerdFont";
	height: 300px;
	white-space: pre;
	overflow-y: hidden;
	-webkit-user-select: none; /* Safari */
	-ms-user-select: none; /* IE 10 and IE 11 */
	user-select: none; /* Standard syntax */
}

.starting {
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 1.5rem;
}
</style>
