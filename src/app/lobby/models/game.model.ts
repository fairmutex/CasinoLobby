export interface Types {
    realMode: number;
    funMode: number;
    is_target?: number;
    viewMode?: number;
}

export interface Cat {
    id: string;
    title: string;
    type: string;
}

export interface Feat {
    id: string;
    title: string;
    type: string;
}

export interface Thm {
    id: string;
    title: string;
    type: string;
}
export interface Game {
    categories: string[];
    features: string[];
    themes: string[];
    icons: any[];
    backgrounds: any[];
    id: string;
    server_game_id: string;
    extearnal_game_id: string;
    front_game_id: string;
    name: string;
    title?: any;
    ratio: string;
    status: string;
    provider: string;
    show_as_provider: string;
    provider_title: string;
    game_options: string;
    blocked_countries?: any;
    has_age_restriction: number;
    icon_2: string;
    background: string;
    types: Types;
    game_skin_id: string;
    cats: Cat[];
    feats: Feat[];
    thms: Thm[];
    active: string;
    icon_3: string;
    width: string;
    height: string;
    key:string;
}