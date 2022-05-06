import { entropyToMnemonic } from '@ethersproject/hdnode';
import { randomBytes } from '@ethersproject/random';

export async function composeMnemonic(mnemonic) {
  try {
    if (!!mnemonic && typeof mnemonic == 'string' && mnemonic.length === 12) return mnemonic;
    else return entropyToMnemonic(randomBytes(16));
  } catch (error) {
    throw new Error(error.message);
  }
}
