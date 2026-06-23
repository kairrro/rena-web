<script>
  import { page } from '$app/state';
  import { meta } from '$lib/data/site.js';
</script>

<svelte:head>
  <title>{page.status} — {meta.name}</title>
</svelte:head>

<section class="min-h-[70vh] flex items-center justify-center px-6 py-28">
  <div class="max-w-md mx-auto text-center">

    <p class="text-sm font-medium mb-3" style="color: var(--c-accent)">
      Error {page.status}
    </p>

    <h1 class="text-3xl sm:text-4xl font-bold mb-4 tracking-tight" style="color: var(--c-text)">
      {page.status === 404 ? 'Page not found' : 'Something went wrong'}
    </h1>

    <p class="text-base mb-8" style="color: var(--c-muted)">
      {page.status === 404
        ? "The page you're looking for doesn't exist or may have moved."
        : (page.error?.message || 'An unexpected error occurred. Please try again.')}
    </p>

    <a
      href="/"
      class="inline-flex items-center justify-center px-7 py-3 rounded-[var(--r-btn)] text-sm text-white transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg"
      style="background: var(--c-accent)"
    >
      Back to home
    </a>

  </div>
</section>