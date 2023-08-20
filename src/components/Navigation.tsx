import { For, createResource } from "solid-js"
import poems from "../data/poems"
function Navigation({ setActivePoem, currentTheme }: { setActivePoem: any, currentTheme: any }) {

  const [poemsData] = createResource(() => poems)

  return (
    <nav class={currentTheme().nav}>
      <div class="nav-scroll-wrapper">
        <For each={poemsData()}>
          {(poem) =>
            <>
              <p onClick={() => setActivePoem(poem)}>
                {poem.title}
              </p>
              <span>&#8226</span>
            </>
          }
        </For>
      </div>
    </nav>
  )
}

export default Navigation

