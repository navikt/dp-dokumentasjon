"use strict";(self.webpackChunkdp_dokumentasjon=self.webpackChunkdp_dokumentasjon||[]).push([[7934],{7259:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>d,default:()=>g,frontMatter:()=>t,metadata:()=>o,toc:()=>a});var i=r(5893),s=r(1151);const t={sidebar_position:1},d="Frontend",o={id:"innbyggerflate/losninger/innsyn/frontend",title:"Frontend",description:"Innsynnside for dagpenger.",source:"@site/docs/innbyggerflate/losninger/innsyn/frontend.mdx",sourceDirName:"innbyggerflate/losninger/innsyn",slug:"/innbyggerflate/losninger/innsyn/frontend",permalink:"/dp-dokumentasjon/innbyggerflate/losninger/innsyn/frontend",draft:!1,unlisted:!1,editUrl:"https://github.com/navikt/dp-dokumentasjon/docs/innbyggerflate/losninger/innsyn/frontend.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Backend",permalink:"/dp-dokumentasjon/innbyggerflate/losninger/innsyn/backend"},next:{title:"Prinsipper",permalink:"/dp-dokumentasjon/innbyggerflate/prinsipper/"}},l={},a=[{value:"Form\xe5l",id:"form\xe5l",level:2},{value:"Teknologier",id:"teknologier",level:2},{value:"App-arkitektur",id:"app-arkitektur",level:2},{value:"PageHero",id:"pagehero",level:3},{value:"Soknader",id:"soknader",level:3},{value:"AccountNumber",id:"accountnumber",level:3},{value:"MeldFraOmEndring",id:"meldfraomendring",level:3},{value:"Shortcut",id:"shortcut",level:3},{value:"JournalpostList",id:"journalpostlist",level:3},{value:"NosessionModal",id:"nosessionmodal",level:3},{value:"Nettverkskart",id:"nettverkskart",level:2},{value:"Utfordringer",id:"utfordringer",level:2},{value:"Lenker",id:"lenker",level:2}];function c(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",mermaid:"mermaid",p:"p",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"frontend",children:"Frontend"}),"\n",(0,i.jsx)(n.p,{children:"Innsynnside for dagpenger."}),"\n",(0,i.jsx)(n.h2,{id:"form\xe5l",children:"Form\xe5l"}),"\n",(0,i.jsx)(n.p,{children:"Brukerne kan se oversikt over sine dagpenges\xf8knader og innsendte dokumenter, og komme i kontakt med NAV."}),"\n",(0,i.jsx)(n.h2,{id:"teknologier",children:"Teknologier"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Rammeverk: Next@12"}),"\n",(0,i.jsx)(n.li,{children:"Testing: Jest@27"}),"\n",(0,i.jsx)(n.li,{children:"Node: v18.12"}),"\n",(0,i.jsx)(n.li,{children:"MSW: v1.3.2"}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"app-arkitektur",children:"App-arkitektur"}),"\n",(0,i.jsxs)(n.p,{children:["Denne applikasjonen har bare \xe9n side, best\xe5ende av komponentene ",(0,i.jsx)(n.code,{children:"PageHero"}),", ",(0,i.jsx)(n.code,{children:"Soknader"}),", ",(0,i.jsx)(n.code,{children:"AccountNumber"}),", ",(0,i.jsx)(n.code,{children:"MeldFraOmEndring"}),", ",(0,i.jsx)(n.code,{children:"Shortcut"}),", ",(0,i.jsx)(n.code,{children:"JournalpostList"}),", og ",(0,i.jsx)(n.code,{children:"NosessionModal"}),"."]}),"\n",(0,i.jsx)(n.h3,{id:"pagehero",children:"PageHero"}),"\n",(0,i.jsx)(n.p,{children:'Sidetittel med arbeidss\xf8kerstatus, og kan v\xe6re enten "registert" eller "ikke registert".'}),"\n",(0,i.jsx)(n.h3,{id:"soknader",children:"Soknader"}),"\n",(0,i.jsx)(n.p,{children:"Lister over p\xe5begynte og fullf\xf8rte s\xf8knader siste 12 uker. Bruker kan fortsette med s\xf8knaden fra p\xe5begynte s\xf8knader. Hen kan ogs\xe5 se fullf\xf8rte s\xf8knader og ettersende dokumentasjon."}),"\n",(0,i.jsx)(n.h3,{id:"accountnumber",children:"AccountNumber"}),"\n",(0,i.jsxs)(n.p,{children:["Kontonummer hentes fra ",(0,i.jsx)(n.a,{href:"https://github.com/navikt/sokos-kontoregister-person",children:"Sokos kontoregister for person"}),". Dersom bruker ikke har registert dette tidligere vil bruker f\xe5 mulighet for \xe5 gj\xf8re det."]}),"\n",(0,i.jsx)(n.h3,{id:"meldfraomendring",children:"MeldFraOmEndring"}),"\n",(0,i.jsx)(n.p,{children:"I denne seksjonen kan bruker sende melding til NAV, eller sende inn dokumenter (generell innsending)."}),"\n",(0,i.jsx)(n.h3,{id:"shortcut",children:"Shortcut"}),"\n",(0,i.jsxs)(n.p,{children:["Snarveier til ",(0,i.jsx)(n.strong,{children:"Send klage"}),", ",(0,i.jsx)(n.strong,{children:"Sp\xf8rsm\xe5l om saken din"}),", ",(0,i.jsx)(n.strong,{children:"Forskudd p\xe5 dagpenger"})," og ",(0,i.jsx)(n.strong,{children:"Ny s\xf8knad"}),"."]}),"\n",(0,i.jsx)(n.h3,{id:"journalpostlist",children:"JournalpostList"}),"\n",(0,i.jsx)(n.p,{children:"Lister over dokumenter brukeren har sendt inn tidligere, med mulighet for \xe5 laste ned eller forh\xe5ndvise."}),"\n",(0,i.jsx)(n.h3,{id:"nosessionmodal",children:"NosessionModal"}),"\n",(0,i.jsx)(n.p,{children:"Hvis sesjonen er utl\xf8pt vises en denne modalen. Sesjonen varer i 30 minutter."}),"\n",(0,i.jsx)(n.h2,{id:"nettverkskart",children:"Nettverkskart"}),"\n",(0,i.jsx)(n.mermaid,{value:"flowchart TB\n    veilarbregistrering--\x3edp-dagpenger;\n    safselvbetjening--\x3edp-dagpenger;\n    sokos-kontoregister-person--\x3edp-dagpenger;"}),"\n",(0,i.jsx)(n.h2,{id:"utfordringer",children:"Utfordringer"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Dokumenth\xe5ntering er vanskelig \xe5 forst\xe5. Denne trenger omskriving/opprydding.","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Kompleksiteten ligger mest i ",(0,i.jsx)(n.a,{href:"https://github.com/navikt/dp-dagpenger/blob/main/src/pages/api/dokumenter/index.ts",children:"backend for frontend"})]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.li,{children:"Vanskelig \xe5 oppdatere til neste versjon av Next og MSW."}),"\n",(0,i.jsx)(n.li,{children:"Bruker har ikke mulighet \xe5 f\xf8lge med p\xe5 s\xf8knadsstatus."}),"\n",(0,i.jsx)(n.li,{children:"Denne applikasjonen mangler oppsett for Faro."}),"\n",(0,i.jsx)(n.li,{children:"Ettersending av dokumenter kan gj\xf8res kun \xe9n gang. Dette m\xe5 vi dobbeltsjekke om det fortsatt er en feil!"}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"lenker",children:"Lenker"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://github.com/navikt/dp-dagpenger",children:"Github"})}),"\n",(0,i.jsx)(n.li,{children:"Grafana Faro"}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://app.eu.amplitude.com/analytics/nav/dashboard/5z4xqqz",children:"Amplitude"})}),"\n",(0,i.jsx)(n.li,{children:"Oppgaver i Favro"}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://a11y-statement.nav.no/reports/1b32d0fd-983b-44f2-8f64-6f1ae6760c64",children:"Tilgjengelighetserkl\xe6ring"})}),"\n"]})]})}function g(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},1151:(e,n,r)=>{r.d(n,{Z:()=>o,a:()=>d});var i=r(7294);const s={},t=i.createContext(s);function d(e){const n=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),i.createElement(t.Provider,{value:n},e.children)}}}]);