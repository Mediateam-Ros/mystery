const korrektesPasswort = "xfbvfd.j-mkacksfohn8dsd5öxaüsdoapfiv5ngjk";

function istPC() {
    return !/Android|iPhone|iPad|iPod|Windows Phone/i.test(navigator.userAgent);
}

if (!istPC()) {
    document.body.innerHTML = `
        <div class="blockiert">
            <h1>🔒 Zugriff gesperrt</h1>
            <p>Dieses Mystery kann nur auf einem PC geöffnet werden.</p>
        </div>
    `;
    document.body.style.cssText = "overflow: hidden; display: flex; justify-content: center; align-items: center; height: 100vh; text-align: center; background: #111; color: white;";
} else {
    function zeigeDatenschutzHinweis() {
        return confirm(
            "🔒 Datenschutz-Hinweis:\n\n" +
            "Dieses Mystery ist passwortgeschützt. Deine Eingabe wird nicht gespeichert oder weitergegeben. " +
            "Sie wird nur während dieser Sitzung verwendet, um den Zugang zu gewähren.\n\n" +
            "Möchtest du fortfahren?"
        );
    }

    function passwortAbfrage() {
        if (!zeigeDatenschutzHinweis()) {
            document.body.innerHTML = `
                <div class="blockiert">
                    <h1>⚠ Zugriff abgebrochen</h1>
                    <p>Du hast die Datenschutzrichtlinien nicht akzeptiert. Der Zugang wurde verweigert.</p>
                </div>
            `;
            document.body.style.cssText = "display: flex; justify-content: center; align-items: center; height: 100vh; text-align: center; background: #111; color: white;";
            return;
        }

        let eingabe = prompt("🔑 Bitte das Passwort eingeben, um Zugriff zu erhalten:");
        
        if (eingabe === korrektesPasswort) {
            alert("✅ Zugriff gewährt! Viel Erfolg mit dem Mystery.");
        } else {
            alert("❌ Falsches Passwort! Zugriff verweigert.");
            document.body.innerHTML = `
                <div class="blockiert">
                    <h1>⛔ Zugriff verweigert</h1>
                    <p>Falsches Passwort! Du kannst nicht auf diese Seite zugreifen.</p>
                </div>
            `;
            document.body.style.cssText = "display: flex; justify-content: center; align-items: center; height: 100vh; text-align: center; background: #111; color: white;";
        }
    }

    passwortAbfrage();
}


const begriffe = [
    { text: "Deutscher Bund", x: 350, y: 100, kategorie: "politik", jahreszahl: 1815, info: ["Zusammenschluss deutscher Staaten nach dem Wiener Kongress", "lockerer Staatenbund der Souveränität der Mitgliedstaaten (39 Stück, z.B. Königreich Preußen, Kaiserreich Österreich, viele kleine weitere Staaten) respektierte", "Hauptzweck war Gewährleistung von Sicherheit und Frieden in Mitgliedsstaaten, außerdem sollten politische Interessen koordiniert werden", "oft innere Spannungen zwischen den einzelnen Mitgliedsstaaten ➔ mitauslöser Märzrevolution 1848"] },
    { text: "Märzrevolution", x: 100, y: 100, kategorie: "politik", jahreszahl: 1848, info: ["Ausgelöst durch politische, soziale und wirtschaftliche Faktoren, wie der Herrschaft von König Friedrich Wilhelm IV oder den Missernten 1846, wodurch Hunger enstand", "Ideen von Freiheit, Gleichheit und Brüderlichkeit verbreitetem sich im Deutschen Reich", "18.03.1848: versammlung von Bürgern, für Reformen", "Proteste sind in Auseinandersetzungen eskaliert, als die Polizei versuchte diese Aufzulösen", "daraufhin wurde die Frankfurter Nationalversammlung einberufen, um eine einheitliche Verfassung fürs Deutsche reich zu erarbeiten"] },
    { text: "Julirevolution", x: 100, y: 200, kategorie: "politik", jahreszahl: 1830, info: ["auch bekannt als: Les Trois Glorieuses („Die Drei Glorreichen Tage“)", "König Karl X. versuchte Macht des Adels wiederherzustellen, was Unzuifriedenheit hervorrufte", "Karl X. schränkte Pressefreiheit ein und schief das Parlament ab", "Industrialisierung führte zu sozialen Spannungen, vor allem bei Handwerkern und Arbeitern", "am 27.07 begannen Proteste in Paris, Barrikaden wurden errichtet, die Regierung versuchte die Proteste mit Gewalt zu unterdrücken", "Folgen: ➔ Karl X. musste am 30.06 abdanken und floh anschliessend nach England, ➔ <a href='https://de.wikipedia.org/wiki/Louis-Philippe_I.' target='_blank'>Louis Philippe</a> wurde als neuer König eingesetzt"] },
    { text: "Frankfurter Paulskirchenversammlung", x: 400, y: 150, kategorie: "politik", jahreszahl: 1848, info: ["Erstes gesamtdeutsches Parlament.", "Erarbeitete eine Verfassung für Deutschland.", "Kaiserkrone wurde von Friedrich Wilhelm IV. abgelehnt."] },
    { text: "Barrikadenkämpfe", x: 100, y: 300, kategorie: "politik", jahreszahl: 1848, info: ["Erstes gesamtdeutsches Parlament.", "Erarbeitete eine Verfassung für Deutschland.", "Kaiserkrone wurde von Friedrich Wilhelm IV. abgelehnt."] },
    { text: "Frankfurter Nationalversammlung", x: 100, y: 400, kategorie: "politik", jahreszahl: 1848, info: ["Ende März 1848 wurde beschlossen, die Nationalversammlung zu wählen, Ziel war es die Errichtung eines einheitlichen Deutschen Staates zu fördern", "ein Vorparlament entschied, nach einem allg. und gleichen Mehrheitswahlrecht volljähriger Männer wählen zu lassen", "18.05.1848 versammelten sich die Abgeordneten in der Paulskirche, um über eine Verfassung zu beraten", "Abgeordnete bildeten Klubs, um ihre politischen Ziele zu koordinieren, z.B. „Café Milani“ für monarchistische Rechte und der „Deutsche Hof“ für die demokratische Linke"] },

    { text: "Soziale Frage", x: 300, y: 450, kategorie: "gesellschaft", jahreszahl: 19, info: ["Problem der Arbeiterklasse durch Industrialisierung.", "Schlechte Arbeitsbedingungen und niedrige Löhne.", "Forderung nach Sozialreformen."] },
    { text: "Weberaufstand", x: 400, y: 500, kategorie: "gesellschaft", jahreszahl: 1844, info: ["Aufstand der schlesischen Weber wegen Hungerlöhnen.", "Brutal niedergeschlagen durch preußisches Militär.", "Symbol für soziale Missstände im Vormärz."] },
    { text: "Pauperismus", x: 600, y: 450, kategorie: "gesellschaft", jahreszahl: 19, info: ["Massenarmut im 19. Jahrhundert.", "Entstand durch Bevölkerungsexplosion und Missernten.", "Lösung durch Industrialisierung und soziale Reformen."] },
    { text: "Landbevölkerung", x: 500, y: 550, kategorie: "gesellschaft", jahreszahl: 19, info: ["Die Mehrheit der Deutschen lebte auf dem Land.", "Schlechte Lebensbedingungen, wenig Rechte.", "Viele zogen in die Städte zur Arbeit in Fabriken."] },
    { text: "Gleichberechtigung aller Bürger", x: 650, y: 600, kategorie: "gesellschaft", jahreszahl: 1848, info: ["Zentrale Forderung der Revolutionäre.", "Galt nicht für Frauen und Arme.", "Wurde in vielen Staaten erst später umgesetzt."] },

    { text: "Pressefreiheit", x: 700, y: 250, kategorie: "presse", jahreszahl: 1848, info: ["Forderung der Revolutionäre.", "Sollte politische Mitbestimmung ermöglichen.", "Wurde nach dem Scheitern der Revolution wieder eingeschränkt."] },
    { text: "Einschränkung der Presse", x: 900, y: 200, kategorie: "presse", jahreszahl: 1819, info: ["Zensur durch Karlsbader Beschlüsse.", "Unterdrückung kritischer Meinungen.", "Besonders gegen liberale und nationale Bewegungen."] },

    { text: "Gottesgnadentum", x: 150, y: 550, kategorie: "monarchie", jahreszahl: 19, info: ["Herrschaftsanspruch der Monarchen.", "Könige regieren angeblich von Gottes Gnaden.", "Wurde durch die Revolutionen in Frage gestellt."] },
    { text: "König Friedrich Wilhelm IV.", x: 600, y: 550, kategorie: "monarchie", jahreszahl: 1840, info: ["Preußischer König von 1840 bis 1861.", "Lehnte die deutsche Kaiserkrone 1849 ab.", "Setzte sich für eine konservative Ordnung ein."] },
    { text: "Napoleon", x: 650, y: 100, kategorie: "monarchie", jahreszahl: 1769, info: ["Französischer Kaiser und Eroberer Europas.", "Beendete das Heilige Römische Reich 1806.", "Führte Verwaltungs- und Rechtsreformen ein."] },

    { text: "Deutsche Einigungskriege", x: 850, y: 500, kategorie: "krieg", jahreszahl: 1864, info: ["Geführt von Preußen gegen Dänemark, Österreich und Frankreich.", "Endeten 1871 mit der deutschen Einheit.", "Bismarcks Strategie der 'Einigung durch Blut und Eisen'."] },
    { text: "Versailles", x: 1000, y: 400, kategorie: "krieg", jahreszahl: 1871, info: ["Ort der Proklamation des Deutschen Kaiserreichs.", "Symbol der deutschen Einheit unter preußischer Führung.", "Später Schauplatz des Versailler Vertrags 1919."] },
    { text: "Bismarck", x: 900, y: 450, kategorie: "krieg", jahreszahl: 1815, info: ["Eiserner Kanzler und Architekt der deutschen Einheit.", "Prägte die Innen- und Außenpolitik Deutschlands.", "Führte Sozialgesetze ein, um Sozialisten zu schwächen."] },
    
    { text: "Schwarz-Rot-Gold", x: 450, y: 700, kategorie: "ideen", jahreszahl: 1832, info: ["Symbol der deutschen Nationalbewegung.", "Erstmals verwendet beim Hambacher Fest.", "Heute die Farben der deutschen Flagge."] },
    { text: "Nationalgedanken", x: 650, y: 750, kategorie: "ideen", jahreszahl: 19, info: ["Wunsch nach nationaler Einheit und Unabhängigkeit.", "Wichtige Strömung im 19. Jahrhundert.", "Führte zur Gründung des Deutschen Reiches 1871."] },
    { text: "Vormärz", x: 550, y: 650, kategorie: "ideen", jahreszahl: 1815, info: ["Epoche vor der Revolution von 1848.", "Gekennzeichnet durch politische Unterdrückung.", "Geburtsstunde der liberalen und nationalen Bewegung."] },
    { text: "Luther", x: 750, y: 700, kategorie: "ideen", jahreszahl: 1483, info: ["Reformator und Symbolfigur deutscher Identität.", "Übersetzte die Bibel ins Deutsche.", "Inspirierte Proteste gegen Unterdrückung."] }
];


const verbindungen = [
    { von: "Märzrevolution", nach: "Vormärz" },
    { von: "Märzrevolution", nach: "Frankfurter Nationalversammlung" },
    { von: "Deutscher Bund", nach: "Märzrevolution" },
    { von: "Julirevolution", nach: "Einschränkung der Presse" },
    { von: "Julirevolution", nach: "Barrikadenkämpfe" },
    { von: "Frankfurter Paulskirchenversammlung", nach: "Frankfurter Nationalversammlung" },
];

const container = document.getElementById("karte-container");
const canvas = document.getElementById("connections");
const ctx = canvas.getContext("2d");
const popup = document.getElementById("popup");
const popupTitle = document.getElementById("popup-title");
const popupText = document.getElementById("popup-text");
const closeBtn = document.querySelector(".close");

canvas.width = window.innerWidth * 0.9;
canvas.height = 800;

const karten = {};
let dragging = false;
let justDragged = false;

// begriffe.forEach(begriff => {
//     let card = document.createElement("div");
//     card.classList.add("karte", begriff.kategorie);
//     card.style.left = `${begriff.x}px`;
//     card.style.top = `${begriff.y}px`;
//     card.innerText = begriff.text;

//     let isDragging = false;
//     let offsetX, offsetY;

//     card.addEventListener("mousedown", (e) => {
//         isDragging = true;
//         justDragged = false; 
//         dragging = true;
//         offsetX = e.clientX - card.offsetLeft;
//         offsetY = e.clientY - card.offsetTop;
//         card.style.zIndex = "10";
//     });

//     document.addEventListener("mousemove", (e) => {
//         if (isDragging) {
//             card.style.left = `${e.clientX - offsetX}px`;
//             card.style.top = `${e.clientY - offsetY}px`;
//             updateVerbindungen();
//             dragging = true;
//         }
//     });

//     document.addEventListener("mouseup", () => {
//         if (isDragging) {
//             isDragging = false;
//             dragging = false;
//             justDragged = true;

//             setTimeout(() => {
//                 justDragged = false;
//             }, 200);
//         }
//         card.style.zIndex = "1";
//     });

//     card.addEventListener("dblclick", (e) => {
//         showPopup(begriff.text, begriff.info, begriff.jahreszahl);
//     });

//     container.appendChild(card);
//     karten[begriff.text] = card;
// });

const containerWidth = container.clientWidth;
const containerHeight = 800;

const marginPercentage = 0.1;
const cardSize = 100; 

begriffe.forEach(begriff => {
    const minX = containerWidth * marginPercentage;
    const maxX = containerWidth - cardSize - (containerWidth * marginPercentage);
    const minY = containerHeight * marginPercentage;
    const maxY = containerHeight - cardSize - (containerHeight * marginPercentage);

    console.log(`Container: ${containerWidth} x ${containerHeight}`);
    console.log(`Berechnete Grenzen - minX: ${minX}, maxX: ${maxX}, minY: ${minY}, maxY: ${maxY}`);

    begriff.x = Math.random() * (maxX - minX) + minX;
    begriff.y = Math.random() * (maxY - minY) + minY;

    begriff.x = Math.min(Math.max(begriff.x, minX), maxX);
    begriff.y = Math.min(Math.max(begriff.y, minY), maxY);

    console.log(`Neue Position für ${begriff.text}: x = ${begriff.x}, y = ${begriff.y}`);

    let card = document.createElement("div");
    card.classList.add("karte", begriff.kategorie);
    card.style.left = `${begriff.x}px`;
    card.style.top = `${begriff.y}px`;
    card.innerText = begriff.text;

    let isDragging = false;
    let offsetX, offsetY;

    card.addEventListener("mousedown", (e) => {
        isDragging = true;
        justDragged = false;
        dragging = true;
        offsetX = e.clientX - card.offsetLeft;
        offsetY = e.clientY - card.offsetTop;
        card.style.zIndex = "10";
    });

    document.addEventListener("mousemove", (e) => {
        if (isDragging) {
            // Berechne neue Position der Karte, aber stelle sicher, dass sie nicht über den Rand hinausgeht
            let newX = e.clientX - offsetX;
            let newY = e.clientY - offsetY;

            newX = Math.min(Math.max(newX, minX), maxX);
            newY = Math.min(Math.max(newY, minY), maxY);

            card.style.left = `${newX}px`;
            card.style.top = `${newY}px`;
            updateVerbindungen();
            dragging = true;
        }
    });

    document.addEventListener("mouseup", () => {
        if (isDragging) {
            isDragging = false;
            dragging = false;
            justDragged = true;

            setTimeout(() => {
                justDragged = false;
            }, 200);
        }
        card.style.zIndex = "1";
    });

    card.addEventListener("dblclick", (e) => {
        showPopup(begriff.text, begriff.info, begriff.jahreszahl);
    });

    container.appendChild(card);
    karten[begriff.text] = card;
});



function zeichneVerbindungen() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.strokeStyle = "black";
    ctx.lineWidth = 2;

    verbindungen.forEach(verbindung => {
        let von = karten[verbindung.von];
        let nach = karten[verbindung.nach];

        if (von && nach) {
            let vonRect = von.getBoundingClientRect();
            let nachRect = nach.getBoundingClientRect();
            let containerRect = container.getBoundingClientRect();

            ctx.beginPath();
            ctx.moveTo(vonRect.left - containerRect.left + vonRect.width / 2, 
                       vonRect.top - containerRect.top + vonRect.height / 2);
            ctx.lineTo(nachRect.left - containerRect.left + nachRect.width / 2, 
                       nachRect.top - containerRect.top + nachRect.height / 2);
            ctx.stroke();
        }
    });
}

function updateVerbindungen() {
    requestAnimationFrame(zeichneVerbindungen);
}

zeichneVerbindungen();

function showPopup(title, infoList, year) {
    popupTitle.innerHTML = title;

    let yearContent = `<span class="year">Jahreszahl: ${year}</span>`;

    let content = "<ul>";
    infoList.forEach(info => {
        content += `<li>${info}</li>`;
    });
    content += "</ul>";

    let mediaContent = "";
    switch (title) {
        case "Deutscher Bund":
            mediaContent = `
                <img src="https://tse4.mm.bing.net/th?id=OIP.vZggm8n07FHMfsPBDPgUHAAAAA&pid=Api" 
                     alt="Deutscher Bund Karte">
                <a href="https://www.nationalatlas.de" target="_blank" class="source-link">Quelle: Nationalatlas</a>
            `;
            break;

        case "Vormärz":
            mediaContent = `
                <iframe src="https://www.youtube.com/embed/6PmGgQwwP74" allowfullscreen></iframe>
                <a href="https://www.youtube.com/embed/6PmGgQwwP74" target="_blank" class="source-link">Quelle: YouTube</a>
            `;
            break;

        case "Frankfurter Nationalversammlung":
            mediaContent = `
                <img src="https://www.bundestag.de/resource/image/218972/16x9/2340/1318/96a8e5a3cb5b0656fa647a2cb1c06ef1/53B2D46D2DD115484D3329CCBED1F42D/abgeordnete_bild.jpg" 
                     alt="Abgeordnete der Nationalversammlung">
                <a href="https://www.bundestag.de/parlament/geschichte/parlamentarismus/1848" target="_blank" class="source-link">Quelle: Deutscher Bundestag</a>
            `;
            break;

        case "Frank":
            mediaContent = `
                <iframe src="https://www.youtube.com/embed/XXXXX" allowfullscreen></iframe>
                <a href="https://www.youtube.com" target="_blank" class="source-link">Quelle: YouTube</a>
            `;
            break;
    }

    // Kombiniere alles zusammen: Titel + Jahreszahl + Informationen + Medieninhalt
    popupText.innerHTML = yearContent + content + mediaContent;

    popup.classList.add("show");
    popup.style.display = "block";
}

closeBtn.addEventListener("click", () => {
    popup.classList.remove("show");
    setTimeout(() => {
        popup.style.display = "none";
    }, 300);
});

window.addEventListener("click", (event) => {
    if (event.target === popup) {
        popup.classList.remove("show");
        setTimeout(() => {
            popup.style.display = "none";
        }, 300);
    }
});

