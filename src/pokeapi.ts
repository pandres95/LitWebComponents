import { LitElement, html } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';

import { debounce } from 'throttle-debounce';

@customElement('x-pokemon')
export class PokemonElement extends LitElement {
    @property({ type: String, reflect: true })
    name: string = 'Pikachu';

    @state()
    pokemon: any;

    connectedCallback() {
        super.connectedCallback();
    }

    attributeChangedCallback (name: string, old: string, value: string) {
        super.attributeChangedCallback(name, old, value);

        if(name === 'name') {
            this.updatePokemon();
        }
    }

    updatePokemon = debounce(1000, async () => {
        this.pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${this.name.toLowerCase()}`)
            .then(r => r.json());
    });

    render () {
        return html`
        <div>
            <label for="pokemon">Pokemon: </label>
            <input name="pokemon" type="text" @keyup="${(e: Event) => (this.name = (e.target as HTMLInputElement).value)}" .value="${this.name}">
        </div>
        ${
            this.pokemon !== undefined
                ? html`<img .src="${this.pokemon.sprites.front_default}">`
                : ''
        }
        `;
    }
}
