(self.webpackChunkdp_dokumentasjon=self.webpackChunkdp_dokumentasjon||[]).push([[6837],{4422:(e,n,r)=>{var t={"./innbyggerflate/index.md":[7049,7049],"./innbyggerflate/l\xf8sninger/Rapportering.md":[597,597],"./innbyggerflate/l\xf8sninger/index.md":[8314,8314],"./innbyggerflate/l\xf8sninger/meldeplikt/index.mdx":[2540,2540],"./innbyggerflate/l\xf8sninger/meldeplikt/meldeplikt.drawio":[5696,5696],"./innbyggerflate/l\xf8sninger/nav.no.md":[1879,1879],"./innbyggerflate/l\xf8sninger/systemkart/index.mdx":[9218,9218],"./innbyggerflate/l\xf8sninger/systemkart/overordnet-arkitektur.drawio":[64,64],"./innbyggerflate/l\xf8sninger/s\xf8knadsdialog/dp-quiz-hendelser-abonnement.drawio":[9866,9866],"./innbyggerflate/l\xf8sninger/s\xf8knadsdialog/dp-quiz-publiserer-hendelser.drawio":[5650,1644],"./innbyggerflate/l\xf8sninger/s\xf8knadsdialog/index.mdx":[578,578],"./innbyggerflate/l\xf8sninger/s\xf8knadsdialog/soknad.drawio":[3067,3067],"./innbyggerflate/prinsipper/boy-scout-rule.png":[9988,9988],"./innbyggerflate/prinsipper/feature-struktur.png":[9564,9564],"./innbyggerflate/prinsipper/index.md":[2530,7221],"./innbyggerflate/prinsipper/kodekvalitet.md":[9777,9777],"./innbyggerflate/prinsipper/teksnisk-struktur.png":[7639,7639],"./innbyggerflate/prinsipper/wtf.png":[7697,7697],"./sak-og-behandling/index.md":[3429,3429]};function l(e){if(!r.o(t,e))return Promise.resolve().then((()=>{var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}));var n=t[e],l=n[0];return r.e(n[1]).then((()=>r(l)))}l.keys=()=>Object.keys(t),l.id=4422,e.exports=l},8744:(e,n,r)=>{"use strict";r.r(n),r.d(n,{assets:()=>a,contentTitle:()=>o,default:()=>g,frontMatter:()=>s,metadata:()=>d,toc:()=>p});var t=r(5893),l=r(1151),i=r(7589);const s={},o="Meldeplikt",d={id:"innbyggerflate/l\xf8sninger/meldeplikt/index",title:"Meldeplikt",description:"Kort om meldekort",source:"@site/docs/innbyggerflate/l\xf8sninger/meldeplikt/index.mdx",sourceDirName:"innbyggerflate/l\xf8sninger/meldeplikt",slug:"/innbyggerflate/l\xf8sninger/meldeplikt/",permalink:"/dp-dokumentasjon/docs/innbyggerflate/l\xf8sninger/meldeplikt/",draft:!1,unlisted:!1,editUrl:"https://github.com/navikt/dp-dokumentasjon/docs/innbyggerflate/l\xf8sninger/meldeplikt/index.mdx",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Rapportering",permalink:"/dp-dokumentasjon/docs/innbyggerflate/l\xf8sninger/Rapportering"},next:{title:"Nav.no",permalink:"/dp-dokumentasjon/docs/innbyggerflate/l\xf8sninger/nav.no"}},a={},p=[{value:"Kort om meldekort",id:"kort-om-meldekort",level:2},{value:"Arkitektur",id:"arkitektur",level:2},{value:"Applikasjoner",id:"applikasjoner",level:2},{value:"Utvikling",id:"utvikling",level:2},{value:"Vanlig utviklingsprosess",id:"vanlig-utviklingsprosess",level:3},{value:"N\xe5r er det smartest \xe5 release til prod?",id:"n\xe5r-er-det-smartest-\xe5-release-til-prod",level:3},{value:"Oppdatering",id:"oppdatering",level:2},{value:"Overv\xe5kning",id:"overv\xe5kning",level:2}];function c(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,l.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"meldeplikt",children:"Meldeplikt"}),"\n",(0,t.jsx)(n.h2,{id:"kort-om-meldekort",children:"Kort om meldekort"}),"\n",(0,t.jsxs)(n.p,{children:["N\xe5r man f\xe5r ",(0,t.jsx)(n.a,{href:"https://www.nav.no/dagpenger",children:"Dagpenger"})," (DP), ",(0,t.jsx)(n.a,{href:"https://www.nav.no/aap",children:"Arbeidsavklaringspenger"})," (AAP) eller ",(0,t.jsx)(n.a,{href:"https://www.nav.no/tiltakspenger",children:"Tiltakspenger"})," (TP) har man meldeplikt. Dvs. man m\xe5 sende meldekort hver fjortende dag.\nMeldekortet er et skjema man fyller ut, der man gir NAV opplysninger om blant annet jobb, aktiviteter og frav\xe6r de siste 14 dagene."]}),"\n",(0,t.jsxs)(n.p,{children:['Team Dagpenger "arvet" ansvaret for \xe5 gj\xf8re endringer og oppgraderinger i meldekort-l\xf8sningen fordi alle fra Team Meldekort ble flyttet til Team Dagpenger. Dagpenger-delen i meldekort-l\xf8sningen skal erstattes med ',(0,t.jsx)(n.code,{children:"dp-rapportering-frontend"}),". Team Dagpenger tenkte \xe5 pr\xf8ve den nye l\xf8sningen med begrenset antall brukere f\xf8rst. For \xe5 velge brukere som skulle sendes til den nye l\xf8sningen, ble opprettet en mekanisme som sjekker hvem som skal sendes:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Det finnes en tabell i meldkort-api sin database som inneholder f\xf8dselsnummer"}),"\n",(0,t.jsx)(n.li,{children:"Hvis f\xf8dselsnumeret til bruker er i denne tabellen, sendes brukeren til den nye l\xf8sningen"}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"arkitektur",children:"Arkitektur"}),"\n",(0,t.jsx)(i.F,{filename:"innbyggerflate/l\xf8sninger/meldeplikt/meldeplikt.drawio"}),"\n",(0,t.jsx)(n.h2,{id:"applikasjoner",children:"Applikasjoner"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://github.com/navikt/meldekortkontroll-api",children:"Meldekort frontend"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://github.com/navikt/meldekortkontroll-api",children:"Meldekort mikrofrontend"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://github.com/navikt/meldekortkontroll-api",children:"Meldekort API"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://github.com/navikt/meldekortkontroll-api",children:"Meldekortservice"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://github.com/navikt/meldekortkontroll-api",children:"Meldekortkontroll API "})}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"VIKTIG!"}),(0,t.jsx)(n.br,{}),"\n","Tekster som vises i meldekort-frontend kommer fra ",(0,t.jsx)(n.code,{children:"meldekort-api"}),". Vi m\xe5 vise de tekstene som var gyldige for det valgte meldekortet (for den meldeperioden). Det finnes fortsatt 2 filer med tekster i meldekort (",(0,t.jsx)(n.code,{children:"src\\app\\mock\\responses\\tekster_nb.json og src\\app\\mock\\responses\\tekster_en.json"}),"), men disse er ment for lokalkj\xf8ring/testing og inneholder ikke alle/siste versjoner av tekstene.",(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.code,{children:"meldekort-api"})," har en tabell med tekstene i sin database. Denne tabellen er fylt ut ved hjelp av ",(0,t.jsx)(n.code,{children:"R__recreate_texts-migrasjonen"})," og har disse kolonnene:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"kode"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"verdi"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"sprak"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"fra_dato"})}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["For \xe5 opprette en tekst i denne tabellen m\xe5 man skrive i ",(0,t.jsx)(n.code,{children:"R__recreate_texts"}),", f.eks:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"INSERT INTO tekst (kode, verdi, sprak,  fra_dato) VALUES ('overskrift.bruttoBelop', 'Brutto bel\xf8p ', 'nb',  TO_DATE('1000-01-01', 'YYYY-MM-DD'));\nINSERT INTO tekst (kode, verdi, sprak,  fra_dato) VALUES ('overskrift.bruttoBelop', 'Gross amount ', 'en',  TO_DATE('1000-01-01', 'YYYY-MM-DD'));\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Dato ",(0,t.jsx)(n.code,{children:"1000-01-01"})," betyr at denne teksten skal i praksis gjelde for alle meldekort"]}),"\n",(0,t.jsx)(n.p,{children:"For \xe5 ha forskjellige versjoner av samme tekst:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"INSERT INTO tekst (kode, verdi, sprak,  fra_dato) VALUES ('textKode', 'Tekst v1 ', 'nb',  TO_DATE('1000-01-01', 'YYYY-MM-DD'));\nINSERT INTO tekst (kode, verdi, sprak,  fra_dato) VALUES ('textKode', 'Text v1 ',  'en',  TO_DATE('1000-01-01', 'YYYY-MM-DD'));\nINSERT INTO tekst (kode, verdi, sprak,  fra_dato) VALUES ('textKode', 'Tekst v2 ', 'nb',  TO_DATE('2023-10-29', 'YYYY-MM-DD'));\nINSERT INTO tekst (kode, verdi, sprak,  fra_dato) VALUES ('textKode', 'Text v2 ',  'en',  TO_DATE('2023-10-29', 'YYYY-MM-DD'));\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Da skal v1 vises n\xe5r man har en aktiv meldeperiode som er f\xf8r ",(0,t.jsx)(n.code,{children:"2023-10-29"})," og ",(0,t.jsx)(n.code,{children:"v2"})," skal vises for meldeperioder etter ",(0,t.jsx)(n.code,{children:"2023-10-29"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"utvikling",children:"Utvikling"}),"\n",(0,t.jsx)(n.h3,{id:"vanlig-utviklingsprosess",children:"Vanlig utviklingsprosess"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Opprett en ny branch"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Gj\xf8r n\xf8dvendige endringer i denne branchen"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Deploy branchen til Q1 og/eller Q2. For \xe5 gj\xf8re dette:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"\xc5pne GitHub repo > Actions > Build and Deploy to dev > Run workflow > Velg riktig branch"}),"\n",(0,t.jsx)(n.li,{children:"Velg milj\xf8 Q1 eller Q2 > Run workflow"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Sjekk endringene i Q1 og/eller Q2"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Opprett en pull request"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"N\xe5r PRen er sjekket, merge branchen til master"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Bygg release. For \xe5 gj\xf8re dette:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"\xc5pne GitHub repo > Actions > Build and Deploy to dev > Run workflow > Velg master branch"}),"\n",(0,t.jsx)(n.li,{children:"velg milj\xf8 Q1 eller Q2, velg bump > Run workflow"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Deploy release til prod (",(0,t.jsx)(n.a,{href:"#n%C3%A5r-er-det-smartest-%C3%A5-release-til-prod",children:"N\xe5r er det smartest \xe5 release til prod?"}),"). For \xe5 gj\xf8re dette:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"\xc5pne GitHub repo > Actions > Deploy release to dev or prod > Run workflow > Velg master branch"}),"\n",(0,t.jsx)(n.li,{children:'skriv inn "p" som Milj\xf8, skriv inn den versjonen som skal deployes > Run workflow'}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Sjekk at alt fungerer (",(0,t.jsx)(n.a,{href:"#overv%C3%A5kning",children:"Overv\xe5kning"}),")"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Oppdater ",(0,t.jsx)(n.a,{href:"https://confluence.adeo.no/display/TMP/Versjonsoversikt",children:"Confluence"})]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"n\xe5r-er-det-smartest-\xe5-release-til-prod",children:"N\xe5r er det smartest \xe5 release til prod?"}),"\n",(0,t.jsx)(n.p,{children:"Flertallet sender meldekortene sine fra fredag til mandag.\nDet betyr at det ikke er veldig smart \xe5 deploye noe til prod i disse dagene med mindre det er en prodfeil fiks.\nDet er bedre \xe5 deploye til prod fra tirsdag til torsdag."}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.img,{src:r(6007).Z+"",width:"847",height:"206"}),"\n",(0,t.jsx)(n.em,{children:"Antall REST-kall for \xe5 kontrollere meldekort per ukedag fra mandag til s\xf8ndag"})]}),"\n",(0,t.jsx)(n.h2,{id:"oppdatering",children:"Oppdatering"}),"\n",(0,t.jsx)(n.p,{children:"Alle applikasjonene i meldeplikt-l\xf8sningen har dependabot som hver uke sjekker om det finnes nye versjonene til avhengighetene vi bruker.\nDependabot oppretter pull request'er og utviklere m\xe5 merge disse PRene til master, sjekke at appene bygges og alt fungerer i Q1/Q2, deretter opprette release og deploye til prod."}),"\n",(0,t.jsx)(n.h2,{id:"overv\xe5kning",children:"Overv\xe5kning"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://grafana.nais.io/d/rPG4uUC7k/meldekort-api?orgId=1&refresh=30s",children:"Nyttig Grafana dashboard for \xe5 sjekke at alt fungerer og meldekort kommer inn"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://grafana.nais.io/d/h_LlxHcVz/team-meldeplikt-nais-app-dashbord?from=now%2Fd&to=now&orgId=1&refresh=1m",children:"meldekort-api dashboard"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://grafana.nais.io/d/531ynU5Vz/meldekortservice?orgId=1",children:"meldekortservice dashboard"})}),"\n"]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:["Man kan ogs\xe5 sjekke ",(0,t.jsx)(n.code,{children:"kall_logg-tabellene"})," i ",(0,t.jsx)(n.code,{children:"meldekort-api"}),", ",(0,t.jsx)(n.code,{children:"meldekorservice"})," og ",(0,t.jsx)(n.code,{children:"meldekortkontroll-api"}),".\nDisse applikasjonene logger alle requeste'er som kommer inn og alle request'er de sender ut og alle respons'er.\nLogg slettes etter 30 dager i ",(0,t.jsx)(n.code,{children:"meldekorservice"}),", 90 dager i ",(0,t.jsx)(n.code,{children:"meldekort-api"}),", 120 dager i ",(0,t.jsx)(n.code,{children:"meldekortkontroll-api"}),"."]}),"\n"]})]})}function g(e={}){const{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},1262:(e,n,r)=>{"use strict";r.r(n),r.d(n,{default:()=>i});r(7294);var t=r(2389),l=r(5893);function i(e){let{children:n,fallback:r}=e;return(0,t.Z)()?(0,l.jsx)(l.Fragment,{children:n?.()}):r??null}},3973:(e,n,r)=>{"use strict";var t=r(1262),l=r(7294);function i(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var s=i(t),o=i(l),d=function(){return d=Object.assign||function(e){for(var n,r=1,t=arguments.length;r<t;r++)for(var l in n=arguments[r])Object.prototype.hasOwnProperty.call(n,l)&&(e[l]=n[l]);return e},d.apply(this,arguments)};!function(e,n){void 0===n&&(n={});var r=n.insertAt;if(e&&"undefined"!=typeof document){var t=document.head||document.getElementsByTagName("head")[0],l=document.createElement("style");l.type="text/css","top"===r&&t.firstChild?t.insertBefore(l,t.firstChild):t.appendChild(l),l.styleSheet?l.styleSheet.cssText=e:l.appendChild(document.createTextNode(e))}}(".docusaurus-plugin-drawio {\n  width: 100%;\n  padding: 10px;\n  border: 1px solid #ccc;\n  text-align: center;\n  overflow-x: auto;\n}\n\nhtml[data-theme='dark'] .docusaurus-plugin-drawio {\n  background-color: #333;\n  color: #fff;\n}\n\n.docusaurus-plugin-drawio > div {\n  margin-left: auto;\n  margin-right: auto;\n  border: 1px solid transparent;\n  min-width: 180px;\n}\n");var a=function(e){var n=e.content,r=e.maxHeight,t=e.autoFit,i=e.autoCrop,s=e.autoOrigin,a=e.allowZoomOut,p=e.allowZoomIn,c=e.checkVisibleState,g=e.toolbarPosition,k=e.toolbarNohide,h=e.toolbarButtons,m=function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var l=0;for(t=Object.getOwnPropertySymbols(e);l<t.length;l++)n.indexOf(t[l])<0&&Object.prototype.propertyIsEnumerable.call(e,t[l])&&(r[t[l]]=e[t[l]])}return r}(e,["content","maxHeight","autoFit","autoCrop","autoOrigin","allowZoomOut","allowZoomIn","checkVisibleState","toolbarPosition","toolbarNohide","toolbarButtons"]),u=l.useState("loading..."),f=u[0],j=u[1],x=l.useRef(null),v=window.GraphViewer;return l.useEffect((function(){if(v)if(n){var e=d({editable:"_blank",highlight:"#0000ff",nav:!0,resize:!0,toolbar:"zoom lightbox",xml:n,"max-height":r,"auto-fit":t,"auto-crop":i,"auto-origin":s,"allow-zoom-out":a,"allow-zoom-in":p,"check-visible-state":c,"toolbar-position":g,"toolbar-nohide":k,"toolbar-buttons":h},m),l=JSON.stringify(e);x.current.dataset.mxgraph=l,j(""),setTimeout((function(){v.createViewerForElement(x.current)}),0)}else j("drawio file is empty");else j("GraphViewer is not loaded")}),[]),o.default.createElement("div",{className:"docusaurus-plugin-drawio"},o.default.createElement("div",{className:"docusaurus-plugin-drawio__content",ref:x},f))},p=l.memo((function(e){return o.default.createElement(s.default,{fallback:o.default.createElement(o.default.Fragment,null,"loading...")},(function(){return o.default.createElement(a,d({},e))}))}));e.exports=p},7589:(e,n,r)=>{"use strict";r.d(n,{F:()=>o});var t=r(7294),l=r(3973),i=r.n(l),s=r(5893);const o=t.memo((e=>{let{filename:n}=e;const[l,o]=(0,t.useState)(null);return(0,t.useEffect)((()=>{(async()=>{try{const e=await r(4422)(`./${n}`);o(e.default)}catch(e){console.error(`Error loading drawio file: ${e}`)}})()}),[n]),l?(0,s.jsx)(i(),{content:l}):(0,s.jsx)("div",{children:"Loading..."})}))},6007:(e,n,r)=>{"use strict";r.d(n,{Z:()=>t});const t=r.p+"assets/images/meldeplikt-innsendte-8b5fe680074562298e43d3e9d640a74d.png"}}]);