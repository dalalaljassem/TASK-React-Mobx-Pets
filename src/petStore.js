import petsData from './petsData';
import {makeAutoObservable} from 'mobx'

class PetStore{
    pets = petsData;
constructor()
{
    makeAutoObservable(this);
}

 handleAdopt = (petId) =>
   (this.pets= this.filter((pet) => pet.id !== petId));

}
const petStore = new PetStore();
export default petStore;