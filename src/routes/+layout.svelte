<script>
	import './styles.css';
</script>

<div class="app">
	<div class="main">
		<slot />
	</div>
</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
		align-items: center;
		justify-content: center;
	}

	.main{
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		width: 100%;
		height: 100vh;
	}
</style>