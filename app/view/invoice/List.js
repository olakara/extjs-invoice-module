Ext.define('Exp.view.invoice.List',{
	extend: 'Ext.grid.Panel',
	alias: 'widget.invlist',
	title: 'Invoice Maker',
	store: 'OrderItems',
    requires: ['Exp.store.OrderItems'],
	features: [{
		ftype: 'summary'
	}],
	plugins: [
        Ext.create('Ext.grid.plugin.RowEditing', {
            clicksToEdit: 2,
			errorSummary: false,
            autoCancel : false
        })
    ],
	tbar: [{
		text: 'Add Entry',
		action: 'addentry'
	},{
		text: 'Remove Entry',
		action: 'removeentry'
	}],
	columns: [{
		text: 'Type',
		dataIndex: 'type',
		renderer: function(value) {
            switch(value) {
			
				case 0:
					return "Custom";
				case 1: 
					return "Product";
				case 2: 
					return "Discount";
				default:
					return "Undefined";
			}			
        },
		editor: {
			xtype: 'combobox',
			store: Ext.create('Ext.data.Store', {
				fields: ['type', 'value'],
				data : [
					{"type":"Custom", "value": 0},
					{"type":"Product", "value": 1},
					{"type":"Discount", "value": 2}					
				]
			}),
			queryMode: 'local',
			displayField: 'type',
			valueField: 'value',
            editable: false,
            listeners: {
                'change' : function(field,nv,ov,opt) {

                    var qtyField = field.nextSibling('numberfield');
                    var descField = field.nextSibling('triggerfield');
                    console.log(descField);
                    switch(nv) {
                        case 0: // Custom
                            qtyField.setDisabled(false);
                            descField.triggerEl.elements[0].addCls('x-item-disabled');
                            descField.triggerEl.elements[0].mask();
                            break;
                        case 1: // Product
                            qtyField.setDisabled(false);
                            descField.triggerEl.elements[0].removeCls('x-item-disabled');
                            descField.triggerEl.elements[0].unmask();
                            break;
                        case 2: // Discount
                            qtyField.setDisabled(true);
                            descField.triggerEl.elements[0].addCls('x-item-disabled');
                            descField.triggerEl.elements[0].mask();
                            break;
                    }
                }
            }
		}	
	},{
		text: 'Description',
		dataIndex: 'description',
		flex: 2,
		editor: {
            xtype: 'triggerfield',
            emptyText: 'Select the product',
            triggerCls: 'x-form-search-trigger',
			onTriggerClick: function() {

				win = Ext.widget('selectionwindow',{module:'ps'});

                win.on('selectiondone',function(record) {
                   this.setValue(record.get('description'));
                   qtyField = this.nextSibling('numberfield');
                   qtyField.setValue(1);
                   priceField = qtyField.nextSibling('numberfield');
                   priceField.setValue(record.get('price'));

                },this);

                win.show();
			}
        }
	},{
		text: 'Qty',
		dataIndex: 'qty',
		editor: 'numberfield'
	},{
		text: 'Price',
		dataIndex: 'price',
		editor: 'numberfield',
		summaryType: 'count',		
		summaryRenderer: function(value, summaryData, dataIndex) {

            return '<b>Total</b>';
		}		
	},{
		text: 'Sub Total',
		dataIndex: 'total',
		summaryType: 'sum',
        summaryRenderer: function(value, summaryData, dataIndex) {

            return Ext.String.format('<b>{0}</b>', value.toFixed(2));
        }
	}]	
});