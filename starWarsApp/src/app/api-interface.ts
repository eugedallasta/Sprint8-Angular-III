export interface StarShip {
    match(regex: RegExp): RegExpMatchArray | null;
    MGLT: string;
    cargo_capacity: string;
    consumables: string;
    cost_in_credits: string;
    created: Date;
    crew: string;
    edited: Date;
    hyperdrive_rating: string;
    length: string;
    manufacturer: string;
    max_atmosphering_speed: string;
    model: string;
    name: string;
    passengers: string;
    films: string[];
    pilots: any[];
    starship_class: string;
    url: string;
}

export interface Pilot {
    birth_year: string;
    name: string;
    eye_color: string;
    hair_color: string;
    mass: number;
    height: number;
    gender: string;
}

export interface User {
    email: string;
    password: string;
    confirmPassword: string;
}

export interface Actor {
    name: string;
    height: string;
    mass: string;
    hair_color: string;
    skin_color: string;
    eye_color: string;
    birth_year: string;
    gender: string;
    homeworld: string;
    films: Film[];
    species: string[];
    vehicles: string[];
    starships: StarShip[];
    created: Date;
    edited: Date;
    url: string;
}

export interface Film {
    match(regex: RegExp): RegExpMatchArray | null;
    title: string;
    episode_id: number;
    opening_crawl: string;
    director: string;
    producer: string;
    release_date: Date;
    characters: string[];
    planets: string[];
    starships: string[];
    vehicles: string[];
    species: string[];
    created: Date;
    edited: Date;
    url: string;
}

