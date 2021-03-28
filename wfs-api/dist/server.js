"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const body_parser_1 = __importDefault(require("body-parser"));
const app = express_1.default();
const port = 3080;
app.use(body_parser_1.default.json());
app.use(express_1.default.static(path_1.default.join(__dirname, '../wfs-ui/build')));
app.get('/hello', (req, res) => {
    console.log('Hello World!!!!');
    res.json('Hello World!!!!');
});
// start the express server
app.listen(port, () => {
    // tslint:disable-next-line:no-console
    console.log(`server started at http://localhost:${port}`);
});
//# sourceMappingURL=server.js.map