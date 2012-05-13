var _ = require('common/util');

_.extend(exports, {
	':load': function() {
        
        app.on('connected', function() {
            console.log('udah konek');
        });
        
		var self = this;
        self.selection = self.keySelectionWithItems([
                self.get('title'),
                self.get('key'),
                self.get('text'),
                self.get('buttonOk')
            ], {});
        
        self.get('key').on('activate', function() {
            self.get('key').emit('keypress', 'fire');
        });
        self.get('text').on('activate', function() {
            self.get('text').emit('keypress', 'fire');
        });
        
        self.get('text').on('submit', function() {
            console.log(self.get('text').value());
        });
        
        self.get('text').on('focus', function() {
            self.get('text').style(
                {
                    'background-color': 'yellow'
                }
            );
        });
        
        self.get('text').on('blur', function() {
            self.get('text').style(
                {
                    'background-color': '#abc123'
                }
            );
        });
        
        var storage = app.storage('data');
        
        self.get('buttonOk').on('activate', function() {
            
            storage.set(self.get('key').value(), {keynya: self.get('key').value(),
                textnya: self.get('text').value(), abc: true, def: 123123});
            
            app.msg('kirimText', {key: self.get('key').value(), text: self.get('text').value()});
        });
        
	}
});
