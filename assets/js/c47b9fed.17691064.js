(self.webpackChunkdp_dokumentasjon=self.webpackChunkdp_dokumentasjon||[]).push([[3106],{4422:(e,n,r)=>{var t={"./innbyggerflate/index.md":[7049,7049],"./innbyggerflate/losninger/index.mdx":[9949,9949],"./innbyggerflate/losninger/innsyn/index.mdx":[1630,1630],"./innbyggerflate/losninger/meldeplikt/index.mdx":[8631,8631],"./innbyggerflate/losninger/meldeplikt/meldeplikt.drawio":[8048,8048],"./innbyggerflate/losninger/navno/faktasider.mdx":[3281,3281],"./innbyggerflate/losninger/navno/index.mdx":[72,72],"./innbyggerflate/losninger/navno/produktsiden.mdx":[9067,9067],"./innbyggerflate/losninger/navno/sanity.mdx":[2874,2874],"./innbyggerflate/losninger/overordnet-arkitektur.drawio":[477,477],"./innbyggerflate/losninger/rapportering/rapportering.mdx":[7624,7624],"./innbyggerflate/losninger/soknad/dp-quiz-behov.drawio":[4264,4264],"./innbyggerflate/losninger/soknad/dp-quiz-hendelser-abonnement.drawio":[6409,6409],"./innbyggerflate/losninger/soknad/dp-quiz-hendelser.drawio":[7152,7152],"./innbyggerflate/losninger/soknad/dp-quiz-publiserer-hendelser.drawio":[3654,3654],"./innbyggerflate/losninger/soknad/dp-soknadsdialog.mdx":[5055,5055],"./innbyggerflate/losninger/soknad/index.mdx":[4285,4285],"./innbyggerflate/losninger/soknad/soknad.drawio":[95,95],"./innbyggerflate/prinsipper/boy-scout-rule.png":[9988,9988],"./innbyggerflate/prinsipper/feature-struktur.png":[9564,9564],"./innbyggerflate/prinsipper/index.md":[2530,7221],"./innbyggerflate/prinsipper/kodekvalitet.md":[9777,9777],"./innbyggerflate/prinsipper/teksnisk-struktur.png":[7639,7639],"./innbyggerflate/prinsipper/wtf.png":[7697,7697],"./sak-og-behandling/index.md":[3429,3429]};function l(e){if(!r.o(t,e))return Promise.resolve().then((()=>{var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}));var n=t[e],l=n[0];return r.e(n[1]).then((()=>r(l)))}l.keys=()=>Object.keys(t),l.id=4422,e.exports=l},4012:(e,n,r)=>{"use strict";r.r(n),r.d(n,{assets:()=>a,contentTitle:()=>s,default:()=>g,frontMatter:()=>o,metadata:()=>d,toc:()=>c});var t=r(5893),l=r(1151),i=r(7589);const o={sidebar_position:4},s="Meldeplikt",d={id:"innbyggerflate/losninger/meldeplikt/index",title:"Meldeplikt",description:"Kort om meldekort",source:"@site/docs/innbyggerflate/losninger/meldeplikt/index.mdx",sourceDirName:"innbyggerflate/losninger/meldeplikt",slug:"/innbyggerflate/losninger/meldeplikt/",permalink:"/dp-dokumentasjon/docs/innbyggerflate/losninger/meldeplikt/",draft:!1,unlisted:!1,editUrl:"https://github.com/navikt/dp-dokumentasjon/docs/innbyggerflate/losninger/meldeplikt/index.mdx",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"S\xf8knadsdialog",permalink:"/dp-dokumentasjon/docs/innbyggerflate/losninger/soknad/dp-soknadsdialog"},next:{title:"Rapportering",permalink:"/dp-dokumentasjon/docs/innbyggerflate/losninger/rapportering/"}},a={},c=[{value:"Kort om meldekort",id:"kort-om-meldekort",level:2},{value:"Kontaktinformasjon",id:"kontaktinformasjon",level:2},{value:"Arkitektur",id:"arkitektur",level:2},{value:"Applikasjoner",id:"applikasjoner",level:2},{value:"Utvikling",id:"utvikling",level:2},{value:"Vanlig utviklingsprosess",id:"vanlig-utviklingsprosess",level:3},{value:"N\xe5r er det smartest \xe5 release til prod?",id:"n\xe5r-er-det-smartest-\xe5-release-til-prod",level:3},{value:"Oppdatering",id:"oppdatering",level:2},{value:"Overv\xe5kning",id:"overv\xe5kning",level:2}];function p(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,l.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"meldeplikt",children:"Meldeplikt"}),"\n",(0,t.jsx)(n.h2,{id:"kort-om-meldekort",children:"Kort om meldekort"}),"\n",(0,t.jsxs)(n.p,{children:["N\xe5r man f\xe5r ",(0,t.jsx)(n.a,{href:"https://www.nav.no/dagpenger",children:"Dagpenger"})," (DP), ",(0,t.jsx)(n.a,{href:"https://www.nav.no/aap",children:"Arbeidsavklaringspenger"})," (AAP) eller ",(0,t.jsx)(n.a,{href:"https://www.nav.no/tiltakspenger",children:"Tiltakspenger"})," (TP) har man meldeplikt. Dvs. man m\xe5 sende meldekort hver fjortende dag.\nMeldekortet er et skjema man fyller ut, der man gir NAV opplysninger om blant annet jobb, aktiviteter og frav\xe6r de siste 14 dagene."]}),"\n",(0,t.jsxs)(n.p,{children:['Team Dagpenger "arvet" ansvaret for \xe5 gj\xf8re endringer og oppgraderinger i meldekort-l\xf8sningen fordi alle fra Team Meldekort ble flyttet til Team Dagpenger. Dagpenger-delen i meldekort-l\xf8sningen skal erstattes med ',(0,t.jsx)(n.code,{children:"dp-rapportering-frontend"}),". Team Dagpenger tenkte \xe5 pr\xf8ve den nye l\xf8sningen med begrenset antall brukere f\xf8rst. For \xe5 velge brukere som skulle sendes til den nye l\xf8sningen, ble opprettet en mekanisme som sjekker hvem som skal sendes:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Det finnes en tabell i ",(0,t.jsx)(n.code,{children:"meldkort-api"})," sin database som inneholder f\xf8dselsnummer"]}),"\n",(0,t.jsx)(n.li,{children:"Hvis f\xf8dselsnumeret til bruker er i denne tabellen, sendes brukeren til den nye l\xf8sningen"}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"kontaktinformasjon",children:"Kontaktinformasjon"}),"\n",(0,t.jsxs)(n.p,{children:["Hanne Beate Vatnedal (",(0,t.jsx)(n.a,{href:"mailto:hanne.beate.vatnedal@nav.no",children:"hanne.beate.vatnedal@nav.no"}),') fortsetter \xe5 "eie" meldekort-l\xf8sningen og alle funksjonelle endringer b\xf8r sjekkes med henne',(0,t.jsx)(n.br,{}),"\n","Mona Kjeldsrud (",(0,t.jsx)(n.a,{href:"mailto:mona.kjeldsrud@nav.no",children:"mona.kjeldsrud@nav.no"}),") vet mye om meldeplikt-backend"]}),"\n",(0,t.jsx)(n.h2,{id:"arkitektur",children:"Arkitektur"}),"\n",(0,t.jsx)(i.F,{filename:"innbyggerflate/losninger/meldeplikt/meldeplikt.drawio"}),"\n",(0,t.jsx)(n.h2,{id:"applikasjoner",children:"Applikasjoner"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://github.com/navikt/meldekort",children:"Meldekort frontend"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://github.com/navikt/meldekort-mikrofrontend",children:"Meldekort mikrofrontend"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://github.com/navikt/meldekort-api",children:"Meldekort API"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://github.com/navikt/meldekortservice",children:"Meldekortservice"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://github.com/navikt/meldekortkontroll-api",children:"Meldekortkontroll API "})}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"VIKTIG!"}),(0,t.jsx)(n.br,{}),"\n","Tekster som vises i ",(0,t.jsx)(n.code,{children:"meldekort"})," (frontend) kommer fra ",(0,t.jsx)(n.code,{children:"meldekort-api"}),". Vi m\xe5 vise de tekstene som var gyldige for det valgte meldekortet (for den meldeperioden). Det finnes fortsatt 2 filer med tekster i ",(0,t.jsx)(n.code,{children:"meldekort"})," (",(0,t.jsx)(n.code,{children:"src\\app\\mock\\responses\\tekster_nb.json og src\\app\\mock\\responses\\tekster_en.json"}),"), men disse er ment for lokalkj\xf8ring/testing og inneholder ikke alle/siste versjoner av tekstene.",(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.code,{children:"meldekort-api"})," har en tabell med tekstene i sin database. Denne tabellen er fylt ut ved hjelp av ",(0,t.jsx)(n.code,{children:"R__recreate_texts-migrasjonen"})," og har disse kolonnene:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"kode"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"verdi"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"sprak"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"fra_dato"})}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["For \xe5 opprette en tekst i denne tabellen m\xe5 man skrive i ",(0,t.jsx)(n.code,{children:"R__recreate_texts"}),", f.eks:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"INSERT INTO tekst (kode, verdi, sprak,  fra_dato) VALUES ('overskrift.bruttoBelop', 'Brutto bel\xf8p ', 'nb',  TO_DATE('1000-01-01', 'YYYY-MM-DD'));\nINSERT INTO tekst (kode, verdi, sprak,  fra_dato) VALUES ('overskrift.bruttoBelop', 'Gross amount ', 'en',  TO_DATE('1000-01-01', 'YYYY-MM-DD'));\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Dato ",(0,t.jsx)(n.code,{children:"1000-01-01"})," betyr at denne teksten skal i praksis gjelde for alle meldekort"]}),"\n",(0,t.jsx)(n.p,{children:"For \xe5 ha forskjellige versjoner av samme tekst:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"INSERT INTO tekst (kode, verdi, sprak,  fra_dato) VALUES ('textKode', 'Tekst v1 ', 'nb',  TO_DATE('1000-01-01', 'YYYY-MM-DD'));\nINSERT INTO tekst (kode, verdi, sprak,  fra_dato) VALUES ('textKode', 'Text v1 ',  'en',  TO_DATE('1000-01-01', 'YYYY-MM-DD'));\nINSERT INTO tekst (kode, verdi, sprak,  fra_dato) VALUES ('textKode', 'Tekst v2 ', 'nb',  TO_DATE('2023-10-29', 'YYYY-MM-DD'));\nINSERT INTO tekst (kode, verdi, sprak,  fra_dato) VALUES ('textKode', 'Text v2 ',  'en',  TO_DATE('2023-10-29', 'YYYY-MM-DD'));\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Da skal v1 vises n\xe5r man har en aktiv meldeperiode som er f\xf8r ",(0,t.jsx)(n.code,{children:"2023-10-29"})," og ",(0,t.jsx)(n.code,{children:"v2"})," skal vises for meldeperioder etter ",(0,t.jsx)(n.code,{children:"2023-10-29"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"utvikling",children:"Utvikling"}),"\n",(0,t.jsx)(n.h3,{id:"vanlig-utviklingsprosess",children:"Vanlig utviklingsprosess"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Opprett en ny branch"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Gj\xf8r n\xf8dvendige endringer i denne branchen"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Deploy branchen til Q1 og/eller Q2. For \xe5 gj\xf8re dette:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"\xc5pne GitHub repo > Actions > Build and Deploy to dev > Run workflow > Velg riktig branch"}),"\n",(0,t.jsx)(n.li,{children:"Velg milj\xf8 Q1 eller Q2 > Run workflow"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Sjekk endringene i Q1 og/eller Q2"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Opprett en pull request"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"N\xe5r PRen er sjekket, merge branchen til master"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Bygg release. For \xe5 gj\xf8re dette:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"\xc5pne GitHub repo > Actions > Build and Deploy to dev > Run workflow > Velg master branch"}),"\n",(0,t.jsx)(n.li,{children:"Velg milj\xf8 Q1 eller Q2, velg bump > Run workflow"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Deploy release til prod (",(0,t.jsx)(n.a,{href:"#n%C3%A5r-er-det-smartest-%C3%A5-release-til-prod",children:"N\xe5r er det smartest \xe5 release til prod?"}),"). For \xe5 gj\xf8re dette:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"\xc5pne GitHub repo > Actions > Deploy release to dev or prod > Run workflow > Velg master branch"}),"\n",(0,t.jsx)(n.li,{children:'skriv inn "p" som Milj\xf8, skriv inn den versjonen som skal deployes > Run workflow'}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Sjekk at alt fungerer (",(0,t.jsx)(n.a,{href:"#overv%C3%A5kning",children:"Overv\xe5kning"}),")"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Oppdater ",(0,t.jsx)(n.a,{href:"https://confluence.adeo.no/display/TMP/Versjonsoversikt",children:"Confluence"})]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"n\xe5r-er-det-smartest-\xe5-release-til-prod",children:"N\xe5r er det smartest \xe5 release til prod?"}),"\n",(0,t.jsx)(n.p,{children:"Flertallet sender meldekortene sine fra fredag til mandag.\nDet betyr at det ikke er veldig smart \xe5 deploye noe til prod i disse dagene med mindre det er en prodfeil fiks.\nDet er bedre \xe5 deploye til prod fra tirsdag til torsdag."}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.img,{src:r(6007).Z+"",width:"847",height:"206"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.em,{children:"Antall REST-kall for \xe5 kontrollere meldekort per ukedag fra mandag til s\xf8ndag"})]}),"\n",(0,t.jsx)(n.h2,{id:"oppdatering",children:"Oppdatering"}),"\n",(0,t.jsx)(n.p,{children:"Alle applikasjonene i meldeplikt-l\xf8sningen har dependabot som hver uke sjekker om det finnes nye versjonene til avhengighetene vi bruker.\nDependabot oppretter pull request'er og utviklere m\xe5 merge disse PRene til master, sjekke at appene bygges og alt fungerer i Q1 og/eller Q2 (det er ogs\xe5 lurt \xe5 sjekke at nye poder virkelig har startet etter oppdateringer), deretter opprette release og deploye til prod."}),"\n",(0,t.jsx)(n.h2,{id:"overv\xe5kning",children:"Overv\xe5kning"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://grafana.nais.io/d/rPG4uUC7k/meldekort-api?orgId=1&refresh=30s",children:"Nyttig Grafana dashboard for \xe5 sjekke at alt fungerer og meldekort kommer inn"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://grafana.nais.io/d/h_LlxHcVz/team-meldeplikt-nais-app-dashbord?from=now%2Fd&to=now&orgId=1&refresh=1m",children:"meldekort-api dashboard"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://grafana.nais.io/d/531ynU5Vz/meldekortservice?orgId=1",children:"meldekortservice dashboard"})}),"\n"]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:["Man kan ogs\xe5 sjekke ",(0,t.jsx)(n.code,{children:"kall_logg-tabellene"})," i ",(0,t.jsx)(n.code,{children:"meldekort-api"}),", ",(0,t.jsx)(n.code,{children:"meldekorservice"})," og ",(0,t.jsx)(n.code,{children:"meldekortkontroll-api"}),".\nDisse applikasjonene logger alle requeste'er som kommer inn og alle request'er de sender ut og alle respons'er.\nLogg slettes etter 30 dager i ",(0,t.jsx)(n.code,{children:"meldekorservice"}),", 90 dager i ",(0,t.jsx)(n.code,{children:"meldekort-api"}),", 120 dager i ",(0,t.jsx)(n.code,{children:"meldekortkontroll-api"}),"."]}),"\n"]})]})}function g(e={}){const{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(p,{...e})}):p(e)}},1262:(e,n,r)=>{"use strict";r.r(n),r.d(n,{default:()=>i});r(7294);var t=r(2389),l=r(5893);function i(e){let{children:n,fallback:r}=e;return(0,t.Z)()?(0,l.jsx)(l.Fragment,{children:n?.()}):r??null}},3973:(e,n,r)=>{"use strict";var t=r(1262),l=r(7294);function i(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var o=i(t),s=i(l),d=function(){return d=Object.assign||function(e){for(var n,r=1,t=arguments.length;r<t;r++)for(var l in n=arguments[r])Object.prototype.hasOwnProperty.call(n,l)&&(e[l]=n[l]);return e},d.apply(this,arguments)};!function(e,n){void 0===n&&(n={});var r=n.insertAt;if(e&&"undefined"!=typeof document){var t=document.head||document.getElementsByTagName("head")[0],l=document.createElement("style");l.type="text/css","top"===r&&t.firstChild?t.insertBefore(l,t.firstChild):t.appendChild(l),l.styleSheet?l.styleSheet.cssText=e:l.appendChild(document.createTextNode(e))}}(".docusaurus-plugin-drawio {\n  width: 100%;\n  padding: 10px;\n  border: 1px solid #ccc;\n  text-align: center;\n  overflow-x: auto;\n}\n\nhtml[data-theme='dark'] .docusaurus-plugin-drawio {\n  background-color: #333;\n  color: #fff;\n}\n\n.docusaurus-plugin-drawio > div {\n  margin-left: auto;\n  margin-right: auto;\n  border: 1px solid transparent;\n  min-width: 180px;\n}\n");var a=function(e){var n=e.content,r=e.maxHeight,t=e.autoFit,i=e.autoCrop,o=e.autoOrigin,a=e.allowZoomOut,c=e.allowZoomIn,p=e.checkVisibleState,g=e.toolbarPosition,k=e.toolbarNohide,h=e.toolbarButtons,m=function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var l=0;for(t=Object.getOwnPropertySymbols(e);l<t.length;l++)n.indexOf(t[l])<0&&Object.prototype.propertyIsEnumerable.call(e,t[l])&&(r[t[l]]=e[t[l]])}return r}(e,["content","maxHeight","autoFit","autoCrop","autoOrigin","allowZoomOut","allowZoomIn","checkVisibleState","toolbarPosition","toolbarNohide","toolbarButtons"]),u=l.useState("loading..."),f=u[0],j=u[1],x=l.useRef(null),v=window.GraphViewer;return l.useEffect((function(){if(v)if(n){var e=d({editable:"_blank",highlight:"#0000ff",nav:!0,resize:!0,toolbar:"zoom lightbox",xml:n,"max-height":r,"auto-fit":t,"auto-crop":i,"auto-origin":o,"allow-zoom-out":a,"allow-zoom-in":c,"check-visible-state":p,"toolbar-position":g,"toolbar-nohide":k,"toolbar-buttons":h},m),l=JSON.stringify(e);x.current.dataset.mxgraph=l,j(""),setTimeout((function(){v.createViewerForElement(x.current)}),0)}else j("drawio file is empty");else j("GraphViewer is not loaded")}),[]),s.default.createElement("div",{className:"docusaurus-plugin-drawio"},s.default.createElement("div",{className:"docusaurus-plugin-drawio__content",ref:x},f))},c=l.memo((function(e){return s.default.createElement(o.default,{fallback:s.default.createElement(s.default.Fragment,null,"loading...")},(function(){return s.default.createElement(a,d({},e))}))}));e.exports=c},7589:(e,n,r)=>{"use strict";r.d(n,{F:()=>s});var t=r(7294),l=r(3973),i=r.n(l),o=r(5893);const s=t.memo((e=>{let{filename:n}=e;const[l,s]=(0,t.useState)(null);return(0,t.useEffect)((()=>{(async()=>{try{const e=await r(4422)(`./${n}`);s(e.default)}catch(e){console.error(`Error loading drawio file: ${e}`)}})()}),[n]),l?(0,o.jsx)(i(),{content:l}):(0,o.jsx)("div",{children:"Loading..."})}))},6007:(e,n,r)=>{"use strict";r.d(n,{Z:()=>t});const t=r.p+"assets/images/meldeplikt-innsendte-8b5fe680074562298e43d3e9d640a74d.png"},1151:(e,n,r)=>{"use strict";r.d(n,{Z:()=>s,a:()=>o});var t=r(7294);const l={},i=t.createContext(l);function o(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:o(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);