<script>
	import Button from '$lib/components/ui/button/button.svelte';
	import { OTPInput, OTPRoot } from '@jimmyverburgt/svelte-input-otp';
	import Minus from 'lucide-svelte/icons/minus';
	import { enhance } from '$app/forms';
	import { goto } from '$app/navigation';

	let otpref;
	let form;

	// Set start value
	let value = '';

	function handleOtpComplete(otp) {
		form.requestSubmit();
		console.log('OTP Complete:', otp);
	}

	function handleOtpChange(event) {
		console.log('OTP changed:', value);
	}

</script>

<form
	method="POST"
	class="h-full w-full"
	bind:this={form}
	use:enhance={({ formElement, formData, action, cancel, submitter }) => {
		// `formElement` is this `<form>` element
		// `formData` is its `FormData` object that's about to be submitted
		// `action` is the URL to which the form is posted
		// calling `cancel()` will prevent the submission
		// `submitter` is the `HTMLElement` that caused the form to be submitted
		return async ({ result, update }) => {
			goto("/chat");
			// `result` is an `ActionResult` object
			// `update` is a function which triggers the default logic that would be triggered if this callback wasn't set
		};
	}}
>
	<div class="flex h-full w-full flex-col items-center justify-center gap-6">
		<h1 class="text-2xl">Enter patient code</h1>
		<OTPRoot
			bind:this={otpref}
			maxLength={6}
			on:change={handleOtpChange}
			bind:value
			autoFocus={true}
			onComplete={handleOtpComplete}
			className="flex items-center gap-2"
		>
			<div class="flex items-center">
				<OTPInput
					index={0}
					className="relative flex h-20 w-16 items-center justify-center border-y border-r border-input text-3xl transition-all first:rounded-l-md first:border-l last:rounded-r-md"
					focusClassName="z-10 ring-2 ring-ring ring-offset-background bluredback text-black"
				/>
				<OTPInput
					index={1}
					className="relative flex h-20 w-16 items-center justify-center border-y border-r border-input text-3xl transition-all first:rounded-l-md first:border-l last:rounded-r-md"
					focusClassName="z-10 ring-2 ring-ring ring-offset-background bluredback text-black"
				/>
				<OTPInput
					index={2}
					className="relative flex h-20 w-16 items-center justify-center border-y border-r border-input text-3xl transition-all first:rounded-l-md first:border-l last:rounded-r-md"
					focusClassName="z-10 ring-2 ring-ring ring-offset-background bluredback text-black"
				/>
			</div>
			<div class="mx-1">
				<Minus />
			</div>
			<div class="flex items-center">
				<OTPInput
					index={3}
					className="relative flex h-20 w-16 items-center justify-center border-y border-r border-input text-3xl transition-all first:rounded-l-md first:border-l last:rounded-r-md"
					focusClassName="z-10 ring-2 ring-ring ring-offset-background bluredback text-black"
				/>
				<OTPInput
					index={4}
					className="relative flex h-20 w-16 items-center justify-center border-y border-r border-input text-3xl transition-all first:rounded-l-md first:border-l last:rounded-r-md"
					focusClassName="z-10 ring-2 ring-ring ring-offset-background bluredback text-black"
				/>
				<OTPInput
					index={5}
					className="relative flex h-20 w-16 items-center justify-center border-y border-r border-input text-3xl transition-all first:rounded-l-md first:border-l last:rounded-r-md"
					focusClassName="z-10 ring-2 ring-ring ring-offset-background bluredback text-black"
				/>
			</div>
		</OTPRoot>
		<Button value="Submit" class="bluredback" type="submit">Enter</Button>
	</div>
</form>
