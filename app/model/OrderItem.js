Ext.define('Exp.model.OrderItem',{
	extend: 'Ext.data.Model',
	fields: [
		{name: 'id', type: 'int'},
		{name: 'type', type: 'int'},
		{name: 'description', type: 'string'},
		{name: 'qty', type: 'int'},
		{name: 'price', type: 'float'},
		{name: 'total', type: 'float'}
	],
	idProperty: 'id'
});