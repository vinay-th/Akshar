import { Buffer } from 'buffer';

window.global = window;
window.process = { env: { NODE_ENV: 'production' } };
window.Buffer = Buffer;
