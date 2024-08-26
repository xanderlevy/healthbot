<script>
	import Button from '$lib/components/ui/button/button.svelte';
	import { OTPInput, OTPRoot } from '@jimmyverburgt/svelte-input-otp';
	import Minus from 'lucide-svelte/icons/minus';

	let otpref;

	// Set start value
	let value = '';

	function handleOtpComplete(otp) {
		console.log('OTP Complete:', otp);
		// Reset value
		value = '';
	}

	function handleOtpChange(event) {
		console.log('OTP changed:', value);
	}
</script>

<div class="flex h-full w-full flex-col items-center justify-center gap-6">
	<h1 class="text-2xl">Enter Admin code</h1>
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
				focusClassName="z-10 ring-2 ring-ring ring-offset-background bg-white text-black"
			/>
			<OTPInput
				index={1}
				className="relative flex h-20 w-16 items-center justify-center border-y border-r border-input text-3xl transition-all first:rounded-l-md first:border-l last:rounded-r-md"
				focusClassName="z-10 ring-2 ring-ring ring-offset-background bg-white text-black"
			/>
			<OTPInput
				index={2}
				className="relative flex h-20 w-16 items-center justify-center border-y border-r border-input text-3xl transition-all first:rounded-l-md first:border-l last:rounded-r-md"
				focusClassName="z-10 ring-2 ring-ring ring-offset-background bg-white text-black"
			/>
		</div>
		<div class="mx-1">
			<Minus />
		</div>
		<div class="flex items-center">
			<OTPInput
				index={3}
				className="relative flex h-20 w-16 items-center justify-center border-y border-r border-input text-3xl transition-all first:rounded-l-md first:border-l last:rounded-r-md"
				focusClassName="z-10 ring-2 ring-ring ring-offset-background bg-white text-black"
			/>
			<OTPInput
				index={4}
				className="relative flex h-20 w-16 items-center justify-center border-y border-r border-input text-3xl transition-all first:rounded-l-md first:border-l last:rounded-r-md"
				focusClassName="z-10 ring-2 ring-ring ring-offset-background bg-white text-black"
			/>
			<OTPInput
				index={5}
				className="relative flex h-20 w-16 items-center justify-center border-y border-r border-input text-3xl transition-all first:rounded-l-md first:border-l last:rounded-r-md"
				focusClassName="z-10 ring-2 ring-ring ring-offset-background bg-white text-black"
			/>
		</div>
	</OTPRoot>
	<Button>Enter</Button>
</div>
