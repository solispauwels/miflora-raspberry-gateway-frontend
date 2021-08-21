exports.plugin = {
  name: 'frontend',
  version: '1.0.0',
  register: server => {
    server.route({
      method: 'GET',
      path: '{file*}',
      handler: {
        directory: {
          path: 'build/'
        }
      }
    })
  }
}
