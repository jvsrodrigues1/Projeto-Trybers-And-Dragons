import Race from './Race';

class Dwarf extends Race {
  private _maxLifePoints: number;
  private static _counter = 0;
  constructor(
    name: string,
    dexterity: number,
  ) {
    super(name, dexterity);
    this._maxLifePoints = 80;
    Dwarf._counter += 1;
  }

  static createdRacesInstances(): number {
    return Dwarf._counter;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}

export default Dwarf;