const korrektesPasswort = "Anthony";

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
    { text: "Deutscher Bund", x: 100, y: 100, kategorie: "politik", info: ["Gegründet 1815 beim Wiener Kongress.", "Machtgleichgewicht, keine nationale Einheit."] },
    { text: "Märzrevolution", x: 300, y: 100, kategorie: "politik", info: ["1848: Volksaufstände für Demokratie.", "Scheiterte durch militärische Gewalt."] },
    { text: "Julirevolution", x: 200, y: 300, kategorie: "politik", info: ["1830: Revolution in Frankreich.", "Beeinflusste Deutschland."] },
    
    { text: "Soziale Frage", x: 300, y: 450, kategorie: "gesellschaft", info: ["Problem der Arbeiterklasse durch Industrialisierung."] },
    { text: "Weberaufstand", x: 400, y: 500, kategorie: "gesellschaft", info: ["1844: Protest gegen Löhne."] },
    { text: "Pauperismus", x: 600, y: 450, kategorie: "gesellschaft", info: ["Massenarmut im 19. Jahrhundert."] },

    { text: "Pressefreiheit", x: 700, y: 250, kategorie: "presse", info: ["Forderung der Revolution 1848."] },
    { text: "Einschränkung der Presse", x: 900, y: 200, kategorie: "presse", info: ["Zensur nach Karlsbader Beschlüssen."] },

    { text: "Gottesgnadentum", x: 150, y: 550, kategorie: "monarchie", info: ["Herrschaftsanspruch der Monarchen."] },
    { text: "König Friedrich Wilhelm IV.", x: 600, y: 550, kategorie: "monarchie", info: ["Lehnte 1849 die Kaiserkrone ab."] },

    { text: "Deutsche Einigungskriege", x: 850, y: 500, kategorie: "krieg", info: ["1864–1871: Kriege zur deutschen Einheit."] },
    { text: "Versailles", x: 1000, y: 400, kategorie: "krieg", info: ["1871: Ausrufung des Deutschen Kaiserreichs."] },

    { text: "Schwarz-Rot-Gold", x: 450, y: 700, kategorie: "ideen", info: ["Symbol der deutschen Nationalbewegung."] },
    { text: "Nationalgedanken", x: 650, y: 750, kategorie: "ideen", info: ["Wunsch nach nationaler Einheit."] }
];

const verbindungen = [
    { von: "Deutscher Bund", nach: "Märzrevolution" },
    { von: "Märzrevolution", nach: "Julirevolution" },
    { von: "Soziale Frage", nach: "Weberaufstand" },
    { von: "Pressefreiheit", nach: "Einschränkung der Presse" },
    { von: "Gottesgnadentum", nach: "König Friedrich Wilhelm IV." },
    { von: "Deutsche Einigungskriege", nach: "Versailles" },
    { von: "Schwarz-Rot-Gold", nach: "Nationalgedanken" }
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

begriffe.forEach(begriff => {
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
            card.style.left = `${e.clientX - offsetX}px`;
            card.style.top = `${e.clientY - offsetY}px`;
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
        showPopup(begriff.text, begriff.info);
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

function showPopup(title, infoList) {
    popupTitle.innerText = title;

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

        case "Märzrevolution":
            mediaContent = `
                <iframe src="https://www.youtube.com/embed/6PmGgQwwP74" allowfullscreen></iframe>
                <a href="https://www.youtube.com" target="_blank" class="source-link">Quelle: YouTube</a>
            `;
            break;

        case "Bismarck":
            mediaContent = `
                <img src="https://tse4.mm.bing.net/th?id=OIP.YtIIPyH495D8Hv3tBNSQbwHaJl&pid=Api" 
                     alt="Bismarck">
                <a href="https://www.britannica.com" target="_blank" class="source-link">Quelle: Britannica</a>
            `;
            break;

        case "Versailles":
            mediaContent = `
                <iframe src="https://www.youtube.com/embed/XXXXX" allowfullscreen></iframe>
                <a href="https://www.youtube.com" target="_blank" class="source-link">Quelle: YouTube</a>
            `;
            break;
    }

    popupText.innerHTML = content + mediaContent;

    popup.classList.add("show");
    popup.style.display = "block";
}

// Schließen des Popups mit sanfter Animation
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

