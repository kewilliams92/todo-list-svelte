<script>
    import settings from "./stores/settings";
</script>

<svelte:head>
	<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&family=Titillium+Web:ital,wght@0,200;0,300;0,400;0,600;0,700;0,900;1,200;1,300;1,400;1,600;1,700&display=swap" rel="stylesheet">
{#if $settings.colorScheme === 'dark'}
<style>
	:root {
		--backgroundColor: #1d1d1d;
	--textColor: #fff;
	}
</style>
{:else}
<style>
	:root {
		--backgroundColor: #ffffff;
	--textColor: #000000;
	}
</style>
{/if}
</svelte:head>