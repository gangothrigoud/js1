const URL= "http://localhost:3000/fooditems"
//  fetch(URL)
//  .then (response => response.json())
//  .then(data => console.log (data))


let options = {
    "method": "post",
    "header": {
        "content-Type": "application/json"
    },
    
        "body": JSON.stringify ({
        id: "9",
        item:"shawarma"
        })
    }


fetch (URL , options)
.then (response => {
    if(response.ok){
        console.log("data inserted" , response.status , response.statusText)
    }
    else{
        console.log("error")
    }
})