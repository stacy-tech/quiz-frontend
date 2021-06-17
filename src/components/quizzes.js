class Quizzes {
    constructor() {
        this.quizzes = []
        this.adapter = new QuizzesApi()
        this.fetchAndLoadQuizzes()
    }

    fetchAndLoadQuizzes() {
        this.adapter.getQuizzes()
        .then(quizzes => {
            quizzes.forEach(quiz => this.quizzes.push(quiz.js_questions))       
        })
        .then(() => {
            this.render()
        })
    }

    render() {
        // const quizzesContainer = document.getElementById('quizzes-container')
        // quizzesContainer.innerHTML = `<p>Questions: ${Quizzes.js_questions}</p>`
        // console.log(this.quizzes);
    }

    
}