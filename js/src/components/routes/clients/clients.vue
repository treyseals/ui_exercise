<script setup>





	/*	Imports
	-------------------------------------------------------------------------------*/
	import { computed,  onBeforeMount } from 'vue';




		/*	Clients
		---------------------------------------------------------------------------*/
		import { load_clients,  clients, clients_filtered } from '@methods/clients.js';










	/*  Components
	---------------------------------------------------------------------------*/
	import client_member from './client_member/client_member.vue';










	/*	Computed
	-------------------------------------------------------------------------------*/
	
	


		/*	Activated Clients
		---------------------------------------------------------------------------*/
		const activated_clients														=   computed(() => { 



			return	{


				[clients.layout]													:	true,


				active																:	clients?.index?.length,

				empty																:	!clients_filtered.value.length


			};
	
	
	
		});










	/*	Life Cycle
	-------------------------------------------------------------------------------*/
	
	


		/*	Before Mount
		---------------------------------------------------------------------------*/
		onBeforeMount(async () => {



			await load_clients();



		});





</script>










<template name="clients">





	<article id="clients"  :class="activated_clients">





		<TransitionGroup name="slide" tag="ol">




			<client_member v-for="(cm, cm_i) in clients_filtered"  :key="`cm_${cm.id}_${cm_i}`"  :cm="cm"/>




		</TransitionGroup>





	</article>





</template>










<style lang="scss">





	@import 'clients';





</style>
