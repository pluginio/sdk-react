import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import typescript from "rollup-plugin-typescript2";

export default {
  input: "./PluginProvider.tsx",
  output: [
    {
      file: './dist/sdk-react.js',
      format: "cjs",
      sourcemap: true,
    }
  ],
  plugins: [
    peerDepsExternal(), 
    resolve(), 
    commonjs(), 
    typescript(),
  ],
};
