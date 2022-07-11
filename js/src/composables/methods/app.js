/*
	Imports
	-------------------------------------------------------------------------------*/
	import { computed, reactive, shallowReactive,  watch } from 'vue';




		/*  App Data 
		---------------------------------------------------------------------------*/ 
		import app_data from '@src/js_data.js';




		/*  Clients
		---------------------------------------------------------------------------*/ 
		import { clients } from '@methods/clients.js';
	
	
	
	
	
	
	

	
	
	/*	Data
	-------------------------------------------------------------------------------*/




		/*	App Store
		---------------------------------------------------------------------------*/
		const app_store																=   reactive({



			active_header															:	false,




			init                                                                  	:   app_data.init,
	
	
			state																	:   app_data.state,





			viewport																:   { 


				width 																:	window.innerWidth, 

				height 																:	window.innerHeight,  


				layout 																:	'desktop' 


			}



		});
	
	
	
	
	
	
	
	
	
	
	/*	Data Static
	-------------------------------------------------------------------------------*/
	
	
	
	
		/*	Viewport
		---------------------------------------------------------------------------*/
		const viewport_phone_h														=	599;
	
		const viewport_phone_w														=	599;
	
	
		const viewport_mobile_h														=	739;
	
		const viewport_mobile_w														=	1023;










	/*	Methods
	-------------------------------------------------------------------------------*/
	
	
	
	
		/*	Viewport Update
		---------------------------------------------------------------------------*/
		const viewport_update														=   (() => {
	
	
	
			app_store.viewport.width												=	parseInt($('#js_app').width());
	
			app_store.viewport.height												=	parseInt($('#js_app').height());
	
	
	
	
	
			if((app_store.viewport.width <= viewport_phone_w)						||	(app_store.viewport.height <= viewport_phone_h)){
	
	


				app_store.viewport.layout											=	'phone';


				clients.layout														=	'card';
	
	
	
	
			} else if((app_store.viewport.width <= viewport_mobile_w)				||	(app_store.viewport.height <= viewport_mobile_h)){
	
	
	
	
				app_store.viewport.layout											=	'mobile';
	
	
	
	
			} else {
	
	
	
	
				app_store.viewport.layout											=	'desktop';
	
	
	
	
			}
	

	
		});










	/*  Watchers
	-------------------------------------------------------------------------------*/
	
	
	
	
		/*	State (App Store)
		---------------------------------------------------------------------------*/
		watch(() => app_store.state,  (new_state) => {
	
	
	
			if(app_store.active_header												&&	in_array(new_state,  ['loading'])){
	
	
	
	
	
				app_store.active_header												=	false;
	
	
	
	
	
			}


	
		});










/*	
	Export
	-------------------------------------------------------------------------------*/
	export {



		app_store,


		viewport_update



	}
