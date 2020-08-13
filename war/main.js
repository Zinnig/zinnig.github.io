function getInput(){
    let input = parseInt(document.getElementById('input').value)
    let output = document.getElementById('output');
    let inputBNum = input.toString(2)
    let inputMS = inputBNum.slice(0, 36)
    let inputMSInt = parseInt(inputMS, 2)
    let inputTime = inputMSInt
    inputTime += 1420070400000
    let inputTimeStamp = new Date(inputTime);
    output.innerHTML = inputTimeStamp.toUTCString()
    

}