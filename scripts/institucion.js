function splitScroll(){
	const controller = new ScrollMagic.controller();

	new ScrollMagic.scene({
		duration:'100%',
		triggerElement:'.scrollHalf_grupo_image',
		triggerHook:0
	})
	.setPin('.scrollHalf_grupo_contenido')
	.addIndicators()
	.addTo(controller);
}