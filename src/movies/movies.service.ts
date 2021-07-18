import { Injectable } from '@nestjs/common';
import { Movie } from './entities/movie.entity';

@Injectable()
export class MoviesService {
    //create fake database
    private movies : Movie[] = [];

    getAll(): Movie[] {
        return this.movies;
    }
    getOne(id: string) : Movie {
        return this.movies.find(movie => movie.id === parseInt(id));
    }
    remove(id: string) : boolean {
        this.movies.filter(movie => movie.id !== parseInt(id));
        return true;
    }
    create(movieData) {
        this.movies.push({
            id: this.movies.length + 1, 
            ...movieData
        });
    }
}