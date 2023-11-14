import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	resolve: {
		// 配置路径别名
		alias: {
			'@': path.resolve(__dirname, './src'),
		},
	},
	css: {
		preprocessorOptions: {
			less: {
				javascriptEnabled: true,
			},
		},
	},
	server: {
		host: 'localhost', // 指定服务器主机名
		port: 5173, // 指定服务器端口
		open: true, // 在服务器启动时自动在浏览器中打开应用程序
		strictPort: false, // 设为 false 时，若端口已被占用则会尝试下一个可用端口,而不是直接退出
		https: false, // 是否开启 https
		cors: true, // 为开发服务器配置 CORS。默认启用并允许任何源
		proxy: {
			// 为开发服务器配置自定义代理规则
			// 字符串简写写法
			'/api': 'http://localhost:3001',
			// 选项写法
			// '/api': {
			// 	target: 'http://localhost:3001', //代理接口
			// 	changeOrigin: true,
			// 	rewrite: (path) => path.replace(/^\/api/, ''),
			// },
		},
	},
});
