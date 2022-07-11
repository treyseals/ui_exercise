<script setup>





	/*	Imports
	-------------------------------------------------------------------------------*/
	import { computed } from 'vue';
	
	import { useRoute } from 'vue-router';




		/*	App
		---------------------------------------------------------------------------*/
		import { app_store } from '@methods/app.js';










	/*  Components
	---------------------------------------------------------------------------*/
	import app_header from './app_header/app_header.vue';










	/*	Data
	-------------------------------------------------------------------------------*/
	
	


		/*	Route
		---------------------------------------------------------------------------*/
		const route																	=	useRoute();










	/*	Computed
	-------------------------------------------------------------------------------*/
	
	


		/*	Activated Shell
		---------------------------------------------------------------------------*/
		const activated_shell                                                       =   computed(() => { 



			return `${app_store.state} ${route.name} ${app_store.viewport.layout}`
	
	
	
		});





</script>










<template name="app_shell">





	<div id="app_shell"  :class="activated_shell">





		<app_header/>










		<router-view v-slot="{ Component }">





			<Transition name="bounce">



				<component :is="Component"/>



			</Transition>





		</router-view>





	</div>





</template>










<style lang="scss">





	@import 'app_shell';





</style>
