<script>
  import { nav, meta, hero } from '$lib/data/site.js';

  let scrolled = $state(false);
  let mobileOpen = $state(false);

  $effect(() => {
    const onScroll = () => scrolled = window.scrollY > 20;
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  });
</script>

<header
  class="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
  class:bg-white={scrolled}
  class:shadow-sm={scrolled}
  style="border-bottom: {scrolled ? '1px solid var(--c-border)' : 'none'}"
>
  <nav
    class="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between"
    aria-label="Main navigation"
  >
    <a href="/" class="font-semibold text-lg tracking-tight" style="color: var(--c-text)">
      {meta.name}
    </a>

    <ul class="hidden md:flex items-center gap-8 list-none">
      {#each nav as item}
        <li>
          <a
            href={item.href}
            class="text-sm transition-colors hover:opacity-60"
            style="color: var(--c-muted)"
          >
            {item.label}
          </a>
        </li>
      {/each}
    </ul>

    <a
      href="#pricing"
      class="hidden md:inline-flex items-center px-4 py-2 text-sm rounded-[var(--r-btn)] text-white transition-opacity hover:opacity-80"
      style="background: var(--c-accent)"
    >
      {hero.cta.label}
    </a>

    <button
      class="md:hidden p-2 rounded-lg"
      onclick={() => mobileOpen = !mobileOpen}
      aria-label="Toggle menu"
      aria-expanded={mobileOpen}
    >
      <span class="block w-5 h-0.5 mb-1 transition-all" style="background: var(--c-text); transform: {mobileOpen ? 'rotate(45deg) translateY(6px)' : 'none'}"></span>
      <span class="block w-5 h-0.5 mb-1 transition-all" style="background: var(--c-text); opacity: {mobileOpen ? 0 : 1}"></span>
      <span class="block w-5 h-0.5 transition-all" style="background: var(--c-text); transform: {mobileOpen ? 'rotate(-45deg) translateY(-6px)' : 'none'}"></span>
    </button>
  </nav>

  {#if mobileOpen}
    <div class="md:hidden px-6 pb-6 border-t" style="background: var(--c-bg); border-color: var(--c-border)">
      <ul class="flex flex-col gap-4 pt-4 list-none">
        {#each nav as item}
          <li>
            <a
              href={item.href}
              class="text-sm"
              style="color: var(--c-muted)"
              onclick={() => mobileOpen = false}
            >
              {item.label}
            </a>
          </li>
        {/each}
        <li>
          <a
            href="#pricing"
            class="inline-flex items-center px-4 py-2 text-sm rounded-[var(--r-btn)] text-white"
            style="background: var(--c-accent)"
            onclick={() => mobileOpen = false}
          >
            {hero.cta.label}
          </a>
        </li>
      </ul>
    </div>
  {/if}
</header>
