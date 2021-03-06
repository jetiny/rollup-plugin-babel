import buble from 'rollup-plugin-buble';

var external = Object.keys( require( './package.json' ).dependencies );

export default {
	entry: 'src/index.js',
	plugins: [ buble() ],
	external: external,
	targets: [
		{ dest: 'dist/rollup-plugin-babel-standalone.cjs.js', format: 'cjs' },
		{ dest: 'dist/rollup-plugin-babel-standalone.es.js', format: 'es' }
	],
	sourceMap: true
};
