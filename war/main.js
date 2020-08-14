function getInput(){
    let input = parseInt(document.getElementById('input').value)
    let output = document.getElementById('output');
    inputBNum = input.toString(2)
    inputMS = inputBNum.slice(0, 38)
    inputMSInt = parseInt(inputMS, 2)
    inputTime = inputMSInt
    inputTime += 1420070400000
    inputTimeStamp = new Date(inputTime);
    output.innerHTML = inputTimeStamp.toUTCString()
    

}