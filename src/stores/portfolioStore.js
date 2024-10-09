import { defineStore } from 'pinia'

export const usePortfolioStore = defineStore('portfolio', {
  state: () => ({
    portfolioProjects: [
      {
        id: '001',
        title: 'Herding Cats Travel App',
        description: [
          '- A comprehensive travel planning application developed using Vue.js.',
          '- Custom graphics and user interface designed using Figma.',
          '- Features include itinerary sharing, flight information, hotel bookings, meeting points, activities, and contact information management for small travel groups.'
        ],
        images: [
          {
            src: new URL(
              '@/assets/img/herding-cats/herding-cats-screen-shot-startpage.png',
              import.meta.url
            ).href,
            alt: 'Herding Cats Travel App Startpage'
          },
          {
            src: new URL(
              '@/assets/img/herding-cats/herding-cats-screen-shot-alltravels.png',
              import.meta.url
            ).href,
            alt: 'Herding Cats Travel App All Travels'
          },
          {
            src: new URL(
              '@/assets/img/herding-cats/herding-cats-screen-shot-packlist.png',
              import.meta.url
            ).href,
            alt: 'Herding Cats Travel App Packing List'
          },
          {
            src: new URL(
              '@/assets/img/herding-cats/herding-cats-screen-shot-tripoverview.png',
              import.meta.url
            ).href,
            alt: 'Herding Cats Travel App Trip Overview'
          },
          {
            src: new URL(
              '@/assets/img/herding-cats/herding-cats-screen-shot-notes.png',
              import.meta.url
            ).href,
            alt: 'Herding Cats Travel App Trip Notes'
          }
        ],
        link: 'https://herding-cats.vercel.app/',
        linkText: 'herding-cats.vercel.app',
        routerLinkText: 'View Details'
      },
      {
        id: '002',
        title: 'Gustav Hersmann Photography',
        description: [
          'Current project in the works. Developing a nice photo portfolio for my former business as a Professional Photographer. Mostly to stay updated on programming and learn new things while looking for a job.'
        ],
        images: [
          {
            src: new URL(
              '@/assets/img/ghff/GHFF_Cows_by_Gustav_Hersmann_0029_lowres.jpg',
              import.meta.url
            ).href,
            alt: 'Black and White photo of cows in the fog at dusk'
          },
          {
            src: new URL(
              '@/assets/img/ghff/GHFF_Snowboard_by_Gustav_Hersmann_0029_lowres.jpg',
              import.meta.url
            ).href,
            alt: 'A Snowboarder makes a turn and blows a big cloud of snow'
          },
          {
            src: new URL(
              '@/assets/img/ghff/GHFF_Supersonic_by_Gustav_Hersmann_0029_lowres.jpg',
              import.meta.url
            ).href,
            alt: 'Band photo of The Supersonic'
          }
        ],
        routerLink: { path: '/photo' },
        routerLinkText: 'Photography Portfolio'
      },
      {
        id: '003',
        title: 'Posters for Gemeinde Wutha-Farnroda and Hörselbergmuseum',
        description: [
          'During my two years at the municipal office Wutha-Farnroda I did amongst other things a bunch of graphic design work. I used the Affinity Suite (Photo, Designer and Publisher) for all of the tasks.'
        ],
        images: [
          {
            src: new URL('@/assets/img/gwf/plakat-das-licht-in-unserem-leben.jpg', import.meta.url)
              .href,
            alt: 'Poster for the Exhibition Das Licht in unserem Leben',
            description:
              "Poster for the exhibition 'The light in our lives' at the Hörselberg Museum. This exhibition explores light and how mankind has illuminated the world throughout history. The design is heavily inspired by photographs from the 1920s, a time when electric lighting became commonplace in people's homes."
          },
          {
            src: new URL(
              '@/assets/img/gwf/plakat-kleine-objekte-grosse-geschichten.png',
              import.meta.url
            ).href,
            alt: 'Poster for the Exhibition Kleine Objekte - Große Geschichten',
            description:
              "Poster for the exhibition 'Kleine Objekte - Große Geschichten'. In this design, I used slanted text to deviate from the usual poster formats that are usually seen in the same places. The exhibition emphasised objects from the museum's collection and used them to tell bigger stories. For example, the potato ricer depicted on the poster tells the story of Thuringian dumplings. To convey a sense of recognition and seriousness, I used the railway typeface used by Deutsche Bahn for signage."
          },
          {
            src: new URL('@/assets/img/gwf/plakat-museumsnacht.jpg', import.meta.url).href,
            alt: 'Poster for Night of the Museums',
            description:
              'The local museum, the Hörselbergmuseum, was organising an evening of events designed mainly for children. I wanted to capture the excitement of going on a treasure hunt in the dark with a torch.'
          }
        ],
        routerLinkText: 'View Details'
      },
      {
        id: '004',
        title: 'Red Leaf Cameras and No Fear of too many Cameras',
        description: [
          'I toyed with the idea of starting an online camera store for selling vintage analog cameras and made a design draft for it.'
        ],
        images: [
          {
            src: new URL(
              '@/assets/img/red-leaf-cameras/phone_mockup_redleafcamera.jpg',
              import.meta.url
            ).href,
            alt: 'Phone Mockup for Red Leaf Cameras'
          },
          {
            src: new URL(
              '@/assets/img/red-leaf-cameras/testdesign_redleaf_camera_web.jpg',
              import.meta.url
            ).href,
            alt: 'Browser view draft for Red Leaf Cameras'
          },
          {
            src: new URL('@/assets/img/red-leaf-cameras/logo-nofotmc.png', import.meta.url).href,
            alt: 'Logo No Fear of too many Cameras'
          }
        ],
        routerLinkText: 'View Details'
      }
      /* {
      id: '005',
        title: 'Fowzi Magazine',
        description: [
          'An online magazine about snowboarding and snowboard culture. Made by me and my friend Brian. We only made three issues before other projects took over our attention.'
        ],
        images: [
          {
            src: new URL(
              '@/assets/img/GHFF_Cows_by_Gustav_Hersmann_0029_lowres.jpg',
              import.meta.url
            ).href,
            alt: 'Black and White photo of cows in the fog at dusk'
          },
          {
            src: new URL(
              '@/assets/img/GHFF_Snowboard_by_Gustav_Hersmann_0029_lowres.jpg',
              import.meta.url
            ).href,
            alt: 'A Snowboarder makes a turn and blows a big cloud of snow'
          },
          {
            src: new URL(
              '@/assets/img/GHFF_Supersonic_by_Gustav_Hersmann_0029_lowres.jpg',
              import.meta.url
            ).href,
            alt: 'Band photo of The Supersonic'
          }
        ],
        routerLink: { path: '/posters-gwf' },
        routerLinkText: 'View Details'
      } */
    ]
  }),

  getters: {
    getProjects: (state) => state.portfolioProjects
  }
})