<script>
  import { meta, nav } from '$lib/data/site.js';
  const year = new Date().getFullYear();
</script>

<footer class="py-8 px-6" style="border-top: 1px solid var(--c-border)">
  <div class="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
    <nav aria-label="Footer navigation">
      <ul class="flex flex-wrap gap-6 list-none">
        {#each nav as item}
          <li>
            <a
              href={item.href}
              class="text-sm transition-opacity hover:opacity-60"
              style="color: var(--c-text)"
            >
              {item.label}
            </a>
          </li>
        {/each}
      </ul>
    </nav>

    <p class="text-sm" style="color: var(--c-muted)">{year} {meta.name}. All rights reserved.</p>
  </div>
</footer>