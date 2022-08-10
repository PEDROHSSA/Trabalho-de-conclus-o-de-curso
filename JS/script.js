const quizData = [
    {
        pergunta: "Em que ano tivemos o primeiro relato de um possível telescópio que poderia ser lançado no espaço?",
        a: "1940",
        b: "1920",
        c: "1935",
        d: "1923",
        correto: "d",
    },
    {
        pergunta: "Em que ano foi lançado o Observatório Astronômico Orbital (OAO)?",
        a: "1953",
        b: "1975",
        c: "1966",
        d: "1925",
        correto: "c",
    },
    {
        pergunta: "Em qual ponto de Lagrange o telescópio James Webb ficará?",
        a: "Ponto L1",
        b: "Ponto L2",
        c: "Ponto L3",
        d: "Ponto L4",
        correto: "a",
    },
    {
        pergunta: "Além da NASA, quais foram as outras duas agências espaciais que ajudaram na construção do James Webb?",
        a: "CONAE e DLR",
        b: "AEB e CNSA",
        c: "ESA e CSA",
        d: "JAXA e SNSB",
        correto: "b",
    },

    {
        pergunta: "Qual foi o ano de criação do telescópio?",
        a: "1605",
        b: "1604",
        c: "1607",
        d: "1608",
        correto: "d",
    },


];


const respostaEls = document.querySelectorAll('.resposta')
const quiz= document.getElementById('quiz')
const Elquestao = document.getElementById('pergunta')
const texto_a = document.getElementById('texto_a')
const texto_b = document.getElementById('texto_b')
const texto_c = document.getElementById('texto_c')
const texto_d = document.getElementById('texto_d')
const BUTavancar = document.getElementById('avancar')


let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {

    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    Elquestao.innerText = currentQuizData.pergunta
    texto_a.innerText = currentQuizData.a
    texto_b.innerText = currentQuizData.b
    texto_c.innerText = currentQuizData.c
    texto_d.innerText = currentQuizData.d
}

function deselectAnswers() {
    respostaEls.forEach(respostaEl => respostaEl.checked = false)
}

function getSelected() {
    let resposta
    respostaEls.forEach(respostaEl => {
        if(respostaEl.checked) {
            resposta = respostaEl.id
        }
    })
    return resposta
}


BUTavancar.addEventListener('click', () => {
    const resposta = getSelected()
    if(resposta) {
       if(resposta === quizData[currentQuiz].correto) {
           score++
       }

       currentQuiz++

       if(currentQuiz < quizData.length) {
           loadQuiz()
       } else {
           quiz.innerHTML = `
           <h2>Você respondeu ${score}/${quizData.length} questões corretamente</h2>

           <button onclick="location.reload()">Refazer</button>
           `
       }
    }
})