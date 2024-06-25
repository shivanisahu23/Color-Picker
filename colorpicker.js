// const body = document.body;

// const div = document.createElement("div");
// div.className = "background";
// body.appendChild(div);

// div.style.backgroundImage = "url('https://e0.pxfuel.com/wallpapers/355/206/desktop-wallpaper-in-celebration-of-whatsapps-dark-mode-in-2020-dark-phone-chat-whatsapp-iphone-pattern-night-mode.jpg')";
// div.style.backgroundSize = "cover";
// div.style.height = "100vh";

// const heading = document.createElement("h1");
// heading.className = "heading";
// heading.textContent = "Chat History";
// div.appendChild(heading);

// const body = document.body;

// const div = document.createElement("div");
// div.className = "main";
// body.appendChild(div);

// // div.style.backgroundColor = "white";

// const h = document.createElement("h1");
// h.textContent = "Color Picker";
// div.appendChild(h);

// const div1 = document.createElement("div");
// div1.className = "button";
// div.appendChild(div1);

// const b1 = document.createElement("button");
// b1.textContent = "#e0e0e0";
// b1.style.backgroundColor = "#e0e0e0";
// div1.appendChild(b1);

// const b2 = document.createElement("button");
// b2.textContent = "#6fcf97";
// b2.style.backgroundColor = "#6fcf97";
// div1.appendChild(b2);

// const b3 = document.createElement("button");
// b3.textContent = "#56ccf2";
// b3.style.backgroundColor = "#56ccf2";
// div1.appendChild(b3);

// const b4 = document.createElement("button");
// b4.textContent = "#bb6bd9";
// b4.style.backgroundColor = "#bb6bd9";
// div1.appendChild(b4);

const body = document.body;

const div = document.createElement("div");
div.className = "main";
body.appendChild(div);

body.style.backgroundColor = "white";
body.style.display = "flex";
body.style.flexDirection = "column";
body.style.alignItems = "center";
body.style.justifyContent = "center";
body.style.height = "100vh";
body.style.fontFamily = "Arial, sans-serif";

div.style.textAlign = "center";

const h = document.createElement("h1");
h.textContent = "Color Picker";
h.style.fontSize = "60px"
div.appendChild(h);

const div1 = document.createElement("div");
div1.className = "button-container";
div.appendChild(div1);

const b1 = document.createElement("button");
b1.textContent = "#e0e0e0";
b1.style.backgroundColor = "#e0e0e0";
b1.style.margin = "5px";
b1.style.padding = "30px";
b1.style.border = "none";
b1.style.borderRadius = "10px";
b1.style.border = "2px solid black";
b1.style.cursor = "pointer";
b1.style.fontSize = "16px";
b1.style.color = "white";
div1.appendChild(b1);

const b2 = document.createElement("button");
b2.textContent = "#6fcf97";
b2.style.backgroundColor = "#6fcf97";
b2.style.margin = "5px";
b2.style.padding = "30px";
b2.style.border = "none";
b2.style.borderRadius = "10px";
b2.style.border = "2px solid black";
b2.style.cursor = "pointer";
b2.style.fontSize = "16px";
b2.style.color = "white";
div1.appendChild(b2);

const b3 = document.createElement("button");
b3.textContent = "#56ccf2";
b3.style.backgroundColor = "#56ccf2";
b3.style.margin = "5px";
b3.style.padding = "30px";
b3.style.border = "none";
b3.style.borderRadius = "10px";
b3.style.border = "2px solid black";
b3.style.cursor = "pointer";
b3.style.fontSize = "16px";

b3.style.color = "white";
div1.appendChild(b3);

const b4 = document.createElement("button");
b4.textContent = "#bb6bd9";
b4.style.backgroundColor = "#bb6bd9";
b4.style.margin = "5px";
b4.style.padding = "30px";
b4.style.border = "none";
b4.style.borderRadius = "10px";
b4.style.border = "2px solid black";
b4.style.cursor = "pointer";
b4.style.fontSize = "16px";
b4.style.color = "white";

div1.appendChild(b4);

const colorDisplay = document.createElement("div");
colorDisplay.className = "color-display";
colorDisplay.textContent = "Background Color: #ffffff";
colorDisplay.style.marginTop = "20px";
colorDisplay.style.paddingTop = "10px";
colorDisplay.style.paddingBottom = "10px";
colorDisplay.style.paddingInline = "10px"; 
colorDisplay.style.backgroundColor = "black";
colorDisplay.style.color = "white";
colorDisplay.style.borderRadius = "10px";
colorDisplay.style.display = "inline-block";
div.appendChild(colorDisplay);

const paragraph = document.createElement('p');
paragraph.textContent = "Try clicking on one of the colors above to change the background color of this page!";
paragraph.style.color = "grey";
div.appendChild(paragraph);



b1.addEventListener("click", function() {
    body.style.backgroundColor = "#e0e0e0";
    colorDisplay.textContent = "Background Color: #e0e0e0";
    colorDisplay.style.color = "#e0e0e0";
    colorDisplay.style.fontWeight = "bold";
});

b2.addEventListener("click", function() {
    body.style.backgroundColor = "#6fcf97";
    colorDisplay.textContent = "Background Color: #6fcf97";
    colorDisplay.style.color = "#6fcf97";
    colorDisplay.style.fontWeight = "bold";
});

b3.addEventListener("click", function() {
    body.style.backgroundColor = "#56ccf2";
    colorDisplay.textContent = "Background Color: #56ccf2";
    colorDisplay.style.color = "#56ccf2";
    colorDisplay.style.fontWeight = "bold";
});

b4.addEventListener("click", function() {
    body.style.backgroundColor = "#bb6bd9";
    colorDisplay.textContent = "Background Color: #bb6bd9";
    colorDisplay.style.color = "#bb6bd9";
    colorDisplay.style.fontWeight = "bold";
});
