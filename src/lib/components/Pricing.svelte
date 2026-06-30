<script>
  import { pricing } from '$lib/data/site.js';
  import { onMount } from 'svelte';

  let el = $state(null);

  onMount(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach(e => e.target.classList.toggle('visible', e.isIntersecting)),
      { threshold: 0.1 }
    );
    el.querySelectorAll('.reveal').forEach(node => obs.observe(node));
    return () => obs.disconnect();
  });
</script>

<section id="pricing" bind:this={el} class="py-28 px-6" aria-labelledby="pricing-heading">
  <div class="max-w-4xl mx-auto">

    <div class="reveal flex items-center gap-3 mb-4">
      <span class="h-px w-8" style="background: var(--c-accent)"></span>
      <span class="text-xs font-semibold uppercase tracking-widest" style="color: var(--c-accent)">Pricing</span>
    </div>

    <h2 id="pricing-heading" class="reveal text-4xl font-bold tracking-tight mb-3" style="color: var(--c-text)">
      Transparent pricing.
    </h2>
    <p class="reveal text-lg mb-16" style="color: var(--c-muted)">No surprises. No hidden fees.</p>

    <div class="grid md:grid-cols-2 gap-6">
      {#each pricing as plan, i}
        <article
          class="reveal relative flex flex-col rounded-[var(--r-card)] p-7 transition-all duration-300 hover:-translate-y-1"
          style="
            background: {plan.highlight ? 'var(--c-accent)' : 'var(--c-surface)'};
            border: 1px solid {plan.highlight ? 'transparent' : 'var(--c-border)'};
            color: {plan.highlight ? 'white' : 'var(--c-text)'};
            box-shadow: {plan.highlight ? '0 20px 60px rgba(91,76,245,0.3)' : 'none'};
            transition-delay: {i * 80}ms
          "
          aria-label="{plan.name} plan – {plan.price}"
        >
          {#if plan.highlight}
            <div class="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full text-xs font-semibold" style="background: white; color: var(--c-accent)">
              Most Popular
            </div>
          {/if}

          <div class="mb-6">
            <p class="text-sm font-semibold mb-3 opacity-80">{plan.name}</p>
            <div class="flex items-end gap-1.5 mb-1">
              <span class="text-4xl font-bold tracking-tight">{plan.price}</span>
              {#if plan.price !== 'Custom'}
                <span class="text-sm mb-1.5 opacity-60">{plan.per}</span>
              {/if}
            </div>
            <p class="text-sm leading-relaxed opacity-70 mt-2">{plan.desc}</p>

            {#if plan.note}
              <p class="text-xs font-medium mt-2" style="opacity: 0.9">{plan.note}</p>
            {/if}
          </div>

          <ul class="space-y-3 mb-8 flex-1" role="list">
            {#each plan.features as feat}
              <li class="flex items-center gap-2.5 text-sm">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <circle cx="8" cy="8" r="7.5" stroke="{plan.highlight ? 'rgba(255,255,255,0.3)' : 'var(--c-accent)'}"/>
                  <path d="M4.5 8l2.5 2.5 4.5-5" stroke="{plan.highlight ? 'white' : 'var(--c-accent)'}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <span style="opacity: 0.85">{feat}</span>
              </li>
            {/each}
          </ul>

          <a
            href="mailto:hello@formastudio.io"
            class="block text-center py-3 px-5 rounded-[var(--r-btn)] text-sm font-semibold transition-all duration-200 hover:opacity-85 hover:-translate-y-0.5"
            style="
              background: {plan.highlight ? 'white' : 'var(--c-accent)'};
              color: {plan.highlight ? 'var(--c-accent)' : 'white'};
            "
          >
            {plan.cta}
          </a>
        </article>
      {/each}
    </div>
  </div>
</section>
