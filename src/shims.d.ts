// This File is only needed if you use Attributify
// Learn more: https://unocss.dev/presets/attributify
import type { AttributifyAttributes } from '@unocss/preset-attributify'

declare module 'react' {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  interface HTMLAttributes<T> extends AttributifyAttributes { }
}
