class QuizApi {

    constructor() {
        this.baseUrl = "http://localhost:3000/quizzes"
    }

    getQuizzes() {
        fetch(this.baseUrl)
        .then(res => res.json())
        .then (quizzes => quizzes.forEach(quiz => {
            const quizObject = new Quiz(quiz)
            quiz.js_questions.forEach(question => {
                new Question(question)
            })
            quizObject.render()
            
        }))
    }
}