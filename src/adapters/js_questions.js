class JsQuestions {
    constructor() {
        this.baseUrl = "http://localhost:3000/js_questions"
    }

    getJs_Questions() {
        return fetch(this.baseUrl).then(res => res.json())
    }
    
}