<script lang="ts">
	import { enhance } from '$app/forms';
	export let form;
</script>

<div class="login-page">
	<div class="login-container">
		<div class="login-content">
			<div>
				<div class="login-header">
					<h1>Denne side kræver brugerlogin</h1>
				</div>
				<div class="login-subheader">
					<h1>Indtast venligst brugerinformationer herunder</h1>
				</div>
			</div>
			<div class="login-form">
				<form method="POST" action="?/login" use:enhance>
					<label for="username">Brugernavn</label>
					<input type="text" id="username" name="username" required />
					<label for="password">Kodeord</label>
					<input type="password" id="password" name="password" required />
					<span id="login-options">
						<span id="login-checkbox">
							<input type="checkbox" id="remember" name="remember" value="on"/>
							<label for="remember">Husk Login</label>
						</span>
						<a href="/forgot-password">Glemt Kodeord?</a>
					</span>
					{#if form?.error}
						<p class="login-error">{form.error}</p>
					{/if}
					<button type="submit">Login</button>
				</form>
			</div>
		</div>
	</div>
</div>

<style>
	.login-page {
		margin-top: 20px;
	}

	.login-container {
		display: flex;
		flex-direction: column;
		align-items: start;
		justify-content: center;
		margin: 50px 400px 70px 400px;
		background: white;
		padding: 20px 30px 20px 30px;
		border-radius: 3px;
	}

	.login-content {
		display: flex;
		flex-direction: column;
		align-self: start;
	}

	.login-header {
		font-weight: bold;
		margin-bottom: 20px;
		font-size: 14px;
	}

	.login-subheader {
		font-weight: normal;
		margin-bottom: 20px;
		font-size: 14px;
	}

	.login-form form {
		display: flex;
		flex-direction: column;
	}

	.login-form input {
		margin-bottom: 15px;
		border: 1px solid #ccc;
		padding: 0px;
		border-radius: 4px;
	}

	.login-form label {
		font-size: 14px;
	}

	#login-options {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	#login-checkbox {
		display: flex;
		justify-content: start;
		gap: 10px;
	}

	#login-options a {
		font-size: 12px;
		text-decoration: none;
		color: #007bff;
		justify-self: end;
	}

	.login-form button {
		width: 25%;
		padding: 2px;
		background-color: #007bff;
		color: white;
		border: none;
		border-radius: 4px;
		cursor: pointer;
	}

	.login-form button:hover {
		background-color: #0056b3;
	}

	.login-error {
		color: red;
		font-size: 14px;
		margin-bottom: 5px;
	}
</style>
