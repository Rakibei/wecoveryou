<script lang="ts">
	import { goto } from '$app/navigation';
	import '@fortawesome/fontawesome-free/css/all.min.css';
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
	import wecoveryou from '$lib/assets/wecoveryou.png';

	let query = $state('');

	function onSearch(e: KeyboardEvent) {
		if (e.key === 'Enter' && query.trim()) {
			goto(`/search?q=${encodeURIComponent(query)}`);
		}
	}
	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<div id="header">
	<a id="logo" href="/">
		<img alt="The project logo" src={wecoveryou} />
	</a>

	<input
		id="search"
		type="text"
		bind:value={query}
		onkeydown={onSearch}
		placeholder="Hvad Søger du?"
		class="border-gray ml-auto rounded-md border p-2"
	/>

	<a title="Cart" id="cart" href="/">
		<i class="fa-solid fa-cart-shopping"></i>
		<span>Beløb: 0,00 DKK</span>
	</a>
	<a title="User" id="user" href="/">
		<i class="fa-solid fa-user"></i>
		<span>Login</span>
	</a>
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
		justify-self: space-between;
		flex-direction: row;
		background-color: black;
		padding: 10px 40px;
	}

	#search {
		width: 35%;
		padding-left: 2em;
		margin: auto;
	}

	#search::placeholder {
		font-size: 14px;
	}

	#logo {
		width: 200px;
	}

	#cart,
	#user {
		margin-left: 20px;
		color: white;
	}
</style>
