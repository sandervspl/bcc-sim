/* eslint-disable @typescript-eslint/no-var-requires, no-console */
const cp = require('child_process');

module.exports = {
  onPreBuild: () => {
    console.log('Generating next-config.js...');
    cp.spawnSync('npm', ['run', 'build:nextconfig'], { stdio: 'inherit' });
    console.log('Generated next-config.js!');
  },
};
