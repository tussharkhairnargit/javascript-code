"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
// TypeScript seamlessly resolves this relative file import
const list_1 = __importDefault(require("./routes/list"));
const app = (0, express_1.default)();
const port = Number(process.env.PORT ?? 3000);
app.use(express_1.default.json());
app.get('/health', (_req, res) => {
    res.status(200).json({ status: 'ok' });
});
app.use('/list', list_1.default);
//app.listen(3000, () => console.log('🚀 Server spinning up on port 3000'));
app.listen(port, '0.0.0.0', () => {
    console.log(`🚀 Server spinning up on port ${port}`);
});
