import { ValtheraClass } from "@wxn0brp/db-core";
import { DbStorageXlsx, Opts } from "./action.js";
export declare function createXlsxValthera(opts: Opts): ValtheraClass;
export declare const DYNAMIC: {
    xlsx: (opts: Opts) => DbStorageXlsx;
};
