import { CustomAdapterBase } from "@wxn0brp/db-core/base/customAdapter";
export interface Opts {
    file?: string;
    dir?: string;
}
/** U+2400 */
export declare const NULL_VALUE = "\u2400";
export declare class DbStorageXlsx extends CustomAdapterBase {
    opts: Opts;
    version: string;
    capabilities: {
        transactions: boolean;
        indexes: boolean;
        persistent: boolean;
    };
    constructor(opts: Opts);
    _getPath(collection: string): string;
    _getSheetName(collection: string): string;
    read(file: string): Promise<Record<string, any>[]>;
    write(file: string, data: any[]): Promise<void>;
    ensureCollection(collection: string): Promise<boolean>;
    issetCollection(collection: string): Promise<boolean>;
    getCollections(): Promise<string[]>;
    removeCollection(collection: string): Promise<boolean>;
}
