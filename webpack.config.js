import { fileURLToPath } from 'url';
import { dirname, resolve,  join} from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default {
    entry: "./src/index.js",
    output:{
        path: resolve(__dirname, 'dist'),
        filename: 'main.js'
        
    },
}