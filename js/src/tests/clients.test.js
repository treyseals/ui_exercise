/*
	Imports
	-------------------------------------------------------------------------------*/




		/*  Clients 
		---------------------------------------------------------------------------*/ 
		import { clients, seek,  clear_search, load_clients } from '@methods/clients.js';
	
	
	
	
	
	
	
	
	
	
	/*	Tests
	-------------------------------------------------------------------------------*/
	
	
	
	
		/*	Test Clear Search
		---------------------------------------------------------------------------*/
		test('clear_search',  () => {



			clear_search();




			expect(seek.search).toBe(null);



		});






		/*	Test Load Clients
		---------------------------------------------------------------------------*/
		test('load_clients',  async() => {



			await load_clients(true);




			expect(clients.index.length).toBe(5);


			expect(clients.index[0].id).toBe('taylor_brendon-supervisor');



		});
