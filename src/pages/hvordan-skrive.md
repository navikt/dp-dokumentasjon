# Hvordan skrive på denne siden

Velkommen til **Dagpenger - teknisk dokumentasjon**! Denne veiledningen vil gå gjennom prosessen med å legge til nytt innhold i **`docs`**-mappen ved bruk av Markdown-filer (**.md**). Dette inkluderer bruk av statiske bildefiler, MDX med enkle React-komponenter og integrering av Mermaid for å tegne diagrammer.

## Forutsetninger

- [Tilgang til NAV Github](#få-tilgang-til-nav-organisasjonen)
- (valgfritt) et skriveprogram som kan lese .md filer, men du kan også skrive i nettleser

## Trinn-for-trinn guide

#### 1. Naviger til Docs-mappen

Finn [**`docs`**-mappen](https://github.com/navikt/dp-dokumentasjon/tree/main/docs). Dette er stedet der all dokumentasjonen din lagres.

#### 2. Legg til en Ny Markdown-fil

- Naviger inn i enten innbyggerflaten eller mappen for sak- og behandling.
- Opprett ny fil med meningsfullt navn, med **.md** utvidelsen (for eksempel **`nytt_innhold.md`**).

#### 3. Rediger Markdown-filen

- Klikk på den nylig opprettede filen.
- Du vil se en editor. Her skriver du dokumentasjonen din.

#### **4. Bruk Markdown-formatering**

Markdown er et lettvekts-format som gjør det lett å lage nettsider ([Se her](https://www.markdownguide.org/cheat-sheet/)). Markdown er mye brukt dokumentasjons-format i NAV. Her er noen grunnleggende tips:

- Bruk # for overskrifter (for eksempel # Overskrift 1, ## Overskrift 2).
- Lag lister ved hjelp av \*, -, eller tall.
- Bruk \*\* \*\* for fet tekst og \* \* for kursiv tekst.
- [GitHub Markdown-guide](https://guides.github.com/features/mastering-markdown/) er en nyttig ressurs.

#### 5. Legg til statiske bildefiler

- For å inkludere bilder, last dem opp til **`static`** mappen.
- Referer til dem i Markdown-filen ved å bruke den relative pathen:

```markdown
![Alternativ tekst](../static/bilde.png)
```

#### 6. Bruk MDX med enkel React-komponent

- Docusaurus støtter MDX, som lar deg legge inn React-komponenter.
- Lag en enkel React-komponent i src/components mappen, for eksempel **`MinKomponent.js`**:

```jsx
// MinKomponent.js
import React from "react";

const MinKomponent = () => {
  return <div>Dette er en tilpasset React-komponent!</div>;
};

export default MinKomponent;
```

- I Markdown-filen bruker du komponenten:

```markdown
import MinKomponent from './MinKomponent';

<MinKomponent />
```

#### 7. Bruk DrawIO diagram

Du bruker Drawio-diagrammer på samme måte som en vanlig React-komponent, som ble nevnte i forrige punktet. Løsningen innebærer bruk av [Docusaurus-plugin-drawio](https://github.com/xiguaxigua/docusaurus-plugin-drawio) for å rendere Drawio-filer. For å få drawio til å vises, må filen ha endelsen _".mdx"_ i stedet for _".md"_. I markdown-filen rendrer du .drawio-filen slik:

```
import { Drawio } from "@site/src/components/drawio";


<Drawio filename={"innbyggerflate/løsninger/meldeplikt/meldeplikt.drawio"} />
```

#### 8. Bruk Mermaid for Diagrammer

Docusaurus støtter integrasjon av Mermaid for å lage diagrammer.

Inkluder Mermaid-koden din ved å plassere den mellom trippel backticks:

````markdown
```mermaid
graf TD;
A-->B;
A-->C;
B-->D;
C-->D;
```
````

Mermaid vil deretter prosessere koden og vise et interaktivt diagram i dokumentasjonen din.

Denne funksjonen gjør det enkelt å inkludere diagrammer og flytskjemaer i dokumentasjonen uten å måtte håndtere komplekse visualiseringsverktøy. [Les mer om mermaid her](https://mermaid.js.org/intro/)

### Få tilgang til NAV-organisasjonen

NAV-organisasjonen på GitHub heter navikt, og for å få tilgang til denne må man installere GitHub.com applikasjonen på https://myapps.microsoft.com:

1. Logg på https://myapps.microsoft.com.
2. Klikk på de tre prikkene oppe til høyre (…)
3. Klikk på “Add app”.
4. Velg “GitHub.com”.
5. Gå tilbake til forsiden av myapps og vent til GitHub.com appen dukker opp, dette kan ta noen minutter.
6. Klikk på den installerte appen, eller gå direkte til https://github.com/orgs/navikt/sso, og følg SSO-flyten for å få tilgang til navikt på GitHub.
