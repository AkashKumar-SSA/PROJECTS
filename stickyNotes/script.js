const Add_notes = document.querySelector("#button");
const text = document.getElementsByTagName("textarea")[0];
const background_color = document.querySelector("#background_choose #color");
const text_color = document.querySelector("#text_color #color");
const notes = document.querySelector("#notes_container");
const empty_line = document.querySelector("#empty_line");
const add_note = document.querySelector("#add_note");
const text_size = document.querySelector("#text_size");
const notes_heading = document.querySelector("#notes_heading");
const ai_input = document.querySelector("#ai_input");

const notes_location_info = document.querySelector("#notes_location_info");

reset(); // Calling the reset function to reset all the containers

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

// Codes for  Adding note 
Add_notes.addEventListener("click", AddNotes);

function AddNotes() {

    if (text.value === "") {
        return;
    }
    if (notes_heading.value === "") {
        alert("Please give heading to your notes !");
        return;
    }
    if (notes_location_info.value === "") {
        alert("Please give location - where you are making your notes");
        return;
    }

    empty_line.innerText = "";

    const div = document.createElement("div");
    div.id = "main_notes_container";
    // Styling the main div element
    div.style = "display:flex;flex-direction:column;min-width:400px;max-width:600px;height:350px; border-top-right-radius: 60px; border-bottom-left-radius: 60px;position:relative;";
    div.style.backgroundColor = background_color.value;

    // code for Cross Button/cross_div - cross button
    const cross_div = document.createElement("div");
    cross_div.id = "heading_cross_div"
    div.appendChild(cross_div);
    const heading = document.createElement("p");
    heading.id = "create_notes_heading";
    cross_div.appendChild(heading);
    heading.innerText = notes_heading.value;

    const cross_btn = document.createElement("button");
    cross_div.appendChild(cross_btn);

    // Cross button creation
    cross_btn.innerHTML = "<b>X</b>";
    cross_btn.style = "height:100%;font-size:20px;"

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
    const text_div = document.createElement("div");
    div.appendChild(text_div);
    const content = document.createElement("p");
    text_div.appendChild(content);
    text_div.style = "margin:0";
    content.id = "sticky_note_content";
    content.innerText = text.value;
    content.style.fontSize = text_size.value + "px";
    content.style.color = text_color.value;


    // creating date-time - location div element
    const date_time_location_div = document.createElement("div");
    div.appendChild(date_time_location_div);

    // Clock logo
    const clock_logo = document.createElement("img");
    clock_logo.src = "clock2_image.jpg";
    clock_logo.style = "height:25px;"

    date_time_only_div = document.createElement("div");
    date_time_location_div.appendChild(date_time_only_div);
    date_time_location_div.appendChild(clock_logo);

    date_time_location_div.style = "height:fit-content;display:flex;flex-direction:row;justify-content:end;margin:0;padding:0;gap:20px;margin-right:10px;";

    const date_time = document.createElement("p");
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
    const location_popup_div = document.createElement("div");
    location_popup_div.className = "location_popup_div";
    location_popup_div.id = "location_popup_div";
    div.appendChild(location_popup_div);

    // Mouseover / Mouseout event Location logo
    const location_logo = document.createElement("img");
    location_logo.src = "location_logo.jpg";
    location_logo.style = "height:25px;display:flex;flex-direction:column;";
    date_time_location_div.appendChild(location_logo);
    const popup_heading = document.createElement("P");
    location_popup_div.appendChild(popup_heading);
    popup_heading.innerHTML = "<b>At :</b>";

    const popup_location = document.createElement("p");
    location_popup_div.appendChild(popup_location);
    popup_location.innerText = notes_location_info.value;

    location_logo.addEventListener("mouseover", function () {
        location_popup_div.style = "display:block; ";

    });
    location_logo.addEventListener("mouseout", function () {
        location_popup_div.style = "display:none;";
    });

    // Notes edit-option code container
    const edit_note = document.createElement("img");
    edit_note.src = "edit_logo.jpg";
    edit_note.style = "height:25px;";
    date_time_location_div.appendChild(edit_note);


    // edit note popup div
    const edit_note_popup_div = document.createElement("div");
    edit_note_popup_div.className = "edit_note_popup_div";
    edit_note_popup_div.id = "edit_note_popup_div";
    div.appendChild(edit_note_popup_div);

    // edit_note mouseover / mouseout event listeners
    edit_note_popup_div.innerText = "Click to edit ."
    edit_note.addEventListener("mouseover", () => {
        edit_note_popup_div.style = "display:block; ";
    });
    edit_note.addEventListener("mouseout", () => {
        edit_note_popup_div.style = "display:none;";
    });

    //edit_note mouse click events Listener
    edit_note.addEventListener("click", () => {
        // text.innerHTML  += p.innerText;
        // notes_heading.innerText = heading.value;

        text.value = content.innerText;
        notes_heading.value = heading.innerText;
        notes_location_info.value = popup_location.innerText;
        console.log("text content =", content.innerText);
        // insert_content_toEdit(p);
    });

    notes.appendChild(div); // adding the div to the notes div container

    //reseting the values 
    reset();
}
const refresh_content = document.querySelector("#refresh_content");
refresh_content.addEventListener("click", () => {
    reset();
});

function reset() {
    notes_heading.value = "";
    text.value = ""
    text_size.value = "30";
    text.style.fontSize = text_size.value + "px";
    background_color.value = "#223344";
    text_color.value = "#a69a9a";
    text.style.backgroundColor = "#223344";
    text.style.height = "300px";
    text.style.width = "70%";
    notes_location_info.value = "";
    text_color_choose_button.style.color = text_color.value;

}
//------------------------------------------------code separation line-------------------------------------------------------------
// Code for integrating interactive Gemini AI_chatbot

const ai_button = document.querySelector("#ai"); //AI button

//question input and answer_generate button

const ai_answer_generate_button = document.querySelector("#ai_answer_generate_button");

const ai_container = document.querySelector("#ai_container");
const ai_output_container_div = document.querySelector("#ai_output_container_div");
const ai_input_container_div = document.querySelector("#ai_input_container_div");

ai_input.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        ai_answer_generate_button.click();
    }
});


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
        notes_location_info.style.display = "none";
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
        notes_location_info.style.display = "block";
    }
});


function AI_QUERY() {
    if (ai_input.value == "") {
        return;
    }
    const ai_output_question = document.querySelector("#ai_output_question");
    ai_output_question.innerText = ai_input.value + " ?";

    const ai_output_container_div = document.querySelector("#ai_output_container_div");
    ai_output_container_div.style = "display:flex;"
    console.log(ai_input.value);

    ai_input.value = "";
}





