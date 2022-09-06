const LE_Quests = [
    {
        name: "Tower of Ascension",
        le: 32768,
        level: 40
    },
    {
        name: "The Ultimate Weapon",
        le: 28672,
        level: 75
    },
    {
        name: "Dwarves and Doguns Part IV",
        le: 20480,
        level: 94
    },
    {
        name: "The Hero of Gavel",
        le: 20480,
        level: 99
    },
    {
        name: "A Journey Further",
        le: 20480,
        level: 101
    },
    {
        name: "WynnExcavation Site D",
        le: 16384,
        level: 70
    },
    {
        name: "Master Piece",
        le: 12288,
        level: 53
    },
    {
        name: "The Feathers Fly Part II",
        le: 12288,
        level: 93
    },
    {
        name: "A Journey Beyond",
        le: 12288,
        level: 100
    },
    {
        name: "Aldorei's Secret Part II",
        le: 10240,
        level: 76
    },
    {
        name: "The Envoy Part I",
        le: 9152,
        level: 89
    },
    {
        name: "The Fortuneteller",
        le: 8192,
        level: 97
    },
    {
        name: "A Marauder's Dues",
        le: 8192,
        level: 83
    },
    {
        name: "Beyond the Grave",
        le: 8192,
        level: 87
    },
    {
        name: "One Thousand Meters Under",
        le: 8192,
        level: 95
    },
    {
        name: "Point of No Return",
        le: 8192,
        level: 102
    },
    {
        name: "???",
        le: 6144,
        level: 80
    },
    {
        name: "Fantastic Voyage",
        le: 6144,
        level: 90
    },
    {
        name: "The Hunger of Gerts Part 1",
        le: 4864,
        level: 77
    },
    {
        name: "The House of Twain",
        le: 4096,
        level: 49
    },
    {
        name: "Jungle Fever",
        le: 4096,
        level: 52
    },
    {
        name: "Lexdale Witch Trials",
        le: 4096,
        level: 72
    },
    {
        name: "From the Bottom",
        le: 4096,
        level: 80
    },
    {
        name: "The Thanos Vaults",
        le: 4096,
        level: 81
    },
    {
        name: "Cowfusion",
        le: 4096,
        level: 86
    },
    {
        name: "The Hidden City",
        le: 4096,
        level: 88
    },
    {
        name: "Recipe For Disaster",
        le: 4096,
        level: 96
    },
    {
        name: "Royal Trials",
        le: 4096,
        level: 98
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
                    obj = { class: { name: clazz.name, level: clazz.level, clevel: clazz.professions.combat.level}, data: [] }
                    LE_Quests.forEach(quest => {
                        obj1 = {
                            name: quest.name,
                            le: quest.le,
                            level: quest.level,
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
                    cell.innerHTML = `${clasz.class.name.replace(/\d/g, "")}; ${clasz.class.level} [${clasz.class.clevel}]`;
                    LE_Quests.forEach(quest => {
                        cell1 = row.insertCell();
                        cell1.innerHTML = "​";
                        cell1.style.backgroundColor = clasz.data.find(q => q.name === quest.name).completed ? "green" : clasz.class.clevel < quest.level ? "gray": "red";
                        total += (clasz.data.find(q => q.name === quest.name).completed || clasz.class.clevel < quest.level) ? 0 : quest.le;
                    })
                })
                output.innerHTML = `Possible Emeralds to be gained: ${total.toLocaleString("en")}`;
            } catch (e) {
                console.log(e);
            }
        }
    }
    xml1.send();
}