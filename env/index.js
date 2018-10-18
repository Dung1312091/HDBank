const defaultConfig = {
  // Default config in here
};
const getEnvironmentConfig = env =>
  Object.assign({}, defaultConfig, env ? require(`./${env}`) : {});

module.exports = getEnvironmentConfig(process.env.NODE_ENV);
