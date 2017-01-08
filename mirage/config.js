export default function() {
  this.namespace = '/api';

  this.get('/artists', function() {
    return {
      data: [{
        resultsPage: {
        status: "ok",
        results: {
            artist: [{
                onTourUntil: "2017-05-19",
                displayName: "Metallica",
                uri: "http://www.songkick.com/artists/331163-metallica?utm_source=42541&utm_medium=partner",
                id: 331163,
                identifier: [{
                    href: "http://api.songkick.com/api/3.0/artists/mbid:65f4f0c5-ef9e-490c-aee3-909e7ae6b2ab.json",
                    eventsHref: "http://api.songkick.com/api/3.0/artists/mbid:65f4f0c5-ef9e-490c-aee3-909e7ae6b2ab/calendar.json",
                    mbid: "65f4f0c5-ef9e-490c-aee3-909e7ae6b2ab",
                    setlistsHref: "http://api.songkick.com/api/3.0/artists/mbid:65f4f0c5-ef9e-490c-aee3-909e7ae6b2ab/setlists.json"
                }]
            }, {
                identifier: [],
                displayName: "Metallica Reloaded",
                onTourUntil: "2016-12-30",
                uri: "http://www.songkick.com/artists/5082513-metallica-reloaded?utm_source=42541&utm_medium=partner",
                id: 5082513
            }, {
                identifier: [],
                displayName: "Metallica Jam",
                onTourUntil: null,
                uri: "http://www.songkick.com/artists/3349231-metallica-jam?utm_source=42541&utm_medium=partner",
                id: 3349231
            }, {
                identifier: [],
                onTourUntil: "2017-01-14",
                uri: "http://www.songkick.com/artists/2363983-battery-masters-of-metallica?utm_source=42541&utm_medium=partner",
                id: 2363983,
                displayName: "Battery - Masters of Metallica"
            }, {
                onTourUntil: null,
                displayName: "Masters of Metallica",
                ur: "http://www.songkick.com/artists/2331606-masters-of-metallica?utm_source=42541&utm_medium=partner",
                identifier: [],
                id: 2331606
            }, {
                identifier: [],
                displayName: "ONE (Metallica Tribute Band)",
                onTourUntil: null,
                uri: "http://www.songkick.com/artists/4399978-one-metallica-tribute-band?utm_source=42541&utm_medium=partner",
                id: 4399978
            }, {
                onTourUntil: null,
                displayName: "Metallica Uk",
                uri: "http://www.songkick.com/artists/2404158-metallica-uk?utm_source=42541&utm_medium=partner",
                identifier: [],
                id: 2404158
            }, {
                identifier: [],
                displayName: "lars  ulrich&  metallica",
                onTourUntil: null,
                uri: "http://www.songkick.com/artists/8516043-lars-ulrich-and-metallica?utm_source=42541&utm_medium=partner",
                id: 8516043
            }, {
                onTourUntil: null,
                identifier: [],
                displayName: "Metallica Coverband",
                uri: "http://www.songkick.com/artists/3749946-metallica-coverband?utm_source=42541&utm_medium=partner",
                id: 3749946
            }, {
                displayName: "Metallica By Request",
                identifier: [],
                uri: "http://www.songkick.com/artists/7928148-metallica-by-request?utm_source=42541&utm_medium=partner",
                onTourUntil: null,
                id: 7928148
            }, {
                onTourUntil: null,
                displayName: "Damage Inc. (Metallica Cover)",
                uri: "http://www.songkick.com/artists/8812759-damage-inc-metallica-cover?utm_source=42541&utm_medium=partner",
                identifier: [],
                id: 8812759
            }, {
                onTourUntil: null,
                displayName: "One... The only Tribute to Metallica",
                uri: "http://www.songkick.com/artists/8469543-one-the-only-tribute-to-metallica?utm_source=42541&utm_medium=partner",
                identifier: [],
                id: 8469543
            }, {
                onTourUntil: null,
                displayName: "Whiplash - Irish Metallica Tribute band",
                uri: "http://www.songkick.com/artists/8801519-whiplash-irish-metallica-tribute-band?utm_source=42541&utm_medium=partner",
                identifier: [],
                id: 8801519
            }, {
                displayName: "Rock Im Park Metallica",
                identifier: [],
                uri: "http://www.songkick.com/artists/7796719-rock-im-park-metallica?utm_source=42541&utm_medium=partner",
                onTourUntil: null,
                id: 7796719
            }, {
                onTourUntil: null,
                displayName: "Classic Metallica",
                uri: "http://www.songkick.com/artists/3786651-classic-metallica?utm_source=42541&utm_medium=partner",
                identifier: [],
                id: 3786651
            }, {
                identifier: [],
                displayName: "Metallica \"one\"",
                onTourUntil: null,
                uri: "http://www.songkick.com/artists/7305584-metallica-one?utm_source=42541&utm_medium=partner",
                id: 7305584
            }, {
                displayName: "Metallica Dk",
                uri: "http://www.songkick.com/artists/3959081-metallica-dk?utm_source=42541&utm_medium=partner",
                identifier: [],
                id: 3959081,
                onTourUntil: null
            }, {
                identifier: [],
                uri: "http://www.songkick.com/artists/5036168-megadeath-vs-metallica?utm_source=42541&utm_medium=partner",
                onTourUntil: null,
                id: 5036168,
                displayName: "Megadeath Vs. Metallica"
            }, {
                displayName: "Bustur Til Metallica",
                identifier: [],
                uri: "http://www.songkick.com/artists/4114561-bustur-til-metallica?utm_source=42541&utm_medium=partner",
                id: 4114561,
                onTourUntil: null
            }, {
                onTourUntil: null,
                displayName: "Metallica Set 1",
                uri: "http://www.songkick.com/artists/3899511-metallica-set-1?utm_source=42541&utm_medium=partner",
                identifier: [],
                id: 3899511
            }, {
                onTourUntil: null,
                displayName: "Metallica Reloaded Live @ the Eclipse",
                identifier: [],
                uri: "http://www.songkick.com/artists/8146223-metallica-reloaded-live-the-eclipse?utm_source=42541&utm_medium=partner",
                id: 8146223
            }, {
                onTourUntil: null,
                displayName: "Motorbreath - Metallica Tribute",
                uri: "http://www.songkick.com/artists/8816779-motorbreath-metallica-tribute?utm_source=42541&utm_medium=partner",
                identifier: [],
                id: 8816779
            }, {
                identifier: [],
                uri: "http://www.songkick.com/artists/7784989-tributes-to-metallica?utm_source=42541&utm_medium=partner",
                displayName: "Tributes to Metallica",
                id: 7784989,
                onTourUntil: null
            }, {
                onTourUntil: null,
                identifier: [],
                uri: "http://www.songkick.com/artists/7753504-master-of-pulpits-metallica-tribute?utm_source=42541&utm_medium=partner",
                displayName: "Master Of Pulpits (Metallica Tribute)",
                id: 7753504
            }, {
                displayName: "Orion - Metallica Tribute",
                uri: "http://www.songkick.com/artists/8694773-orion-metallica-tribute?utm_source=42541&utm_medium=partner",
                identifier: [],
                id: 8694773,
                onTourUntil: null
            }, {
                onTourUntil: null,
                identifier: [],
                uri: "http://www.songkick.com/artists/8488938-onea-tribute-to-metallica?utm_source=42541&utm_medium=partner",
                id: 8488938,
                displayName: "One-A Tribute to Metallica"
            }, {
                onTourUntil: null,
                identifier: [],
                uri: "http://www.songkick.com/artists/8354258-monsters-of-metal-metallica-slayer-pantera-tribute?utm_source=42541&utm_medium=partner",
                id: 8354258,
                displayName: "Monsters of Metal: Metallica + Slayer + Pantera tribute"
            }, {
                identifier: [],
                uri: "http://www.songkick.com/artists/7319649-tributo-metallica-y-guns-n-roses?utm_source=42541&utm_medium=partner",
                displayName: "Tributo Metallica Y Guns N Roses",
                id: 7319649,
                onTourUntil: null
            }, {
                onTourUntil: null,
                identifier: [],
                uri: "http://www.songkick.com/artists/7840054-orionmetallica-italian-official-tribute-band?utm_source=42541&utm_medium=partner",
                displayName: "Orion-Metallica Italian Official Tribute Band",
                id: 7840054
            }, {
                identifier: [],
                displayName: "OverBlack (Metallica cover, Blumenau - SC)",
                uri: "http://www.songkick.com/artists/7015629-overblack-metallica-cover-blumenau-sc?utm_source=42541&utm_medium=partner",
                onTourUntil: null,
                id: 7015629
            }, {
                onTourUntil: null,
                identifier: [],
                displayName: "30 Years Metallica",
                uri: "http://www.songkick.com/artists/4738468-30-years-metallica?utm_source=42541&utm_medium=partner",
                id: 4738468
            }, {
                identifier: [],
                displayName: "Pickin on Metallica Led Zeppelin and More",
                onTourUntil: null,
                uri: "http://www.songkick.com/artists/7594519-pickin-on-metallica-led-zeppelin-and-more?utm_source=42541&utm_medium=partner",
                id: 7594519
            }, {
                identifier: [],
                onTourUntil: null,
                uri: "http://www.songkick.com/artists/8300473-damage-inc-metallica-tribute-band?utm_source=42541&utm_medium=partner",
                id: 8300473,
                displayName: "Damage Inc - Metallica Tribute Band"
            }, {
                onTourUntil: null,
                identifier: [],
                uri: "http://www.songkick.com/artists/8401778-d-new-classics-to-contemporary-party-hits-to-crushingly-heavy-all-delivered-into-one-hell-of-a-live-show-covering-songs-from-slipknot-metallica-killswitch-engage-machine-head-pantera-system?utm_source=42541&utm_medium=partner",
                id: 8401778,
                displayName: "d new. Classics to contemporary, party hits to crushingly heavy, all delivered into one hell of a live show. Covering songs from - Slipknot, Metallica, Killswitch Engage, Machine Head, Pantera, System"
            }, {
                identifier: [],
                displayName: "Pickin on Metallica Led Zeppelin",
                onTourUntil: null,
                uri: "http://www.songkick.com/artists/7347999-pickin-on-metallica-led-zeppelin?utm_source=42541&utm_medium=partner",
                id: 7347999
            }, {
                identifier: [],
                displayName: "Pickin on Metallica Led Zepp",
                onTourUntil: null,
                uri: "http://www.songkick.com/artists/7348469-pickin-on-metallica-led-zepp?utm_source=42541&utm_medium=partner",
                id: 7348469
            }]
        },
        perPage: 50,
        page: 1,
        totalEntries: 36
      }
      }]
    };
  });
}
