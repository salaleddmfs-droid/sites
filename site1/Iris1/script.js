// ============== PROBLEMAS PRÁTICOS ==============
function toggleProblemas() {
    const content = document.getElementById('problemas-content');
    const toggle = document.getElementById('problemas-toggle');
    
    if (content.style.display === 'none') {
        content.style.display = 'block';
        toggle.textContent = '▲';
    } else {
        content.style.display = 'none';
        toggle.textContent = '▼';
    }
}

function toggleSolucao(numero) {
    const solucao = document.getElementById(`solucao-${numero}`);
    solucao.classList.toggle('show');
}

// ============== CALCULADORAS ==============

// Calculadora de Retângulo
function calcularRetangulo() {
    const comp = parseFloat(document.getElementById('rect-comp').value);
    const alt = parseFloat(document.getElementById('rect-alt').value);
    const result = document.getElementById('rect-result');

    if (isNaN(comp) || isNaN(alt) || comp <= 0 || alt <= 0) {
        result.textContent = '⚠️ Por favor, insira valores válidos!';
        result.classList.add('show');
        result.style.background = '#ffebee';
        result.style.color = '#c62828';
        return;
    }

    const area = comp * alt;
    result.textContent = `✅ Área = ${comp} × ${alt} = ${area} cm²`;
    result.classList.add('show');
    result.style.background = '#f0f2ff';
    result.style.color = '#667eea';
}

// Calculadora de Quadrado
function calcularQuadrado() {
    const lado = parseFloat(document.getElementById('quad-lado').value);
    const result = document.getElementById('quad-result');

    if (isNaN(lado) || lado <= 0) {
        result.textContent = '⚠️ Por favor, insira um valor válido!';
        result.classList.add('show');
        result.style.background = '#ffebee';
        result.style.color = '#c62828';
        return;
    }

    const area = lado * lado;
    result.textContent = `✅ Área = ${lado} × ${lado} = ${area} cm²`;
    result.classList.add('show');
    result.style.background = '#f0f2ff';
    result.style.color = '#667eea';
}

// Calculadora de Triângulo
function calcularTriangulo() {
    const base = parseFloat(document.getElementById('tri-base').value);
    const alt = parseFloat(document.getElementById('tri-alt').value);
    const result = document.getElementById('tri-result');

    if (isNaN(base) || isNaN(alt) || base <= 0 || alt <= 0) {
        result.textContent = '⚠️ Por favor, insira valores válidos!';
        result.classList.add('show');
        result.style.background = '#ffebee';
        result.style.color = '#c62828';
        return;
    }

    const area = (base * alt) / 2;
    result.textContent = `✅ Área = (${base} × ${alt}) ÷ 2 = ${area} cm²`;
    result.classList.add('show');
    result.style.background = '#f0f2ff';
    result.style.color = '#667eea';
}

// Mostrar Respostas dos Exercícios
function mostrarResposta(exercicio) {
    const elemento = document.getElementById(`resp-${exercicio}`);
    elemento.classList.toggle('show');
}

// ============== CURIOSIDADES ==============
const curiosidades = [
    "A área da superfície da Terra é de aproximadamente 510 milhões de km²!",
    "Um campo de futebol tem cerca de 7.140 m² de área.",
    "A área de um bilhete de metrô é de cerca de 30 cm².",
    "O maior paralelogramo do mundo é o Campo de Marte em Paris, com mais de 25 hectares!",
    "Um quadrado com lado de 1 km tem área de 1 km², que equivale a 100 hectares.",
    "A área de uma folha A4 é de aproximadamente 623,7 cm².",
    "O triângulo das Bermudas tem uma área de cerca de 1.140.000 km².",
    "Um retângulo com 10 cm × 5 cm tem a mesma área que dois quadrados de 5 cm de lado.",
    "A área de um círculo é π vezes o raio ao quadrado. Para um círculo de raio 1 cm, a área é π cm²!",
    "O maior paralelogramo natural é o Deserto do Saara, com mais de 9 milhões de km².",
    "Um triângulo equilátero com lado 10 cm tem área de aproximadamente 43,3 cm².",
    "A área de uma piscina olímpica é de 2.500 m².",
    "Um paralelogramo inclinado tem a mesma área que um retângulo com as mesmas dimensões base e altura.",
    "A área de um losango (rombo) é igual à metade do produto das diagonais.",
    "O menor quadrado possível tem área zero - é apenas um ponto!",
    "A área da Grande Muralha da China, se fosse um retângulo, seria enorme!",
    "Um triângulo retângulo com catetos 3 cm e 4 cm tem área de 6 cm².",
    "A área de uma sala de aula típica é de cerca de 50-70 m².",
    "Um paralelogramo com base 8 cm e altura 6 cm tem área de 48 cm², igual a um retângulo 8×6.",
    "A área de um trapézio é igual à média das bases vezes a altura."
];

let curiosidadeAtual = 0;

function mostrarCuriosidade(index) {
    const elemento = document.getElementById('curiosidade-texto');
    elemento.textContent = curiosidades[index];
    elemento.style.animation = 'none';
    setTimeout(() => {
        elemento.style.animation = 'fadeIn 0.5s ease-in-out';
    }, 10);
}

function mudarCuriosidade() {
    let novaCuriosidade;
    do {
        novaCuriosidade = Math.floor(Math.random() * curiosidades.length);
    } while (novaCuriosidade === curiosidadeAtual && curiosidades.length > 1);
    
    curiosidadeAtual = novaCuriosidade;
    mostrarCuriosidade(curiosidadeAtual);
}

// ============== QUIZ ==============

const perguntas = [
    {
        pergunta: "Qual é a área de um retângulo com comprimento 6 cm e altura 4 cm?",
        opcoes: ["10 cm²", "24 cm²", "20 cm²", "12 cm²"],
        respostaCorreta: 1,
        explicacao: "Retângulo: A = comprimento × altura = 6 × 4 = 24 cm²"
    },
    {
        pergunta: "Um quadrado tem lado de 5 cm. Qual é sua área?",
        opcoes: ["10 cm²", "25 cm²", "20 cm²", "15 cm²"],
        respostaCorreta: 1,
        explicacao: "Quadrado: A = lado × lado = 5 × 5 = 25 cm²"
    },
    {
        pergunta: "Um triângulo tem base 8 cm e altura 6 cm. Qual é sua área?",
        opcoes: ["48 cm²", "24 cm²", "14 cm²", "28 cm²"],
        respostaCorreta: 1,
        explicacao: "Triângulo: A = (base × altura) ÷ 2 = (8 × 6) ÷ 2 = 24 cm²"
    },
    {
        pergunta: "Um quadrado com lado 3 cm tem qual área?",
        opcoes: ["6 cm²", "12 cm²", "9 cm²", "8 cm²"],
        respostaCorreta: 2,
        explicacao: "Quadrado: A = 3 × 3 = 9 cm²"
    },
    {
        pergunta: "Qual é a área de um retângulo com 7 m de comprimento e 3 m de altura?",
        opcoes: ["10 m²", "20 m²", "21 m²", "18 m²"],
        respostaCorreta: 2,
        explicacao: "Retângulo: A = 7 × 3 = 21 m²"
    },
    {
        pergunta: "Um triângulo com base 10 cm e altura 4 cm tem qual área?",
        opcoes: ["40 cm²", "20 cm²", "30 cm²", "25 cm²"],
        respostaCorreta: 1,
        explicacao: "Triângulo: A = (10 × 4) ÷ 2 = 40 ÷ 2 = 20 cm²"
    },
    {
        pergunta: "Qual figura tem a maior área: um quadrado de 4 cm ou um retângulo de 5 cm × 3 cm?",
        opcoes: ["Quadrado (16 cm²)", "Retângulo (15 cm²)", "Têm a mesma área", "Não é possível saber"],
        respostaCorreta: 0,
        explicacao: "Quadrado: 4 × 4 = 16 cm² | Retângulo: 5 × 3 = 15 cm². Quadrado é maior!"
    },
    {
        pergunta: "Um retângulo tem 12 cm de comprimento. Se sua área é 48 cm², qual é sua altura?",
        opcoes: ["3 cm", "4 cm", "5 cm", "6 cm"],
        respostaCorreta: 1,
        explicacao: "Área = comprimento × altura → 48 = 12 × altura → altura = 48 ÷ 12 = 4 cm"
    },
    {
        pergunta: "Se a área de um triângulo é 30 cm² e sua base é 10 cm, qual é sua altura?",
        opcoes: ["3 cm", "5 cm", "6 cm", "8 cm"],
        respostaCorreta: 2,
        explicacao: "Área = (base × altura) ÷ 2 → 30 = (10 × altura) ÷ 2 → altura = 6 cm"
    },
    {
        pergunta: "Um quadrado tem área de 49 cm². Qual é o tamanho de seu lado?",
        opcoes: ["6 cm", "7 cm", "8 cm", "9 cm"],
        respostaCorreta: 1,
        explicacao: "Quadrado: A = lado² → 49 = lado² → lado = 7 cm"
    }
];

let perguntaAtual = 0;
let pontuacao = 0;
let respostas = [];
let respondida = false;

function iniciarQuiz() {
    perguntaAtual = 0;
    pontuacao = 0;
    respostas = [];
    respondida = false;
    
    document.getElementById('quiz-box').style.display = 'block';
    document.getElementById('quiz-resultado').style.display = 'none';
    
    carregarPergunta();
}

function carregarPergunta() {
    const pergunta = perguntas[perguntaAtual];
    respondida = false;
    
    // Atualizar número da pergunta
    document.getElementById('quiz-pergunta-numero').textContent = `Pergunta ${perguntaAtual + 1} de ${perguntas.length}`;
    
    // Atualizar barra de progresso
    const progresso = ((perguntaAtual + 1) / perguntas.length) * 100;
    document.getElementById('quiz-progress-bar').style.width = progresso + '%';
    
    // Atualizar pergunta
    document.getElementById('quiz-pergunta').textContent = pergunta.pergunta;
    
    // Atualizar opções
    const opcoesDiv = document.getElementById('quiz-opcoes');
    opcoesDiv.innerHTML = '';
    
    pergunta.opcoes.forEach((opcao, index) => {
        const botao = document.createElement('div');
        botao.className = 'quiz-option';
        botao.textContent = opcao;
        botao.onclick = () => selecionarResposta(index, botao);
        opcoesDiv.appendChild(botao);
    });
    
    document.getElementById('quiz-btn-proximo').style.display = 'none';
}

function selecionarResposta(index, elemento) {
    if (respondida) return;
    
    respondida = true;
    const pergunta = perguntas[perguntaAtual];
    const todasOpcoes = document.querySelectorAll('.quiz-option');
    
    // Desabilitar todas as opções
    todasOpcoes.forEach(op => op.classList.add('disabled'));
    
    // Mostrar resposta correta
    if (index === pergunta.respostaCorreta) {
        elemento.classList.add('correct');
        pontuacao++;
        respostas.push(true);
    } else {
        elemento.classList.add('incorrect');
        todasOpcoes[pergunta.respostaCorreta].classList.add('correct');
        respostas.push(false);
    }
    
    // Mostrar botão próxima pergunta
    document.getElementById('quiz-btn-proximo').style.display = 'block';
}

function proximaPerguntaQuiz() {
    perguntaAtual++;
    
    if (perguntaAtual < perguntas.length) {
        carregarPergunta();
    } else {
        mostrarResultados();
    }
}

function mostrarResultados() {
    document.getElementById('quiz-box').style.display = 'none';
    document.getElementById('quiz-resultado').style.display = 'block';
    
    const percentual = Math.round((pontuacao / perguntas.length) * 100);
    
    document.getElementById('quiz-score-text').textContent = `Você acertou ${pontuacao} de ${perguntas.length} questões!`;
    document.getElementById('quiz-percentage').textContent = percentual + '%';
    
    let feedback = '';
    if (percentual === 100) {
        feedback = '🌟 Perfeito! Você é um expert em áreas! Continue assim!';
    } else if (percentual >= 80) {
        feedback = '🎯 Excelente! Você entende bem sobre áreas! Parabéns!';
    } else if (percentual >= 60) {
        feedback = '👍 Bom trabalho! Você está no caminho certo. Revise alguns conceitos!';
    } else if (percentual >= 40) {
        feedback = '📚 Estude mais sobre áreas. Você consegue! Tente novamente!';
    } else {
        feedback = '💪 Não desista! Revise a matéria e tente novamente. Você vai conseguir!';
    }
    
    document.getElementById('quiz-feedback').textContent = feedback;
}

function reiniciarQuiz() {
    iniciarQuiz();
}

// ============== VERDADEIRO OU FALSO ==============

const perguntasVF = [
    { pergunta: "A área de um quadrado com lado de 5 cm é 25 cm².", resposta: true },
    { pergunta: "Um retângulo com 6 cm de comprimento e 4 cm de altura tem área de 10 cm².", resposta: false },
    { pergunta: "A fórmula da área do triângulo é (base × altura) ÷ 2.", resposta: true },
    { pergunta: "Dois quadrados com lados de 3 cm têm área total de 9 cm².", resposta: false },
    { pergunta: "Um quadrado com área de 36 cm² tem lado de 6 cm.", resposta: true },
    { pergunta: "A área é sempre medida em unidades quadradas (cm², m², etc.).", resposta: true },
    { pergunta: "Um retângulo com 10 cm × 5 cm tem a mesma área que um quadrado de 7 cm de lado.", resposta: false },
    { pergunta: "Se duplicarmos o lado de um quadrado, a área fica 4 vezes maior.", resposta: true },
    { pergunta: "Um triângulo com base 8 cm e altura 6 cm tem área de 48 cm².", resposta: false },
    { pergunta: "O perímetro e a área são a mesma coisa.", resposta: false },
    { pergunta: "Um retângulo com área de 24 cm² e comprimento de 8 cm tem altura de 3 cm.", resposta: true },
    { pergunta: "A área de um triângulo é sempre maior que a de um quadrado.", resposta: false },
    { pergunta: "Um quadrado é um tipo especial de retângulo.", resposta: true },
    { pergunta: "Se a base de um triângulo é 10 cm e a área é 30 cm², a altura é 6 cm.", resposta: true },
    { pergunta: "Um retângulo com 7 m × 3 m tem área de 10 m².", resposta: false },
    { pergunta: "A área de um quadrado com lado de 1 cm é 1 cm².", resposta: true },
    { pergunta: "Dois triângulos iguais formam sempre um retângulo.", resposta: true },
    { pergunta: "Um quadrado com perímetro de 20 cm tem área de 20 cm².", resposta: false },
    { pergunta: "A área de um retângulo 4 cm × 5 cm é igual à de um quadrado de 4 cm de lado.", resposta: false },
    { pergunta: "Um triângulo com base 12 cm e altura 5 cm tem área de 30 cm².", resposta: true },
    { pergunta: "Se aumentarmos o comprimento de um retângulo em 2 cm, a área sempre aumenta 2 cm².", resposta: false },
    { pergunta: "Um quadrado com lado de 10 cm tem área de 100 cm².", resposta: true },
    { pergunta: "A área de um triângulo é metade da área de um retângulo com mesma base e altura.", resposta: true },
    { pergunta: "Um retângulo com 9 cm × 2 cm tem área maior que um quadrado de 4 cm de lado.", resposta: true },
    { pergunta: "Se o lado de um quadrado é 7 cm, sua área é 14 cm².", resposta: false },
    { pergunta: "Um triângulo com área de 18 cm² e base de 6 cm tem altura de 6 cm.", resposta: true },
    { pergunta: "A área de um retângulo 3 cm × 8 cm é 24 cm².", resposta: true },
    { pergunta: "Todas as figuras com o mesmo perímetro têm a mesma área.", resposta: false },
    { pergunta: "Um quadrado com área de 49 cm² tem lado de 7 cm.", resposta: true },
    { pergunta: "A área de um triângulo com base 10 cm e altura 10 cm é 100 cm².", resposta: false },
    { pergunta: "Um retângulo com área de 40 cm² pode ter dimensões 5 cm × 8 cm.", resposta: true },
    { pergunta: "Se triplicarmos o lado de um quadrado, a área fica 9 vezes maior.", resposta: true },
    { pergunta: "Um triângulo sempre tem área menor que um retângulo.", resposta: false },
    { pergunta: "A área de um quadrado com lado de 2,5 cm é 6,25 cm².", resposta: true },
    { pergunta: "Um retângulo com 15 cm × 4 cm tem área de 60 cm².", resposta: true },
    { pergunta: "Se a área de um quadrado é 81 cm², seu lado é 9 cm.", resposta: true },
    { pergunta: "Um triângulo com base 14 cm e altura 4 cm tem área de 56 cm².", resposta: false },
    { pergunta: "A área de um retângulo 6 cm × 6 cm é igual à de um quadrado de 6 cm de lado.", resposta: true },
    { pergunta: "Um quadrado com lado de 12 cm tem área de 144 cm².", resposta: true },
    { pergunta: "Se dividirmos o lado de um quadrado por 2, a área fica dividida por 2.", resposta: false }
];

let perguntasVFSelecionadas = [];
let perguntaAtualVF = 0;
let pontuacaoVF = 0;
let respondidaVF = false;

function iniciarVF() {
    // Embaralhar e selecionar 20 perguntas aleatórias
    const perguntasEmbaralhadas = [...perguntasVF].sort(() => Math.random() - 0.5);
    perguntasVFSelecionadas = perguntasEmbaralhadas.slice(0, 20);
    
    perguntaAtualVF = 0;
    pontuacaoVF = 0;
    respondidaVF = false;
    
    document.getElementById('vf-quiz-container').style.display = 'block';
    document.getElementById('vf-resultado').style.display = 'none';
    
    carregarPerguntaVF();
}

function carregarPerguntaVF() {
    respondidaVF = false;
    
    const pergunta = perguntasVFSelecionadas[perguntaAtualVF];
    
    document.getElementById('vf-pergunta-numero').textContent = `Pergunta ${perguntaAtualVF + 1} de 20`;
    document.getElementById('vf-pontuacao').textContent = `Pontuação: ${pontuacaoVF}/200`;
    document.getElementById('vf-pergunta-texto').textContent = pergunta.pergunta;
    
    const progresso = ((perguntaAtualVF + 1) / 20) * 100;
    document.getElementById('vf-progress').style.width = progresso + '%';
    
    document.getElementById('vf-feedback').style.display = 'none';
    document.getElementById('vf-btn-proximo').style.display = 'none';
    
    // Reativar botões
    const botoes = document.querySelectorAll('.vf-btn');
    botoes.forEach(btn => {
        btn.disabled = false;
        btn.classList.remove('vf-correto', 'vf-incorreto');
    });
}

function responderVF(resposta) {
    if (respondidaVF) return;
    
    respondidaVF = true;
    const pergunta = perguntasVFSelecionadas[perguntaAtualVF];
    const feedback = document.getElementById('vf-feedback');
    const botoes = document.querySelectorAll('.vf-btn');
    
    // Desabilitar botões
    botoes.forEach(btn => btn.disabled = true);
    
    if (resposta === pergunta.resposta) {
        pontuacaoVF += 10;
        feedback.innerHTML = '<p class="vf-correto-msg">✓ Correto! +10 pontos</p>';
        feedback.className = 'vf-feedback vf-feedback-correto';
        
        // Destacar botão correto
        if (resposta) {
            document.querySelector('.vf-btn-verdadeiro').classList.add('vf-correto');
        } else {
            document.querySelector('.vf-btn-falso').classList.add('vf-correto');
        }
    } else {
        feedback.innerHTML = '<p class="vf-incorreto-msg">✗ Incorreto! A resposta correta é: ' + 
                            (pergunta.resposta ? 'Verdadeiro' : 'Falso') + '</p>';
        feedback.className = 'vf-feedback vf-feedback-incorreto';
        
        // Destacar botão incorreto e correto
        if (resposta) {
            document.querySelector('.vf-btn-verdadeiro').classList.add('vf-incorreto');
            document.querySelector('.vf-btn-falso').classList.add('vf-correto');
        } else {
            document.querySelector('.vf-btn-falso').classList.add('vf-incorreto');
            document.querySelector('.vf-btn-verdadeiro').classList.add('vf-correto');
        }
    }
    
    feedback.style.display = 'block';
    document.getElementById('vf-pontuacao').textContent = `Pontuação: ${pontuacaoVF}/200`;
    document.getElementById('vf-btn-proximo').style.display = 'block';
}

function proximaPerguntaVF() {
    perguntaAtualVF++;
    
    if (perguntaAtualVF < 20) {
        carregarPerguntaVF();
    } else {
        mostrarResultadoVF();
    }
}

function mostrarResultadoVF() {
    document.getElementById('vf-quiz-container').style.display = 'none';
    document.getElementById('vf-resultado').style.display = 'block';
    
    const percentual = (pontuacaoVF / 200) * 100;
    
    document.getElementById('vf-score-final').textContent = `Você fez ${pontuacaoVF} de 200 pontos!`;
    document.getElementById('vf-percentage').textContent = Math.round(percentual) + '%';
    
    let feedback = '';
    if (percentual === 100) {
        feedback = '🌟 Perfeito! Você acertou todas! És um génio das áreas!';
    } else if (percentual >= 90) {
        feedback = '🎯 Excelente! Quase perfeito! Parabéns!';
    } else if (percentual >= 80) {
        feedback = '👏 Muito bom! Você domina bem o assunto!';
    } else if (percentual >= 70) {
        feedback = '👍 Bom trabalho! Continue praticando!';
    } else if (percentual >= 60) {
        feedback = '📚 Razoável! Revise alguns conceitos e tente novamente!';
    } else {
        feedback = '💪 Continue estudando! Você vai melhorar!';
    }
    
    document.getElementById('vf-feedback-final').textContent = feedback;
}

function reiniciarVF() {
    iniciarVF();
}

// Iniciar quiz quando página carrega
document.addEventListener('DOMContentLoaded', function() {
    iniciarQuiz();
    iniciarVF();
    mostrarCuriosidade(Math.floor(Math.random() * curiosidades.length));
    
    // Permitir Enter para calcular
    const inputs = document.querySelectorAll('input[type="number"]');
    
    inputs.forEach(input => {
        input.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                // Encontrar o botão mais próximo e clicar
                const button = this.closest('.calc-card').querySelector('button');
                if (button) {
                    button.click();
                }
            }
        });
    });

    // Smooth scroll para links de navegação
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});
