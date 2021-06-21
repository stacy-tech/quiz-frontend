class Question{
    static questions = []
    constructor({question, quiz_id, id,answer, option1, option2}) {
        this.question = question
        this.quiz_id = quiz_id
        this.id = id
        this.answer = answer
        this.option1 = option1
        this.option2 = option2
        Question.questions.push(this)
       
    }     
}



