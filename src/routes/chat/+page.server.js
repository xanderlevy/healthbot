import CryptoJS from 'crypto-js';
import OpenAI from "openai";
const openai = new OpenAI();

/** @type {import('./$types').PageLoad} */
export async function load({ cookies }) {
	// let tid = cookies.get('tid');
	// if (!tid) {
	//	// new thread plz
		cookies.set('tid', await openai.beta.threads.create(), { path: "/" });
	//}

	return { tid };
}


/** @type {import('./$types').Actions} */
export const actions = {
	default: async (event) => {
		const data = await event.request.formData();

		// let tid = event.cookies.get("tid");
		// tid = CryptoJS.AES.decrypt(tid, "6969").toString(CryptoJS.enc.Utf8);
	
		// appendmsgtothread
		// biggest issue: admin assitant editor

		return {
			message: data.get("message")
		}
	}
};

