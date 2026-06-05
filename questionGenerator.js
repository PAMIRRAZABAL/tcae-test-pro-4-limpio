// ========================================
// QUESTION GENERATOR PRO
// SIN REPETICIONES
// ========================================

let currentQuestion = null;

let materialsPool = [];

function shuffle(array) {

    const arr = [...array];

    for (let i = arr.length - 1; i > 0; i--) {

        const j = Math.floor(
            Math.random() * (i + 1)
        );

        [arr[i], arr[j]] =
        [arr[j], arr[i]];
    }

    return arr;
}

function initializePool() {

    materialsPool =
        shuffle(MATERIALS);
}

function generateQuestion() {

    if (
        materialsPool.length === 0
    ) {

        initializePool();
    }

    const correctMaterial =
        materialsPool.pop();

    let options = [
        correctMaterial.nombre
    ];

    while (options.length < 4) {

        const candidate =
            MATERIALS[
                Math.floor(
                    Math.random() *
                    MATERIALS.length
                )
            ].nombre;

        if (
            !options.includes(candidate)
        ) {

            options.push(candidate);
        }
    }

    options = shuffle(options);

    currentQuestion = {

        material:
            correctMaterial,

        question:
            "¿Qué material sanitario aparece en la imagen?",

        options:
            options,

        correct:
            correctMaterial.nombre
    };

    return currentQuestion;
}

function getCurrentQuestion() {

    return currentQuestion;
}

initializePool();

console.log(
    "Question Generator OK"
);