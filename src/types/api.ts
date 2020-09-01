export type TechIcon = {
  icon: {
    url: string
  }
  title: string
}

export type Concepts = {
  id: number
  title: string
}

export type LogoProps = {
  alternativeText: string
  url: string
}

export type Modules = {
  title: string
  subtitle: string
  description: string
}

export type SocialLink = {
  slug: string
  link: string
}

export type Author = {
  name: string
  photo: Photo
  role: string
  socialLinks: SocialLink[]
  description: string
}

export type Photo = {
  alternativeText: string
  url: string
}

export type Reviews = {
  name: string
  text: string
  photo: Photo
}

export type Question = {
  question: string
  answer: string
}

export type HeaderProps = {
  title: string
  description: string
  button: {
    label: string
    url: string
  }
  image: {
    alternativeText: string
    url: string
  }
}

export type SectionAboutProjectProps = {
  title: string
  description: string
  image: {
    url: string
    alternativeText: string
  }
}

export type SectionTechProps = {
  title: string
  techIcons: TechIcon[]
}

export type SectionConceptsProps = {
  title: string
  concepts: Concepts[]
}

export type SectionModulesProps = {
  title: string
  modules: Modules[]
}

export type SectionAgendaProps = {
  title: string
  description: string
}

export type PricingBoxProps = {
  totalPrice: number
  numberInstallments: number
  priceInstallment: number
  benefits: string
  button: {
    label: string
    url: string
  }
}

export type SectionAboutUsProps = {
  title: string
  authors: Author[]
}

export type SectionReviewsProps = {
  title: string
  reviews: Reviews[]
}

export type SectionFAQProps = {
  title: string
  quetions: Question[]
}

export type LandingPageProps = {
  logo: LogoProps
  header: HeaderProps
  sectionAboutProject: SectionAboutProjectProps
  sectionTech: SectionTechProps
  sectionConcepts: SectionConceptsProps
  sectionModules: SectionModulesProps
  sectionAgenda: SectionAgendaProps
  pricingBox: PricingBoxProps
  sectionAboutUs: SectionAboutUsProps
  sectionReviews: SectionReviewsProps
  sectionFAQ: SectionFAQProps
}
