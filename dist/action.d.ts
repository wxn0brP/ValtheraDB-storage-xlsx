import { CustomActionsBase } from "@wxn0brp/db-core/base/custom";
export interface Opts {
    file?: string;
    dir?: string;
}
/** U+2400 */
export declare const NULL_VALUE = "\u2400";
export declare class DbStorageXlsx extends CustomActionsBase {
    opts: Opts;
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
