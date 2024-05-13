// code for toolbar -----------------------------------------------
const toolbar = document.querySelector("#toolbar");
const stickyNote = document.querySelector("#sticky-note p");
const text_area = document.querySelector("#text_area")

toolbar.addEventListener("click", function (event) {
    const buttonId = event.target.id;

    switch (buttonId) {
        case "bold":
            document.execCommand("bold", false, null);
            break;
        case "italic":
            document.execCommand("italic", false, null);
            break;
        case "underline":
            document.execCommand("underline", false, null);
            break;
        case "strikethrough":
            document.execCommand("strikethrough", false, null);
            break;
        case "color":
            const color = prompt("Enter a color:");
            document.execCommand("ForeColor", false, color);
            break;
        case "size":
            const size = prompt("Enter a size:");
            document.execCommand("FontSize", false, size);
            break;
    }
});

// stickyNote.addEventListener("input", function () {
//     console.log(stickyNote.innerText);
// });

// ------------------------------------------------