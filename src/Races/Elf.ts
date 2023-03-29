import Race from './Race';

class Elf extends Race {
  private _maxLifePoints: number;
  private static _counter = 0;
  constructor(
    name: string,
    dexterity: number,
  ) {
    super(name, dexterity);
    this._maxLifePoints = 99;
    Elf._counter += 1;
  }

  static createdRacesInstances(): number {
    return Elf._counter;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}

export default Elf;