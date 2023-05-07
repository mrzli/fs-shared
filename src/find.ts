import { Options } from 'klaw';

export interface FindOptions {
  readonly depthLimit?: number | undefined;
}

export function toKlawFindOptions(options: FindOptions | undefined): Options {
  if (!options) {
    return {};
  }

  return {
    depthLimit: options.depthLimit,
  };
}
