export default class RegularStore {
  isCharging: boolean = false;

  setIsCharging = (value: boolean) => {
    this.isCharging = value;
  };
}
