/*
	Imports
	-------------------------------------------------------------------------------*/
	import { createRouter, createWebHistory } from 'vue-router';




		/*  App
		---------------------------------------------------------------------------*/
		import { app_store } from '@methods/app.js';




		/*  Routes
		---------------------------------------------------------------------------*/
		import { routes } from '@data_static/routes.js';









	/*	JS Router
	-------------------------------------------------------------------------------*/
	export async function js_router(){





		/*	Base
		---------------------------------------------------------------------------*/
		var base																	=	'/';







		/*	Router
		---------------------------------------------------------------------------*/
		const router																=	createRouter({
	
	
	
	
	
			/*	History
			-----------------------------------------------------------------------*/
			history																	:	createWebHistory(base),
	
	
	
	
	
			/*	Routes
			-----------------------------------------------------------------------*/
			routes																	:	routes





		});
	
	
	
	
	
			/*	Guard -> Before Each
			-----------------------------------------------------------------------*/
			router.beforeEach((to, from, next) => {





				app_store.state														=	'routing';





				next();



			});








			/*	Guard -> After
			-----------------------------------------------------------------------*/
			router.afterEach((to, from) => {





				//	Update Title


				document.title														=	to?.meta?.title;





				//	Active


				app_store.active_header												=	(to.name != 'profile');


				app_store.state														=	'active';





			});





		return	router;





	};
