import { Setter } from "solid-js"

import syntheticStyles from './synthetic.module.css';
import rainStyles from './rain.module.css';

function Banner({ themeSetter }: { themeSetter: Setter<CSSModuleClasses> }) {
    return (
        <header class="headline">
            <h1>
                <span class="synthetic" onClick={() => themeSetter(syntheticStyles)}>Synthetic</span>
                <span class="rain" onClick={() => themeSetter(rainStyles)}>Rain</span>
            </h1>
        </header>
    )
}

export default Banner