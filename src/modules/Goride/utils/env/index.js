const env = import.meta.env;

const envVariables = Object.keys(env).reduce((acc, key) => {
  if (key.startsWith('REACT_')) {
    acc[key] = env[key];
  }
  return acc;
}, {});

export default envVariables;