import { ValtheraClass } from "@wxn0brp/db-core";
import { Data } from "@wxn0brp/db-core/types/data";
import { TypedValthera } from "@wxn0brp/db-core/types/typed";
import { DbStorageXlsx, Opts } from "./adapter.js";
export declare function createXlsxValthera<T extends Record<string, Data>>(opts: Opts): TypedValthera<T, ValtheraClass>;
export declare const DYNAMIC: {
    def: (opts: Opts) => DbStorageXlsx;
};
