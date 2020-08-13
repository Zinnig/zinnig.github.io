//prepare the Input, then put it into the output string. 

let executed = false
function getInput(){
    if(executed != true){
    let input = document.getElementById('input').value;
    let output = document.getElementById('output');
    // Substrings to find: [CHAT], Joined
    input1 = input.replace(input.slice(0, 56), "")
    input1 = input1.replace(/� -/g, " Emeralds");
    while (input1.search(/(CHAT)/) != -1){
        input1 = input1.replace(input1.slice(input1.search(/(Joined)/), input1.search(/(CHAT)/) + 6),"<br>");
        
    }
    input1 = input1.replace(input1.slice(input1.search(/(Joined)/), input1.search(/(Joined)/) + 17), "");
    executed = true;
    guildList(input1);
    let gxpButton = document.getElementById('xp')
    let emButton = document.getElementById('em')
    gxpButton.style.visibility = 'visible';
    emButton.style.visibility = 'visible';
    }
    output.innerHTML = input1;
}
 

let gList = [[]]
function guildList(str){   
    for(i = 1; i<=input1.match(/#/g).length; i++){
        name = str.slice(str.search(/#/) + 3, str.search((/( -)/)))
        if(name.search(" ") != -1){
            name = name.replace(" ", "")
        }
        xp = Number(str.slice(str.search(/(- )/) + 2, str.search(/( XP)/)))
        ems = Number(str.slice(str.search(/(XP - )/) + 5, str.search(/(Emeralds)/) - 1))
        
        gList.push([name, xp, ems])
        str = str.replace(str.slice(str.search(/#/),str.search(/(<br>)/) + 4), "")
    }
    gList.shift()
    return gList
}
function emLeaderboard(list){
    let em = list.sort(function(a, b){
        return b[2] - a[2]
    });
    ems = "";
    emSum = 0;
    for(i=0; i < input1.match(/#/g).length; i++){
        ems += (i+1) + ". " + em[i][0] + ": " + em[i][2].toLocaleString("en") + " Emeralds" + "<br>" 
        emSum += em[i][2]
    }
    output.innerHTML = ems + "<br> The guild has collected " + emSum.toLocaleString("en") + " Emeralds from contributions. <br> #1 in Emeralds (" + em[0][0] +") has contributed about " + Math.round(((em[0][2] / emSum )* 100) * 100) /100 +"% of the total " + "(" + em[0][2].toLocaleString("en") + " Emeralds)";

}

function gxpLeaderboard(list){
    let xpL = list.sort(function(a, b){
        return b[1] - a[1]
    });
    gxp = "";
    gxpSum = 0;
    for(i=0;i <input1.match(/#/g).length; i++){
       gxp += (i+1) + ". " + xpL[i][0] + ": " + xpL[i][1].toLocaleString("en") + " XP" + "<br>";
        gxpSum += xpL[i][1]
    }

    output.innerHTML = gxp + "<br> The guild has collected " + gxpSum.toLocaleString("en") + " GXP in total. <br> #1 in GXP ("+ xpL[0][0] +") has collected about " + Math.round(((xpL[0][1] / gxpSum )* 100) * 100) /100+ "% of the total " + "(" + xpL[0][1].toLocaleString("en") +" GXP)";
}
