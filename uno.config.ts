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
