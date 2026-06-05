// ========================================
// TCAE TEST PRO 4
// APP PRINCIPAL PRO
// ========================================

var score = 0;
var questionNumber = 0;
var totalQuestions =
    MATERIALS.length;

// ========================================
// SIGUIENTE PREGUNTA
// ========================================

function showNextQuestion() {

    if (questionNumber >= totalQuestions) {

        finishExam();

        return;
    }

    currentQuestion =
        generateQuestion();

    if (!currentQuestion) {
        return;
    }

    questionNumber++;

    document.getElementById(
        "counter"
    ).textContent =
        questionNumber +
        " / " +
        totalQuestions;

    document.getElementById(
        "question"
    ).textContent =
        currentQuestion.question;

    document.getElementById(
        "category"
    ).textContent =
        currentQuestion.material.categoria;

    document.getElementById(
        "feedback"
    ).textContent =
        "";

    var image =
        document.getElementById(
            "materialImage"
        );

    image.src =
        currentQuestion.material.imagen;

    image.alt =
        currentQuestion.material.nombre;

    var options =
        document.getElementById(
            "options"
        );

    options.innerHTML = "";

    currentQuestion.options.forEach(
        function(option) {

            var button =
                document.createElement(
                    "button"
                );

            button.className =
                "option-button";

            button.textContent =
                option;

            button.onclick =
                function() {

                    checkAnswer(
                        option,
                        button
                    );
                };

            options.appendChild(
                button
            );
        }
    );
}

// ========================================
// COMPROBAR RESPUESTA
// ========================================

function checkAnswer(
    selectedOption,
    selectedButton
) {

    var buttons =
        document.querySelectorAll(
            ".option-button"
        );

    buttons.forEach(
        function(btn) {

            btn.disabled = true;

            if (
                btn.textContent ===
                currentQuestion.correct
            ) {

                btn.style.background =
                    "#28a745";

                btn.style.color =
                    "#ffffff";
            }
        }
    );

    if (
        selectedOption ===
        currentQuestion.correct
    ) {

        score++;

        updateScore();

        document.getElementById(
            "feedback"
        ).textContent =
            "✅ Correcto";

    } else {

        selectedButton.style.background =
            "#dc3545";

        selectedButton.style.color =
            "#ffffff";

        document.getElementById(
            "feedback"
        ).textContent =
            "❌ Incorrecto. Correcta: " +
            currentQuestion.correct;
    }
}

// ========================================
// ACTUALIZAR MARCADOR
// ========================================

function updateScore() {

    document.getElementById(
        "score"
    ).textContent =
        "Aciertos: " +
        score;
}

// ========================================
// FINALIZAR EXAMEN
// ========================================

function finishExam() {

    var percentage =
        (
            score /
            totalQuestions
        ) * 100;

    var grade =
        (
            score /
            totalQuestions
        ) * 10;

    document.getElementById(
        "question"
    ).innerHTML =

        "<h2>🎉 TEST FINALIZADO</h2>" +

        "<br>" +

        "Aciertos: " +
        score +
        " de " +
        totalQuestions +

        "<br><br>" +

        "Porcentaje: " +
        percentage.toFixed(1) +
        "%" +

        "<br><br>" +

        "Nota: " +
        grade.toFixed(2) +
        " / 10";

    document.getElementById(
        "options"
    ).innerHTML = "";

    document.getElementById(
        "category"
    ).textContent =
        "Examen finalizado";

    document.getElementById(
        "feedback"
    ).textContent =
        "";

    document.getElementById(
        "nextButton"
    ).disabled =
        true;
}

// ========================================
// BOTON SIGUIENTE
// ========================================

window.onload = function() {

    updateScore();

    document.getElementById(
        "nextButton"
    ).onclick =
        showNextQuestion;

    showNextQuestion();
};

