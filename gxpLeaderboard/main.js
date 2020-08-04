function index(contributed, arr) {
    for (var i=0; i<arr.length; i++) {
    for (var j=0; j<arr[i].length; j++) {
    if (arr[i][j] == contributed) { return i; }
    }
    }
    return -1;
}
function formatNumber(num) {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
  }
let gxp10 = ""
function getGxp(guild){
    try{
    for(i=0;i<guild["members"].length;i++){
        contributedMember = parseInt(guild.members[i].contributed)
        member = guild.members[i].name;
        tag = guild.prefix
        if(mostGxpList.indexOf(contributedMember) == -1){
            mostGxpList.push(contributedMember);
        }
        if(index(contributedMember, mostGxpListMult) == -1){ 
            mostGxpListMult.push([member, tag, contributedMember]);
        }
    }
    }catch(e){}
    mostGxpList.sort(function(a, b){

        return b - a;
    
    });
    mostGxpListMult.sort(function(a, b){
        return b[2] - a[2];
    });
}
let alreadyrequested = []
function putInList(data){
    let xml1
    
    for(i=0;i<100;i++){
            xml1 = new XMLHttpRequest();
            xml1.open("GET", "https://api.wynncraft.com/public_api.php?action=guildStats&command=" + data["data"][i]["name"]);
            xml1.onreadystatechange = function(){
                    if(this.status == 200){
                        try{
                            resText2 = JSON.parse(this.responseText);
                            alreadyrequested.push(i)
                            getGxp(resText2); 
                            gxp10 = ""
    for (i = 0; i < 100; i++){
        gxp10 += (i+1) + ". " +  mostGxpListMult[i][0]+ "[" + mostGxpListMult[i][1] + "]" +": "+ formatNumber(mostGxpList[i]) + "<br>" ;
    }
        let output = document.getElementById('output');
        output.innerHTML = gxp10;
                            
                        }catch(e){}
                        
                        
                    
            }
            
    }
    xml1.send();      
    }};
    
    
    
    var mostGxpList = [];
    var mostGxpListMult = [];
    let resText1 = "";
    let resText2 = "";
function JSONTest(){
    let timestamp = document.getElementById('timestamp')
    timestamp.innerHTML += new Date().toString() + "<br>";
    let xml = new XMLHttpRequest();
    xml.open("GET", "https://api.wynncraft.com/public_api.php?action=statsLeaderboard&type=guild&timeframe={}");
    xml.onreadystatechange = function(){
    if(this.status == 200){
        try{
        resText1 = JSON.parse(this.responseText);
        putInList(resText1);
    }catch(e){}
}
}
xml.send();
}
   