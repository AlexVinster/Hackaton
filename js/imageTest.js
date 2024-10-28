const rorschachQuestions = [
    {
        id: 1,
        text: "Що ви бачите на цій картинці?",
        image: "https://psyfactor.org/lib/i/rorschach_test_1.jpg",
        options: [
            { answer: "Летюча миша", meaning: "Щось нечисте або демоничне, шлях через темряву." },
            { answer: "Метелик", meaning: "Трансформація, здатність рости і змінюватися." },
            { answer: "Міль", meaning: "Недооціненість, незадоволеність власною зовнішністю." },
            { answer: "Морда тварини", meaning: "Страх, небажання заглянути всередину себе." }
        ]
    },
    {
        id: 2,
        text: "Що ви бачите на цій картинці?",
        image: "https://psyfactor.org/lib/i/rorschach_test_2.jpg",
        options: [
            { answer: "Два моляться", meaning: "Сексуальність, стосунки." },
            { answer: "Дві фігури", meaning: "Созалежність, одержимість." },
            { answer: "Персонаж, що дивиться в дзеркало", meaning: "Егоцентризм." },
            { answer: "Чотирилапе тварина", meaning: "Дружба, вірність." }
        ]
    },
    {
        id: 3,
        text: "Що ви бачите на цій картинці?",
        image: "https://psyfactor.org/lib/i/rorschach_test_3.jpg",
        options: [
            { answer: "Дві фігури", meaning: "Активна соціальна життя." },
            { answer: "Людина, що дивиться в дзеркало", meaning: "Егоцентризм." },
            { answer: "Метелик", meaning: "Трансформація." },
            { answer: "Міль", meaning: "Внутрішні переживання." }
        ]
    },
    {
        id: 4,
        text: "Що ви бачите на цій картинці?",
        image: "https://psyfactor.org/lib/i/rorschach_test_4.jpg",
        options: [
            { answer: "Велике чудовисько", meaning: "Страх перед авторитетами." },
            { answer: "Шкура тварини", meaning: "Відносини з батьками." },
            { answer: "Монстр", meaning: "Внутрішні переживання." },
            { answer: "Велика тварина", meaning: "Страх, неповноцінність." }
        ]
    },
    {
        id: 5,
        text: "Що ви бачите на цій картинці?",
        image: "https://psyfactor.org/lib/i/rorschach_test_5.jpg",
        options: [
            { answer: "Летюча миша", meaning: "Внутрішні переживання." },
            { answer: "Метелик", meaning: "Легкість, радість." },
            { answer: "Міль", meaning: "Не впевненість у собі." },
            { answer: "Морда тварини", meaning: "Страх перед проблемами." }
        ]
    },
    {
        id: 6,
        text: "Що ви бачите на цій картинці?",
        image: "https://psyfactor.org/lib/i/rorschach_test_6.jpg",
        options: [
            { answer: "Шкура тварини", meaning: "Страх близьких стосунків." },
            { answer: "Текстура", meaning: "Внутрішнє відчуття порожнечі." },
            { answer: "Пустка", meaning: "Ізоляція." },
            { answer: "Чудовисько", meaning: "Страхи і комплекси." }
        ]
    },
    {
        id: 7,
        text: "Що ви бачите на цій картинці?",
        image: "https://psyfactor.org/lib/i/rorschach_test_7.jpg",
        options: [
            { answer: "Жіночі голови", meaning: "Відносини з матір'ю." },
            { answer: "Дитячі голови", meaning: "Дитячі спогади." },
            { answer: "Поцілунок", meaning: "Пошук любові." },
            { answer: "Людські обличчя", meaning: "Емоційні зв'язки." }
        ]
    },
    {
        id: 8,
        text: "Що ви бачите на цій картинці?",
        image: "https://psyfactor.org/lib/i/rorschach_test_8.jpg",
        options: [
            { answer: "Чотирилапе тварина", meaning: "Дружба." },
            { answer: "Метелик", meaning: "Легкість." },
            { answer: "Міль", meaning: "Внутрішні переживання." },
            { answer: "Яскрава тварина", meaning: "Емоційний стан." }
        ]
    },
    {
        id: 9,
        text: "Що ви бачите на цій картинці?",
        image: "https://psyfactor.org/lib/i/rorschach_test_9.jpg",
        options: [
            { answer: "Людина", meaning: "Відношення до інших." },
            { answer: "Невизначена фігура", meaning: "Боротьба з безструктурністю." },
            { answer: "Силует", meaning: "Невпевненість." },
            { answer: "Зловісна постать", meaning: "Страхи." }
        ]
    },
    {
        id: 10,
        text: "Що ви бачите на цій картинці?",
        image: "https://psyfactor.org/lib/i/rorschach_test_10.jpg",
        options: [
            { answer: "Краб", meaning: "Зацикленість на певному." },
            { answer: "Лобстер", meaning: "Сила та впертість." },
            { answer: "Паук", meaning: "Страхи та невпевненість." },
            { answer: "Змія", meaning: "Небезпека." }
        ]
    }
];

let rorschachCurrentQuestionIndex = 0;
let answerCounts = {
    "страх": 0,
    "самооцінка": 0,
    "внутрішні переживання": 0,
    "відносини": 0,
    "трансформація": 0,
    "ізоляція": 0
};

document.getElementById('rorschach-test').addEventListener('click', () => {
    document.getElementById('menu').style.display = 'none';
    document.getElementById('main-title').style.display = 'none';
    document.getElementById('rorschachSurvey').style.display = 'block';
    displayRorschachQuestion(rorschachCurrentQuestionIndex);
});

function displayRorschachQuestion(index) {
    const container = document.getElementById('rorschach-question-container');
    container.innerHTML = '';

    if (index < rorschachQuestions.length) {
        const question = rorschachQuestions[index];
        const questionText = document.createElement('h2');
        questionText.textContent = question.text;
        container.appendChild(questionText);

        const img = document.createElement('img');
        img.src = question.image;
        img.alt = `Rorschach Image ${index + 1}`;
        img.style.width = '300px';
        img.style.height = 'auto';
        container.appendChild(img);

        question.options.forEach((option) => {
            const optionButton = document.createElement('button');
            optionButton.textContent = option.answer;
            optionButton.addEventListener('click', () => {
                recordAnswer(option.meaning);
            });
            container.appendChild(optionButton);
        });
    }
}

function recordAnswer(meaning) {
    // Підрахунок відповідей за категоріями
    if (meaning.includes("страх")) {
        answerCounts["страх"]++;
    } else if (meaning.includes("самооцінка") || meaning.includes("незадоволеність")) {
        answerCounts["самооцінка"]++;
    } else if (meaning.includes("внутрішні переживання") || meaning.includes("комплекси")) {
        answerCounts["внутрішні переживання"]++;
    } else if (meaning.includes("відносини") || meaning.includes("стосунки")) {
        answerCounts["відносини"]++;
    } else if (meaning.includes("трансформація") || meaning.includes("здатність рости")) {
        answerCounts["трансформація"]++;
    } else if (meaning.includes("ізоляція") || meaning.includes("порожнеча")) {
        answerCounts["ізоляція"]++;
    }
    
    rorschachCurrentQuestionIndex++;
    if (rorschachCurrentQuestionIndex < rorschachQuestions.length) {
        displayRorschachQuestion(rorschachCurrentQuestionIndex);
    } else {
        showSummary();
    }
}

function getEmotionSummary() {
    let maxCategory = null;
    let maxCount = 0;

    for (const category in answerCounts) {
        if (answerCounts[category] > maxCount) {
            maxCount = answerCounts[category];
            maxCategory = category;
        }
    }

    switch (maxCategory) {
        case "страх":
            return "Ваш емоційний стан свідчить про значний рівень страху або тривоги.";
        case "самооцінка":
            return "Ваш емоційний стан свідчить про труднощі з самооцінкою або невпевненість.";
        case "внутрішні переживання":
            return "Ваш емоційний стан відображає глибокі внутрішні переживання та рефлексію.";
        case "відносини":
            return "Ваш емоційний стан вказує на важливість міжособистісних відносин.";
        case "трансформація":
            return "Ваш емоційний стан свідчить про процес змін або потребу в особистісному рості.";
        case "ізоляція":
            return "Ваш емоційний стан показує почуття ізоляції або самотності.";
        default:
            return "Ваш емоційний стан є збалансованим і не має яскраво виражених аспектів.";
    }
}

function showSummary() {
    document.getElementById('rorschachSurvey').style.display = 'none';
    document.getElementById('meaning').style.display = 'none';
    document.getElementById('recommendation').style.display = 'block';

    const recommendationText = document.getElementById('recommendationText');
    recommendationText.textContent = getEmotionSummary();
}

document.getElementById('retry-button').addEventListener('click', () => {
    rorschachCurrentQuestionIndex = 0;
    answerCounts = {
        "страх": 0,
        "самооцінка": 0,
        "внутрішні переживання": 0,
        "відносини": 0,
        "трансформація": 0,
        "ізоляція": 0
    };
    document.getElementById('recommendation').style.display = 'none';
    document.getElementById('menu').style.display = 'block';
    document.getElementById('main-title').style.display = 'block';
});
