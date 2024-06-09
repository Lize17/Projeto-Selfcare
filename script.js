var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n)
}

function currentSlide(n) {
  showSlides(slideIndex = n)
}

function showSlides(n) {
  var i
  var slides = document.getElementsByClassName("mySlides")
  var dots = document.getElementsByClassName("dot")
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none"
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "")
  }
  slides[slideIndex - 1].style.display = "block"
  dots[slideIndex - 1].className += " active"
}

document.getElementById("socialButton").addEventListener("click", function() {
  var element = document.querySelector(".divSocial");
  if (element.style.display === "none" || element.style.display === "") {
    element.style.display = "block"
    element.classList.add("visible")
  } else {
    element.style.display = "none"
    element.classList.remove("visible")
  }
});

function openForm() {
  document.getElementById("myForm").style.display = "block";
  document.getElementById("erro").style.display = "none";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}

document.getElementById("myForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Impede o redirecionamento padrão
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  if (username == "admin" && password == "admin") {
    alert("Logado com sucesso")

  } else {
    document.getElementById("erro").style.display = "block"
  }
})

function calcularIMC() {
  var peso = parseFloat(document.getElementById("peso").value)
  var altura = parseFloat(document.getElementById("altura").value)

  if (!isNaN(peso) && !isNaN(altura) && altura > 0) {
    var imc = peso / (altura * altura);
    document.getElementById("resultado").textContent = imc.toFixed(2)
  } else {
    alert("Por favor, insira valores válidos para peso e altura.")
  }
}


function enviar() {
    var mensagem = document.getElementById("mensInpt").value;

    // Cria um novo elemento div com a classe "enviado"
    var novaMensagemDiv = document.createElement("div");
    novaMensagemDiv.className = "mensEnviado";

    // Cria um novo elemento div para a mensagem
    var novaMensagemEnviado = document.createElement("div");
    novaMensagemEnviado.className = "enviado";

    // Cria um novo elemento p para a mensagem
    var paragrafo = document.createElement("p");
    paragrafo.textContent = mensagem;

    // Adiciona o parágrafo ao div de mensagem
    novaMensagemEnviado.appendChild(paragrafo);

    // Adiciona o div de mensagem ao novo div
    novaMensagemDiv.appendChild(novaMensagemEnviado);

    // Seleciona o elemento onde as mensagens são exibidas
    var mensagensContainer = document.getElementById('mensagensContainer');

    // Adiciona o novo div ao elemento existente
    mensagensContainer.appendChild(novaMensagemDiv);

    // Limpa o campo de entrada
    document.getElementById("mensInpt").value = "";
}
