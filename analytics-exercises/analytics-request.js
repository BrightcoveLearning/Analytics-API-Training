var httpRequest = new XMLHttpRequest(),
// url for the analytics api proxy
proxyURL = "http://solutions.brightcove.com:8002/",
requestData,
getResponse = function () {
	try {
	    if (httpRequest.readyState === 4) {
	      if (httpRequest.status === 200) {
	        response.innerHTML = prettyPrint(httpRequest.responseText);
	      } else {
	        alert("There was a problem with the request. Request returned " + httpRequest.status);
	      }
	    }
	  }
	  catch(e) {
	    alert('Caught Exception: ' + e.description);
	  }
};
if (account_id === null || client_id === null || client_secret === null) {
alert("You must provide an account id, client id, and client secret");
return false;
}
// get latest request URL in case use edited it
aapiRequest = cleanString(aapiRequest_field.value);
// set up request data
requestData = "client_id=" + client_id + "&client_secret=" + client_secret + "&url=" + encodeURIComponent(aapiRequest);
// set response handler
httpRequest.onreadystatechange = getResponse;
// open the request
httpRequest.open("POST", proxyURL);
// set headers
httpRequest.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
// open and send request
httpRequest.send(requestData);