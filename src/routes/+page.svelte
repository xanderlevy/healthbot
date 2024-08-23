<script>
	import * as Card from '$lib/components/ui/card';
	import { Button } from '$lib/components/ui/button/index.js';
	import { enhance } from '$app/forms';

	import Cog from 'lucide-svelte/icons/cog';

	import Paperclip from 'lucide-svelte/icons/paperclip';
	import Mic from 'lucide-svelte/icons/mic';
	import CornerDownLeft from 'lucide-svelte/icons/corner-down-left';
	import * as Tooltip from '$lib/components/ui/tooltip';
	import { Textarea } from '$lib/components/ui/textarea/index.js';
	import { Label } from '$lib/components/ui/label/index.js';
	import { ScrollArea } from '$lib/components/ui/scroll-area/index.js';

	let messages = [];
</script>

<div class="flex h-full w-full flex-col items-center justify-center gap-3">
	<div class="flex w-full items-center justify-end">
		<Button variant="outline" size="icon">
			<Cog />
		</Button>
	</div>
	<div class="flex h-full w-full flex-col justify-center gap-3">
		<div>
			<Card.Root>
				<Card.Header>
					<Card.Title>Task</Card.Title>
					<Card.Description>What you should do?</Card.Description>
				</Card.Header>
				<Card.Content>
					<p>
						Ask questions about the patient and attempt to discover the underlying issue (Diagnose
						them)
					</p>
				</Card.Content>
			</Card.Root>
		</div>

		<div class="h-full">
			<ScrollArea class="h-full w-full rounded-md border p-4">
				{#if messages.length !== 0}
					<div class="mb-4 min-h-8 min-w-8 rounded-lg p-2 text-black dark:bg-white">
						<p>Hello</p>
					</div>
					<div class="mb-4 min-h-8 min-w-8 rounded-lg p-2 text-black dark:bg-blue-400">
						<p>Hi</p>
					</div>
				{:else}
					<div class="flex h-full w-full items-center justify-center">
						<p>Type a message to get started!</p>
					</div>
				{/if}
			</ScrollArea>
		</div>

		<form
			class="relative rounded-lg border bg-background focus-within:ring-1 focus-within:ring-ring"
			method="POST"
			use:enhance={({ formElement, formData, action, submitter }) => {
				return async ({ result, update }) => {
					messages = [...messages, result.data.message];
					update(true);
				};
			}}
		>
			<Label for="message" class="sr-only">Message</Label>
			<Textarea
				id="message"
				name="message"
				placeholder="Type your message here..."
				class="min-h-12 resize-none border-0 p-3 shadow-none focus-visible:ring-0"
			/>
			<div class="flex items-center p-3 pt-0">
				<Button type="submit" size="sm" class="ml-auto gap-1.5">
					Send Message
					<CornerDownLeft class="size-3.5" />
				</Button>
			</div>
		</form>
	</div>
</div>
