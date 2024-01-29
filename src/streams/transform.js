import { Transform, pipeline } from "stream";

const transform = async () => {
  const reversedString = (chunkString) =>
    chunkString.split("").reverse().join("");
  const transformString = new Transform({
    transform(chunk, _, cb) {
      const chunkString = chunk.toString();
      cb(null, reversedString(chunkString) + "\n");
    },
  });
  pipeline(process.stdin, transformString, process.stdout, (err) => {
    console.log(err);
  });
};

await transform();
