import { Printable } from "../models/index";

export function logObjects(...objects: Printable[]) {
    objects.forEach(object => object.logOnConsole());
}