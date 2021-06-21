class Quiz {
    static quizzes = []
    constructor({id, name, description}) {
        this.name = name
        this.id = id
        this.description = description
        Quiz.quizzes.push(this)
    }

    render() {
    
        const div = document.createElement("div") 
        const h2 = document.createElement("h2")
        const p = document.createElement("p")
        div.id = `quiz-${this.id}`
        h2.innerHTML= `<a href = "#">${this.name}</a>`
        p.innerText = this.description
        div.appendChild(h2)
        div.appendChild(p)
        div.addEventListener("click", this.renderQuestions.bind(this))

        document.querySelector(".container").appendChild(div)
    
    }
    
    findQuestionsByQuizId(){
       return Question.questions.filter(question => question.quiz_id === this.id)
    }
    renderQuestions(event){
    
        document.querySelector(".container").innerHTML = `
         <h1 id ="quiz-${this.id}">Test your Knowledge of ${this.name}</h1>
             <div id="questions">
                <h3>Questions</h3>
                <ul></ul>
                

            </div>
            
    
        `
        this.findQuestionsByQuizId().forEach(question => { 
            document.querySelector("#questions ul").innerHTML +=
            `
                <li id ="question-${question.id}">
                    <h4> ${question.question}</h4>
                    <div id="answer-buttons" class="btn-grid">
                        <button class="btn">${question.option1}</button>
                        <button class="btn">${question.option2}</button>
                        <button class="btn">${question.answer}</button>
                    </div>

                </li>
            `
        }) 
    }
}