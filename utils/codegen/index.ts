import {
  mapArgumentsToSettings,
  prepareHTML,
  writeFile,
  writeJS,
  writeStyles,
} from "../common";
import type { ICodeGenSettings } from "./types";

const settings: ICodeGenSettings = mapArgumentsToSettings();
const preparedHTML: string = prepareHTML(settings);

writeFile(settings, preparedHTML);
writeStyles(settings);
writeJS(settings);
