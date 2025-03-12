<script setup lang="ts">
useHead({
	title: "Fremtid - detaileret version",
})
</script>

<template>
	<div>
		<Hero src="/long-hero.webp" alt="Hero" />
		<section class="limit-width" id="sections">
			<article>
				<h2>Introduktion</h2>

				<p>
					AI er ikke længere kun en del af <i>science fiction</i>, det
					er begyndt at blive en større del af vores dagligliv. Det er
					ikke kun til smart hjem og selvkørende biler mere, AI er
					også ved at blive en del af krig.
				</p>
				<p>
					Forestil dig en krig, hvor valgene bliver taget på
					millisekunder, ikke at mennesker, men af algoritmer. Det er
					ikke længere en fjern fremtid mere - det er den virkelighed
					vi langsom er begyndt at gå ind I, i og med AI bliver mere
					og mere sammenflettet med krigsførelse.
				</p>
			</article>

			<article>
				<h2>AI i krigsførelse: I dag</h2>

				<p>
					Glem Hollywood's dræber robotter for et sekund.
					<a
						href="https://www.csis.org/analysis/understanding-military-ai-ecosystem-ukraine"
						>AI-revolutionen i krig er allerede lige så stille
						begyndt</a
					>.
				</p>
				<p>
					Bare kig på nuværende krigen i Ukraine. Der dukker rapporter
					op af Ukrainske soldater der tester droner, som kan spore og
					<span v-tooltip="tooltipHelper('unconfirmed')">endda </span>
					<span v-tooltip="tooltipHelper('unconfirmed')"
						>angribe fjenden automatisk</span
					>
					altså uden nogle mennesker bag kontrolleren.<br />
					Det er også automatiske maskingevær, der bruger AI til at
					låse på deres mål, de skal kun bruge et menneske til at
					begynde at skyde.
				</p>

				<video controls onloadstart="this.volume = 0">
					<source src="/video.webm" type="video/webm" />
				</video>

				<ul class="list-disc list-inside">
					<p>
						Mens mange af AI's evner testes, har AI ikke endnu
						erstattet mennesker i militæret, men det er stille
						begyndt at ændre hele det militære landskab:
					</p>

					<li>
						<strong>Bedre øjne og øre:</strong> Forestil dig at
						kigge igennem bjerge af data fra satellitter, droner og
						andre efterretninger. Det er næsten umuligt for
						mennesker, men nemt for AI. Algoritmer kan nemt udpege
						mønstre, forudse fjendens bevægelser og give tidelig
						advarsel med en effektivt som var utænkeligt for nogle
						år siden.
					</li>
					<li>
						<strong>Cyber betjente:</strong> I den mørke digitale
						slagmark, AI er ved at blive en af vores første linjer
						af forsvar, som hurtigt opdager og bekæmpe cyber angreb,
						for at bestykke vigtige militær og civile netværk og
						infrastruktur.
					</li>
				</ul>

				<img
					src="/drone.webp"
					alt="Drone"
					v-tooltip="tooltipHelper('drone')"
					class="mt-3"
				/>
			</article>

			<article>
				<h2>Det etiske minefelt med AI i krig</h2>

				<p>
					Efterhånden som AI bliver mere og mere integreret i morderne
					krigsførelse, er vi kun begyndt at se et lille glimt af de
					etiske spørgsmål de vil bringe fremtidens konflikter.
				</p>
				<p>
					Måske den mest foruroligende mulighed er den udbredte
					anvendelse af "dræber robotter". Hvis disse "dræber
					robotter" bliver en realitet i de kommende år, bliver de
					ikke bare støttende soldater, de vil være våben som kan tage
					menneskeliv på en stor skala, uden nogle direkte menneskelig
					styring eller den følelsesmæssige og psykologiske påvirkning
					der medfølger ved at tage et liv.
				</p>

				<ul class="list-disc list-inside">
					<p>
						Forestil dit fremtidens slagmarker, hvor det er AI og
						ikke mennesker der tager valgene om liv og død. Det
						stiller nogle store etiske spørgsmål, som vi burde tage
						stilling til før denne fremtid bliver nutid:
					</p>

					<li>
						<strong>Hvem får skylden, hvis noget går galt:</strong>
						Når vi kigger fremad, vil spørgsmålet om ansvar i en
						AI-drevet krig blive endnu mere kritisk.<br />
						Når AI uundgåeligt begår fejl, hvem skal så få skylden?
						Programmørerne der lavede AI'en, soldaten som indsatte
						den eller AI'en selv? Manglen på tydelige linjer for
						ansvar i sådan nogle situationer stiller os overfor
						nogle store lovmæssige og etiske spørgsmål som vi først
						lige er begyndt at tænke over.
					</li>
					<div class="sm:flex gap-3">
						<li>
							<strong>Truslen om algoritmisk eskalering:</strong>
							Efterhånden som AI bliver både hurtigere og mere
							selvstændige vokser chancen for en hurtig og
							utilsigtet eskalering i fremtidens konflikter.
							Forestil dig fremtidige krige, hvor algoritmiske
							reaktioner skaber modsvar med en hastighed, som
							overgår vores menneskelige forståelse og evne til at
							gribe ind. Kunne det skabe en ny æra af
							hyper-eskalering, hvor en konflikt kommer ud af
							kontrol med en aldrig set før hastighed og en
							ødelæggende effektivitet, så menneskeheden må
							forsøge at genvinde kontrollen ligesom i
							<span
								v-tooltip="
									tooltipHelper('tooMuchScienceFiction')
								"
								>"Terminator"</span
							>?
						</li>

						<img
							src="/terminator.webp"
							class="terminator hidden md:block"
						/>
					</div>
				</ul>
			</article>

			<article>
				<h2>Den algoritmiske fremtid for krig</h2>

				<p>
					Integrationen af AI i militæret repræsenterer ikke bare en
					lille forbedring, men et fundamentalt skift. Vi er ved at gå
					ind i en ny æra, hvor algoritmer drevet af stigende
					computerkraft er på vej til at ændre selve krigens natur.<br />
					Denne ændring er mest drevet af stigningen af specialiseret
					datacenter GPU'er, mest dem fra NVIDIA.<br />
					Selvom GPU'er var oprindeligt lavet til grafisk rendering,
					har NVIDIA lavet kraftfulde datacenter GPU'er specifikt
					designet for at træne AI.<br />
					Som det beskrives i en
					<a
						href="https://iot.eetimes.com/how-nvidia-is-powering-the-ai-revolution-from-gpus-to-ai-supercomputing/"
						>rapport fra IoT times</a
					>, er NVIDIA's fremskridt på området vigtigt for udviklingen
					af avanceret AI.
				</p>

				<p>
					På grund af denne evne til at træne AI modeler, som kan
					håndtere meget komplekse opgaver, arbejder flere militære i
					verden på AI-drevet droner og robotter som kan automatisk
					navigere slagsmarken, identificer fjenden og endda
					koordinere med hinanden, hvilket potentielt kan give
					<i>sværme</i> af AI-våben
				</p>

				<ul class="list-disc list-inside">
					<p>
						For at illustrere yderligere, hvordan AI kan ændre
						krigsførelse i de næste år, kig på disse eksempler:
					</p>

					<li>
						<strong>Perfekt logistik:</strong> Krigsførelse er et
						<span v-tooltip="tooltipHelper('logistics')"
							>logistisk mareridt</span
						>, det er blandt andet en af årsagerne til Ruslands
						tidlige planer om kapitulere Ukraine fejlet, men AI
						kunne bruges til at effektivisere forsyningslinjer,
						forudse udstyrsfejl og sikre våben og brændstof er hvor
						der er brug for dem.
					</li>
					<li>
						<strong>Den ultimative træning:</strong> Glem alle de
						gamle træning manualer, AI kunne i fremtiden blive brugt
						til at lave hyper-realistiske simulationer sammen med
						XR, der lader soldater deltage i mange forskellige
						kampsituationer og forberede dem til virkelig krig meget
						bedre end øvelser og manualer.
					</li>
				</ul>

				<p>
					Denne algoritmiske skift i krig bringer nogle historiske
					ligheder især med atomvåbenkapløbet i det 20. århundrede.
					Ligesom atomvåben så kan AI give en store militære magt, men
					i modsætning til atomvåben, som primært bliver brugt som et
					afskrækkelses våben, bliver AI ligeså stille integreret
					direkte i militæret, både i deres værktøj og taktikker.
				</p>
			</article>

			<article>
				<h2>
					Den målrettede sandhed: AI og våbenisering af information
				</h2>

				<p>
					Ud over den blodige slagmark er AI i fuld gang med at ændre
					informationskrig og propaganda. Denne udvikling rækker ud
					over simpel propaganda og er ved at blive til avanceret
					manipulation af offentlighedens holdning. <br />
					AI's evne til at analyser store datasæt fra sociale medier,
					nyhedsartikler og adfærd online gør det muligt at skabe
					meget målrettet og personligt propaganda. <br />
					Forestil dig, at AI algoritmer skaber en historie, der giver
					genklang hos specifikke demografer, og udnytter allerede
					eksisterende holdninger til at manipulere den offentlige
					holdning om f.eks. krig<br />
					I en fremtidig krig bliver evnen til mere specifik målrettet
					og psykologisk manipulation en stor trussel mod demokratiske
					principper og stabilitet i samfundet.
				</p>

				<!-- I have not been cooking while writing this lol -->
				<p>
					Desuden kan AI allerede generere <i>deepfakes</i>, som er
					realistiske men fabrikerede videoer eller lyd optagelser, og
					de bliver kun bedre som ny teknologi udvikles.<br />
					Disse <i>deepfakes</i> kan blive brugt til at sprede
					misinformation og miskreditere politiske fjender og kan
					sløre linjerne mellem sandhed og fiktion
				</p>
			</article>
		</section>
	</div>
</template>

<style lang="css" scoped>
.terminator {
	width: 400px;
	height: 300px;

	object-fit: cover;
}
</style>
