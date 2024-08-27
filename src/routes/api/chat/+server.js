import { json } from "@sveltejs/kit";
import OpenAI from "openai";

const openai = new OpenAI();

export async function POST({ request, cookies }) {
	const { message } = await request.json();
	//cookies.set("count", cookies.get("count") + 1, {path: "/"});
	//if(cookies.get("count") > 15){
	//	return json({error: "Bro, you sent to many messages too soon. AKA you exceeded the limit, please wait a day to continue."}, {status: 402});
	//}

	let thread = cookies.get("tid");
	console.log(thread);
	if(!thread){
		return json({error:"no thread"}, {status: 402});
	}
	
	// Create a ReadableStream to send data in chunks
	const stream = new ReadableStream({
		async start(controller) {
			try {
				const message = await openai.beta.threads.messages.create(
				  thread,
				  {
				    role: "user",
				    content: message
				  }
				);

				const openAIstream = openai.beta.threads.runs.stream(thread, {
				    assistant_id: "asst_ks3cIbxk3Z0WdVZgWefnsp4H"
				})
				
				for await (const data of openAIstream) {
				    	const textChunk = data.choices[0]?.delta?.content || "";
					controller.enqueue(textChunk);
				}
				controller.close();
			} catch (error) {
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
