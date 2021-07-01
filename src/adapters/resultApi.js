class ResultApi{
    debugger
    static postResult(score, name) {
        console.log('posting score... ', score)
        console.log('post name... ', name)
        fetch('http://localhost:3000/results', {
            method: 'POST',
            headers: {
                "Content_Type": 'application/json',
                
            },
            body: JSON.stringify({
                result: {
                    name: name,
                    score: score
                }
            })
            
        })
        .then(res => res.json())
        .then (json => {
            let result = new Result(json)
            new Result(result)

        })
       
    }
}