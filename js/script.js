let resumoExpandido = document.getElementById("resumo_texto1");
let resumoRetraido = document.getElementById("resumo_texto");
let resumo = document.getElementById("resumo");
let footer = document.querySelector("footer");
//seção das discursões
let discursoes = document.getElementById("discursões")
let comentarios = document.getElementById("comentario")
let comentarios1 = document.getElementById("comentario1")
let comentario_enviado = document.getElementById("comentario_enviado")

// seção comentarios e ideias
let ideias = document.getElementById("ideia_comentarios")
let Comentario = document.getElementById("criar_comentario")

//seção respostas 

let respostas = document.getElementById("comentario-ativo")


function expandirResumo() {
        resumoRetraido.style.display = "none";
        resumoExpandido.style.display = "block";
        resumo.style.height = "500px"

    }
        
function retrairResumo(){
        resumoRetraido.style.display = "block";
        resumoExpandido.style.display = "none";
        resumo.style.height = "187px"
}

function cria_topico(){
    ideias.style.display ="none"
    comentario_enviado.style.display = "none"
    Comentario.style.display = "block"

}

function enviar_comentario(){
    discursoes.style.height = "800px"
    comentario_enviado.style.display = "block"
    Comentario.style.display = "none"
}

function abrir_comentario(){
    respostas.style.display = "block"
    footer.style.top = "78rem"

}

function comentario_desativo(){
    respostas.style.display = "none"
    discursoes.style.height = "800px"
    footer.style.top ="45rem"
}

/* ativação do menu no mobile e tablet*/

function closenav(){
    document.getElementById("menu").style.width = "0%"    
}

function abrinav(){
    document.getElementById("menu").style.width = "100%"
}