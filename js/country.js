const divRoot = document.getElementById("root");
const inputValue = document.getElementById("searchValue");
const btn = document.getElementById("send");
const head = document.getElementById("h1");
btn.addEventListener("click", searchCountry);
function searchCountry() {
  searchName()
    .then((response) => print(response))
    .catch((error) => (head.innerHTML = "It is a not country"));
}

function searchName(value) {
  value = inputValue.value.trim();
  let nameCountry = value;
  console.log(nameCountry);
  return fetch(`https://restcountries.com/v3.1/name/${nameCountry}`).then(
    (response) => response.json()
  );
}
function print(arr) {
  return new Promise(function (resolve, reject) {
    let [country] = arr;
    let name = country.name.common;
    let official = country.name.official;
    let capital = country.capital;
    let flags = country.flags.png;
    let maps = country.maps.googleMaps;
    let population = country.population;
    let area = country.area;
    let coatOfArms = country.coatOfArms.png;
    let p = document.createElement("a");
    p.href = maps;
    p.innerText = maps;
    const CountryName = printElement("Country Name", name);
    const CountryOfficial = printElement("Official", official);
    const CountryCapital = printElement("Country Capital", capital);
    const CountryPopulation = printElement("Country Population", population);
    const CountryArea = printElement("Country Area", area);
    const CountryFlag = printImage("Country Flag", flags, coatOfArms);
    divRoot.append(
      CountryName,
      CountryOfficial,
      CountryCapital,
      CountryArea,
      CountryFlag
    );
    resolve(divRoot);
  });
}
function printElement(str, element) {
  const Wrapper = document.createElement("div");
  Wrapper.className = "dinamic-div";
  let p = document.createElement("p");
  p.className = "din-p";
  p.innerText = str;
  let pName = document.createElement("p");
  pName.className = "din-p";
  pName.innerText = element;
  Wrapper.append(p, pName);
  return Wrapper;
}
function printImage(str, image, arms) {
  const Wrapper = document.createElement("div");
  Wrapper.className = "dinamic-div";
  const imgFlag = document.createElement("img");
  imgFlag.className = "image";
  imgFlag.src = image;
  let p = document.createElement("p");
  p.className = "din-p";
  p.innerText = str;
  const img = document.createElement("img");
  img.className = "image";
  img.src = arms;
  Wrapper.append(p, imgFlag, img);
  return Wrapper;
}
