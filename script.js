document.addEventListener("DOMContentLoaded", function () {
    const spelInput = document.getElementById("spelInput");
    const slumpaKnapp = document.getElementById("slumpaKnapp");
    const rensaKnapp = document.getElementById("rensaKnapp");
    const resultat = document.getElementById("resultat");
    const spelLista = document.getElementById("spelLista");

    const spelArray = [];

    slumpaKnapp.addEventListener("click", slumpaSpel);
    rensaKnapp.addEventListener("click", rensaSpel);

    function slumpaSpel() {
        if (spelArray.length > 0) {
            const slumpatIndex = Math.floor(Math.random() * spelArray.length);
            const slumpatSpel = spelArray[slumpatIndex];
            resultat.textContent = `Ni ska spela: ${slumpatSpel}`;
        } else {
            resultat.textContent = "Skriv in ett spel först!";
        }
    }

    function rensaSpel() {
        spelArray.length = 0;
        spelLista.innerHTML = "";
    }

    spelInput.addEventListener("keyup", function (event) {
        if (event.key === "Enter") {
            event.preventDefault();
            läggTillSpel();
        }
    });

    function läggTillSpel() {
        const spelText = spelInput.value.trim();

        if (spelText) {
            spelArray.push(spelText);
            spelInput.value = "";
            renderaSpelLista();
        }
    }

    function renderaSpelLista() {
        spelLista.innerHTML = "";
        spelArray.forEach(function (spel) {
            const li = document.createElement("li");
            li.textContent = spel;
            spelLista.appendChild(li);
        });
    }

    const spelareInput = document.getElementById("spelareInput");
    const slumpaLagKnapp = document.getElementById("slumpaLagKnapp");
    const rensaSpelareKnapp = document.getElementById("rensaSpelareKnapp");
    const lagResultat = document.getElementById("lagResultat");
    const spelareLista = [];

    spelareInput.addEventListener("keyup", function (event) {
        if (event.key === "Enter") {
            event.preventDefault();
            läggTillSpelare();
        }
    });

    slumpaLagKnapp.addEventListener("click", slumpaLag);
    rensaSpelareKnapp.addEventListener("click", rensaSpelareLista);

    function läggTillSpelare() {
        const spelareText = spelareInput.value.trim();

        if (spelareText) {
            spelareLista.push(spelareText);
            spelareInput.value = "";
            renderaSpelareLista();
        }
    }

    function renderaSpelareLista() {
        const spelareListaUl = document.getElementById("spelareLista");
        spelareListaUl.innerHTML = "";
        spelareLista.forEach(function (spelare) {
            const li = document.createElement("li");
            li.textContent = spelare;
            spelareListaUl.appendChild(li);
        });
    }

    function slumpaLag() {
        const antalSpelare = spelareLista.length;

        if (antalSpelare < 2) {
            lagResultat.textContent = "Det krävs minst 2 spelare för att slumpa lag.";
            lagResultat.classList.add("error-text"); 
    } else {
        lagResultat.textContent = "";
        lagResultat.classList.remove("error-text");  
        slumpaOchDelaUppLag();
    }
    }

    function slumpaOchDelaUppLag() {
        const antalSpelare = spelareLista.length;

        if (antalSpelare < 2) {
            lagResultat.textContent = "Det krävs minst 2 spelare för att slumpa lag.";
        } else {
            const lagnamn = [
                "Dank Memelords", "Pwnage Patrol", "Noob Nukers", "Ctrl+Alt+Defeat", "Game of Memes",
                "Pixel Pioneers", "Lag 404", "Meme Team Six", "Loot Goblins", "Epic Gamers United",
                "Minecraft Masters", "Rage Quit Reapers", "Dungeon & Dankness", "The Legendary Looters",
                "The Fortnite Force", "Overwatch Obsessed", "PewDiePie's Army", "Console Commandos",
                "LAN Party Legends", "Moba Maniacs", "Nerf Herders", "Couch Co-op Crusaders", "Gaming Gurus",
                "Resident Evils", "The Last of Usables", "Zelda Zealots", "Warcraft Warlords",
                "Starcraft Survivors", "Team Sonic Boom", "The Binding of Isaac", "Counter-Strike Crusaders",
                "Halo Heroes", "Retro Gaming Rebels", "Rainbow Six Recruits", "The Sims Squad",
                "Pokémon Masters", "Grand Theft Auto Gang", "Apex Legends Assemble", "Super Mario Mavericks",
                "Dragon Age Disciples", "Doom Day Preppers", "Borderlands Bandits", "Assassin's Creed Alliance",
                "Fallout Faction", "Minecraft Minions", "Team Fortress Troopers", "League of Legends Legion",
                "Witcher's Warriors", "Fortnite Fanatics", "Dark Souls Survivors"
            ];
            const slumpatLagnamn1 = lagnamn[Math.floor(Math.random() * lagnamn.length)];
            let slumpatLagnamn2 = slumpatLagnamn1;
            while (slumpatLagnamn2 === slumpatLagnamn1) {
                slumpatLagnamn2 = lagnamn[Math.floor(Math.random() * lagnamn.length)];
            }

            const slumpadeSpelare = shuffleArray(spelareLista.slice());
            const halvaLaget = Math.ceil(antalSpelare / 2);

            const lag1 = slumpadeSpelare.slice(0, halvaLaget);
            const lag2 = slumpadeSpelare.slice(halvaLaget);

            const lagResultatTable = document.getElementById("lagResultat");
            lagResultatTable.innerHTML = `
                <tr>
                    <td>${slumpatLagnamn1}</td>
                    <td>${slumpatLagnamn2}</td>
                </tr>
                <tr>
                    <td>${lag1.join("<br>")}</td>
                    <td>${lag2.join("<br>")}</td>
                `;
        }
    }

    function rensaSpelareLista() {
        spelareLista.length = 0;
        const spelareListaUl = document.getElementById("spelareLista");
        spelareListaUl.innerHTML = "";
    }

    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            const temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
        return array;
    }
});
