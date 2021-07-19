import { Body, Controller, Delete, Get, Param, Patch, Post, Query, Req, Res } from '@nestjs/common';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';
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
    getOne(@Param("id") movieId:number) : Movie {
        return this.moviesService.getOne(movieId);
    }
    // create movie
    @Post()
    create(@Body() movieData : CreateMovieDto){
        return this.moviesService.create(movieData);
    }

    @Delete("/:id")
    remove(@Param("id") movieId: number){
        return this.moviesService.remove(movieId);
    }
    // Patch: partial update | Put : whole resource update
    @Patch("/:id")
    update(@Param("id") movieId: number, @Body() updateData : UpdateMovieDto){
        return this.moviesService.update(movieId, updateData)
    }
    
}
