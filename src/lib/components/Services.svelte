<script>
  import { services } from '$lib/data/site.js';
  import { onMount } from 'svelte';

  let el = $state(null);

  onMount(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach(e => e.target.classList.toggle('visible', e.isIntersecting)),
      { threshold: 0.15 }
    );
    el.querySelectorAll('.reveal').forEach(node => obs.observe(node));
    return () => obs.disconnect();
  });
</script>

<section id="services" bind:this={el} class="py-28 px-6" aria-labelledby="services-heading">
  <div class="max-w-6xl mx-auto">
    <div class="reveal flex items-center gap-3 mb-4">
      <span class="h-px w-8" style="background: var(--c-accent)"></span>
      <span class="text-xs font-semibold uppercase tracking-widest" style="color: var(--c-accent)">What We Do</span>
    </div>

    <h2 id="services-heading" class="reveal text-4xl font-bold tracking-tight mb-4" style="color: var(--c-text)">
      Everything you need.<br>Nothing you don't.
    </h2>
    <p class="reveal text-lg mb-16 max-w-xl" style="color: var(--c-muted)">
      We cover the full stack — from strategy and design to code and growth. One team, one process.
    </p>

    <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {#each services as svc, i}
        <article
          class="reveal group rounded-[var(--r-card)] p-6 transition-all duration-300 hover:-translate-y-1 cursor-default"
          style="background: var(--c-surface); border: 1px solid var(--c-border); transition-delay: {i * 80}ms"
          aria-label={svc.title}
        >
          <div
            class="w-12 h-12 rounded-xl flex items-center justify-center text-xl mb-5 transition-colors duration-300 group-hover:text-white"
            style="background: var(--c-accent-lt); color: var(--c-accent)"
            aria-hidden="true"
          >
            {svc.icon}
          </div>
          <h3 class="font-semibold text-base mb-2" style="color: var(--c-text)">{svc.title}</h3>
          <p class="text-sm leading-relaxed" style="color: var(--c-muted)">{svc.desc}</p>
        </article>
      {/each}
    </div>
  </div>
</section>
