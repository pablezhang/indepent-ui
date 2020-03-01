import {action, observable} from 'mobx';

 class Mod {
  @observable
  public version: number = 0;

   @action
   public refresh = () => {
     this.version = Math.random()
   };
}

export default new Mod()