// Elementos do primeiro formulário
const nomeElement = document.querySelector('#nameUser')
const emailElement = document.querySelector('#emailUser')
const nextButtonElement = document.querySelector('#next-btn')
const formCadastroUsuarioElement = document.querySelector('#form-cadastro-usuario')


const cardContainerElement = document.querySelector('#form-wrapper')
const salvarUsuarioBtnElement = document.querySelector('#salvar-usuario-btn')
let formCadastroSenhaElement = null

// cannot read properties of null/undefined (reading 'addEventListener')
// Nao pode ler uma propriedade de algo que é nulo

/**
 * 1 - inicia zerado
 * 2 - ele atualiza o nome e email na funçao handleSubmitForm
 * 3 - ele atualiza a senha na funçao cadastrarUsuario
 */
const usuario = {
  name: '',
  email: '',
}

function cadastrarUsuario(e) {
  e?.preventDefault();

  // capturou os elementos input
  const inputSenhaElement = document.querySelector('#password')
  const inputConfirmarSenhaElement = document.querySelector('#confirmPassword')

  // verificar se a senha e o confirmar senha sao iguais
  const senhasDiferentes = inputSenhaElement.value !== inputConfirmarSenhaElement.value
  const senhaMenorQue8 = inputSenhaElement.value.length < 8
  if(senhasDiferentes || senhaMenorQue8) {
    console.log('Senha inválida')
    return
  }

  // capturar valores do input
  // juntar com os valores antigos
  usuario.senha = inputSenhaElement.value

  // salvar usuario
  // JSON.stringify transforma um objeto em string
  window.localStorage.setItem('usuario', JSON.stringify(usuario))
  window.location = "/home.html"
}

function proximoForm(eventObj) {
  // Para o comportamento padrao de um form que é recarregar a página
  eventObj.preventDefault()

  // guardar info
  // existe as duas formas para capturar uma propriedade de um objeto
  usuario.name = nomeElement.value
  usuario['email'] = emailElement.value

  // proximo form
  const html = `
    <form id="form-cadastro-senha">
      <div class="mb-3">
        <label for="password" class="form-label">Senha</label>
        <input type="password" class="form-control" id="password" aria-describedby="emailHelp">
      </div>

      <div class="mb-3">
        <label for="confirmPassword" class="form-label">Confirmar Senha</label>
        <input type="password" class="form-control" id="confirmPassword" aria-describedby="emailHelp">
      </div>

      <div class="mb-3">
        <p>*Precisa no mínimo 8 digitos</p>
        <p>*Precisa no mínimo 8 digitos</p>
        <p>*Precisa no mínimo 8 digitos</p>
      </div>

      <button type="submit" class="btn btn-primary" id="salvar-usuario-btn">Prosseguir</button>
    </form>
  `

  // Foi para o próximo formulário
  cardContainerElement.innerHTML = html

  // Capturando o novo formulário
  formCadastroSenhaElement = document.querySelector('#form-cadastro-senha')
  formCadastroSenhaElement?.addEventListener("submit", cadastrarUsuario)
}

// "?" evita acessar a funçao addEventListener de algo nulo
// formCadastroSenhaElement?.addEventListener("submit", cadastrarUsuario)
formCadastroUsuarioElement.addEventListener("submit", proximoForm)

// localStorage formado por chave e valor
// toda chave e valor sao strings
// como acessar ===> window.localStorage
// setItem ===> salva algo no storage
// 1 - parametro -> chave
// 2 - parametro -> valor
// window.localStorage.setItem('usuario', 'Victor')
// getItem ===> capturo algo no storage
// 1 - parametro -> chave
// console.log(window.localStorage.getItem('usuario'))
// removeItem ===> capturo algo no storage
// 1 - parametro -> chave
// window.localStorage.removeItem('usuario')
// clear ===> limpa tudo armazenado
// window.localStorage.clear()
