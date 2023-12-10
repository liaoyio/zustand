# React + TypeScript + Vite

## 添加 UnocCSS

参考链接 🔗:  https://unocss.dev/integrations/vite

```shell
pnpm add -D unocss 
# 添加预设
pnpm add -D @unocss/transformer-attributify-jsx @unocss/transformer-directives @unocss/transformer-variant-group
```

添加 `unocss.config.ts` 文件

```ts
import { defineConfig, presetAttributify, presetIcons, presetUno } from 'unocss'

import transformerAttributifyJsx from '@unocss/transformer-attributify-jsx'
import transformerDirectives from '@unocss/transformer-directives'
import transformerVariantGroup from '@unocss/transformer-variant-group'

export default defineConfig({
  presets: [
    presetUno({ dark: 'media' }),
    presetAttributify({ strict: true }),
    presetIcons({
      autoInstall: true,
      extraProperties: { display: 'inline-block', 'vertical-align': 'middle' }
    })
  ],
  transformers: [transformerDirectives(), transformerVariantGroup(), transformerAttributifyJsx()],
})
```
在 src 目录下新建 `shims.d.ts`文件, 这个文件的作用是对 TS 未识别的 unocss 属性进行声明

```
// This File is only needed if you use Attributify
// Learn more: https://unocss.dev/presets/attributify
import type { AttributifyAttributes } from '@unocss/preset-attributify'

declare module 'react' {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  interface HTMLAttributes<T> extends AttributifyAttributes { }
}
```
