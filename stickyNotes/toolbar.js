// code for toolbar -----------------------------------------------
const toolbar = document.querySelector("#toolbar");
const size_input_button = document.querySelector("#size_input_button");
const shapes = document.querySelector("#shapes_image");
const shapes_container = document.querySelector("#shapes_container");
let text_Area;

let display_sizeInput = false;
size_input_button.addEventListener("click", function () {
    if (display_sizeInput) {
        text_size.style = "display:none;"
        display_sizeInput = false;
    }
    else {
        document.querySelector("#text_size").style = "display:block;";
        display_sizeInput = true;
    }
});

const text_background_color = document.querySelector("#text_background_color");
const background_colord = document.querySelector("#background_choose #color");
background_colord.addEventListener('change', function () {
    text_background_color.style.backgroundColor = background_colord.value;
});

const text_color_choose_button = document.querySelector("#text_color_choose_button");

text_color_choose_button.addEventListener("click", function () {
    text_color.click();
});
text_color.addEventListener("change", () => {
    text_color_choose_button.style.color = text_color.value;
});

let shapes_show_condition = true;
shapes.addEventListener("click", () => {
    if (shapes_show_condition) {
        shapes_container.style.display = "flex";
        shapes_show_condition = false;
    } else {
        shapes_container.style.display = "none";
        shapes_show_condition = true;
    }
});

shapes_container.addEventListener("click", (event) => {
    const shapeId = event.target.id;
    console.log(shapeId);

    switch (shapeId) {
        case "rectangle_shape":
            // alert("Rectangle shape clicked");
            rectangle_function();
            break;

        case "heart_shape":
            alert("heart shape clicked");
            break;

        case "circle_shape":
            alert("circle_shape shape clicked");
            break;

        case "star_shape":
            alert("star shape clicked");
            break;
    }
});
function close_shape_container() {
    shapes_container.style.display = "none";
    shapes_show_condition = true;
}
function rectangle_function() {
    text.style.display = "none";
    close_shape_container();
    const shape_open = document.querySelector("#rectangular_notes");
    shape_open.style.display = "block";
    text_Area = shape_open;

}
// Text formatting using keyboard events
textArea.addEventListener("keydown", function (event) {
    if (event.ctrlKey && event.key === "b") {
        document.execCommand("bold", false, null);
        event.preventDefault();
    } else if (event.ctrlKey && event.key === "i") {
        document.execCommand("italic", false, null);
        event.preventDefault();
    } else if (event.ctrlKey && event.key === "u") {
        document.execCommand("underline", false, null);
        event.preventDefault();
    }
});
// Text formatting functions
function boldText() {
    document.execCommand('bold', false, null);
}

function underlineText() {
    document.execCommand('underline', false, null);
}

function strikethroughText() {
    document.execCommand('strikethrough', false, null);
}
function italic() {
    document.execCommand('italic', false, null);
}
function insertHorizontalRule() {
    document.execCommand('insertHorizontalRule', false, null);
}
function backColor() {
    document.execCommand('backColor', false, null);
}
function foreColor() {
    document.execCommand('foreColor', false, null);
}
function fontSize() {
    document.execCommand('fontSize', false, null);
}
function styleWithCSS() {
    document.execCommand('styleWithCSS', false, null);
}
function insertBrOnReturn() {
    document.execCommand('insertBrOnReturn', false, null);
}
function outdent() {
    document.execCommand('outdent', false, null);
}
function indent() {
    document.execCommand('indent', false, null);
}
function superscript() {
    document.execCommand('superscript', false, null);
}
function subscript() {
    document.execCommand('subscript', false, null);
}
function unlink() {
    document.execCommand('unlink', false, null);
}
function createLink() {
    document.execCommand('createLink', false, null);
}
function insertText() {
    document.execCommand('insertText', false, null);
}
function insertLineBreak() {
    document.execCommand('insertLineBreak', false, null);
}
function formatBlock() {
    document.execCommand('formatBlock', false, null);
}
// function delete(){
//     document.execCommand('delete', false, null);
// }
function paste() {
    document.execCommand('paste', false, null);
}
function cut() {
    document.execCommand('cut', false, null);
}
function copy() {
    document.execCommand('copy', false, null);
}
function removeFormat() {
    document.execCommand('removeFormat', false, null);
}
function selectall() {
    document.execCommand('selectAll', false, null);
}
function redo() {
    document.execCommand('redo', false, null);
}
function undo() {
    document.execCommand('undo', false, null);
}
function insertHTML() {
    document.execCommand('insertHTML', false, null);
}
function insertImage() {
    document.execCommand('insertImage', false, null);
}
function insertParagraph() {
    document.execCommand('insertParagraph', false, null);
}
function insertOrderedList() {
    document.execCommand('insertOrderedList', false, null);
}
function justifyFull() {
    document.execCommand('justifyFull', false, null);
}
function justifyRight() {
    document.execCommand('justifyRight', false, null);
}

function justifyCenter() {
    document.execCommand('justifyCenter', false, null);
}

function justifyLeft() {
    document.execCommand('justifyLeft', false, null);
}
function insertUnorderedList() {
    document.execCommand('insertUnorderedList', false, null);
}
