import { getGlobal } from './get-global';

export class MetadataStorage {

}

/**
 * Gets metadata storage.
 * Metadata storage follows the best practices and stores metadata in a global variable.
 */
export function getMetadataStorage(): MetadataStorage {
  const global = getGlobal();

  if (!global.fixedWidthMetadataStorage) {
    global.fixedWidthMetadataStorage = new MetadataStorage();
  }

  return global.fixedWidthMetadataStorage;
}
