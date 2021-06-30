class ResultApi{
    debugger
    static postResult(target) {
        fetch('http://localhost/3000/result', {
            method: 'POST',
            headers: {
                "Content_Type": 'application/json',
                "Accept": 'application/json'
            },
            body: JSON.stringify({
                name: "",
                score: ""
            })
            
        })
        .then(res => res.json())
        .then (json => {
            let result = new Result(json)
            new Result(result)

        })
       
    }
}