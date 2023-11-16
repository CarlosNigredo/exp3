// CONVIERTE UN ALINEAMIENTO COPIADO DEL RESULTADO DE CLUSTAL OMEGA EN CUATRO LISTAS DE SECUENCIAS INDIVIDUALES QUE SE DEBEN PEGAR EN var data_ejercicios

// var button = document.getElementById('btn').addEventListener('click', () => {
//     var orString = document.getElementById('sequence').value;
//     //var residues = Array.from(orString);
    

//     var sequences = orString.split('\t');
//     //var sequences2 = sequences.split(' ');
//     var cleanSequences = [];
//     var data = {};

//     for(i=0; i<sequences.length;i++){
//         cleanSequences[i] = sequences[i].substring(sequences[i].length-60);
//     }

//     for(i=0; i<cleanSequences.length;i++){
//         data[i] = Array.from(cleanSequences[i]);
//     }

//     var keys = ["seq1", "seq2", "seq3", "cons"];

//     function renameProp(obj, keyToRemove, newKey) {
//         // Verificas si la propiedad existe y si el nuevo nombre es distinto
//         if (obj.hasOwnProperty(keyToRemove) && keyToRemove !== newKey) {
//           // Defines la nueva propiedad, tomando como base la anterior (incluso si es un objeto)
//           Object.defineProperty(obj, newKey, Object.getOwnPropertyDescriptor(obj, keyToRemove));
//           // Eliminas la propiedad anterior
//           delete obj[keyToRemove];
//         }
//       }

//     var k = Object.keys(data);

//     for(i=0; i<k.length;i++){
//         renameProp(data, k[i], keys[i]);
//     }

    
//     //console.log(residues);
//     console.log(sequences);
//     console.log(cleanSequences);
//     console.log(data);
//     // console.log(residues);
// });

// var answer = document.getElementById('answer');

// answer.innerHTML += residues;


// Encuentra las resouestas correctas para las preguntas #2 en la sección de práctica 
for(i=0; i < data_practica.length; i++){
    let grado = data_practica[i]["grado"];
    var sign;
    switch(grado){
        case("idénticas"):
        sign = "*"
        break;
        case("conservadas"):
        sign = ":"
        break;
        case("semiconservadas"):
        sign = "."
        break;
        case("no conservadas"):
        sign = " "
        break;
    }
    let ref = data_practica[i]["secuencias"]["cons"];
    let respuesta_dos = [];
    
    for(j=0; j<ref.length; j++) {
        if(ref[j] === sign){
            let item = (j + 1).toString();
            respuesta_dos.push(item);
        }
    }
    // console.log("MENSAJE 1");
    // console.log(respuesta_dos);
    data_practica[i]["respuesta_dos"] = respuesta_dos;
    // console.log(data_practica[i]["foo"]);
    
}

// Encuentra las resouestas correctas para las preguntas #4 y 5 en la sección de ejercicios 
for(i=0; i < data_ejercicios.length; i++){
    let grado_uno = data_ejercicios[i]["grado_uno"];
    let grado_dos = data_ejercicios[i]["grado_dos"];
    var sign_uno;
    var sign_dos;
    switch(grado_uno){
        case("idénticas"):
        sign_uno = "*"
        break;
        case("conservadas"):
        sign_uno = ":"
        break;
        case("semiconservadas"):
        sign_uno = "."
        break;
        case("no conservadas"):
        sign_uno = " "
        break;
    }
    switch(grado_dos){
        case("idénticas"):
        sign_dos = "*"
        break;
        case("conservadas"):
        sign_dos = ":"
        break;
        case("semiconservadas"):
        sign_dos = "."
        break;
        case("no conservadas"):
        sign_dos = " "
        break;
    }
    let ref = data_ejercicios[i]["secuencias"]["cons"];
    let respuesta_cuatro = [];
    let respuesta_cinco = [];
    
    for(j=0; j<ref.length; j++) {
        if(ref[j] === sign_uno){
            let item = (j + 1).toString();
            respuesta_cuatro.push(item);
        }
    }
    for(k=0; k<ref.length; k++) {
        if(ref[k] === sign_dos){
            let item = (k + 1).toString();
            respuesta_cinco.push(item);
        }
    }
    
    // console.log("MENSAJE 2");
    // console.log(respuesta_cuatro);
    // console.log(respuesta_cinco);
    data_ejercicios[i]["respuesta_cuatro"] = respuesta_cuatro;
    data_ejercicios[i]["respuesta_cinco"] = respuesta_cinco;
    // console.log(data_ejercicios[i]["respuesta_cuatro"]);
    // console.log(data_ejercicios[i]["respuesta_cinco"]);

}

// Si alguna de las casillas de la pregunta 6 en la sección de práctica es seleccionada, se marcan las casillas 1 de las 5 preguntas previas
function myFunction() {
    // Get the checkbox
    var checkBoxUno = document.getElementById("jspsych-survey-multi-select-response-6-0");
    var checkBoxDos = document.getElementById("jspsych-survey-multi-select-response-6-1");
    var checkBoxTres = document.getElementById("jspsych-survey-multi-select-response-6-2");
  
    // If the checkbox is checked, display the output text
    if (checkBoxUno.checked === true || checkBoxDos.checked === true || checkBoxTres.checked === true){
      console.log("ES-CA-PE");
    } 
}

// // Get the checkbox
// var checkBoxUno = document.getElementById("jspsych-survey-multi-select-response-6-0");
// var checkBoxDos = document.getElementById("jspsych-survey-multi-select-response-6-1");
// var checkBoxTres = document.getElementById("jspsych-survey-multi-select-response-6-2");

// // If the checkbox is checked, display the output text
// if (checkBoxUno.checked === true || checkBoxDos.checked === true || checkBoxTres.checked === true){
//   console.log("ES-CA-PE");
// } 

// document.getElementById("jspsych-survey-multi-select-response-6-0").addEventListener("click", autoFill);

// function autoFill() {
//     console.log("ES CA PE");
// }