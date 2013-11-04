// Base part written by The Chromium Authors. Oresabre team implemented.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function deletePrivateInfo(deleteUrl, name) {
	console.log("start");
	chrome.cookies.remove({
		url : deleteUrl,
		name : name,
	});
	alert("This is my facebook account!!");
	console.log("end");
}

if (!localStorage.isInitialized) {
	localStorage.isActivated = true;
	localStorage.frequency = 10;
	localStorage.isInitialized = true;
}

if (localStorage.isActivated) {
	var deleteUrl = "https://www.facebook.com";
	var name = "c_user";
	var interval = 0;
	setInterval(function() {
		interval = interval + 10;
		if (localStorage.isActivated && localStorage.frequency <= interval) {
			deletePrivateInfo(deleteUrl, name);
			interval = 0;
		}
	}, 10000);
}

chrome.browserAction.onClicked.addListener(function(activeTab) {
	var newURL = "options.html";
	chrome.tabs.create({
		url : newURL
	});
});
