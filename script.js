const listaAtores = document.getElementById("lista-atores");
const campoPesquisa = document.getElementById("pesquisa");
const quantidade = document.getElementById("quantidade");
const semResultados = document.getElementById("sem-resultados");

// O arquivo usa AAAA-MM-DD. Na tela, mostramos DD/MM/AAAA.
function formatarData(data) {
    const partes = data.split("-");
    return partes[2] + "/" + partes[1] + "/" + partes[0];
}

function mostrarAtores(lista) {
    // Limpa os cards antes de exibir a lista atualizada.
    let cards = "";

    lista.forEach(function (ator) {
        cards += `
            <article class="card">
                <img src="${ator.foto}" alt="Foto de ${ator.nome}">
                <div class="informacoes">
                    <h2>${ator.nome}</h2>
                    <p><strong>País:</strong> ${ator.pais}</p>
                    <p><strong>Nascimento:</strong> ${formatarData(ator.nascimento)}</p>
                </div>
            </article>
        `;
    });

    listaAtores.innerHTML = cards;
    quantidade.textContent = "Exibindo " + lista.length + " de " + atores.length + " artistas";
    semResultados.hidden = lista.length > 0;
}

function filtrarAtores() {
    // Converte os dois textos para minúsculas para ignorar maiúsculas na busca.
    const busca = campoPesquisa.value.toLowerCase().trim();

    const resultado = atores.filter(function (ator) {
        return ator.nome.toLowerCase().includes(busca);
    });

    mostrarAtores(resultado);
}

// Ao abrir a página, exibe todas as pessoas do array original.
mostrarAtores(atores);
