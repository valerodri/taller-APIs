document.addEventListener("DOMContentLoaded", function() {
    const wordInfo = document.getElementById("buscar");

    wordInfo.addEventListener("click", () => {
        const wordInput = document.getElementById("word_input").value;

        if (wordInput) {
            fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${wordInput}`)
                .then((response) => response.json())
                .then((data) => {
                    if (data.length > 0) {
                        let htmlContentToAppend = "";
                        const wordData = data[0];
                        const word = wordData.word;
                        const pOS = wordData.meanings[0].partOfSpeech;
                        const def = wordData.meanings[0].definitions[0].definition;
                        const phonetic = wordData.phonetics[1].text;

                    htmlContentToAppend += `
                             <div id="info">
                             <p id="word">${word}</p>
                             <id= id="phonetics"> ${phonetic}<span id="pos"> ${pOS}</span> </p>
                             <p id="def"> ${def}</p>
                            
                             </div>
                            `;
                                
                    document.getElementById("word_information").innerHTML = htmlContentToAppend;
                    } else {
                        alert("We were unable to find that word in our database.");
                    }
                })
                .catch((error) => {
                    console.error("Error al obtener datos:", error);
                });
        } else {
            alert("Please enter a valid word.");
        }
    });
});
    
