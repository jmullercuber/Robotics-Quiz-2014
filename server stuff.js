// Tutorial from https://developer.mozilla.org/en-US/docs/AJAX/Getting_Started

// Step 1.1
var httpRequest;

if (window.XMLHttpRequest) { // Mozilla, Safari, ...
	httpRequest = new XMLHttpRequest();
}
else if (window.ActiveXObject) { // IE 8 and older
	httpRequest = new ActiveXObject("Microsoft.XMLHTTP");
}


// Step 1.2
httpRequest.onreadystatechange = function() {
	// process the server response
	
	// Step 2.1
	if (httpRequest.readyState === 4) {
		// everything is good, the response is received
		
		// Step 2.2
		if (httpRequest.status === 200) {
			// perfect!
		}
		else {
			// there was a problem with the request,
			// for example the response may contain a 404 (Not Found)
			// or 500 (Internal Server Error) response code
			alert("Server Error, " + httpRequest.status);
		}
	}
	else {
		// still not ready
	}
};



// Step 5.3
httpRequest.open('POST', 'http://www.example.org/some.file', true);
httpRequest.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
httpRequest.send('score=' + s.points);