Ext.define('Exp.store.ProductCatalog',{
    extend: 'Ext.data.Store',
    model: 'Exp.model.Catalog',
    groupField: 'category',
    sorters:['category','description'],
    data: [{
         id: 1,
         category: 'POS',
         description: 'Honeywell POS - 23E ',
         price: 250
    },{
         id: 2,
         category: 'POS',
         description: 'Samsung GX2500  ',
         price: 550
    },{
        id: 3,
        category: 'POS',
        description: 'LG Lumix G1  ',
        price: 500
    },{
        id: 4,
        category: 'POS',
        description: 'LG Lumix G2  ',
        price: 510
    },{
        id: 5,
        category: 'POS',
        description: 'Honeywell ExP900 ',
        price: 510
    },{
        id: 6,
        category: 'QOS',
        description: 'Honeywell QOS 500  ',
        price: 750
    },{
        id: 7,
        category: 'QOS',
        description: 'ABB QOS F1',
        price: 780
    },{
        id: 8,
        category: 'QOS',
        description: 'Pixar 2500',
        price: 800
    },{
        id: 9,
        category: 'QOS',
        description: 'Carbon X1',
        price: 700
    },{
        id: 10,
        category: 'QOS',
        description: 'Rubber 500x1',
        price: 800
    },{
        id: 11,
        category: 'POS',
        description: 'Pixar 500x5',
        price: 490
    },{
        id: 12,
        category: 'QOS',
        description: 'Samsung G800',
        price: 990
    },{
        id: 13,
        category: 'Lighting',
        description: 'Pixar 50',
        price: 90
    },{
        id: 14,
        category: 'Lighting',
        description: 'Pixar 20',
        price: 30
    },{
        id: 15,
        category: 'Lighting',
        description: 'Pixar 100',
        price: 100
    },{
        id: 16,
        category: 'Lighting',
        description: 'Pixar 60',
        price: 60
    },{
        id: 17,
        category: 'Lighting',
        description: 'LG Light x1',
        price: 90
    },{
        id: 18,
        category: 'Lighting',
        description: 'Philips P1',
        price: 70
    },{
        id: 19,
        category: 'Lighting',
        description: 'Philips P200',
        price: 250
    },{
        id: 20,
        category: 'Lighting',
        description: 'Philips P250',
        price: 375
    }]
});
