<script>
	export let size = 'small';
	export let shadow = false;
	export let bgColor = 'inherit';
	export let textColor = 'inherit';

	let isLeftHovered;
</script>

<button
	on:click
	style:--buttonBgColor="{bgColor};"
	style:--buttonTextColor="{textColor};"
	class:size-lg={size === 'large'}
	class:size-sm={size === 'small'}
	class:shadow
	class:has-left={$$slots.leftContent}
    {...$$restProps}
>
	{#if $$slots.leftContent}
		<div
			class="left-content"
			on:mouseenter={() => (isLeftHovered = true)}
			on:mouseleave={() => (isLeftHovered = false)}
		>
			<slot name="leftContent" />
		</div>
	{/if}
	<slot {isLeftHovered}>Fallback</slot>
</button>

<style lang="scss">
	button {
		display: flex;
		align-items: center;
		border: none;
		background-color: var(--buttonBgColor);
		color: var(--buttonTextColor);
		padding: 15px 20px;
		font-weight: bold;
		border-radius: 5px;
		cursor: pointer;
		.left-content {
			margin-right: 10px;
		}
        &:disabled {
            cursor: not-allowed;
        }
		&:hover {
			background-image: linear-gradient(rgba(1, 1, 1, 0.1), rgba(1, 1, 1, 0.1));
		}
		&:active {
			background-image: linear-gradient(rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.1));
		}
		&.size-sm {
			padding: 15px 20px;
		}
		&.size-lg {
			padding: 20px 25px;
			font-size: 20px;
		}
		&.shadow {
			box-shadow: 0 0 10px rgba(1, 1, 1, 1.5);
		}
	}
</style>
