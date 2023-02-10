const form = document.getElementById("form-btc");
const divElement = document.createElement("div");
const h1Element = document.createElement("h1");
const ulElement = document.createElement("ul");
const liElementEur = document.createElement("li");
const liElementUsd = document.createElement("li");
const liElementGbp = document.createElement("li");

const h2Element = document.createElement("h2");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  fetch("https://api.coindesk.com/v1/bpi/currentprice.json")
    .then((res) => res.json())
    .then((data) => {
      console.log(data.time.updated);
      const name = data.chartName;
      const priceEur = data.bpi.EUR.rate;
      const priceUsd = data.bpi.USD.rate;
      const priceGbp = data.bpi.GBP.rate;
      const time = data.time.updated;
      form.after(divElement);
      divElement.append(h1Element, ulElement, h2Element);
      ulElement.append(liElementEur, liElementUsd, liElementGbp);
      h1Element.textContent = name;
      liElementEur.textContent = `EUR: ${priceEur}`;
      liElementUsd.textContent = `USD: ${priceUsd}`;
      liElementGbp.textContent = `GBP: ${priceGbp}`;
      h2Element.textContent = time;
    });
});
