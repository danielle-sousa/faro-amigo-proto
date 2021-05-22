function searchPets() {
    let input = document.getElementById('searchbar').value
    input=input.toLowerCase();
    let x = document.getElementsByClassName('animals');
      
    for (i = 0; i < x.length; i++) { 
        if (!x[i].innerHTML.toLowerCase().includes(input)) {
            x[i].classList.add("fade"); 
        }
        else {
            x[i].classList.add("show");                 
        }
    }
}

function urlRedirect() {
  document.getElementById("form-signup").addEventListener("submit", function(event){
    event.preventDefault()
  });
    alert("Parabéns! Seu cadastro foi realizado com sucesso.");
    window.location.replace("formulario-adocao.html")
  }

function homeRedirect() {
    document.getElementById("form-adopt").addEventListener("submit", function(event){
        event.preventDefault()
      });
    alert("Parabéns! Seu formulário foi enviado com sucesso. Aguarde o contato da ONG/Protetor em até 48hs.");
    window.location.replace("index-logged.html")
  }

  function contactRedirect() {
    document.getElementById("form-contact").addEventListener("submit", function(event){
        event.preventDefault()
      });
    alert("Obrigada pelo contato!");
    window.location.replace("index.html")
  }