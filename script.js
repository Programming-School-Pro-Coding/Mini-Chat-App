// Required Elements
const Buttons = document.querySelectorAll("button");
const text_Area = document.getElementById("text-area");
const displayed_Messages = document.getElementById("display");

// ✅ get value of textarea on change
text_Area.addEventListener("change", (e) => {
  Buttons[0].addEventListener("click", () => {
    console.log(e.target.value);
    displayed_Messages.innerText = e.target.value;
    console.log(e.target.value);
  });

  Buttons[1].addEventListener("click", () => {
    let text = e.target.value.trim();
    let apiUrl = `https://translate.google.com/?sl=en&tl=ar&text=${text}&op=translate`;
    fetch(apiUrl)
      .then((res) => res.json())
      .then((data) => {
        e.target.value = data.responseData.translatedText;
        data.matches.forEach((data) => {
          if (data.id === 0) {
            toText.value = data.translation;
          }
        });
      });
  });

  Buttons[2].addEventListener("click", () => {
    e.target.value = "";
    displayed_Messages.innerText = e.target.value;
  });
});