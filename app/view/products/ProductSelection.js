Ext.define('Exp.view.products.ProductSelection',{
    extend: 'Ext.ux.LiveSearchGridPanel',
    store: 'ProductCatalog',
    columnLines: true,
    alias: 'widget.productselection',
    autoScroll: true,
    viewConfig: {
        stripeRows: true
    },
    features: [
        Ext.create('Ext.grid.feature.Grouping',{
            groupHeaderTpl: 'Category: {name} ({rows.length} Item{[values.rows.length > 1 ? "s" : ""]})'
        })
    ],
    initComponent : function() {

        this.columns = this.buildColumns();
        this.callParent(arguments);
    },
    buildColumns: function() {
        return [{
            text     : 'Product',
            flex     : 1,
            dataIndex: 'description'
        },{
            text     : 'Category',
            dataIndex: 'category',
            hidden: true
        }];
    },
    listeners: {

        itemdblclick: function(view,record,item,idx,e,opts) {

            this.up('selectionwindow').fireEvent('selectiondone',record);
            this.up('selectionwindow').close();
        }
    }
});