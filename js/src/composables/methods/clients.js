/*
	Imports
	-------------------------------------------------------------------------------*/
	import { computed, reactive } from 'vue';




		/*  Team 
		---------------------------------------------------------------------------*/ 
		import { client_default, clients_default,  seek_default } from '@data_static/clients.js';
	
	
	
	
	
	
	
	
	
	
	/*	Data
	-------------------------------------------------------------------------------*/
	
	
	
	
		/*	Seek
		---------------------------------------------------------------------------*/
		const seek																	=	reactive(Object.assign({},  seek_default));





		/*	Client
		---------------------------------------------------------------------------*/
		const client																=	reactive(Object.assign({},  client_default));



		/*	Clients
		---------------------------------------------------------------------------*/
		const clients																=	reactive(Object.assign({},  clients_default));
	
	
	
	
	
	
	
	
	
	
	/*	Computed
	-------------------------------------------------------------------------------*/
	
	
	
	
		/*	Clients Filtered
		---------------------------------------------------------------------------*/
		const clients_filtered														=	computed(() => {



			let members																=	[];

			let members_clone														=	Object.values(Object.assign({},  clients.index));





			//	Seek


			if(seek.search 															!==	null){



				members																=	members_clone.filter(member => Object.values(member).some(member_field => (member_field && (new RegExp(seek.search, 'gi')).test(member_field.replace(/(<([^>]+)>)/ig, '')))));



			} else {



				members																=	members_clone;



			}





			//	Sort


			let member_a_val														=	null;

			let member_b_val														=	null;




				members.sort((member_a, member_b) => {





					member_a_val													=	((seek.sort_field in member_a) ? member_a[seek.sort_field].toLowerCase() : null);

					member_b_val													=	((seek.sort_field in member_b) ? member_b[seek.sort_field].toLowerCase() : null);





					return	(



						(member_a_val == member_b_val) ?

							0

							:

							(


								(member_a_val == null) ?

									1

									:

									(

										(member_b_val === null) ?

										-1

										:

										(

											(seek.sort_order == 'ASC') ?

												((member_a_val < member_b_val) ? -1 : ((member_a_val > member_b_val) ? 1 : 0))

												:

												((member_a_val > member_b_val) ? -1 : ((member_a_val < member_b_val) ? 1 : 0))

										)

									)


							)



					);





				});





			return	members;



		});
	
	
	
	
	
	
	
	
	
	
	/*	Methods
	-------------------------------------------------------------------------------*/
	
	
	
	
		/*	Activate Seek
		---------------------------------------------------------------------------*/
		const activate_seek															=	(() => {



			app_router.push({ 



				path																:	`/${seek.search}`



			});



		});





		/*	Clear Search
		---------------------------------------------------------------------------*/
		const clear_search															=	(() => {



			seek.search																=	null;



		});





		/*	Load Clients
		---------------------------------------------------------------------------*/
		const load_clients															=	(async () => {



			return	await fetch(





				`/assets/clients.json`,
	
	
	
	
				{



					cache															:	'no-cache',
	
					credentials														:	'include',
	
					method															:	'POST',
	
					mode															:	'cors'
	
	
	
				}





			).then(async resp														=>	{





				if(resp.ok){




					let members														=	await resp.json();





					//	Assign uID


					members.map((member, member_i) => {



						member.fullname												=	member.name;

						member.name													=	member.fullname.split(' ')[0].replace(/(<([^>]+)>)/ig, '');

						member.surname												=	member.fullname.split(' ')[1].replace(/(<([^>]+)>)/ig, '');


						member.id													=	(`${member.surname.replace(/ /g, '_')}_${member.name.replace(/ /g, '_')}-${member.title.replace(/ /g, '_')}`).toLowerCase();



					});





					clients.index													=	members;




				}





			});



		});





		/*	Toggle Layout
		---------------------------------------------------------------------------*/
		const toggle_layout															=	(() => {



			clients.layout															=	((clients.layout == 'card') ? 'list' : 'card');



		});










/*	
	Export
	-------------------------------------------------------------------------------*/
	export {
	
	
	
		client,
	
		clients,

		clients_filtered,


		seek,



		activate_seek,
	
	
		clear_search,
	
	
		load_clients,
	
	
		toggle_layout
	
	
	
	}
