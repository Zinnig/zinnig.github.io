const LE_Quests = [
    {
        name: "Tower of Ascension",
        le: 32768
    },
    {
        name: "Dwarves and Doguns Part IV",
        le: 20480
    },
    {
        name: "The Hero of Gavel",
        le: 20480
    },
    {
        name: "A Journey Further",
        le: 20480
    },
    {
        name: "WynnExcavation Site D",
        le: 16384
    },
    {
        name: "The Feathers Fly Part II",
        le: 12288
    },
    {
        name: "A Journey Beyond",
        le: 12288
    },
    {
        name: "Aldorei's Secret Part II",
        le: 10240
    },
    {
        name: "The Envoy Part I",
        le: 9152
    },
    {
        name: "A Marauder's Dues",
        le: 8192
    },
    {
        name: "Beyond the Grave",
        le: 8192
    },
    {
        name: "One Thousand Meters Under",
        le: 8192
    },
    {
        name: "Point of No Return",
        le: 8192
    },
    {
        name: "???",
        le: 6144
    },
    {
        name: "Fantastic Voyage",
        le: 6144
    },
    {
        name: "The Hunger of Gerts Part 1",
        le: 4864
    },
    {
        name: "The House of Twain",
        le: 4096
    },
    {
        name: "Jungle Fever",
        le: 4096
    },
    {
        name: "Lexdale Witch Trials",
        le: 4096
    },
    {
        name: "From the Bottom",
        le: 4096
    },
    {
        name: "The Thanos Vaults",
        le: 4096
    },
    {
        name: "Cowfusion",
        le: 4096
    },
    {
        name: "The Hidden City",
        le: 4096
    },
    {
        name: "Recipe For Disaster",
        le: 4096
    },
    {
        name: "Royal Trials",
        le: 4096
    },
]
run = () => {
    let completedQuests = [];
    ign = document.getElementById('ign').value;
    table = document.getElementById('table');
    l = table.rows.length; //Amount of rows
    if(l > 1){
        for(i = l-1; i >0; i--){
            table.deleteRow(i);
        }
    }
    output = document.getElementById('output');
    xml1 = new XMLHttpRequest();
    xml1.open("GET", `https://api.wynncraft.com/v2/player/${ign}/stats`);
    xml1.onreadystatechange = function () {
        if (this.status == 200 && this.readyState == 4) {
            try {
                res = JSON.parse(this.responseText);
                res.data[0].classes.forEach(clazz => {
                    obj = { class: { name: clazz.name, level: clazz.level }, data: [] }
                    LE_Quests.forEach(quest => {
                        obj1 = {
                            name: quest.name,
                            le: quest.le,
                            completed: clazz.quests.list.find(q => q === quest.name) != undefined,
                        };
                        obj.data.push(obj1);
                    });
                    if (!completedQuests.some((e) => e.class.name === obj.class.name && e.class.level === obj.class.level)) {
                        completedQuests.push(obj);
                    }
                });
                let total = 0;
                completedQuests.forEach(clasz => {
                    row = table.insertRow();
                    cell = row.insertCell();
                    cell.innerHTML = `${clasz.class.name.replace(/\d/g, "")}; ${clasz.class.level}`;
                    LE_Quests.forEach(quest => {
                        cell1 = row.insertCell();
                        cell1.innerHTML = "​";
                        cell1.style.backgroundColor = clasz.data.find(q => q.name === quest.name).completed ? "green" : "red";
                        total += clasz.data.find(q => q.name === quest.name).completed ? 0 : quest.le;
                    })
                })
                output.innerHTML = `Possible LE to be gained: ${total.toLocaleString("en")}`;
            } catch (e) {
                console.log(e);
            }
        }
    }
    xml1.send();
}