module.exports = {
  apps: [{
    name: 'settingUpAws',
    script: './index.js'
  }],
  deploy: {
    production: {
      user: 'ubuntu',
      host: 'ec2-52-56-114-72.eu-west-2.compute.amazonaws.com:4321',
      key: '~/Documents/AWSServer.pem',
      ref: 'origin/develop',
      repo: 'git@github.com:JasonDumont/settingUpAws.git',
      path: '/home/ubuntu/server',
      'post-deploy': 'npm install && pm2 startOrRestart ecosystem.config.js'
    }
  }
}
