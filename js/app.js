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
  camera: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/></svg>',
  external: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="14" height="14"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>'
};

// =============================================
// DATA: Navigation
// =============================================
const NAV = [
  { label: 'Hjem', href: '#/' },
  { label: 'Om VHG', children: [
    { label: 'Bestyrelsen', href: '#/om-vhg/bestyrelsen' },
    { label: 'Referat', href: '#/om-vhg/referat' },
    { label: 'Vedtægter', href: '#/om-vhg/vedtaegter' },
    { label: 'Kalender', href: '#/om-vhg/kalender' }
  ]},
  { label: 'Badminton', href: '#/badminton', children: [
    { label: 'Bestyrelsen', href: '#/badminton/bestyrelsen' },
    { label: 'Træningstider', href: '#/badminton/traeningstider' },
    { label: 'Tilmelding', href: '#/badminton/tilmelding' },
    { label: 'Information', href: '#/badminton/information' }
  ]},
  { label: 'Bordtennis', href: '#/bordtennis', children: [
    { label: 'Bestyrelsen', href: '#/bordtennis/bestyrelsen' },
    { label: 'Træningstider', href: '#/bordtennis/traeningstider' },
    { label: 'Tilmelding', href: '#/bordtennis/tilmelding' }
  ]},
  { label: 'E-sport', href: '#/e-sport', children: [
    { label: 'Bestyrelsen', href: '#/e-sport/bestyrelsen' },
    { label: 'Tilmelding', href: '#/e-sport/tilmelding' }
  ]},
  { label: 'Floorball', href: '#/floorball', children: [
    { label: 'Bestyrelsen', href: '#/floorball/bestyrelsen' },
    { label: 'Tilmelding', href: '#/floorball/tilmelding' }
  ]},
  { label: 'Fodbold', children: [
    { label: 'Bestyrelsen', href: '#/fodbold/bestyrelsen' },
    { label: 'Senior', href: '#/fodbold/senior' },
    { label: 'Børn & Ungdom', href: '#/fodbold/boern-ungdom' },
    { label: 'Kontingent & Tilmelding', href: '#/fodbold/kontingent' }
  ]},
  { label: 'Gymnastik', href: '#/gymnastik', children: [
    { label: 'Bestyrelsen', href: '#/gymnastik/bestyrelsen' },
    { label: 'Tilmelding', href: '#/gymnastik/tilmelding' }
  ]},
  { label: 'Håndbold', href: '#/haandbold', children: [
    { label: 'Bestyrelsen', href: '#/haandbold/bestyrelsen' },
    { label: 'Træningstider', href: '#/haandbold/traeningstider' },
    { label: 'Trænere', href: '#/haandbold/traenere' },
    { label: 'Antibulli politik', href: '#/haandbold/antibulli' },
    { label: 'Kontingent & Tilmelding', href: '#/haandbold/kontingent' }
  ]},
  { label: 'Skateklub', href: '#/skateklub', children: [
    { label: 'Bestyrelsen', href: '#/skateklub/bestyrelsen' },
    { label: 'Tilmelding', href: '#/skateklub/tilmelding' }
  ]},
  { label: 'Disc Golf', href: '#/disc-golf', children: [
    { label: 'Bestyrelsen', href: '#/disc-golf/bestyrelsen' },
    { label: 'Tilmelding', href: '#/disc-golf/tilmelding' },
    { label: 'Kort & Rabataftaler', href: '#/disc-golf/kort' }
  ]},
  { label: 'Cafeen', href: '#/cafeen' },
  { label: 'Conventus Login', href: 'https://www.conventus.dk/medlemslogin/index.php?forening=1212&msg=1', external: true }
];

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
    desc: 'Bordtennis i Vester Hassing — hyggeligt og aktivt for børn, unge og voksne. Vi spiller i hallen og der er plads til alle niveauer.',
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
    name: 'Floorball', icon: '🏑',
    desc: 'Floorball i Vester Hassing — en sjov og actionfyldt sport for hele familien. Hurtigt spil, godt fællesskab.',
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
    desc: 'Vester Hassing Skateklub — et fedt fællesskab for alle der elsker at skate. Alle aldre og niveauer er velkomne.',
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
    desc: 'Disc Golf i Vester Hassing — en udendørs sport for hele familien. Spil på vores lokale bane og nyd naturen.',
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

// Fodbold & Håndbold data
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

const HOVEDBESTYRELSEN = [
  { title: 'Formand', name: 'Allan Skov', email: 'formand@vhg.dk', phone: '22167599' },
  { title: 'Næstformand', name: 'Lars Jakobsen', email: 'lkj@evt.dk' },
  { title: 'Kasserer', name: 'Jonas Bundgaard Kristensen', email: 'jonsekristensen@hotmail.com', phone: '22769304' },
  { title: 'Sekretær', name: 'Anne-Britt Andersen', email: 'annebrittandersenc@gmail.com', phone: '26 11 68 70' },
  { title: 'Suppleant', name: 'Marianne Vedel', email: 'majulle@hotmail.com' },
  { title: 'Medlem (Formand håndbold)', name: 'Berit Andersen', email: 'beritandersen@hotmail.com', phone: '51 22 91 22' },
  { title: 'Medlem (Formand fodbold)', name: 'Marc Agerbo Jakobsen', email: 'agerbo100@gmail.com', phone: '30253680' },
  { title: 'Medlem (Formand badminton)', name: 'Claus René Mikkelsen', email: 'clmik8@gmail.com' },
  { title: 'Medlem (Formand e-sport)', name: 'Nikolaj Søndergaard Sørensen', email: 'Nikolaj0299@gmail.com', phone: '29253795' },
  { title: 'Medlem (Formand skateklub)', name: 'Mikael Ivan Vinther Christensen', email: 'mikael.ivan.christensen@gmail.com', phone: '23685559' },
  { title: 'Medlem (Formand floorball)', name: 'Anders Bech Jensen', email: 'losan@live.dk' },
  { title: 'Medlem (Formand gymnastik)', name: 'Inger Marie Badsberg', email: 'imbadsberg@gmail.com', phone: '20808201' },
  { title: 'Medlem (Formand bordtennis)', name: 'Per Kristensen', email: 'Murerper@hotmail.dk', phone: '25 58 20 05' }
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
function personCardHTML(p) {
  let contact = '';
  if (p.email) contact += `<a href="mailto:${esc(p.email)}">${ICONS.mail}<span>${esc(p.email)}</span></a>`;
  if (p.phone) contact += `<a href="tel:${esc(p.phone.replace(/\s/g,''))}">${ICONS.phone}<span>${esc(p.phone)}</span></a>`;
  return `<div class="person-card"><div class="person-card-header">${esc(p.title || 'Træner')}</div><div class="person-card-body"><h3>${esc(p.name)}</h3><div class="person-contact">${contact}</div></div></div>`;
}

function boardHTML(members, title) {
  return `<div class="section"><h2 class="section-title">${esc(title || 'Bestyrelsen')}</h2><div class="board-grid">${members.map(personCardHTML).join('')}</div></div>`;
}

function conventusWidgetHTML(url, title) {
  return `<div class="section"><h2 class="section-title">${esc(title || 'Tilmelding')}</h2><div class="conventus-widget" id="conventus-area"></div></div>`;
}

function fbLinkHTML(url, label) {
  return `<a href="${esc(url)}" target="_blank" rel="noopener" class="fb-link-card">${ICONS.facebook}<div><strong>${esc(label || 'Følg os på Facebook')}</strong><br><small style="color:var(--gray-400)">Åbner i nyt vindue</small></div>${ICONS.external}</a>`;
}

function imagePlaceholder(text) {
  return `<div class="image-placeholder">${ICONS.camera}<span>${esc(text || 'Billede kommer snart')}</span></div>`;
}

function pageHeader(icon, title, breadcrumb, desc) {
  const bc = breadcrumb ? `<div class="breadcrumb">${breadcrumb}</div>` : '';
  const d = desc ? `<p>${desc}</p>` : '';
  const ic = icon ? `<span class="page-icon">${icon}</span>` : '';
  return `<div class="page-header">${ic}<h1>${title}</h1>${bc}${d}</div>`;
}

function subNavHTML(items, currentHash) {
  return `<div class="sub-nav">${items.map(i => `<a href="${i.href}" class="${currentHash === i.href.replace('#','') ? 'active' : ''}">${esc(i.label)}</a>`).join('')}</div>`;
}

function esc(s) { if (!s) return ''; const d = document.createElement('div'); d.textContent = s; return d.innerHTML; }

// =============================================
// PAGE RENDERERS
// =============================================
const PAGES = {};

// --- HOME ---
PAGES[''] = PAGES['/'] = function() {
  document.getElementById('video-bg').classList.add('active');

  const sportCards = [
    { key: 'badminton', ...SPORTS.badminton },
    { key: 'bordtennis', ...SPORTS.bordtennis },
    { key: 'e-sport', ...SPORTS['e-sport'] },
    { key: 'floorball', ...SPORTS.floorball },
    { key: 'fodbold', name: 'Fodbold', icon: '⚽', desc: 'Fodbold for alle aldre — fra børnebold til senior. Herrer, kvinder, drenge og piger.', facebook: FODBOLD.facebook },
    { key: 'gymnastik', ...SPORTS.gymnastik },
    { key: 'haandbold', name: 'Håndbold', icon: '🤾', desc: 'Håndbold fra U7 til senior — stærk fællesskab og god konkurrence.', facebook: HAANDBOLD.facebook },
    { key: 'skateklub', ...SPORTS.skateklub },
    { key: 'disc-golf', ...SPORTS['disc-golf'] }
  ];

  return `
    <div class="hero">
      <h1>Vester Hassing<br>Gymnastik &amp; Idrætsforening</h1>
      <p class="hero-subtitle">Sport, fællesskab og bevægelse for hele familien</p>
      <div class="hero-cta">
        <a href="#/om-vhg/bestyrelsen" class="btn btn-primary">Om foreningen</a>
        <a href="https://www.conventus.dk/medlemslogin/index.php?forening=1212&msg=1" target="_blank" rel="noopener" class="btn btn-outline">Conventus Medlems Login</a>
      </div>
      <div class="scroll-indicator">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"/></svg>
      </div>
    </div>

    <div class="container">
      <div class="section">
        <h2 class="section-title text-center" style="display:block;text-align:center">Vores idrætsgrene</h2>
        <div class="sport-grid">
          ${sportCards.map(s => `
            <a href="#/${s.key === 'fodbold' ? 'fodbold/senior' : s.key === 'haandbold' ? 'haandbold' : s.key}" class="sport-card" style="color:inherit">
              <div class="sport-card-image"><span class="sport-icon">${s.icon}</span></div>
              <div class="sport-card-body">
                <h3>${esc(s.name)}</h3>
                <p>${esc(s.desc)}</p>
              </div>
            </a>
          `).join('')}
        </div>
      </div>

      <div class="quick-info">
        <div class="quick-info-item">
          <div class="qi-icon">📍</div>
          <h3>Find os</h3>
          <p>Halsvej 199B<br>Vester Hassing, 9310 Vodskov</p>
        </div>
        <div class="quick-info-item">
          <div class="qi-icon">☕</div>
          <h3>Cafeen</h3>
          <p>Åben man-tor 16-19<br><a href="#/cafeen">Se mere →</a></p>
        </div>
        <div class="quick-info-item">
          <div class="qi-icon">📧</div>
          <h3>Kontakt</h3>
          <p>formand@vhg.dk<br><a href="tel:22167599">22167599</a></p>
        </div>
      </div>

      <div class="section">
        <h2 class="section-title">Nyt fra VHG</h2>
        <div class="fb-embed">
          <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FVesterHassingGF&tabs=timeline&width=500&height=600&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=true" width="500" height="600" style="border:none;overflow:hidden;max-width:100%;" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" loading="lazy"></iframe>
        </div>
      </div>
    </div>
  `;
};

// --- OM VHG: Bestyrelsen ---
PAGES['/om-vhg/bestyrelsen'] = function() {
  const subNav = subNavHTML([
    { label: 'Bestyrelsen', href: '#/om-vhg/bestyrelsen' },
    { label: 'Referat', href: '#/om-vhg/referat' },
    { label: 'Vedtægter', href: '#/om-vhg/vedtaegter' },
    { label: 'Kalender', href: '#/om-vhg/kalender' }
  ], '/om-vhg/bestyrelsen');

  return pageHeader('🏛️', 'Hovedbestyrelsen', '<a href="#/">Hjem</a> / Om VHG', 'Vester Hassing GF\'s hovedbestyrelse har aktuelt følgende sammensætning. Har du spørgsmål, er du meget velkommen til at kontakte bestyrelsen.') +
    `<div class="page container">${subNav}${boardHTML(HOVEDBESTYRELSEN, 'Hovedbestyrelsen')}</div>`;
};

// --- OM VHG: Referat ---
PAGES['/om-vhg/referat'] = function() {
  const subNav = subNavHTML([
    { label: 'Bestyrelsen', href: '#/om-vhg/bestyrelsen' },
    { label: 'Referat', href: '#/om-vhg/referat' },
    { label: 'Vedtægter', href: '#/om-vhg/vedtaegter' },
    { label: 'Kalender', href: '#/om-vhg/kalender' }
  ], '/om-vhg/referat');

  const links = REFERATER.map(r =>
    `<a href="${esc(r.file)}" target="_blank" rel="noopener" class="pdf-link">${ICONS.pdf} Referat af VHG generalforsamling ${esc(r.year)}</a>`
  ).join('<br>');

  return pageHeader('📄', 'Referater', '<a href="#/">Hjem</a> / Om VHG') +
    `<div class="page container">${subNav}<div class="section"><h2 class="section-title">Referater fra generalforsamlinger</h2><div>${links}</div></div></div>`;
};

// --- OM VHG: Vedtægter ---
PAGES['/om-vhg/vedtaegter'] = function() {
  const subNav = subNavHTML([
    { label: 'Bestyrelsen', href: '#/om-vhg/bestyrelsen' },
    { label: 'Referat', href: '#/om-vhg/referat' },
    { label: 'Vedtægter', href: '#/om-vhg/vedtaegter' },
    { label: 'Kalender', href: '#/om-vhg/kalender' }
  ], '/om-vhg/vedtaegter');

  return pageHeader('📋', 'Vedtægter', '<a href="#/">Hjem</a> / Om VHG') +
    `<div class="page container">${subNav}<div class="section"><h2 class="section-title">Foreningens vedtægter</h2><a href="assets/pdf/vedtaegter.pdf" target="_blank" rel="noopener" class="pdf-link">${ICONS.pdf} Download vedtægter (PDF)</a></div></div>`;
};

// --- OM VHG: Kalender ---
PAGES['/om-vhg/kalender'] = function() {
  const subNav = subNavHTML([
    { label: 'Bestyrelsen', href: '#/om-vhg/bestyrelsen' },
    { label: 'Referat', href: '#/om-vhg/referat' },
    { label: 'Vedtægter', href: '#/om-vhg/vedtaegter' },
    { label: 'Kalender', href: '#/om-vhg/kalender' }
  ], '/om-vhg/kalender');

  return pageHeader('📅', 'Kalender', '<a href="#/">Hjem</a> / Om VHG') +
    `<div class="page container">${subNav}<div class="section"><div class="info-box"><h3>Kalender</h3><p>Hold øje med foreningens aktiviteter og arrangementer her. Følg desuden med på vores <a href="https://www.facebook.com/VesterHassingGF" target="_blank" rel="noopener" style="color:var(--gold)">Facebook-side</a> for de seneste nyheder og begivenheder.</p></div>${imagePlaceholder('Eventkalender — kommer snart')}</div></div>`;
};

// --- Generic sport page ---
function sportPage(key) {
  const s = SPORTS[key];
  return pageHeader(s.icon, s.name, `<a href="#/">Hjem</a>`, s.desc) +
    `<div class="page container">
      ${sportSubNav(key)}
      <div class="section">
        ${imagePlaceholder('Aktionsbillede fra ' + s.name + ' — kommer snart')}
      </div>
      <div class="section">
        ${fbLinkHTML(s.facebook, s.name + ' på Facebook')}
      </div>
    </div>`;
}

function sportSubNav(key) {
  const item = NAV.find(n => (n.href||'').includes(key) || (n.children||[]).some(c => c.href.includes(key)));
  if (!item || !item.children) return '';
  const hash = location.hash.replace('#','') || '/';
  return subNavHTML(item.children, hash);
}

function sportBoardPage(key) {
  const s = SPORTS[key];
  return pageHeader(s.icon, s.name + ' — Bestyrelsen', `<a href="#/">Hjem</a> / <a href="#/${key}">${esc(s.name)}</a>`) +
    `<div class="page container">${sportSubNav(key)}${boardHTML(s.board, 'Bestyrelse — ' + s.name)}</div>`;
}

function sportTilmeldingPage(key) {
  const s = SPORTS[key];
  return pageHeader(s.icon, s.name + ' — Tilmelding', `<a href="#/">Hjem</a> / <a href="#/${key}">${esc(s.name)}</a>`) +
    `<div class="page container">${sportSubNav(key)}${conventusWidgetHTML(s.conventus, 'Tilmelding — ' + s.name)}</div>`;
}

// Register simple sport pages
['badminton','bordtennis','e-sport','floorball','gymnastik','skateklub','disc-golf'].forEach(key => {
  PAGES['/' + key] = () => sportPage(key);
  PAGES['/' + key + '/bestyrelsen'] = () => sportBoardPage(key);
  PAGES['/' + key + '/tilmelding'] = () => sportTilmeldingPage(key);
});

// --- Badminton extra pages ---
PAGES['/badminton/traeningstider'] = function() {
  const s = SPORTS.badminton;
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
  return pageHeader(s.icon, 'Badminton — Træningstider', '<a href="#/">Hjem</a> / <a href="#/badminton">Badminton</a>', 'Sæson 2025/2026. Se priser under tilmelding. Vedr. ledige motionistbaner, skriv direkte til formanden.') +
    `<div class="page container">${sportSubNav('badminton')}<div class="section"><h2 class="section-title">Træningstider</h2><table class="training-table"><thead><tr><th>Hold</th><th>Tidspunkt</th></tr></thead><tbody>${rows.map(r=>`<tr><td><strong>${r[0]}</strong></td><td>${r[1]}</td></tr>`).join('')}</tbody></table><p class="mt-2" style="font-size:0.85rem;color:var(--gray-500)">Opdateret 05.08.2025</p></div></div>`;
};

PAGES['/badminton/information'] = function() {
  const s = SPORTS.badminton;
  return pageHeader(s.icon, 'Badminton — Information', '<a href="#/">Hjem</a> / <a href="#/badminton">Badminton</a>') +
    `<div class="page container">${sportSubNav('badminton')}<div class="section"><div class="card"><div class="card-header">Information fra Badminton</div><div class="card-body"><p>Se fanen med træningstider og opstart for de forskellige hold.</p><p>For yderligere information, kontakt badminton-bestyrelsen.</p></div></div></div></div>`;
};

// --- Bordtennis extra pages ---
PAGES['/bordtennis/traeningstider'] = function() {
  const rows = [
    ['Nybegyndere og letøvede', 'Tirsdag 17:30-18:30 · Torsdag 17:30-18:30'],
    ['Øvede', 'Tirsdag 18:30-19:30 · Torsdag 18:30-19:30'],
    ['Senior', 'Tirsdag 19:30-21:30 · Torsdag 19:30-21:30']
  ];
  return pageHeader('🏓', 'Bordtennis — Træningstider', '<a href="#/">Hjem</a> / <a href="#/bordtennis">Bordtennis</a>') +
    `<div class="page container">${sportSubNav('bordtennis')}<div class="section"><h2 class="section-title">Træningstider</h2><table class="training-table"><thead><tr><th>Hold</th><th>Tidspunkt</th></tr></thead><tbody>${rows.map(r=>`<tr><td><strong>${r[0]}</strong></td><td>${r[1]}</td></tr>`).join('')}</tbody></table></div></div>`;
};

// --- Disc Golf extra pages ---
PAGES['/disc-golf/kort'] = function() {
  return pageHeader('🥏', 'Disc Golf — Kort & Rabataftaler', '<a href="#/">Hjem</a> / <a href="#/disc-golf">Disc Golf</a>') +
    `<div class="page container">${sportSubNav('disc-golf')}<div class="section"><h2 class="section-title">Banekort</h2><div class="card"><div class="card-body"><img src="assets/images/disc-golf-kort.jpg" alt="Disc Golf banekort" style="width:100%;border-radius:var(--radius-sm)" onerror="this.parentElement.innerHTML='${imagePlaceholder('Banekort — kommer snart').replace(/'/g,"\\'")}'" /></div></div></div></div>`;
};

// --- FODBOLD ---
PAGES['/fodbold/bestyrelsen'] = function() {
  const subNav = subNavHTML([
    { label: 'Bestyrelsen', href: '#/fodbold/bestyrelsen' },
    { label: 'Senior', href: '#/fodbold/senior' },
    { label: 'Børn & Ungdom', href: '#/fodbold/boern-ungdom' },
    { label: 'Kontingent & Tilmelding', href: '#/fodbold/kontingent' }
  ], '/fodbold/bestyrelsen');
  return pageHeader('⚽', 'Fodbold — Bestyrelsen', '<a href="#/">Hjem</a> / Fodbold') +
    `<div class="page container">${subNav}${boardHTML(FODBOLD.board, 'Bestyrelse — Fodbold')}<div class="section">${fbLinkHTML(FODBOLD.facebook, 'VHG Fodbold på Facebook')}</div></div>`;
};

PAGES['/fodbold/senior'] = function() {
  const subNav = subNavHTML([
    { label: 'Bestyrelsen', href: '#/fodbold/bestyrelsen' },
    { label: 'Senior', href: '#/fodbold/senior' },
    { label: 'Børn & Ungdom', href: '#/fodbold/boern-ungdom' },
    { label: 'Kontingent & Tilmelding', href: '#/fodbold/kontingent' }
  ], '/fodbold/senior');
  return pageHeader('⚽', 'Fodbold — Senior', '<a href="#/">Hjem</a> / Fodbold', 'Vores seniorhold for herrer og kvinder.') +
    `<div class="page container">${subNav}<div class="section"><h2 class="section-title">Seniorhold</h2><div class="board-grid">${FODBOLD.seniorTeams.map(t => `<div class="card"><div class="card-header">${esc(t.name)}</div><div class="card-body"><p>${esc(t.desc)}</p>${imagePlaceholder('Holdbillede — ' + t.name)}</div></div>`).join('')}</div></div></div>`;
};

PAGES['/fodbold/boern-ungdom'] = function() {
  const subNav = subNavHTML([
    { label: 'Bestyrelsen', href: '#/fodbold/bestyrelsen' },
    { label: 'Senior', href: '#/fodbold/senior' },
    { label: 'Børn & Ungdom', href: '#/fodbold/boern-ungdom' },
    { label: 'Kontingent & Tilmelding', href: '#/fodbold/kontingent' }
  ], '/fodbold/boern-ungdom');
  return pageHeader('⚽', 'Fodbold — Børn & Ungdom', '<a href="#/">Hjem</a> / Fodbold', 'Oversigt over alle børne- og ungdomshold i VHG Fodbold.') +
    `<div class="page container">${subNav}<div class="section"><h2 class="section-title">Hold</h2><div class="sport-grid">${FODBOLD.youthTeams.map(t => `<div class="card"><div class="card-header">${esc(t)}</div><div class="card-body"><p>Kontakt bestyrelsen for mere info om holdet.</p></div></div>`).join('')}</div></div></div>`;
};

PAGES['/fodbold/kontingent'] = function() {
  const subNav = subNavHTML([
    { label: 'Bestyrelsen', href: '#/fodbold/bestyrelsen' },
    { label: 'Senior', href: '#/fodbold/senior' },
    { label: 'Børn & Ungdom', href: '#/fodbold/boern-ungdom' },
    { label: 'Kontingent & Tilmelding', href: '#/fodbold/kontingent' }
  ], '/fodbold/kontingent');
  return pageHeader('⚽', 'Fodbold — Kontingent & Tilmelding', '<a href="#/">Hjem</a> / Fodbold') +
    `<div class="page container">${subNav}
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
PAGES['/haandbold'] = function() {
  const subNav = subNavHTML([
    { label: 'Bestyrelsen', href: '#/haandbold/bestyrelsen' },
    { label: 'Træningstider', href: '#/haandbold/traeningstider' },
    { label: 'Trænere', href: '#/haandbold/traenere' },
    { label: 'Antibulli politik', href: '#/haandbold/antibulli' },
    { label: 'Kontingent & Tilmelding', href: '#/haandbold/kontingent' }
  ], '/haandbold');
  return pageHeader('🤾', 'Håndbold', '<a href="#/">Hjem</a>', 'Håndbold fra U7 til senior — stærkt fællesskab, god konkurrence og masser af sjov.') +
    `<div class="page container">${subNav}
      <div class="section">${imagePlaceholder('Aktionsbillede fra håndbold — kommer snart')}</div>
      <div class="section">
        <h2 class="section-title">Dokumenter</h2>
        <a href="https://156-vester-hassing-gf.euwest01.umbraco.io/media/1594/sponsorkoncept-2025-praesentation-til-sponsorer.pdf" target="_blank" rel="noopener" class="pdf-link">${ICONS.pdf} Sponsorkoncept 2025</a><br>
        <a href="https://156-vester-hassing-gf.euwest01.umbraco.io/media/1597/toejkoncept-2025.pdf" target="_blank" rel="noopener" class="pdf-link">${ICONS.pdf} Tøjkoncept 2025</a>
      </div>
      <div class="section">${fbLinkHTML(HAANDBOLD.facebook, 'VGH Håndbold på Facebook')}</div>
    </div>`;
};

PAGES['/haandbold/bestyrelsen'] = function() {
  const subNav = subNavHTML([
    { label: 'Bestyrelsen', href: '#/haandbold/bestyrelsen' },
    { label: 'Træningstider', href: '#/haandbold/traeningstider' },
    { label: 'Trænere', href: '#/haandbold/traenere' },
    { label: 'Antibulli politik', href: '#/haandbold/antibulli' },
    { label: 'Kontingent & Tilmelding', href: '#/haandbold/kontingent' }
  ], '/haandbold/bestyrelsen');
  return pageHeader('🤾', 'Håndbold — Bestyrelsen', '<a href="#/">Hjem</a> / <a href="#/haandbold">Håndbold</a>') +
    `<div class="page container">${subNav}${boardHTML(HAANDBOLD.board, 'Bestyrelse — Håndbold')}</div>`;
};

PAGES['/haandbold/traeningstider'] = function() {
  const subNav = subNavHTML([
    { label: 'Bestyrelsen', href: '#/haandbold/bestyrelsen' },
    { label: 'Træningstider', href: '#/haandbold/traeningstider' },
    { label: 'Trænere', href: '#/haandbold/traenere' },
    { label: 'Antibulli politik', href: '#/haandbold/antibulli' },
    { label: 'Kontingent & Tilmelding', href: '#/haandbold/kontingent' }
  ], '/haandbold/traeningstider');
  return pageHeader('🤾', 'Håndbold — Træningstider 2025/2026', '<a href="#/">Hjem</a> / <a href="#/haandbold">Håndbold</a>') +
    `<div class="page container">${subNav}<div class="section"><h2 class="section-title">Træningstider</h2><table class="training-table"><thead><tr><th>Hold</th><th>Tidspunkt</th></tr></thead><tbody>${HAANDBOLD.training.map(t => `<tr><td><strong>${esc(t.hold)}</strong></td><td>${esc(t.tider)}</td></tr>`).join('')}</tbody></table></div></div>`;
};

PAGES['/haandbold/traenere'] = function() {
  const subNav = subNavHTML([
    { label: 'Bestyrelsen', href: '#/haandbold/bestyrelsen' },
    { label: 'Træningstider', href: '#/haandbold/traeningstider' },
    { label: 'Trænere', href: '#/haandbold/traenere' },
    { label: 'Antibulli politik', href: '#/haandbold/antibulli' },
    { label: 'Kontingent & Tilmelding', href: '#/haandbold/kontingent' }
  ], '/haandbold/traenere');

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

  return pageHeader('🤾', 'Håndbold — Trænere', '<a href="#/">Hjem</a> / <a href="#/haandbold">Håndbold</a>') +
    `<div class="page container">${subNav}<div class="section"><h2 class="section-title">Trænere</h2>${groups}</div></div>`;
};

PAGES['/haandbold/antibulli'] = function() {
  const subNav = subNavHTML([
    { label: 'Bestyrelsen', href: '#/haandbold/bestyrelsen' },
    { label: 'Træningstider', href: '#/haandbold/traeningstider' },
    { label: 'Trænere', href: '#/haandbold/traenere' },
    { label: 'Antibulli politik', href: '#/haandbold/antibulli' },
    { label: 'Kontingent & Tilmelding', href: '#/haandbold/kontingent' }
  ], '/haandbold/antibulli');

  return pageHeader('🤾', 'Antibulli politik', '<a href="#/">Hjem</a> / <a href="#/haandbold">Håndbold</a>', 'Hos VGH Håndbold skaber vi stærke fællesskaber hvor der ikke er plads til mobning.') +
    `<div class="page container">${subNav}<div class="section"><div class="card"><div class="card-body policy-content">
      <h3>1. Indledning</h3>
      <p>Hos VGH Håndbold ønsker vi at skabe et trygt og inkluderende miljø, hvor alle spillere, trænere, frivillige og forældre føler sig velkomne og respekterede. Mobning, chikane og ekskluderende adfærd accepteres ikke, og vi har en klar politik og handlingsplan for at forebygge og håndtere sådanne situationer.</p>
      <p>Antibulli Håndbold skaber stærke fællesskaber og høj trivsel på børnenes håndboldhold. Langt de fleste børn er glade for at tage til træning, men trivsel i fritidslivet er ikke en selvfølge. Hvert femte barn har oplevet at blive mobbet, drillet eller holdt udenfor til deres fritidsaktivitet.</p>

      <h3>2. Definition af mobning</h3>
      <p>Mobning er gentagen negativ eller skadelig adfærd, der udøves bevidst og kan omfatte:</p>
      <ul>
        <li>Fysisk mobning (slag, skub, mv.)</li>
        <li>Verbal mobning (nedladende kommentarer, hån, trusler)</li>
        <li>Social mobning (udelukkelse, bagtalelse)</li>
        <li>Digital mobning (krænkende beskeder, deling af billeder uden samtykke)</li>
      </ul>

      <h3>3. Forebyggelse</h3>
      <p>For at sikre et positivt klubmiljø arbejder vi aktivt med følgende:</p>
      <ul>
        <li><strong>Opdragelse i respekt:</strong> Trænere og ledere går forrest som gode rollemodeller.</li>
        <li><strong>Åben dialog:</strong> Spillere, forældre og frivillige opfordres til at tale åbent om trivsel.</li>
        <li><strong>Ens spillertøj:</strong> Alle er klædt ens til kamp med klubbens sponsorer på tøjet.</li>
        <li><strong>Klubværdier og kodeks:</strong> Vi har klare retningslinjer for omgang.</li>
        <li><strong>Uddannelse:</strong> Årlig præsentation af Antibulli Håndbold for frivillige.</li>
        <li><strong>Konkrete råd og øvelser:</strong> Øvelser målrettet børn i alderen 6-12 år.</li>
        <li><strong>Arrangementer:</strong> Jævnlige sociale arrangementer der fremmer fair play og holdånd.</li>
      </ul>

      <h3>4. Håndtering af mobning</h3>
      <ol>
        <li><strong>Observation og opsporing:</strong> Trænere er opmærksomme på tegn på mobning.</li>
        <li><strong>Dialog med involverede:</strong> Berørte spillere kontaktes for at afdække situationen.</li>
        <li><strong>Inddragelse af forældre:</strong> Forældre inddrages i processen ved behov.</li>
        <li><strong>Konsekvenser og opfølgning:</strong> Advarsler, vejledning eller i yderste konsekvens eksklusion.</li>
      </ol>

      <h3>5. Ansvar og kontaktpersoner</h3>
      <p>Alle i klubben har et fælles ansvar for at bekæmpe mobning. Kontakt:</p>
      <p><strong>Morten Kam</strong> — Tlf. <a href="tel:61109165">61109165</a> — <a href="mailto:vhghaandbold@outlook.dk">vhghaandbold@outlook.dk</a></p>
    </div></div></div></div>`;
};

PAGES['/haandbold/kontingent'] = function() {
  const subNav = subNavHTML([
    { label: 'Bestyrelsen', href: '#/haandbold/bestyrelsen' },
    { label: 'Træningstider', href: '#/haandbold/traeningstider' },
    { label: 'Trænere', href: '#/haandbold/traenere' },
    { label: 'Antibulli politik', href: '#/haandbold/antibulli' },
    { label: 'Kontingent & Tilmelding', href: '#/haandbold/kontingent' }
  ], '/haandbold/kontingent');
  return pageHeader('🤾', 'Håndbold — Kontingent & Tilmelding', '<a href="#/">Hjem</a> / <a href="#/haandbold">Håndbold</a>') +
    `<div class="page container">${subNav}
      <div class="section">
        <h2 class="section-title">Kontingenttakster</h2>
        <p class="mb-2">Kontingent pr. halve sæson.</p>
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
        ${imagePlaceholder('Billede af cafeen — kommer snart')}
      </div>
      <div class="section">
        ${fbLinkHTML('https://www.facebook.com/profile.php?id=100066490641015', 'Gevaldig (Cafeen) på Facebook')}
      </div>
    </div>`;
};

// =============================================
// ROUTER
// =============================================
function getRoute() {
  const hash = location.hash.replace('#', '') || '/';
  return hash;
}

function loadConventusWidget(url) {
  const area = document.getElementById('conventus-area');
  if (!area || !url) return;
  area.innerHTML = '';
  const iframe = document.createElement('iframe');
  iframe.style.cssText = 'width:100%;min-height:500px;border:none;overflow:hidden;';
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
    iframe.style.cssText = 'width:100%;min-height:400px;border:none;overflow:hidden;margin-bottom:1rem;';
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

  // Hide video unless home
  videoBg.classList.toggle('active', route === '/' || route === '');

  // Find page renderer
  let renderer = PAGES[route];
  if (!renderer) {
    // 404
    renderer = () => pageHeader('🔍', 'Side ikke fundet', '<a href="#/">Hjem</a>') +
      `<div class="page container"><div class="section"><div class="info-box"><h3>404</h3><p>Siden du leder efter findes desværre ikke. <a href="#/" style="color:var(--gold)">Gå til forsiden →</a></p></div></div></div>`;
  }

  app.innerHTML = renderer();

  // Load Conventus widget if needed
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

  // Scroll to top
  window.scrollTo({ top: 0, behavior: 'instant' });

  // Update active nav
  updateNav();

  // Trigger fade-in animations
  requestAnimationFrame(() => {
    document.querySelectorAll('.fade-in').forEach(el => {
      const observer = new IntersectionObserver(entries => {
        entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target); } });
      }, { threshold: 0.1 });
      observer.observe(el);
    });
  });
}

// =============================================
// NAVIGATION BUILD
// =============================================
function buildNav() {
  const desktopList = document.getElementById('nav-list');
  const mobileList = document.getElementById('mobile-nav-list');

  let desktopHTML = '';
  let mobileHTML = '';

  NAV.forEach((item, i) => {
    if (item.external) {
      desktopHTML += `<li><a href="${esc(item.href)}" target="_blank" rel="noopener">${esc(item.label)} ${ICONS.external}</a></li>`;
      mobileHTML += `<li><a href="${esc(item.href)}" target="_blank" rel="noopener">${esc(item.label)}</a></li>`;
      return;
    }

    if (item.children) {
      const parentHref = item.href ? `href="${esc(item.href)}"` : '';
      const parentTag = item.href ? 'a' : 'span';
      desktopHTML += `<li><${parentTag} ${parentHref}>${esc(item.label)}</${parentTag}><ul class="dropdown">`;
      item.children.forEach(c => {
        desktopHTML += `<li><a href="${esc(c.href)}">${esc(c.label)}</a></li>`;
      });
      desktopHTML += '</ul></li>';

      mobileHTML += `<li><div class="mobile-parent" data-idx="${i}">${esc(item.label)}</div><ul class="mobile-sub">`;
      if (item.href) mobileHTML += `<li><a href="${esc(item.href)}">Oversigt</a></li>`;
      item.children.forEach(c => {
        mobileHTML += `<li><a href="${esc(c.href)}">${esc(c.label)}</a></li>`;
      });
      mobileHTML += '</ul></li>';
    } else {
      desktopHTML += `<li><a href="${esc(item.href)}">${esc(item.label)}</a></li>`;
      mobileHTML += `<li><a href="${esc(item.href)}">${esc(item.label)}</a></li>`;
    }
  });

  desktopList.innerHTML = desktopHTML;
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
  document.querySelectorAll('.nav-list > li').forEach(li => {
    const a = li.querySelector('a, span');
    const links = li.querySelectorAll('a');
    let isActive = false;
    links.forEach(l => {
      const href = (l.getAttribute('href') || '').replace('#', '');
      if (href && route.startsWith(href) && href !== '/') isActive = true;
      if (href === '/' && route === '/') isActive = true;
    });
    li.classList.toggle('active', isActive);
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
  document.getElementById('back-to-top').addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
});
