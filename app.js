const fs = require('fs');
const Koa = require('koa');
const Router = require('koa-router');
const router = new Router();

const app = new Koa();

router.get('/', (ctx, next) => {
	const data = fs.readFileSync('./index.html');
	console.log(data.toString('utf-8'))
	ctx.response.type = 'text/html';
	ctx.response.body = data;
});

router.get('/api/list', (ctx, next) => {

});

app.use(router.routes()).use(router.allowedMethods());
app.listen(8081);
console.log('server is running on 8081');