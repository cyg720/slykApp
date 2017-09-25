import {IConvert} from "./convert.interface";

export abstract class Convert<T> implements IConvert<T>{

  constructor(){ }

  abstract convertList(d):T[];

  abstract convertOne(d):T;

  abstract convert(d):T;

}
