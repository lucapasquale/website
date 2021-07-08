import Link from 'next/link'
import React, { FC } from 'react'
import { FaGithub, FaEnvelope, FaLinkedin, FaInstagram } from 'react-icons/fa'

import config from '../../config'
import { SocialLink } from './SocialLink'

export const About: FC = () => (
  <article className="max-w-screen-md mx-auto px-4 flex flex-col items-center justify-between gap-4 sm:flex-row sm:items-baseline">
    <section className="max-w-md">
      <h3 className="text-2xl text-gray-300">About me</h3>

      <p>Hey, I'm Luca!</p>
      <p>
        I'm a software engineer born in Brazil, who loves gaming and creating things. I started
        learning programming so I could create my own game, and after that, I never stopped learning
        and improving myself.
      </p>
      <p>
        I've worked mainly on creating APIs and services in GraphQL, either directly for websites,
        or in a micro-service architecture. Nowadays I tend to use TypeScript for developing, but
        I've also used C# and I'm currently learning Elixir.
      </p>
      <p>
        For the frontend, I've created websites, ecommerces and admin dashboards with React, and
        also developed an app using React Native.
      </p>
      <p>
        You can check more about that on my <Link href="/projects">projects page</Link>.
      </p>
    </section>

    <section className="max-w-md">
      <h3 className="text-2xl text-gray-300">Contact</h3>

      <div className="mt-4 px-2 gap-3 grid grid-cols-2 sm:flex sm:flex-col">
        <SocialLink label="GITHUB" url={config.LINKS.GITHUB} icon={<FaGithub />} />
        <SocialLink label="EMAIL" url={`mailto:${config.CONTACT.EMAIL}`} icon={<FaEnvelope />} />
        <SocialLink label="LINKEDIN" url={config.LINKS.LINKEDIN} icon={<FaLinkedin />} />
        <SocialLink label="INSTAGRAM" url={config.LINKS.INSTAGRAM} icon={<FaInstagram />} />
      </div>
    </section>
  </article>
)
