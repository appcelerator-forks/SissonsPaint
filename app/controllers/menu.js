var args = arguments[0] || {}; 

function doMenuClick(e){
	switch(e.index){
		case 0: 
			navigation('diyPaint');
			break;
		case 1: 
			navigation('colourPicker');
			break;
		case 2: 
			navigation('colourSwatches');
			break;
		case 3: 
			navigation('brochure');
			break;
		case 4: 
			navigation('storeLocator');
			break;
		case 5: 
			navigation('aboutUs');
			break;
	}
	 
}

function navigation(target){
	var nav = Alloy.createController(target).getView();
	Alloy.CFG.contentView.add(nav);
	Alloy.CFG.drawer.toggleLeftWindow(); 
}