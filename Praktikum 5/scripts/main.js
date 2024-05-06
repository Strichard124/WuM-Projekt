// Funktion, um die Suche auszuführen
async function searchPodcast() {

    // URL für die Suche auf fyyd API
    const apiUrl = `https://api.fyyd.de/0.2/search/podcast/?title=${encodeURIComponent(document.getElementById("search"))}`;
    const statusElement = document.getElementById('statusText');

    statusElement.textContent = 'Suche läuft ...'; // Anzeige während der Suche

    try {
        // Fetch API verwenden, um die Suche auszuführen
        const response = await fetch(apiUrl);

        // Anzeigen des HTTP-Response-Status
        statusElement.textContent = `Status: ${response.status} ${response.statusText}`;

        // Überprüfen des Antwortstatus
        if (!response.ok) {
            throw new Error('Fehler beim Abrufen der Daten');
        }

        // JSON-Daten aus der Antwort extrahieren
        const data = await response.json();

        // Rückgabe der gefundenen Podcasts
        return data;

    } catch (error) {
        // Fehlerbehandlung
        console.error('Fehler bei der Suche nach Podcasts:', error);
        statusElement.textContent = 'Fehler bei der Suche';
        return null;
    }
}