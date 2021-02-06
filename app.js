const CONTAINER = document.getElementById("container");
const SOCCER_URL = "https://www.scorebat.com/video-api/v1/";

function getData(SOCCER_URL) {
  fetch(SOCCER_URL)
    .then((res) => {
      return res.json();
    })
    .then((jsonData) => {
      CONTAINER.innerHTML =
        "<div class='cards-container'>" +
        jsonData
          .map((data) => {
            return `
                <div class='card'>
                    <div class="card__top">
                        <h2>${data.side1.name} VS ${data.side2.name}<h2>
                    </div>
                    <div class="card__bottom">
                        ${data.embed}
                    </div>
                </div>
                
                
                `;
          })
          .join("") +
        "</div>";
    })
    .catch((error) => {
      console.log("This is an error", error);
    });
}

getData(SOCCER_URL);
