const { spawn } = require('child_process')
const axios = require('axios')
const url = require('url')
const waitOn = require('wait-on')
const fs = require('fs')

let basePort = process.env.PORT || '80'
let baseUrl = url.format({
  protocol : process.env.PROTOCOL || 'http',
  hostname : process.env.HOST || '0.0.0.0',
  port     : process.env.PORT || basePort
})
let useLocalService = true
// Uses a TCP for determining availability of the service
const baseTcp = url.format({
  protocol : process.env.PROTOCOL || 'tcp',
  hostname : process.env.HOST || '0.0.0.0',
  port     : process.env.PORT || basePort
})

const stackFile = process.env.STACK_JSON_FILE
if (fs.existsSync(stackFile)) {
  const stackInfo = JSON.parse(fs.readFileSync(stackFile))
  useLocalService = false
  baseUrl = stackInfo.ServiceEndpoint
}

let serverlessService = axios.create({
  baseURL: baseUrl,
  timeout: 5000
})

let serverlessProcess = {
  serverless_process: null,
  start: async () => {
    if(useLocalService) {
      this.serverless_process = spawn('serverless', ['offline', '--port', basePort])
      await waitOn({resources: [baseTcp]})
    }
  },
  stop: () => {
    if(useLocalService) {
      this.serverless_process.kill('SIGINT')
    }
  }
}

module.exports = {
  serverlessProcess: serverlessProcess,
  serverlessService: serverlessService
}
