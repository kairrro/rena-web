<script>
  import { portfolio } from '$lib/data/site.js';
  import { onMount } from 'svelte';

  let el = $state(null);

  onMount(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach(e => e.target.classList.toggle('visible', e.isIntersecting)),
      { threshold: 0.12 }
    );
    el.querySelectorAll('.reveal').forEach(node => obs.observe(node));
    return () => obs.disconnect();
  });
</script>

<section id="work" bind:this={el} class="py-28 px-6" style="background: var(--c-surface)" aria-labelledby="work-heading">
  <div class="max-w-6xl mx-auto">

    <div class="reveal flex items-center gap-3 mb-4">
      <span class="h-px w-8" style="background: var(--c-accent)"></span>
      <span class="text-xs font-semibold uppercase tracking-widest" style="color: var(--c-accent)">Our Work</span>
    </div>

    <div class="reveal flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-16">
      <h2 id="work-heading" class="text-4xl font-bold tracking-tight" style="color: var(--c-text)">
        Results that speak<br>for themselves.
      </h2>
      <a href="#pricing" class="text-sm font-medium underline underline-offset-4 transition-opacity hover:opacity-60 shrink-0" style="color: var(--c-accent)">
        Start your project →
      </a>
    </div>

    <div class="grid sm:grid-cols-2 gap-6">
      {#each portfolio as item, i}
        <article
          class="reveal group relative overflow-hidden rounded-[var(--r-card)] transition-all duration-500 hover:-translate-y-1.5 cursor-default"
          style="background: {item.bg}; border: 1px solid rgba(255,255,255,0.07); min-height: 260px; transition-delay: {i * 80}ms"
          aria-label="{item.title} – {item.category}"
        >
          <!-- Decorative lines -->
          <div class="absolute inset-0 p-6 pointer-events-none" aria-hidden="true">
            <div class="absolute top-0 right-0 w-48 h-48 rounded-full opacity-20 transition-opacity group-hover:opacity-30" style="background: radial-gradient(circle, {item.accent}, transparent 70%); transform: translate(30%, -30%)"></div>
            {#each item.lines as lineColor, li}
              <div
                class="absolute rounded-full"
                style="
                  background: {item.accent};
                  opacity: {0.12 - li * 0.03};
                  height: 1px;
                  width: {70 - li * 12}%;
                  bottom: {40 + li * 16}px;
                  left: {16 + li * 8}px;
                "
              ></div>
            {/each}
          </div>

          <div class="relative p-7 flex flex-col h-full justify-between" style="min-height: 260px">
            <div>
              <span class="inline-block text-xs font-semibold px-2.5 py-1 rounded-full mb-4" style="background: rgba(255,255,255,0.08); color: rgba(255,255,255,0.55)">
                {item.category}
              </span>
              <h3 class="text-2xl font-bold text-white mb-1">{item.title}</h3>
            </div>

            <!-- Result pill -->
            <div class="flex items-center gap-2 mt-8">
              <span class="w-2 h-2 rounded-full" style="background: {item.accent}"></span>
              <span class="text-sm font-semibold" style="color: {item.accent}">{item.result}</span>
            </div>
          </div>
        </article>
      {/each}
    </div>
  </div>
</section>
