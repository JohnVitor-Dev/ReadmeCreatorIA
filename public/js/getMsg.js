const buttonEntrar = document.getElementById("entrar");
const mensagem = document.getElementById("mensagem");

buttonEntrar.addEventListener("click", () => {
    fetch('/api/mensagem')
        .then(response => response.json())
        .then(data => {
            mensagem.textContent = data.mensagemBack;
        })
        .catch(error => console.error('Erro:', error));
});
