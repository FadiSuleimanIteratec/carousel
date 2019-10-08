let carousel = document.getElementById("carousel");

for (let i = 1; i <= 12; i++) {
	carousel.innerHTML += "<img src='img/ (" + i + ").jpeg'>";
}	

doScroll = (direction) => {
	let width = carousel.clientWidth;
	carousel.scrollLeft += direction === 'left' ? width : -width;
};
