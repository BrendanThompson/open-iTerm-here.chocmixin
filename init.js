// Chocolat App mixin to open iTerm

var exec = require('child_process').exec;

Hooks.addMenuItem('Go/Open iTerm Here', 'cmd+shift+o', function() {
	if (!Document.current() || !Document.current().path()) {
		Alert.show('Warning', 'A file must be open to open iTerm', ['Warning']);
		return;
	}
	
	var filePath = Document.current().path(),
		fileName = Document.current().displayName(),
		dirPath = filePath.replace(fileName, '');
	
	exec('open -a iTerm "' + dirPath + '"');
});