'use client';
import { useRef, useState, type KeyboardEvent } from 'react';
const features = [
  {id:'chat', label:'KI-Chat', title:'Fragen mit Anlagenkontext klären', text:'Stellen Sie Ihre Frage im passenden Servicefall. ME nutzt die zur Frage passenden Herstellerunterlagen, Firmeninformationen oder technischen Erkenntnisse – mit Verweisen zum Nachlesen.', benefit:'Für Techniker: weniger zwischen Unterlagen und Anwendungen wechseln.'},
  {id:'anlagen', label:'Anlagen', title:'Informationen zur Anlage bündeln', text:'Kunden, Standorte, Anlagen und Geräte strukturiert aufrufen. Dokumente, Bilder, Hinweise und Servicehistorie bleiben im passenden Zusammenhang.', benefit:'Für Ihr Team: den bisherigen Stand vor dem nächsten Einsatz kennen.'},
  {id:'berichte', label:'Berichte', title:'Serviceerfahrung dokumentieren', text:'Ergebnisse eines Einsatzes in technischen Berichten festhalten. Maßnahmen und Erkenntnisse werden nachvollziehbar und können später wieder aufgegriffen werden.', benefit:'Für Meister: Wissen bleibt verfügbar, auch wenn ein anderer Kollege übernimmt.'},
  {id:'dashboard', label:'Dashboard', title:'Servicefälle im Überblick behalten', text:'Offene und abgeschlossene Einsätze überblicken. Auswertungen nach Herstellern und Gerätetypen zeigen, womit sich Ihr Team beschäftigt.', benefit:'Für die Betriebsleitung: den Überblick über den Service behalten.'},
  {id:'wissen', label:'Wissen', title:'Technische Unterlagen gezielt finden', text:'Herstellerunterlagen und firmeneigene Dokumente durchsuchen. Ordner und Modell-Tags helfen, relevante Informationen zuzuordnen.', benefit:'Für den ganzen Betrieb: ein gemeinsamer Zugang zum technischen Wissen.'},
];
function Example({id}:{id:string}) {
  if (id==='chat') return <><div className="demo-context">Anlage K-204 · Servicehistorie</div><div className="chat-question">Was wurde beim letzten Einsatz dokumentiert?</div><div className="chat-answer"><b>ME</b><p>Im letzten Servicebericht wurden die Reinigung der Filter und die Prüfung der Luftmenge festgehalten. Ein Folgetermin zur Kontrolle ist vermerkt.</p><span className="source-tag">Quelle: Servicebericht · 16.09.2026</span></div><div className="demo-input">Frage zum Servicefall stellen …</div></>;
  if(id==='anlagen') return <><div className="demo-context">Beispielstandort · Technikraum</div><h4>Klimaanlage K-204</h4><div className="demo-tags"><span>Innengerät</span><span>Dokumente</span><span>Historie</span></div><div className="demo-record"><b>Hinweis für den nächsten Einsatz</b><p>Zugang zum Technikraum vorab mit der Betriebsleitung abstimmen. Wartungsunterlagen sind der Anlage zugeordnet.</p></div><div className="demo-row"><span>Letzter Einsatz</span><b>16.09.2026</b></div><div className="demo-row"><span>Servicebericht</span><b>Vorhanden</b></div></>;
  if(id==='berichte') return <><div className="demo-context">Technischer Bericht · Anlage K-204</div><h4>Wartung dokumentiert</h4><div className="demo-record"><b>Anlass</b><p>Planmäßige Wartung am Beispielstandort.</p></div><div className="demo-record"><b>Durchgeführte Maßnahmen</b><p>Filter gereinigt, Luftmenge geprüft und Ergebnisse dokumentiert.</p></div><div className="demo-record"><b>Nächster Schritt</b><p>Kontrolle beim vereinbarten Folgetermin.</p></div></>;
  if(id==='dashboard') return <><div className="demo-context">Servicefälle · Beispielmonat</div><div className="demo-stats"><div><span>Abgeschlossen</span><strong>18</strong></div><div><span>Offen</span><strong>4</strong></div></div><h4>Einsätze nach Gerätetyp</h4>{[['Klimaanlagen', '72%','12'],['Wärmepumpen','42%','7'],['Lüftungsanlagen','18%','3']].map(([name,width,count])=><div className="chart-row" key={name}><span>{name}</span><div><i style={{width}} /></div><b>{count}</b></div>)}</>;
  return <><div className="demo-context">Wissensbereich · Technische Unterlagen</div><h4>Dokumente zum Gerätemodell</h4><div className="demo-input">Modell oder Stichwort suchen …</div>{['Installationsanleitung','Servicehandbuch','Betriebsinterne Wartungshinweise'].map((s,i)=><div className="document-row" key={s}><span className="document-icon">PDF</span><div><b>{s}</b><p>{i===2?'Meine Firma':'Herstellerunterlagen'} · Modell K-204</p></div></div>)}</>;
}
export default function FeatureSection(){
  const [active,setActive]=useState(0);
  const tabs=useRef<(HTMLButtonElement|null)[]>([]);
  const item=features[active];
  function move(e:KeyboardEvent<HTMLButtonElement>,i:number){let n=i;if(e.key==='ArrowRight')n=(i+1)%features.length;else if(e.key==='ArrowLeft')n=(i+features.length-1)%features.length;else if(e.key==='Home')n=0;else if(e.key==='End')n=features.length-1;else return;e.preventDefault();setActive(n);tabs.current[n]?.focus();}
  return <section className="section wrap" id="funktionen"><header className="section-heading"><span className="eyebrow">ME im Überblick</span><h2>Funktionen</h2><p>Vom Nachschlagen bis zum Servicebericht: Die wichtigsten Werkzeuge für Ihren technischen Alltag.</p></header>
    <div className="feature-tabs" role="tablist" aria-label="ME Funktionen">{features.map((f,i)=><button key={f.id} ref={el=>{tabs.current[i]=el;}} role="tab" id={'tab-'+f.id} aria-selected={active===i} aria-controls={'panel-'+f.id} tabIndex={active===i?0:-1} onClick={()=>setActive(i)} onKeyDown={e=>move(e,i)}>{f.label}</button>)}</div>
    <div className="feature-panel" role="tabpanel" id={'panel-'+item.id} aria-labelledby={'tab-'+item.id} tabIndex={0}>
      <div className="feature-copy"><h3>{item.title}</h3><p>{item.text}</p><p className="feature-benefit">{item.benefit}</p><a className="text-link" href="#anmelden">Zugang für Ihren Betrieb anfragen</a></div>
      <div className="example-frame"><div className="example-heading"><span>ME / {item.label}</span><span>Beispielansicht · fiktive Daten</span></div><div className="example-body"><Example id={item.id}/></div></div>
    </div>
  </section>
}

