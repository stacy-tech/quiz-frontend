class Quizzes {
    constructor() {
        this.quizzes = []
        this.adapter = new QuizzesApi()
        this.fetchAndLoadQuizzes()
    }

    fetchAndLoadQuizzes() {
        this.adapter.getQuizzes()
        .then(quizzes => {
            console.log(quizzes)
        })
    }

}