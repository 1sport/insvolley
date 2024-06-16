import WhatsAppIcon from '@/shared/images/whatsapp.svg'
import InstagramIcon from '@/shared/images/instagram.svg'
import FacebookIcon from '@/shared/images/facebook.svg'
import YoutubeIcon from '@/shared/images/youtube.svg'
import TelegramIcon from '@/shared/images/telegram.svg'

export const Socials = () => {
  return (
    <div className="flex gap-4">
      <a href="instagram.com/insvolleykz" target="_blank" rel="noopener noreferrer">
        <InstagramIcon />
      </a>
      <a href="https://t.me/insaidkazvolley" target="_blank" rel="noopener noreferrer">
        <TelegramIcon />
      </a>
      <a href="www.youtube.com/@insvolley" target="_blank" rel="noopener noreferrer">
        <YoutubeIcon />
      </a>
    </div>
  )
}