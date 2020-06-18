const clickable = document.getElementById("js-click");

function onClick() {
    alert("you clicked me");
}

clickable.addEventListener("mousedown", onClick, false)