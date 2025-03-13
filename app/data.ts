type Project = {
  name: string
  description: string
  link: string
  video: string
  id: string
}

type WorkExperience = {
  company: string
  title: string
  start: string
  end: string
  link: string
  id: string
}

type BlogPost = {
  title: string
  description: string
  link: string
  uid: string
}

type SocialLink = {
  label: string
  link: string
}

export const PROJECTS: Project[] = [
  {
    name: 'Ylabs Consulting',
    description:
      'An AI software factory offering tailored AI solutions to small and medium-sized businesses, focusing on efficiency and innovation.',
    link: 'https://ylabs.ch/',
    video: 'https://res.cloudinary.com/read-cv/video/upload/t_v_b/v1/1/profileItems/W2azTw5BVbMXfj7F53G92hMVIn32/XSfIvT7BUWbPRXhrbLed/ee6871c9-8400-49d2-8be9-e32675eabf7e.mp4?_a=DATAdtAAZAA0',
    id: 'project1',
  },
  {
    name: 'Hippocraticum AI',
    description:
      'A company dedicated to integrating AI technology with human expertise to enhance patient care in the healthcare sector.',
    link: 'https://www.hippocraticum.ai/',
    video: 'https://res.cloudinary.com/read-cv/video/upload/t_v_b/v1/1/profileItems/W2azTw5BVbMXfj7F53G92hMVIn32/newProfileItem/d898be8a-7037-4c71-af0c-8997239b050d.mp4?_a=DATAdtAAZAA0',
    id: 'project2',
  },
]

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    company: 'Hippocraticum AI',
    title: 'Co-Founder and CEO',
    start: '2023',
    end: 'Present',
    link: 'https://www.hippocraticum.ai/',
    id: 'work2',
  },
  {
    company: 'Ylabs GmbH',
    title: 'Co-Founder and Owner',
    start: '2019',
    end: 'Present',
    link: 'https://ylabs.ch/',
    id: 'work1',
  },
  {
    company: 'Advokatur Fanger',
    title: 'Technology Solution Consultant',
    start: '2023',
    end: 'Present',
    link: 'https://www.advokatur-fanger.ch/',
    id: 'work4',
  },
  {
    company: 'Answerme AI',
    title: 'Founder and CEO',
    start: '2023',
    end: '2024',
    link: 'https://www.answerme.ai/',
    id: 'work3',
  },
  {
    company: 'Swiss Business Protection',
    title: 'Security Engineer',
    start: '2021',
    end: '2023',
    link: 'https://www.swissbp.ch/',
    id: 'work5',
  },
  {
    company: 'PEAX AG',
    title: 'Fullstack Developer Apprentice',
    start: '2019',
    end: '2023',
    link: 'https://www.peax.ch/',
    id: 'work6',
  },
]

export const BLOG_POSTS: BlogPost[] = [
  {
    title: 'What an experience at the AI Festival in Milan!',
    description:
      'I had the pleasure of meeting forward-thinking startups that are shaping the future of AI in healthcare.',
    link: 'https://www.linkedin.com/posts/yaron-fanger_what-an-experience-at-the-ai-festival-in-activity-7301240757242208256-5hq4',
    uid: 'blog-1',
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'LinkedIn',
    link: 'https://ch.linkedin.com/in/yaron-fanger/en',
  },
  {
    label: 'Hugging Face',
    link: 'https://huggingface.co/breadberry-prime',
  },
]

export const EMAIL = 'yaron.fanger@ylabs.ch'
