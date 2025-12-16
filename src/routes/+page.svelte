<script>
	import iphonecover from '$lib/assets/iphonecover.jpg';
	import top_ipads_tablets from '$lib/assets/top_ipads_tablets.jpg';
</script>

<br /><br />
<div id="container">
	<div id="menuContainer">
		<div id="navMenu">
			<nav id="storeNav">
				<a href="/category/about">About</a>
				<a href="/category/settings">Settings</a>
			</nav>
			<nav id="productNav">
				<a href="/iphone-ipad-reperation">Reperation</a>
				<a href="/telefon-salg">Sælg din telefon</a>
			</nav>
		</div>
		<div id="mainContent">
			<div>
				<a id="main" href="/category/settings">
					<img alt="mainAd" src={iphonecover} />
				</a>
			</div>
			<div id="subContent">
				<div>
					<a id="sub1" href="/category/settings">
						<img alt="subAd1" src={top_ipads_tablets} />
					</a>
				</div>
				<div>
					<a id="sub2" href="/category/settings">
						<img alt="subAd2" src={top_ipads_tablets} />
					</a>
				</div>
			</div>
		</div>
	</div>
</div>

<style>
	#container {
		display: flex;
		margin-top: 20px;
		justify-content: center;
	}

	#menuContainer {
		display: flex;
		flex-direction: row;
		max-width: 1280px;
	}

	#subContent {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		gap: 20px;
		margin-top: 20px;
	}

	#navMenu {
		align-self: center;
		justify-content: center;
		width: 400px;
		height: fit-content;
		box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
		background-color: #ffffff;
		border-top-left-radius: 5px;
		border-top-right-radius: 5px;
	}

	#storeNav,
	#productNav {
		display: flex;
		flex-direction: column;
	}

	#storeNav a {
		text-align: left;
		padding: 14px 16px;
		text-decoration: none;
		font-weight: 600;
		font-size: 17px;
	}

	#storeNav a:hover {
		background-color: #d3d9e0;
		color: black;
		transition: background-color 0.7s ease;
	}

	#storeNav a:nth-child(1) {
		border-top-left-radius: 5px;
		border-top-right-radius: 5px;
	}

	#productNav a {
		text-align: left;
		padding: 14px 16px;
		text-decoration: none;
		font-weight: 600;
		font-size: 17px;
		background-color: rgb(31, 31, 31);
		color: #fff;
	}

	#productNav a:hover {
		background-color: #4e4e4e;
		transition: background-color 0.7s ease;
	}

	#mainContent {
		height: 50%;
		width: 70%;
		padding: 20px;
	}
</style>
