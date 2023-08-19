import { Accessor } from "solid-js"
import { PoemType } from "../data/poems"
import { stanzaFormat } from '../hooks/split';

function Content({ currentTheme, activePoem }: { currentTheme: Accessor<CSSModuleClasses>, activePoem: Accessor<PoemType> }) {

  return (
    <div style={`padding-top: 3rem; transition: all 1s;`} class={`${currentTheme().content}`}>
      <p class="poem-date">{activePoem()?.date}</p>
      <h3 class="poem-title">{activePoem()?.title}</h3>
      <article class="poem-body">{stanzaFormat(activePoem()?.body).map(paragraph => <section>{paragraph.map(line => <p>{line}</p>)}</section>)}</article>
      <p class="signature">-NB-</p>
    </div>
  )
}

export default Content
