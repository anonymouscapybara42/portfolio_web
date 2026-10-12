import { sveltekit } from '@sveltejs/kit/vite';
import adapter from '@sveltejs/adapter-static';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [
		tailwindcss(),
		sveltekit({
			// Static output: deploys to Netlify, Vercel, Cloudflare Pages, GitHub Pages, Hostinger, etc.
			adapter: adapter({
				pages: 'build',
				assets: 'build',
				fallback: undefined,
				precompress: false,
				strict: true
			}),
			prerender: {
				// Every other broken internal link still fails the build. The resume is
				// the one exception: it is a file you supply (static/resume.pdf), and
				// scripts/check-resume.js already warns when it is missing.
				handleHttpError: ({ path, message }) => {
					if (path === '/resume.pdf') {
						console.warn('\n\x1b[33m⚠  /resume.pdf is not in static/ yet: the Download Resume buttons will 404.\x1b[0m');
						return;
					}
					throw new Error(message);
				}
			}
		})
	]
});
