# Kanzleiwebsite für GitHub Pages

Fertige statische Präsentationsversion: HTML, CSS und JavaScript. Kein Build, kein Python und keine Installation notwendig. Die Teamseite enthält drei Profile oben und zwei mittig darunter.

## 1. Paket in dein Repository hochladen

1. ZIP-Datei auf deinem Computer entpacken.
2. Dein vorbereitetes GitHub-Repository öffnen.
3. **Add file → Upload files** wählen.
4. Den **Inhalt** des entpackten Ordners hochladen: `index.html`, die Seitenordner (`team`, `karriere` usw.), `assets`, `404.html`, `robots.txt`, README und `.nojekyll`. `index.html` muss direkt auf der obersten Ebene des Repositorys liegen, nicht in einem weiteren Paketordner. Nicht die ZIP-Datei hochladen.
5. Mit **Commit changes** speichern. Vorhandene gleichnamige Website-Dateien werden ersetzt; andere Repository-Inhalte nicht löschen. Falls eine `.nojekyll`-Datei nicht mit hochgeladen wird, über **Add file → Create new file** eine leere Datei dieses Namens erstellen.

## 2. GitHub Pages einschalten

1. Im Repository **Settings → Pages** öffnen.
2. Unter **Build and deployment** als Source **Deploy from a branch** auswählen.
3. Deinen Branch (meist `main`) und den Ordner **/(root)** auswählen.
4. **Save** klicken und die Veröffentlichung abwarten.
5. Den dort angezeigten Website-Link öffnen. Bei einem normalen Projektrepository lautet er `https://DEIN-NAME.github.io/DEIN-REPOSITORY/`.

GitHub Pages muss im verwendeten Account/Repository verfügbar sein. Normale Pages-Seiten sind öffentlich erreichbar. Für GitHub Free wird typischerweise ein öffentliches Repository verwendet. Besucher benötigen für eine öffentliche Website kein GitHub- oder ChatGPT-Konto.

## 3. Fotos ergänzen

Im Repository `assets/images/` öffnen und Bilder hochladen. Die vollständige Dateinamenliste steht in [assets/images/BILDER.md](assets/images/BILDER.md). Pro Person sind drei Bilder vorbereitet. Beispiel:

- `kai-eric-hagemeier-1.jpg`: Portrait (Übersicht und Profilkopf)
- `kai-eric-hagemeier-2.jpg`: persönliches Foto
- `kai-eric-hagemeier-3.jpg`: weiteres persönliches Foto

WebP, JPG, JPEG und PNG werden unterstützt. Fehlende Dateien behalten ihren Platzhalter. In jeder HTML-Datei steht vor dem Bildplatz ein Kommentar `BILD: assets/images/DATEINAME.jpg`. Der Wert `data-photo` am Bildplatz und `title` am Bild sind der Dateiname ohne Endung. Das zugehörige Script setzt den Bildpfad automatisch relativ zu `assets/images/`; deshalb ist im Ausgangs-HTML noch kein `src` angegeben. Kein HTML-Eingriff zum Einsetzen der Fotos nötig. Falls Dateien schon vorhanden sind, mit gleichem Namen ersetzen. Nur ein Format je Motiv behalten.

## 4. Texte selbst ändern

Die passende `index.html` öffnen, auf Bearbeiten klicken und sichtbare Texte ändern. Beispielsweise steht das Profil von Susanne Knak in `team/susanne-knak/index.html`. Bearbeite nur die Texte zwischen HTML-Tags, nicht die Tags selbst. Suche nach `[TEXT FEHLT:` oder `[DATEN PRÜFEN:`. Speichere mit **Commit changes**.

Die Dateien sind fertiges HTML, keine automatisch regenerierte Website. Deine Textänderungen bleiben daher erhalten. Gemeinsame Angaben in Header/Footer sind in mehreren Dateien enthalten und müssen gegebenenfalls an mehreren Stellen geändert werden. Logo ist weiterhin eine vorläufige Wortmarke.

## 5. Präsentation und Feedback

Vor dem Versenden des Links die Startseite und eine Profilseite auf Smartphone und Desktop öffnen. Einen Bewerbungsablauf mit Testdaten durchgehen. Empfänger um Feedback zu Gesamteindruck, Navigation, Leistungen und Team bitten. Auf Platzhalter und Demoformulare hinweisen.

## Datenschutz und Grenzen

Kontakt und Bewerbung sind ausschließlich Demo: keine Übermittlung, kein Server, keine Uploads, keine dauerhafte Speicherung. Nur Testdaten eingeben. Original-Logo, Inhalte, Fotozuordnung, Stellenverfügbarkeit und geschäftliche Angaben sind noch zu bestätigen. Impressum und Datenschutz enthalten Arbeitsplatzhalter und müssen für den tatsächlichen öffentlichen Einsatz geprüft und vervollständigt werden. GitHub Pages verarbeitet technische Zugriffe; die Datenschutzerklärung muss diesen Anbieter berücksichtigen. Personenfotos nur mit entsprechender Freigabe veröffentlichen.

Alle HTML-Seiten enthalten `noindex,nofollow`, robots.txt verhindert reguläres Crawling. Dies ist keine Zugriffssperre: der Link kann weitergegeben werden. Keine vertraulichen oder personenbezogenen Bewerberdaten im Repository ablegen.

## Späterer Produktivbetrieb

Eigene Domain, bestätigte Rechtstexte, vollständige Inhalte, echte Formularverarbeitung und ggf. sicheres Bewerbersystem separat einrichten. Suchmaschinenfreigabe erst danach (robots/noindex, Sitemap und Canonical-URLs).
