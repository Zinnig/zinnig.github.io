setupTimeDiff = (diff) => {
    years = Math.floor(diff / (365 * 24 * 60 * 60 * 1000));
    days = Math.floor((diff - years * (365 * 24 * 60 * 60 * 1000)) / (24 * 60 * 60 * 1000));
    hours = Math.floor((diff - years * (365 * 24 * 60 * 60 * 1000) - days * (24 * 60 * 60 * 1000)) / (60 * 60 * 1000));
    minutes = Math.floor((diff - years * (365 * 24 * 60 * 60 * 1000) - days * (24 * 60 * 60 * 1000) - hours * (60 * 60 * 1000)) / (60 * 1000));
    seconds = Math.floor((diff - years * (365 * 24 * 60 * 60 * 1000) - days * (24 * 60 * 60 * 1000) - hours * (60 * 60 * 1000) - minutes * (60 * 1000)) / (1000));
    output = `${years > 0 ? years + "y:" : ""}${days > 0 ? days + "d:" : ""}${hours > 0 ? hours + "h:" : ""}${minutes > 0 ? minutes + "min:" : ""}${seconds > 0 ? seconds + "s" : ""}`;
    output = output[output.length - 1] == ":" ? output.slice(0, -1) : output;
    return output;
}
run = () => {
    json1 = document.getElementById('json1');
    json2 = document.getElementById('json2');
    outputSpan = document.getElementById('output');
    json1 = JSON.parse(json1.value);
    json2 = JSON.parse(json2.value);
    output = ""
    json2.members.forEach(elem => {
        oldMember = json1.members.find(mem => mem.uuid == elem.uuid)
        if (oldMember == undefined) {
            output += `${elem.name}: Undefined.....<br>`
            return;
        }
        if (Math.abs(elem.contributed - oldMember.contributed) > 0) {
            output += `${elem.name}: ${(Math.abs(elem.contributed - oldMember.contributed)).toLocaleString('en')}<br>`;
        }
    })
    timeDiff = Math.abs(json2.request.timestamp - json1.request.timestamp);
    output += `Time Difference (ACCORDING TO THE API): ${setupTimeDiff(timeDiff)}`
    outputSpan.innerHTML = output;
}