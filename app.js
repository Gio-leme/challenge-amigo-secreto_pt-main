// Array para armazenar os nomes dos amigos
let amigos = [];

// Função para adicionar um amigo à lista
function adicionarAmigo() {
    const amigoInput = document.getElementById('amigo');
    const nome = amigoInput.value.trim();

    // Valida se o campo de entrada está vazio
    if (nome === '') {
        alert('Por favor, insira um nome válido.');
        return;
    }

    // Adiciona o nome ao array de amigos
    amigos.push(nome);// Array para armazenar os nomes dos amigos
    let amigos = [];
    
    // Função para adicionar um amigo à lista
    function adicionarAmigo() {
        const amigoInput = document.getElementById('amigo');
        const nome = amigoInput.value.trim();
    
        // Valida se o campo de entrada está vazio
        if (nome === '') {
            alert('Por favor, insira um nome válido.');
            return;
        }
    
        // Adiciona o nome ao array de amigos
        amigos.push(nome);
        atualizarLista();
        amigoInput.value = ''; // Limpa o campo de entrada
    }
    
    // Função para atualizar a lista de amigos exibida na página
    function atualizarLista() {
        const listaAmigos = document.getElementById('listaAmigos');
        listaAmigos.innerHTML = ''; // Limpa a lista atual
    
        // Adiciona cada amigo à lista
        amigos.forEach(amigo => {
            const li = document.createElement('li');
            li.textContent = amigo;
            listaAmigos.appendChild(li);
        });
    }
    
    // Função para sortear um amigo secreto
    function sortearAmigo() {
        if (amigos.length === 0) {
            alert('Adicione pelo menos um amigo antes de sortear.');
            return;
        }
    
        const amigoSorteado = amigos[Math.floor(Math.random() * amigos.length)];
        mostrarResultado(amigoSorteado);
    }
    
    // Função para exibir o resultado do sorteio
    function mostrarResultado(amigo) {
        const resultado = document.getElementById('resultado');
        resultado.innerHTML = `<li>O amigo secreto é: <strong>${amigo}</strong></li>`;
    }
    atualizarLista();
    amigoInput.value = ''; // Limpa o campo de entrada
}

// Função para atualizar a lista de amigos exibida na página
function atualizarLista() {
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = ''; // Limpa a lista atual

    // Adiciona cada amigo à lista
    amigos.forEach(amigo => {
        const li = document.createElement('li');
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    });
}

// Função para sortear um amigo secreto
function sortearAmigo() {
    if (amigos.length === 0) {
        alert('Adicione pelo menos um amigo antes de sortear.');
        return;
    }

    const amigoSorteado = amigos[Math.floor(Math.random() * amigos.length)];
    mostrarResultado(amigoSorteado);
}

// Função para exibir o resultado do sorteio
function mostrarResultado(amigo) {
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `<li>O amigo secreto é: <strong>${amigo}</strong></li>`;
}
