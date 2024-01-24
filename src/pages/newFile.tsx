import BaseLayout from '../layouts/BaseLayout.astro';
import CallToAction from '../components/CallToAction.astro';
import Grid from '../components/Grid.astro';
import Hero from '../components/Hero.astro';
import Icon from '../components/Icon.astro';
import Pill from '../components/Pill.astro';
import PortfolioPreview from '../components/PortfolioPreview.astro';
import ContactCTA from '../components/ContactCTA.astro';
import Skills from '../components/Skills.astro';
import { projects } from './index.astro';

<Fragment>
<BaseLayout>
<div class="stack gap-20 lg:gap-48">
<div class="wrapper stack gap-8 lg:gap-20">
<header class="hero">
<Hero title="Je m'appelle Rachid MEFTAH" tagline="Développeur full-stack avec plus de 3 ans d'expérience dans la création de sites web et d'applications. Passionnée par les nouvelles technologies et la résolution de problèmes." align="start">
<div class="roles">
<Pill><Icon icon="code" size="1.33em" /> Developpeur</Pill>
<Pill><Icon icon="paper-plane-tilt" size="1.33em" /> Diseigneur</Pill>
</div>
</Hero>

<img alt=" Rachid MEFTAH" width="480" height="620" src="/assets/prtrait.png" />
</header>

<Skills />
</div>

<main class="wrapper stack gap-20 lg:gap-48">
<section class="section with-background with-cta">
<header class="section-header stack gap-2 lg:gap-4">
<h3>Selected Work</h3>
<p>Take a look below at some of my featured work for clients from the past few years.</p>
</header>

<div class="gallery">
<Grid variant="offset">
{projects.map((project) => (
<Fragment><li>
<PortfolioPreview project={project} />
</li></Fragment>
))}
</Grid>
</div>

<div class="cta">
<CallToAction href="/work/">
View All
<Icon icon="arrow-right" size="1.2em" />
</CallToAction>
</div>
</section>

<section class="section with-background bg-variant">
<header class="section-header stack gap-2 lg:gap-4">
<h3>Mentions</h3>
<p>
I have been fortunate enough to receive praise for my work in several publications. Take
a look below to learn more.
</p>
</header>

<div class="gallery">
<Grid variant="small">
{['Medium', 'BuzzFeed', 'The Next Web', 'awwwards.', 'TechCrunch'].map((brand) => (
<Fragment><li class="mention-card">
<p>{brand}</p>
</li></Fragment>
))}
</Grid>
</div>
</section>
</main>

<ContactCTA />
</div>
</BaseLayout>

<style>{`
	.hero {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 2rem;
	}

	.roles {
		display: none;
	}

	.hero img {
		aspect-ratio: 5 / 4;
		object-fit: cover;
		object-position: top;
		border-radius: 1.5rem;
		box-shadow: var(--shadow-md);
	}

	@media (min-width: 50em) {
		.hero {
			display: grid;
			grid-template-columns: 6fr 4fr;
			padding-inline: 2.5rem;
			gap: 3.75rem;
		}

		.roles {
			margin-top: 0.5rem;
			display: flex;
			gap: 0.5rem;
		}

		.hero img {
			aspect-ratio: 3 / 4;
			border-radius: 4.5rem;
			object-fit: cover;
		}
	}

	/* ====================================================== */

	.section {
		display: grid;
		gap: 2rem;
	}

	.with-background {
		position: relative;
	}

	.with-background::before {
		--hero-bg: var(--bg-image-subtle-2);

		content: '';
		position: absolute;
		pointer-events: none;
		left: 50%;
		width: 100vw;
		aspect-ratio: calc(2.25 / var(--bg-scale));
		top: 0;
		transform: translateY(-75%) translateX(-50%);
		background:
			url('/assets/backgrounds/noise.png') top center/220px repeat,
			var(--hero-bg) center center / var(--bg-gradient-size) no-repeat,
			var(--gray-999);
		background-blend-mode: overlay, normal, normal, normal;
		mix-blend-mode: var(--bg-blend-mode);
		z-index: -1;
	}

	.with-background.bg-variant::before {
		--hero-bg: var(--bg-image-subtle-1);
	}

	.section-header {
		justify-self: center;
		text-align: center;
		max-width: 50ch;
		font-size: var(--text-md);
		color: var(--gray-300);
	}

	.section-header h3 {
		font-size: var(--text-2xl);
	}

	@media (min-width: 50em) {
		.section {
			grid-template-columns: repeat(4, 1fr);
			grid-template-areas: 'header header header header' 'gallery gallery gallery gallery';
			gap: 5rem;
		}

		.section.with-cta {
			grid-template-areas: 'header header header cta' 'gallery gallery gallery gallery';
		}

		.section-header {
			grid-area: header;
			font-size: var(--text-lg);
		}

		.section-header h3 {
			font-size: var(--text-4xl);
		}

		.with-cta .section-header {
			justify-self: flex-start;
			text-align: left;
		}

		.gallery {
			grid-area: gallery;
		}

		.cta {
			grid-area: cta;
		}
	}

	/* ====================================================== */

	.mention-card {
		display: flex;
		height: 7rem;
		justify-content: center;
		align-items: center;
		text-align: center;
		border: 1px solid var(--gray-800);
		border-radius: 1.5rem;
		color: var(--gray-300);
		background: var(--gradient-subtle);
		box-shadow: var(--shadow-sm);
	}

	@media (min-width: 50em) {
		.mention-card {
			border-radius: 1.5rem;
			height: 9.5rem;
		}
	}
`}</style>

</Fragment>;
