class Quizzes {
    constructor() {
        this.quizzes = []
        this.adapter = new QuizzesApi()
        this.fetchAndLoadQuizzes()
    }

    fetchAndLoadQuizzes() {
        this.adapter
        .getQuizzes()
        .then(quizzes => {
        //    return console.log(quizzes)
            quizzes.forEach(quiz => this.quizzes.push(quiz))
        })
        .then(() => {
            this.render()
        })
    }

    render() {
        const quizzesContainer = document.getElementById('quizzes-container')
        quizzesContainer.innerHTML = 'Test your knowledge of JavaScript'
        console.log('JavaScript Quiz', this.quizzes) 
    }

    
}