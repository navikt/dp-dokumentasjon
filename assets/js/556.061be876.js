"use strict";(self.webpackChunkdp_dokumentasjon=self.webpackChunkdp_dokumentasjon||[]).push([[556],{556:(e,n,r)=>{r.r(n),r.d(n,{default:()=>s});const s='---\nsidebar_position: 1\ntitle: Frontend\n---\n\n# dp-soknadsdialog\n\nTODO: Kort introduksjon om applikasjonen, og er det unntak fra normalen (ikke i prod, bare i livsforlengende behandling)?\n\n## Form\xe5l\n\ndp-soknadsdialog er designet med hensikten om \xe5 effektivisere og forbedre den digitale innsendingen av dagpenges\xf8knader for brukerne.\nSpesifikt er form\xe5let med denne applikasjonen \xe5 fungere som et grensesnitt mellom sluttbrukeren og de underliggende systemene,\nspesielt _dp-soknad_, _dp-mellomlagring_ og _dp-quiz_.\n\n## Teknologier\n\n- Rammeverk: next@14\n- Testing: Vitest\n- Node: v18.17\n\n## App-arkitektur\n\n### Inngangssiden\n\nN\xe5r bruker kommer inn p\xe5 https://www.nav.no/dagpenger/dialog/soknad sjekker vi om bruker fullf\xf8rt- eller p\xe5begynte s\xf8knader og om bruker er registert som arbeidss\xf8ker. Dette gj\xf8r for \xe5 kunne vise bruker riktig informasjon eller redirecte bruker til riktig sider. Slik ser flyten ut:\n\n```mermaid\nflowchart TB\nSTART(["url: /dagpenger/dialog/soknad"]) ---\x3e HENT_SOKNAD[Henter s\xf8knader ]\nHENT_SOKNAD[Henter s\xf8knader] ---\x3e HAR_SOKNAD{Har s\xf8knad?}\nHAR_SOKNAD --\x3e|Yes| INNGANG_SIDE["Inngangsside"]\nHAR_SOKNAD --\x3e|No| ER_REGISTERT_SOM_ARBEIDSSOKER{Er registert som arbeidss\xf8ker?}\n\nINNGANG_SIDE --\x3e ETTERSENDING[Vise ettersending lenker]\nINNGANG_SIDE --\x3e HAR_PAABEGYNT_SOKNAD{Har p\xe5begynt s\xf8knad?}\nHAR_PAABEGYNT_SOKNAD --\x3e|Yes| FORSETT_ELLER_SLETT_SOKNAD["Vise fortsett eller slett s\xf8knad knapp"]\nHAR_PAABEGYNT_SOKNAD --\x3e|No| START_NY_SOKNAD([Start ny s\xf8knad])\n\nFORSETT_ELLER_SLETT_SOKNAD --\x3e FORTSETTSOKNAD([Fortsett p\xe5begynte s\xf8knad])\nFORTSETTSOKNAD --\x3e REDIRECT_SOKNAD[Sende bruker til s\xf8knaden]\n\nFORSETT_ELLER_SLETT_SOKNAD --\x3e SLETT_SOKNAD([Slett og start ny s\xf8knad])\nSLETT_SOKNAD --\x3e | Sletter s\xf8knad i dp-soknad| ER_REGISTERT_SOM_ARBEIDSSOKER\n\nSTART_NY_SOKNAD --\x3e ER_REGISTERT_SOM_ARBEIDSSOKER\nER_REGISTERT_SOM_ARBEIDSSOKER --\x3e|Yes| REDIRECT_START_SOKNAD["Redirect til ../soknad/start-soknad"]\nER_REGISTERT_SOM_ARBEIDSSOKER --\x3e|No| REDIRECT_ARBEIDSSOKER["Redirect til ../soknad/arbeidssoker"]\n```\n\n### Slik fungerer l\xf8sningen\n\n1. **Verifisering av brukerens arbeidss\xf8kerstatus**:\n\n- F\xf8r man kan sende en s\xf8knad, m\xe5 brukeren v\xe6re registrert som arbeidss\xf8ker.\n_dp-soknadsdialog_ har integrasjon med _veilarbregistrering_ for \xe5 hente verifisere brukerens status som arbeidss\xf8ker.\n\n2. **Starte Ny S\xf8knad**:\n\n- _dp-soknadsdialog_ fungerer som en klient for _dp-soknad_, og gir brukerne muligheten til \xe5 enkelt starte en ny dagpenges\xf8knad. Dette skjer i samarbeid med _dp-mellomlagring_, hvor vedlegg midlertidig lagres under s\xf8knadsprosessen.\n\n3. **Fullf\xf8re eksisterende S\xf8knader:**\n\n- Brukerne har muligheten til \xe5 starte en ny s\xf8knad uten \xe5 fullf\xf8re den, og denne ufullstendige s\xf8knaden lagres som en kladd i dp-soknad. _dp-s\xf8knadsdialog_ henter ufullstendige s\xf8knader fra dp-soknad, og samtidig forsikrer applikasjonen om at allerede opplastede vedlegg blir p\xe5litelig lagret i _dp-mellomlagring_. Dette sikrer kontinuiteten i s\xf8knadsprosessen og gir brukerne fleksibilitet til \xe5 fullf\xf8re s\xf8knaden i sitt eget tempo.\n\n:::warning[Adversel]\nInaktive s\xf8knader slettes innen en uke for \xe5 iverata personvern og unng\xe5 lagring av un\xf8dvendig data.\n\n:::\n\n4. **Hente nye Sp\xf8rsm\xe5l via dp-quiz:**\n\n- _dp-s\xf8knadsdialog_ presenterer brukerne dynamiske sp\xf8rsm\xe5l fra _dp-soknad_ via dp-quiz, hvor hvert svar fra brukeren utl\xf8ser nye relevante sp\xf8rsm\xe5l. L\xf8sningen fungerer som en bindeledd, uten \xe5 h\xe5ndtere forretningslogikk, og videref\xf8rer dialogen mellom brukeren og dp-soknad.\n\n5. **Effektiv lagring av Vedlegg:**\n\n- Vedlegg fra brukerne lagres midlertidig av _dp-s\xf8knadsdialog_ i _dp-mellomlagring_. Dette bidrar til \xe5 organisere og bevare alle n\xf8dvendige dokumenter knyttet til s\xf8knaden samt forbedre s\xf8knadsprosessen.\n\n6. **Innsending av S\xf8knaden:**\n\n- Ved innsending av s\xf8knaden, kommuniserer _dp-soknad_ med _dp-mellomlagring_ for \xe5 hente vedlegg og informasjon. Dette resulterer i et oppsummeringsdokument som inkluderer sp\xf8rsm\xe5l, svar og vedlegg. Denne informasjonen blir senere journalf\xf8rt for \xe5 sikre en n\xf8ye dokumentert s\xf8knadsprosess.\n\nOppsumert fungerer _dp-s\xf8knadsdialog_ som en bindeledd mellom sluttbrukeren og de underliggende systemene for dagpenges\xf8knadsprosessen ved \xe5 effektivt koble sammen dp-soknad, dp-quiz og _dp-mellomlagring_.\nApplikasjonen forenkler s\xf8knadsprosessen for brukerne, ivaretar midlertidig lagring av vedlegg og legger til rette for en s\xf8ml\xf8s overgang fra s\xf8knad til journalf\xf8ring\n\n### Kommunikasjonsflyt\n\n```mermaid\nflowchart TB\nDPSD(dp-soknadsdialog) ---\x3e DPS(dp-soknad)\nDPS --\x3e |Svar|\xa0DPQ(dp-quiz)\nDPQ --\x3e |Sp\xf8rsm\xe5l| DPS\nDPSD --\x3e |Lagrer vedlegg midlertidig f\xf8r innsending| DPM(dp-mellomlagring)\nDPSD --\x3e |Henter tekst| S(Sanity)\nDPS --\x3e |Henter vedlegg ved innsending| DPM\n```\n\n## Utfordringer\n\nTODO: Hvilke utfordringer har denne applikasjonen? F.eks. med hvordan den er strukturert, vanskelig \xe5 oppgradere, utdaterte avhengigheter\n\n## Lenker\n\n- [dp-soknadsdialog](https://github.com/navikt/dp-soknadsdialog)\n- [dp-soknad](https://github.com/navikt/dp-soknad)\n- [dp-mellomlagring](https://github.com/navikt/dp-mellomlagring)\n- [dp-quiz](https://github.com/navikt/dp-quiz)\n- [nav.no](https://www.nav.no/dagpenger/dialog)\n- Grafana Faro\n- Amplitude\n- Oppgaver i favro\n- Annen bakgrunnsinformasjon\n'}}]);