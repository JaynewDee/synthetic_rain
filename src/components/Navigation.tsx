import { For, createResource } from "solid-js"
import poems from "../data/poems"
function Navigation({ setActivePoem, currentTheme }: { setActivePoem: any, currentTheme: any }) {

  const [poemsData] = createResource(() => poems)

  return (
    <nav class={currentTheme().nav}>
      <div class="nav-scroll-wrapper">
        <For each={poemsData()}>
          {(poem) =>
            <p onClick={() => setActivePoem(poem)}>
              {poem.title}
            </p>}
        </For>
      </div>
    </nav>
  )
}

export default Navigation

