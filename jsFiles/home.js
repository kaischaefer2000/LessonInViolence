const newsBoxes = document.querySelectorAll(".content-box");
const showMoreBtn = document.getElementById("show-more-btn");
const newsSection = document.getElementById("newsSection");

newsBoxes.forEach(removeOldNews);

function removeOldNews(item, index) {
  if (index > 2) {
    item.classList.add("hiddenNews");
  }
}

function showMoreNews() {
  const hiddenNews = document.querySelectorAll(".hiddenNews");
  showMoreBtn.remove();
  if (hiddenNews.length > 0) {
    hiddenNews.forEach((item, index) => {
      if (index <= 2) {
        item.classList.remove("hiddenNews");
      }
    });
  }
  const newHiddenNews = document.querySelectorAll(".hiddenNews");
  if (newHiddenNews.length > 0) {
    newsSection.insertBefore(showMoreBtn, newHiddenNews[0]);
  }
}
