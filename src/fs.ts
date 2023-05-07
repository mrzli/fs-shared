import { Stats } from 'node:fs';

export const ENCODING_UTF8 = 'utf8';

export interface FilePathStats {
  readonly path: string;
  readonly stats: Stats;
}

export interface FilePathContent<TContent extends string | Buffer> {
  readonly path: string;
  readonly content: TContent;
}

export type FilePathTextContent = FilePathContent<string>;
export type FilePathBinaryContent = FilePathContent<Buffer>;
