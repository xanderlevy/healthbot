<script>

</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="XANDER LEVY" />
</svelte:head>

<div class="card mainshit">
	<div class="container">
		<div style="display: flex; flex-direction: column; justify-content:start; width: 100%">
			<h1>
				XANDER LEVY
			</h1>
			<p>
			Art portfolio
			</p>
		</div>
		<div style="margin-top: 25px; width: 100%">
			<h3 style="width: 100%; text-align: start; margin: 0px; ">Genreal Statement</h3>
			<p>my art sucks, but that dosen't matter. commonly, people value art by the skill level taked to craft it, which is admerbiale, but it shouldn't be used to assign value to the art. people like to judge modern art, they say it isn't art. thats what intrests me; what can we call art, how do we define it? if it's not skill, or artist vision, what is it?</p>
		</div>
	</div>
	<div class="projects">
	<p>project 1</p>
	<p>project 2</p>
	<p>project 3</p>
	</div>
</div>
<style>
.projects{
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 20px;
}
.projects p{
	border-radius: 2px;
	padding: 5px;
	cursor: pointer;
	text-decoration: underline;
}
	.container{
		width: 100%; height:100%;
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 20px;
		flex-direction: row;
	}

		.mainshit{
		width: 80%; height:80%;
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 20px;
		flex-direction: column;
	}

	h1, p{
		padding: 0px;
		margin: 0px;
	}
</style>
