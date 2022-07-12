	/*	Imports
	-------------------------------------------------------------------------------*/
	import path from 'path';


	import { defineConfig, loadEnv } from 'vite';


	import vue from '@vitejs/plugin-vue';








	/*	Data Static
	-------------------------------------------------------------------------------*/
	
	
	
	
		/*	Src
		---------------------------------------------------------------------------*/
		const src																	=   `${path.resolve(__dirname, 'src')}`;










	/*	Export
	-------------------------------------------------------------------------------*/
	export default defineConfig(({ command, mode }) => {





		process.env 																=	{ ...process.env, ...loadEnv(mode, process.cwd()) };





		return	{





			/*	CSS
			-----------------------------------------------------------------------*/
			css																		:   {





				preprocessorOptions                                                 :   {



					scss                                                            :   {



						charset														:	false,



						additionalData                                              :   `



							@import '${src}/styles/_js_vars.scss';



						`



					}



				}





			},









			/*	Vue/Vite Sync
			-----------------------------------------------------------------------*/
			plugins																	:   [vue()],









			/*	Aliases
			-----------------------------------------------------------------------*/
			resolve                                                                 :   {





				alias                                                               :   {





					'@src/'                                                         :   `${path.resolve(__dirname, 'src')}/`,




						'@components/'                                              :   `${path.resolve(__dirname, 'src')}/components/`,



							'@comps/'                                               :   `${path.resolve(__dirname, 'src')}/components/comps/`,


							'@routes/'                                               :   `${path.resolve(__dirname, 'src')}/components/routes/`,




						'@composables/'                                             :   `${path.resolve(__dirname, 'src')}/composables/`,



							'@computed/'                                            :   `${path.resolve(__dirname, 'src')}/composables/computed/`,


							'@data_static/'											:   `${path.resolve(__dirname, 'src')}/composables/data_static/`,


							'@methods/'                                             :   `${path.resolve(__dirname, 'src')}/composables/methods/`





				}





			},









			/*	Tests
			-----------------------------------------------------------------------*/
			test                                                                 	:   {





				environment															:	'happy-dom',



				globals																:	true,





			}





		}





	});
