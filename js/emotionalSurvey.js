const questions = [
    { id: 1, text: "Як ви себе відчуваєте сьогодні?", options: ["Спокійно", "Стрес", "Тривога", "Втома", "Мотивація", "Щасливий"], score: [1, -3, -2, -1, 2, 3] },
    { id: 2, text: "Як ви оцінюєте свій рівень енергії?", options: ["Дуже високий", "Нормальний", "Низький", "Відчуваю виснаження"], score: [3, 1, -1, -3] },
    { id: 3, text: "Наскільки вам легко зосереджуватися на навчанні?", options: ["Легко зосереджуюсь", "Трохи важко, але намагаюсь", "Постійно відволікаюсь", "Дуже важко сфокусуватися"], score: [2, 1, -1, -3] },
    { id: 4, text: "Як часто ви відчуваєте стрес через навчання чи інші справи?", options: ["Майже ніколи", "Рідко", "Часто", "Постійно"], score: [3, 1, -1, -3] },
    { id: 5, text: "Скільки годин на день ви зазвичай відпочиваєте?", options: ["0–2 години", "3–5 годин", "6–8 годин", "Більше 8 годин"], score: [-3, -1, 2, 3] },
    { id: 6, text: "Як ви підтримуєте свій настрій?", options: ["Спілкуюся з друзями", "Займаюся хобі", "Фізичні вправи", "Мені важко підняти настрій"], score: [3, 2, 1, -3] }
];

let emotionalResponses = {}; // Зберігання відповідей на перший тест
let emotionalCurrentQuestionIndex = 0;

// Обробник події для першого тесту (опитування емоційного стану)
document.getElementById('emotional-survey').addEventListener('click', () => {
    document.getElementById('menu').style.display = 'none';
    document.getElementById('main-title').style.display = 'none';
    document.getElementById('survey').style.display = 'block';
    displayEmotionalQuestion(0); // Почати з першого запитання опитування емоційного стану
});

function displayEmotionalQuestion(index) {
    const container = document.getElementById('question-container');
    container.innerHTML = '';

    if (index < questions.length) {
        const question = questions[index];
        const questionText = document.createElement('p');
        questionText.classList.add('question-text');
        questionText.textContent = `${index + 1}. ${question.text}`;
        container.appendChild(questionText);

        question.options.forEach((option, optionIndex) => {
            const optionButton = document.createElement('button');
            optionButton.textContent = option;
            optionButton.classList.add('option-button');
            optionButton.addEventListener('click', () => {
                emotionalResponses[question.id] = question.score[optionIndex];
                emotionalCurrentQuestionIndex++;
                if (emotionalCurrentQuestionIndex < questions.length) {
                    displayEmotionalQuestion(emotionalCurrentQuestionIndex);
                } else {
                    generateEmotionalRecommendation();
                }
            });
            container.appendChild(optionButton);
        });
    }
}

function generateEmotionalRecommendation() {
    const emotionalScore = Object.values(emotionalResponses).reduce((acc, score) => acc + score, 0);
    let recommendation;

    if (emotionalScore >= 10) {
        recommendation = "Ви маєте стабільний позитивний емоційний стан!";
    } else if (emotionalScore >= 0) {
        recommendation = "Ваш емоційний стан в межах норми, але є простір для покращення.";
    } else {
        recommendation = "Ваш емоційний стан свідчить про певні труднощі. Рекомендується звернути увагу на своє благополуччя.";
    }

    const recommendationText = document.getElementById('recommendationText');
    recommendationText.textContent = recommendation;
    document.getElementById('survey').style.display = 'none';
    document.getElementById('recommendation').style.display = 'block';
}
