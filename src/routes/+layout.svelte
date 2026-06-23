<script>
  import '../app.css';
  import { meta } from '$lib/data/site.js';
  const { children } = $props();
</script>

<svelte:head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta name="description" content={meta.description} />
  <meta property="og:title"       content="{meta.name} — {meta.tagline}" />
  <meta property="og:description" content={meta.description} />
  <meta property="og:type"        content="website" />
  <meta property="og:url"         content={meta.url} />
  <meta name="twitter:card"       content="summary_large_image" />
  <meta name="twitter:title"      content="{meta.name} — {meta.tagline}" />
  <meta name="twitter:description" content={meta.description} />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
</svelte:head>

{@render children()}
