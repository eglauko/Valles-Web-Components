import resolve from '@rollup/plugin-node-resolve';
import copy from 'rollup-plugin-copy';


const unbundledMsg = `Don't want to use any bundling tools? Check out the <a href="./unbundled.html">unbundled version</a>!`;

export default [
  {
    // index es6
    input: 'index.js',
    output: {
      file: 'index.bundled.js',
      format: 'iife',
    },
    plugins: [
      resolve(),
      copy({
        targets: [
          {
            src: './unbundled.html',
            dest: '.',
            rename: 'index.html',
            inject: false,
            transform: (contentsRaw) => {
              const contents = contentsRaw.toString();
              return contents.replace('index.js', 'index.bundled.js').replace('<!-- unbundled -->', unbundledMsg);
            }
          }
        ]
      })
    ],
    watch: {include: ['unbundled.html']}
  },
];
