const CONFIG = new Config({
  crypto: {
    coin: 'ETH',
    currency: 'INR',
    refreshIn: 10
  },
  temperature: {
    location: 'Chennai, IN',
    scale: 'C'
  },
  clock: 'h:i p',
  search: {
    engines: {
      g: ['https://google.com/search?q=', 'Google'],
      i: ['https://ixquick.com/do/search?q=', 'Ixquick'],
      d: ['https://duckduckgo.com/html?q=', 'DuckDuckGo'],
      y: ['https://youtube.com/results?search_query=', 'Youtube'],
      w: ['https://en.wikipedia.org/w/index.php?search=', 'Wikipedia']
    }
  },
  disabled: [],
  tabs: [
    {
      name: 'boards',
      background_url: 'src/img/banners/bg-1.gif',
      categories: [{
        name: 'fun',
        links: [
          {
            url: 'https://4chan.org/wsg/',
            name: '/wsg/'
          },
          {
            name: '/out/',
            url: 'https://4chan.org/out',
            icon: 'leaf',
            icon_color: '#64876d'
          },
          {
            name: '/lit/',
            url: 'https://4chan.org/lit/',
            icon: 'book'
          },
          {
            name: '/v/',
            url: 'https://4chan.org/v/',
            icon: 'device-gamepad',
            icon_color: '#8b647b'
          },
          {
            name: '/p/',
            url: 'https://4chan.org/p/',
            icon: 'camera'
          },
          {
            name: '/a/',
            url: 'https://4chan.org/a/'
          }
        ]
      },
      {
        name: 'Comfy',
        links: [
          {
            name: '/lounge/',
            url: 'https://sushigirl.us/lounge/catalog.html'
          },
          {
            name: '/comfy/',
            url: 'https://anon.cafe/comfy/catalog.html'
          }
        ]
      },
      {
        name: 'Technology',
        links: [
          {
            name: '/g/',
            url: 'https://4chan.org/g/',
          },
          {
            name: '/Δ/',
            url: 'https://archive.arisuchan.jp/%CE%94/catalog.html'
          },
          {
            name: '/λ/',
            url: 'https://www.lainchan.org/%CE%BB/catalog.html'
          },
          {
            name: '/sec/',
            url: 'https://www.lainchan.org/sec/catalog.html'
          },
          {
            name: '/prog/',
            url: 'https://boards.420chan.org/prog/',
            icon: 'code'
          }
        ]
      }
      ]
    },
    {
      name: 'games',
      background_url: 'src/img/banners/bg-2.gif',
      categories: [
        {
          name: 'Gaming',
          links: [
            {
              url: 'https://protondb.com/',
              icon: 'brand-steam',
              icon_color: '#00abfb'
            },
            {
              url: 'https://cs.rin.ru/forum/',
              icon: 'share',
              icon_color: '#fd0061'
            },
            {
              url: 'https://r-a-d.io/',
              icon: 'radio'
            },
          ]
        },
        {
          name: 'Gaming subreddits',
          links: [
            {
              name: '/Linux Gaming/',
              url: 'https://www.reddit.com/r/linux_gaming/',
              icon: 'pacman'
            },
            {
              name: '/LinuxCrackSupport/',
              url: 'https://www.reddit.com/r/LinuxCrackSupport/',
            }
          ]
        }
      ]
    },
    {
      name: 'tech',
      background_url: 'src/img/banners/bg-3.gif',
      categories: [
        {
          name: 'subreddits',
          links: [
            {
              name: 'r/startpages/',
              url: 'https://www.reddit.com/r/startpages/'
            },
            {
              name: 'r/unixporn',
              url: 'https://www.reddit.com/r/unixporn/'
            },
            {
              name: 'r/mechkbds/',
              url: 'https://www.reddit.com/r/MechanicalKeyboards/',
              icon: 'keyboard',
              icon_color: '#a57685'
            },
            {
              name: 'r/programming',
              url: 'https://www.reddit.com/r/programming/'
            }
          ]
        },
        {
          name: 'blogs',
          links: [
            {
              name: 'fasterthanli',
              url: 'https://fasterthanli.me/articles',
              icon: 'anchor'
            },
            {
              name: 'dev.to',
              url: 'https://dev.to'
            },
            {
              name: 'mataroa.blog',
              url: 'https://collection.mataroa.blog',
            }
          ]
        },
        {
          name: 'misc',
          links: [
            {
              name: 'post office',
              url: 'http://afternoon.dynu.com/letterbox.html',
              icon: 'mailbox'
            },
            {
              name: 'mozilla webdev',
              url: 'https://developer.mozilla.org/en-US/',
              icon: 'notebook',
              icon_color: '#1e90ff'
            },
            {
              name: 'rust docs',
              url: 'https://doc.rust-lang.org/book/',
              icon: 'notebook',
              icon_color: '#977a3a'
            }
          ]
        }
      ]
    }]
});
