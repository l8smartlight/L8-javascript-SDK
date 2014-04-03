chrome.app.runtime.onLaunched.addListener(function() {
  chrome.app.window.create('window.html', {
    bounds: {
      'width': 900,
      'height': 480
    },
	resizable : true,
	  singleton: true,
		id: "L8 SmartLight Sample Chrome App"
  });
});