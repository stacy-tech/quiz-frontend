class JsQuestions {
    constructor({question, quiz_id, id,answer, option1, option2}) {
        this.baseUrl = "http://localhost:3000/js_questions"
    }

    getJs_Questions() {
        return fetch(this.baseUrl).then(res => res.json())
    }
    
}