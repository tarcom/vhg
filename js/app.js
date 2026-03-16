/* ============================================
   VHG.dk — Single Page Application
   ============================================ */

// =============================================
// SVG ICONS
// =============================================
const ICONS = {
  mail: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m2 7 10 6 10-6"/></svg>',
  phone: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>',
  pdf: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6zm-1 2 5 5h-5V4zM9.998 14.768c.083-.335.577-.354.577-.354s.601.084 1.205.335c.085.014.168.029.252.046-.59.1-1.257.243-1.907.43-.128-.168-.24-.321-.127-.457zm5.139 1.677c-.222-.169-.662-.354-.662-.354s.478-.083.762-.083.577.098.577.211c0 .296-.677.226-.677.226zm-5.891.578s-.198.127-.226.155c-.717.423-2.022 1.127-2.306.465-.085-.197.014-.662.888-1.17.944-.55 1.636-.789 1.636-.789l.008.008zm4.517-1.043c-.492-.254-1.6-.338-2.053-.352a8.012 8.012 0 0 1-.732-.676c-.395-.45-.675-.874-.675-.874s.084-.605.112-.944c.042-.507.07-1.156-.155-1.452-.197-.267-.605-.31-.747-.253-.197.084-.31.38-.253.887.056.493.324 1.184.324 1.184s-.31.901-.732 1.833c-.423.93-.691 1.452-.691 1.452s-.873.367-1.283.649c-.662.45-1.086.944-1.142 1.283-.042.254.028.578.408.578s.93-.507 1.579-1.467c0 0 .93-.31 1.396-.437.465-.127 1.057-.253 1.057-.253s1.015.578 1.762.691c.747.113 1.241-.028 1.339-.31.099-.282-.099-.465-.514-.69z"/></svg>',
  facebook: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>',
  instagram: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>',
  external: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="14" height="14"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>',
  arrow: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16"><polyline points="9 18 15 12 9 6"/></svg>'
};

// =============================================
// DATA: Navigation (matches old site order)
// =============================================
const UTILITY_NAV = [
  { label: 'Om VHG', children: [
    { label: 'Kalender', href: '#/kalender' },
    { label: 'Bestyrelsen', href: '#/om-vhg/bestyrelsen' },
    { label: 'Referat', href: '#/om-vhg/referat' },
    { label: 'Vedtægter', href: '#/om-vhg/vedtaegter' },
    { label: 'Video', href: '#/om-vhg/video' },
    { label: 'Find os', href: '#/om-vhg/find-os' },
    { label: 'Sponsorer', href: '#/om-vhg/sponsorer' }
  ]},
  { label: 'Kontakt', href: '#/kontakt' },
  { label: 'Facebook', href: '#/some' },
  { label: 'Cafeen', href: '#/cafeen' },
  { label: 'Conventus Login', href: 'https://www.conventus.dk/medlemslogin/index.php?forening=1212&msg=1', external: true }
];

const SPORT_NAV = [
  { label: 'Badminton', href: '#/badminton', children: [
    { label: 'Tilmelding', href: '#/badminton/tilmelding' },
    { label: 'Bestyrelsen', href: '#/badminton/bestyrelsen' },
    { label: 'Træningstider', href: '#/badminton/traeningstider' },
    { label: 'Information', href: '#/badminton/information' }
  ]},
  { label: 'Bordtennis', href: '#/bordtennis', children: [
    { label: 'Tilmelding', href: '#/bordtennis/tilmelding' },
    { label: 'Bestyrelsen', href: '#/bordtennis/bestyrelsen' },
    { label: 'Træningstider', href: '#/bordtennis/traeningstider' }
  ]},
  { label: 'E-sport', href: '#/e-sport', children: [
    { label: 'Tilmelding', href: '#/e-sport/tilmelding' },
    { label: 'Bestyrelsen', href: '#/e-sport/bestyrelsen' }
  ]},
  { label: 'Floorball', href: '#/floorball', children: [
    { label: 'Tilmelding', href: '#/floorball/tilmelding' },
    { label: 'Bestyrelsen', href: '#/floorball/bestyrelsen' }
  ]},
  { label: 'Fodbold', href: '#/fodbold', children: [
    { label: 'Kontingent & Tilmelding', href: '#/fodbold/kontingent' },
    { label: 'Bestyrelsen', href: '#/fodbold/bestyrelsen' },
    { label: 'Træningstider', href: '#/fodbold/traeningstider' },
    { label: 'Senior', href: '#/fodbold/senior' },
    { label: 'Børn & Ungdom', href: '#/fodbold/boern-ungdom' }
  ]},
  { label: 'Gymnastik', href: '#/gymnastik', children: [
    { label: 'Tilmelding', href: '#/gymnastik/tilmelding' },
    { label: 'Bestyrelsen', href: '#/gymnastik/bestyrelsen' }
  ]},
  { label: 'Håndbold', href: '#/haandbold', children: [
    { label: 'Kontingent & Tilmelding', href: '#/haandbold/kontingent' },
    { label: 'Bestyrelsen', href: '#/haandbold/bestyrelsen' },
    { label: 'Antibulli politik', href: '#/haandbold/antibulli' },
    { label: 'Sponsor-concept', href: '#/haandbold/sponsor-concept' },
    { label: 'Tøj-koncept', href: '#/haandbold/toej-koncept' },
    { label: 'Træningstider', href: '#/haandbold/traeningstider' },
    { label: 'Trænere', href: '#/haandbold/traenere' }
  ]},
  { label: 'Skateklub', href: '#/skateklub', children: [
    { label: 'Tilmelding', href: '#/skateklub/tilmelding' },
    { label: 'Bestyrelsen', href: '#/skateklub/bestyrelsen' }
  ]},
  { label: 'Disc Golf', href: '#/disc-golf', children: [
    { label: 'Tilmelding', href: '#/disc-golf/tilmelding' },
    { label: 'Bestyrelsen', href: '#/disc-golf/bestyrelsen' },
    { label: 'Kort', href: '#/disc-golf/kort' }
  ]}
];

// Combined NAV for sub-nav lookups
const ALL_NAV = [...UTILITY_NAV, ...SPORT_NAV];

// =============================================
// DATA: Sport images
// =============================================
const SPORT_IMAGES = {
  'badminton': 'assets/images/afdelinger/badminton.png',
  'bordtennis': 'assets/images/afdelinger/bordtennis.png',
  'disc-golf': 'assets/images/afdelinger/disc-golf.png',
  'e-sport': 'assets/images/afdelinger/esport.png',
  'floorball': 'assets/images/afdelinger/floorball.png',
  'fodbold': 'assets/images/afdelinger/fodbold.png',
  'gymnastik': 'assets/images/afdelinger/gym.png',
  'haandbold': 'assets/images/afdelinger/h%C3%A5ndbold.png',
  'skateklub': 'assets/images/afdelinger/skate.png'
};

// =============================================
// DATA: Sports
// =============================================


const SPORTS = {
  badminton: {
    name: 'Badminton', icon: '🏸',
    desc: 'Badminton for alle aldre og niveauer — fra nybegyndere til erfarne spillere. Vi tilbyder motionist-, ungdom- og seniorhold i Vester Hassing Hallen.',
    facebook: 'https://www.facebook.com/VesterHassingGF',
    board: [
      { title: 'Formand', name: 'Claus René Mikkelsen', email: 'clmik8@gmail.com' },
      { title: 'Næstformand', name: 'Torben Petersen', email: 'torben@tpe.dk' },
      { title: 'Kasserer', name: 'Morten Strøm Pedersen', email: 'mortenstrompedersen@gmail.com' }
    ],
    conventus: 'https://www.conventus.dk/dataudv/www/holdoversigt2.php?foreningsid=1212&afdelingsid=8191&kolone1_width=35&kolone2_width=25&min_height=250&handelsbetingelser=1&skjul_nyt_medlem=0&skjul_allerede_medlem=0'
  },
  bordtennis: {
    name: 'Bordtennis', icon: '🏓',
    desc: 'Bordtennis i VHG — hyggeligt og aktivt for børn, unge og voksne. Vi spiller i hallen og der er plads til alle niveauer.',
    facebook: 'https://www.facebook.com/profile.php?id=100054206513655',
    board: [
      { title: 'Formand', name: 'Per Kristensen', email: 'Murerper@hotmail.dk', phone: '25 58 20 05' },
      { title: 'Næstformand', name: 'Jesper Strømberg Andersen', email: 'grandisvej19@dlgmail.dk', phone: '25472048' },
      { title: 'Kasserer', name: 'Søren Roesdahl' }
    ],
    conventus: 'https://www.conventus.dk/dataudv/www/holdoversigt2.php?foreningsid=1212&afdelingsid=8246&kolone1_width=35&kolone2_width=25&min_height=250&handelsbetingelser=1&skjul_nyt_medlem=0&skjul_allerede_medlem=0'
  },
  'e-sport': {
    name: 'E-sport', icon: '🎮',
    desc: 'E-sport i VHG — gaming-fællesskab for alle aldre. Kom og vær med til spændende turneringer og fælles gaming-aftener.',
    facebook: 'https://www.facebook.com/profile.php?id=100063446331721',
    board: [
      { title: 'Formand', name: 'Nikolaj Søndergaard Sørensen', email: 'Nikolaj0299@gmail.com', phone: '29253795' },
      { title: 'Næstformand / Kasserer', name: 'Anders Hougaard', email: 'Esport@vhg.dk', phone: '61776253' },
      { title: 'Bestyrelsesmedlem', name: 'Victor Nielsen', email: 'esport@vhg.dk', phone: '30239106' },
      { title: 'Bestyrelsesmedlem', name: 'Jonas Bundgaard Kristensen', email: 'jonsekristensen@hotmail.com', phone: '22769304' }
    ],
    conventus: 'https://www.conventus.dk/dataudv/www/holdoversigt2.php?foreningsid=1212&afdelingsid=6018&kolone1_width=35&kolone2_width=25&min_height=250&handelsbetingelser=1&skjul_nyt_medlem=0&skjul_allerede_medlem=0'
  },
  floorball: {
    name: 'Floorball', icon: '🏒',
    desc: 'Floorball i VHG — en sjov og actionfyldt sport for hele familien. Hurtigt spil, godt fællesskab.',
    facebook: 'https://www.facebook.com/profile.php?id=100046867541094',
    board: [
      { title: 'Formand', name: 'Anders Bech Jensen', email: 'losan@live.dk' },
      { title: 'Næstformand', name: 'Helle Marie Rønnov', email: 'hellemarieroennov@gmail.com', phone: '42208824' },
      { title: 'Kasserer', name: 'Mikael Andersen', email: 'mikael-a@live.dk', phone: '22771815' },
      { title: 'Bestyrelsesmedlem', name: 'Jonas Bundgaard Kristensen', email: 'jonsekristensen@hotmail.com', phone: '22769304' },
      { title: 'Bestyrelsesmedlem', name: 'Simon Simonsen', email: 'Simon@vhg.dk' }
    ],
    conventus: 'https://www.conventus.dk/dataudv/www/holdoversigt2.php?foreningsid=1212&afdelingsid=8247&kolone1_width=35&kolone2_width=25&min_height=250&handelsbetingelser=1&skjul_nyt_medlem=0&skjul_allerede_medlem=0'
  },
  gymnastik: {
    name: 'Gymnastik', icon: '🤸',
    desc: 'Gymnastik for alle aldre — fra de mindste til voksne. Vi tilbyder et bredt udvalg af hold med fokus på bevægelse, styrke og fællesskab.',
    facebook: 'https://www.facebook.com/VesterHassingGF',
    board: [
      { title: 'Formand', name: 'Inger Marie Badsberg', email: 'imbadsberg@gmail.com', phone: '20808201' },
      { title: 'Kasserer', name: 'Rikke Pedersen', email: 'VHgymnastik@outlook.dk', phone: '20879931' },
      { title: 'Bestyrelsesmedlem', name: 'Trine Bove Faulkner', email: 'trinebove@hotmail.com', phone: '31477661' },
      { title: 'Bestyrelsesmedlem', name: 'Dorte Hjørringgaard', email: 'dortelang@gmail.com', phone: '29877609' }
    ],
    conventus: 'https://www.conventus.dk/dataudv/www/holdoversigt2.php?foreningsid=1212&afdelingsid=7250&kolone1_width=35&kolone2_width=25&min_height=250&handelsbetingelser=1&skjul_nyt_medlem=0&skjul_allerede_medlem=0'
  },
  skateklub: {
    name: 'Skateklub', icon: '🛹',
    desc: 'VHG Skateklub — et fedt fællesskab for alle der elsker at skate. Alle aldre og niveauer er velkomne.',
    facebook: 'https://www.facebook.com/VHGSkateklub',
    board: [
      { title: 'Formand', name: 'Mikael Ivan Vinther Christensen', email: 'mikael.ivan.christensen@gmail.com', phone: '23685559' },
      { title: 'Næstformand', name: 'Lasse Jensen Christensen', email: 'Mail@tslasse.dk', phone: '22670465' },
      { title: 'Kasserer', name: 'Kasper Lykkegaard Andersen', email: 'mr.lykkegaard@hotmail.com', phone: '71903049' },
      { title: 'Bestyrelsesmedlem', name: 'Mathias Windfeldt', email: 'mathias.w.nielsen@hotmail.com', phone: '4837149' },
      { title: 'Bestyrelsesmedlem', name: 'Chris Christensen', email: 'rbookchr84@gmail.com', phone: '26709783' }
    ],
    conventus: 'https://www.conventus.dk/dataudv/www/holdoversigt2.php?foreningsid=1212&afdelingsid=61583&kolone1_width=35&kolone2_width=25&min_height=250&handelsbetingelser=1&skjul_nyt_medlem=0&skjul_allerede_medlem=0'
  },
  'disc-golf': {
    name: 'Disc Golf', icon: '🥏',
    desc: 'Disc Golf i VHG — en udendørs sport for hele familien. Spil på vores lokale bane og nyd naturen.',
    facebook: 'https://www.facebook.com/groups/1832314803794784',
    board: [
      { title: 'Formand', name: 'Anders Bech Jensen', email: 'losan@live.dk' },
      { title: 'Næstformand', name: 'Helle Marie Rønnov', email: 'hellemarieroennov@gmail.com', phone: '42208824' },
      { title: 'Kasserer', name: 'Mikael Andersen', email: 'mikael-a@live.dk', phone: '22771815' },
      { title: 'Bestyrelsesmedlem', name: 'Jonas Bundgaard Kristensen', email: 'jonsekristensen@hotmail.com', phone: '22769304' }
    ],
    conventus: 'https://www.conventus.dk/dataudv/www/holdoversigt2.php?foreningsid=1212&afdelingsid=8247&kolone1_width=35&kolone2_width=25&min_height=250&handelsbetingelser=1&skjul_nyt_medlem=0&skjul_allerede_medlem=0'
  }
};

const FODBOLD = {
  facebook: 'https://www.facebook.com/VHGFodbold',
  board: [
    { title: 'Formand', name: 'Marc Agerbo Jakobsen', email: 'agerbo100@gmail.com', phone: '30253680' },
    { title: 'Kasserer', name: 'Jesper Andreas Christiansen', email: 'Jesperachristiansen@gmail.com', phone: '50479232' },
    { title: 'Bestyrelsesmedlem', name: 'Lasse Burri Gram-Hansen', email: 'lasse@gram-hansen.dk', phone: '30241452' },
    { title: 'Bestyrelsesmedlem', name: 'Jimmi Thomsen', email: 'thomsen.jimmi@hotmail.com', phone: '+45 27586639' }
  ],
  fees: [
    { hold: 'Senior', pris: '750,-' },
    { hold: 'Senior uden træning / 7-mands', pris: '400,-' },
    { hold: 'U17 drenge (2009/2010)', pris: '500,-' },
    { hold: 'U15 (2011)', pris: '500,-' },
    { hold: 'U14 (2012)', pris: '500,-' },
    { hold: 'U13 (2013)', pris: '400,-' },
    { hold: 'U12 (2014)', pris: '400,-' },
    { hold: 'U11 (2015)', pris: '400,-' },
    { hold: 'U10 (2016)', pris: '250,-' },
    { hold: 'U9 (2017)', pris: '250,-' },
    { hold: 'U8 (2018)', pris: '250,-' },
    { hold: 'U7 (2019)', pris: '200,-' },
    { hold: 'Begynderbold (2020-2022)', pris: '200,-' }
  ],
  seniorTeams: [
    { name: 'Herrer Serie 2', desc: 'Herrernes førstehold i Serie 2.' },
    { name: 'Herrer Serie 4', desc: 'Herrernes andethold i Serie 4.' },
    { name: 'Kvinder 7-mands', desc: 'Kvindernes 7-mands hold.' }
  ],
  youthTeams: [
    'U19 drenge (2008/2009)', 'U16 drenge (2010/2011)', 'U15 piger (2011-2013)',
    'U14 drenge (2012)', 'U13 drenge (2013)',
    'U12 drenge (2014)', 'U12 piger (2014/2015)', 'U11 drenge (2015)',
    'U10 drenge (2016)', 'U10 piger (2016/2017)', 'U9 drenge (2017)',
    'U8 drenge (2018)', 'U8 piger (2018/2019)', 'U7 mix (2019)', 'Børnebold (2020-2022)'
  ],
  training: [
    { hold: 'Herrer Serie 2', tider: 'Tirsdag: Vester Hassing 19:00-20:30 · Torsdag: Gandrup 19:00-20:30' },
    { hold: 'Herrer Serie 4', tider: 'Tirsdag: Vester Hassing 19:00-20:30 · Torsdag: Gandrup 19:00-20:30' },
    { hold: 'Kvinder 7-mands', tider: 'Onsdag: Langholt 18:00-19:30' },
    { hold: 'U19 drenge (2008/2009)', tider: 'Tirsdag: Vester Hassing 17:00-18:30 · Torsdag: Gandrup 17:00-18:30' },
    { hold: 'U16 drenge (2010/2011)', tider: 'Tirsdag: Vester Hassing 17:00-18:30 · Torsdag: Gandrup 17:00-18:30' },
    { hold: 'U15 piger (2011-2013)', tider: 'Mandag: Holtet 18:00-19:30 · Torsdag: Vester Hassing 18:00-19:30' },
    { hold: 'U14 drenge (2012)', tider: 'Mandag: Gandrup 16:30-18:00 · Torsdag: Hals 16:30-18:00' },
    { hold: 'U13 drenge (2013)', tider: 'Tirsdag: Vester Hassing 16:30-18:00 · Torsdag: Holtet 17:00-18:30' },
    { hold: 'U12 drenge (2014)', tider: 'Tirsdag: Vester Hassing 16:30-18:00 · Torsdag: Hals 16:30-18:00' },
    { hold: 'U11 drenge (2015)', tider: 'Tirsdag: Vester Hassing 16:30-18:00 · Torsdag: Hals 16:30-18:00' },
    { hold: 'U10 drenge (2016)', tider: 'Mandag: Vester Hassing 17:30-18:30 · Onsdag: Hals 17:30-18:30' },
    { hold: 'U9 drenge (2017)', tider: 'Mandag: Vester Hassing 17:30-18:30 · Onsdag: Hals 17:30-18:30' },
    { hold: 'U8 drenge (2018)', tider: 'Onsdag: Vester Hassing 16:30-17:30' },
    { hold: 'U7 mix (2019)', tider: 'Mandag: Vester Hassing 16:30-17:15' },
    { hold: 'Børnebold (2020-2022)', tider: 'Tirsdag: Vester Hassing 16:30-17:15' }
  ]
};

const HAANDBOLD = {
  facebook: 'https://www.facebook.com/vghhandbold',
  board: [
    { title: 'Formand', name: 'Berit Andersen', email: 'beritandersen@hotmail.com', phone: '51 22 91 22' },
    { title: 'Kasserer', name: 'Morten Kam Dahl Nielsen', email: 'morten_nielsen817@hotmail.com', phone: '61 10 91 65' },
    { title: 'Sekretær', name: 'Kristian Staurup Lassen', email: 'kristian.s.lassen@hotmail.com', phone: '60 43 54 66' },
    { title: 'Menigt medlem', name: 'Christian Kam Dahl Nielsen', email: 'christiannielsen2010@hotmail.com', phone: '40 16 53 28' }
  ],
  fees: [
    { hold: 'U7', aargang: '2018/2019', pris: '250,-' },
    { hold: 'U9', aargang: '2016/2017', pris: '250,-' },
    { hold: 'U11', aargang: '2014/2015', pris: '400,-' },
    { hold: 'U13', aargang: '2012/2013', pris: '400,-' },
    { hold: 'U15', aargang: '2010/2011', pris: '550,-' },
    { hold: 'U17', aargang: '2008/2009', pris: '550,-' },
    { hold: 'U19/SU-senior', aargang: '2005/2007', pris: '650,-' },
    { hold: 'Senior', aargang: '', pris: '750,-' }
  ],
  training: [
    { hold: 'Damesenior', tider: 'Tirsdag 20:00-21:30 (Gandrup) · Torsdag 19:45-21:15 (V. Hassing)' },
    { hold: 'Herresenior', tider: 'Tirsdag 20:00-21:30 (V. Hassing) · Torsdag 20:00-21:30 (Gandrup)' },
    { hold: 'U15 piger (2010-2011)', tider: 'Tirsdag 19:00-20:00 (Gandrup) · Torsdag 18:15-19:45 (V. Hassing)' },
    { hold: 'U13 piger (2012-2013)', tider: 'Tirsdag 18:30-20:00 (V. Hassing) · Torsdag 16:00-17:30 (Gandrup)' },
    { hold: 'U13 drenge (2012-2013)', tider: 'Tirsdag 17:15-18:30 (V. Hassing) · Torsdag 18:45-20:00 (Gandrup)' },
    { hold: 'U11 piger (2014-2015)', tider: 'Tirsdag 16:00-17:15 (V. Hassing) · Torsdag 17:30-18:45 (Gandrup)' },
    { hold: 'U11 drenge (2014-2015)', tider: 'Tirsdag 17:45-19:00 (Gandrup) · Torsdag 17:00-18:15 (V. Hassing)' },
    { hold: 'U9 mix (2016-2017)', tider: 'Tirsdag 16:45-17:45 (Gandrup) · Torsdag 16:00-17:00 (V. Hassing)' },
    { hold: 'U7 mix (2018-2019)', tider: 'Tirsdag 16:00-17:00 (Gandrup) · Torsdag 16:00-17:00 (V. Hassing)' }
  ],
  trainers: [
    { group: 'Herresenior', people: [
      { name: 'Mads Tuure Pedersen', email: 'madstuure@gmail.com', phone: '20 91 96 64' },
      { name: 'Anders Kaagaard', email: 'anders.kaagaard@gmail.com', phone: '23 29 90 25' }
    ]},
    { group: 'Damesenior', people: [
      { name: 'Berit Andersen', email: 'beritandersen@hotmail.com', phone: '51 22 91 22' }
    ]},
    { group: 'U15 piger', people: [
      { name: 'Morten Kam Dahl Nielsen', email: 'morten_nielsen817@hotmail.com', phone: '61 10 91 65' },
      { name: 'Johanne Mrzyglod', email: 'johanne.mrzyglod@gmail.com', phone: '81 54 41 82' }
    ]},
    { group: 'U13 drenge', people: [
      { name: 'Betinna Hedegaard Nielsen', email: 'famhedegaardn@gmail.com', phone: '29 25 32 20' },
      { name: 'Oscar Vingaard Kristensen', email: 'oscarvkristensen@gmail.com', phone: '30 96 04 32' }
    ]},
    { group: 'U13 piger', people: [
      { name: 'Christian Kam Dahl Nielsen', email: 'christiannielsen2010@hotmail.com', phone: '40 16 53 28' },
      { name: 'Cathrine Bech Gaarn', email: 'cathgaarn@gmail.com', phone: '93 89 67 44' }
    ]},
    { group: 'U11 drenge', people: [
      { name: 'Morten Kam Dahl Nielsen', email: 'morten_nielsen817@hotmail.com', phone: '61 10 91 65' },
      { name: 'Nikolai Wiederholt Andersen', email: 'Nikolaiwiederholt@gmail.com', phone: '21 97 17 60' },
      { name: 'Rasmus Rydder Sørensen', email: 'Ralle.rydder@gmail.com', phone: '71 77 04 56' }
    ]},
    { group: 'U11 piger', people: [
      { name: 'Mark Darren Hæk', email: 'markhaek@gmail.com', phone: '50 38 78 96' }
    ]},
    { group: 'U9 mix (V. Hassing)', people: [
      { name: 'Helle Lybæk', email: 'helle.lybaek22@gmail.com', phone: '22 44 20 11' },
      { name: 'Mette Nielsen', email: 'me_nielsen@hotmail.com', phone: '28 79 87 41' },
      { name: 'Amalie Kam Dahl Dueholm' },
      { name: 'Jessica Nedergaard Anthonsen', email: 'jessic0907@hotmail.com', phone: '28 83 29 17' }
    ]},
    { group: 'U7 mix (V. Hassing)', people: [
      { name: 'Morten Kam Dahl Nielsen', email: 'morten_nielsen817@hotmail.com', phone: '61 10 91 65', title: 'Kontaktperson' },
      { name: 'Liva Østergaard Larsen', email: 'livaostergaardlarsen@gmail.com', phone: '93 92 68 81' },
      { name: 'Majamarie Toft Nørgaard', email: 'majamarietn@gmail.com', phone: '28 96 91 11' }
    ]}
  ]
};

const KALENDER_SPORT_COLORS = {
  'badminton': '#1E88E5',
  'bordtennis': '#6D4C41',
  'e-sport': '#8E24AA',
  'floorball': '#00897B',
  'fodbold': '#43A047',
  'gymnastik': '#F4511E',
  'haandbold': '#E53935',
  'skateklub': '#5E35B1',
  'disc-golf': '#FB8C00'
};

const HOVEDBESTYRELSEN = [
  { title: 'Formand', name: 'Allan Skov', email: 'formand@vhg.dk', phone: '22167599', photo: 'assets/images/bestyrelse/allan-skov.jpg' },
  { title: 'Næstformand', name: 'Lars Jakobsen', email: 'lkj@evt.dk', photo: 'assets/images/bestyrelse/lars-jakobsen.jpg' },
  { title: 'Kasserer', name: 'Jonas Bundgaard Kristensen', email: 'jonsekristensen@hotmail.com', phone: '22769304', photo: 'assets/images/bestyrelse/jonas-bundgaard.jpg' },
  { title: 'Sekretær', name: 'Anne-Britt Andersen', email: 'annebrittandersenc@gmail.com', phone: '26 11 68 70', photo: 'assets/images/bestyrelse/anne-britt-andersen.jpg' },
  { title: 'Suppleant', name: 'Marianne Vedel', email: 'majulle@hotmail.com', photo: 'assets/images/bestyrelse/marianne-vedel.jpg' },
  { title: 'Medlem (Formand håndbold)', name: 'Berit Andersen', email: 'beritandersen@hotmail.com', phone: '51 22 91 22' },
  { title: 'Medlem (Formand fodbold)', name: 'Marc Agerbo Jakobsen', email: 'agerbo100@gmail.com', phone: '30253680' },
  { title: 'Medlem (Formand badminton)', name: 'Claus René Mikkelsen', email: 'clmik8@gmail.com' },
  { title: 'Medlem (Formand e-sport)', name: 'Nikolaj Søndergaard Sørensen', email: 'Nikolaj0299@gmail.com', phone: '29253795', photo: 'assets/images/bestyrelse/nikolaj-soendergaard.jpg' },
  { title: 'Medlem (Formand skateklub)', name: 'Mikael Ivan Vinther Christensen', email: 'mikael.ivan.christensen@gmail.com', phone: '23685559', photo: 'assets/images/bestyrelse/mikael-christensen.jpg' },
  { title: 'Medlem (Formand floorball)', name: 'Anders Bech Jensen', email: 'losan@live.dk' },
  { title: 'Medlem (Formand gymnastik)', name: 'Inger Marie Badsberg', email: 'imbadsberg@gmail.com', phone: '20808201', photo: 'assets/images/bestyrelse/inger-badsberg.jpg' },
  { title: 'Medlem (Formand bordtennis)', name: 'Per Kristensen', email: 'Murerper@hotmail.dk', phone: '25 58 20 05', photo: 'assets/images/bestyrelse/per-kristensen.jpg' }
];

const REFERATER = [
  { year: '2025', file: 'assets/pdf/generalforsamling-vhg-2025.pdf' },
  { year: '2024', file: 'assets/pdf/generalforsamling-vhg-2024-regerat.pdf' },
  { year: '2023', file: 'assets/pdf/referat2023.pdf' },
  { year: '2021', file: 'assets/pdf/referat-vhg-generalforsamling-2021_20_maj_.pdf' },
  { year: '2020', file: 'assets/pdf/referat.pdf' },
  { year: '2019', file: 'assets/pdf/pdf.pdf' },
  { year: '2018', file: 'assets/pdf/referat-fra-generalforsamling-d-21-03-2018.pdf' }
];

// =============================================
// HELPER FUNCTIONS
// =============================================
function esc(s) { if (!s) return ''; const d = document.createElement('div'); d.textContent = s; return d.innerHTML; }

function parseTimeToMinutes(value) {
  if (!value) return null;
  const m = String(value).trim().match(/^(\d{1,2})[:.](\d{2})$/);
  if (!m) return null;
  return (parseInt(m[1], 10) * 60) + parseInt(m[2], 10);
}

function minutesToClock(minutes) {
  const h = Math.floor(minutes / 60).toString().padStart(2, '0');
  const m = (minutes % 60).toString().padStart(2, '0');
  return `${h}:${m}`;
}

async function loadKalenderData() {
  const res = await fetch('assets/data/calendar-events.json?v=' + Date.now(), { cache: 'no-store' });
  if (!res.ok) throw new Error('Kunne ikke hente kalenderdata');
  const payload = await res.json();
  return Array.isArray(payload.events) ? payload.events : [];
}

async function refreshKalenderData() {
  const callEndpoint = async method => {
    const url = method === 'GET'
      ? `update-calendar.php?run=1&t=${Date.now()}`
      : 'update-calendar.php';
    const res = await fetch(url, {
      method,
      headers: { Accept: 'application/json' }
    });
    const raw = await res.text();
    let payload = null;
    try {
      payload = JSON.parse(raw);
    } catch (_) {
      payload = null;
    }

    if (!payload) {
      if (raw.includes('<?php')) {
        throw new Error('Serveren kører uden PHP. Start sitet med en PHP-server for at kunne opdatere kalenderen.');
      }
      throw new Error('Serveren returnerede ikke gyldig JSON fra update-calendar.php');
    }

    if (!res.ok || payload.ok !== true) {
      const msg = payload.error || `Kunne ikke opdatere kalenderen (HTTP ${res.status})`;
      const err = new Error(msg);
      err.httpStatus = res.status;
      throw err;
    }

    return payload;
  };

  try {
    return await callEndpoint('POST');
  } catch (err) {
    if (err && (err.httpStatus === 501 || err.httpStatus === 405)) {
      return callEndpoint('GET');
    }
    throw err;
  }
}

function parseTrainingLineToEvents(sport, sportLabel, hold, line) {
  const dayMap = {
    mandag: 'monday', tirsdag: 'tuesday', onsdag: 'wednesday', torsdag: 'thursday',
    fredag: 'friday', lørdag: 'saturday', søndag: 'sunday'
  };
  return String(line || '')
    .split('·')
    .map(part => part.trim())
    .map(part => {
      const m = part.match(/(Mandag|Tirsdag|Onsdag|Torsdag|Fredag|Lørdag|Søndag)\s*:?[^0-9]*(\d{1,2}[:.]\d{2})\s*-\s*(\d{1,2}[:.]\d{2})/i);
      if (!m) return null;
      const weekday = dayMap[m[1].toLowerCase()] || null;
      if (!weekday) return null;
      const fmt = t => {
        const [h, mm] = t.replace('.', ':').split(':');
        return `${String(parseInt(h, 10)).padStart(2, '0')}:${mm}`;
      };
      return {
        sport,
        sport_label: sportLabel,
        title: hold,
        weekday,
        start_time: fmt(m[2]),
        end_time: fmt(m[3]),
        period_start: null,
        period_end: null,
        price: null,
        available_spots: null,
        source_url: 'manual-fallback'
      };
    })
    .filter(Boolean);
}

function ensureMissingSportFallbacks(events) {
  const out = Array.isArray(events) ? [...events] : [];
  const present = new Set(out.map(e => e.sport));

  if (!present.has('fodbold') && Array.isArray(FODBOLD.training)) {
    FODBOLD.training.forEach(t => {
      out.push(...parseTrainingLineToEvents('fodbold', 'Fodbold', t.hold, t.tider));
    });
  }
  if (!present.has('haandbold') && Array.isArray(HAANDBOLD.training)) {
    HAANDBOLD.training.forEach(t => {
      out.push(...parseTrainingLineToEvents('haandbold', 'Håndbold', t.hold, t.tider));
    });
  }
  return out;
}

function getSportSignupHref(sport) {
  const map = {
    badminton: '#/badminton/tilmelding',
    bordtennis: '#/bordtennis/tilmelding',
    'e-sport': '#/e-sport/tilmelding',
    floorball: '#/floorball/tilmelding',
    fodbold: '#/fodbold/kontingent',
    gymnastik: '#/gymnastik/tilmelding',
    haandbold: '#/haandbold/kontingent',
    skateklub: '#/skateklub/tilmelding',
    'disc-golf': '#/disc-golf/tilmelding'
  };
  return map[sport] || '#/kontakt';
}

function assignLanes(dayEvents) {
  const sorted = [...dayEvents].sort((a, b) => a.startMin - b.startMin || a.endMin - b.endMin);
  const lanes = new Array(sorted.length).fill(0);
  for (let i = 0; i < sorted.length; i++) {
    const used = new Set();
    for (let j = 0; j < i; j++) {
      if (sorted[j].endMin > sorted[i].startMin) used.add(lanes[j]);
    }
    let lane = 0;
    while (used.has(lane)) lane++;
    lanes[i] = lane;
  }
  const totalLanes = new Array(sorted.length).fill(1);
  for (let i = 0; i < sorted.length; i++) {
    for (let j = 0; j < sorted.length; j++) {
      if (i !== j && sorted[j].startMin < sorted[i].endMin && sorted[j].endMin > sorted[i].startMin) {
        totalLanes[i] = Math.max(totalLanes[i], lanes[j] + 1);
      }
    }
  }
  return sorted.map((event, i) => ({ event, lane: lanes[i], totalLanes: totalLanes[i] }));
}

const MORNING_CUTOFF = 14 * 60; // 14:00

const ALL_DAYS = [
  { no: 1, name: 'Mandag', defaultOn: true },
  { no: 2, name: 'Tirsdag', defaultOn: true },
  { no: 3, name: 'Onsdag', defaultOn: true },
  { no: 4, name: 'Torsdag', defaultOn: true },
  { no: 5, name: 'Fredag', defaultOn: true },
  { no: 6, name: 'Lørdag', defaultOn: true },
  { no: 7, name: 'Søndag', defaultOn: true },
];
const DAY_INDEX = { monday:1, tuesday:2, wednesday:3, thursday:4, friday:5, saturday:6, sunday:7 };

function renderKalender(container, rawEvents, activeSports, showMorning, selectedDay, onToggleSport, onToggleMorning, onChangeDay) {
  const events = rawEvents
    .map(e => {
      const weekday = DAY_INDEX[String(e.weekday || '').toLowerCase()] || null;
      const startMin = parseTimeToMinutes(e.start_time);
      const endMin = parseTimeToMinutes(e.end_time);
      return { ...e, weekday, startMin, endMin, sport: e.sport || 'andet', sportLabel: e.sport_label || e.sport || 'Andet' };
    })
    .filter(e => e.weekday && e.weekday <= 7 && Number.isInteger(e.startMin) && Number.isInteger(e.endMin) && e.endMin > e.startMin)
    .sort((a, b) => a.startMin - b.startMin);

  if (!events.length) {
    container.innerHTML = '<div class="info-box"><h3>Ingen kalenderdata</h3><p>Der blev ikke fundet hold med ugedag og klokkeslæt i datafilen.</p></div>';
    return;
  }

  const today = new Date().toISOString().slice(0, 10);
  const activeEvents = events.filter(e => !e.period_end || e.period_end >= today);
  const baseVisibleEvents = (activeEvents.length ? activeEvents : events).filter(e => e.sport !== 'disc-golf');

  if (!activeSports || typeof activeSports.has !== 'function') {
    activeSports = new Set(baseVisibleEvents.map(e => e.sport));
  }

  const legendMap = new Map();
  baseVisibleEvents.forEach(e => {
    if (!legendMap.has(e.sport)) legendMap.set(e.sport, { key: e.sport, label: e.sportLabel });
  });

  const visibleEvents = baseVisibleEvents
    .filter(e => e.weekday === selectedDay)
    .filter(e => activeSports.has(e.sport))
    .filter(e => showMorning || e.startMin >= MORNING_CUTOFF);

  // --- Sport toggles row ---
  const togglesHTML = `
    <div class="kalender-toggles">
      ${Array.from(legendMap.values()).map(item => {
        const on = activeSports.has(item.key);
        const col = KALENDER_SPORT_COLORS[item.key] || '#607D8B';
        return `
          <label class="kalender-toggle" data-sport="${esc(item.key)}">
            <input class="kalender-toggle-input" type="checkbox" ${on ? 'checked' : ''}>
            <span class="kalender-toggle-track" style="--sport-color:${col}"></span>
            <span class="kalender-toggle-label">${esc(item.label)}</span>
          </label>
        `;
      }).join('')}
    </div>
  `;

  // --- Day radio buttons (below sports) ---
  const metaTogglesHTML = `
    <div class="kalender-meta-controls">
      <div class="kalender-day-radio-wrap">
        <span class="kalender-day-prefix">Vis kalender for:</span>
        <div class="kalender-day-radios">
          ${ALL_DAYS.map(d => `
            <label class="kalender-day-radio ${d.no === selectedDay ? 'is-active' : ''}">
              <input type="radio" name="kalender-day" value="${d.no}" ${d.no === selectedDay ? 'checked' : ''} data-day-radio>
              <span>${d.name}</span>
            </label>
          `).join('')}
        </div>
      </div>
    </div>
  `;

  if (!visibleEvents.length) {
    const msg = 'Ingen hold denne dag med nuværende filtre — prøv en anden dag eller juster idrætsgrene.';
    container.innerHTML = togglesHTML + metaTogglesHTML + `<div class="info-box"><p>${msg}</p></div>`;
    wireKalenderControls(container, onToggleSport, onToggleMorning, onChangeDay);
    return;
  }

  const earliest = Math.min(...visibleEvents.map(e => e.startMin));
  const latest = Math.max(...visibleEvents.map(e => e.endMin));
  const dayStart = Math.max(6 * 60, Math.floor(earliest / 30) * 30);
  const dayEnd = Math.min(23 * 60, Math.ceil(latest / 30) * 30 + 30);
  const pixelsPerMinute = 1.9;
  const gridHeight = Math.max(340, Math.round((dayEnd - dayStart) * pixelsPerMinute));
  const hourLines = [];
  for (let t = dayStart; t <= dayEnd; t += 60) hourLines.push(t);

  const laned = assignLanes([...visibleEvents].sort((a, b) => a.startMin - b.startMin || a.weekday - b.weekday));

  container.innerHTML = togglesHTML + metaTogglesHTML + `
    <div class="kalender-week-wrap kalender-week-wrap-single">
      <div class="kalender-time-col" style="height:${gridHeight}px">
        ${hourLines.map(t => `<div class="kalender-time-mark" style="top:${Math.round((t - dayStart) * pixelsPerMinute)}px">${minutesToClock(t)}</div>`).join('')}
      </div>
      <div class="kalender-day-grid kalender-single-day-grid" style="height:${gridHeight}px">
        ${hourLines.map(t => `<div class="kalender-hour-line" style="top:${Math.round((t - dayStart) * pixelsPerMinute)}px"></div>`).join('')}
        ${laned.map(({ event: e, lane, totalLanes }) => {
          const top = Math.round((e.startMin - dayStart) * pixelsPerMinute);
          const height = Math.max(26, Math.round((e.endMin - e.startMin) * pixelsPerMinute));
          const color = KALENDER_SPORT_COLORS[e.sport] || '#607D8B';
          const overlapRatio = 0.18;
          const laneWidth = 92 / (1 + ((totalLanes - 1) * (1 - overlapRatio)));
          const laneStep = laneWidth * (1 - overlapRatio);
          const lw = laneWidth.toFixed(2);
          const ll = (0.5 + (lane * laneStep)).toFixed(2);
          const signupHref = e.signup_url || getSportSignupHref(e.sport);
          const external = /^https?:\/\//.test(signupHref);
          const hoverInfo = e.info_text && !String(e.info_text).toLowerCase().includes('tider fra lokal fallback')
            ? e.info_text
            : '';
          const hover = [
            hoverInfo,
            e.price ? `Pris: ${e.price}` : '',
            e.available_spots || '',
            e.period_start && e.period_end ? `Periode: ${e.period_start} - ${e.period_end}` : ''
          ].filter(Boolean).join(' | ');
          return `
            <div class="kalender-event" title="${esc(hover)}" style="top:${top}px;height:${height}px;border-left-color:${color};left:${ll}%;width:${lw}%;z-index:${10 + lane}">
              <a class="kalender-event-title" href="${esc(signupHref)}" ${external ? 'target="_blank" rel="noopener"' : ''}>${esc(e.title || 'Hold')}</a>
            </div>
          `;
        }).join('')}
      </div>
    </div>
  `;

  wireKalenderControls(container, onToggleSport, onToggleMorning, onChangeDay);
}

function wireKalenderControls(container, onToggleSport, onToggleMorning, onChangeDay) {
  container.querySelectorAll('.kalender-toggle[data-sport]').forEach(label => {
    label.querySelector('.kalender-toggle-input').addEventListener('change', () => {
      onToggleSport(label.getAttribute('data-sport'));
    });
  });

  container.querySelectorAll('[data-day-radio]').forEach(radio => {
    radio.addEventListener('change', () => {
      if (radio.checked) onChangeDay(parseInt(radio.value, 10));
    });
  });
}

async function initKalenderPage(mountId = 'kalender-root') {
  const mount = document.getElementById(mountId);
  if (!mount) return;
  mount.innerHTML = '<div class="info-box"><h3>Indlæser kalender...</h3><p>Henter senest cachede Conventus-data.</p></div>';
  try {
    const events = ensureMissingSportFallbacks(await loadKalenderData());
    const activeSports = new Set(events.filter(e => e.sport !== 'disc-golf').map(e => e.sport));
    let showMorning = false;
    const jsDay = new Date().getDay(); // 0=Sunday
    let selectedDay = jsDay === 0 ? 7 : jsDay;

    // If there are no activities today, default to the next day that has activities.
    const today = new Date().toISOString().slice(0, 10);
    const prepared = events
      .map(e => ({
        ...e,
        weekday: DAY_INDEX[String(e.weekday || '').toLowerCase()] || null,
        startMin: parseTimeToMinutes(e.start_time),
        endMin: parseTimeToMinutes(e.end_time),
        sport: e.sport || 'andet'
      }))
      .filter(e => e.weekday && e.weekday <= 7 && e.sport !== 'disc-golf' && Number.isInteger(e.startMin) && Number.isInteger(e.endMin) && e.endMin > e.startMin);
    const activePrepared = prepared.filter(e => !e.period_end || e.period_end >= today);
    const baselinePrepared = activePrepared.length ? activePrepared : prepared;
    const daysWithActivities = new Set(baselinePrepared.map(e => e.weekday));
    if (daysWithActivities.size && !daysWithActivities.has(selectedDay)) {
      for (let step = 1; step <= 7; step += 1) {
        const next = ((selectedDay - 1 + step) % 7) + 1;
        if (daysWithActivities.has(next)) {
          selectedDay = next;
          break;
        }
      }
    }

    const morningInput = document.querySelector('[data-morning-toggle-home]');
    const rerender = () => {
      renderKalender(mount, events, activeSports, showMorning, selectedDay,
        sportKey => {
          if (activeSports.has(sportKey)) activeSports.delete(sportKey);
          else activeSports.add(sportKey);
          rerender();
        },
        () => { showMorning = !showMorning; rerender(); },
        dayNo => { selectedDay = dayNo; rerender(); }
      );
    };

    if (morningInput) {
      morningInput.checked = showMorning;
      morningInput._onToggleMorning = () => {
        showMorning = morningInput.checked;
        rerender();
      };
      if (!morningInput.dataset.boundToggle) {
        morningInput.addEventListener('change', () => {
          if (typeof morningInput._onToggleMorning === 'function') {
            morningInput._onToggleMorning();
          }
        });
        morningInput.dataset.boundToggle = '1';
      }
    }

    rerender();
  } catch (err) {
    mount.innerHTML = '<div class="info-box"><h3>Kalender kunne ikke vises</h3><p>Kunne ikke hente kalenderdata. Prøv igen senere.</p></div>';
  }
}

function personCardHTML(p) {
  let contact = '';
  if (p.email) contact += `<a href="mailto:${esc(p.email)}">${ICONS.mail}<span>${esc(p.email)}</span></a>`;
  if (p.phone) contact += `<a href="tel:${esc(p.phone.replace(/\s/g,''))}">${ICONS.phone}<span>${esc(p.phone)}</span></a>`;
  const initials = p.name ? p.name.split(' ').map(w => w[0]).slice(0, 2).join('').toUpperCase() : '?';
  const photoHTML = p.photo
    ? `<div class="person-card-photo"><img src="${esc(p.photo)}" alt="${esc(p.name)}" loading="lazy"></div>`
    : `<div class="person-card-photo"><div class="person-card-avatar">${initials}</div></div>`;
  return `<div class="person-card">${photoHTML}<div class="person-card-header">${esc(p.title || 'Træner')}</div><div class="person-card-body"><h3>${esc(p.name)}</h3><div class="person-contact">${contact}</div></div></div>`;
}

function boardHTML(members, title) {
  return `<div class="section"><h2 class="section-title">${esc(title || 'Bestyrelsen')}</h2><div class="board-grid">${members.map(personCardHTML).join('')}</div></div>`;
}

function conventusWidgetHTML(url, title) {
  return `<div class="section"><h2 class="section-title">${esc(title || 'Tilmelding')}</h2><div class="conventus-widget" id="conventus-area"></div></div>`;
}



function sportBannerHTML(key, title) {
  const img = SPORT_IMAGES[key];
  if (!img) return '';
  return `<div class="sport-banner"><img src="${img}" alt="${esc(title)}" class="sport-banner-img"><div class="sport-banner-overlay"></div></div>`;
}

function pageHeader(icon, title, breadcrumb, desc) {
  const bc = breadcrumb ? `<div class="breadcrumb">${breadcrumb}</div>` : '';
  const d = desc ? `<p>${desc}</p>` : '';
  const ic = icon ? `<span class="page-icon">${icon}</span>` : '';
  return `<div class="page-header">${ic}<h1>${title}</h1>${bc}${d}</div>`;
}

function sportPageHeader(key, title, breadcrumb, desc) {
  const img = SPORT_IMAGES[key];
  const icon = SPORTS[key] ? SPORTS[key].icon : '';
  const bc = breadcrumb ? `<div class="breadcrumb">${breadcrumb}</div>` : '';
  const d = desc ? `<p>${desc}</p>` : '';
  const imgTag = img ? `<img src="${img}" alt="${esc(title)}" class="sport-header-img" loading="lazy">` : '';
  return `<div class="page-header sport-page-header"><div class="sport-header-img-wrap">${imgTag}</div><div class="page-header-overlay"></div><div class="page-header-content">${icon ? `<span class="page-icon">${icon}</span>` : ''}<h1>${title}</h1>${bc}${d}</div></div>`;
}

function subNavHTML(items, currentHash) {
  return `<div class="sub-nav">${items.map(i => {
    const active = i.href.startsWith('#') && currentHash === i.href.replace('#', '') ? 'active' : '';
    const target = i.external ? ' target="_blank" rel="noopener"' : '';
    return `<a href="${i.href}" class="${active}"${target}>${esc(i.label)}</a>`;
  }).join('')}</div>`;
}

// =============================================
// PAGE RENDERERS
// =============================================
const PAGES = {};

// --- HOME ---
PAGES[''] = PAGES['/'] = function() {
  document.getElementById('video-bg').classList.add('active');

  const sportCards = [
    { key: 'badminton', name: 'Badminton' },
    { key: 'bordtennis', name: 'Bordtennis' },
    { key: 'e-sport', name: 'E-sport' },
    { key: 'floorball', name: 'Floorball' },
    { key: 'fodbold', name: 'Fodbold', icon: '⚽' },
    { key: 'gymnastik', name: 'Gymnastik' },
    { key: 'haandbold', name: 'Håndbold', icon: '🤾' },
    { key: 'skateklub', name: 'Skateklub' },
    { key: 'disc-golf', name: 'Disc Golf' }
  ];

  return `
    <div class="mobile-home-sport-strip" aria-label="Idrætsgrene genveje">
      ${SPORT_NAV.map(item => `<a href="${esc(item.href)}">${esc(item.label)}</a>`).join('')}
    </div>
    <div class="hero">
      <button id="scroll-to-byfest" class="byfest-pulse-badge" type="button" aria-label="Gå til byfest">
        <img src="assets/images/byfest.png" alt="Byfest" loading="lazy">
        <span>Byfest</span>
      </button>
      <img src="assets/images/logo.png" alt="VHG" class="hero-logo hero-anim hero-anim-top">
      <p class="hero-subtitle hero-anim" style="--hero-delay:1.0s">Vester Hassing Gymnastik &amp; Idrætsforening</p>
      <p class="hero-tagline hero-anim" style="--hero-delay:1.5s">Sport, fællesskab og bevægelse for hele familien</p>
      <p class="hero-est hero-anim hero-anim-bottom" style="--hero-delay:2.5s">EST. 1925</p>
      <div class="hero-cta hero-anim hero-anim-bottom" style="--hero-delay:2.5s">
        <button id="scroll-to-kalender" class="btn btn-outline">Kalender</button>
        <button id="scroll-to-idraetsgrene" class="btn btn-outline">Idrætsgrene</button>
        <a href="#/kontakt" class="btn btn-primary">Kontakt os</a>
      </div>
      <div class="scroll-indicator">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"/></svg>
      </div>
    </div>

    <div class="container">
      <div class="section" id="home-idraetsgrene">
        <h2 class="section-title section-title-center">Vores idrætsgrene</h2>
        <div class="sport-grid">
          ${sportCards.map((s, i) => `
            <a href="#/${s.key}" class="sport-card" style="--delay:${i * 0.08}s">
              <div class="sport-card-image">
                <img src="${SPORT_IMAGES[s.key]}" alt="${esc(s.name)}" class="sport-card-img" loading="lazy">
                <div class="sport-card-overlay">
                  <span class="sport-card-icon">${SPORTS[s.key]?.icon || s.icon || ''}</span>
                  <h3>${esc(s.name)}</h3>
                </div>
              </div>
            </a>
          `).join('')}
        </div>
      </div>

      <div class="section">
        <h2 class="section-title section-title-center">Ugekalender (man-fre)</h2>
        <p class="mb-2 kalender-hint">Klik på hold for tilmelding og mere info. Hold musen over et hold for ekstra detaljer.</p>
        <div id="home-kalender-root"></div>
        <div class="kalender-refresh-row">
          <button id="refresh-kalender-btn" class="btn btn-primary btn-sm" type="button">Opdater kalender</button>
          <label class="kalender-toggle kalender-morning-toggle" data-morning-toggle-wrap>
            <input id="home-morning-toggle" class="kalender-toggle-input" type="checkbox" data-morning-toggle-home>
            <span class="kalender-toggle-track" style="--sport-color:#0B3A6E"></span>
            <span class="kalender-toggle-label">Vis formiddagshold</span>
          </label>
          <span id="refresh-kalender-status" aria-live="polite"></span>
        </div>
      </div>

      <div class="section" id="home-byfest">
        <h2 class="section-title section-title-center">Byfest i Vester Hassing</h2>
        <div class="info-box" style="display:flex;gap:1rem;align-items:center;justify-content:space-between;flex-wrap:wrap">
          <img src="assets/images/byfest.png" alt="Byfest i Vester Hassing" loading="lazy" style="width:min(100%, 360px);height:auto;border-radius:10px;box-shadow:0 8px 24px rgba(0,0,0,0.15)">
          <div>
            <h3 style="margin-bottom:0.4rem">Kom med til byfesten</h3>
            <p>Tilmelding er åben. Sikr din plads til årets byfest og vær med til en hyggelig dag for hele familien.</p>
          </div>
          <a href="https://www.facebook.com/VesterHassingGF/" target="_blank" rel="noopener" class="btn btn-primary btn-sm" style="color:#111">Tilmeld dig byfesten ${ICONS.external}</a>
        </div>
      </div>

      <div class="section" id="home-sponsorer">
        <h2 class="section-title section-title-center">Tak til sponsorer</h2>
        <div class="card">
          <div class="card-body" style="text-align:center">
            <p class="mb-2">VHG siger tusind tak til alle sponsorer for støtten til vores aktiviteter og medlemmer.</p>
            <img src="assets/images/sponsorer/sponsor2019gymnastik.png" alt="Tak til sponsorer" loading="lazy" style="max-width:100%;height:auto;border-radius:10px;box-shadow:0 8px 24px rgba(0,0,0,0.15)">
          </div>
        </div>
      </div>

      <div class="quick-info">
        <div class="quick-info-item">
          <div class="qi-icon">📍</div>
          <h3>Find os</h3>
          <p>Halsvej 199B<br>Vester Hassing, 9310 Vodskov</p>
          <p><a href="#/om-vhg/find-os">Se kort &rarr;</a></p>
        </div>
        <div class="quick-info-item">
          <div class="qi-icon">☕</div>
          <h3>Cafeen</h3>
          <p>Åben man-tor 16-19<br><a href="#/cafeen">Se mere &rarr;</a></p>
        </div>
        <div class="quick-info-item">
          <div class="qi-icon">📧</div>
          <h3>Kontakt</h3>
          <p>vhg@vhg.dk<br><a href="#/kontakt">Find rette kontaktperson &rarr;</a></p>
        </div>
        <div class="quick-info-item">
          <div class="qi-icon">👤</div>
          <h3>Conventus</h3>
          <p>VHG bruger Conventus som medlemssystem.<br><a href="https://www.conventus.dk/medlemslogin/index.php?forening=1212" target="_blank" rel="noopener">Log ind på Conventus &rarr;</a></p>
        </div>
      </div>

    </div>
  `;
};

// --- OM VHG: Bestyrelsen ---
// Shared Om VHG sub-nav
function omVhgSubNav(active) {
  return subNavHTML([
    { label: 'Bestyrelsen', href: '#/om-vhg/bestyrelsen' },
    { label: 'Referat', href: '#/om-vhg/referat' },
    { label: 'Vedtægter', href: '#/om-vhg/vedtaegter' },
    { label: 'Video', href: '#/om-vhg/video' },
    { label: 'Find os', href: '#/om-vhg/find-os' },
    { label: 'Sponsorer', href: '#/om-vhg/sponsorer' }
  ], active);
}

PAGES['/om-vhg/bestyrelsen'] = function() {
  const subNav = omVhgSubNav('/om-vhg/bestyrelsen');

  return pageHeader('🏛️', 'Hovedbestyrelsen', '<a href="#/">Hjem</a> / Om VHG') +
    `<div class="page container">${subNav}
      <div class="section">
        <div class="kontakt-promo">
          <div class="kontakt-promo-icon">📞</div>
          <div>
            <h3>Har du spørgsmål?</h3>
            <p>For hurtigst muligt svar, kontakt den relevante afdeling direkte. Vores <a href="#/kontakt">kontaktside</a> hjælper dig med at finde den rette person.</p>
            <a href="#/kontakt" class="btn btn-primary btn-sm" style="margin-top:0.5rem">Gå til kontaktsiden &rarr;</a>
          </div>
        </div>
      </div>
      ${boardHTML(HOVEDBESTYRELSEN, 'Hovedbestyrelsen')}</div>`;
};

// --- OM VHG: Referat ---
PAGES['/om-vhg/referat'] = function() {
  const subNav = omVhgSubNav('/om-vhg/referat');

  const links = REFERATER.map(r =>
    `<a href="${esc(r.file)}" target="_blank" rel="noopener" class="pdf-link">${ICONS.pdf} Referat af VHG generalforsamling ${esc(r.year)}</a>`
  ).join('<br>');

  return pageHeader('📄', 'Referater', '<a href="#/">Hjem</a> / Om VHG') +
    `<div class="page container">${subNav}<div class="section"><h2 class="section-title">Referater fra generalforsamlinger</h2><div>${links}</div></div></div>`;
};

// --- OM VHG: Vedtægter ---
PAGES['/om-vhg/vedtaegter'] = function() {
  const subNav = omVhgSubNav('/om-vhg/vedtaegter');

  return pageHeader('📋', 'Vedtægter', '<a href="#/">Hjem</a> / Om VHG') +
    `<div class="page container">${subNav}<div class="section"><h2 class="section-title">Foreningens vedtægter</h2><p class="mb-2">Her kan du downloade VHG's vedtægter som PDF.</p><a href="assets/pdf/vedtaegter.pdf" target="_blank" rel="noopener" class="pdf-link">${ICONS.pdf} Download vedtægter (PDF)</a></div></div>`;
};

// --- OM VHG: Video ---
PAGES['/om-vhg/video'] = function() {
  const subNav = omVhgSubNav('/om-vhg/video');

  return pageHeader('🎬', 'Video', '<a href="#/">Hjem</a> / Om VHG') +
    `<div class="page container">${subNav}<div class="section"><h2 class="section-title">VHG Video</h2><p class="mb-2">En præsentation af Vester Hassing Gymnastik &amp; Idrætsforening, lavet i 2022. Der er sket meget siden — men videoen giver et fint indblik i foreningen og dens mange aktiviteter.</p><div class="info-box"><p>Video kan ses her: <a href="https://www.facebook.com/VesterHassingGF/videos/3274611409477036" target="_blank" rel="noopener">VHG præsentationsvideo</a>.</p></div></div></div>`;
};

// --- OM VHG: Find os ---
PAGES['/om-vhg/find-os'] = function() {
  const subNav = omVhgSubNav('/om-vhg/find-os');

  return pageHeader('📍', 'Find os', '<a href="#/">Hjem</a> / Om VHG') +
    `<div class="page container">${subNav}<div class="section"><h2 class="section-title">Adresse</h2><div class="info-box" style="margin-bottom:1.5rem"><p><strong>VHG — Vester Hassing Gymnastik &amp; Idrætsforening</strong><br>Halsvej 199B<br>Vester Hassing, 9310 Vodskov</p></div><h2 class="section-title">Kort</h2><div class="maps-embed"><iframe src="https://maps.google.com/maps?q=Halsvej+199B,+9310+Vodskov,+Denmark&t=&z=15&ie=UTF8&iwloc=&output=embed" width="100%" height="400" style="border:0;border-radius:var(--radius)" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></div></div></div>`;
};

// --- KONTAKT ---
PAGES['/kontakt'] = function() {
  const sportContacts = [
    { key: 'badminton', name: 'Badminton', icon: '🏸' },
    { key: 'bordtennis', name: 'Bordtennis', icon: '🏓' },
    { key: 'e-sport', name: 'E-sport', icon: '🎮' },
    { key: 'floorball', name: 'Floorball', icon: '🏒' },
    { key: 'fodbold', name: 'Fodbold', icon: '⚽', href: '#/fodbold/bestyrelsen' },
    { key: 'gymnastik', name: 'Gymnastik', icon: '🤸' },
    { key: 'haandbold', name: 'Håndbold', icon: '🤾', href: '#/haandbold/bestyrelsen' },
    { key: 'skateklub', name: 'Skateklub', icon: '🛹' },
    { key: 'disc-golf', name: 'Disc Golf', icon: '🥏', href: '#/disc-golf/bestyrelsen' }
  ];

  return pageHeader('📞', 'Kontakt', '<a href="#/">Hjem</a>', 'For at sikre du får svar hurtigst muligt, anbefaler vi at kontakte den relevante afdeling direkte.') +
    `<div class="page container">
      <div class="section">
        <h2 class="section-title">Generelle henvendelser</h2>
        <div class="contact-cards">
          <div class="contact-card">
            <div class="contact-card-icon">${ICONS.mail}</div>
            <h3>E-mail</h3>
            <p><a href="mailto:vhg@vhg.dk">vhg@vhg.dk</a></p>
          </div>

          <div class="contact-card">
            <div class="contact-card-icon">🏛️</div>
            <h3>Hovedbestyrelsen</h3>
            <p>For spørgsmål der ikke relaterer til en specifik afdeling.<br><a href="#/om-vhg/bestyrelsen">Se hovedbestyrelsen &rarr;</a></p>
          </div>
        </div>
      </div>

      <div class="section">
        <h2 class="section-title">Kontakt en afdeling</h2>
        <p class="mb-2">Har dit spørgsmål med en specifik idrætsgren at gøre? Kontakt afdelingens bestyrelse direkte — de kan bedst hjælpe dig.</p>
        <div class="sport-contact-grid">
          ${sportContacts.map(s => `
            <a href="${s.href || '#/' + s.key + '/bestyrelsen'}" class="sport-contact-item">
              <img src="${SPORT_IMAGES[s.key]}" alt="${esc(s.name)}" class="sport-contact-img" loading="lazy">
              <div class="sport-contact-overlay">
                <span class="sport-contact-name">${esc(s.name)}</span>
                <span class="sport-contact-arrow">${ICONS.arrow}</span>
              </div>
            </a>
          `).join('')}
        </div>
      </div>

      <div class="section">
        <h2 class="section-title">Cafeen & Glemt tøj</h2>
        <div class="contact-cards">
          <div class="contact-card">
            <div class="contact-card-icon">☕</div>
            <h3>Cafeen (Gevaldig)</h3>
            <p>Åben man-tor 16-19.<br><a href="#/cafeen">Se cafeens side &rarr;</a></p>
          </div>
          <div class="contact-card">
            <div class="contact-card-icon">👕</div>
            <h3>Glemt tøj</h3>
            <p>Cafeen har nøgle til det aflåste lokale med glemt tøj i hallen. Henvendelse i cafeens åbningstid.<br>Tøj kan også være hos <strong>Vester Hassing Skole</strong>.</p>
          </div>
        </div>
      </div>

      <div class="section">
        <div class="info-box">
          <h3>📍 Find os</h3>
          <p><strong>VHG — Vester Hassing Gymnastik &amp; Idrætsforening</strong><br>
          Halsvej 199B, Vester Hassing, 9310 Vodskov</p>
        </div>
      </div>
    </div>`;
};

// --- SoMe ---
PAGES['/some'] = function() {
  const links = [
    { name: 'VHG', url: 'https://www.facebook.com/VesterHassingGF' },
    { name: 'Håndbold', url: 'https://www.facebook.com/vghhandbold' },
    { name: 'Disc Golf', url: 'https://www.facebook.com/groups/1832314803794784' },
    { name: 'Floorball', url: 'https://www.facebook.com/profile.php?id=100046867541094' },
    { name: 'Bordtennis', url: 'https://www.facebook.com/profile.php?id=100054206513655' },
    { name: 'E-sport', url: 'https://www.facebook.com/profile.php?id=100063446331721' },
    { name: 'Skateklub', url: 'https://www.facebook.com/VHGSkateklub' },
    { name: 'Fodbold', url: 'https://www.facebook.com/VHGFodbold' },
    { name: 'Gevaldig', url: 'https://www.facebook.com/profile.php?id=100066490641015' }
  ];

  return pageHeader('📱', 'SoMe', '<a href="#/">Hjem</a>', 'Find alle vores Facebook-sider samlet ét sted.') +
    `<div class="page container">
      <div class="section">
        <h2 class="section-title">Facebook</h2>
        <div class="contact-cards">
          ${links.map(item => `
            <div class="contact-card">
              <div class="contact-card-icon">${ICONS.facebook}</div>
              <h3>${esc(item.name)}</h3>
              <p><a href="${esc(item.url)}" target="_blank" rel="noopener">Åbn side ${ICONS.external}</a></p>
            </div>
          `).join('')}
        </div>
      </div>
    </div>`;
};

// --- Generic sport page ---
function sportPage(key) {
  return sportTilmeldingPage(key);
}

function sportSubNav(key) {
  const item = [...SPORT_NAV].find(n => (n.href||'').includes('#/' + key));
  if (!item || !item.children) return '';
  const hash = location.hash.replace('#','') || '/';
  return subNavHTML(item.children, hash);
}

function sportBoardPage(key) {
  const s = SPORTS[key];
  return sportPageHeader(key, s.name + ' — Bestyrelsen', `<a href="#/">Hjem</a> / <a href="#/${key}">${esc(s.name)}</a>`) +
    `<div class="page container">${sportSubNav(key)}${boardHTML(s.board, 'Bestyrelse — ' + s.name)}</div>`;
}

function sportTilmeldingPage(key) {
  const s = SPORTS[key];
  return sportPageHeader(key, s.name + ' — Tilmelding', `<a href="#/">Hjem</a> / <a href="#/${key}">${esc(s.name)}</a>`) +
    `<div class="page container">${sportSubNav(key)}${conventusWidgetHTML(s.conventus, 'Tilmelding — ' + s.name)}</div>`;
}

// Register generic sport pages
['badminton','bordtennis','e-sport','floorball','gymnastik','skateklub','disc-golf'].forEach(key => {
  PAGES['/' + key] = () => sportPage(key);
  PAGES['/' + key + '/bestyrelsen'] = () => sportBoardPage(key);
  PAGES['/' + key + '/tilmelding'] = () => sportTilmeldingPage(key);
});

// --- Badminton extras ---
PAGES['/badminton/traeningstider'] = function() {
  const rows = [
    ['Motionist 1', 'Onsdag 18:00-19:00'],
    ['Motionist 2', 'Onsdag 19:00-20:00'],
    ['Senior', 'Mandag og onsdag 20:00-22:00'],
    ['Ungdom 8-10 år', 'Onsdag 16:00-17:00'],
    ['Ungdom 11-16 år', 'Onsdag 17:00-18:00'],
    ['Trim-Volley', 'Tirsdage 20:00-21:30'],
    ['Motion for mænd 65+', 'Kontakt bestyrelsen'],
    ['Motion for damer 65+', 'Kontakt bestyrelsen']
  ];
  return sportPageHeader('badminton', 'Badminton — Træningstider', '<a href="#/">Hjem</a> / <a href="#/badminton">Badminton</a>', 'Sæson 2025/2026. Se priser under tilmelding. Vedr. ledige motionistbaner, skriv direkte til formanden.') +
    `<div class="page container">${sportSubNav('badminton')}<div class="section"><h2 class="section-title">Træningstider</h2><table class="training-table"><thead><tr><th>Hold</th><th>Tidspunkt</th></tr></thead><tbody>${rows.map(r=>`<tr><td><strong>${r[0]}</strong></td><td>${r[1]}</td></tr>`).join('')}</tbody></table><p class="mt-2" style="font-size:0.85rem;color:var(--gray-500)">Opdateret 05.08.2025</p></div></div>`;
};

PAGES['/badminton/information'] = function() {
  return sportPageHeader('badminton', 'Badminton — Information', '<a href="#/">Hjem</a> / <a href="#/badminton">Badminton</a>') +
    `<div class="page container">${sportSubNav('badminton')}<div class="section"><div class="card"><div class="card-header">Information fra Badminton</div><div class="card-body"><p>Se fanen med træningstider og opstart for de forskellige hold.</p><p>For yderligere information, kontakt <a href="#/badminton/bestyrelsen">badminton-bestyrelsen</a>.</p></div></div></div></div>`;
};

// --- Bordtennis extras ---
PAGES['/bordtennis/traeningstider'] = function() {
  const rows = [
    ['Nybegyndere og letøvede', 'Tirsdag 17:30-18:30 · Torsdag 17:30-18:30'],
    ['Øvede', 'Tirsdag 18:30-19:30 · Torsdag 18:30-19:30'],
    ['Senior', 'Tirsdag 19:30-21:30 · Torsdag 19:30-21:30']
  ];
  return sportPageHeader('bordtennis', 'Bordtennis — Træningstider', '<a href="#/">Hjem</a> / <a href="#/bordtennis">Bordtennis</a>') +
    `<div class="page container">${sportSubNav('bordtennis')}<div class="section"><h2 class="section-title">Træningstider</h2><table class="training-table"><thead><tr><th>Hold</th><th>Tidspunkt</th></tr></thead><tbody>${rows.map(r=>`<tr><td><strong>${r[0]}</strong></td><td>${r[1]}</td></tr>`).join('')}</tbody></table></div></div>`;
};

// --- Disc Golf extras ---
PAGES['/disc-golf/kort'] = function() {
  return sportPageHeader('disc-golf', 'Disc Golf — Kort', '<a href="#/">Hjem</a> / <a href="#/disc-golf">Disc Golf</a>') +
    `<div class="page container">${sportSubNav('disc-golf')}<div class="section"><h2 class="section-title">Banekort</h2><div class="card"><div class="card-body"><img src="assets/images/disc-golf-kort.jpg" alt="Disc Golf banekort" style="width:100%;border-radius:var(--radius-sm)"></div></div></div></div>`;
};

// --- FODBOLD ---
function fodboldSubNav(active) {
  return subNavHTML([
    { label: 'Kontingent & Tilmelding', href: '#/fodbold/kontingent' },
    { label: 'Bestyrelsen', href: '#/fodbold/bestyrelsen' },
    { label: 'Træningstider', href: '#/fodbold/traeningstider' },
    { label: 'Senior', href: '#/fodbold/senior' },
    { label: 'Børn & Ungdom', href: '#/fodbold/boern-ungdom' }
  ], active);
}

PAGES['/fodbold'] = function() {
  return PAGES['/fodbold/kontingent']();
};

PAGES['/fodbold/bestyrelsen'] = function() {
  return sportPageHeader('fodbold', 'Fodbold — Bestyrelsen', '<a href="#/">Hjem</a> / <a href="#/fodbold">Fodbold</a>') +
    `<div class="page container">${fodboldSubNav('/fodbold/bestyrelsen')}${boardHTML(FODBOLD.board, 'Bestyrelse — Fodbold')}</div>`;
};

PAGES['/fodbold/senior'] = function() {
  return sportPageHeader('fodbold', 'Fodbold — Senior', '<a href="#/">Hjem</a> / <a href="#/fodbold">Fodbold</a>', 'Vores seniorhold for herrer og kvinder.') +
    `<div class="page container">${fodboldSubNav('/fodbold/senior')}<div class="section"><h2 class="section-title">Seniorhold</h2><div class="board-grid">${FODBOLD.seniorTeams.map(t => `<div class="card"><div class="card-header">${esc(t.name)}</div><div class="card-body"><p>${esc(t.desc)}</p></div></div>`).join('')}</div></div></div>`;
};

PAGES['/fodbold/traeningstider'] = function() {
  return sportPageHeader('fodbold', 'Fodbold — Træningstider', '<a href="#/">Hjem</a> / <a href="#/fodbold">Fodbold</a>', 'Træningstider for alle hold. Hold og tider kan ændres — følg med på holdets side eller kontakt bestyrelsen.') +
    `<div class="page container">${fodboldSubNav('/fodbold/traeningstider')}<div class="section"><h2 class="section-title">Træningstider</h2><table class="training-table"><thead><tr><th>Hold</th><th>Tidspunkt</th></tr></thead><tbody>${FODBOLD.training.map(t => `<tr><td><strong>${esc(t.hold)}</strong></td><td>${esc(t.tider)}</td></tr>`).join('')}</tbody></table><p class="mt-2" style="font-size:0.85rem;color:var(--gray-500)">Tider er fra sæson 2024/2025. Kontakt bestyrelsen ved spørgsmål.</p></div></div>`;
};

PAGES['/fodbold/boern-ungdom'] = function() {
  return sportPageHeader('fodbold', 'Fodbold — Børn & Ungdom', '<a href="#/">Hjem</a> / <a href="#/fodbold">Fodbold</a>', 'Oversigt over alle børne- og ungdomshold i VHG Fodbold.') +
    `<div class="page container">${fodboldSubNav('/fodbold/boern-ungdom')}<div class="section"><h2 class="section-title">Hold</h2><div class="sport-grid">${FODBOLD.youthTeams.map(t => `<div class="card"><div class="card-header">${esc(t)}</div><div class="card-body"><p><a href="#/fodbold/bestyrelsen">Kontakt bestyrelsen</a> for mere info.</p></div></div>`).join('')}</div></div></div>`;
};

PAGES['/fodbold/kontingent'] = function() {
  return sportPageHeader('fodbold', 'Fodbold — Kontingent & Tilmelding', '<a href="#/">Hjem</a> / <a href="#/fodbold">Fodbold</a>') +
    `<div class="page container">${fodboldSubNav('/fodbold/kontingent')}
      <div class="section">
        <h2 class="section-title">Kontingenttakster</h2>
        <p class="mb-2">Gældende fra 1. august 2025. Beløb er halvårligt.</p>
        <table class="fee-table"><thead><tr><th>Hold</th><th class="amount">Halvårligt</th></tr></thead><tbody>
          ${FODBOLD.fees.map(f => `<tr><td>${esc(f.hold)}</td><td class="amount">${esc(f.pris)}</td></tr>`).join('')}
        </tbody></table>
      </div>
      <div class="section">
        <h2 class="section-title">Opret profil / Tilmelding</h2>
        <p class="mb-2">Opret din profil i Conventus for at tilmelde dig et hold:</p>
        <a href="https://www.conventus.dk/dataudv/www/new_tilmelding.php?foreningsid=1212&gruppe=914255&skjul_nyt_medlem=0&skjul_allerede_medlem=1" target="_blank" rel="noopener" class="btn btn-primary btn-sm">Opret profil i Conventus ${ICONS.external}</a>
        <div class="mt-4 conventus-widget" id="conventus-area"></div>
      </div>
    </div>`;
};

// --- HÅNDBOLD ---
function haandboldSubNav(active) {
  return subNavHTML([
    { label: 'Kontingent & Tilmelding', href: '#/haandbold/kontingent' },
    { label: 'Bestyrelsen', href: '#/haandbold/bestyrelsen' },
    { label: 'Antibulli politik', href: '#/haandbold/antibulli' },
    { label: 'Sponsor-concept', href: '#/haandbold/sponsor-concept' },
    { label: 'Tøj-koncept', href: '#/haandbold/toej-koncept' },
    { label: 'Træningstider', href: '#/haandbold/traeningstider' },
    { label: 'Trænere', href: '#/haandbold/traenere' }
  ], active);
}

PAGES['/haandbold'] = function() {
  return PAGES['/haandbold/kontingent']();
};

PAGES['/haandbold/bestyrelsen'] = function() {
  return sportPageHeader('haandbold', 'Håndbold — Bestyrelsen', '<a href="#/">Hjem</a> / <a href="#/haandbold">Håndbold</a>') +
    `<div class="page container">${haandboldSubNav('/haandbold/bestyrelsen')}${boardHTML(HAANDBOLD.board, 'Bestyrelse — Håndbold')}</div>`;
};

PAGES['/haandbold/traeningstider'] = function() {
  return sportPageHeader('haandbold', 'Håndbold — Træningstider 2025/2026', '<a href="#/">Hjem</a> / <a href="#/haandbold">Håndbold</a>') +
    `<div class="page container">${haandboldSubNav('/haandbold/traeningstider')}<div class="section"><h2 class="section-title">Træningstider</h2><table class="training-table"><thead><tr><th>Hold</th><th>Tidspunkt</th></tr></thead><tbody>${HAANDBOLD.training.map(t => `<tr><td><strong>${esc(t.hold)}</strong></td><td>${esc(t.tider)}</td></tr>`).join('')}</tbody></table></div></div>`;
};

PAGES['/haandbold/traenere'] = function() {
  const groups = HAANDBOLD.trainers.map(g => `
    <div class="trainer-group">
      <h3>Håndbold — ${esc(g.group)}</h3>
      <div class="trainer-list">
        ${g.people.map(p => {
          let c = '';
          if (p.email) c += `<a href="mailto:${esc(p.email)}">${esc(p.email)}</a>`;
          if (p.phone) c += ` · <a href="tel:${esc(p.phone.replace(/\s/g,''))}">${esc(p.phone)}</a>`;
          return `<div class="trainer-item"><h4>${esc(p.name)}</h4>${p.title ? `<div style="font-size:0.8rem;color:var(--gold);background:var(--navy);display:inline-block;padding:0.15rem 0.5rem;border-radius:4px;margin-bottom:0.3rem">${esc(p.title)}</div>` : ''}<div class="contact">${c}</div></div>`;
        }).join('')}
      </div>
    </div>
  `).join('');

  return sportPageHeader('haandbold', 'Håndbold — Trænere', '<a href="#/">Hjem</a> / <a href="#/haandbold">Håndbold</a>') +
    `<div class="page container">${haandboldSubNav('/haandbold/traenere')}<div class="section"><h2 class="section-title">Trænere</h2>${groups}</div></div>`;
};

PAGES['/haandbold/antibulli'] = function() {
  return sportPageHeader('haandbold', 'Antibulli-strategi for VGH Håndbold', '<a href="#/">Hjem</a> / <a href="#/haandbold">Håndbold</a>') +
    `<div class="page container">${haandboldSubNav('/haandbold/antibulli')}<div class="section"><div class="card"><div class="card-body policy-content">
      <h3>Antibulli-strategi for VGH Håndbold</h3>
      <p><strong>1. Indledning</strong> Hos VGH Håndbold ønsker vi at skabe et trygt og inkluderende miljø, hvor alle spillere, trænere, frivillige og forældre føler sig velkomne og respekterede. Mobning, chikane og ekskluderende adfærd accepteres ikke, og vi har en klar politik og handlingsplan for at forebygge og håndtere sådanne situationer.</p>
      <ul>
        <li>Antibulli Håndbold skaber stærke fællesskaber og høj trivsel på børnenes håndboldhold. Langt de fleste børn er glade for at tage til træning, men trivsel i fritidslivet er ikke en selvfølge. Hvert femte barn har oplevet at blive mobbet, drillet eller holdt udenfor til deres fritidsaktivitet. For hvert tiende barn har konsekvensen været, at de måtte stoppe på holdet.</li>
      </ul>

      <p><strong>2. Definition af mobning</strong> Mobning er gentagen negativ eller skadelig adfærd, der udøves bevidst og kan omfatte:</p>
      <ul>
        <li>Fysisk mobning (slag, skub, mv.)</li>
        <li>Verbal mobning (nedladende kommentarer, hån, trusler, mv.)</li>
        <li>Social mobning (udelukkelse, bagtalelse, mv.)</li>
        <li>Digital mobning (krænkende beskeder, deling af billeder uden samtykke, mv.)</li>
      </ul>

      <p><strong>3. Forebyggelse</strong> For at sikre et positivt klubmiljø arbejder vi aktivt med følgende initiativer:</p>
      <ul>
        <li>Opdragelse i respekt: Trænere og ledere skal gå forrest som gode rollemodeller.</li>
        <li>Åben dialog: Spillere, forældre og frivillige opfordres til at tale åbent om trivsel og adfærd.</li>
        <li>Ens spillertøj: Alle i klubben er klædt ens til kamp og har alle klubbens sponsorere på tøjet. Dette skal være med at styrke fællesskab på tværs af alle hold og sikre at alle vores spillere får glæde af alle sponsorer.</li>
        <li>Klubværdier og kodeks: Vi har klare retningslinjer for, hvordan vi omgås hinanden.</li>
        <li>Uddannelse: En gang om året bliver klubbens frivillige præsenteret for Antibulli Håndbold og dets værktøjer.</li>
        <li>Konkrete råd og øvelser: Antibulli Håndbold kombinerer erfaringer fra antimobbe- og trivselsindsatser med erfaringer fra håndboldverdenen og tilbyder øvelser målrettet børn i alderen 6-12 år. Alle trænere bliver introduceret til dette.</li>
        <li>Arrangementer: Jævnligt afholdes der sociale arrangementer, der skal fremme fair play, trivsel og holdånd. Dette kan være på de enkelte hold eller på tværs af flere hold.</li>
      </ul>

      <p><strong>4. Håndtering af mobning</strong> Hvis en situation opstår, følges denne handlingsplan:</p>
      <ol>
        <li>Observation og opsporing: Trænere og frivillige er opmærksomme på tegn på mobning.</li>
        <li>Dialog med involverede: Den eller de berørte spillere kontaktes for at afdække situationen.</li>
        <li>Inddragelse af forældre: Hvis det vurderes nødvendigt, inddrages forældre i processen.</li>
        <li>Konsekvenser og opfølgning: Klubben kan give advarsler, vejledning eller i yderste konsekvens ekskludere en spiller ved gentagne overtrædelser.</li>
      </ol>

      <p><strong>5. Ansvar og kontaktpersoner</strong> Alle i klubben har et fælles ansvar for at bekæmpe mobning. Ved bekymring eller mistanke kan man kontakte klubbens antibulli-ansvarlige:</p>
      <ul>
        <li>Morten Kam (Tlf. <a href="tel:61109165">61109165</a> eller <a href="mailto:vhghaandbold@outlook.dk">vhghaandbold@outlook.dk</a>)</li>
      </ul>
      <p>Antibulli Håndbold arbejder med tolerance, respekt, omsorg og mod. Vi skaber stærke børnefællesskaber, hvor der ikke er plads til mobning. Vi tror på, at håndbold er for alle, og vi vil arbejde aktivt for at sikre, at vores klub er et trygt sted at være.</p>
    </div></div></div></div>`;
};

PAGES['/haandbold/sponsor-concept'] = function() {
  return sportPageHeader('haandbold', 'Håndbold - Sponsor-concept 2025', '<a href="#/">Hjem</a> / <a href="#/haandbold">Håndbold</a>') +
    `<div class="page container">${haandboldSubNav('/haandbold/sponsor-concept')}
      <div class="section">
        <img src="assets/images/afdelinger/haandbold/image1.png" alt="Sponsor-concept side 1" loading="lazy" style="width:100%;height:auto;display:block;margin:0 auto 1rem;border-radius:var(--radius-sm)">
        <img src="assets/images/afdelinger/haandbold/image2.png" alt="Sponsor-concept side 2" loading="lazy" style="width:100%;height:auto;display:block;margin:0 auto 1rem;border-radius:var(--radius-sm)">
        <img src="assets/images/afdelinger/haandbold/image3.png" alt="Sponsor-concept side 3" loading="lazy" style="width:100%;height:auto;display:block;margin:0 auto 1rem;border-radius:var(--radius-sm)">
        <img src="assets/images/afdelinger/haandbold/image4.png" alt="Sponsor-concept side 4" loading="lazy" style="width:100%;height:auto;display:block;margin:0 auto 1rem;border-radius:var(--radius-sm)">
        <img src="assets/images/afdelinger/haandbold/image5.png" alt="Sponsor-concept side 5" loading="lazy" style="width:100%;height:auto;display:block;margin:0 auto;border-radius:var(--radius-sm)">
      </div>
    </div>`;
};

PAGES['/haandbold/toej-koncept'] = function() {
  return sportPageHeader('haandbold', 'Håndbold - Tøj-koncept 2025', '<a href="#/">Hjem</a> / <a href="#/haandbold">Håndbold</a>') +
    `<div class="page container">${haandboldSubNav('/haandbold/toej-koncept')}
      <div class="section">
        <h2 class="section-title">Nyt tøjkoncept</h2>
        <div class="card">
          <div class="card-body policy-content">
            <p>Som del af vores nye Antibulli-strategi har vi lanceret et nyt sponsorkoncept. Det betyder kort fortalt, at alle sponsorer kommer på enten alle spilleres shorts eller trøjer. Dermed sikrer vi, at alle spillere i klubben er ens klædt, hvilket vil være med til at skabe genkendelighed og fællesskab på tværs af klubbens hold.</p>
            <p>Samtidig vil det også sikre maksimal eksponering for vores sponsorer, og den værdi det skaber for dem og dermed for klubben, vil sikre, at vi fortsat kan holde kontingenterne lave.</p>
            <p>Tøjkonceptet indebærer at spillerne får udleveret personlig trøje og shorts, som de skal have med til kamp. Konceptet kører tre år ad gangen, og derfor skal denne trøje og disse shorts bruges til og med april 2028. Dette efterlader sikkert mange spørgsmål, og vi har forsøgt at svare på de fleste herunder:</p>

            <h3>Hvordan bestiller jeg tøjet?</h3>
            <ul>
              <li>Tøjet kan bestilles på to måder: prøvedage i hallerne eller bestilling via mail.</li>
              <li>Ved prøvedagene er der en repræsentant fra klubben til at tage imod bestillingen. Vi er klar over, at dette ikke rammer træning for alle hold, men det er planlagt i forhold til andet praktisk arbejde i klubben. Har man brug for prøvetid ud over nedenstående tider bedes du kontakte Morten fra bestyrelsen på tlf. 61109165.</li>
            </ul>

            <p><strong>Det er følgende dage og tidsrum:</strong></p>
            <ul>
              <li>Tirsdag d. 30/9 kl. 17.00-19.00 i Gandrup</li>
              <li>Torsdag d. 2/10 kl. 17.00-18.30 i Vester Hassing</li>
              <li>Tirsdag d. 7/10 kl. 17.00-19.00 i Gandrup</li>
            </ul>

            <p><strong>Hvis du allerede ved hvilken størrelse du skal bestille, kan bestillingen ske via mail.</strong> Følgende sendes til <a href="mailto:vhghaandbold@outlook.dk">vhghaandbold@outlook.dk</a>:</p>
            <ul>
              <li>Spillerens navn</li>
              <li>Spillerens hold</li>
              <li>Størrelse på trøje</li>
              <li>Størrelse på shorts</li>
              <li>Ønsket nummer</li>
              <li>Navn der skal trykkes bagpå (koster 60 kr.)</li>
              <li>Om der ønskes trykt nummer på shorts (koster 40 kr.)</li>
            </ul>

            <h3>Hvilket nummer kan jeg vælge?</h3>
            <ul>
              <li>Seniorspillere kan frit vælge nummer fra 1-99. Er der flere, der ønsker samme nummer, finder den pågældende træner en løsning.</li>
              <li>Ungdomsspillere skal også vælge nummer fra 1-99. Ulige årgange (2009, 2011, 2013 osv.) skal vælge et ulige nummer og lige årgange (2010, 2012, 2014 osv.) skal vælge et lige nummer. Er der flere spillere der ønsker det samme nummer, bliver de fordelt via lodtrækning.</li>
            </ul>

            <h3>Kan jeg få navn trykt på trøjen?</h3>
            <p>Ja, hvis du gerne vil have navn trykt bag på trøjen, kan du tilkøbe dette for 60 kr. Navnet skal være en del af dit rigtige navn/efternavn.</p>

            <h3>Kan jeg få nummer trykt på shortsene?</h3>
            <p>Ja, hvis du gerne vil have navn trykt foran på shortsene, kan du tilkøbe dette for 40 kr. Uden nummer vil de ligne de andre spilleres shorts.</p>

            <h3>Hvad gør jeg, hvis jeg eller mit barn vokser fra trøjen, og skal bruge en anden størrelse?</h3>
            <p>Spillere får en ny trøje og shorts hvert tredje år. Næste gang er i august 2028. Vi er klar over at nogle spillere vil vokse meget i perioden, og derfor er det muligt at købe en ny trøje eller nye shorts til en reduceret pris, hvor klubben betaler den største del og medlemmet betaler en mindre del.</p>
            <ul>
              <li>Medlemmets pris for en ny trøje er 225 kr.</li>
              <li>Medlemmets pris for nye shorts er 125 kr.</li>
            </ul>

            <h3>Hvad skal jeg bestille, hvis jeg eller mit barn både står i mål og spiller ude på banen?</h3>
            <p>Vi anbefaler at man køber den almindelige spillertrøje, og så stiller klubben overtrækstrøjer til rådighed for spillerne, når de skal stå i mål.</p>
            <p>Alternativt kan man købe målmandstrøjen til den reducerede pris á 225 kr. og målmandsbukserne til den reducerede pris á 125 kr.</p>

            <h3>Hvad sker der, hvis mit barn glemmer sin trøje til kamp?</h3>
            <p>Vi kan desværre ikke sikre trøjer til alle der glemmer dem. Trøjerne skal derfor huskes til kamp på linje med indendørssko. Hvis man glemmer disse ting, kan vi ikke love, at spilleren stadig kan spille kamp.</p>

            <h3>Hvad nu hvis mit barn starter senere i sæsonen?</h3>
            <p>I perioden 2025-2028 får et betalende medlem udleveret ét sæt spillertøj, når denne har betalt kontingent. Hvis man starter i ugen lige inden en kamp, kan vi ikke love at tøjet er klar til kampen, men her vil klubben have et sæt lånetøj, spilleren kan bruge.</p>

            <h3>Hvad sker der hvis min trøje eller shorts bliver væk eller går i stykker?</h3>
            <p>I disse tilfælde er det muligt at købe trøje og shorts til de reducerede priser, som er nævnt ovenfor.</p>
            <p>Vi anbefaler dog, at det forsøges at reparere trøje eller shorts inden køb af nye. Dette er som regel billigere og bedre for miljøet.</p>
          </div>
        </div>
      </div>
    </div>`;
};

PAGES['/haandbold/kontingent'] = function() {
  return sportPageHeader('haandbold', 'Håndbold — Kontingent & Tilmelding', '<a href="#/">Hjem</a> / <a href="#/haandbold">Håndbold</a>') +
    `<div class="page container">${haandboldSubNav('/haandbold/kontingent')}
      <div class="section">
        <h2 class="section-title">Kontingenttakster</h2>
        <p class="mb-2">Kontingentet for de forskellige aldersgrupper er angivet pr. halve sæson.</p>
        <table class="fee-table"><thead><tr><th>Hold</th><th>Årgang</th><th class="amount">Takst</th></tr></thead><tbody>
          ${HAANDBOLD.fees.map(f => `<tr><td>${esc(f.hold)}</td><td>${esc(f.aargang)}</td><td class="amount">${esc(f.pris)}</td></tr>`).join('')}
        </tbody></table>
      </div>
      <div class="section">
        <h2 class="section-title">Tilmelding</h2>
        <p class="mb-2">Opret din profil i Conventus:</p>
        <a href="https://www.conventus.dk/dataudv/www/new_tilmelding.php?foreningsid=1212&gruppe=914273&skjul_nyt_medlem=0&skjul_allerede_medlem=1" target="_blank" rel="noopener" class="btn btn-primary btn-sm">Opret profil i Conventus ${ICONS.external}</a>
        <div class="mt-4 conventus-widget" id="conventus-area"></div>
      </div>
    </div>`;
};

// --- CAFEEN ---
PAGES['/cafeen'] = function() {
  return pageHeader('☕', 'Cafeen — Gevaldig', '<a href="#/">Hjem</a>', 'Velkomst og forfriskninger i hjertet af Vester Hassing Hallen.') +
    `<div class="page container">
      <div class="section">
        <div class="info-box">
          <h3>Åbningstider</h3>
          <p style="font-size:1.1rem"><strong>Mandag – Torsdag:</strong> kl. 16:00 – 19:00</p>
          <p>Derudover åbent efter behov ved arrangementer og kampe.</p>
        </div>
      </div>
      <div class="section">
        <h2 class="section-title">Menu</h2>
        <div class="card">
          <div class="card-body cafe-menu-images">
            <img src="assets/images/cafeen-menu.jpg" alt="Caféens menu" loading="lazy" class="cafe-menu-image">
            <img src="assets/images/cafeen-menu2.jpg" alt="Caféens menu side 2" loading="lazy" class="cafe-menu-image">
          </div>
        </div>
      </div>
      <div class="section">
        <h2 class="section-title">Kontakt Gevaldig</h2>
        <div class="contact-cards">
          <div class="contact-card">
            <div class="contact-card-icon">${ICONS.phone}</div>
            <h3>Telefon</h3>
            <p><a href="tel:93401330">93 40 13 30</a></p>
          </div>
          <div class="contact-card">
            <div class="contact-card-icon">${ICONS.mail}</div>
            <h3>E-mail</h3>
            <p><a href="mailto:Kontakt@gevaldigmad.dk">Kontakt@gevaldigmad.dk</a></p>
          </div>
          <div class="contact-card">
            <div class="contact-card-icon">${ICONS.instagram}</div>
            <h3>Instagram</h3>
            <p><a href="https://www.instagram.com/gevaldigcageogcatering" target="_blank" rel="noopener">@gevaldigcageogcatering</a></p>
          </div>
        </div>
      </div>
    </div>`;
};

// =============================================
// ROUTER
// =============================================
let previousRoute = '/';
let pendingHomeScrollTarget = null;

function scrollToSectionWithOffset(sectionId) {
  const el = document.getElementById(sectionId);
  if (!el) return;
  const header = document.getElementById('site-header');
  const headerHeight = header ? header.getBoundingClientRect().height : 0;
  const y = el.getBoundingClientRect().top + window.pageYOffset - headerHeight - 10;
  window.scrollTo({ top: Math.max(0, y), behavior: 'smooth' });
}

function getRoute() {
  return location.hash.replace('#', '') || '/';
}

function loadConventusWidget(url) {
  const area = document.getElementById('conventus-area');
  if (!area || !url) return;
  area.innerHTML = '';
  const iframe = document.createElement('iframe');
  iframe.style.cssText = 'width:100%;min-height:200px;border:none;overflow:hidden;';
  iframe.setAttribute('scrolling', 'no');
  iframe.srcdoc = '<!DOCTYPE html><html><head><meta charset="utf-8"><style>body{font-family:Inter,-apple-system,sans-serif;margin:0;padding:8px;font-size:14px;color:#1F2937}a{color:#003F7A}table{border-collapse:collapse;width:100%}td,th{padding:6px 8px;text-align:left;border-bottom:1px solid #E5E7EB}</style></head><body><script src="' + url + '"><\/script></body></html>';
  iframe.onload = function() {
    var attempts = 0;
    (function resize() {
      try { var h = iframe.contentDocument.body.scrollHeight; if (h > 50) iframe.style.height = (h + 30) + 'px'; } catch(e) {}
      if (++attempts < 15) setTimeout(resize, 600);
    })();
  };
  area.appendChild(iframe);
}

function loadConventusIframes(area, urls) {
  if (!area || !urls.length) return;
  area.innerHTML = '';
  urls.forEach(url => {
    const iframe = document.createElement('iframe');
    iframe.style.cssText = 'width:100%;min-height:200px;border:none;overflow:hidden;margin-bottom:1rem;';
    iframe.setAttribute('scrolling', 'no');
    iframe.srcdoc = '<!DOCTYPE html><html><head><meta charset="utf-8"><style>body{font-family:Inter,-apple-system,sans-serif;margin:0;padding:8px;font-size:14px;color:#1F2937}a{color:#003F7A}table{border-collapse:collapse;width:100%}td,th{padding:6px 8px;text-align:left;border-bottom:1px solid #E5E7EB}</style></head><body><script src="' + url + '"><\/script></body></html>';
    iframe.onload = function() {
      var attempts = 0;
      (function resize() {
        try { var h = iframe.contentDocument.body.scrollHeight; if (h > 50) iframe.style.height = (h + 30) + 'px'; } catch(e) {}
        if (++attempts < 15) setTimeout(resize, 600);
      })();
    };
    area.appendChild(iframe);
  });
}

function navigate() {
  const route = getRoute();
  const app = document.getElementById('app');
  const videoBg = document.getElementById('video-bg');

  if (route === '/kalender') {
    pendingHomeScrollTarget = 'home-kalender-root';
    location.hash = '#/';
    return;
  }

  if (route === '/om-vhg/sponsorer') {
    pendingHomeScrollTarget = 'home-sponsorer';
    location.hash = '#/';
    return;
  }

  // Redirect base sport routes to signup/contingent by default
  const ROUTE_REDIRECTS = {
    '/fodbold': '/fodbold/kontingent', '/haandbold': '/haandbold/kontingent',
    '/badminton': '/badminton/tilmelding', '/bordtennis': '/bordtennis/tilmelding',
    '/e-sport': '/e-sport/tilmelding', '/floorball': '/floorball/tilmelding',
    '/gymnastik': '/gymnastik/tilmelding', '/skateklub': '/skateklub/tilmelding',
    '/disc-golf': '/disc-golf/tilmelding',
  };
  if (ROUTE_REDIRECTS[route]) { location.hash = '#' + ROUTE_REDIRECTS[route]; return; }

  // Determine if same section (preserve scroll)
  const prevSection = previousRoute.split('/')[1] || '';
  const newSection = route.split('/')[1] || '';
  const sameSection = prevSection && newSection && prevSection === newSection && route !== '/';
  let skipAutoTopScroll = false;

  // Hide video unless home
  videoBg.classList.toggle('active', route === '/' || route === '');
  document.body.classList.toggle('is-home', route === '/' || route === '');

  // Find page renderer
  let renderer = PAGES[route];
  if (!renderer) {
    renderer = () => pageHeader('🔍', 'Side ikke fundet', '<a href="#/">Hjem</a>') +
      `<div class="page container"><div class="section"><div class="info-box"><h3>404</h3><p>Siden du leder efter findes desværre ikke. <a href="#/" style="color:var(--gold)">Gå til forsiden &rarr;</a></p></div></div></div>`;
  }

  app.innerHTML = renderer();

  // Load Conventus widgets
  const sportKey = route.split('/')[1];
  if (route.endsWith('/tilmelding') && SPORTS[sportKey]) {
    loadConventusWidget(SPORTS[sportKey].conventus);
  }
  if (route === '/fodbold/kontingent') {
    loadConventusIframes(document.getElementById('conventus-area'), [
      'https://www.conventus.dk/dataudv/www/abonnement.php?foreningsid=1212&abonnementsgruppe=5395&abonnementsafdeling=&vis_abonnementer=1&vis_laengde=1&vis_holdnavne=1&layout=relativ',
      'https://www.conventus.dk/dataudv/www/abonnement.php?foreningsid=1212&abonnementsgruppe=5008&abonnementsafdeling=&vis_abonnementer=1&vis_laengde=1&vis_holdnavne=1&layout=relativ'
    ]);
  }
  if (route === '/haandbold/kontingent') {
    loadConventusIframes(document.getElementById('conventus-area'), [
      'https://www.conventus.dk/dataudv/www/abonnement.php?foreningsid=1212&abonnementsgruppe=4931&abonnementsafdeling=&vis_abonnementer=1&vis_laengde=1&vis_holdnavne=1&layout=relativ'
    ]);
  }
  if (route === '/' || route === '') {
    initKalenderPage('home-kalender-root');

    const refreshBtn = document.getElementById('refresh-kalender-btn');
    const refreshStatus = document.getElementById('refresh-kalender-status');
    if (refreshBtn) {
      refreshBtn.addEventListener('click', async () => {
        refreshBtn.disabled = true;
        if (refreshStatus) refreshStatus.textContent = 'Opdaterer kalender...';
        try {
          const result = await refreshKalenderData();
          await initKalenderPage('home-kalender-root');
          const stamp = result.generated_at ? new Date(result.generated_at).toLocaleString('da-DK') : 'nu';
          const sourceErrors = Array.isArray(result.errors) ? result.errors : [];
          if (refreshStatus) {
            if (sourceErrors.length) {
              refreshStatus.textContent = `Kalender delvist opdateret (${stamp}) - ${sourceErrors.length} kilde-fejl`; 
            } else {
              refreshStatus.textContent = `Kalender opdateret (${stamp})`;
            }
          }
        } catch (err) {
          // Keep full error details in browser console for debugging.
          console.error('Kalender-opdatering fejlede:', err);
          if (refreshStatus) refreshStatus.textContent = `Fejl: ${(err && err.message) || 'ukendt fejl'}`;
        } finally {
          refreshBtn.disabled = false;
        }
      });
    }

    const scrollBtn = document.getElementById('scroll-to-kalender');
    if (scrollBtn) scrollBtn.addEventListener('click', () => {
      document.getElementById('home-kalender-root')?.scrollIntoView({ behavior: 'smooth' });
    });
    const sportsBtn = document.getElementById('scroll-to-idraetsgrene');
    if (sportsBtn) sportsBtn.addEventListener('click', () => {
      document.getElementById('home-idraetsgrene')?.scrollIntoView({ behavior: 'smooth' });
    });
    const byfestBtn = document.getElementById('scroll-to-byfest');
    if (byfestBtn) byfestBtn.addEventListener('click', () => {
      scrollToSectionWithOffset('home-byfest');
    });

    if (pendingHomeScrollTarget) {
      const target = pendingHomeScrollTarget;
      pendingHomeScrollTarget = null;
      skipAutoTopScroll = true;
      setTimeout(() => {
        scrollToSectionWithOffset(target);
      }, 30);
    }
  }

  // Scroll: preserve if same section, otherwise go to top
  if (!sameSection && !skipAutoTopScroll) {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }

  previousRoute = route;
  updateNav();

  // Hero fade-in animations: trigger after video has had time to load
  if (route === '/' || route === '') {
    const heroAnims = document.querySelectorAll('.hero-anim');
    setTimeout(() => {
      heroAnims.forEach(el => el.classList.add('visible'));
    }, 1500);
  }
}

// =============================================
// NAVIGATION BUILD (Two-tier)
// =============================================
function buildNav() {
  // Utility bar
  const utilityInner = document.getElementById('utility-bar-inner');
  let utilHTML = '';
  UTILITY_NAV.forEach(item => {
    if (item.external) {
      utilHTML += `<a href="${esc(item.href)}" target="_blank" rel="noopener">${esc(item.label)} ${ICONS.external}</a>`;
    } else if (item.children) {
      utilHTML += `<div class="util-dropdown"><span class="util-trigger">${esc(item.label)}</span><div class="util-dropdown-menu">`;
      item.children.forEach(c => {
        const target = c.external ? ' target="_blank" rel="noopener"' : '';
        utilHTML += `<a href="${esc(c.href)}"${target}>${esc(c.label)}</a>`;
      });
      utilHTML += `</div></div>`;
    } else {
      utilHTML += `<a href="${esc(item.href)}">${esc(item.label)}</a>`;
    }
  });
  utilityInner.innerHTML = utilHTML;

  // Sport nav
  const sportList = document.getElementById('sport-nav-list');
  let sportHTML = '';
  SPORT_NAV.forEach(item => {
    const parentHref = item.href ? `href="${esc(item.href)}"` : '';
    sportHTML += `<li><a ${parentHref}>${esc(item.label)}</a>`;
    if (item.children) {
      sportHTML += '<ul class="dropdown">';
      item.children.forEach(c => {
        const target = c.external ? ' target="_blank" rel="noopener"' : '';
        sportHTML += `<li><a href="${esc(c.href)}"${target}>${esc(c.label)}</a></li>`;
      });
      sportHTML += '</ul>';
    }
    sportHTML += '</li>';
  });
  sportList.innerHTML = sportHTML;

  // Mobile nav
  const mobileList = document.getElementById('mobile-nav-list');
  let mobileHTML = '<li><a href="#/">Hjem</a></li>';

  // Utility items in mobile
  UTILITY_NAV.forEach((item, i) => {
    if (item.external) {
      mobileHTML += `<li><a href="${esc(item.href)}" target="_blank" rel="noopener">${esc(item.label)}</a></li>`;
    } else if (item.children) {
      mobileHTML += `<li><div class="mobile-parent" data-idx="u${i}">${esc(item.label)}</div><ul class="mobile-sub">`;
      item.children.forEach(c => { mobileHTML += `<li><a href="${esc(c.href)}">${esc(c.label)}</a></li>`; });
      mobileHTML += '</ul></li>';
    } else {
      mobileHTML += `<li><a href="${esc(item.href)}">${esc(item.label)}</a></li>`;
    }
  });

  // Divider
  mobileHTML += '<li class="mobile-divider"><span>Idrætsgrene</span></li>';

  // Sport items in mobile (direct links)
  SPORT_NAV.forEach(item => {
    if (item.href) mobileHTML += `<li><a href="${esc(item.href)}">${esc(item.label)}</a></li>`;
  });

  mobileList.innerHTML = mobileHTML;

  // Mobile sub-menu toggles
  document.querySelectorAll('.mobile-parent').forEach(el => {
    el.addEventListener('click', () => {
      el.classList.toggle('open');
      el.nextElementSibling.classList.toggle('open');
    });
  });

  // Close mobile nav on link click
  document.querySelectorAll('.mobile-nav a').forEach(a => {
    a.addEventListener('click', () => closeMobileNav());
  });
}

function updateNav() {
  const route = getRoute();
  // Sport nav active state
  document.querySelectorAll('.sport-nav-list > li').forEach(li => {
    const links = li.querySelectorAll('a');
    let isActive = false;
    links.forEach(l => {
      const href = (l.getAttribute('href') || '').replace('#', '');
      if (href && route.startsWith(href) && href !== '/') isActive = true;
    });
    li.classList.toggle('active', isActive);
  });
  // Utility nav active
  document.querySelectorAll('.utility-inner a, .util-dropdown a').forEach(a => {
    const href = (a.getAttribute('href') || '').replace('#', '');
    a.classList.toggle('active', href && route.startsWith(href) && href !== '/');
  });
}

// =============================================
// MOBILE NAV
// =============================================
function toggleMobileNav() {
  const toggle = document.getElementById('mobile-toggle');
  const nav = document.getElementById('mobile-nav');
  const isOpen = nav.classList.contains('open');
  toggle.classList.toggle('open', !isOpen);
  toggle.setAttribute('aria-expanded', !isOpen);
  nav.classList.toggle('open', !isOpen);
  document.body.style.overflow = isOpen ? '' : 'hidden';
}

function closeMobileNav() {
  const toggle = document.getElementById('mobile-toggle');
  const nav = document.getElementById('mobile-nav');
  toggle.classList.remove('open');
  toggle.setAttribute('aria-expanded', 'false');
  nav.classList.remove('open');
  document.body.style.overflow = '';
}

// =============================================
// SCROLL EFFECTS
// =============================================
function handleScroll() {
  const header = document.getElementById('site-header');
  const backToTop = document.getElementById('back-to-top');
  const scrollY = window.scrollY;
  header.classList.toggle('scrolled', scrollY > 50);
  backToTop.classList.toggle('visible', scrollY > 400);
}

// =============================================
// INIT
// =============================================
document.addEventListener('DOMContentLoaded', () => {
  buildNav();
  navigate();
  window.addEventListener('hashchange', navigate);
  window.addEventListener('scroll', handleScroll, { passive: true });
  document.getElementById('mobile-toggle').addEventListener('click', toggleMobileNav);
  document.getElementById('mobile-nav').addEventListener('click', e => {
    if (e.target && e.target.id === 'mobile-nav') closeMobileNav();
  });
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeMobileNav();
  });
  document.getElementById('back-to-top').addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
});
