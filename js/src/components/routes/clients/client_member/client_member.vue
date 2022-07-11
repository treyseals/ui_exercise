<script setup>





	/*	Imports
	-------------------------------------------------------------------------------*/
	import { computed } from 'vue';










	/*	Data
	-------------------------------------------------------------------------------*/
	
	


		/*	Props
		---------------------------------------------------------------------------*/
		const { cm }																=	defineProps(['cm']);










	/*	Computed
	-------------------------------------------------------------------------------*/
	
	


		/*	Client Member Title
		---------------------------------------------------------------------------*/
		const cm_title																=	computed(() => {



			return	`${cm.name}, ${cm.title}`;



		});





</script>










<template name="client_member">





	<li class="cm">





		<img :src="cm.avatar"  :title="cm_title"/>




		<h1 v-html="cm.fullname"></h1>


		<h2 v-html="cm.title"></h2>





		<router-link :to="`/clients/${cm.id}`"  title="cm_label"/>





	</li>





</template>










<style lang="scss">





	@import 'client_member';





</style>
