// Make sure to import the helper functions from the `ssr` entry point.
import { entryPointUriPathToPermissionKeys } from '@commercetools-frontend/application-shell/ssr';

export const entryPointUriPath = 'starter-c99e6b';

export const PERMISSIONS = entryPointUriPathToPermissionKeys(entryPointUriPath);
