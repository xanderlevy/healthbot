import { json } from "@sveltejs/kit";
import OpenAI from "openai";

const openai = new OpenAI();

export async function POST({ request, cookies }) {
	const { message } = await request.json();
	cookies.set("count", cookies.get("count") + 1, {path: "/"});
	if(cookies.get("count") > 15){
		return json({error: "Bro, you sent to many messages too soon. AKA you exceeded the limit, please wait a day to continue."}, {status: 402});
	}
	// Create a ReadableStream to send data in chunks
	const stream = new ReadableStream({
		async start(controller) {
			try {
				const openAIStream = await openai.chat.completions.create({
					model: "gpt-4o-mini", // Replace with your desired model
					messages: [{ role: "user", content: message }],
					stream: true,
				});

				// Stream the OpenAI response to the client
				for await (const chunk of openAIStream) {
					const textChunk = chunk.choices[0]?.delta?.content || "";
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
