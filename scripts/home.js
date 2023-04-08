const meuTituloElement = document.querySelector('#home-title')
const sairBtnElement = document.querySelector('#sair-btn')

// Capturo o usuário salvo na tela de cadastro
const usuarioStorage = window.localStorage.getItem('usuario')
// JSON.parse transforma uma string em um objeto/array
const usuario = JSON.parse(usuarioStorage)

meuTituloElement.innerText = usuario.name

sairBtnElement.onclick = (e) => {
  window.localStorage.clear()
  window.location = "/login.html"
}
