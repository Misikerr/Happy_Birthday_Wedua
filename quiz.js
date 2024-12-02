const questions = [
    {
        question: "Betam Metewjiw Megeb?",
        options: ["A.Enqulal", "B.Shiro", "C.Mereq Yalew Tibs","D.All"],
        correctAnswer: 2, // mereq yalew tibs
        memory: "Eko, Mereq yalew Tibs enen ke meteweghighe belay endemetoji aqalew lk adel? 🍷😒"
    },
    {
        question: "Ene Anchin Mn Yakel New Mewedesh?",
        options: ["A.Mnm Atewdeghim", "B.Betam Endmetewedeghe Aqalew", "C.Kalatoch Ena Hunetawoch Kemigeltsut Belay","D.2 Ena 3 Lk nachew"],
        correctAnswer: 3, // 2 ena 3 lk nachew
        memory: "Aw Yhenenem Kaweqesh Ande neger nw 🥰"
    },
    {
        question: "Anchis Enen Tewjighalesh?",
        options: ["A.Aw Betam New Mewedek", "B.Keldegha", "C.Balwedkem Altelakem","D.Betam New Metelak"],
        correctAnswer: 3, // betam new metelak
        memory: "😢😢Derom Eko Aqewalew Becha Telobeghe New Enghi!😢"
    },
    {
        question: "Ene Betam Mewedew Megeb?",
        options: ["A. Enqulal", "B. Shiro","C. Aya Jibo Mn Metetelaw Neger ale", "D. Ene Yeserahuten Hulu"],
        correctAnswer: 2, // Aya Jibo Mn Metetelaw Neger ale
        memory: "SETYO !! , Enekebaber enghi manen new jib meteyiw😒"
    },
    {
        question: "Ahun Class Mnamn Feqregha Alesh ?",
        options: ["A. Ayi Yeleghim", "B. Mn Agebak", "C. Kante lela Ayetasebem","D. Cheq Nachew"],
        correctAnswer: 2, // Kante lela Ayetasebem
        memory: "Ewiy💖🥰"
    },
    {
        question: "I Love You ?",
        options: ["A. I Love You TOOOOOOOOOO", "B. A", "C. A and B","D. All"],
        correctAnswer: 3, // betam new metelak
        memory: "Ena Lmn Anegabam!!"
    }
];

let currentQuestionIndex = 0;

function displayQuestion() {
    const question = questions[currentQuestionIndex];
    document.getElementById("question").textContent = question.question;
    
    const optionsContainer = document.getElementById("options-container");
    optionsContainer.innerHTML = ''; // Clear previous options

    question.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.classList.add('quiz-option');
        button.textContent = option;
        button.onclick = () => checkAnswer(index);
        optionsContainer.appendChild(button);
    });
}

function checkAnswer(selectedIndex) {
    const question = questions[currentQuestionIndex];
    if (selectedIndex === question.correctAnswer) {
        showModal(`Correct! 🎉 ${question.memory}`);
        currentQuestionIndex++; // Move to the next question
        if (currentQuestionIndex < questions.length) {
            displayQuestion();
        } else {
            showEndQuizButton();
        }
    } else {
        showModal(`Yetkeberu Birthday Girl Tesastewal Ebako Kendegena Yemokeru!!🤔`);
    }
}

// Show the custom modal with the message
function showModal(message) {
    const modal = document.getElementById('custom-modal');
    const messageElement = document.getElementById('modal-message');
    messageElement.textContent = message;
    modal.style.display = 'flex';  // Show modal
}

// Close the modal when "OK" is clicked
function closeModal() {
    const modal = document.getElementById('custom-modal');
    modal.style.display = 'none';  // Hide modal
}

// Display the "Touch Me" button at the end of the quiz
function showEndQuizButton() {
    document.getElementById("quiz-container").style.display = 'none'; // Hide the quiz
    document.getElementById("end-quiz-container").style.display = 'block'; // Show the button
}

// Redirect the user when they click the "Touch Me" button
function redirectToNextPage() {
    window.location.href = 'memory.html';  // Replace with your desired page URL
}

// Start the quiz
displayQuestion();
