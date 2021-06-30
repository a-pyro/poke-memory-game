// typings from https://app.quicktype.io/

export interface Pokemon {
  abilities: Ability[];
  base_experience: number;
  forms: Species[];
  game_indices: any[];
  height: number;
  held_items: any[];
  id: number;
  is_default: boolean;
  location_area_encounters: string;
  moves: any[];
  name: string;
  order: number;
  past_types: any[];
  species: Species;
  sprites: Sprites;
  stats: Stat[];
  types: Type[];
  weight: number;
}

export interface Ability {
  ability: Species;
  is_hidden: boolean;
  slot: number;
}

export interface Species {
  name: string;
  url: string;
}

export interface GenerationV {
  'black-white': Sprites;
}

export interface GenerationIv {
  'diamond-pearl': Sprites;
  'heartgold-soulsilver': Sprites;
  platinum: Sprites;
}

export interface Versions {
  'generation-i': GenerationI;
  'generation-ii': GenerationIi;
  'generation-iii': GenerationIii;
  'generation-iv': GenerationIv;
  'generation-v': GenerationV;
  'generation-vi': { [key: string]: GenerationVi };
  'generation-vii': GenerationVii;
  'generation-viii': GenerationViii;
}

export interface Sprites {
  back_default: null | string;
  back_female: null;
  back_shiny: null | string;
  back_shiny_female: null;
  front_default: null | string;
  front_female: null;
  front_shiny: null | string;
  front_shiny_female: null;
  other?: Other;
  versions?: Versions;
  animated?: Sprites;
}

export interface GenerationI {
  'red-blue': RedBlue;
  yellow: RedBlue;
}

export interface RedBlue {
  back_default: null;
  back_gray: null;
  front_default: null;
  front_gray: null;
}

export interface GenerationIi {
  crystal: Crystal;
  gold: Crystal;
  silver: Crystal;
}

export interface Crystal {
  back_default: null;
  back_shiny: null;
  front_default: null;
  front_shiny: null;
}

export interface GenerationIii {
  emerald: Emerald;
  'firered-leafgreen': Crystal;
  'ruby-sapphire': Crystal;
}

export interface Emerald {
  front_default: null;
  front_shiny: null;
}

export interface GenerationVi {
  front_default: null;
  front_female: null;
  front_shiny: null;
  front_shiny_female: null;
}

export interface GenerationVii {
  icons: DreamWorld;
  'ultra-sun-ultra-moon': GenerationVi;
}

export interface DreamWorld {
  front_default: null | string;
  front_female: null;
}

export interface GenerationViii {
  icons: DreamWorld;
}

export interface Other {
  dream_world: DreamWorld;
  'official-artwork': OfficialArtwork;
}

export interface OfficialArtwork {
  front_default: string;
}

export interface Stat {
  base_stat: number;
  effort: number;
  stat: Species;
}

export interface Type {
  slot: number;
  type: Species;
}
