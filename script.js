document.querySelector('.resultado').addEventListener('click', function () {
    const form = document.querySelector('#formulario');
    const selects = form.querySelectorAll('select');

    let total = 0;

    selects.forEach(select => {
        total += Number(select.value);
    });

    mostrarResultado(total);
});

function mostrarResultado(pontuacao) {
    const resultadoDiv = document.querySelector('#resultado');
    let mensagem = '';
    let cor = '';

    if (pontuacao >= 7) {
        mensagem = '🚨 Alto risco! Avaliação médica imediata.';
        cor = '#f44336';
    } else if (pontuacao >= 4) {
        mensagem = '⚠️ Risco moderado. Monitorar de perto.';
        cor = '#ff9800';
    } else {
        mensagem = '✅ Situação estável. Continuar observação.';
        cor = '#4caf50';
    }

    resultadoDiv.innerHTML = `
        <h2>Resultado</h2>
        <p><strong>Pontuação total:</strong> ${pontuacao}</p>
        <p>${mensagem}</p>
    `;
    resultadoDiv.style.borderColor = cor;
    resultadoDiv.style.backgroundColor = cor + '20';
    resultadoDiv.style.color = '#333';
}

