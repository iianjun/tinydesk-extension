// const url = "https://commandt=backend.herokuapp.com/home";
// try {
//   const res = await fetch(url);
// } catch (err) {
//   console.error(err);
// }
const addBookmark = (data) => {
  chrome.runtime.sendMessage(
    { data: data, action: "addBookmark" },
    function (response) {
      window.close();
    }
  );
};
chrome.tabs.query({ active: true, lastFocusedWindow: true }, (tabs) => {
  const url = tabs[0].url;
  const title = tabs[0].title;
  const urlInput = document.getElementById("url-input");
  urlInput.value = url;
  const titleInput = document.getElementById("title-input");
  titleInput.value = title;
  const colorInput = document.getElementById("color-select");

  document.getElementById("save-btn").onclick = function () {
    const data = {
      url: urlInput.value,
      title: titleInput.value,
      color: colorInput.value,
    };
    addBookmark(data);
  };
});
