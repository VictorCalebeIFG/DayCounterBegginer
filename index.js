document.getElementById('CalculateButton').onclick = function(){
    
    
    let targetDate = new Date(document.getElementById('dateTarget').value).setHours(23, 59, 59);
    let today = new Date();
    let timeDifference = (targetDate - today) / (1000 * 60 * 60 * 24);

    let days  = Math.floor(timeDifference)
    let hours = Math.floor((timeDifference - days) * 24)

    if(days){
        document.getElementById('result').textContent = (days+1)+' days and '+hours+' hours'
    }
    else{ window.alert("Select a date.")}
    
}