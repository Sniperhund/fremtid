const tooltip = {
	unconfirmed:
		"Jeg har dog ikke verificere nogen<br /> kamp mellem autonome droner og fjenden",
	tooMuchScienceFiction: "Måske lidt for meget science fiction",
	drone: "Den her kunne i fremtiden være fuldstændig styret af AI",
	logistics: "LOGISTICS IS EVERYTHING - TommyKay", // <-- It's a quote! SO ENGLISH!!!
	deepfake: "It's bad I know... it's my first time", // <-- I can't possible be penalised for this tooltip, right?
}

export const tooltipHelper = (tooltipKey: keyof typeof tooltip) => {
	return { content: tooltip[tooltipKey], html: true }
}
