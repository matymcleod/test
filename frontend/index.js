const clickable = document.getElementById("js-click");

function onClick() {
    alert("i was made on a feature branch");
}

clickable.addEventListener("mousedown", onClick, false)