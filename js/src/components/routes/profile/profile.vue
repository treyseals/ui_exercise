<script setup>





	/*	Imports
	-------------------------------------------------------------------------------*/
	import { computed } from 'vue';










	/*	Data
	-------------------------------------------------------------------------------*/
	
	


		/*	Props
		---------------------------------------------------------------------------*/
		const [ tm ]																=	defineProps(['tm']);










	/*	Computed
	-------------------------------------------------------------------------------*/
	
	


		/*	Tm Title
		---------------------------------------------------------------------------*/
		const tm_title																=	computed(() => {



			return	`${tm.name}, ${tm.title}`;



		});





</script>










<template name="profile">





	<article class="profile">





		<img :src="tm.avatar"  :title="tm_title"/>





		<h1 v-html="tm.fullname"></h1>


		<h2 v-html="tm.title"></h2>


		<h3 v-html="tm.nationality"></h3>





		<blockquote v-if="tm.quote">



			<p v-html="tm.quote"></p>



		</blockquote>




	</article>





</template>










<style lang="scss">





	@import 'profile';





</style>
