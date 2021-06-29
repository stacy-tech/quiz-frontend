class QuizApi {

    constructor() {
        this.baseUrl = "http://localhost:3000"
    }

    getQuizzes() {
        fetch(this.baseUrl + "/quizzes")
        .then(res => res.json())
        .then (quizzes => quizzes.forEach(quiz => {
            const quizObject = new Quiz(quiz)
            quiz.js_questions.forEach(question => {
                new Question(question)
            })
            quizObject.render()
            
        }))
    }


    getResults() {
        fetch(this.baseUrl + "/results")
        .then(res => res.json())
        .then (results => results.forEach(result => {
            new Result(result)
               
        }))
    
    }

    
}