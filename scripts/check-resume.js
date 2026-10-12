// Runs before `npm run build`. The "Download Resume" buttons point at
// static/resume.pdf, so warn loudly if that file hasn't been added yet.
import { existsSync, statSync } from 'node:fs';
import { fileURLToPath } from 'node:url';

const file = fileURLToPath(new URL('../static/resume.pdf', import.meta.url));

if (!existsSync(file) || statSync(file).size === 0) {
	console.warn(
		'\n\x1b[33m⚠  static/resume.pdf is missing.\x1b[0m\n' +
			'   The "Download Resume" buttons will 404 until you add your resume PDF at:\n' +
			'   static/resume.pdf\n'
	);
} else {
	console.log('✓ static/resume.pdf found');
}
