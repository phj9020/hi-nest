import { Controller, Delete, Get, Param, Patch, Post, Put } from '@nestjs/common';

@Controller('movies')
export class MoviesController {
    @Get() 
    getAll(){
        return "This will return all movies"
    }
    // get single movie with id
    @Get("/:id") 
    getOne(@Param("id") movieId:string){
        return `this will return single movie with the id: ${movieId}`
    }
    // create movie
    @Post()
    create(){
        return "This will create a movie";
    }
    @Delete("/:id")
    remove(@Param("id") movieId: string){
        return `this will delete a movie with the id: ${movieId}`;
    }
    // Patch: partial update | Put : whole resource update
    @Patch("/:id")
    update(@Param("id") movieId: string){
        return `this will update a movie with the id: ${movieId}`;
    }
}
