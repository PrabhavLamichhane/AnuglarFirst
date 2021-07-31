export class Person {
    public id!: number;
    constructor(

        public name: string,
        public age: number,
        public gender: string) {

    }
}

export class TestClass {
    public age: number = 0;
    constructor() {
        this.age = Math.random();
    }
}

export class Movie{
    public Title:string;
    public Year:string;
    public imdbID:string;
    public Type:string;
    public Poster:string;
}

export interface MoviesResponse {
    Search: Array<MovieResponse>;
    totalResults: number;
    Response: string;
  }
  
  export interface MovieResponse {
    Title: string;
    Year: number;
    Type: string;
    Poster: string;
  }
