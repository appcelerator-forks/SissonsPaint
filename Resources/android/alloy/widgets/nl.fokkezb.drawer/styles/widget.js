module.exports = [];function WPATH(s) {
	var index = s.lastIndexOf('/');
	var path = index === -1 ?
		'nl.fokkezb.drawer/' + s :
		s.substring(0,index) + '/nl.fokkezb.drawer/' + s.substring(index+1);

	// TODO: http://jira.appcelerator.org/browse/ALOY-296
	return OS_ANDROID && path.indexOf('/') !== 0 ? '/' + path : path;
}