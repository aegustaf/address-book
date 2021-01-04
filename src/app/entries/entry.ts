export class Entry {

  private _id: number;
  private _name: string;
  private _address: string;
  private _email: string;
  private _phone: string;

  constructor(id: number, name: string, address: string, email: string, phone: string) {
    this._id = id;
    this._name = name;
    this._address = address;
    this._email = email;
    this._phone = phone;
  }

  get id(): number {
    return this._id;
  }

  get name(): string {
    return this._name;
  }

  set name(newName: string) {
    this._name = newName;
  }

  set address(newAddress: string) {
    this._address = newAddress;
  }

  get address(): string {
    return this._address;
  }

  set email(newEmail: string) {
    this._email = newEmail;
  }

  get email(): string {
    return this._email;
  }

  set phone(newPhone: string) {
    this._phone = newPhone;
  }

  get phone(): string {
    return this._phone;
  }

}
