<script>
  import { testimonials } from '$lib/data/site.js';
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

<section id="testimonials" bind:this={el} class="py-28 px-6" style="background: var(--c-surface)" aria-labelledby="testimonials-heading">
  <div class="max-w-6xl mx-auto">

    <div class="reveal flex items-center gap-3 mb-4">
      <span class="h-px w-8" style="background: var(--c-accent)"></span>
      <span class="text-xs font-semibold uppercase tracking-widest" style="color: var(--c-accent)">Testimonials</span>
    </div>

    <h2 id="testimonials-heading" class="reveal text-4xl font-bold tracking-tight mb-16" style="color: var(--c-text)">
      Clients who grew with us.
    </h2>

    <div class="grid md:grid-cols-3 gap-6">
      {#each testimonials as t, i}
        <article
          class="reveal flex flex-col justify-between rounded-[var(--r-card)] p-7 transition-all duration-300 hover:-translate-y-1"
          style="background: var(--c-bg); border: 1px solid var(--c-border); transition-delay: {i * 90}ms"
          aria-label="Testimonial from {t.name}"
        >
          <!-- Stars -->
          <div class="flex gap-1 mb-5" aria-label="5 out of 5 stars">
            {#each Array(5) as _}
              <svg width="24" height="24" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <path d="M7 1l1.545 3.13L12 4.635l-2.5 2.435.59 3.44L7 8.895l-3.09 1.615L4.5 7.07 2 4.635l3.455-.505L7 1z" fill="var(--c-accent)"/>
              </svg>
            {/each}
          </div>

          <blockquote class="text-sm leading-relaxed flex-1 mb-6" style="color: var(--c-text)">
            "{t.quote}"
          </blockquote>

          <div class="flex items-center gap-3">
            <div
              class="w-10 h-10 rounded-full flex items-center justify-center text-xs font-bold text-white shrink-0"
              style="background: var(--c-accent)"
              aria-hidden="true"
            >
              {t.initials}
            </div>
            <div>
              <p class="text-sm font-semibold" style="color: var(--c-text)">{t.name}</p>
              <p class="text-xs" style="color: var(--c-muted)">{t.role}</p>
            </div>
          </div>
        </article>
      {/each}
    </div>
  </div>
</section>
