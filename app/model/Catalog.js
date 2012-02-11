Ext.define('Exp.model.Catalog',{
    extend: 'Ext.data.Model',
    fields: [
        {name: 'id', type: 'int'},
        {name: 'category', type: 'string'},
        {name: 'description', type: 'string'},
        {name: 'price', type: 'float'}
    ],
    idProperty: 'id'
});

