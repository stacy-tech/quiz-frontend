document.addEventListener('DOMContentLoaded', () => {
    const api = new QuizApi
    api.getQuizzes()
    api.getResults()
})


