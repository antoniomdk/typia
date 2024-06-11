import { DeployRunner } from "./internal/DeployRunner";

const main = async (): Promise<void> => {
  const tag: string | undefined = process.argv[2];
  if (tag === undefined) {
    console.log("specify tag name like latest or next");
    process.exit(-1);
  }
  await DeployRunner.main({
    tag,
    publish: true,
    setup: true,
    testExecutors: [
      {
        name: "test",
        commands:
          tag === "tgz" && process.argv[3] === "template"
            ? ["npm run template", "npm run build", "npm start"]
            : ["npm run build", "npm start"],
      },
      {
        name: "test-esm",
        commands: ["npm run build", "npm start"],
      },
      {
        name: "errors",
        commands: ["npm start"],
      },
      {
        name: "benchmark",
        commands: ["npm run build"],
      },
    ],
  });
};
main().catch((exp) => {
  console.error(exp);
  process.exit(-11);
});
