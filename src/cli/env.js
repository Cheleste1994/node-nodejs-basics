const parseEnv = () => {
  const variables = Object.entries(process.env);
  const arrProcess = [];

  for (const [key, value] of variables) {
    if (key.startsWith("RSS_")) {
      arrProcess.push(`${key}=${value}`);
    }
  }

  console.log(arrProcess.join("; "));
};

parseEnv();
