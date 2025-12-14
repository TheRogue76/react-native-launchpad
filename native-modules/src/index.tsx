import { NitroModules } from 'react-native-nitro-modules';
import type { NativeModules } from './NativeModules.nitro';

const NativeModulesHybridObject =
  NitroModules.createHybridObject<NativeModules>('NativeModules');

export function multiply(a: number, b: number): number {
  return NativeModulesHybridObject.multiply(a, b);
}
