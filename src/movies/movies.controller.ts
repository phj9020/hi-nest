import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';

@Controller('movies')
export class MoviesController {
    @Get() 
    getAll(){
        return "This will return all movies"
    }
    @Get("search")
    search(@Query("year") searchYear: string){
        return `we are searching for a movie with a title : ${searchYear}`
    }
    // get single movie with id
    @Get("/:id") 
    getOne(@Param("id") movieId:string){
        return `this will return single movie with the id: ${movieId}`
    }
    // create movie
    @Post()
    create(@Body() movieData){
        return movieData;
    }

    @Delete("/:id")
    remove(@Param("id") movieId: string){
        return `this will delete a movie with the id: ${movieId}`;
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
