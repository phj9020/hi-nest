import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { Movie } from './entities/movie.entity';
import { MoviesService } from './movies.service';

@Controller('movies')
export class MoviesController {
    constructor(private readonly moviesService: MoviesService) {}
    @Get() 
    getAll() : Movie[] {
        return this.moviesService.getAll();
    }
    // get single movie with id
    @Get("/:id") 
    getOne(@Param("id") movieId:string) : Movie {
        return this.moviesService.getOne(movieId);
    }
    // create movie
    @Post()
    create(@Body() movieData){
        return this.moviesService.create(movieData);
    }

    @Delete("/:id")
    remove(@Param("id") movieId: string){
        return this.moviesService.remove(movieId);
    }
    // Patch: partial update | Put : whole resource update
    @Patch("/:id")
    update(@Param("id") movieId: string, @Body() updateData){
        return {
            updatedMovieId : movieId,
            ...updateData,
        }
    }
    
}
