# @wxn0brp/db-storage-xlsx

An **XLSX (Excel) storage adapter** for `@wxn0brp/db-core` (ValtheraDB). Allows using `.xlsx` files as a database backend.

## Installation

```bash
npm i @wxn0brp/db-storage-xlsx @wxn0brp/db-core
```

## Usage

### Single file

```typescript
import { createXlsxValthera } from "@wxn0brp/db-storage-xlsx";

const db = createXlsxValthera({
  file: "./data.xlsx"
});
```

### Directory with per-collection files

```typescript
const db = createXlsxValthera({
  dir: "./data" // Each collection is a separate .xlsx file
});
```

## Options

| Option | Type     | Description |
|--------|----------|-------------|
| `file` | `string` | Path to a single `.xlsx` file (collections are worksheets within) |
| `dir`  | `string` | Path to a directory (each collection is `<collection>.xlsx`) |

`file` and `dir` are mutually exclusive.

## License

MIT
