export const actions = {
	default: async (event) => {
		const data = await event.request.formData();
		if(data.get("otp") === '212212'){
			event.cookies.set("code", '212212', {path: '/'});
		}
		return "pong";
	}
};
