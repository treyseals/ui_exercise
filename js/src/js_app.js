/*
	Imports
	-------------------------------------------------------------------------------*/
	import { createApp } from 'vue';




		/*	Router Init
		---------------------------------------------------------------------------*/
		import { js_router } from './js_router';










	/*	Components
	-------------------------------------------------------------------------------*/
	import js_app from './js_app.vue';










	/*	Vue Init
	-------------------------------------------------------------------------------*/
	$.when(





		//	Dynamic Router
	
	
		js_router()
	
	
	
	
	
	).then((router)=>{





		const app 																	=	createApp(js_app).use(router).mount('#js_app');



		window.app 																	=	app;

		window.app_router 															=	router;





	});
