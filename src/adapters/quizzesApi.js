class QuizzesApi {
    constructor() {
        this.baseUrl = "http://localhost:3000/quizzes"
    }

    async getQuizzes() {
        const res = await fetch(this.baseUrl)
        return res.json
    }
}