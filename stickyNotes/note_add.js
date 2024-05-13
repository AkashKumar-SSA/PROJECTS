let left_right_logo_image = document.querySelector("#left_right_logo_image");
// document.querySelector("#left_container").style = "display:none;"

let note_add_condition = true;
left_right_logo_image.addEventListener('click', function () {
    if(note_add_condition){
         document.querySelector("#right_container").style = "width:55vw;"
        document.querySelector("#left_container").style = "width:45vw;"
        note_add_condition = false;
        
    }
    else{
        document.querySelector("#right_container").style = "width:100vw;"
        document.querySelector("#left_container").style = "display:none;"
        note_add_condition = true;
    }
});