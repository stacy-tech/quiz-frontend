class QuizApi {
    constructor() {
        this.baseUrl = 'http://localhost:3000/quizzes'
    }

    getQuiz() {
        return fetch(this.baseUrl).then(res => res.json())
    }
}