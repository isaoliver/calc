// Função que captura o valor da idade, acrescenta 50 e devolve para a página
function newIdade() {
    let nome = document.getElementById('nome').value;
    let idade = document.getElementById('idade').value;

    let idadeFutura = parseInt(idade) + 50; 

    return document.getElementById('idade_futura').value = idadeFutura;  
}

function idadePlusVinte () {
    let nome = document.getElementById('nome').value;
    let idade = document.getElementById('idade').value;

    let idade20 = parseInt(idade) + 20; 

    return document.getElementById('idade20').value = idade20; 
}

// Função que carrega uma imagem definida pelo usuário, trata a resolução da mesma e
// insere no contexto da página
function carregaNovo() {
    let url = '../images/novo.jpg';

    let img = new Image(250,250);
    img.src = url;    
    
    return document.getElementById('novo').appendChild(img);    
}


// Função que carrega uma imagem definida pelo usuário, trata a resolução da mesma e 
//insere no contexto da página
function carrega20 () {
    let url = '../images/combo.jpg';

    let img = new Image(250, 250);
    img.src = url;

    return document.getElementById('vinte').appendChild(img);
}

// Função que carrega uma imagem definida pelo usuário, trata a resolução da mesma e
// insere no contexto da página
function carregaIdoso() {
    let url = '../images/velho.png';

    let img = new Image(250,250);
    img.src = url;    

    return document.getElementById('idoso').appendChild(img);
}

