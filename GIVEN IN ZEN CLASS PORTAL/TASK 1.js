// CLASS FOR MOVIE
class Movie {
    constructor(Title, Studio, Rating = "PG"){
    this.Title = Title;
    this.Studio = Studio;
    this.Rating = Rating;
    }
}

const first = new Movie("Casino Royale", "Eon Productions", "PG­");