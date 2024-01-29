const parseEnv = () => {
  const environments = Object.keys(process.env).map(
    (key) => `${key}=${process.env[key]}`
  );
  const outputString = environments
    .filter((env) => env.startsWith("RSS_"))
    .join("; ");
  console.log(outputString);
};

parseEnv();
