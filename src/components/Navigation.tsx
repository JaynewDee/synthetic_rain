import { For, createResource } from "solid-js"
import poems from "../data/poems"
function Navigation({ setActivePoem, currentTheme }: { setActivePoem: any, currentTheme: any }) {

  const [poemsData] = createResource(() => poems)

  return (
    <nav class={currentTheme().nav}>
      <For each={poemsData()}>
        {(poem) =>
          <button onClick={() => setActivePoem(poem)}>
            {poem.title}
          </button>}
      </For>
    </nav>
  )
}

export default Navigation

