<script setup>





	/*	Imports
	-------------------------------------------------------------------------------*/
	import { onMounted } from 'vue';




		/*  App
		---------------------------------------------------------------------------*/
		import { viewport_update } from '@methods/app.js';










	/*  Components
	---------------------------------------------------------------------------*/
	import app_shell from '@comps/app_shell/app_shell.vue';










	/*	Mounted
	-------------------------------------------------------------------------------*/
	onMounted(async() => {





		/*	Viewport Update
		---------------------------------------------------------------------------*/
		window.addEventListener('resize',  viewport_update);



		viewport_update();





	});





</script>










<template name="js_app">





	<app_shell/>





</template>










<style lang="scss">





    @import 'styles/js_app';





</style>
