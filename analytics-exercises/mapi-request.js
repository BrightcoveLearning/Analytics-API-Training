var params = {};
if (mapi_token === null) {
	alert("You must enter a Media API READ token");
	return false;
}
// set values for MAPI call
BCMAPI.url = mapi_url;
BCMAPI.token = mapi_token;
BCMAPI.callback = "BCLS.onMapiResponse";
// set params
if (custom_field !== null) {
	params.any = custom_field + ":" + custom_field_value;
} else {
	params.any = "custom_fields:" + custom_field_value;
}
params.page_size = 100;
params.page_number = callCounter;
params.video_fields = "id";
// we only need to get the item count once
if (firstMapiCall) {
	params.get_item_count = true;
}
// call mapi
BCMAPI.search(params);
