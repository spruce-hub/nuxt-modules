import type { Options } from './types'

export const defaults: Record<string, Partial<Options>> = {
  '/api': {
    apiHostEnv: '',
    apiHostUrl: '',
    cookieName: '',
  },
}
