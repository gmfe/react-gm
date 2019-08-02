module.exports = api => {
  api.cache(true)
  return {
    ignore: [/@babel[/\\]runtime/], // 忽略 @babel/runtime
    presets: ['gmfe']
  }
}
