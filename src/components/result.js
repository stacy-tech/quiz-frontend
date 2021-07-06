class Result{
    static results = []
    constructor(result) {
        this.quiz_id = result.quiz.id
        this.id = result.id
        this.name = result.name
        this.score = result.score
        Result.results.push(this)
    }

    static submitResult(score, name) {
        console.log('submitting score... ', score)
        console.log('submitting name... ', name)
        // console.log('submitting quiz_id...', quiz_id)
        ResultApi.postResult(score, name)
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
        

        document.querySelector(".container").appendChild(div)  
            
    }

}
    




