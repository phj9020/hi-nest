import { Injectable, NotFoundException } from '@nestjs/common';
import { Movie } from './entities/movie.entity';

@Injectable()
export class MoviesService {
    //create fake database
    private movies : Movie[] = [];
    
    getAll(): Movie[] {
        return this.movies;
    }
    getOne(id: string) : Movie {
        const movie = this.movies.find(movie => movie.id === parseInt(id));
        if(!movie) {
            throw new NotFoundException(`Movie with id : ${id} not Found`)
        };
        return movie;
    }
    remove(id: string) {
        this.getOne(id)
        this.movies = this.movies.filter(movie => movie.id !== parseInt(id));
    }
    create(movieData) {
        this.movies.push({
            id: this.movies.length + 1, 
            ...movieData
        });
    }
    update(movieId: string, updateData) {
        const movie = this.getOne(movieId);
        // delete previous data
        this.remove(movieId);
        // overwirte old data with updateData
        this.movies.push({...movie, ...updateData});
    }
}
