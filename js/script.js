const form = document.getElementById("form")

form.addEventListener('submit', (e) =>{
    e.preventDefault();
    let nome = document.getElementById("nome").value;
    let email = document.getElementById("email").value;
    let data = 
    {
    nome,
    email,
}

let convertData = JSON.stringify(data);
localStorage.setItem("lead", convertData)

let content = document.getElementById("content")

let carregando = `<p>Carregando...</p>`

content.innerHTML = carregando

let pronto = `<p>Olhe a caixa de entrada do seu email </p>`


setTimeout(() => {
    content.innerHTML = pronto
}, 1000)


})