Ext.Loader.setConfig({enabled: true});
Ext.Loader.setPath('Ext.ux', 'app/ux');

Ext.application({
    name: 'Exp',
    controllers: ['Invoice'],
	stores: ['OrderItems','ProductCatalog'],
	launch: function() {
        Ext.create('Ext.container.Viewport', {
            layout: 'fit',
            items: [
				{
                    xtype: 'invlist'					
                }
            ]
        });
    }
});