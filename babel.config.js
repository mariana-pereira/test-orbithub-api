module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current',
        }
      }
    ],
    '@babel/preset-typescript'
  ],
  plugins: [
    "babel-plugin-transform-typescript-metadata",
    ['module-resolver', {
      alias: {
        '@config': './src/config',
        '@controllers': './src/controllers',
        '@models': './src/models',
        '@views': './src/views'
      }
    },],
    ["@babel/plugin-proposal-decorators", { "legacy": true }],
    ['@babel/plugin-proposal-class-properties', { loose: true }],
  ],
  ignore: [
    '**/*.spec.ts'
  ]
} 