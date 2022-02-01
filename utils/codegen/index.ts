import {
  mapArgumentsToSettings,
  prepareHTML,
  writeFile,
  writeStyles,
} from "../common";
import type { ICodeGenSettings } from "./types";

const settings: ICodeGenSettings = mapArgumentsToSettings();
const preparedHTML: string = prepareHTML(settings);

writeFile(settings, preparedHTML);
writeStyles(settings);
