let seconds = 0;
let ms = 0;
let url = new URL(location.href)
const urlParams = new URLSearchParams(url.search);
if (urlParams.get("ranking") == 1) {
	seconds = urlParams.get("sec")
	ms = urlParams.get("ms")
	document.querySelector("#start-btn").style.display = "none"
	document.querySelector(".done").style.display = "block"
	document.querySelector(`.secondsDone`).innerText = `${seconds}.${ms}`
} else {
	console.log(urlParams.get("ranking"))
}
document.querySelector("#start-btn").addEventListener("click", () => {
	document.querySelector(".first").style.display = "block"
	document.querySelector("#start-btn").style.display = "none"
	setInterval(() => {
		if (document.querySelector(".done").style.display != "block") {
			seconds++
		}
	}, 1000);
	setInterval(() => {
		if (document.querySelector(".done").style.display != "block") {
			ms++
		}
	}, 100);
})
function correct(number) {
	if (number == 1) {
		document.querySelector(`.first`).style.display = "none"
		document.querySelector(`.second`).style.display = "block"
	}
	if (number == 2) {
		document.querySelector(`.second`).style.display = "none"
		document.querySelector(`.third`).style.display = "block"
	}
	if (number == 3) {
		document.querySelector(`.third`).style.display = "none"
		document.querySelector(`.fourth`).style.display = "block"
	}
	if (number == 4) {
		document.querySelector(`.fourth`).style.display = "none"
		document.querySelector(`.fifth`).style.display = "block"
	}
	if (number == 5) {
		document.querySelector(`.fifth`).style.display = "none"
		document.querySelector(`.sixth`).style.display = "block"
	}
	if (number == 6) {
		document.querySelector(`.sixth`).style.display = "none"
		document.querySelector(`.done`).style.display = "block"
		document.querySelector(`.secondsDone`).innerText = `${seconds}.${ms}`
	}
}
function failed() {
	document.querySelector(".first").style.display = "none"
	document.querySelector(".second").style.display = "none"
	document.querySelector(".third").style.display = "none"
	document.querySelector(".fourth").style.display = "none"
	document.querySelector(".fifth").style.display = "none"
	document.querySelector(".sixth").style.display = "none"
	document.querySelector(".failed").style.display = "block"
}
function toClipboard(selector) {
	document.querySelector("#share").innerText = location.hostname+`/2-2-4/?ranking=1&sec=${seconds}&ms=${ms}`
	let element = document.querySelector(selector);
	let temp = document.createElement('input');
	document.body.append(temp);
	temp.value = element.textContent;
	temp.select();
	document.execCommand('copy');
	temp.remove();
	// fixed toClipBoard
}
