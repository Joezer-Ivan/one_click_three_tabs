/*
Open a new tab, and load "my-page.html" into it.
*/
function getDomain(name){
switch (name) {
    case "Anime":
      return "http://kissanime.to/";
  case "Cartoon":
	return "http://kisscartoon.me/";
  case "Serial":
	return "http://watchseries.cr/";

	}

}

function openMyPage(message) {
var domain = getDomain(message.name);
  chrome.tabs.create({
     "url": chrome.extension.getURL(domain)
   });
}






chrome.runtime.onMessage.addListener(openMyPage);

