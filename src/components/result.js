class Result {
    static results = []
    constructor({name, score}) {
        this.name = name
        this.score = score
        Result.results.push(this)
    }

    render() {
        
        const div = document.createElement("div") 
        const h2 = document.createElement("h2")
        const p = document.createElement("p")
        var highScoresTable = document.createElement("table")
        highScoresTable.innerHTML += "<tr><th>Name</th><th>Score</th></tr>"

        div.id = `high-scores`
        h2.innerHTML= `High Scores`
        div.appendChild(h2)
        div.appendChild(p)


        Result.results.map((result) => {
            console.log("result", result)
            highScoresTable.innerHTML += "<tr><td>" +  result.name  + "</td><td>" + result.score + "</td></tr>"
            // let newResultRow= document.createElement("tr")
            // let newNameColumn = document.createElement("td")
            // let newScoreColumn = document.createElement("td")
        })
        
        div.append(highScoresTable)

        document.querySelector(".container").appendChild(div)
        

    }

}