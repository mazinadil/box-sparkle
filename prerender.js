import fs from 'node:fs'
import path from 'node:path'
import url from 'node:url'

const __dirname = path.dirname(url.fileURLToPath(import.meta.url))
const toAbsolute = (p) => path.resolve(__dirname, p)

const resolveServerEntry = () => {
  const legacyPath = toAbsolute('dist/server/entry-server.js')
  if (fs.existsSync(legacyPath)) {
    return legacyPath
  }

  const assetsDir = toAbsolute('dist/server/assets')
  if (!fs.existsSync(assetsDir)) {
    return null
  }

  const match = fs
    .readdirSync(assetsDir)
    .find((file) => /^entry-server\..+\.js$/.test(file))

  return match ? path.join(assetsDir, match) : null
}

const serverPath = resolveServerEntry()

if (!serverPath) {
  console.error('Server build not found. Skipping prerender.')
  process.exit(0)
}

const template = fs.readFileSync(toAbsolute('dist/index.html'), 'utf-8')

const importServer = async () => {
  try {
    return await import(url.pathToFileURL(serverPath).href)
  } catch (error) {
    console.error('Failed to import server entry:', error?.stack ?? error)
    throw error
  }
}

const { render } = await importServer()

// Define routes explicitly instead of reading from filesystem
const routesToPrerender = [
  '/',
  '/about',
  '/services',
  '/events',
  '/contact',
  '/blog',
  '/clients',
  '/privacy',
  '/terms',
  '/events/corporate',
  '/events/parties',
  '/events/proposals',
  '/events/weddings',
  '/services/entertainment',
  '/services/photobooth',
  '/services/sound-lighting',
  '/services/outdoor-cinema',
  '/services/karaoke',
  '/services/silent-headsets',
  '/services/dance-floors',
  '/services/led-letters',
  '/services/entertainment/magicians',
  '/services/entertainment/comedians',
  '/services/entertainment/djs',
  '/services/entertainment/emcees',
  '/services/entertainment/dancers',
  '/services/entertainment/bands',
  '/services/entertainment/singers',
  '/services/entertainment/saxophonists',
  '/services/photobooth/360-booth',
  '/services/photobooth/original-booth',
  '/services/photobooth/mirror-booth',
  '/services/photobooth/mirror-booth-backdrop',
  '/services/silent-headsets/silent-disco',
  '/services/silent-headsets/corporate-headsets',
  '/services/silent-headsets/silent-yoga',
  '/services/sound-lighting/festoon-lights',
]

;(async () => {
  for (const currentUrl of routesToPrerender) {
    try {
      const appHtml = await render(currentUrl)
      const html = template.replace('<!--app-html-->', appHtml)

      const filePath = currentUrl === '/' ? 'dist/index.html' : `dist${currentUrl}/index.html`

      fs.mkdirSync(path.dirname(toAbsolute(filePath)), { recursive: true })
      fs.writeFileSync(toAbsolute(filePath), html)
      console.log('pre-rendered:', filePath)
    } catch (error) {
      console.error(`Failed to prerender ${currentUrl}:`, error?.stack ?? error)
    }
  }
})()
