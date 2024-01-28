const parseArgs = () => {
  const { argv } = process;
  const argumentsArr = [];

  argv.forEach((arg, index, arr) => {
    if (arg.startsWith("--")) {
      argumentsArr.push(`${arg.slice(2)} is ${arr[index + 1]}`);
    }
  });

  console.log(argumentsArr.join(", "));
};

parseArgs();
