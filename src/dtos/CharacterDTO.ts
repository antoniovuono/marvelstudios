export interface CharacterDTO {
    name: string,
    alterEgo: string,
    imagePath: string,
    biography:  string,
    route: string,
    caracteristics: {
    birth: string,
    weight: {
    value: number,
    unity: string
    },
    height: {
    value: number,
    unity: string
    },
    universe: string
    },
    abilities: {
    force: number,
    intelligence: number,
    agility: number,
    endurance: number,
    velocity: number
    },
    movies: string[];
}