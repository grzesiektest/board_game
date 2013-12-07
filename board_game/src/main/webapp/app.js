Ext.Loader.setConfig({ enabled: true });

Ext.application({
    name: 'Board Game',

    launch: function() {
        Ext.create('Ext.container.Viewport', {
            layout: 'fit',
            items: [
                {
                	xtype: 'boardgame'
                }
            ]
        });
    }
});

