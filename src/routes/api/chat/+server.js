import { json } from "@sveltejs/kit";
import OpenAI from "openai";

const openai = new OpenAI();

export async function POST({ request, cookies }) {
	const { message } = await request.json();
	//cookies.set("count", cookies.get("count") + 1, {path: "/"});
	//if(cookies.get("count") > 15){
	//	return json({error: "Bro, you sent to many messages too soon. AKA you exceeded the limit, please wait a day to continue."}, {status: 402});
	//}
	//plz work

	let thread = cookies.get("tid");
	console.log(thread);
	if(!thread){
		return json({error:"no thread"}, {status: 402});
	}
	
	// Create a ReadableStream to send data in chunks
	const stream = new ReadableStream({
		async start(controller) {
			try {
				const openAImessage = await openai.beta.threads.messages.create(
				  thread,
				  {
				    role: "user",
				    content: message
				  }
				);
				console.log(openAImessage);

				const openAIstream = openai.beta.threads.runs.stream(thread, {
				    assistant_id: "asst_ks3cIbxk3ZOWdVZgWefnsp4H"
				})

								console.log(openAIstream);
				
				for await (const data of openAIstream) {
					if(textChunk["object"] === "thread.message.delta"){
					    	const textChunk = data["delta"]["content"]["text"]["value"];
						console.log(textChunk);
						controller.enqueue(textChunk);
					}
				}
				console.log("BRO");
				controller.close();
			} catch (error) {
				console.error(error);
				controller.error(error);
			}
		},
	});

	return new Response(stream, {
		headers: {
			'Content-Type': 'text/plain',
			'Cache-Control': 'no-cache',
			'Connection': 'keep-alive',
		},
	});
}
