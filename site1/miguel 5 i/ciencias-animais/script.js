// Quiz Data
const quizQuestions = [
    {
        question: "Qual é o grupo de animais que representa 97% de todas as espécies?",
        options: ["Vertebrados", "Invertebrados", "Mamíferos", "Aves"],
        correct: 1,
        difficulty: "Fácil"
    },
    {
        question: "Quantos corações tem um polvo?",
        options: ["Um", "Dois", "Três", "Quatro"],
        correct: 2,
        difficulty: "Fácil"
    },
    {
        question: "Qual animal é capaz de voar e é o único mamífero que faz isso ativamente?",
        options: ["Morcego", "Esquilo-voador", "Petaúro", "Sagüi"],
        correct: 0,
        difficulty: "Fácil"
    },
    {
        question: "Qual é o maior mamífero terrestre atual?",
        options: ["Elefante-africano", "Girafa", "Rinoceronte", "Hipopótamo"],
        correct: 0,
        difficulty: "Fácil"
    },
    {
        question: "Os polvos têm quantos corações?",
        options: ["1", "2", "3", "4"],
        correct: 2,
        difficulty: "Fácil"
    },
    {
        question: "Quantos quilômetros a borboleta monarca pode viajar em sua migração anual?",
        options: ["2.000 km", "3.000 km", "4.000 km", "5.000 km"],
        correct: 2,
        difficulty: "Médio"
    },
    {
        question: "Qual inseto pode comer até 1.200 mosquitos por hora?",
        options: ["Libélula", "Mosca", "Morcego-pipistrela", "Louva-a-Deus"],
        correct: 2,
        difficulty: "Médio"
    },
    {
        question: "Qual é o maior animal que já existiu na Terra (atual ou pré-histórico)?",
        options: ["Dinossauro Argentinosauro", "Baleia-azul", "Tubarão-baleia", "Mamute"],
        correct: 1,
        difficulty: "Difícil"
    },
    {
        question: "Qual animal tem o maior olho do reino animal (até 30 cm de diâmetro)?",
        options: ["Lula-gigante", "Tubarão-baleia", "Baleia-azul", "Polvo-comum"],
        correct: 0,
        difficulty: "Difícil"
    },
    {
        question: "Qual é o réptil venenoso mais letal do mundo por volume de veneno?",
        options: ["Cobra-rei", "Taipan", "Jararaca-ilhoa", "Dragão-de-komodo"],
        correct: 2,
        difficulty: "Difícil"
    },
    {
        question: "Qual é o único mamífero com reprodução estritamente ovípara (botam ovos)?",
        options: ["Ornitorrinco", "Equidna", "Coelho", "Tatu"],
        correct: 0,
        difficulty: "Impossível"
    },
    {
        question: "Em que profundidade máxima um pinguim-imperador pode mergulhar sem respirar?",
        options: ["100m", "250m", "500m", "800m"],
        correct: 2,
        difficulty: "Impossível"
    },
    {
        question: "Qual molusco pode produzir uma tinta contendo tetrodotoxina (veneno paralisante)?",
        options: ["Polvo", "Lula", "Nautilus", "Caramujo"],
        correct: 0,
        difficulty: "Impossível"
    }
];

let currentQuestionIndex = 0;
let score = 0;

// DOM Elements
const buttons = document.querySelectorAll('.nav-btn');
const sections = document.querySelectorAll('.page-section');
const scrollTopBtn = document.getElementById('scrollTop');
const progressBar = document.getElementById('progressBar');
const currentQuestionEl = document.getElementById('currentQuestion');
const totalQuestionsEl = document.getElementById('totalQuestions');
const scoreEl = document.getElementById('score');
const quizContent = document.getElementById('quizContent');
const quizResult = document.getElementById('quizResult');
const questionText = document.getElementById('questionText');
const optionsContainer = document.getElementById('optionsContainer');
const restartQuizBtn = document.getElementById('restartQuiz');

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    // Navigation
    initNavigation();
    
    // Scroll to top button
    initScrollToTop();
    
    // Animate stats when intro is visible
    initStatCounters();
    
    // Initialize quiz
    initQuiz();
});

// Navigation Functions
function initNavigation() {
    function showSection(sectionId) {
        sections.forEach(section => {
            section.classList.toggle('active', section.id === sectionId);
        });

        buttons.forEach(button => {
            button.classList.toggle('active', button.dataset.section === sectionId);
        });
        
        // Animate stats when entering intro section
        if (sectionId === 'intro') {
            animateStats();
        }
    }

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            showSection(this.dataset.section);
            window.scrollTo({ top: 0, behavior: 'smooth' });
            localStorage.setItem('animalSection', this.dataset.section);
        });
    });

    const saved = localStorage.getItem('animalSection');
    if (saved && document.getElementById(saved)) {
        showSection(saved);
    }
}

// Scroll to Top Functions
function initScrollToTop() {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            scrollTopBtn.classList.add('visible');
        } else {
            scrollTopBtn.classList.remove('visible');
        }
    });

    scrollTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

// Animated Counter Functions
function initStatCounters() {
    const statNumbers = document.querySelectorAll('.stat-number[data-count]');
    
    const animateCounter = (element) => {
        const target = parseInt(element.dataset.count);
        const duration = 2000;
        const step = target / (duration / 16);
        let current = 0;
        
        const updateCounter = () => {
            current += step;
            if (current < target) {
                element.textContent = Math.floor(current).toLocaleString();
                requestAnimationFrame(updateCounter);
            } else {
                element.textContent = target.toLocaleString();
            }
        };
        
        updateCounter();
    };
    
    // Store for later use
    window.animateStats = () => {
        statNumbers.forEach(stat => {
            const target = parseInt(stat.dataset.count);
            stat.textContent = '0';
            setTimeout(() => animateCounter(stat), 100);
        });
    };
}

// Quiz Functions
function initQuiz() {
    totalQuestionsEl.textContent = quizQuestions.length;
    loadQuestion();
    
    restartQuizBtn.addEventListener('click', () => {
        currentQuestionIndex = 0;
        score = 0;
        scoreEl.textContent = '0';
        quizContent.classList.remove('hidden');
        quizResult.classList.add('hidden');
        loadQuestion();
    });
}

function loadQuestion() {
    const question = quizQuestions[currentQuestionIndex];
    currentQuestionEl.textContent = currentQuestionIndex + 1;
    
    // Update difficulty badge
    const difficultyEl = document.getElementById('difficultyText');
    if (difficultyEl) {
        difficultyEl.textContent = question.difficulty || 'Fácil';
        const badge = document.getElementById('difficultyBadge');
        if (badge) {
            badge.setAttribute('data-difficulty', question.difficulty || 'Fácil');
        }
    }
    
    // Update progress bar
    const progress = ((currentQuestionIndex) / quizQuestions.length) * 100;
    progressBar.style.width = progress + '%';
    
    questionText.textContent = question.question;
    optionsContainer.innerHTML = '';
    
    question.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.className = 'option-btn';
        button.textContent = option;
        button.addEventListener('click', () => selectAnswer(index));
        optionsContainer.appendChild(button);
    });
}

function selectAnswer(selectedIndex) {
    const question = quizQuestions[currentQuestionIndex];
    const buttons = optionsContainer.querySelectorAll('.option-btn');
    
    // Disable all buttons
    buttons.forEach(btn => btn.disabled = true);
    
    if (selectedIndex === question.correct) {
        buttons[selectedIndex].classList.add('correct');
        score++;
        scoreEl.textContent = score;
    } else {
        buttons[selectedIndex].classList.add('incorrect');
        buttons[question.correct].classList.add('correct');
    }
    
    // Wait and move to next question
    setTimeout(() => {
        currentQuestionIndex++;
        
        if (currentQuestionIndex < quizQuestions.length) {
            loadQuestion();
        } else {
            showResults();
        }
    }, 1500);
}

function showResults() {
    progressBar.style.width = '100%';
    quizContent.classList.add('hidden');
    quizResult.classList.remove('hidden');
    
    const resultIcon = document.getElementById('resultIcon');
    const resultTitle = document.getElementById('resultTitle');
    const resultMessage = document.getElementById('resultMessage');
    
    if (score >= 10) {
        resultIcon.textContent = '🏆';
        resultTitle.textContent = 'Excelente!';
        resultMessage.textContent = `Você acertou ${score} de ${quizQuestions.length} perguntas! Você é um expert em animais!`;
    } else if (score >= 7) {
        resultIcon.textContent = '👍';
        resultTitle.textContent = 'Bom trabalho!';
        resultMessage.textContent = `Você acertou ${score} de ${quizQuestions.length} perguntas. Continue aprendendo!`;
    } else if (score >= 4) {
        resultIcon.textContent = '📚';
        resultTitle.textContent = 'Continue tentando!';
        resultMessage.textContent = `Você acertou ${score} de ${quizQuestions.length} perguntas. Que tal revisar o conteúdo?`;
    } else {
        resultIcon.textContent = '💡';
        resultTitle.textContent = 'Estude mais!';
        resultMessage.textContent = `Você acertou apenas ${score} de ${quizQuestions.length} perguntas. Leia mais sobre os animais e tente novamente!`;
    }
}
