<script lang="ts">
  import favicon from '$lib/assets/favicon.svg';
  import '../styles/main.css';

  let { children } = $props();
</script>

<svelte:head>
  <link rel="icon" href={favicon} />
  <title>Blog with Svelte</title>
</svelte:head>

{@render children?.()}

<style lang="postcss">
  @reference "tailwindcss";
</style>