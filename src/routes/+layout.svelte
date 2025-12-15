<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
	import wecoveryou from '$lib/assets/wecoveryou.png';

	let { children } = $props();

	function imageHome() {
		return '/';
	}
</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>
<div id="header">
	<a id="logo" href="/">
		<img alt="The project logo" src={wecoveryou} />
	</a>
	<nav>
		<a href="/">Home</a>
		<a href="/about">About</a>
		<a href="/settings">Settings</a>
	</nav>
	<input id="search" type="text" placeholder="Hvad Søger du?" class="border-gray ml-auto rounded-md border p-2" />
</div>

{@render children()}

<style lang="postcss">
	@reference "tailwindcss";

	:global(body) {
		margin: 0;
		padding: 0;
		font-family: Rubik;
		font-style: normal;
		background-color: #f0f0f0;
	}

	#header {
		display: flex;
		align-items: center;
		flex-direction: row;
		background-color: black;
		padding: 10px 40px;
	}

	nav {
		display: flex;
		gap: 1rem;
		margin-left: 1rem;
		color: white;
	}

	#search {
		width: 25%;
		background-color: darkgray;
		color: white;
		padding-left: 2em;
	}

	#search::placeholder {
		color: white;
		font-size: 14px;
	}

	#logo {
		width: 150px;
	}
</style>
