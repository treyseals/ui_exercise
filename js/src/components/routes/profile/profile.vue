<script setup>





	/*	Imports
	-------------------------------------------------------------------------------*/
	import { computed,  onBeforeMount } from 'vue';

	import { useRoute, useRouter } from 'vue-router';




		/*	Clients
		---------------------------------------------------------------------------*/
		import { load_clients,  client, clients } from '@methods/clients.js';










	/*	Data
	-------------------------------------------------------------------------------*/
	
	


		/*	Route
		---------------------------------------------------------------------------*/
		const route																	=	useRoute();

		const router																=	useRouter();










	/*	Computed
	-------------------------------------------------------------------------------*/
	
	


		/*	Client Member Title
		---------------------------------------------------------------------------*/
		const cm_title																=	computed(() => {



			return	`${client.name}, ${client.title}`;



		});










	/*	Life Cycle
	-------------------------------------------------------------------------------*/
	
	


		/*	Before Mount
		---------------------------------------------------------------------------*/
		onBeforeMount(async() => {



			//	Init Route ?


			if(!clients?.index?.length){



				await load_clients();



			}





			let client_match														=	clients.index.find(client_item => client_item.id == route.params.profile_id);




			if(route.params.profile_id												&&	client_match){





				Object.assign(client,  Object.assign({}, client_match));




				document.title														=	client.fullname;





			} else {





				Object.assign(client,  Object.assign({}, client_default));




				router.push({ 



					path 															:	'/clients'



				});





			}




		});





</script>










<template name="profile">





	<article class="profile">





		<img :src="client.avatar"  :title="cm_title"/>





		<h1 v-html="client.fullname"></h1>



		<h2>


			<strong v-html="client.title"></strong>

			<em v-html="client.nationality"></em>


		</h2>





		<blockquote v-if="client.quote">



			<p v-html="client.quote"></p>



		</blockquote>








		<router-link to="/clients"  title="Return to Clients"/>




	</article>





</template>










<style lang="scss">





	@import 'profile';





</style>
