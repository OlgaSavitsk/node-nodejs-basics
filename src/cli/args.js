const parseArgs = () => {
  const arguments = process.argv.map(
    (arg, index) => `${arg} is ${process.argv[index + 1]}`
  );
  const outputString = arguments.filter((arg) => arg.startsWith("--")).join(", ");
  console.log(outputString);
};

parseArgs();
