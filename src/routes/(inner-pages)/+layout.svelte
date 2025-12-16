<script>
	let { children } = $props();
</script>

<div id="navheader">
	<nav>
		<a href="/">Home</a>
		<a href="/category/about">About</a>
		<a href="/category/settings">Settings</a>
		<a href="/iphone-ipad-reperation">Reparation</a>
	</nav>
</div>

{@render children()}

<style>
	#navheader {
		display: flex;
		justify-content: center;
		align-items: center;
		background-color: black;
		border-top: 1px solid #333;
	}
	nav {
		display: flex;
	}

	a {
		display: inline-block;
		padding: 0.5rem 1rem;
		text-decoration: none;
		color: lightgray;
		font-weight: bold;
	}

	a:hover {
		background-color: #333;
	}
</style>
