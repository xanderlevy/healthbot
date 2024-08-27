<script>
	import * as Card from '$lib/components/ui/card';
	import { Button } from '$lib/components/ui/button/index.js';
	import { enhance } from '$app/forms';
	import { toast } from 'svelte-sonner';
	import { Separator } from '$lib/components/ui/separator/index.js';
	import * as Avatar from '$lib/components/ui/avatar';

	import { source } from 'sveltekit-sse';

	import Cog from 'lucide-svelte/icons/cog';
	import { ClipboardPlus } from 'lucide-svelte';

	import Paperclip from 'lucide-svelte/icons/paperclip';
	import Mic from 'lucide-svelte/icons/mic';
	import CornerDownLeft from 'lucide-svelte/icons/corner-down-left';
	import * as Tooltip from '$lib/components/ui/tooltip';
	import { Textarea } from '$lib/components/ui/textarea/index.js';
	import { Label } from '$lib/components/ui/label/index.js';
	import { ScrollArea } from '$lib/components/ui/scroll-area/index.js';
	import { page } from '$app/stores';

	export let data;
	let value;
	let x;
	let messages = [];
</script>

<div class="flex w-full items-center justify-between">
	<p class="flex font-bold text-black"><ClipboardPlus /> Health Chat</p>
	<Button
		class="bluredback text-black"
		size="icon"
		on:click={() =>
			toast("I'm lazy, no settngs yet!", {
				unstyled: true,
				classes: {
					toast:
						'bluredback bg-transparent p-4 border text-black rounded-md w-full flex items-center gap-3',
					title: 'text-red-400',
					description: 'text-red-400',
					actionButton: 'bg-zinc-400',
					cancelButton: 'bg-orange-400',
					closeButton: 'bg-lime-400'
				}
			})}
	>
		<Cog />
	</Button>
</div>
<div class="flex h-full w-3/5 flex-col items-center justify-center gap-3">
	<div class="flex h-full w-full flex-col justify-center gap-3">
		<div class="flex h-full flex-col items-center justify-center rounded-md border">
			{#if messages.length !== 0}
				<ScrollArea class="h-full w-full p-4">
				{#each messages as msg}
					{#if msg.role === 'user'}
					<div class="flex w-full items-center justify-end">
						<div
							class="bluredback flex min-h-4 min-w-[40%] flex-col rounded-sm p-1 text-end text-black"
						>
							<p>{msg.text}</p>
							<p class="text-[12px] font-bold">Doctor</p>
						</div>
					</div>
					{:else}
					<div
						class="bluredback flex min-h-4 w-fit min-w-[40%] flex-col items-start gap-1 rounded-sm p-1 text-black"
					>
						<p>{msg.text}</p>
						<p class="text-[12px] font-bold">Patient</p>
					</div>
					{/if}
<Separator class="m-2" />
	{/each}
				</ScrollArea>
			{:else}
				<div class="flex flex-col items-start justify-center rounded-md p-4 text-black">
					<h1 class="text-7xl font-bold">Hello, Doctor</h1>
					<p class="text-3xl">You are connected to a patient.</p>
					<p class="text-xs text-gray-500">Type to start chating...</p>
				</div>
			{/if}
		</div>

		<form
			class="bluredback relative rounded-lg focus-within:ring-1 focus-within:ring-ring"
			method="POST"
			use:enhance={({ cancel }) => {
				messages = [...messages, {role: 'user', text: value}];
							
				if(value.length >= 500){
					toast("Too big of a message! I ain't fucking rich!", {
				unstyled: true,
				classes: {
					toast:
						'bluredback bg-transparent p-4 border text-black rounded-md w-full flex items-center gap-3',
					title: 'text-red-400',
					description: 'text-red-400',
					actionButton: 'bg-zinc-400',
					cancelButton: 'bg-orange-400',
					closeButton: 'bg-lime-400'
				}
			})
				}
				// Send the request using the Fetch API
				fetch('/api/chat', {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json'
					},
					body: JSON.stringify({ message: value })
				})
					.then((response) => {
						if (!response.ok) {
							throw new Error('Network response was not ok');
						}

						// Access the response body as a stream
						const reader = response.body.getReader();
						const decoder = new TextDecoder('utf-8');
						let data = '';

						// Read the stream
						reader.read().then(function processText({ done, value }) {
							if (done) {
								messages = [...messages, {role:"bot", text: data}];
								console.log('Stream complete');
								return;
							}

							// Decode the value and add it to our data
							data += decoder.decode(value, { stream: true });

							// Optionally, handle the data (e.g., update messages)
							// messages = [...messages, data];

							// Continue reading the stream
							return reader.read().then(processText);
						});
					})
					.catch((error) => {
						alert('There was a problem with the fetch operation:', error);
					});

				value = '';
				cancel();
			}}
		>
			<Label for="message" class="sr-only">Message</Label>
			<Textarea
				id="message"
				name="message"
				bind:value
				placeholder="Type your message here..."
				class="min-h-12 resize-none border-0 bg-transparent p-3 text-black placeholder:text-black focus-visible:ring-0"
			/>
			<div class="flex items-center p-3 pt-0">
				<Button type="submit" size="sm" class="ml-auto gap-1.5 border bg-transparent">
					Send Message
					<CornerDownLeft class="size-3.5" />
				</Button>
			</div>
		</form>
	</div>
</div>
