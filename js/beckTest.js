const beckQuestions = [
    { id: 1, text: "Настрій", options: ["Я не почуваюся сумним.", "Я почуваюся засмученим.", "Я постійно засмучений і не можу звільнитися від цього.", "Я настільки сумний і нещасний, що це нестерпно."], score: [0, 1, 2, 3] },
    { id: 2, text: "Песимізм", options: ["Я не відчуваю безнадійності.", "Я відчуваю безнадійність щодо майбутнього.", "Я не очікую нічого доброго.", "Я вважаю, що майбутнє безнадійне."], score: [0, 1, 2, 3] },
    { id: 3, text: "Почуття провини", options: ["Я не відчуваю провини.", "Я відчуваю провину.", "Я часто відчуваю себе винним.", "Я постійно відчуваю себе винним."], score: [0, 1, 2, 3] },
    { id: 4, text: "Втрата задоволення", options: ["Я отримую задоволення від життя, як і раніше.", "Мені більше не приносить задоволення те, що раніше.", "Я отримую дуже мало задоволення.", "Я взагалі не отримую задоволення."], score: [0, 1, 2, 3] },
    { id: 5, text: "Почуття провини", options: ["Я не відчуваю, що заслуговую на покарання.", "Я відчуваю, що, можливо, заслуговую на покарання.", "Я очікую на покарання.", "Я вважаю, що заслуговую на покарання."], score: [0, 1, 2, 3] },
    { id: 6, text: "Розчарування у собі", options: ["Я задоволений собою.", "Я розчарований у собі.", "Я не люблю себе.", "Я ненавиджу себе."], score: [0, 1, 2, 3] },
    { id: 7, text: "Критика до себе", options: ["Я не критикую себе більше, ніж зазвичай.", "Я критикую себе більше, ніж зазвичай.", "Я постійно займаюся самокритикою.", "Я звинувачую себе у всіх своїх проблемах."], score: [0, 1, 2, 3] },
    { id: 8, text: "Суїцидальні думки", options: ["У мене немає думок про самогубство.", "Іноді я думаю про самогубство, але не збираюся цього робити.", "У мене є конкретні плани самогубства.", "Я б вчинив самогубство, якби міг."], score: [0, 1, 2, 3] },
    { id: 9, text: "Плаксивість", options: ["Я не плачу більше, ніж зазвичай.", "Я плачу більше, ніж зазвичай.", "Я постійно плачу.", "Я не можу плакати, навіть якщо мені хочеться."], score: [0, 1, 2, 3] },
    { id: 10, text: "Дратівливість", options: ["Я не більш дратівливий, ніж зазвичай.", "Я більш дратівливий, ніж зазвичай.", "Я постійно дратуюсь.", "Я взагалі не відчуваю дратівливості."], score: [0, 1, 2, 3] },
];

let beckResponses = {}; // Зберігання відповідей на тест Бека
let beckCurrentQuestionIndex = 0;

// Обробник події для тесту Бека
document.getElementById('beck-test').addEventListener('click', () => {
    document.getElementById('menu').style.display = 'none';
    document.getElementById('main-title').style.display = 'none';
    document.getElementById('beckSurvey').style.display = 'block';
    displayBeckQuestion(0); // Почати з першого запитання тесту Бека
});

function displayBeckQuestion(index) {
    const container = document.getElementById('beck-question-container');
    container.innerHTML = '';

    if (index < beckQuestions.length) {
        const question = beckQuestions[index];
        const questionText = document.createElement('p');
        questionText.classList.add('question-text');
        questionText.textContent = `${index + 1}. ${question.text}`;
        container.appendChild(questionText);

        question.options.forEach((option, optionIndex) => {
            const optionButton = document.createElement('button');
            optionButton.textContent = option;
            optionButton.classList.add('option-button');
            optionButton.addEventListener('click', () => {
                beckResponses[question.id] = question.score[optionIndex];
                beckCurrentQuestionIndex++;
                if (beckCurrentQuestionIndex < beckQuestions.length) {
                    displayBeckQuestion(beckCurrentQuestionIndex);
                } else {
                    generateBeckRecommendation();
                }
            });
            container.appendChild(optionButton);
        });
    }
}

function generateBeckRecommendation() {
    const beckScore = Object.values(beckResponses).reduce((acc, score) => acc + score, 0);
    let recommendation;

    if (beckScore <= 10) {
        recommendation = "Низький рівень депресії.";
    } else if (beckScore <= 20) {
        recommendation = "Помірний рівень депресії.";
    } else if (beckScore <= 30) {
        recommendation = "Високий рівень депресії.";
    } else {
        recommendation = "Дуже високий рівень депресії.";
    }

    const recommendationText = document.getElementById('recommendationText');
    recommendationText.textContent = recommendation;
    document.getElementById('beckSurvey').style.display = 'none';
    document.getElementById('recommendation').style.display = 'block';
}
