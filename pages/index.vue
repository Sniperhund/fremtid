<script setup lang="ts">
useHead({
	title: "Fremtid",
})

const parallaxImage = useTemplateRef("image")

const handleScroll = () => {
	if (parallaxImage.value) {
		let parallaxImageScroll = window.scrollY * 0.35

		if (parallaxImageScroll > 200) parallaxImageScroll = 200

		// FIX: It's lagging behind when I move too fast?
		parallaxImage.value.style.transform = `translateY(${parallaxImageScroll}px)`
	}
}

onMounted(() => {
	window.addEventListener("scroll", handleScroll)
})

onBeforeUnmount(() => {
	window.removeEventListener("scroll", handleScroll)
})

let counter = 0
let timeout: NodeJS.Timeout

const handleVideoClick = async () => {
	counter++

	if (counter > 10) {
		await navigateTo("/joe-biden")
	}

	clearTimeout(timeout)
	timeout = setTimeout(() => {
		counter = 0
	}, 15 * 1000)
}

const video1 = useTemplateRef("video-1")
const video2 = useTemplateRef("video-2")
let interval: NodeJS.Timeout
/*
onMounted(() => {
	interval = setInterval(() => {
		if (!video1.value || !video2.value) return

		video2.value.currentTime = video1.value.currentTime
	}, 100)
})

onUnmounted(() => {
	if (!interval) return

	clearInterval(interval)
})*/
</script>

<template>
	<div>
		<!-- Why the actual fuck doesn't this JUST WORK!!! -->
		<div class="image-container">
			<img src="/short-hero.webp" class="image" ref="image" />
		</div>

		<section class="limit-width" id="sections">
			<h1>
				AI som et krigsvåben: Er vi klar til en algoritmisk slagsmark
			</h1>

			<NuxtLink to="/long">Gå til detaileret version</NuxtLink>

			<section class="table-of-contents">
				<h2>Indholdsfortegnelse</h2>

				<ul class="list-disc list-inside">
					<li>
						<NuxtLink to="#era"
							>Opdag den nye æra af krigsførelse</NuxtLink
						>
					</li>
					<li>
						<NuxtLink to="#escalation">
							De etiske dilemmaer og hurtig eskalation
						</NuxtLink>
					</li>
					<li>
						<NuxtLink to="#digital-frontline"
							>Den digitale frontlinje</NuxtLink
						>
					</li>
					<li>
						<NuxtLink to="#revolution"
							>Hvad der driver ændringen</NuxtLink
						>
					</li>
					<li>
						<NuxtLink to="#false">Kampen mod det falske</NuxtLink>
					</li>
				</ul>
			</section>

			<article>
				<h2 id="era">Opdag den nye æra af krigsførelse</h2>

				<p>
					AI er ikke kun for selvkørende biler eller smart hjem, det
					ændrer også krigsførelse. Forestil dig slagmarker, hvor det
					er algoritmer, ikke kun menneskelige soldater, der tager
					valgene.<br />
					Det betyder at computere i den nære fremtid selv kan
					bestemme, hvem de vil angribe. Dette kan gøre krigsførelse
					hurtigere og mere effektivt, men det stiller også nogle
					store spørgsmål om sikkerhed, etik og kontrol.
				</p>

				<!-- Fancy shit -->
			</article>

			<article>
				<h2 id="escalation">
					De etiske dilemmaer og hurtig eskalation
				</h2>

				<div class="flex gap-[10px]">
					<p>
						Hvem tager ansvaret, når en maskine tager en liv eller
						død-beslutning?<br />
						I og med at AI får en større rolle, står vi over for
						uset etiske problemer og risikoen for algoritmisk
						eskalering, hvor krige kan komme ud af kontrol, før vi
						overhovedet forstår, hvad der sker.
					</p>

					<!-- It's such a shame I don't have enough time to make this fullscreen -->
					<img src="/prototype-autonomous-robot.webp" class="h-44" />
				</div>

				<!-- Fancy shit -->
			</article>

			<article>
				<h2 id="digital-frontline">Den digitale frontlinje</h2>

				<p>
					I nutidens hurtige kampe er data det nye våben. AI analyser
					satellit- og drone-billeder for at forudse fjenden og give
					tidlig advarsel om angreb og gøre data til beslutninger på
					kun få sekunder.
				</p>

				<!-- Fancy shit -->
			</article>

			<article>
				<h2 id="revolution">Hvad der driver ændringen</h2>

				<p class="mb-4">
					Ny teknologi driver denne nye æra. Fra avanceret GPU'er, der
					hjælper med læring, til realistiske simulationer, der træner
					soldater, gør innovationen af AI til en vigtig del af
					morderne krig i fremtiden i stedet for kun
					<i>science fiction</i>.
				</p>

				<!-- Don't ask me, it's maybe not the best to use for this...
					 But I don't really have any better ideas lol
					 
					 And sometimes it just dies? Like stops working lol -->
				<Terminal />
			</article>

			<article>
				<h2 id="false">Kampen mod det falske</h2>

				<p class="mb-2">
					I en tid med deepfakes og AI-drevet misinformation bliver
					hverdagen mere og mere uklar. Avanceret algoritmer, der
					skaber gode billeder og manipulerer folks holdninger,
					hvilket gør kampen om sandheden til en vigtig del af den
					moderne informationskrig.
				</p>

				<p class="mt-3">
					Nedenunder er en lille video jeg har lavet med deepfake, det
					her er hvad omkring 12 timers træning, en enkel GPU og et
					meget lille datasæt kan få dig, hvad kunne der blive lavet
					med længere træningstid og en massere GPU'er?
				</p>

				<div
					v-tooltip="tooltipHelper('deepfake')"
					@click="handleVideoClick"
				>
					<BeforeAndAfterSlider>
						<template #before>
							<video
								src="/result_trimmed_original.mp4"
								autoplay
								loop
								muted
								ref="video-1"
							/>
						</template>
						<template #after>
							<video
								src="/result_trimmed.mp4"
								autoplay
								loop
								muted
								ref="video-2"
							/>
						</template>
					</BeforeAndAfterSlider>
				</div>
			</article>

			<NuxtLink to="/long" class="mt-2"
				>Gå til detaileret version</NuxtLink
			>
		</section>
	</div>
</template>

<style lang="css" scoped>
#sections {
	padding-bottom: 100px;
}

#sections .table-of-contents {
	& h2 {
		font-size: 1.4rem;
		border-bottom: 1px solid rgba(0, 0, 0, 0.2);
		margin-bottom: 20px;
	}
}

.image-container {
	width: 100vw;
	height: 80vh;
	overflow: hidden;
}

.image {
	width: 100%;
	height: 100%;
	object-fit: cover;
	/*transition: transform 0.05s ease-out;*/
}
</style>
