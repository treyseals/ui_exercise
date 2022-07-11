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
	
				path																:	'/clients'
	
	
	
			},





				/*	Clients :: Profile
				-------------------------------------------------------------------*/
				{
	
	
	
					component														:	() => import('@routes/profile/profile.vue'),

					meta															:	{

						title														:	'Jeff Seals UI Exercise | Client'

					},

					name															:	'profile',
	
					path															:	'/clients/:profile_id'

	
	
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
