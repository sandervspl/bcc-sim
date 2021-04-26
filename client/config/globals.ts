const env = process.env.NODE_ENV || 'development';
const appEnv = process.env.APP_ENV || 'development';

const globals = {
  'process.env': {
    NODE_ENV: JSON.stringify(env),
    APP_ENV: JSON.stringify(appEnv),
    PORT: process.env.PORT || 3000,
  },
  __DEV__: env === 'development',
  __TEST__: appEnv === 'test',
  __ACC__: appEnv === 'acceptation',
  __PROD__: appEnv === 'production',
};

export default globals;
