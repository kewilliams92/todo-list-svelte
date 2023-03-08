<script>
	import tippy from './lib/actions/tippy'

	let content = "hello"
</script>

<h1>Using Tippy.js</h1>

<input bind:value={content} />

<button use:tippy={{ content, placement: "right", theme: "light" }}>Hover me</button>

<style>

</style>