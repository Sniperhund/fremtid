<script setup lang="ts">
const parallaxImage = useTemplateRef("image")

const handleScroll = () => {
	if (parallaxImage.value) {
		const scrollPosition = window.scrollY
		parallaxImage.value.style.transform = `translateY(${
			scrollPosition * 0.35
		}px)`
	}
}

onMounted(() => {
	window.addEventListener("scroll", handleScroll)
})

onBeforeUnmount(() => {
	window.removeEventListener("scroll", handleScroll)
})
</script>

<template>
	<div>
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
					AI er ikke kun for selvkørende biler, det ændrer også
					krigsførelse. Forestil dig slagmarker, hvor algoritmer, ikke
					kun menneskelige soldater, bestemmer resultatet på
					millisekunder.<br />
					Selvstændige droner, lyn-hurtigt cyberforsvar og datadrevet
					strategier ændrer allerede militære taktikker i dag.
				</p>

				<!-- Fancy shit -->
			</article>

			<article>
				<h2 id="escalation">
					De etiske dilemmaer og hurtig eskalation
				</h2>

				<p>
					Hvem tager ansvaret, når en maskine tager en liv eller
					død-beslutning? I og med at AI får en større rolle, står vi
					over for uset etiske problemer og risikoen for algoritmisk
					eskalering, hvor krige kan komme ud af kontrol, før vi
					overhovedet forstår, hvad der sker.
				</p>

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

				<p>
					Ny teknologi driver denne nye æra. Fra avanceret GPU'er, der
					hjælper med læring, til realistiske simulationer, der træner
					soldater, gør innovationen af AI til en vigtig del af
					morderne krig i fremtiden i stedet for kun
					<i>science fiction</i>.
				</p>

				<!-- Don't ask me, it's maybe not the best to use for this...
					 But I don't really have any better ideas lol -->
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

				<!-- Fancy shit -->
			</article>

			<NuxtLink to="/long">Gå til detaileret version</NuxtLink>
		</section>
	</div>
</template>

<style lang="css" scoped>
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
	transition: transform 0.05s ease-out;
}
</style>
