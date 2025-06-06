const form = document.querySelector('form');
const produto = document.getElementById('produto');

const divCirculo = document.createElement('div');
divCirculo.classList.add('circulo');

const ul = document.querySelector('ul');

const divAlerta = document.getElementById('alerta');

form.onsubmit = (e) => {
    e.preventDefault();

    const novoProduto = {
        id: new Date().getTime(),
        nome: produto.value,
        createAt: new Date(),
    }

    addProduto(novoProduto);
}

function addProduto(novoProduto) {
    try {

        const li = document.createElement('li');

        //Criar div1
        const div = document.createElement('div');
        div.classList.add('Card');

        //Criar div2
        const div2 = document.createElement('div');
        div2.classList.add('nome');

        //Criar divCirculo
        const divCirculo = document.createElement('div');
        divCirculo.classList.add('circulo');

        //Criar Span dp nome
        const span = document.createElement('span');
        span.innerText = novoProduto.nome;

        //Adicionar o divCirculo e o span no div2
        div2.append(divCirculo, span);

        //Criar imagem delete
        const img = document.createElement('img');
        img.classList.add('icon-delete');
        img.setAttribute('src', 'assets/icon-delete.svg');
        img.setAttribute('alt', 'delete');

        //Adicionar o div2 e a imagem de delete no div1
        div.append(div2, img);

        li.append(div);

        ul.append(li);

    } catch (error) {
        alert('Erro ao adicionar produto');
    }

}

function cardExcluirAlert() {
    const divAlert = document.createElement('div');
    divAlert.classList.add('Card-excluir');

    const div1 = document.createElement('div');
    div1.classList.add('Card-excluir-div');

    const imgAlert = document.createElement('img');
    imgAlert.setAttribute('src', 'assets/warning-circle-filled.svg');
    imgAlert.setAttribute('alt', 'alerta');

    const span = document.createElement('span');
    span.innerText = 'O item foi removido da lista';

    div1.append(imgAlert, span);

    const imgX = document.createElement('img');
    imgX.setAttribute('src', 'assets/delete-small.svg');
    imgX.setAttribute('alt', 'X');
    imgX.classList.add('img-x');

    divAlert.append(div1, imgX);

    imgX.addEventListener('click', () => {
        divAlert.remove();
    });

    divAlerta.append(divAlert);
}

ul.addEventListener('click', (e) => {
    if (e.target.classList.contains('icon-delete')) {
        e.target.parentElement.parentElement.remove();
        cardExcluirAlert();
    }
});

divCirculo.addEventListener('click', () => {
    divCirculo.classList.toggle('ativo');
});

