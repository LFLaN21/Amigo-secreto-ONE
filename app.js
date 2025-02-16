let amigos = [];
const listaAmigos = document.getElementById('listaAmigos');
const listaFinal = document.getElementById('resultado');
const amigoInput = document.getElementById('amigo');

function adicionarAmigo() {
    const nomeAmigo = amigoInput.value.trim();
    
    if (nomeAmigo === '') {
        alert('Por favor, digite um nome válido.');
        return;
    }
    
    if (amigos.includes(nomeAmigo)) {
        alert('Este nome já foi adicionado.');
        return;
    }

    amigos.push(nomeAmigo);
    atualizarLista();
    amigoInput.value = '';
}

function atualizarLista() {
   listaAmigos.innerHTML = '';

   amigos.forEach(amigo => {
    const novoNome = document.createElement('li');
    novoNome.textContent = amigo;
    listaAmigos.appendChild(novoNome);
   });
}

function sortearAmigo() {
    if (amigos.length < 3) {
        alert('É necessário pelo menos 3 participantes para o sorteio.');
        return;
    }

    const nomeAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[nomeAleatorio];

    listaFinal.innerHTML = '';
    const resultadoDoNome = document.createElement('li');
    resultadoDoNome.textContent = `Amigo sorteado: ${amigoSorteado}`
    listaFinal.appendChild(resultadoDoNome);
}