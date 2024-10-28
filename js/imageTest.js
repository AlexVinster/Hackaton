const imageQuestions = [
    { id: 1, image: 'image1.jpg', options: ["Варіант 1", "Варіант 2", "Варіант 3"], score: [1, -1, 0] },
    { id: 2, image: 'image2.jpg', options: ["Варіант 1", "Варіант 2", "Варіант 3"], score: [0, 1, -1] },
    { id: 3, image: 'image3.jpg', options: ["Варіант 1", "Варіант 2", "Варіант 3"], score: [-1, 0, 1] },
];

let imageResponses = {};
let imageCurrentQuestionIndex = 0;

// Обробник події для тесту з картинками
document.getElementById('image-test').addEventListener('click', () => {
    document.getElementById('menu').style.display = 'none';
    document.getElementById('main-title').style.display = 'none';
    document.getElementById('imageSurvey').style.display = 'block';
    displayImageQuestion(0); // Почати з першого запитання тесту з картинками
});

function displayImageQuestion(index) {
    const container = document.getElementById('image-question-container');
    container.innerHTML = '';

    if (index < imageQuestions.length) {
        const question = imageQuestions[index];
        
        const imageElement = document.createElement('img');
        imageElement.src = question.image;
        imageElement.alt = `Question ${index + 1}`;
        imageElement.classList.add('image-question');
        container.appendChild(imageElement);

        question.options.forEach((option, optionIndex) => {
            const optionButton = document.createElement('button');
            optionButton.textContent = option;
            optionButton.classList.add('option-button');
            optionButton.addEventListener('click', () => {
                imageResponses[question.id] = question.score[optionIndex];
                imageCurrentQuestionIndex++;
                if (imageCurrentQuestionIndex < imageQuestions.length) {
                    displayImageQuestion(imageCurrentQuestionIndex);
                } else {
                    generateImageRecommendation();
                }
            });
            container.appendChild(optionButton);
        });
    }
}

function generateImageRecommendation() {
    const imageScore = Object.values(imageResponses).reduce((acc, score) => acc + score, 0);
    let recommendation;

    if (imageScore > 2) {
        recommendation = "Ви маєте позитивне ставлення!";
    } else if (imageScore > 0) {
        recommendation = "Ваше ставлення в цілому позитивне.";
    } else {
        recommendation = "Вам слід звернути увагу на свої почуття.";
    }

    const recommendationText = document.getElementById('recommendationText');
    recommendationText.textContent = recommendation;
    document.getElementById('imageSurvey').style.display = 'none';
    document.getElementById('recommendation').style.display = 'block';
}
