

import { Injectable } from "@angular/core";
import { UniversalService } from './Universal.service';
import { Character, Episode, LocationModel } from '../models/model';
@Injectable({
    providedIn: 'root',
  })
  export class LogService {
    searchStatus:boolean = false
    //*
    Page:number = 0
    MaxPage:number = 0
    //character
    characterList:Array<Character> = []
    character:Character = {
      id: 0,
      name: '',
      status: '',
      species: '',
      type: '',
      gender: '',
      origin: {
      name: '',
      url: '',
      },
      location: {
        name: '',
        url: '',
      },
      image: '',
      episode: [],
      url: '',
      created: '',
    }
    characterStatus:boolean = false

    //Location
    LocationList:Array<LocationModel> = []
    Location:LocationModel = {
      id: 0,
      name: '',
      type: '',
      dimension: '',
      residents: [],
      url: '',
      created: ''
    }
    LocationStatus:boolean = false
    //episode
    EpisodeList:Array<Episode> = []
    Episode:Episode = {
      id: 0,
      name: '',
      air_date: '',
      episode: '',
      characters: [],
      url: '',
      created: ''
    }

    constructor(public backService: UniversalService) {}

    async readCharacte(){
      try {
        let backInf = await this.backService.readCharacterbyPage(this.Page).toPromise()
        this.MaxPage = backInf.info.pages
        this.characterList = backInf.results
      } catch (error) {
        console.log(error)
      }
    }

    async SpecificationsCharacter(id:number){
      try {
        let backInf = await this.backService.readSpecificationsCharacter(id).toPromise()
        this.character = backInf
        console.log(this.character)
      } catch (error) {
        console.log(error)
      }
    }

    async ReadLocation(){
      try {
        let backInf = await this.backService.readLocationbyPage(1).toPromise()
        this.LocationList = backInf.results
        console.log(backInf)
      } catch (error) {
        console.log(error)
      }
    }

    async ReadEpisode(){
      try {
        let backInf = await this.backService.readEpisodebyPage(1).toPromise()
        this.EpisodeList =  backInf.results
        console.log(backInf)
      } catch (error) {
        console.log(error)
      }
    }

    async search(data:string,type:string){
        switch(type){
          case '/Home' :
              this.searchCharcter(data)
          break;
          case '/places':
            this.searchPaces(data)
          break;
          case '/episode':
            this.searchEpisode(data)
          break;
        }

    }
    async searchCharcter(data:string){
      try {
        let backInf:any = await this.backService.readCharacterbyPageandName(data,2).toPromise()
        console.log(backInf)
        this.characterList = []
        if(backInf != undefined)this.characterList = backInf.results as Array<Character>

      } catch (error) {
        console.log(error)
      }
    }
    async searchPaces(data:string){
      try {
        let backInf:any = await this.backService.readPlacesbyPageandName(data,2).toPromise()
        console.log(backInf)
        this.LocationList = []
        if(backInf != undefined)this.LocationList = backInf.results

      } catch (error) {
        console.log(error)
      }
    }
    async searchEpisode(data:string){
      try {
        let backInf:any = await this.backService.readEpisodebyPageandName(data,2).toPromise()
        console.log(backInf)
        this.EpisodeList = []
        if(backInf != undefined)this.EpisodeList =  backInf.results

      } catch (error) {
        console.log(error)
      }
    }


  }
