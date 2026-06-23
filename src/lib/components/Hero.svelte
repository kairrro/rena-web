<script>
  import { hero } from '$lib/data/site.js';
</script>

<section
  id="hero"
  class="relative min-h-screen flex items-center pt-16 overflow-hidden"
  aria-label="Hero"
>
  <div
    class="absolute inset-0 pointer-events-none"
    style="background-image: linear-gradient(var(--c-border) 1px, transparent 1px), linear-gradient(90deg, var(--c-border) 1px, transparent 1px); background-size: 48px 48px; opacity: 0.6;"
    aria-hidden="true"
  ></div>
  
  <div class="absolute top-24 right-1/4 w-96 h-96 rounded-full pointer-events-none" style="background: radial-gradient(circle, rgba(91,76,245,0.07) 0%, transparent 70%);" aria-hidden="true"></div>
  <div class="absolute bottom-0 left-1/3 w-72 h-72 rounded-full pointer-events-none" style="background: radial-gradient(circle, rgba(91,76,245,0.04) 0%, transparent 70%);" aria-hidden="true"></div>

  <div class="relative max-w-6xl mx-auto px-6 w-full py-24">
    <div class="grid lg:grid-cols-2 gap-16 items-center">
      <div>
        <h1 class="fade-up d2 text-5xl sm:text-6xl font-bold leading-[1.1] tracking-tight mb-6" style="color: var(--c-text)">
          {#each hero.headline as line, i}
            <span class="block" style={i === 2 ? `color: var(--c-accent)` : ''}>{line}</span>
          {/each}
        </h1>

        <p class="fade-up d3 text-lg leading-relaxed mb-10 max-w-md" style="color: var(--c-muted)">
          {hero.sub}
        </p>

        <div class="fade-up d4 flex flex-wrap gap-3">
          <a
            href={hero.cta.href}
            class="inline-flex items-center px-6 py-3 rounded-[var(--r-btn)] text-sm text-white transition-all hover:opacity-90 hover:-translate-y-0.5 active:translate-y-0"
            style="background: var(--c-accent); box-shadow: 0 4px 14px rgba(91,76,245,0.3)"
          >
            {hero.cta.label}
          </a>
          <a
            href={hero.cta2.href}
            class="inline-flex items-center px-6 py-3 rounded-[var(--r-btn)] text-sm transition-all hover:opacity-70"
            style="color: var(--c-text); border: 1px solid var(--c-border)"
          >
            {hero.cta2.label}
          </a>
        </div>
      </div>

      <!-- Right: light-mode website mockup panel -->
      <div class="fade-up d3 relative flex justify-center lg:justify-end" aria-label="Website preview illustration">
        <div
          class="relative w-full max-w-[480px] rounded-2xl overflow-hidden transition-transform duration-500 hover:-translate-y-2"
          style="background: #ffffff; box-shadow: 0 32px 80px rgba(0,0,0,0.10), 0 0 0 1px rgba(0,0,0,0.06), 0 0 60px rgba(91,76,245,0.08);"
        >
          <!-- Browser chrome — light -->
          <div class="flex items-center gap-2 px-4 py-3" style="background: #f4f4f6; border-bottom: 1px solid #e8e8ec;">
            <span class="w-3 h-3 rounded-full" style="background: #ff5f57"></span>
            <span class="w-3 h-3 rounded-full" style="background: #febc2e"></span>
            <span class="w-3 h-3 rounded-full" style="background: #28c840"></span>
            <div class="flex-1 mx-4 h-6 rounded-md flex items-center px-3" style="background: #e4e4e8;">
              <span class="text-xs" style="color: #9090a0">formastudio.io</span>
            </div>
          </div>

          <!-- Mockup body — light -->
          <div class="p-6 space-y-5" style="background: #ffffff;">

            <!-- Simulated nav bar -->
            <div class="flex items-center justify-between pb-3" style="border-bottom: 1px solid #f0f0f4;">
              <div class="h-3 w-20 rounded-full" style="background: #d4d4dc;"></div>
              <div class="flex gap-2">
                <div class="h-2.5 w-10 rounded-full" style="background: #e4e4ea;"></div>
                <div class="h-2.5 w-10 rounded-full" style="background: #e4e4ea;"></div>
                <div class="h-2.5 w-10 rounded-full" style="background: #e4e4ea;"></div>
                <div class="h-7 w-16 rounded-lg" style="background: var(--c-accent); opacity: 0.9;"></div>
              </div>
            </div>

            <!-- Hero block -->
            <div class="space-y-2 pt-1">
              <div class="h-2 w-1/3 rounded-full" style="background: rgba(91,76,245,0.25)"></div>
              <div class="h-5 w-3/4 rounded-md" style="background: #c8c8d4"></div>
              <div class="h-5 w-2/3 rounded-md" style="background: #d4d4de"></div>
              <div class="h-5 w-1/2 rounded-md" style="background: #dcdce6"></div>
              <div class="h-2 w-full rounded-full mt-2" style="background: #e8e8ee"></div>
              <div class="h-2 w-4/5 rounded-full" style="background: #e8e8ee"></div>
              <div class="flex gap-3 mt-3">
                <div class="h-8 w-28 rounded-lg" style="background: var(--c-accent);"></div>
                <div class="h-8 w-24 rounded-lg" style="background: #ece9ff; border: 1px solid var(--c-border);"></div>
              </div>
            </div>

            <!-- Divider -->
            <div class="h-px" style="background: #f0f0f4"></div>

            <!-- Stats row -->
            <div class="grid grid-cols-3 gap-3">
              {#each [{ val: '210%', label: 'More leads' }, { val: '3×', label: 'Signups' }, { val: '85%', label: 'Revenue' }] as stat}
                <div class="rounded-xl p-3 text-center" style="background: var(--c-surface); border: 1px solid var(--c-border)">
                  <div class="text-sm font-bold" style="color: var(--c-accent)">{stat.val}</div>
                  <div class="h-1.5 w-10 rounded-full mx-auto mt-1.5" style="background: #ddd8ff"></div>
                </div>
              {/each}
            </div>

            <!-- Card grid -->
            <div class="grid grid-cols-2 gap-3">
              {#each [0, 1, 2, 3] as _}
                <div class="rounded-xl p-4 space-y-2" style="background: var(--c-surface); border: 1px solid var(--c-border)">
                  <div class="w-6 h-6 rounded-md" style="background: var(--c-accent-lt)"></div>
                  <div class="h-2 w-3/4 rounded-full" style="background: #d0d0da"></div>
                  <div class="h-1.5 w-full rounded-full" style="background: #e8e8ee"></div>
                  <div class="h-1.5 w-2/3 rounded-full" style="background: #e8e8ee"></div>
                </div>
              {/each}
            </div>
          </div>

          <!-- Subtle pulse border -->
          <div
            class="absolute inset-0 rounded-2xl pointer-events-none"
            style="animation: pulse-glow 3s ease-in-out infinite;"
            aria-hidden="true"
          ></div>
        </div>
      </div>

    </div>
  </div>
</section>

<style>
  @keyframes pulse-glow {
    0%, 100% { box-shadow: inset 0 0 0 0 rgba(91,76,245,0); }
    50%       { box-shadow: inset 0 0 24px rgba(91,76,245,0.04); }
  }
</style>