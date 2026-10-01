# Google-Karte: Korrektur

Diese drei Dateien unter exakt denselben Pfaden in GitHub einspielen:

- kontakt/index.html (ersetzen)
- assets/css/google-map.css (neu)
- assets/js/google-map.js (neu)

Die neuen Dateien müssen in den Unterordnern assets/css und assets/js liegen. Nicht auf der obersten Ebene ablegen. Die HTML-Seite bindet sie mit einer Versionskennung ein, damit alte Browser-Caches nicht verwendet werden. main.js und style.css müssen für diese Korrektur nicht ersetzt werden.

Nach Commit changes warten, bis GitHub Pages veröffentlicht hat, dann die Kontaktseite mit Strg+F5 neu laden. Auf Google-Karte laden klicken. Zuvor wird keine Verbindung zu Google hergestellt. Der Button ist auch vor der JavaScript-Initialisierung sichtbar, aber deaktiviert. Bleibt er grau/deaktiviert, die Pfade der beiden neuen Dateien prüfen. Der externe Link Route bei Google Maps planen bleibt verfügbar.

Die Aktivierung und das Schließen wurden technisch getestet. Die externe Darstellung der Google-Karte konnte hier nicht visuell geprüft werden. Bei einer Google-Sperre oder Browserblockade den Routenlink verwenden.

Die enthaltene Kontaktseite basiert auf unserem letzten Export. Eigene Textänderungen daran vor dem Ersetzen sichern. Bilder und deren Namen werden nicht verändert; auch Teamreihenfolge und Profilgalerien bleiben erhalten. Es werden keine anderen HTML-Seiten ersetzt.
