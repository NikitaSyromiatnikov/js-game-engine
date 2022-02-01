import fs from "fs";
import path from "path";
import { CODE_GEN_DEFAULTS, DEFAULT_CSS } from "../codegen/constants";
import type { ICodeGenSettings } from "../codegen/types";

export const mapArgumentsToSettings = (): ICodeGenSettings => {
  const settings: Partial<ICodeGenSettings> = process.argv.reduce(
    (prev, current, idx, args) => {
      switch (current) {
        case "--name":
          const name = checkArgumentValidity(args[idx + 1], current);
          return { ...prev, name };

        case "--html":
          const html = checkArgumentValidity(args[idx + 1], current);
          return { ...prev, html: htmlify(html) };

        case "--path":
          const path = checkArgumentValidity(args[idx + 1], current);
          return { ...prev, path: pathhify(path) };

        default:
          return { ...prev };
      }
    },
    {}
  );

  return { ...CODE_GEN_DEFAULTS, ...settings };
};

export const checkArgumentValidity = (
  argument: string | undefined,
  argOption: string
) => {
  if (!argument) {
    throw new Error(`You must specify the argument for ${argOption}`);
  }

  return argument;
};

export const htmlify = (name: string) => {
  if (name.includes(".html")) {
    return name;
  }

  return name + ".html";
};

export const pathhify = (directory: string) => {
  return path.resolve(__dirname, "..", "..", directory);
};

export const writeFile = (settings: ICodeGenSettings, content: string) => {
  fs.mkdir(settings.path, { recursive: true }, (error) => {
    if (error) {
      throw new Error("Could not create directory");
    }

    fs.writeFileSync(path.resolve(settings.path, settings.html), content, {
      encoding: "utf-8",
    });
  });
};

export const writeStyles = (settings: ICodeGenSettings) => {
  const stylesPath = path.resolve(settings.path, "styles");

  fs.mkdir(stylesPath, { recursive: true }, (error) => {
    if (error) {
      throw new Error("Could not create styles directory");
    }

    fs.writeFileSync(path.resolve(stylesPath, settings.css), DEFAULT_CSS, {
      encoding: "utf-8",
    });
  });
};

export const prepareHTML = (settings: ICodeGenSettings) => {
  return `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${settings.name}</title>
    <link rel="stylesheet" href="./styles/${settings.css}" />
  </head>
  <body>
    <div class="center">
      <canvas id="canvas"></canvas>
    </div>
  </body>
</html>`;
};
