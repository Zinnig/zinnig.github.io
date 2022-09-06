const quests = ["A Hunter's Calling", "Point of No Return", "A Journey Further", "A Journey Beyond", "The Olmic Rune", "Mini-Quest - Slay Dragonlings", "The Hero of Gavel", "Royal Trials", "Mini-Quest - Slay Angels", "The Fortuneteller", "Mini-Quest - Slay Conures", "Mini-Quest - Slay Creatures of the Void", "Recipe For Disaster", "One Thousand Meters Under", "Mini-Quest - Slay Astrochelys Manis", "Dwarves and Doguns Part IV", "Mini-Quest - Slay Ifrits", "Dwarves and Doguns Part III", "Mini-Quest - Slay Azers", "The Feathers Fly Part II", "Dwarves and Doguns Part II", "Mini-Quest - Slay Frosted Guards & Cryostone Golems", "Dwarves and Doguns Part I", "Mini-Quest - Slay Magma Entities", "The Feathers Fly Part I", "Fantastic Voyage", "Mini-Quest - Slay Pernix Monkeys", "The Envoy Part II", "Enter the Dojo", "The Hidden City", "Mini-Quest - Slay Ailuropodas", "Beyond the Grave", "Mixed Feelings", "Cowfusion", "Desperate Metal", "The Canary Calls", "The Lost", "Mini-Quest - Slay Robots", "The Canyon Guides", "Mini-Quest - Slay Jinkos", "A Marauder's Dues", "The Envoy Part I", "The Belly of the Beast", "The Thanos Vaults", "???", "General's Orders", "The Qira Hive", "From the Bottom", "Mini-Quest - Slay Hobgoblins", "Fallen Delivery", "Realm of Light V - The Realm of Light", "The Hunger of Gerts Part 2", "Mini-Quest - Slay Felrocs", "The Hunger of Gerts Part 1", "Purple and Blue", "Aldorei's Secret Part II", "The Bigger Picture", "The Ultimate Weapon", "Flight in Distress", "Mini-Quest - Slay Weirds", "Aldorei's Secret Part I", "Reincarnation", "Acquiring Credentials", "Murder Mystery", "Mini-Quest - Slay Myconids", "Troubled Tribesmen", "Forbidden Prison", "Lexdale Witch Trials", "Realm of Light IV - Finding the Light", "WynnExcavation Site D", "Mini-Quest - Slay Dead Villagers", "Haven Antiquity", "Shattered Minds", "Grand Youth", "Lazarus Pit", "Temple of the Legends", "Memory Paranoia", "From the Mountains", "Lost Soles", "Mini-Quest - Slay Idols", "Lost Royalty", "Realm of Light III - A Headless History", "Out of my Mind", "Lost in the Jungle", "Realm of Light II - Taproot", "Redbeard's Booty", "Reclaiming the House", "Beneath the Depths", "Mini-Quest - Slay Wraiths & Phantasms", "The Order of the Grook", "An Iron Heart Part II", "The Passage", "Mini-Quest - Slay Lizardmen", "Zhight Island", "WynnExcavation Site C", "The Shadow of the Beast", "Realm of Light I - The Worm Holes", "Master Piece", "Death Whistle", "Corrupted Betrayal", "Jungle Fever", "Crop Failure", "The Maiden Tower", "A Grave Mistake", "Mini-Quest - Slay Slimes", "Rise of the Quartron", "The House of Twain", "An Iron Heart Part I", "Frost Bite", "WynnExcavation Site B", "Bob's Lost Soul", "Mini-Quest - Slay Orcs", "Blazing Retribution", "Underice", "Fate of the Fallen", "Star Thief", "Clearing the Camps", "Heart of Llevigar", "Tower of Ascension", "Ice Nations", "Mini-Quest - Slay Creatures of Nesaak Forest", "Pirate's Trove", "Canyon Condor", "Wrath of the Mummy", "Mini-Quest - Slay Coyotes", "Tribal Aggression", "WynnExcavation Site A", "Meaningful Holiday", "Kingdom of Sand", "A Sandy Scandal", "Green Gloop", "Craftmas Chaos", "Mini-Quest - Slay Scarabs", "The Mercenary", "Misadventure on the Sea", "Deja Vu", "Lost Tower", "The Corrupted Village", "Mini-Quest - Slay Skeletons", "Recover the Past", "The Dark Descent", "Dwelling Walls", "Cluck Cluck", "Pit of the Dead", "Studying the Corrupt", "Macabre Masquerade ''Hallowynn 2014''", "Grave Digger", "Maltic's Well", "Mini-Quest - Slay Mooshrooms", "Creeper Infiltration", "Arachnids' Ascent", "Stable Story", "Potion Making", "Elemental Exercise", "Mushroom Man", "Underwater", "Tunnel Trouble", "The Sewers of Ragni", "Infested Plants", "Mini-Quest - Slay Spiders", "Cook Assistant", "Poisoning the Pest", "King's Recruit", "Enzan's Brother", "Mini-Quest - Gather Koi II", "Mini-Quest - Gather Millet III", "Mini-Quest - Gather Cobalt II", "Mini-Quest - Gather Dark Logs II", "Mini-Quest - Gather Light Logs", "Mini-Quest - Gather Light Logs II", "Mini-Quest - Gather Light Logs III", "Mini-Quest - Gather Pine Logs", "Mini-Quest - Gather Pine Logs II", "Mini-Quest - Gather Pine Logs III", "Mini-Quest - Gather Decay Roots II", "Mini-Quest - Gather Decay Roots", "Mini-Quest - Gather Decay Roots III", "Mini-Quest - Gather Rice", "Mini-Quest - Gather Gylia Fish II", "Mini-Quest - Gather Avo Logs", "Mini-Quest - Gather Avo Logs II", "Mini-Quest - Gather Avo Logs III", "Mini-Quest - Gather Avo Logs IV", "Mini-Quest - Gather Sandstone", "Mini-Quest - Gather Cobalt", "Mini-Quest - Gather Carp", "Mini-Quest - Gather Sorghum IV", "Mini-Quest - Gather Sorghum", "Mini-Quest - Gather Sorghum II", "Mini-Quest - Gather Sorghum III", "Mini-Quest - Gather Molten Ore", "Mini-Quest - Gather Molten Ore II", "Mini-Quest - Gather Molten Ore III", "Mini-Quest - Gather Molten Ore IV", "Mini-Quest - Gather Molten Eel", "Mini-Quest - Gather Molten Eel II", "Mini-Quest - Gather Molten Eel III", "Mini-Quest - Gather Molten Eel IV", "Mini-Quest - Gather Copper", "Mini-Quest - Gather Diamonds IV", "Mini-Quest - Gather Millet", "Mini-Quest - Gather Millet II", "Mini-Quest - Gather Gudgeon", "Mini-Quest - Gather Wheat", "Mini-Quest - Gather Oak Logs", "Mini-Quest - Gather Barley", "Mini-Quest - Gather Birch Logs", "Mini-Quest - Gather Granite", "Mini-Quest - Gather Salmon II", "Mini-Quest - Gather Malt II", "Mini-Quest - Gather Gylia Fish", "Mini-Quest - Gather Acacia Logs II", "Mini-Quest - Gather Carp II", "Mini-Quest - Gather Gold II", "Mini-Quest - Gather Oats II", "Mini-Quest - Gather Acacia Logs", "Mini-Quest - Gather Willow Logs II", "Mini-Quest - Gather Salmon", "Mini-Quest - Gather Willow Logs", "Mini-Quest - Gather Oats", "Mini-Quest - Gather Trout", "Mini-Quest - Gather Gold", "Mini-Quest - Gather Icefish", "Mini-Quest - Gather Spruce Logs", "Mini-Quest - Gather Spruce Logs II", "Mini-Quest - Gather Jungle Logs II", "Mini-Quest - Gather Jungle Logs", "Mini-Quest - Gather Piranhas", "Mini-Quest - Gather Piranhas II", "Mini-Quest - Gather Koi", "Mini-Quest - Gather Iron II", "Mini-Quest - Gather Bass IV", "Mini-Quest - Gather Bass III", "Mini-Quest - Gather Bass II", "Mini-Quest - Gather Bass", "Mini-Quest - Gather Dark Logs", "Mini-Quest - Gather Koi III", "Mini-Quest - Gather Hops", "Mini-Quest - Gather Hops II", "Mini-Quest - Gather Rye II", "Mini-Quest - Gather Rye", "Mini-Quest - Gather Silver", "Mini-Quest - Gather Silver II", "Mini-Quest - Gather Cobalt III", "Mini-Quest - Gather Kanderstone III", "Mini-Quest - Gather Kanderstone", "Mini-Quest - Gather Kanderstone II", "Mini-Quest - Gather Gylia Fish III", "Mini-Quest - Gather Rice II", "Mini-Quest - Gather Rice III", "Mini-Quest - Gather Rice IV", "Mini-Quest - Gather Bamboo", "Mini-Quest - Gather Diamonds III", "Mini-Quest - Gather Diamonds", "Mini-Quest - Gather Diamonds II", "Mini-Quest - Gather Dark Logs III", "Mini-Quest - Gather Icefish II", "Mini-Quest - Gather Iron", "Mini-Quest - Gather Sandstone II", "Mini-Quest - Gather Malt"];
run = () => {
    let completedQuests = [];
    ign = document.getElementById('ign').value;
    table = document.getElementById('table');
    tr = document.getElementById('tr');
    l = table.rows.length; //Amount of rows
    if (l > 1) {
        for (i = l - 1; i > 0; i--) {
            table.deleteRow(i);
        }
    }
    for(let id in quests){
        tr.appendChild(document.createElement("th"))
            .appendChild(document.createTextNode(quests[id]));
    }
    xml1 = new XMLHttpRequest();
    xml1.open("GET", `https://api.wynncraft.com/v2/player/${ign}/stats`);
    xml1.onreadystatechange = function () {
        if (this.status == 200 && this.readyState == 4) {
            try {
                res = JSON.parse(this.responseText);
                res.data[0].classes.forEach(clazz => {
                    obj = { class: { name: clazz.name, clevel: clazz.professions.combat.level, level: clazz.level}, data: [] }
                    quests.forEach(quest => {
                        obj1 = {
                            name: quest,
                            completed: clazz.quests.list.find(q => q === quest) != undefined,
                        };
                        obj.data.push(obj1);
                    });
                    if (!completedQuests.some((e) => e.class.name === obj.class.name && e.class.level === obj.class.level)) {
                        completedQuests.push(obj);
                    }
                });
                completedQuests.forEach(clasz => {
                    row = table.insertRow();
                    cell = row.insertCell();
                    cell.innerHTML = `${clasz.class.name.replace(/\d/g, "")}; ${clasz.class.level} [${clasz.class.clevel}]`;
                    quests.forEach(quest => {
                        cell1 = row.insertCell();
                        cell1.innerHTML = "​";
                        cell1.style.backgroundColor = clasz.data.find(q => q.name === quest).completed ? "green" : "red";
                    })
                })
            } catch (e) {
                console.log(e);
            }
        }
    }
    xml1.send();
}