import { NotFoundException } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { MoviesService } from './movies.service';

describe('MoviesService', () => {
  let service: MoviesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MoviesService],
    }).compile();

    service = module.get<MoviesService>(MoviesService);
  });
  // 테스트 코드 
  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  
  describe("getAll", () => {
    it("should return an array", ()=> {
      // call getAll fn from service 
      const result = service.getAll();
      expect(result).toBeInstanceOf(Array);
    })
  });

  describe("getOne", ()=> {
    it("should return an object", ()=> {
      service.create({
        title: "test Movie",
        year: 2021,
        genres: ["horror", "comedy"]
      });

      const movie = service.getOne(1);
      expect(movie).toBeDefined();
      expect(movie.id).toEqual(1);
    });

    it('should throw 404 error', ()=> {
      try {
        service.getOne(999);
      } catch(e) {
        expect(e).toBeInstanceOf(NotFoundException);
        expect(e.message).toEqual('Movie with id : 999 not Found.')
      }
    });

  });

  describe("delete", () => {
    it("should delete movie", () => {
      service.create({
        title: "test Movie",
        year: 2021,
        genres: ["horror", "comedy"]
      });
      const deforeDelete = service.getAll().length;
      service.remove(1);
      const afterDelete = service.getAll().length;
      expect(afterDelete).toEqual(deforeDelete - 1);
    });

    it("should return 404", ()=> {
      try {
        service.remove(999);
      } catch (e) {
        expect(e).toBeInstanceOf(NotFoundException);
      }
    });

  });

  describe("create", ()=> {
    it("should create a new movie", ()=> {
      const beforeCreate = service.getAll().length;
      service.create({
        title: "test Movie",
        year: 2021,
        genres: ["horror", "comedy"]
      });
      const afterCreate = service.getAll().length;
      console.log(beforeCreate, afterCreate);
      expect(afterCreate).toBeGreaterThan(beforeCreate);
      
    });
  });

});
