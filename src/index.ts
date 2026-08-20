import { ValtheraClass } from "@wxn0brp/db-core";
import { DbStorageXlsx, Opts } from "./action";

export function createXlsxValthera(opts: Opts) {
    const xlsxStorage = new DbStorageXlsx(opts);
    return new ValtheraClass({
        adapter: xlsxStorage
    });
}

export const DYNAMIC = {
    xlsx: (opts: Opts) => new DbStorageXlsx(opts)
};
