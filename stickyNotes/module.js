import { GoogleGenerativeAI } from "@google/generative-ai";
        // import md from "markdown-it";

        document.querySelector("#ai_answer_generate_button").addEventListener('click', run);

        // Access your API key (see "Set up your API key" above)
        const API_KEY = 'AIzaSyB0J5ZQAVdt7iaOzjaWbHBEZn9CbqK5ev4';
        const genAI = new GoogleGenerativeAI(API_KEY);
        // For text-only input, use the gemini-pro model
        const model = genAI.getGenerativeModel({ model: "gemini-pro" });

        async function run() {
            const prompt = userquestion();

            let result = await model.generateContentStream(prompt);
    
            let text = '';
            
            let formatted ;
            let original_text;
            for await (const chunk of result.stream) {
                let chunkTest = chunk.text();
                original_text += chunkTest;
                const resposeArray = chunkTest.split("**");
                let newArray;
                console.log("the splitted text - ",resposeArray);
                for(let i=0; i < resposeArray.length ; i++){
                    if(i === 0 || i%2 !== 1){
                        newArray += resposeArray[i];
                    }else{
                        newArray += "<br>";
                        newArray += "<b>" + resposeArray[i] + "</b>";
                        newArray += "&nbsp;&nbsp;";
                    }
                }
                let newArray2 = newArray.split("*").join("<br>&nbsp;&nbsp;->")
                // text += chunkTest;
                text += newArray2;

                document.querySelector("#ai_output_answer").innerHTML = text;
            }
            ai_response_print(text);
            //
            document.querySelector("#ai_output_answer").innerHTML = text;
            // answer(text);
        }
        run();
        function ai_response_print(text) {
            console.log("the text data is:.......\n");
            console.log(original_text);
        }