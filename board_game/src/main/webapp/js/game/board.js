Ext.define('AM.view.game.Board', {
    extend: 'Ext.Container',
    alias: 'widget.gameboard',
    
    initComponent: function () {
        this.items = [
            {
                html: 'testboard'
            }
        ];

        this.callParent();
    }
    
});