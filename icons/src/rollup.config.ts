import commonjs from '@rollup/plugin-commonjs'
import resolve from '@rollup/plugin-node-resolve'
import typescript from '@rollup/plugin-typescript'
import { RollupOptions } from 'rollup'
import dts from 'rollup-plugin-dts'

const config: RollupOptions[] = [
  {
    input: './src/index.ts',
    output: [
      {
        file: './build/nuri-icons/cjs/index.js',
        format: 'cjs',
        sourcemap: true,
      },
      {
        file: './build/nuri-icons/esm/index.js',
        format: 'esm',
        sourcemap: true,
      },
    ],
    plugins: [
      resolve(),
      commonjs(),
      typescript({ tsconfig: './tsconfig.json', module: 'esnext' }),
    ],
  },
  {
    input: 'build/nuri-icons/esm/types/index.d.ts',
    output: [{ file: 'build/nuri-icons/esm/index.d.ts', format: 'es' }],
    plugins: [dts()],
  },
  {
    input: 'build/nuri-icons/cjs/types/index.d.ts',
    output: [{ file: 'build/nuri-icons/cjs/index.d.ts', format: 'es' }],
    plugins: [dts()],
  },
]
export default config
