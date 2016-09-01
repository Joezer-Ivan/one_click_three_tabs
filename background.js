/*
Open a new tab, and load "my-page.html" into it.
*/
function getDomain(name){
  switch (name) {
    case "Quora":
      return "https://www.quora.com";
    case "YouTube":
	   return "https://www.youtube.com";
    case "Hacker News":
	   return "https://news.ycombinator.com/";
  }

}

function openMyPage(message) {
var domain = getDomain(message.name);
  chrome.tabs.create({
     "url": chrome.extension.getURL(domain)
   });
}






chrome.runtime.onMessage.addListener(openMyPage);
