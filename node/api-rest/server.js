import app from './app';

const port = 3001;

app.listen(port, () => {
	console.log(`escutando na porta ${port}`)
	console.log(`crtl + clique em http://localhost:${port}`)
});
