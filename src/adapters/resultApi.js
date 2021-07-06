class ResultApi{
    debugger
    static postResult(score, name, quiz_id) {
        console.log('posting score... ', score)
        console.log('post name... ', name)
        console.log('post quiz_id..', quiz_id)
        fetch('http://localhost:3000/results', {
            method: 'POST',
            headers: {
                "Content-Type": 'application/json',
                
            },
            body: JSON.stringify({
                result: {
                    name: name,
                    score: score,
                    quiz_id: 1
                }
            })
            
        })
        .then(res => res.json())
        .then(json => { console.log(json)
            // let result = new Result(json)
            new Result(result)

        })
       
    }
}