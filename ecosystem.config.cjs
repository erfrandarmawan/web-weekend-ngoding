module.exports = {
  apps: [
    {
      name: 'web-weekend-ngoding',
      port: '3700',
      exec_mode: 'cluster',
      instances: 'max',
      script: './.output/server/index.mjs'
    }
  ]
}