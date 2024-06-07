module.exports = {
  apps: [
    {
      script: 'yarn start',
    },
  ],

  deploy: {
    production: {
      key: '/home/tecblic/Downloads/new_website_2024.pem',
      user: 'ubuntu',
      host: '65.2.167.252',
      ref: 'origin/main',
      repo: 'git@github.com:TecblicTechnical/TecblicWebSite.git',
      path: '/home/ubuntu',
      'pre-deploy-local': '',
      'post-deploy':
        'source ~/.nvm/nvm.sh &&  yarn install && yarn build  && pm2 reload ecosystem.config.js --env production',
      'pre-setup': '',
      ssh_options: 'ForwardAgent=yes',
    },
  },
};
