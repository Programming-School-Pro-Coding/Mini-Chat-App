// Required Elements
const Buttons = document.querySelectorAll("button");
const text_Area = document.getElementById("text-area");
const displayed_Messages = document.getElementById("display");

Buttons[0].addEventListener("click", () => {
  console.log(text_Area.value);
  displayed_Messages.innerText = text_Area.value;
  console.log(text_Area.value);
});

Buttons[1].addEventListener("click", () => {
  const text = text_Area.value;

  // 1. Create an object (map) for charcter conversion
  const en = "qwertyuiop[]asdfghjkl;'zxcvbnm,./`YH";
  const ar = "ضصثقفغعهخحجدشسيبلاتنمكطئءؤرﻻىةوزظذإأ";
  const charMap = {};
  for (let i = 0; i < en.length; i++) {
    charMap[en[i]] = ar[i];
  }

  let buffer = "";
  // 2. check for each charcter
  for (let i = 0; i < text.length; i++) {
    const ch = text[i];
    if (charMap.hasOwnProperty(ch)) {
      // if exists: correct
      buffer += charMap[ch];
    } else {
      // if not: keep the original charcter
      buffer += ch;
    }
  }
  text_Area.value = buffer;
});

Buttons[2].addEventListener("click", () => {
  text_Area.value = "";
  displayed_Messages.innerText = text_Area.value;
});
