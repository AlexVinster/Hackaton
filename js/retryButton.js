// Кнопка для повторного проходження тестів
document.getElementById('retry-button').addEventListener('click', () => {
    emotionalResponses = {};
    beckResponses = {};
    emotionalCurrentQuestionIndex = 0;
    beckCurrentQuestionIndex = 0;
    document.getElementById('recommendation').style.display = 'none';
    document.getElementById('menu').style.display = 'block';
    document.getElementById('main-title').style.display = 'block';
});
