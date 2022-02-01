import path from "path";
import { ICodeGenSettings } from "../types";

export const CODE_GEN_DEFAULTS: ICodeGenSettings = {
  path: path.resolve(__dirname, "..", "..", "..", "game"),
  name: "game",
  html: "index.html",
  css: "main.css",
};

export const DEFAULT_CSS = `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
  
.center {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
`;
