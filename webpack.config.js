import path from 'path';
import { fileURLToPath } from 'url';
import HtmlWebpackPlugin from "html-webpack-plugin";
import { plugin } from 'postcss';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
    mode: "development",
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js'
    },
    module: {
        rules: [
            {
                test: /\.[jt]sx?$/,
                exclude: /node_modules/,
                use: 'ts-loader',
            },
            {
                test: /\.css$/i,
                use: [
                    "style-loader",
                    "css-loader",
                    "postcss-loader"
                ]
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({template: path.resolve(__dirname, "Мой сайт.html")})
    ],
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
    },
      devServer: {
        // Порт
        port: 3000,
        // Чтобы при изменении кода, страница автоматически обновлялась
        hot: true,
        // При запуске dev server автоматически открывается браузер
        open: true,
        // Пригодится позже для маршрутизации
        historyApiFallback: true,
    },
}