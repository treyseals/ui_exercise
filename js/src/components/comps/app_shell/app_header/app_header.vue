<script setup>





	/*	Imports
	-------------------------------------------------------------------------------*/
	import { computed } from 'vue';




		/*	App
		---------------------------------------------------------------------------*/
		import { app_store } from '@methods/app.js';




		/*	Team
		---------------------------------------------------------------------------*/
		import { activate_seek, clear_search,  clients, seek, toggle_layout } from '@methods/clients.js';










	/*	Computed
	-------------------------------------------------------------------------------*/
	
	


		/*	Activated Clear
		---------------------------------------------------------------------------*/
		const activated_clear														=   computed(() => { 



			return	{


				active																:	(seek.search !== null)


			};
	
	
	
		});





		/*	Activated Header
		---------------------------------------------------------------------------*/
		const activated_header														=   computed(() => { 



			return	{


				active																:	app_store.active_header	


			};
	
	
	
		});





</script>










<template name="app_header">





	<header id="app_header"  :class="activated_header">





		<section>





			<a id="brand"  href="/"  title="Jeff Seals | UI Exercise">



				<img src="https://camo.githubusercontent.com/6b0ef8b0e21d0a927dcc9eacdc50bfe656ac11a26ecce30458f2c20dfcd4a181/68747470733a2f2f63646e2e737667706f726e2e636f6d2f6c6f676f732f73747265616d6c69742e737667"  title="Jeff Seals | UI Exercise"/>



				<strong>Jeff Seals</strong>



			</a>






			<div id="search">




				<input name="search"  placeholder="Search for clients by Name, Title, etc."  title="Search for clients"  type="text"  autocomplete="new-password" aria-autocomplete="none"  v-model="seek.search"  @keydown.enter.prevent="activate_seek"/>




				<button :class="activated_clear"  role="clear"  title="Clear Team Member Search"  @click="clear_search"></button>




			</div>






			<button :class="clients.layout" role="layout"  title="Toggle Card and List views"  type="button"  @click="toggle_layout">



				<i></i>



			</button>





		</section>





	</header>





</template>










<style lang="scss">





	@import 'app_header';





</style>
