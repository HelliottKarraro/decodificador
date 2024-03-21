
function criptografar() {
    let normal = document.getElementsByClassName("entrada").value;

    let textoCriptografado = "";

    for (let i = 0; i < normal.length; i++) {

        if (normal[i] == 'a'){
            textoCriptografado += 'ai';
        }else if (normal[i] == 'e'){
            textoCriptografado += 'enter';
        }else if (normal[i] == 'i'){
            textoCriptografado += 'imes';
        }else if (normal[i] == 'o'){
            textoCriptografado += 'ober';
        }else if (normal[i] == 'u'){
            textoCriptografado += 'ufat';
        }else{
            textoCriptografado += normal[i];
        }
    }
    
    document.getElementsByClassName("saida").innerHTML = textoCriptografado
}


function descriptografar() {

    let segredo = document.getElementsByClassName("entrada").value;

    let textoNormal = "";

    for (let i = 0; i < segredo.length; i++) {

        if (segredo[i] == 'a'){
            segredo = segredo.slice(0, i) + segredo.slice(i+1, segredo.length);
            textoNormal += 'a';
        }else if (segredo[i] == 'e'){
            segredo = segredo.slice(0, i) + segredo.slice(i+4, segredo.length);
            textoNormal += 'e';
        }else if (segredo[i] == 'i'){
            segredo = segredo.slice(0, i) + segredo.slice(i+3, segredo.length)
            textoNormal += 'i';
        }else if (segredo[i] == 'o'){
            segredo = segredo.slice(0, i) + segredo.slice(i+3, segredo.length)
            textoNormal += 'o';
        }else if (segredo[i] == 'u'){
            segredo = segredo.slice(0, i) + segredo.slice(i+3, segredo.length)
            textoNormal += 'u';
        }else{
            textoNormal += segredo[i];
        }
    }
    
    document.getElementsByClassName("saida").innerHTML = textoNormal
}



//console.log(criptografar());
//console.log(descriptografar());
