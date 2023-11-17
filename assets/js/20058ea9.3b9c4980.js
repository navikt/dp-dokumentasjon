"use strict";(self.webpackChunkdp_dokumentasjon=self.webpackChunkdp_dokumentasjon||[]).push([[9803],{1008:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>g,frontMatter:()=>t,metadata:()=>o,toc:()=>d});var r=i(5893),s=i(1151);const t={sidebar_position:3},a="Faktasider (historisk)",o={id:"innbyggerflate/losninger/navno/faktasider",title:"Faktasider (historisk)",description:"Applikasjonen er dagpengers gamle informasjonsside, og er tilgjengelig p\xe5 nav.no/arbeid/historikk.",source:"@site/docs/innbyggerflate/losninger/navno/faktasider.mdx",sourceDirName:"innbyggerflate/losninger/navno",slug:"/innbyggerflate/losninger/navno/faktasider",permalink:"/dp-dokumentasjon/docs/innbyggerflate/losninger/navno/faktasider",draft:!1,unlisted:!1,editUrl:"https://github.com/navikt/dp-dokumentasjon/docs/innbyggerflate/losninger/navno/faktasider.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Produktsiden",permalink:"/dp-dokumentasjon/docs/innbyggerflate/losninger/navno/produktsiden"},next:{title:"S\xf8knad",permalink:"/dp-dokumentasjon/docs/innbyggerflate/losninger/soknad/"}},l={},d=[{value:"Form\xe5l",id:"form\xe5l",level:2},{value:"Teknologier",id:"teknologier",level:2},{value:"App-arkitektur",id:"app-arkitektur",level:2},{value:"Utfordringer",id:"utfordringer",level:2},{value:"Lenker",id:"lenker",level:2}];function k(e){const n={a:"a",em:"em",h1:"h1",h2:"h2",li:"li",mermaid:"mermaid",p:"p",ul:"ul",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"faktasider-historisk",children:"Faktasider (historisk)"}),"\n",(0,r.jsxs)(n.p,{children:["Applikasjonen er dagpengers gamle informasjonsside, og er tilgjengelig p\xe5 ",(0,r.jsx)(n.a,{href:"https://nav.no/arbeid/historikk",children:"nav.no/arbeid/historikk"}),"."]}),"\n",(0,r.jsx)(n.h2,{id:"form\xe5l",children:"Form\xe5l"}),"\n",(0,r.jsxs)(n.p,{children:["Tjenesten eksisterer for \xe5 vise de historiske informasjonssidene til dagpenger, f\xf8r overgangen til dp-produktsiden. Dataene er lagret i ",(0,r.jsx)(n.a,{href:"/docs/innbyggerflate/losninger/navno/sanity",children:"Sanity"}),", men er ikke tilgjengelig for redigering."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.em,{children:"TODO: I hvilket tidsrom var informasjonen som vises her gyldig?"})}),"\n",(0,r.jsx)(n.h2,{id:"teknologier",children:"Teknologier"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Rammeverk: next@12"}),"\n",(0,r.jsx)(n.li,{children:"Testing: Cypress (ikke i bruk)"}),"\n",(0,r.jsx)(n.li,{children:"Node: lts/*"}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"app-arkitektur",children:"App-arkitektur"}),"\n",(0,r.jsx)(n.mermaid,{value:"flowchart TB\n    dp-faktasider-frontend--  henter tekst --\x3eSanity;"}),"\n",(0,r.jsx)(n.h2,{id:"utfordringer",children:"Utfordringer"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Applikasjonen henter data fra Sanity, selv om dataen ikke endres. Foresl\xe5r at disse dataene ligger som en statisk fil i selve repoet."}),"\n",(0,r.jsx)(n.li,{children:"Applikasjonen er skrevet med Next, men viser kun statisk innhold, s\xe5 den b\xf8r kunne forenkles for \xe5 lette vedlikeholdsarbeidet."}),"\n",(0,r.jsx)(n.li,{children:"For \xe5 unng\xe5 un\xf8dvendig arbeid med \xe5 vedlikeholde tester kj\xf8res ikke disse lenger, og b\xf8r fjernes."}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"lenker",children:"Lenker"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://github.com/navikt/dp-faktasider-frontend",children:"Github"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://www.nav.no/arbeid/historikk",children:"nav.no"})}),"\n",(0,r.jsx)(n.li,{children:"Grafana Faro"}),"\n",(0,r.jsx)(n.li,{children:"Amplitude"}),"\n",(0,r.jsx)(n.li,{children:"Oppgaver i favro"}),"\n",(0,r.jsx)(n.li,{children:"Annen bakgrunnsinformasjon"}),"\n"]})]})}function g(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(k,{...e})}):k(e)}},1151:(e,n,i)=>{i.d(n,{Z:()=>o,a:()=>a});var r=i(7294);const s={},t=r.createContext(s);function a(e){const n=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);