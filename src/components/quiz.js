class Quiz {
    static quizzes = []
    constructor({id, name, description}) {
        this.name = name
        this.id = id
        this.description = description
        this.answerQuestionRef = this.answerQuestion.bind(this)
        this.score = 0;
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

    answerQuestion(event) {
        console.log('answering question', event)
        let chosenAnswer = event.target.innerText
        console.log(chosenAnswer)
        let questionId = parseInt(event.target.classList[2])
        console.log(questionId)
        var currentQuestionList = Question.questions.filter(question => question.id === questionId)
        if(currentQuestionList[0].answer === chosenAnswer) {
            // alert('Correct')
            event.target.style.background = 'yellow'
            this.score += 10
            console.log('tracking score', this.score)
        }
        else {
            // alert('Incorrect')
            event.target.style.background = 'red'
        }
        

        Array.from(event.target.parentElement.children).forEach(element => {
            element.removeEventListener('click', this.answerQuestionRef)
            
        });
        

    }

    
    renderQuestions(){
    
        document.querySelector(".container").innerHTML = `
         <h1 id ="quiz-${this.id}">Test your Knowledge of ${this.name}</h1>
             <div id="questions">
                <h3>Questions</h3>
        
                <ul></ul>
                
            </div>

            <button id="submit-btn" class="submit-btn btn">Submit</button>
            

        `
        document.getElementById("submit-btn").addEventListener('click', e => Result.submitResult(this.score, this.name))


        var filteredQuestions = Question.questions.filter(question => question.quiz_id === this.id)
        
        
        
        filteredQuestions.forEach(question => { 
            document.querySelector("#questions ul").innerHTML +=
            `
                <li id ="question-${question.id}">
                    <h4> ${question.question}</h4>
                    <div id="answer-buttons" class="btn-grid">
                        <button class="btn answerBtn ${question.id}">${question.option1}</button>
                        <button class="btn answerBtn ${question.id}">${question.option2}</button>
                        <button class="btn answerBtn ${question.id}">${question.answer}</button>
                    </div>

                </li>
            `
        }) 

        var answerButtonClass = document.getElementsByClassName("answerBtn")
        for (var i = 0; i < answerButtonClass.length; i++) {
            answerButtonClass[i].addEventListener('click', this.answerQuestionRef)
        }



    }

    
}