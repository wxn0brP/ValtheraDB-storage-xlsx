import { ValtheraClass } from "@wxn0brp/db-core";
import { DbStorageXlsx } from "./action.js";
export function createXlsxValthera(opts) {
    const xlsxStorage = new DbStorageXlsx(opts);
    return new ValtheraClass({
        adapter: xlsxStorage,
    });
}
export const DYNAMIC = {
    xlsx: (opts) => new DbStorageXlsx(opts),
};
