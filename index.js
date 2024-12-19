console.log("object");

//  bussines api  https://newsapi.org/v2/top-headlines?category=business&apiKey=d242a56fde7245aa920f893b72e53901
const firstDiv = document.querySelector(".MainContent");
async function GetNews() {
  try {
    const getNewsData = await fetch(
      "https://newsapi.org/v2/top-headlines?category=business&apiKey=d242a56fde7245aa920f893b72e53901"
    );
    if (!getNewsData) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await getNewsData.json();
    const getAarticles = data.articles;
    getAarticles.forEach((News) => {
      let Htmls = ` <div class="card" style="width: 18rem">
          <img src=${News.urlToImage} class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">${News.title}</h5>
            <p class="card-text">
             ${News.description}
            </p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>`;
      firstDiv.insertAdjacentHTML("afterend", Htmls);
    });

    // console.log(geAarticles);
  } catch (error) {
    console.error("Error:", error.message);
    console.log("ERR");
  }
}

GetNews();
