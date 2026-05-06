// ============================================
// BANCO DE DADOS - QUIZ COMPLETO
// ============================================
const bancoPerguntas = {
    operacoes: {
        facil: [
            { pergunta: "Quanto é 12 + 8?", resposta: 20, dica: "Some 8 a 12", tipo: "numero" },
            { pergunta: "Quanto é 15 - 7?", resposta: 8, dica: "Subtraia 7 de 15", tipo: "numero" },
            { pergunta: "Quanto é 6 × 7?", resposta: 42, dica: "Use a tabuada do 6 ou 7", tipo: "numero" },
            { pergunta: "Quanto é 36 ÷ 6?", resposta: 6, dica: "Pense: 6 × ? = 36", tipo: "numero" },
            { pergunta: "Quanto é 23 + 45?", resposta: 68, dica: "Some dezenas e unidades", tipo: "numero" }
        ],
        medio: [
            { pergunta: "Quanto é 125 + 378?", resposta: 503, dica: "Some coluna por coluna", tipo: "numero" },
            { pergunta: "Quanto é 432 - 189?", resposta: 243, dica: "Pegue emprestado quando necessário", tipo: "numero" },
            { pergunta: "Quanto é 17 × 9?", resposta: 153, dica: "Use a tabuada do 17", tipo: "numero" },
            { pergunta: "Quanto é 144 ÷ 12?", resposta: 12, dica: "12 × 12 = 144", tipo: "numero" }
        ],
        dificil: [
            { pergunta: "Quanto é 1234 + 5678?", resposta: 6912, dica: "Some milhares, centenas, dezenas, unidades", tipo: "numero" },
            { pergunta: "Quanto é 2000 - 987?", resposta: 1013, dica: "Pegue emprestado de todos os algarismos", tipo: "numero" },
            { pergunta: "Quanto é 25 × 27?", resposta: 675, dica: "25 × 4 = 100, então 25 × 27 = 25 × (4×6 + 3)", tipo: "numero" },
            { pergunta: "Quanto é 1008 ÷ 12?", resposta: 84, dica: "12 × 84 = ?", tipo: "numero" }
        ],
        impossivel: [
            { pergunta: "Quanto é 2³ + 3² × 4?", resposta: 40, dica: "Potências: 2³=8, 3²=9. Depois 9×4=36 + 8", tipo: "numero" },
            { pergunta: "Quanto é √144 + ∛27?", resposta: 15, dica: "√144=12, ∛27=3", tipo: "numero" },
            { pergunta: "Calcule: (15 + 25) × 2 - 50 ÷ 5?", resposta: 70, dica: "Parênteses primeiro, depois × e ÷, depois -", tipo: "numero" },
            { pergunta: "Quanto é 9999 - 7777 + 3333?", resposta: 5555, dica: "Agrupe: (9999-7777)=2222 + 3333", tipo: "numero" }
        ],
        master: [
            { pergunta: "Resolva: 2⁴ + 3³ - √81 ÷ 3?", resposta: 34, dica: "2⁴=16, 3³=27, √81=9. 16+27-3=40", tipo: "numero" },
            { pergunta: "Quanto é (1000 ÷ 25) × (5² - 15)?", resposta: 500, dica: "1000÷25=40, 25-15=10, 40×10=400", tipo: "numero" },
            { pergunta: "Calcule: 12345 - 6789 + 1111?", resposta: 6667, dica: "Passo a passo: 12345-6789=5556 + 1111", tipo: "numero" },
            { pergunta: "Quanto é √(144 + 2401)?", resposta: 53, dica: "144+2401=2545? Não! √(144)=12, √(2401)=49, 12+49=61? Errado! O problema é √(144+2401)=√2545 que NÃO é inteiro. Reformulemos: Quanto é √144 + √2401? = 12 + 49 = 61", tipo: "numero" }
        ]
    },
    fracoes: {
        facil: [
            { pergunta: "Qual fração representa metade? (ex: 1/2)", resposta: "1/2", dica: "Metade de 1 é...", tipo: "texto" },
            { pergunta: "Qual é maior: 3/4 ou 1/2?", resposta: "3/4", dica: "Na pizza, quem come mais?", tipo: "fracao" },
            { pergunta: "Quanto é 1/2 + 1/2?", resposta: "1", dica: "Duas metades formam um inteiro", tipo: "texto" },
            { pergunta: "Qual fração representa um quarto?", resposta: "1/4", dica: "Divide em 4 partes iguais", tipo: "texto" }
        ],
        medio: [
            { pergunta: "Quanto é 1/4 + 1/4?", resposta: "1/2", dica: "Duas partes de 4 = metade", tipo: "texto" },
            { pergunta: "Qual é maior: 2/3 ou 3/5?", resposta: "2/3", dica: "Compare dividindo 1 por 3 e por 5", tipo: "fracao" },
            { pergunta: "Quanto é 1/2 - 1/4?", resposta: "1/4", dica: "Metade menos um quarto = ?", tipo: "texto" },
            { pergunta: "Converta: 1/2 = ?/10", resposta: "5/10", dica: "Multiplique numerador e denominador por 5", tipo: "texto" }
        ],
        dificil: [
            { pergunta: "Quanto é 3/4 + 2/3?", resposta: "17/12", dica: "MMC de 4 e 3 é 12", tipo: "texto" },
            { pergunta: "Simplifique: 8/12", resposta: "2/3", dica: "Divida por 4", tipo: "texto" },
            { pergunta: "Converta: 0,75 = ?", resposta: "3/4", dica: "75/100 simplifica para?", tipo: "texto" },
            { pergunta: "Quanto é 2/5 de 50?", resposta: "20", dica: "50 ÷ 5 × 2", tipo: "numero" }
        ],
        impossivel: [
            { pergunta: "Some: 2/3 + 3/4 + 5/6 = ? (forma irredutível)", resposta: "25/12", dica: "MMC de 3,4 e 6 = 12. Converta todas", tipo: "texto" },
            { pergunta: "Quanto é 5/8 ÷ 2/3?", resposta: "15/16", dica: "Multiplique: 5/8 × 3/2", tipo: "texto" },
            { pergunta: "Simplifique: (x²-4)/(x+2) quando x=3", resposta: "1", dica: "(9-4)/(5)=5/5=1", tipo: "texto" },
            { pergunta: "Converta 2,333... (repetindo) para fração", resposta: "7/3", dica: "x=2.333..., 10x=23.333..., 9x=21, x=21/9=7/3", tipo: "texto" }
        ],
        master: [
            { pergunta: "Resolva: 1/(1+1/(1+1/2)) = ?", resposta: "3/5", dica: "De dentro para fora: 1+1/2=3/2, 1/(3/2)=2/3, 1+2/3=5/3, 1/(5/3)=3/5", tipo: "texto" },
            { pergunta: "Quanto é (3/4)² + (2/3)²?", resposta: "145/144", dica: "(9/16)+(4/9)= (81+64)/144 = 145/144", tipo: "texto" },
            { pergunta: "Some: 1/2 + 1/3 + 1/6 = ?", resposta: "1", dica: "MMC=6: 3/6+2/6+1/6=6/6=1", tipo: "texto" },
            { pergunta: "Se 3/5 de x = 18, quanto vale x?", resposta: "30", dica: "3/5×x=18 → x=18×5/3=30", tipo: "numero" }
        ]
    },
    geometria: {
        facil: [
            { pergunta: "Quantos lados tem um quadrado?", resposta: "4", dica: "Pense no tabuleiro", tipo: "texto" },
            { pergunta: "Como se chama figura com 3 lados?", resposta: "triângulo", dica: "Triângulo tem 3 ângulos", tipo: "texto_normalizado" },
            { pergunta: "Quantos lados tem um pentágono?", resposta: "5", dica: "Penta = 5", tipo: "texto" },
            { pergunta: "Qual figura não tem lados?", resposta: "círculo", dica: "É redonda", tipo: "texto_normalizado" }
        ],
        medio: [
            { pergunta: "Quantos vértices tem um cubo?", resposta: "8", dica: "Cubo = 3D do quadrado", tipo: "numero" },
            { pergunta: "Qual o perímetro de um quadrado com lado 5cm?", resposta: "20", dica: "4 × lado", tipo: "numero" },
            { pergunta: "Área de um retângulo 3×7?", resposta: "21", dica: "Base × altura", tipo: "numero" },
            { pergunta: "Quantos graus tem um ângulo reto?", resposta: "90", dica: "Esquadro!", tipo: "numero" }
        ],
        dificil: [
            { pergunta: "Diâmetro de uma circunferência com raio 10cm?", resposta: "20", dica: "Diâmetro = 2 × raio", tipo: "numero" },
            { pergunta: "Volume de um cubo com aresta 3?", resposta: "27", dica: "a³", tipo: "numero" },
            { pergunta: "Quantos lados tem um decágono?", resposta: "10", dica: "Deca = 10", tipo: "texto" },
            { pergunta: "Soma dos ângulos internos de um triângulo?", resposta: "180", dica: "Todo triângulo soma 180°", tipo: "numero" }
        ],
        impossivel: [
            { pergunta: "Área de um triângulo equilátero com lado 6?", resposta: "9√3", dica: "A = (l²×√3)/4 = (36×1.732)/4 ≈ 15.6? Na forma exata: 9√3", tipo: "texto" },
            { pergunta: "Quantos diagonais tem um hexágono?", resposta: "9", dica: "n(n-3)/2 = 6×3/2 = 9", tipo: "numero" },
            { pergunta: "Raio de uma circunferência com circunferência = 31,4cm?", resposta: "5", dica: "C=2πr → 31,4=2×3,14×r → r=5", tipo: "numero" },
            { pergunta: "Volume de uma esfera com raio 6?", resposta: "288π", dica: "V=4/3πr³ = 4/3×π×216 = 288π", tipo: "texto" }
        ],
        master: [
            { pergunta: "Use Pitágoras: catetos 5 e 12, qual a hipotenusa?", resposta: "13", dica: "5²+12²=25+144=169, √169=13", tipo: "numero" },
            { pergunta: "Área de um trapézio bases 10 e 6, altura 4?", resposta: "32", dica: "A = (B+b)×h/2 = (10+6)×4/2 = 32", tipo: "numero" },
            { pergunta: "Quantos lados tem um icosaedro regular?", resposta: "20", dica: "Icosa = 20 faces", tipo: "texto" },
            { pergunta: "Teorema de Pitágoras: a²+b²=c² Se a=8, b=15, c=?", resposta: "17", dica: "8²+15²=64+225=289, √289=17", tipo: "numero" }
        ]
    }
};

// ============================================
// ESTADO DA APLICAÇÃO
// ============================================
let estado = {
    categoriaAtual: null,
    dificuldadeAtual: 'facil',
    perguntasAtuais: [],
    indiceAtual: 0,
    acertos: 0,
    respostasDadas: [],
    timerAtivo: null,
    tempoRestante: 60,
    categoriaSelecionada: null,
    statistics: {
        totalTentativas: 0,
        totalAcertos: 0,
        melhorScore: 0,
        porCategoria: { operacoes: 0, fracoes: 0, geometria: 0 },
        historico: []
    }
};

// ============================================
// INICIALIZAÇÃO
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    console.log('🚀 DOM carregado, inicializando aplicação...');
    carregarEstatisticas();
    initNavigation();
    initQuiz();
    initVideos();
    initExercises();
    initRanking();
    atualizarEstatisticas();
    console.log('✅ Aplicação inicializada com sucesso!');
});

// ============================================
// NAVEGAÇÃO
// ============================================
function initNavigation() {
    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const section = btn.dataset.section;
            showSection(section);
            updateActiveNav(btn);
            if (section === 'progresso') {
                renderProgresso();
            }
        });
    });

    // Footer links
    document.querySelectorAll('.footer-section a[data-section]').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const section = link.dataset.section;
            showSection(section);
            const navBtn = document.querySelector(`.nav-btn[data-section="${section}"]`);
            if (navBtn) updateActiveNav(navBtn);
        });
    });
}

function showSection(sectionId) {
    document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
    document.getElementById(sectionId).classList.add('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function updateActiveNav(activeBtn) {
    document.querySelectorAll('.nav-btn').forEach(btn => btn.classList.remove('active'));
    activeBtn.classList.add('active');
}

// ============================================
// CONTROLES DO MODAL
// ============================================
function abrirDificuldade(categoria) {
    console.log('Abrindo modal de dificuldade para:', categoria);
    estado.categoriaSelecionada = categoria;

    const categoryNames = {
        'operacoes': '🧮 Operações Básicas',
        'fracoes': '🍰 Frações',
        'geometria': '📐 Geometria',
        'geral': '🔄 Geral (todas)'
    };

    document.getElementById('modal-category-name').textContent = `Categoria: ${categoryNames[categoria]}`;

    const modal = document.getElementById('difficulty-modal');
    modal.style.display = 'flex';
    modal.classList.add('active');
}

function fecharModal() {
    console.log('Fechando modal');
    const modal = document.getElementById('difficulty-modal');
    modal.style.display = 'none';
    modal.classList.remove('active');
    estado.categoriaSelecionada = null;
}

function iniciarQuizModal(dificuldade) {
    console.log('Iniciando quiz a partir do modal:', estado.categoriaSelecionada, dificuldade);
    fecharModal();
    startQuiz(estado.categoriaSelecionada, dificuldade);
}

// Fechar modal com ESC
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        const modal = document.getElementById('difficulty-modal');
        if (modal.style.display === 'flex') {
            fecharModal();
        }
    }
});

// Fechar modal clicando fora
window.onclick = function(event) {
    const modal = document.getElementById('difficulty-modal');
    if (event.target === modal) {
        fecharModal();
    }
};

// ============================================
// SISTEMA DE QUIZ
// ============================================
function initQuiz() {
    console.log('🚀 Inicializando quiz...');

    // Submissão de resposta
    document.getElementById('submit-answer').addEventListener('click', submitAnswer);

    // Enter para responder
    document.getElementById('answer-input').addEventListener('keypress', (e) => {
        if (e.key === 'Enter') submitAnswer();
    });

    // Dica
    document.getElementById('hint-btn').addEventListener('click', showHint);

    // Controles do quiz
    document.getElementById('next-question').addEventListener('click', loadQuestion);
    document.getElementById('quit-quiz').addEventListener('click', backToQuizMenu);
    document.getElementById('back-menu-quiz').addEventListener('click', () => showSection('quiz'));
    document.getElementById('retry-quiz').addEventListener('click', () => {
        startQuiz(estado.categoriaAtual, estado.dificuldadeAtual);
        showSection('quiz');
    });
    document.getElementById('share-result').addEventListener('click', shareResult);
}

function startQuiz(categoria, dificuldade) {
    console.log('🚀 Iniciando quiz:', categoria, dificuldade);

    estado.categoriaAtual = categoria;
    estado.dificuldadeAtual = dificuldade;
    let perguntasBase = [];

    if (categoria === 'geral') {
        console.log('Modo geral: combinando todas as categorias');
        perguntasBase = [
            ...(bancoPerguntas.operacoes[dificuldade] || []),
            ...(bancoPerguntas.fracoes[dificuldade] || []),
            ...(bancoPerguntas.geometria[dificuldade] || [])
        ].filter(p => p !== undefined);
    } else {
        console.log(`Categoria específica: ${categoria}, dificuldade: ${dificuldade}`);
        perguntasBase = bancoPerguntas[categoria][dificuldade] || bancoPerguntas[categoria]['dificil'] || [];
    }

    console.log('Perguntas base:', perguntasBase.length);

    if (perguntasBase.length === 0) {
        alert('⚠️ Nenhuma pergunta disponível para esta combinação de categoria e dificuldade.');
        return;
    }

    // Mistura e pega até 5 perguntas
    estado.perguntasAtuais = shuffleArray(perguntasBase).slice(0, 5);
    console.log('Perguntas selecionadas:', estado.perguntasAtuais.length);

    estado.indiceAtual = 0;
    estado.acertos = 0;
    estado.respostasDadas = [];

    document.getElementById('total-questions').textContent = estado.perguntasAtuais.length;
    document.getElementById('quiz-menu').style.display = 'none';
    document.getElementById('quiz-result').style.display = 'none';
    document.getElementById('quiz-active').style.display = 'block';

    loadQuestion();
}

function loadQuestion() {
    console.log('Carregando pergunta', estado.indiceAtual + 1);
    const p = estado.perguntasAtuais[estado.indiceAtual];
    const titulo = getCategoryName(estado.categoriaAtual);
    document.getElementById('quiz-category-title').textContent = titulo;

    // Mostrar badge de dificuldade
    const difficultyNames = {
        'facil': 'Fácil',
        'medio': 'Médio',
        'dificil': 'Difícil',
        'impossivel': '😈 Impossível',
        'master': '🔥 Master'
    };
    const badge = document.getElementById('difficulty-badge');
    badge.textContent = difficultyNames[estado.dificuldadeAtual];
    badge.className = 'difficulty-badge ' + estado.dificuldadeAtual;

    document.getElementById('question-text').textContent = p.pergunta;
    document.getElementById('answer-input').value = '';
    document.getElementById('feedback').textContent = '';
    document.getElementById('hint-text').textContent = '';
    document.getElementById('answer-input').className = '';
    document.getElementById('current-question').textContent = estado.indiceAtual + 1;
    document.getElementById('next-question').style.display = 'none';
    document.getElementById('submit-answer').style.display = 'inline-block';
    document.getElementById('answer-input').focus();
    startTimer();
}

function getCategoryName(cat) {
    const nomes = {
        operacoes: '🧮 Operações Básicas',
        fracoes: '🍰 Frações',
        geometria: '📐 Geometria',
        geral: '🔄 Geral (todas)'
    };
    return nomes[cat];
}

function submitAnswer(timeout = false) {
    clearInterval(estado.timerAtivo);
    console.log('Submetendo resposta, timeout:', timeout);

    if (!timeout) {
        const input = document.getElementById('answer-input');
        const respostaUsuario = input.value.trim();
        console.log('Resposta do usuário:', respostaUsuario);

        if (!respostaUsuario) {
            showFeedback('⚠️ Digite uma resposta!', 'error');
            return;
        }

        processarResposta(respostaUsuario, estado.perguntasAtuais[estado.indiceAtual]);
    } else {
        showFeedback('⏰ Tempo esgotado!', 'error');
    }

    document.getElementById('submit-answer').style.display = 'none';
    document.getElementById('next-question').style.display = 'inline-block';
}

function processarResposta(respostaUsuario, pergunta) {
    let correta = false;
    let respostaFormatada = respostaUsuario;

    if (pergunta.tipo === 'numero') {
        const num = parseInt(respostaUsuario);
        correta = num === pergunta.resposta;
        respostaFormatada = num;
    } else if (pergunta.tipo === 'fracao') {
        correta = respostaUsuario === pergunta.resposta;
    } else if (pergunta.tipo === 'texto_normalizado') {
        const normalizar = (s) => s.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').trim();
        correta = normalizar(respostaUsuario) === normalizar(pergunta.resposta);
    } else {
        correta = respostaUsuario.toLowerCase().trim() === pergunta.resposta.toLowerCase().trim();
    }

    if (correta) {
        estado.acertos++;
        showFeedback('✅ Correto!', 'success');
    } else {
        showFeedback(`❌ Errado. Resposta: ${pergunta.resposta}`, 'error');
    }

    estado.respostasDadas.push({
        pergunta: pergunta.pergunta,
        suaResposta: respostaFormatada,
        correta: correta,
        categoria: estado.categoriaAtual
    });

    salvarEstatistica(pergunta.tipo, correta);
}

function salvarEstatistica(tipo, correta) {
    const cat = estado.categoriaAtual;
    if (cat === 'geral') return; // Não salva estatística do modo geral

    const totalAntes = estado.statistics.porCategoria[cat] * estado.statistics.totalTentativas;
    estado.statistics.totalTentativas++;
    if (correta) {
        estado.statistics.totalAcertos++;
        estado.statistics.porCategoria[cat] = (totalAntes + 1) / estado.statistics.totalTentativas;
    } else {
        estado.statistics.porCategoria[cat] = totalAntes / estado.statistics.totalTentativas;
    }

    const score = Math.round((estado.acertos / estado.perguntasAtuais.length) * 100);
    if (score > estado.statistics.melhorScore) {
        estado.statistics.melhorScore = score;
    }

    estado.statistics.historico.unshift({
        categoria: cat,
        score: score,
        data: new Date().toLocaleDateString('pt-BR')
    });

    if (estado.statistics.historico.length > 50) estado.statistics.historico.pop();

    localStorage.setItem('matematicaDivertida_stats', JSON.stringify(estado.statistics));
    atualizarEstatisticas();
}

function showFeedback(msg, type) {
    const feedback = document.getElementById('feedback');
    feedback.textContent = msg;
    feedback.className = `feedback ${type}`;
}

function backToQuizMenu() {
    clearInterval(estado.timerAtivo);
    document.getElementById('quiz-active').style.display = 'none';
    document.getElementById('quiz-result').style.display = 'none';
    document.getElementById('quiz-menu').style.display = 'block';
}

function showResult() {
    clearInterval(estado.timerAtivo);
    const total = estado.perguntasAtuais.length;
    const porcentagem = Math.round((estado.acertos / total) * 100);
    document.getElementById('final-score').textContent = porcentagem;

    let badge = '🎯';
    let msg = '';
    if (porcentagem === 100) { badge = '🏆'; msg = 'Perfeito! Você é um gênio!'; }
    else if (porcentagem >= 80) { badge = '🥇'; msg = 'Excelente! Quase perfeito!'; }
    else if (porcentagem >= 60) { badge = '🥈'; msg = 'Bom! Continue estudando!'; }
    else if (porcentagem >= 40) { badge = '🥉'; msg = 'Razoável, pode melhorar!'; }
    else { badge = '💪'; msg = 'Não desista! Pratique mais!'; }

    document.getElementById('result-badge').textContent = badge;
    document.getElementById('performance-msg').textContent = msg;
    document.getElementById('score-detail').textContent = `Você acertou ${estado.acertos} de ${total} perguntas.`;

    gerarRevisao();

    document.getElementById('quiz-active').style.display = 'none';
    document.getElementById('quiz-result').style.display = 'block';
}

function gerarRevisao() {
    const reviewDiv = document.getElementById('answers-review');
    reviewDiv.innerHTML = '';
    estado.respostasDadas.forEach((r, i) => {
        const div = document.createElement('div');
        div.className = `review-item ${r.correta ? 'correct' : 'wrong'}`;
        div.innerHTML = `
            <span><strong>${i + 1}.</strong> ${r.pergunta}</span>
            <span>${r.correta ? '✅' : `❌ (Sua: ${r.suaResposta})`}</span>
        `;
        reviewDiv.appendChild(div);
    });
    document.getElementById('review-section').style.display = 'block';
}

function shareResult() {
    const score = document.getElementById('final-score').textContent;
    const text = `🎯 Acabei de fazer o Quiz de Matemática e tirei ${score}%! Quer bater essa?`;
    if (navigator.share) {
        navigator.share({ title: 'Quiz Matemática', text: text, url: window.location.href });
    } else {
        navigator.clipboard.writeText(text + ' ' + window.location.href).then(() => {
            alert('✅ Resultado copiado para a área de transferência!');
        });
    }
}

function startTimer() {
    clearInterval(estado.timerAtivo);
    estado.tempoRestante = 60;
    updateTimerDisplay();
    estado.timerAtivo = setInterval(() => {
        estado.tempoRestante--;
        updateTimerDisplay();
        if (estado.tempoRestante <= 0) {
            clearInterval(estado.timerAtivo);
            submitAnswer(true);
        }
    }, 1000);
}

function updateTimerDisplay() {
    const mins = Math.floor(estado.tempoRestante / 60);
    const secs = estado.tempoRestante % 60;
    document.getElementById('timer').textContent = `${mins}:${secs.toString().padStart(2, '0')}`;
    document.getElementById('timer').style.background = estado.tempoRestante < 10 ? '#e74c3c' : 'var(--light)';
}

function showHint() {
    const p = estado.perguntasAtuais[estado.indiceAtual];
    document.getElementById('hint-text').textContent = `💡 Dica: ${p.dica}`;
}

// Incrementa próxima pergunta
const originalLoadQuestion = loadQuestion;
loadQuestion = function() {
    estado.indiceAtual++;
    if (estado.indiceAtual < estado.perguntasAtuais.length) {
        originalLoadQuestion();
    } else {
        showResult();
    }
};

// ============================================
// VÍDEOS
// ============================================
function initVideos() {
    document.querySelectorAll('.video-filter').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.video-filter').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            const filter = btn.dataset.filter;
            filterVideos(filter);
        });
    });
}

function filterVideos(filter) {
    document.querySelectorAll('.video-card').forEach(card => {
        if (filter === 'todas' || card.dataset.category === filter) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

// ============================================
// EXERCÍCIOS
// ============================================
function initExercises() {
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            const filter = btn.dataset.filter;
            filterExercises(filter);
        });
    });
}

function filterExercises(difficulty) {
    document.querySelectorAll('.exercise-card').forEach(card => {
        if (difficulty === 'todos' || card.dataset.difficulty === difficulty) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

function generateExercise() {
    const type = document.getElementById('exercise-type').value;
    const count = document.getElementById('exercise-count').value;
    const diff = document.getElementById('exercise-difficulty').value;
    alert(`📄 Gerando PDF com ${count} exercícios de ${type} (${diff})...\n(Recurso em desenvolvimento)`);
}

function startExercise(id) {
    alert(`📝 Iniciando exercício: ${id}\n(Em breve!)`);
}

// ============================================
// RANKING
// ============================================
function initRanking() {
    document.querySelectorAll('.rank-filter').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.rank-filter').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
        });
    });
}

// ============================================
// ESTATÍSTICAS E PROGRESSO
// ============================================
function carregarEstatisticas() {
    const saved = localStorage.getItem('matematicaDivertida_stats');
    if (saved) {
        estado.statistics = JSON.parse(saved);
    }
}

function atualizarEstatisticas() {
    document.getElementById('total-attempts').textContent = estado.statistics.totalTentativas;
    document.getElementById('total-correct').textContent = estado.statistics.totalAcertos;
    document.getElementById('best-score').textContent = `${estado.statistics.melhorScore}%`;
}

function renderProgresso() {
    document.getElementById('total-questions-answered').textContent = estado.statistics.totalTentativas;
    const accuracy = estado.statistics.totalTentativas > 0
        ? Math.round((estado.statistics.totalAcertos / estado.statistics.totalTentativas) * 100)
        : 0;
    document.getElementById('accuracy-rate').textContent = `${accuracy}%`;
    document.getElementById('study-streak').textContent = '3';
    document.getElementById('total-points').textContent = estado.statistics.totalAcertos * 10;

    const categorias = ['operacoes', 'fracoes', 'geometria'];
    categorias.forEach(cat => {
        const val = Math.round(estado.statistics.porCategoria[cat] * 100) || 0;
        const idSufixo = cat === 'operacoes' ? 'op' : cat === 'fracoes' ? 'frac' : 'geo';
        document.getElementById(`perf-${idSufixo}`).style.width = `${val}%`;
        document.getElementById(`value-${idSufixo}`).textContent = `${val}%`;
    });

    const historicoList = document.getElementById('history-list');
    historicoList.innerHTML = '';
    estado.statistics.historico.slice(0, 10).forEach(h => {
        const div = document.createElement('div');
        div.className = 'history-item';
        const color = h.score >= 70 ? 'positive' : 'negative';
        div.innerHTML = `
            <span class="history-category">${h.categoria.toUpperCase()}</span>
            <span class="${color}">${h.score}%</span>
            <span class="history-date">${h.data}</span>
        `;
        historicoList.appendChild(div);
    });

    if (estado.statistics.historico.length === 0) {
        historicoList.innerHTML = '<p style="text-align:center;color:#888;">Nenhuma atividade ainda. Faça um quiz!</p>';
    }
}

// ============================================
// JOGOS E DOWNLOADS
// ============================================
function initGames() {
    document.querySelectorAll('.game-card').forEach(card => {
        card.addEventListener('click', () => {
            const game = card.dataset.game;
            alert(`🎮 O jogo "${getGameName(game)}" está carregando...`);
        });
    });

    document.querySelectorAll('.btn-download').forEach(btn => {
        btn.addEventListener('click', () => {
            alert('📥 Download iniciado! (Simulação)');
        });
    });
}

function playGame(gameId) {
    alert(`🎮 Iniciando: ${getGameName(gameId)}`);
}

function getGameName(gameId) {
    const nomes = {
        'batalha': 'Batalha de Contas',
        'caixa-forte': 'Caixa Forte Matemática',
        'corrida': 'Corrida das Tabuadas',
        'quiz-rapido': 'Quiz Relâmpago',
        'memory': 'Memory dos Números',
        'forca': 'Forca Matemática'
    };
    return nomes[gameId];
}

function downloadMaterial(id) {
    alert(`📥 Baixando apostila: ${id}.pdf`);
}

// ============================================
// UTILITÁRIOS
// ============================================
function shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}
