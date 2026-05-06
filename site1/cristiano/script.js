/* ========================================
   JAVASCRIPT - HISTÓRIA E GEOGRAFIA DE PORTUGAL
   Funcionalidades interactivas do site
   ======================================== */

// ========================================
// ARRAY DE CURIOSIDADES
// ========================================
const curiosidades = [
    "Portugal é um dos países mais antigos da Europa, com fronteiras quase inalteradas desde o século XIII!",
    "O nome Portugal vem de 'Portus Cale', a antiga designação de Vila Nova de Gaia!",
    "Portugal foi o primeiro país do mundo a ter fronteiras definidas num tratado internacional!",
    "O mosteiro dos Jerónimos, em Lisboa, foi construído em apenas 30 anos (1500-1530)!",
    "Portugal descobriu 57 países ao longo da história das Navegações!",
    "A Universidade de Coimbra é uma das mais antigas da Europa, fundada em 1290!",
    "Portugal tem 17 locais classificados como Património Mundial pela UNESCO!",
    "O Rio Tejo é o rio mais longo de Portugal, com 1.007 km!",
    "A Serra da Estrela tem 1.993 metros de altitude, sendo o ponto mais alto de Portugal continental!",
    "Portugal foi o primeiro país a abolir a pena de morte em toda a sua história!",
    "O Dia de Portugal (10 de Junho) celebra também Camões, o poeta mais importante!",
    "Os portugueses foram os primeiros europeus a chegar ao Brasil, Índia, Macau e banyak outros lugares!",
    "Portugal tem a mais antiga Academia de Marinha do mundo, fundada em 1717!",
    "O pasteis de Belém foi criado em 1837 e a receita continua secreta até hoje!",
    "Portugal foi o único país da Europa a manter as fronteiras originais durante séculos!",
    "A Tourada à Corda é uma tradição única que só existe no Ribatejo!",
    "O Azulejo português tem raízes que remontam à época mourisca!",
    "Portugal produz mais de 250 castas de vinho diferentes!",
    "O Santo António de Lisboa é o santo mais popular de Portugal!",
    "A Costa Vicentina é uma das últimas costas selvagens da Europa!"
];

// ========================================
// PERGUNTAS DO QUIZ
// ========================================
const quizQuestions = [
    {
        question: "Em que ano foi fundada a nacionalidade portuguesa?",
        options: ["A) 1065", "B) 1143", "C) 1245", "D) 1385"],
        correct: 2
    },
    {
        question: "Qual foi o navegador português que descobriu o Brasil?",
        options: ["A) Vasco da Gama", "B) Fernão de Magalhães", "C) Pedro Álvares Cabral", "D) Bartolomeu Dias"],
        correct: 3
    },
    {
        question: "Qual é o ponto mais alto de Portugal continental?",
        options: ["A) Serra do Gerês", "B) Serra da Estrela", "C) Serra de Monchique", "D) Serra de Sintra"],
        correct: 2
    },
    {
        question: "Em que ano ocorreu a Revolução dos Cravos?",
        options: ["A) 1974", "B) 1968", "C) 1980", "D) 1976"],
        correct: 1
    },
    {
        question: "Qual rio é o mais longo de Portugal?",
        options: ["A) Douro", "B) Guadiana", "C) Tejo", "D) Mondego"],
        correct: 3
    }
];

// ========================================
// AFIRMAÇÕES VERDADEIRO OU FALSO
// ========================================
const statements = [
    { statement: "Portugal é o país mais antigo da Europa.", isTrue: false },
    { statement: "Vasco da Gama descobriu o caminho marítimo para a Índia.", isTrue: true },
    { statement: "Portugal tem fronteira com apenas um país.", isTrue: false },
    { statement: "Os Jerónimos são património mundial da UNESCO.", isTrue: true },
    { statement: "A revolução de 1974 chama-se Revolução dos Cravos.", isTrue: true },
    { statement: "Portugal foi o primeiro país a descobrir o Brasil.", isTrue: true },
    { statement: "A Madeira é uma ilha de origem vulcânica.", isTrue: true },
    { statement: "Lisboa é a capital de Portugal desde 1147.", isTrue: true },
    { statement: "O Douro é o rio mais longo de Portugal.", isTrue: false },
    { statement: "Portugal tem ilhas nos dois oceanos.", isTrue: true }
];

// ========================================
// FACTOS DO DIA
// ========================================
const factosDia = [
    "Hoje aprendeste algo novo sobre Portugal!",
    "Sabias que Portugal foi o primeiro país a estabelecer as suas fronteiras modernas?",
    "O Dia de Portugal celebra-se no dia 10 de Junho, aniversário da morte de Camões!",
    "Portugal foi o Império mais duradouro da história, com mais de 600 anos!",
    "Lisboa é uma das capitais mais antigas do mundo!",
    "Portugal tem a maior rede de autoestradas da Europa!",
    "O pastel de nata é um dos alimentos mais conhecidos de Portugal no mundo!",
    "A Primeira Dinastia de Portugal durou mais de 200 anos!",
    "Portugal foi中立 durante a Segunda Guerra Mundial!",
    "O futebol é o desporto mais popular em Portugal!"
];

// ========================================
// VARIÁVEIS DE ESTADO
// ========================================
let quizScore = 0;
let gameScore = 0;
let currentQuestionIndex = 0;
let currentStatementIndex = 0;
let colorIndex = 0;

// ========================================
// FUNÇÃO: MOSTRAR CURIOSIDADE ALEATÓRIA
// ========================================
function mostrarCuriosidade() {
    const curiosidadeElement = document.getElementById('curiosity-text');
    
    const indiceAleatorio = Math.floor(Math.random() * curiosidades.length);
    
    curiosidadeElement.style.opacity = '0';
    
    setTimeout(() => {
        curiosidadeElement.textContent = curiosidades[indiceAleatorio];
        curiosidadeElement.style.opacity = '1';
    }, 300);
}

// ========================================
// FUNÇÃO: VERIFICAR RESPOSTA DO QUIZ
// ========================================
function checkAnswer(opcao) {
    const resultElement = document.getElementById('quiz-result');
    const currentQuestion = quizQuestions[currentQuestionIndex];
    
    if (opcao === currentQuestion.correct) {
        quizScore += 10;
        resultElement.textContent = "✅ Correto! Parabéns! +10 pontos!";
        resultElement.className = "result correct";
    } else {
        resultElement.textContent = "❌ Incorreto! A resposta correcta era a opção " + 
            String.fromCharCode(64 + currentQuestion.correct) + ")";
        resultElement.className = "result incorrect";
    }
    
    document.getElementById('score').textContent = quizScore;
    
    setTimeout(() => {
        currentQuestionIndex = (currentQuestionIndex + 1) % quizQuestions.length;
        loadNextQuestion();
    }, 2000);
}

// ========================================
// FUNÇÃO: CARREGAR PRÓXIMA PERGUNTA
// ========================================
function loadNextQuestion() {
    const currentQuestion = quizQuestions[currentQuestionIndex];
    const questionElement = document.getElementById('quiz-question');
    const optionsContainer = document.querySelector('.options');
    const resultElement = document.getElementById('quiz-result');
    
    resultElement.textContent = "";
    resultElement.className = "result";
    
    questionElement.innerHTML = `<p>${currentQuestion.question}</p>`;
    
    optionsContainer.innerHTML = '';
    currentQuestion.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.className = 'option-btn';
        button.textContent = option;
        button.onclick = () => checkAnswer(index + 1);
        optionsContainer.appendChild(button);
    });
}

// ========================================
// FUNÇÃO: VERIFICAR VERDADEIRO OU FALSO
// ========================================
function checkStatement(userAnswer) {
    const currentStatement = statements[currentStatementIndex];
    const resultElement = document.getElementById('game-result');
    
    const isCorrect = userAnswer === currentStatement.isTrue;
    
    if (isCorrect) {
        gameScore += 10;
        resultElement.textContent = "✅ Correto! Sabes muito sobre Portugal! +10 pontos!";
        resultElement.className = "game-result correct";
    } else {
        const correctAnswer = currentStatement.isTrue ? "Verdadeiro" : "Falso";
        resultElement.textContent = "❌ Incorreto! A resposta correcta era: " + correctAnswer;
        resultElement.className = "game-result incorrect";
    }
    
    document.getElementById('game-score').textContent = gameScore;
    
    setTimeout(() => {
        currentStatementIndex = (currentStatementIndex + 1) % statements.length;
        loadNextStatement();
    }, 2000);
}

// ========================================
// FUNÇÃO: CARREGAR PRÓXIMA AFIRMAÇÃO
// ========================================
function loadNextStatement() {
    const currentStatement = statements[currentStatementIndex];
    const statementElement = document.getElementById('statement-text');
    const resultElement = document.getElementById('game-result');
    
    resultElement.textContent = "";
    resultElement.className = "game-result";
    
    statementElement.textContent = currentStatement.statement;
}

// ========================================
// FUNÇÃO: REVELAR FACTO DO DIA
// ========================================
function revelarFacto() {
    const resultadoElement = document.getElementById('interactive-result');
    const indiceAleatorio = Math.floor(Math.random() * factosDia.length);
    
    resultadoElement.textContent = factosDia[indiceAleatorio];
    resultadoElement.style.animation = "fadeIn 0.5s ease";
}

// ========================================
// FUNÇÃO: MUDAR CORES DO FUNDO
// ========================================
function mudarCorFundo() {
    colorIndex = (colorIndex + 1) % 5;
    document.body.className = 'color-variant-' + (colorIndex + 1);
    
    const resultadoElement = document.getElementById('interactive-result');
    resultadoElement.textContent = "🎨 Paleta de cores alterada! Gostas desta combinação?";
}

// ========================================
// FUNÇÃO: REINICIAR TUDO
// ========================================
function reiniciarPontuacao() {
    quizScore = 0;
    gameScore = 0;
    currentQuestionIndex = 0;
    currentStatementIndex = 0;
    colorIndex = 0;
    
    document.getElementById('score').textContent = quizScore;
    document.getElementById('game-score').textContent = gameScore;
    
    document.getElementById('quiz-result').textContent = "";
    document.getElementById('quiz-result').className = "result";
    document.getElementById('game-result').textContent = "";
    document.getElementById('game-result').className = "game-result";
    document.getElementById('interactive-result').textContent = "";
    
    document.body.className = '';
    
    loadNextQuestion();
    loadNextStatement();
    
    const resultadoElement = document.getElementById('interactive-result');
    resultadoElement.textContent = "🔄 Tudo foi reiniciado! Podes começar de novo!";
}

// ========================================
// INICIALIZAÇÃO
// ========================================
document.addEventListener('DOMContentLoaded', function() {
    console.log("🚀 Site de História e Geografia de Portugal carregado com sucesso!");
    console.log("✨ Powered by IA - Projeto Sala LED");
    
    loadNextQuestion();
    loadNextStatement();
    
    const style = document.createElement('style');
    style.textContent = `
        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(-10px); }
            to { opacity: 1; transform: translateY(0); }
        }
    `;
    document.head.appendChild(style);
});

// ========================================
// EFEITOS VISUAIS ADICIONAIS
// ========================================

document.querySelectorAll('.system-card, .gallery-item').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-5px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

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

window.onload = function() {
    setTimeout(() => {
        console.log("👋 Bem-vindo ao site de História e Geografia de Portugal!");
    }, 1000);
};