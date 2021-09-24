// background.js
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.action === "addBookmark") {
    sendResponse({ result: "addBookmark" });

    chrome.cookies.get(
      {
        url: "https://api.tinydesk.me/",
        name: "commandt.sid",
      },
      function (cookie) {
        if (cookie) {
          const data = {
            data: request.data,
          };
          fetch("https://api.tinydesk.me/extension", {
            method: "POST",
            credentials: "include",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
            },
            body: JSON.stringify(data),
          })
            .then((res) => res.json())
            .then((res) => {
              console.log(res);
            })
            .catch((err) => console.error(err));
        } else {
          alert("please login to our website (https://www.tinydesk.me)");
        }
      }
    );
  }
});
