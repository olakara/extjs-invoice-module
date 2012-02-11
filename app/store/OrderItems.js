Ext.define('Exp.store.OrderItems',{
	extend: 'Ext.data.Store',
	model: 'Exp.model.OrderItem',
	data: [{
		id: 1,
		type: 1,
		description: 'Honeywell POS - 23E ',
		qty: 1,
		price: 250,
		total: 250
	},{
		id: 2,
		type: 0,
		description: 'Installation  ',
		qty: 1,
		price: 550,
		total: 550
	}]
});