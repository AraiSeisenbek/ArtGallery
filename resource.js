const apiBaseUrl = "https://my-json-server.typicode.com/AraiSeisenbek/mockjson";


let searchBtn = document.getElementById("searchBtn");
let sourceType = document.getElementById("source");
let itemInput = document.getElementById("itemId");
let resultContainer = document.getElementById("result");

let getItemByID = async (source) => {
    let response = await fetch(`${apiBaseUrl}/${source}`);
    return await response.json();
}

searchBtn.addEventListener("click", async () => {
    let source = sourceType.value;
    let json = await getItemByID(id);
    switch (id) {
        case "gallery": resultContainer.innerHTML = createGalleryCard(json); break;
        case "art": resultContainer.innerHTML = createArtCard(json); break;
        case "albums": resultContainer.innerHTML = createArtistCard(json); break;
        case "photo": resultContainer.innerHTML = createSculptureCard(json); break;
        case "reviews": resultContainer.innerHTML = createReviewsCard(json); break;
    }
})


let createGalleryCard = (json) => {
    let { city, thumbnailUrl } = json;
    let html = `<div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">${city}</h5>
      <img class="card-img-top" src="${thumbnailUrl}" alt="Card image cap">
    </div>
  </div>`;
    return html;
}

let createArtCard = (json) => {
    let { title, author, thumbnailUrl } = json;
    let html = `<div class="card" style="width: 18rem;">
    <div class="card-body">
      <img class="card-img-top" src="${thumbnailUrl}" alt="Card image cap">
      <h5 class="card-title">${title}</h5>
      <h6 class="card-subtitle mb-2 text-muted">${author}</h6>
    </div>
  </div>`;
    return html;
}

let createArtistCard = (json) => {
    let { name, thumbnailUrl } = json;
    let html = `<div class="card" style="width: 18rem;">
    <div class="card-body">
      <img class="card-img-top" src="${thumbnailUrl}" alt="Card image cap">
      <h5 class="card-title">${name}</h5>
    </div>
  </div>`;
    return html;
}

let createSculptureCard = (json) => {
    let { author, thumbnailUrl } = json;
    let html = `<div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">${author}</h5>
      <img class="card-img-top" src="${thumbnailUrl}" alt="Card image cap">
    </div>
  </div>`;
    return html;
}


let createReviewsCard = (json) => {
    let { name, comment, grade, art} = json;
    let html = `<div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">${name}</h5>
      <h6 class="card-subtitle mb-2 text-muted">ReviewID: ${comment}</h6>
      <h6 class="card-subtitle mb-2 text-muted">Grade: ${grade}</h6>
      <h6 class="card-subtitle mb-2 text-muted">Art: ${art}</h6>
    </div>
  </div>`;
    return html;
}