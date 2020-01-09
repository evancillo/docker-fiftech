import {Deserializable} from "../deserializable.model";

export class Character implements Deserializable {
  public name: string;
  public status: string;
  public species: string;
  public gender: string;
  public image: string;

  deserialize(input: any): this {
    return Object.assign(this, input);
  }
}
