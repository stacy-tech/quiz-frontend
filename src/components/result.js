class Result{
    static results = []
    constructor({quiz_id, id, name, score }) {
        this.quiz_id = quiz_id
        this.id = id
        this.name = name
        this.score = score
        Result.results.push(this)
    }

    static highScores(e) {
        e.preventDefault()
        ResultApi.postResult(e.target)
        const div = document.createElement("div") 
        const h4 = document.createElement("h4")
        const p = document.createElement("p")
        var highScoresTable = document.createElement("table")
        highScoresTable.innerHTML += "<tr><th>Name</th><th>Score</th></tr>"

        div.id = `high-scores`
        h4.innerHTML= `High Scores`
        div.appendChild(h4)
        div.appendChild(p)


        Result.results.map((result) => {
            console.log("result", result)
            highScoresTable.innerHTML += "<tr><td>" +  result.name  + "</td><td>" + result.score + "</td></tr>"    
        })
        
        div.append(highScoresTable)
        debugger

        document.querySelector(".container").appendChild(div)  
            
    }

    calculateScore(){
        const SCORE_POINTS = 100
        const MAX_QUESTIONS = 10
    }

}
    




