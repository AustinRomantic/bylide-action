#!/usr/bin/env zx
import {createRequire as __$$createRequireN} from 'module';var require=__$$createRequireN(import.meta.url);
var __getOwnPropNames = Object.getOwnPropertyNames;
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};

// node_modules/.pnpm/tsno@2.0.0/node_modules/tsno/dist/client.js
import { createRequire as __$$createRequire } from "module";
var require2;
var init_client = __esm({
  "node_modules/.pnpm/tsno@2.0.0/node_modules/tsno/dist/client.js"() {
    require2 = __$$createRequire("file://D:\\vue-learning\\vue-project\\node_modules\\.pnpm\\tsno@2.0.0\\node_modules\\tsno\\dist\\client.js");
  }
});

// scripts/check.ts
var check_exports = {};
import { $ } from "zx";
var init_check = __esm({
  async "scripts/check.ts"() {
    init_client();
    await $`pnpm lint:style`.catch((out) => {
      throw new Error(out.stdout);
    });
    await $`pnpm spellcheck`.catch((out) => {
      throw new Error(out.stdout);
    });
  }
});

// scripts/pre-commit.ts
init_client();
import { $ as $2 } from "zx";
console.log("\u5F00\u59CB\u6267\u884C\u4EE3\u7801\u8D28\u91CF\u8BC4\u4F30...\n");
await init_check().then(() => check_exports).catch((out) => {
  throw new Error("\u4EE3\u7801\u8D28\u91CF\u8BC4\u4F30\u5931\u8D25, \u8BF7\u68C0\u67E5\u4EE3\u7801");
});
console.log('printf "\u68C0\u6D4B\u901A\u8FC7, \u521B\u5EFA commit \u4E2D...\n');
await $2`git add .`;
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsibm9kZV9tb2R1bGVzLy5wbnBtL3Rzbm9AMi4wLjAvbm9kZV9tb2R1bGVzL3Rzbm8vZGlzdC9jbGllbnQuanMiLCAic2NyaXB0cy9jaGVjay50cyIsICJzY3JpcHRzL3ByZS1jb21taXQudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCB7Y3JlYXRlUmVxdWlyZSBhcyBfXyQkY3JlYXRlUmVxdWlyZX0gZnJvbSAnbW9kdWxlJzt2YXIgcmVxdWlyZT1fXyQkY3JlYXRlUmVxdWlyZShcImZpbGU6Ly9EOlxcXFx2dWUtbGVhcm5pbmdcXFxcdnVlLXByb2plY3RcXFxcbm9kZV9tb2R1bGVzXFxcXC5wbnBtXFxcXHRzbm9AMi4wLjBcXFxcbm9kZV9tb2R1bGVzXFxcXHRzbm9cXFxcZGlzdFxcXFxjbGllbnQuanNcIik7XG5pbXBvcnQge1xuICBjb2xvcnNcbn0gZnJvbSBcIi4vY2h1bmstRkhEWFhPS1kuanNcIjtcblxuXG4vLyBzcmMvY2xpZW50LnRzXG52YXIgZmV0Y2ggPSAodXJsLCBpbml0KSA9PiBpbXBvcnQoXCIuL3NyYy00UTdRNjdDMy5qc1wiKS50aGVuKChyZXMpID0+IHJlcy5kZWZhdWx0KHVybCwgaW5pdCkpO1xudmFyIGF4aW9zID0gKGNvbmZpZykgPT4gaW1wb3J0KFwiLi9heGlvcy1QSVo0QzVVWi5qc1wiKS50aGVuKChyZXMpID0+IHJlcy5kZWZhdWx0KGNvbmZpZykpO1xuZXhwb3J0IHtcbiAgYXhpb3MsXG4gIGNvbG9ycyxcbiAgZmV0Y2hcbn07XG4iLCAiIyEvdXNyL2Jpbi9lbnYgenhcclxuXHJcbmltcG9ydCB0eXBlIHsgUHJvY2Vzc091dHB1dCB9IGZyb20gJ3p4J1xyXG5pbXBvcnQgeyAkIH0gZnJvbSAnengnXHJcbmltcG9ydCB7IHByaW50T2JqZWN0IH0gZnJvbSAnLi91dGlscydcclxuXHJcbmF3YWl0ICRgcG5wbSBsaW50OnN0eWxlYC5jYXRjaCgob3V0OiBQcm9jZXNzT3V0cHV0KSA9PiB7XHJcbiAgLy8gY29uc29sZS5sb2cob3V0KVxyXG5cclxuICB0aHJvdyBuZXcgRXJyb3Iob3V0LnN0ZG91dClcclxufSlcclxuXHJcbmF3YWl0ICRgcG5wbSBzcGVsbGNoZWNrYC5jYXRjaCgob3V0OiBQcm9jZXNzT3V0cHV0KSA9PiB7XHJcbiAgLy8gY29uc29sZS5sb2cob3V0KVxyXG5cclxuICB0aHJvdyBuZXcgRXJyb3Iob3V0LnN0ZG91dClcclxufSlcclxuXHJcbi8vIGF3YWl0IFByb21pc2UuYWxsKFskYHBucG0gdHlwZS1jaGVja2AsICRgcG5wbSBsaW50YF0pLmNhdGNoKChvdXQ6IFByb2Nlc3NPdXRwdXQpID0+IHtcclxuLy8gICBwcmludE9iamVjdChvdXQpXHJcbi8vICAgdGhyb3cgbmV3IEVycm9yKG91dC5zdGRvdXQpXHJcbi8vIH0pXHJcblxyXG4vLyBjaGVjayB0eXBlIGFuZCBzdGFnZVxyXG4vLyBhd2FpdCBQcm9taXNlLmFsbChbJGBwbnBtIHR5cGUtY2hlY2tgLCAkYHBucG0gbGludDpzdGFnZWBdKS5jYXRjaCgob3V0OiBQcm9jZXNzT3V0cHV0KSA9PiB7XHJcbi8vICAgLy8gcHJpbnRPYmplY3Qob3V0KVxyXG4vLyAgIHRocm93IG5ldyBFcnJvcihvdXQuc3Rkb3V0KVxyXG4vLyB9KVxyXG4iLCAiIyEvdXNyL2Jpbi9lbnYgenhcclxuaW1wb3J0IHsgJCB9IGZyb20gJ3p4J1xyXG5cclxuY29uc29sZS5sb2coJ1x1NUYwMFx1NTlDQlx1NjI2N1x1ODg0Q1x1NEVFM1x1NzgwMVx1OEQyOFx1OTFDRlx1OEJDNFx1NEYzMC4uLlxcbicpXHJcblxyXG5hd2FpdCBpbXBvcnQoJy4vY2hlY2snKS5jYXRjaCgob3V0KSA9PiB7XHJcbiAgdGhyb3cgbmV3IEVycm9yKCdcdTRFRTNcdTc4MDFcdThEMjhcdTkxQ0ZcdThCQzRcdTRGMzBcdTU5MzFcdThEMjUsIFx1OEJGN1x1NjhDMFx1NjdFNVx1NEVFM1x1NzgwMScpXHJcbn0pXHJcblxyXG5jb25zb2xlLmxvZygncHJpbnRmIFwiXHU2OEMwXHU2RDRCXHU5MDFBXHU4RkM3LCBcdTUyMUJcdTVFRkEgY29tbWl0IFx1NEUyRC4uLlxcbicpXHJcblxyXG5hd2FpdCAkYGdpdCBhZGQgLmAiXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7OztBQUFBLFNBQVEsaUJBQWlCLHlCQUF3QjtBQUFqRCxJQUE4REE7QUFBOUQ7QUFBQTtBQUEwRCxJQUFJQSxXQUFRLGtCQUFrQiw0R0FBNEc7QUFBQTtBQUFBOzs7QUNBcE07QUFHQSxTQUFTLFNBQVM7QUFIbEI7QUFBQTtBQUFBO0FBTUEsVUFBTSxtQkFBbUIsTUFBTSxDQUFDLFFBQXVCO0FBR3JELFlBQU0sSUFBSSxNQUFNLElBQUksTUFBTTtBQUFBLElBQzVCLENBQUM7QUFFRCxVQUFNLG1CQUFtQixNQUFNLENBQUMsUUFBdUI7QUFHckQsWUFBTSxJQUFJLE1BQU0sSUFBSSxNQUFNO0FBQUEsSUFDNUIsQ0FBQztBQUFBO0FBQUE7OztBQ2hCRDtBQUNBLFNBQVMsS0FBQUMsVUFBUztBQUVsQixRQUFRLElBQUksbUVBQWlCO0FBRTdCLE1BQU0sdUNBQWtCLE1BQU0sQ0FBQyxRQUFRO0FBQ3JDLFFBQU0sSUFBSSxNQUFNLGtGQUFpQjtBQUNuQyxDQUFDO0FBRUQsUUFBUSxJQUFJLG1FQUFnQztBQUU1QyxNQUFNQTsiLAogICJuYW1lcyI6IFsicmVxdWlyZSIsICIkIl0KfQo=
