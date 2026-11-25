import { forgeTypedValthera, ValtheraClass } from "@wxn0brp/db-core";
import { DbStorageXlsx } from "./adapter.js";
export function createXlsxValthera(opts) {
    const xlsxStorage = new DbStorageXlsx(opts);
    const db = new ValtheraClass({
        adapter: xlsxStorage,
    });
    return forgeTypedValthera(db);
}
export const DYNAMIC = {
    def: (opts) => new DbStorageXlsx(opts),
};
