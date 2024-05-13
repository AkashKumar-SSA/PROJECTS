let Add_notes = document.querySelector("#button");
let text = document.getElementsByTagName("textarea")[0];
let background_color = document.querySelector("#background_choose #color");
let text_color = document.querySelector("#text_color_choose #color");
let notes = document.querySelector("#notes_container");
let empty_line = document.querySelector("#empty_line");
let add_note = document.querySelector("#add_note");
let text_size = document.querySelector("#text_size #size");
let notes_heading = document.querySelector("#notes_heading");
let ai_input = document.querySelector("#ai_input");

let memory_main = document.querySelector(".memory_main");
// Setting th default /initial property to textarea
background_color.value = "#223344";
text_color.value = "#a69a9a";
text_size.value = "10";


// Setting the property to the text/notes field
background_color.addEventListener('change', function () {
    text.style.backgroundColor = background_color.value;
});
text_color.addEventListener('change', function () {
    text.style.color = text_color.value;
});
text_size.addEventListener('change', function () {
    text.style.fontSize = text_size.value + "px";
});

ai_input.addEventListener("keydown", function (event) {
    console.log("the pressed key is :", event)
    if (event.key === "Enter") {
        add_note.click();
    }
});
// Codes for  Adding note 
Add_notes.addEventListener("click", AddNotes);

// document.addEventListener('keydown', function(event) {
//     if (event.key === 'Enter') {
//       document.getElementById('yourButtonId').click();
//     }
//   });
function AddNotes() {

    if (text.value === "") {
        // alert("Please add some notes");
        return;
    }
    empty_line.innerText = "";

    let div = document.createElement("div");
    div.id = "main_notes_container";

    // code for Cross Button/cross_div - cross button
    let cross_div = document.createElement("div");
    cross_div.id = "heading_cross_div"
    div.appendChild(cross_div);
    let heading = document.createElement("p");
    heading.id = "create_notes_heading";
    cross_div.appendChild(heading);
    heading.innerText = notes_heading.value;


    let cross_btn = document.createElement("button");
    cross_div.appendChild(cross_btn);


    // Cross button creation
    cross_btn.innerHTML = "<b>X</b>";


    //Cross button Events
    cross_btn.addEventListener('click', function () {
        div.style.display = "none";   // div.remove();
    });
    cross_btn.addEventListener('mouseover', function () {
        cross_btn.style.color = "white";
        cross_btn.style.backgroundColor = "red";
    });
    cross_btn.addEventListener('mouseout', function () {
        cross_btn.style.backgroundColor = "white";
        cross_btn.style.color = "black";
    });

    // code for inserting text/text_div
    let text_div = document.createElement("div");
    div.appendChild(text_div);
    let p = document.createElement("p");
    text_div.appendChild(p);
    text_div.style = "margin:0";
    p.style = "height: 281px;width: 100%;overflow-y: auto;margin-left:5px;";
    p.innerText = text.value;
    p.style.fontSize = text_size.value + "px";
    p.style.color = text_color.value;




    // creating date-time - location div element
    let date_time_location_div = document.createElement("div");
    div.appendChild(date_time_location_div);

    // Clock logo
    let clock_logo = document.createElement("img");
    clock_logo.src = "clock2_image.jpg";
    clock_logo.style = "height:25px;"

    date_time_only_div = document.createElement("div");
    date_time_location_div.appendChild(date_time_only_div);
    date_time_location_div.appendChild(clock_logo);

    date_time_location_div.style = "height:fit-content;display:flex;flex-direction:row;justify-content:end;margin:0;padding:0;gap:20px;margin-right:10px;";

    let date_time = document.createElement("p");
    date_time_only_div.appendChild(date_time);
    date_time.innerText = new Date().toLocaleString();
    date_time.style = "display:none;"

    // mouseover event on clock_logo
    clock_logo.addEventListener("mouseover", function () {
        clock_logo.style = "display:none;";
        date_time.style = "font-size:15px;color:white;font-weight:500;margin:0;padding:0;";
    });
    date_time_only_div.addEventListener("mouseout", function () {
        date_time.style = "display:none;"
        clock_logo.style = "display:block;height:25px;";
    });

    // Location popup div
    let location_popup_div = document.createElement("div");
    location_popup_div.className = "location_popup_div";
    location_popup_div.id = "location_popup_div";

    div.appendChild(location_popup_div);

    // Mouseover / Mouseout event Location logo
    // let location_logo = document.createElement("img");
    // location_logo.src = "location_logo.jpg";
    // location_logo.style = "height:25px;";
    // date_time_location_div.appendChild(location_logo);
    


    // location_logo.addEventListener("mouseover", function () {
    //     location_popup_div.style = "display:block;height: 300px;width: 300px;background - color: white;position: absolute;top: 40 %;left: 50 %;transform: translate(-50 %, -50 %); z - index: 1000; border: 2px solid green;flex - direction: column; ";

    // });
    // location_logo.addEventListener("mouseout", function () {
    //     location_popup_div.style = "display:none;";
    // });

    // Styling the main div element
    div.style = "display:flex;flex-direction:column;width:400px;height:350px; border-top-right-radius: 60px; border-bottom-left-radius: 60px;position:relative;";
    div.style.backgroundColor = background_color.value;

    notes.appendChild(div); // adding the div to the notes div container
    memory_main.appendChild(div);

    //reseting the values
    notes_heading.value = "";
    text.value = "";
    text_size.value = "10";
    text.style.fontSize = text_size.value + "px";
    background_color.value = "#223344";
    text_color.value = "#a69a9a";
    text.style.backgroundColor = "#223344";

}
//------------------------------------------------------code separation line-------------------------------------------------------------
// Code for integrating interactive Gemini AI_chatbot

let ai_button = document.querySelector("#ai"); //AI button

//question input and answer_generate button

let ai_answer_generate_button = document.querySelector("#ai_answer_generate_button");

let ai_container = document.querySelector("#ai_container");
let ai_output_container_div = document.querySelector("#ai_output_container_div");
let ai_input_container_div = document.querySelector("#ai_input_container_div");


function userquestion() {
    return ai_input.value;
}

let ai_show_condition = false;
ai_button.addEventListener('click', function () {
    if (ai_show_condition == false) {
        // ai_container.style = "display:none";
        ai_button.style.backgroundColor = "#4F99DB";
        text.style.display = "none";
        notes_heading.style.display = "none";
        ai_show_condition = true;
        ai_container.style = "display:flex";
        ai_input_container_div.style = "display:flex";

        ai_answer_generate_button.addEventListener("click", AI_QUERY);
    } else {
        ai_container.style = "display:none";
        ai_button.style.backgroundColor = "white";
        ai_show_condition = false;
        text.style.display = "block";
        notes_heading.style.display = "block";
    }
});


function AI_QUERY() {
    if (ai_input.value == "") {
        return;
    }
    let ai_output_question = document.querySelector("#ai_output_question");
    ai_output_question.innerText = ai_input.value + " ?";

    let ai_output_container_div = document.querySelector("#ai_output_container_div");
    ai_output_container_div.style = "display:flex;"
    console.log(ai_input.value);

    ai_input.value = "";

}



