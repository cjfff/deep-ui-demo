module.exports = {
  configureWebpack: config => {
    config.resolve.extensions = ['.js', '.vue', '.json', '.css']
  }
}
