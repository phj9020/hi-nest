import { CreateMovieDto } from './dto/create-movie.dto';
import { Injectable, NotFoundException } from '@nestjs/common';
import { Movie } from './entities/movie.entity';
import { UpdateMovieDto } from './dto/update-movie.dto';

@Injectable()
export class MoviesService {
    //create fake database
    private movies : Movie[] = [];
    
    getAll(): Movie[] {
        return this.movies;
    }
    getOne(id: number) : Movie {
        const movie = this.movies.find(movie => movie.id === id);
        if(!movie) {
            throw new NotFoundException(`Movie with id : ${id} not Found`)
        };
        return movie;
    }
    remove(id: number) {
        this.getOne(id)
        this.movies = this.movies.filter(movie => movie.id !== id);
    }
    create(movieData : CreateMovieDto) {
        this.movies.push({
            id: this.movies.length + 1, 
            ...movieData
        });
    }
    update(movieId: number, updateData : UpdateMovieDto) {
        // find movie else throw NotFoundException
        const movie = this.getOne(movieId);
        // delete previous data
        this.remove(movieId);
        // overwirte old data with updateData
        this.movies.push({...movie, ...updateData});
    }
}
