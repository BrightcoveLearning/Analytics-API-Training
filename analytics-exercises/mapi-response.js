var data = responseData,
	i,
	imax,
	item;
// increment the call callCounter
callCounter++;
// display the API request
mapiRequest_field.value = BCMAPI.request;
// if this is first pass, need to see how many matching videos there
if (firstMapiCall) {
	numberOfPages = Math.ceil(responseData.total_count/responseData.page_size);
	firstMapiCall = false;
}
// put the IDs into a array till we're done
imax = data.items.length;
for (i = 0; i < imax; i++) {
	idsArray.push(data.items[i].id);
}
if (callCounter < numberOfPages) {
	// more items left, call media api again
	getVideos();
} else {
	// got all items, wrap up and get analytics data
	aapiRequest += "&where=video==" + idsArray.join() + "&limit=all&fields=all";
	aapiRequest_field.value = aapiRequest;
	submitRequest();
}
