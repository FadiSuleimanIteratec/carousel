const carousel = document.getElementsByClassName("carousel-inner")[0];

let carousel_inner = "";
for (let i = 0; i < 4; i++) {
	const active = i === 0 ? " active" : "";
	carousel_inner += "<div class='item" + active + "'><div>";
    for (let j = 0; j < 3; j++) {
        carousel_inner += "<img src='img/(" + (i*3 + j + 1) + ").jpeg'>";
    }
    carousel_inner += "</div></div>";
}
carousel.innerHTML = carousel_inner;
