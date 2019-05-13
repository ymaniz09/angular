import { Equals } from "./Equals";
import { Printable } from "./Printable";

export interface MyObject<T> extends Printable, Equals<T> {

}