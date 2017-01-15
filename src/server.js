import express  from 'express';
import React    from 'react';
import path from 'path';
import ReactDom from 'react-dom/server';
import {match, RouterContext} from 'react-router';
import {Provider} from 'react-redux';
import routes from './routes';
import configureStore from './store/configureStore';

const app = express();
const router = express.Router();

app.use(express.static(path.join(__dirname, 'public')));

app.get('*',(req, res) => {
    const store = configureStore();

    match({routes, location: req.url}, (error, redirectLocation, renderProps) => {
        if (redirectLocation) { // Если необходимо сделать redirect
            return res.redirect(301, redirectLocation.pathname + redirectLocation.search);
        }

        if (error) { // Произошла ошибка любого рода
            return res.status(500).send(error.message);
        }

        if (!renderProps) { // Мы не определили путь, который бы подошел для URL
            console.log(req.url)
            return res.status(404).send('Not found');
        }

        const componentHTML = ReactDom.renderToString(
            <Provider store={store}>
                <RouterContext {...renderProps} />
            </Provider>
        );
        console.log(__dirname)
        return res.end(renderHTML(componentHTML));
    });
});

// router.get('/search', (req, res) => {
//     match({routes, location: req.url}, (error, redirectLocation, renderProps) => {
//         if (error) {
//             res.status(500).send(error.message);
//         } else if (redirectLocation) {
//             res.redirect(302, redirectLocation.pathname + redirectLocation.search);
//         } else if (renderProps) {
//             const content = ReactDom.renderToString(
//                 <RouterContext {...renderProps} />
//             );
//             res.render('index', {title: 'Express', data: false, content});
//         } else {
//             res.status(404).send('Not Found');
//         }
//     });
// });

const assetUrl = process.env.NODE_ENV !== 'production' ? 'http://localhost:8050/' : '/';

function renderHTML(componentHTML) {
    console.log(assetUrl, process.env.NODE_ENV)
    return `
    <!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Cinema</title>
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/5.0.0/normalize.min.css">
	<style>
		body {
			border-top: 4px solid black;
			font-family: 'Helvetica', Arial, sans-serif;
		}

		input {
			border: 1px solid #2e2e2e;
			padding-left: 15px;
			box-sizing: border-box;
			border-radius: 3px;
			outline: none;
			width: 230px;
			height: 40px;
		}

		button {
			display: block;
			padding: 10px 30px;
			color: #FFFFFF;
			background-color: #334164;
			border-radius: 3px;
			border: none;
			text-align: center;
			cursor: pointer;
		}

	</style>
</head>
<body>
<div id="container">${componentHTML}</div>
<script src="/public/bundle.js"></script>
</body>
</html>
  `;
}

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
    console.log(`Server listening on: ${PORT}`);
});