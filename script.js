// Required Elements
const Buttons = document.querySelectorAll("button");
const text_Area = document.getElementById("text-area");
const displayed_Messages = document.getElementById("display");

// Required Packages
const dotenv = require("dotenv");

dotenv.config();

text_Area.addEventListener("change", (e) => {
  Buttons[0].addEventListener("click", () => {
    console.log(e.target.value);
    displayed_Messages.innerText = e.target.value;
    console.log(e.target.value);
  });

  Buttons[1].addEventListener("click", () => {
    const encodedParams = new URLSearchParams();
    encodedParams.append("q", e.target.value);
    encodedParams.append("target", "ar");

    const options = {
      method: "POST",
      headers: {
        "content-type": "application/x-www-form-urlencoded",
        "Accept-Encoding": "application/gzip",
        "X-RapidAPI-Host": "google-translate1.p.rapidapi.com",
        "X-RapidAPI-Key": "2b22bdf99emsh10bbfe7c3f5455ep19223bjsnd367e3755775",
      },
      body: encodedParams,
    };

    fetch(
      "https://google-translate1.p.rapidapi.com/language/translate/v2",
      options
    )
      .then((response) => response.json())
      .then((response) => e.target.value = response.data.translations[0].translatedText)
      .catch((err) => console.error(err));
  });

  Buttons[2].addEventListener("click", () => {
    e.target.value = "";
    displayed_Messages.innerText = e.target.value;
  });
});