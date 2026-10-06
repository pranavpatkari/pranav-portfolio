import { owner } from './data/site.js'

export function whatsappLink(message = `Hi ${owner.name.split(' ')[0]}, I'm interested in a website for my business.`) {
  return `https://wa.me/${owner.whatsapp}?text=${encodeURIComponent(message)}`
}
