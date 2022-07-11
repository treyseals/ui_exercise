/*
	Imports
	-------------------------------------------------------------------------------*/
	
	
	
	
	
	
	
	
	
	
	/*	Data Static
	-------------------------------------------------------------------------------*/
	
	
	
	
		/*	Routes
		---------------------------------------------------------------------------*/
		const routes																=	[





			/*	Clients
			-----------------------------------------------------------------------*/
			{
	
	
	
				component															:	() => import('@routes/clients/clients.vue'),

				meta																:	{

					title															:	'Jeff Seals UI Exercise | Clients'

				},

				name																:	'clients',
	
				path																:	'/clients',



				children															:	[


					{

						component													:	() => import('@routes/profile/profile.vue'),

						name														:	'profile',

						path														:	':profile_id'

					}



				]
	
	
	
			},
	
	
	
	
	
	
	
			/*	Base
			-----------------------------------------------------------------------*/
			{

				name																:	'default',
	
				path																:	'/',
	
				redirect															:	'/clients'
	
			},
	
	
	
			{
	
				name																:	'error',
	
				path																:	'/:catchAll(.*)*',
	
				redirect															:	'/clients'
	
			}
	
	
	
	
	
		];










/*	
	Export
	-------------------------------------------------------------------------------*/
	export {
	
	
	
		routes
	
	
	
	}
