/** @type {import('@sveltejs/kit').Handle} */
export async function handle({ event, resolve }) {
	let code = event.cookies.get("code");
	if (event.url.pathname.startsWith('/chat') && (code !== '212212')) {
		return new Response('You need to login with a patient code!');
	}
	if (event.url.pathname.startsWith('/dashboard')) {
		return new Response('You need to login at /admin');
	}
	const response = await resolve(event);
	return response;
}
