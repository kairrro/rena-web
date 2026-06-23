<script>
  import { cta } from '$lib/data/site.js';
  import { enhance } from '$app/forms';
  import { onMount } from 'svelte';

  let { form } = $props();

  let el = $state(null);
  let submitting = $state(false);

  onMount(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach(e => e.target.classList.toggle('visible', e.isIntersecting)),
      { threshold: 0.2 }
    );
    el.querySelectorAll('.reveal').forEach(node => obs.observe(node));
    return () => obs.disconnect();
  });
</script>

<section bind:this={el} class="py-28 px-6" aria-labelledby="cta-heading">
  <div class="max-w-xl mx-auto text-center">

    <h2 id="cta-heading" class="reveal text-3xl sm:text-4xl font-bold mb-3 tracking-tight" style="color: var(--c-text, #111)">
      {cta.headline}
    </h2>
    <p class="reveal text-base mb-8" style="color: var(--c-text-muted, #6b7280)">
      {cta.sub}
    </p>

    {#if form?.success}
      <div
        class="flex flex-col items-center gap-3 rounded-2xl px-6 py-10 border"
        style="border-color: #d1fae5; background: #f0fdf4"
      >
        <div
          class="flex items-center justify-center w-12 h-12 rounded-full"
          style="background: #22c55e"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="w-6 h-6">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>
        <p class="font-semibold text-lg" style="color: #15803d">
          Email sent successfully!
        </p>
        <p class="text-sm" style="color: #166534">
          Thanks for reaching out — we'll reply within 24 hours.
        </p>
      </div>
    {:else}
      <form
        method="POST"
        action="?/contact"
        class="reveal flex flex-col gap-3 text-left"
        use:enhance={() => {
          submitting = true;
          return async ({ update }) => {
            await update();
            submitting = false;
          };
        }}
      >
        <input
          type="text"
          name="name"
          placeholder="Your name"
          value={form?.name ?? ''}
          class="w-full rounded-[var(--r-btn)] px-4 py-3 text-sm border focus:outline-none focus:ring-2"
          style="border-color: #e5e7eb; --tw-ring-color: var(--c-accent)"
        />
        <input
          type="email"
          name="email"
          placeholder="Your email"
          value={form?.email ?? ''}
          class="w-full rounded-[var(--r-btn)] px-4 py-3 text-sm border focus:outline-none focus:ring-2"
          style="border-color: #e5e7eb; --tw-ring-color: var(--c-accent)"
        />
        <textarea
          name="message"
          placeholder="Tell us about your project"
          rows="3"
          class="w-full rounded-[var(--r-btn)] px-4 py-3 text-sm border focus:outline-none focus:ring-2 resize-none"
          style="border-color: #e5e7eb; --tw-ring-color: var(--c-accent)"
        >{form?.message ?? ''}</textarea>

        {#if form?.error}
          <p class="text-sm font-medium px-1" style="color: #dc2626">
            {form.error}
          </p>
        {/if}

        <button
          type="submit"
          disabled={submitting}
          class="inline-flex items-center justify-center px-7 py-3.5 rounded-[var(--r-btn)] text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg disabled:opacity-60 disabled:hover:translate-y-0 mt-1"
          style="background: var(--c-accent)"
        >
          {submitting ? 'Sending…' : cta.btn}
        </button>
      </form>
    {/if}
  </div>
</section>