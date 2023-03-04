<script>
  export let initialCount;
  export let maxCount = undefined;

  console.log($$props, $$restProps);

  let count = initialCount;

  // $: if(count > 5){ // $: is a Svelte keyword that means "reactive statement".  It means that the code inside the block will be executed whenever the variables it references change.
  //   console.log(`the count is ${count}`);
  // }
  function increment1() {
    if(count === maxCount) return;{
      count += 1;
    }
  }
</script>

<button on:click={increment1}>
  Clicks {count}
</button>

<style>
  button {
    font-size: 1.5em;
    padding: 0.5em 1em;
    border: 1px solid #ccc;
    border-radius: 0.25em;
    background: #fff;
    cursor: pointer;
  }
</style>