class QuizzesApi {
    constructor() {
        this.baseUrl = "http://localhost:3000/quizzes"
    }

    getQuizzes() {
        return fetch(this.baseUrl).then(res => res.json())
    }
    // async getQuizzes() {
    //     const res = await fetch(this.baseUrl)
    //     return res.json
    // }
}