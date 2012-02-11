Ext.define('Exp.controller.Invoice',{
	extend: 'Ext.app.Controller',
	views: ['invoice.List','util.SelectionWindow','products.ProductSelection'],
	init: function() {
		console.log('init method for Invoice controller');
		this.control({
			'invlist' : {
				'beforeedit' : function(editor, e) {


					var rec = e.record;
                    field = editor.editor.down('combobox');
                    var qtyField = field.nextSibling('numberfield');
                    var descField = field.nextSibling('triggerfield');
                    switch(rec.get('type')) {
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
				},
				'edit' : function(editor, e) {

                    var rec = e.record;
                    var newTotal = 0;
                    if(rec.get('type') == 2) {
                        newTotal = rec.get('price') * -1;
                    } else {
                        newTotal = rec.get('price') * rec.get('qty');
                    }

					rec.set('total',newTotal.toFixed(2));
					rec.commit();
				},
                'validateedit' : function(editor, e) {

                    record = e.record;
                    console.log('Dirty or not: ' + record.dirty);
                    if(record.dirty) {
                        switch(record.get('type')) {
                            case 0:

                        }
                    }

                },
				'canceledit' : function(editor, e) {

				    record = e.record;
                    qty = record.get("price");
                    if(qty == 0) {
                        e.store.remove(record);
                    }
                }
			},
			'invlist button[action="addentry"]' : {

				'click': function(but,e) {
					panel = but.up('invlist');
					plugin = panel.getPlugin();
					plugin.cancelEdit();

					// Create a model instance
					var r = Ext.create('Exp.model.OrderItem', {
						type: 1,
						description: '',
						qty: 0,
						price: 0,
						total: 0
					});

					store = panel.getStore();
					store.insert(store.count(), r);
					plugin.startEdit(store.count()-1, 0);
				}

			},
			'invlist button[action=removeentry]' : {

				'click': function(but,e) {

					panel = but.up('invlist');
                    plugin = panel.getPlugin();
                    plugin.cancelEdit();
                    selectionModel = panel.getView().getSelectionModel();

                    if(selectionModel.getCount != 0) {

                        selected = selectionModel.getSelection();
                        console.log(selected);
                        panel.getStore().remove(selected[0]);
                        panel.getView().refresh();

                    } else {
                        alert('Nothing has been selected!');
                    }

				}

			}
		});
	}
});