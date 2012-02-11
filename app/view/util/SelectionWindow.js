Ext.define('Exp.view.util.SelectionWindow',{
    extend: 'Ext.window.Window',
    alias: 'widget.selectionwindow',
    config: {
        module: null,
        recId: null,
        inputArgs: null,
        dataObject: null
    },
    title: 'Selection Window',
    height: 400,
    width: 500,
    modal: true,
    constructor: function(config) {
        this.initConfig(config);
        this.callParent(arguments);
        this.addEvents('selectiondone');
    },
    initComponent : function() {

        this.items = this.buildItems();
        this.callParent(arguments);
    },
    buildItems: function() {

        console.log(this.getModule());
        if(this.getModule()=='ps') {
            return [{
                xtype: 'productselection',
                height: 366
            }];
        }
    }
});