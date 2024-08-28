// script.js

// Referências aos elementos do DOM
const formCadastroCliente = document.getElementById('formCadastroCliente');
const nomeClienteInput = document.getElementById('nomeCliente');
const emailClienteInput = document.getElementById('emailCliente');
const eventos = document.querySelectorAll('.evento');
const listaCompras = document.getElementById('listaCompras');

// Variáveis para armazenar dados
let cliente = {};
let compras = [];

// Função para cadastrar o cliente
formCadastroCliente.addEventListener('submit', (e) => {
    e.preventDefault();
    cliente.nome = nomeClienteInput.value;
    cliente.email = emailClienteInput.value;
    alert(`Cliente ${cliente.nome} cadastrado com sucesso!`);
    formCadastroCliente.reset();
});

// Função para adicionar uma compra
function adicionarCompra(eventoNome, eventoPreco) {
    const compra = { eventoNome, eventoPreco };
    compras.push(compra);
    exibirCompras();
}

// Função para exibir as compras
function exibirCompras() {
    listaCompras.innerHTML = ''; // Limpa a lista antes de exibir

    compras.forEach((compra, index) => {
        const li = document.createElement('li');
        li.textContent = `${compra.eventoNome} - R$${compra.eventoPreco}`;
        
        // Botão de excluir
        const excluirBtn = document.createElement('button');
        excluirBtn.textContent = 'Excluir';
        excluirBtn.onclick = () => excluirCompra(index);
        
        li.appendChild(excluirBtn);
        listaCompras.appendChild(li);
    });
}

// Função para excluir uma compra
function excluirCompra(index) {
    compras.splice(index, 1);
    exibirCompras();
}

// Evento de compra
eventos.forEach(evento => {
    evento.querySelector('.btnComprar').addEventListener('click', () => {
        const nome = evento.getAttribute('data-nome');
        const preco = evento.getAttribute('data-preco');
        adicionarCompra(nome, preco);
    });
});
