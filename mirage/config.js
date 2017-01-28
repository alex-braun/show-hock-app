export default function() {
  this.namespace = '/api';

 // "//images.sk-static.com/images/media/profile_images/events/28833394/large_avatar"
  this.get('http://localhost:4741/regions', function() {
    return {
        "region": [
          {
            "series": {
              "displayName": "Jam Cruise"
            },
            "type": "Festival",
            "ageRestriction": null,
            "performance": [
              {
                "billingIndex": 1,
                "artist": {
                  "identifier": [
                    {
                      "href": "http://api.songkick.com/api/3.0/artists/mbid:5eb38f71-96c3-48a3-9b69-2995cfb74982.json",
                      "mbid": "5eb38f71-96c3-48a3-9b69-2995cfb74982"
                    }
                  ],
                  "displayName": "Beats Antique",
                  "uri": "http://www.songkick.com/artists/429056-beats-antique?utm_source=42541&utm_medium=partner",
                  "id": 429056,
                  "imageUrl": "http://images.sk-static.com/images/media/profile_images/artists/429056/huge_avatar"
                },
                "billing": "headline",
                "displayName": "Beats Antique",
                "id": 53347679
              },
              {
                "billingIndex": 2,
                "artist": {
                  "identifier": [
                    {
                      "href": "http://api.songkick.com/api/3.0/artists/mbid:245256dc-298f-46f5-8b66-fae1145c5ecc.json",
                      "mbid": "245256dc-298f-46f5-8b66-fae1145c5ecc"
                    },
                    {
                      "href": "http://api.songkick.com/api/3.0/artists/mbid:c62327d3-df81-46ce-bd94-5bd3040f8699.json",
                      "mbid": "c62327d3-df81-46ce-bd94-5bd3040f8699"
                    },
                    {
                      "href": "http://api.songkick.com/api/3.0/artists/mbid:8a63c655-8fb3-41df-8b4e-f46998335bd2.json",
                      "mbid": "8a63c655-8fb3-41df-8b4e-f46998335bd2"
                    }
                  ],
                  "displayName": "GRiZ",
                  "uri": "http://www.songkick.com/artists/168568-griz?utm_source=42541&utm_medium=partner",
                  "id": 168568,
                  "imageUrl": "http://images.sk-static.com/images/media/profile_images/artists/168568/huge_avatar"
                },
                "billing": "headline",
                "displayName": "GRiZ",
                "id": 52766474
              },
              {
                "billingIndex": 3,
                "artist": {
                  "identifier": [
                    {
                      "href": "http://api.songkick.com/api/3.0/artists/mbid:cabbdf87-5cb2-4f3c-be65-254655c87508.json",
                      "mbid": "cabbdf87-5cb2-4f3c-be65-254655c87508"
                    }
                  ],
                  "displayName": "Galactic",
                  "uri": "http://www.songkick.com/artists/164225-galactic?utm_source=42541&utm_medium=partner",
                  "id": 164225,
                  "imageUrl": "http://images.sk-static.com/images/media/profile_images/artists/164225/huge_avatar"
                },
                "billing": "headline",
                "displayName": "Galactic",
                "id": 53347659
              },
              {
                "billingIndex": 4,
                "artist": {
                  "identifier": [
                    {
                      "href": "http://api.songkick.com/api/3.0/artists/mbid:e88313e2-22f6-4f6d-9656-6d2ad20ea415.json",
                      "mbid": "e88313e2-22f6-4f6d-9656-6d2ad20ea415"
                    }
                  ],
                  "displayName": "Lettuce",
                  "uri": "http://www.songkick.com/artists/204338-lettuce?utm_source=42541&utm_medium=partner",
                  "id": 204338,
                  "imageUrl": "http://images.sk-static.com/images/media/profile_images/artists/204338/huge_avatar"
                },
                "billing": "headline",
                "displayName": "Lettuce",
                "id": 52535234
              },
              {
                "billingIndex": 5,
                "artist": {
                  "identifier": [
                    {
                      "href": "http://api.songkick.com/api/3.0/artists/mbid:c7a3e868-c6d8-4512-a5ef-f6cbe42899b0.json",
                      "mbid": "c7a3e868-c6d8-4512-a5ef-f6cbe42899b0"
                    }
                  ],
                  "displayName": "Kamasi Washington",
                  "uri": "http://www.songkick.com/artists/405330-kamasi-washington?utm_source=42541&utm_medium=partner",
                  "id": 405330,
                  "imageUrl": "http://images.sk-static.com/images/media/profile_images/artists/405330/huge_avatar"
                },
                "billing": "headline",
                "displayName": "Kamasi Washington",
                "id": 53347674
              },
              {
                "billingIndex": 6,
                "artist": {
                  "identifier": [
                    {
                      "href": "http://api.songkick.com/api/3.0/artists/mbid:fec7fe1c-05aa-4c72-82cc-75045c3fe56a.json",
                      "mbid": "fec7fe1c-05aa-4c72-82cc-75045c3fe56a"
                    }
                  ],
                  "displayName": "Break Science",
                  "uri": "http://www.songkick.com/artists/2368166-break-science?utm_source=42541&utm_medium=partner",
                  "id": 2368166,
                  "imageUrl": "http://images.sk-static.com/images/media/profile_images/artists/2368166/huge_avatar"
                },
                "billing": "headline",
                "displayName": "Break Science",
                "id": 52535229
              },
              {
                "billingIndex": 7,
                "artist": {
                  "identifier": [
                    {
                      "href": "http://api.songkick.com/api/3.0/artists/mbid:ed4a08e1-2a79-4538-b519-87bb2ee0fd9d.json",
                      "mbid": "ed4a08e1-2a79-4538-b519-87bb2ee0fd9d"
                    }
                  ],
                  "displayName": "The Revivalists",
                  "uri": "http://www.songkick.com/artists/593309-revivalists?utm_source=42541&utm_medium=partner",
                  "id": 593309,
                  "imageUrl": "http://images.sk-static.com/images/media/profile_images/artists/593309/huge_avatar"
                },
                "billing": "headline",
                "displayName": "The Revivalists",
                "id": 52535224
              },
              {
                "billingIndex": 8,
                "artist": {
                  "identifier": [
                    {
                      "href": "http://api.songkick.com/api/3.0/artists/mbid:a05add38-ccf0-4e27-a701-d4a09079682e.json",
                      "mbid": "a05add38-ccf0-4e27-a701-d4a09079682e"
                    }
                  ],
                  "displayName": "The Soul Rebels",
                  "uri": "http://www.songkick.com/artists/53745-soul-rebels?utm_source=42541&utm_medium=partner",
                  "id": 53745,
                  "imageUrl": "http://images.sk-static.com/images/media/profile_images/artists/53745/huge_avatar"
                },
                "billing": "headline",
                "displayName": "The Soul Rebels",
                "id": 52641679
              },
              {
                "billingIndex": 9,
                "artist": {
                  "identifier": [
                    {
                      "href": "http://api.songkick.com/api/3.0/artists/mbid:b6ffa1b7-1e3e-40e3-946d-0ea794e4106b.json",
                      "mbid": "b6ffa1b7-1e3e-40e3-946d-0ea794e4106b"
                    }
                  ],
                  "displayName": "Manic Focus",
                  "uri": "http://www.songkick.com/artists/5079143-manic-focus?utm_source=42541&utm_medium=partner",
                  "id": 5079143,
                  "imageUrl": "http://images.sk-static.com/images/media/profile_images/artists/5079143/huge_avatar"
                },
                "billing": "headline",
                "displayName": "Manic Focus",
                "id": 53347749
              },
              {
                "billingIndex": 10,
                "artist": {
                  "identifier": [
                    {
                      "href": "http://api.songkick.com/api/3.0/artists/mbid:ff24a74c-237b-481b-adb5-7f4f6171f5f5.json",
                      "mbid": "ff24a74c-237b-481b-adb5-7f4f6171f5f5"
                    }
                  ],
                  "displayName": "Karl Denson's Tiny Universe",
                  "uri": "http://www.songkick.com/artists/159478-karl-densons-tiny-universe?utm_source=42541&utm_medium=partner",
                  "id": 159478,
                  "imageUrl": "http://images.sk-static.com/images/media/profile_images/artists/159478/huge_avatar"
                },
                "billing": "headline",
                "displayName": "Karl Denson's Tiny Universe",
                "id": 53347664
              },
              {
                "billingIndex": 11,
                "artist": {
                  "identifier": [
                    {
                      "href": "http://api.songkick.com/api/3.0/artists/mbid:04fc77df-698e-4060-8ae5-766fb0cba9ce.json",
                      "mbid": "04fc77df-698e-4060-8ae5-766fb0cba9ce"
                    }
                  ],
                  "displayName": "The Motet",
                  "uri": "http://www.songkick.com/artists/23445-motet?utm_source=42541&utm_medium=partner",
                  "id": 23445,
                  "imageUrl": "http://images.sk-static.com/images/media/profile_images/artists/23445/huge_avatar"
                },
                "billing": "headline",
                "displayName": "The Motet",
                "id": 52714554
              },
              {
                "billingIndex": 12,
                "artist": {
                  "identifier": [
                    {
                      "href": "http://api.songkick.com/api/3.0/artists/mbid:5cf454bc-3be0-47ba-9d0b-1e53da631a4e.json",
                      "mbid": "5cf454bc-3be0-47ba-9d0b-1e53da631a4e"
                    }
                  ],
                  "displayName": "Twiddle",
                  "uri": "http://www.songkick.com/artists/947444-twiddle?utm_source=42541&utm_medium=partner",
                  "id": 947444,
                  "imageUrl": "http://images.sk-static.com/images/media/profile_images/artists/947444/huge_avatar"
                },
                "billing": "headline",
                "displayName": "Twiddle",
                "id": 55402049
              },
              {
                "billingIndex": 13,
                "artist": {
                  "identifier": [
                    {
                      "href": "http://api.songkick.com/api/3.0/artists/mbid:0248dd95-6c4f-45dd-8a76-a6e00d41078e.json",
                      "mbid": "0248dd95-6c4f-45dd-8a76-a6e00d41078e"
                    }
                  ],
                  "displayName": "Cyril Neville",
                  "uri": "http://www.songkick.com/artists/126716-cyril-neville?utm_source=42541&utm_medium=partner",
                  "id": 126716,
                  "imageUrl": "http://images.sk-static.com/images/media/profile_images/artists/126716/huge_avatar"
                },
                "billing": "headline",
                "displayName": "Cyril Neville",
                "id": 53347764
              },
              {
                "billingIndex": 14,
                "artist": {
                  "identifier": [
                    {
                      "href": "http://api.songkick.com/api/3.0/artists/mbid:99e4dda9-f5fb-4949-b5c5-3e6a4bdb1268.json",
                      "mbid": "99e4dda9-f5fb-4949-b5c5-3e6a4bdb1268"
                    }
                  ],
                  "displayName": "The Brothers Comatose",
                  "uri": "http://www.songkick.com/artists/2336572-brothers-comatose?utm_source=42541&utm_medium=partner",
                  "id": 2336572,
                  "imageUrl": "http://images.sk-static.com/images/media/profile_images/artists/2336572/huge_avatar"
                },
                "billing": "headline",
                "displayName": "The Brothers Comatose",
                "id": 53347714
              },
              {
                "billingIndex": 15,
                "artist": {
                  "identifier": [
                    {
                      "href": "http://api.songkick.com/api/3.0/artists/mbid:bbfd82bf-6f5f-43cf-ad53-82f13cbc1322.json",
                      "mbid": "bbfd82bf-6f5f-43cf-ad53-82f13cbc1322"
                    }
                  ],
                  "displayName": "The Suffers",
                  "uri": "http://www.songkick.com/artists/4651203-suffers?utm_source=42541&utm_medium=partner",
                  "id": 4651203,
                  "imageUrl": "http://images.sk-static.com/images/media/profile_images/artists/4651203/huge_avatar"
                },
                "billing": "headline",
                "displayName": "The Suffers",
                "id": 53347704
              },
              {
                "billingIndex": 16,
                "artist": {
                  "identifier": [
                    {
                      "href": "http://api.songkick.com/api/3.0/artists/mbid:f17f5164-ef7a-4ad2-97a3-3400162fbb7b.json",
                      "mbid": "f17f5164-ef7a-4ad2-97a3-3400162fbb7b"
                    }
                  ],
                  "displayName": "Steve Kimock",
                  "uri": "http://www.songkick.com/artists/15826-steve-kimock?utm_source=42541&utm_medium=partner",
                  "id": 15826,
                  "imageUrl": "http://images.sk-static.com/images/media/profile_images/artists/15826/huge_avatar"
                },
                "billing": "headline",
                "displayName": "Steve Kimock",
                "id": 53347759
              },
              {
                "billingIndex": 17,
                "artist": {
                  "identifier": [
                    {
                      "href": "http://api.songkick.com/api/3.0/artists/mbid:bba78c6c-21b9-42fd-88e8-d47a2ee1764b.json",
                      "mbid": "bba78c6c-21b9-42fd-88e8-d47a2ee1764b"
                    }
                  ],
                  "displayName": "Benevento-russo Duo",
                  "uri": "http://www.songkick.com/artists/583551-beneventorusso-duo?utm_source=42541&utm_medium=partner",
                  "id": 583551,
                  "imageUrl": "http://images.sk-static.com/images/media/profile_images/artists/583551/huge_avatar"
                },
                "billing": "headline",
                "displayName": "Benevento-russo Duo",
                "id": 53347669
              },
              {
                "billingIndex": 18,
                "artist": {
                  "identifier": [
                    {
                      "href": "http://api.songkick.com/api/3.0/artists/mbid:d91a6e77-5afe-4129-9e75-aefd323fbdec.json",
                      "mbid": "d91a6e77-5afe-4129-9e75-aefd323fbdec"
                    }
                  ],
                  "displayName": "Turkuaz",
                  "uri": "http://www.songkick.com/artists/1427937-turkuaz?utm_source=42541&utm_medium=partner",
                  "id": 1427937,
                  "imageUrl": "http://images.sk-static.com/images/media/profile_images/artists/1427937/huge_avatar"
                },
                "billing": "headline",
                "displayName": "Turkuaz",
                "id": 53347694
              },
              {
                "billingIndex": 19,
                "artist": {
                  "identifier": [
                    {
                      "href": "http://api.songkick.com/api/3.0/artists/mbid:8a4ade04-cbe9-4e91-b0df-e1298984d67e.json",
                      "mbid": "8a4ade04-cbe9-4e91-b0df-e1298984d67e"
                    }
                  ],
                  "displayName": "Big Something",
                  "uri": "http://www.songkick.com/artists/3960981-big-something?utm_source=42541&utm_medium=partner",
                  "id": 3960981,
                  "imageUrl": "http://images.sk-static.com/images/media/profile_images/artists/3960981/huge_avatar"
                },
                "billing": "headline",
                "displayName": "Big Something",
                "id": 53347734
              },
              {
                "billingIndex": 20,
                "artist": {
                  "identifier": [
                    {
                      "href": "http://api.songkick.com/api/3.0/artists/mbid:581ba4df-7d45-412a-8e6b-3690666d06ec.json",
                      "mbid": "581ba4df-7d45-412a-8e6b-3690666d06ec"
                    }
                  ],
                  "displayName": "Everyone Orchestra",
                  "uri": "http://www.songkick.com/artists/773506-everyone-orchestra?utm_source=42541&utm_medium=partner",
                  "id": 773506,
                  "imageUrl": "http://images.sk-static.com/images/media/profile_images/artists/773506/huge_avatar"
                },
                "billing": "headline",
                "displayName": "Everyone Orchestra",
                "id": 53347739
              },
              {
                "billingIndex": 21,
                "artist": {
                  "identifier": [
                    {
                      "href": "http://api.songkick.com/api/3.0/artists/mbid:809c8576-cbcb-4dcc-b19c-2c3277c5ac5a.json",
                      "mbid": "809c8576-cbcb-4dcc-b19c-2c3277c5ac5a"
                    }
                  ],
                  "displayName": "Percy Hill",
                  "uri": "http://www.songkick.com/artists/162633-percy-hill?utm_source=42541&utm_medium=partner",
                  "id": 162633,
                  "imageUrl": "http://images.sk-static.com/images/media/profile_images/artists/162633/huge_avatar"
                },
                "billing": "headline",
                "displayName": "Percy Hill",
                "id": 53347699
              },
              {
                "billingIndex": 22,
                "artist": {
                  "identifier": [
                    {
                      "href": "http://api.songkick.com/api/3.0/artists/mbid:5cb5d069-cd74-445a-ab00-acab9735245b.json",
                      "mbid": "5cb5d069-cd74-445a-ab00-acab9735245b"
                    }
                  ],
                  "displayName": "Love Canon",
                  "uri": "http://www.songkick.com/artists/4034941-love-canon?utm_source=42541&utm_medium=partner",
                  "id": 4034941,
                  "imageUrl": "http://images.sk-static.com/images/media/profile_images/artists/4034941/huge_avatar"
                },
                "billing": "headline",
                "displayName": "Love Canon",
                "id": 53347729
              },
              {
                "billingIndex": 23,
                "artist": {
                  "identifier": [
                    {
                      "href": "http://api.songkick.com/api/3.0/artists/mbid:bd39bc89-6c6c-4674-8e1b-11e5c017c2d1.json",
                      "mbid": "bd39bc89-6c6c-4674-8e1b-11e5c017c2d1"
                    }
                  ],
                  "displayName": "Mike Dillon",
                  "uri": "http://www.songkick.com/artists/59600-mike-dillon?utm_source=42541&utm_medium=partner",
                  "id": 59600,
                  "imageUrl": "http://images.sk-static.com/images/media/profile_images/artists/59600/huge_avatar"
                },
                "billing": "headline",
                "displayName": "Mike Dillon",
                "id": 53347774
              },
              {
                "billingIndex": 24,
                "artist": {
                  "identifier": [
                    {
                      "href": "http://api.songkick.com/api/3.0/artists/mbid:8165c0ff-1d9c-4045-aaef-9561dee1ba21.json",
                      "mbid": "8165c0ff-1d9c-4045-aaef-9561dee1ba21"
                    }
                  ],
                  "displayName": "Nathan Moore",
                  "uri": "http://www.songkick.com/artists/103305-nathan-moore?utm_source=42541&utm_medium=partner",
                  "id": 103305,
                  "imageUrl": "http://images.sk-static.com/images/media/profile_images/artists/103305/huge_avatar"
                },
                "billing": "headline",
                "displayName": "Nathan Moore",
                "id": 53347744
              },
              {
                "billingIndex": 25,
                "artist": {
                  "identifier": [],
                  "displayName": "DJ Soul Sister",
                  "uri": "http://www.songkick.com/artists/579304-dj-soul-sister?utm_source=42541&utm_medium=partner",
                  "id": 579304,
                  "imageUrl": "http://images.sk-static.com/images/media/profile_images/artists/579304/huge_avatar"
                },
                "billing": "headline",
                "displayName": "DJ Soul Sister",
                "id": 53347754
              },
              {
                "billingIndex": 26,
                "artist": {
                  "identifier": [
                    {
                      "href": "http://api.songkick.com/api/3.0/artists/mbid:5fb6eb5f-e142-4c91-a5ae-b18d7cd8cea6.json",
                      "mbid": "5fb6eb5f-e142-4c91-a5ae-b18d7cd8cea6"
                    }
                  ],
                  "displayName": "Steve Berlin",
                  "uri": "http://www.songkick.com/artists/2372131-steve-berlin?utm_source=42541&utm_medium=partner",
                  "id": 2372131,
                  "imageUrl": "http://images.sk-static.com/images/media/profile_images/artists/2372131/huge_avatar"
                },
                "billing": "headline",
                "displayName": "Steve Berlin",
                "id": 53347769
              },
              {
                "billingIndex": 27,
                "artist": {
                  "identifier": [],
                  "displayName": "The Original Meters",
                  "uri": "http://www.songkick.com/artists/4181071-original-meters?utm_source=42541&utm_medium=partner",
                  "id": 4181071,
                  "imageUrl": "http://images.sk-static.com/images/media/profile_images/artists/4181071/huge_avatar"
                },
                "billing": "headline",
                "displayName": "The Original Meters",
                "id": 53347654
              },
              {
                "billingIndex": 28,
                "artist": {
                  "identifier": [],
                  "displayName": "magicgravy",
                  "uri": "http://www.songkick.com/artists/876403-magicgravy?utm_source=42541&utm_medium=partner",
                  "id": 876403,
                  "imageUrl": "http://images.sk-static.com/images/media/profile_images/artists/876403/huge_avatar"
                },
                "billing": "headline",
                "displayName": "magicgravy",
                "id": 53347724
              },
              {
                "billingIndex": 29,
                "artist": {
                  "identifier": [],
                  "displayName": "Jojo's Mardi Gras Band",
                  "uri": "http://www.songkick.com/artists/2306982-jojos-mardi-gras-band?utm_source=42541&utm_medium=partner",
                  "id": 2306982,
                  "imageUrl": "http://images.sk-static.com/images/media/profile_images/artists/2306982/huge_avatar"
                },
                "billing": "headline",
                "displayName": "Jojo's Mardi Gras Band",
                "id": 53347684
              },
              {
                "billingIndex": 30,
                "artist": {
                  "identifier": [],
                  "displayName": "Neville Jacobs",
                  "uri": "http://www.songkick.com/artists/8754414-neville-jacobs?utm_source=42541&utm_medium=partner",
                  "id": 8754414,
                  "imageUrl": "http://images.sk-static.com/images/media/profile_images/artists/8754414/huge_avatar"
                },
                "billing": "headline",
                "displayName": "Neville Jacobs",
                "id": 53347709
              },
              {
                "billingIndex": 31,
                "artist": {
                  "identifier": [],
                  "displayName": "Sherik",
                  "uri": "http://www.songkick.com/artists/2482411-sherik?utm_source=42541&utm_medium=partner",
                  "id": 2482411,
                  "imageUrl": "http://images.sk-static.com/images/media/profile_images/artists/2482411/huge_avatar"
                },
                "billing": "headline",
                "displayName": "Sherik",
                "id": 53347779
              }
            ],
            "venue": {
              "lng": -80.182961,
              "displayName": "Norwegian Pearl",
              "uri": "http://www.songkick.com/venues/1001306-norwegian-pearl?utm_source=42541&utm_medium=partner",
              "metroArea": {
                "displayName": "Miami",
                "uri": "http://www.songkick.com/metro_areas/9776-us-miami?utm_source=42541&utm_medium=partner",
                "id": 9776,
                "state": {
                  "displayName": "FL"
                },
                "country": {
                  "displayName": "US"
                }
              },
              "lat": 25.7799641,
              "id": 1001306
            },
            "status": "ok",
            "start": {
              "time": null,
              "date": "2017-01-20",
              "datetime": null
            },
            "end": {
              "time": null,
              "date": "2017-01-25",
              "datetime": null
            },
            "displayName": "Jam Cruise 2017",
            "location": {
              "lng": -80.182961,
              "city": "Miami, FL, US",
              "lat": 25.7799641
            },
            "uri": "http://www.songkick.com/festivals/234443/id/26919304-jam-cruise-2017?utm_source=42541&utm_medium=partner",
            "id": 26919304,
            "popularity": 0.025164,
            "imageUrl": "http://images.sk-static.com/images/media/profile_images/events/26919304/large_avatar"
          },
          {
            "type": "Festival",
            "popularity": 0.025283,
            "status": "ok",
            "ageRestriction": null,
            "start": {
              "time": null,
              "date": "2017-01-22",
              "datetime": null
            },
            "performance": [
              {
                "billingIndex": 1,
                "artist": {
                  "identifier": [
                    {
                      "href": "http://api.songkick.com/api/3.0/artists/mbid:4f48167c-29b8-4bde-a749-6803ce0a3922.json",
                      "mbid": "4f48167c-29b8-4bde-a749-6803ce0a3922"
                    },
                    {
                      "href": "http://api.songkick.com/api/3.0/artists/mbid:13cfd01e-68aa-4dc4-ad51-1d1a7cf6a0a9.json",
                      "mbid": "13cfd01e-68aa-4dc4-ad51-1d1a7cf6a0a9"
                    },
                    {
                      "href": "http://api.songkick.com/api/3.0/artists/mbid:31c3d2e1-da2c-455c-9319-1bdcc22741a7.json",
                      "mbid": "31c3d2e1-da2c-455c-9319-1bdcc22741a7"
                    }
                  ],
                  "uri": "http://www.songkick.com/artists/541506-taj-mahal?utm_source=42541&utm_medium=partner",
                  "id": 541506,
                  "displayName": "Taj Mahal",
                  "imageUrl": "http://images.sk-static.com/images/media/profile_images/artists/541506/huge_avatar"
                },
                "billing": "headline",
                "id": 55706999,
                "displayName": "Taj Mahal"
              }
            ],
            "end": {
              "time": null,
              "date": "2017-01-29",
              "datetime": null
            },
            "venue": {
              "metroArea": {
                "uri": "http://www.songkick.com/metro_areas/9776-us-miami?utm_source=42541&utm_medium=partner",
                "id": 9776,
                "state": {
                  "displayName": "FL"
                },
                "country": {
                  "displayName": "US"
                },
                "displayName": "Miami"
              },
              "lat": 25.8575963,
              "lng": -80.2781057,
              "uri": null,
              "id": null,
              "displayName": "Unknown venue"
            },
            "location": {
              "city": "Hialeah, FL, US",
              "lat": 25.8575963,
              "lng": -80.2781057
            },
            "uri": "http://www.songkick.com/festivals/20451/id/28687364-legendary-rhythm--blues-cruise-2017?utm_source=42541&utm_medium=partner",
            "id": 28687364,
            "series": {
              "displayName": "Legendary Rhythm & Blues Cruise"
            },
            "displayName": "Legendary Rhythm & Blues Cruise 2017",
            "imageUrl": "http://images.sk-static.com/images/media/profile_images/events/28687364/large_avatar"
          },
          {
            "type": "Festival",
            "performance": [
              {
                "billing": "headline",
                "displayName": "Goldfish",
                "billingIndex": 1,
                "artist": {
                  "displayName": "Goldfish",
                  "uri": "http://www.songkick.com/artists/549752-goldfish?utm_source=42541&utm_medium=partner",
                  "id": 549752,
                  "identifier": [
                    {
                      "href": "http://api.songkick.com/api/3.0/artists/mbid:345d3b42-e397-4a57-b5e1-48e6dca24432.json",
                      "mbid": "345d3b42-e397-4a57-b5e1-48e6dca24432"
                    },
                    {
                      "href": "http://api.songkick.com/api/3.0/artists/mbid:ea4c6d34-342d-4df1-a967-9925618ffdfe.json",
                      "mbid": "ea4c6d34-342d-4df1-a967-9925618ffdfe"
                    },
                    {
                      "href": "http://api.songkick.com/api/3.0/artists/mbid:b0354b4a-e18a-40a8-b263-ea1ca1291898.json",
                      "mbid": "b0354b4a-e18a-40a8-b263-ea1ca1291898"
                    },
                    {
                      "href": "http://api.songkick.com/api/3.0/artists/mbid:98f1b98b-2296-4fb3-ab16-4dffe67f2174.json",
                      "mbid": "98f1b98b-2296-4fb3-ab16-4dffe67f2174"
                    },
                    {
                      "href": "http://api.songkick.com/api/3.0/artists/mbid:b8c6017f-01b7-4fb0-9fb1-87a1a4e53742.json",
                      "mbid": "b8c6017f-01b7-4fb0-9fb1-87a1a4e53742"
                    }
                  ],
                  "imageUrl": "http://images.sk-static.com/images/media/profile_images/artists/549752/huge_avatar"
                },
                "id": 56359414
              },
              {
                "billing": "headline",
                "displayName": "George Acosta",
                "billingIndex": 2,
                "artist": {
                  "displayName": "George Acosta",
                  "uri": "http://www.songkick.com/artists/146294-george-acosta?utm_source=42541&utm_medium=partner",
                  "id": 146294,
                  "identifier": [
                    {
                      "href": "http://api.songkick.com/api/3.0/artists/mbid:4fcd0028-412d-4498-b959-51ff17cc18de.json",
                      "mbid": "4fcd0028-412d-4498-b959-51ff17cc18de"
                    }
                  ],
                  "imageUrl": "http://images.sk-static.com/images/media/profile_images/artists/146294/huge_avatar"
                },
                "id": 55230724
              }
            ],
            "status": "ok",
            "series": {
              "displayName": "Groove Cruise Miami"
            },
            "displayName": "Groove Cruise Miami 2017",
            "start": {
              "time": null,
              "datetime": null,
              "date": "2017-01-23"
            },
            "end": {
              "time": null,
              "datetime": null,
              "date": "2017-01-27"
            },
            "ageRestriction": null,
            "location": {
              "lat": 25.7616798,
              "lng": -80.1917902,
              "city": "Miami, FL, US"
            },
            "venue": {
              "lat": 25.7616798,
              "lng": -80.1917902,
              "displayName": "Unknown venue",
              "uri": null,
              "metroArea": {
                "displayName": "Miami",
                "country": {
                  "displayName": "US"
                },
                "uri": "http://www.songkick.com/metro_areas/9776-us-miami?utm_source=42541&utm_medium=partner",
                "id": 9776,
                "state": {
                  "displayName": "FL"
                }
              },
              "id": null
            },
            "popularity": 0.01576,
            "uri": "http://www.songkick.com/festivals/1451364-groove-cruise-miami/id/28411424-groove-cruise-miami-2017?utm_source=42541&utm_medium=partner",
            "id": 28411424,
            "imageUrl": "http://images.sk-static.com/images/media/profile_images/events/28411424/large_avatar"
          },
          {
            "type": "Festival",
            "venue": {
              "lng": -80.177482,
              "uri": "http://www.songkick.com/venues/816866-groove-cruise?utm_source=42541&utm_medium=partner",
              "id": 816866,
              "metroArea": {
                "uri": "http://www.songkick.com/metro_areas/9776-us-miami?utm_source=42541&utm_medium=partner",
                "country": {
                  "displayName": "US"
                },
                "id": 9776,
                "state": {
                  "displayName": "FL"
                },
                "displayName": "Miami"
              },
              "lat": 25.778349,
              "displayName": "Groove Cruise"
            },
            "status": "ok",
            "performance": [
              {
                "artist": {
                  "identifier": [
                    {
                      "href": "http://api.songkick.com/api/3.0/artists/mbid:525c5425-9890-4c1f-93ab-7a8e6e9c4f14.json",
                      "mbid": "525c5425-9890-4c1f-93ab-7a8e6e9c4f14"
                    }
                  ],
                  "uri": "http://www.songkick.com/artists/6818909-antonio-giacca?utm_source=42541&utm_medium=partner",
                  "id": 6818909,
                  "displayName": "Antonio Giacca",
                  "imageUrl": "http://images.sk-static.com/images/media/profile_images/artists/6818909/huge_avatar"
                },
                "billing": "headline",
                "id": 55752139,
                "billingIndex": 1,
                "displayName": "Antonio Giacca"
              }
            ],
            "popularity": 0.001276,
            "start": {
              "time": null,
              "date": "2017-01-23",
              "datetime": null
            },
            "end": {
              "time": null,
              "date": "2017-01-27",
              "datetime": null
            },
            "series": {
              "displayName": "Groove Cruise Miami"
            },
            "ageRestriction": null,
            "location": {
              "lng": -80.177482,
              "city": "Miami, FL, US",
              "lat": 25.778349
            },
            "uri": "http://www.songkick.com/festivals/1451364/id/28714179-groove-cruise-miami-2017?utm_source=42541&utm_medium=partner",
            "id": 28714179,
            "displayName": "Groove Cruise Miami 2017",
            "imageUrl": "http://images.sk-static.com/images/media/profile_images/events/28714179/large_avatar"
          },
          {
            "venue": {
              "lat": 25.7616798,
              "lng": -80.1917902,
              "displayName": "Unknown venue",
              "metroArea": {
                "country": {
                  "displayName": "US"
                },
                "displayName": "Miami",
                "uri": "http://www.songkick.com/metro_areas/9776-us-miami?utm_source=42541&utm_medium=partner",
                "id": 9776,
                "state": {
                  "displayName": "FL"
                }
              },
              "uri": null,
              "id": null
            },
            "type": "Festival",
            "popularity": 0.006534,
            "status": "ok",
            "performance": [
              {
                "artist": {
                  "displayName": "Huxley",
                  "uri": "http://www.songkick.com/artists/977390-huxley?utm_source=42541&utm_medium=partner",
                  "id": 977390,
                  "identifier": [
                    {
                      "href": "http://api.songkick.com/api/3.0/artists/mbid:7677d39a-970c-4e81-8cfe-f9510631b79c.json",
                      "mbid": "7677d39a-970c-4e81-8cfe-f9510631b79c"
                    }
                  ],
                  "imageUrl": "http://images.sk-static.com/images/media/profile_images/artists/977390/huge_avatar"
                },
                "billing": "headline",
                "displayName": "Huxley",
                "id": 55911204,
                "billingIndex": 1
              }
            ],
            "start": {
              "time": null,
              "datetime": null,
              "date": "2017-01-23"
            },
            "end": {
              "time": null,
              "datetime": null,
              "date": "2017-01-27"
            },
            "ageRestriction": null,
            "location": {
              "city": "Miami, FL, US",
              "lat": 25.7616798,
              "lng": -80.1917902
            },
            "series": {
              "displayName": "Groove Cruise"
            },
            "displayName": "Groove Cruise 2017",
            "uri": "http://www.songkick.com/festivals/1090088-groove-cruise/id/28806759-groove-cruise-2017?utm_source=42541&utm_medium=partner",
            "id": 28806759,
            "imageUrl": "http://images.sk-static.com/images/media/profile_images/events/28806759/large_avatar"
          },
          {
            "type": "Concert",
            "performance": [
              {
                "billing": "headline",
                "displayName": "Leo Medina",
                "billingIndex": 1,
                "artist": {
                  "displayName": "Leo Medina",
                  "uri": "http://www.songkick.com/artists/4339721-leo-medina?utm_source=42541&utm_medium=partner",
                  "id": 4339721,
                  "identifier": [],
                  "imageUrl": "http://images.sk-static.com/images/media/profile_images/artists/4339721/huge_avatar"
                },
                "id": 55968594
              }
            ],
            "status": "ok",
            "displayName": "Leo Medina at E11even Miami (January 24, 2017)",
            "start": {
              "time": "10:00:00",
              "datetime": "2017-01-24T10:00:00-0500",
              "date": "2017-01-24"
            },
            "ageRestriction": null,
            "location": {
              "lat": 25.7847879,
              "lng": -80.1933997,
              "city": "Miami, FL, US"
            },
            "venue": {
              "lat": 25.7847879,
              "lng": -80.1933997,
              "displayName": "E11even Miami",
              "uri": "http://www.songkick.com/venues/2589333-e11even-miami?utm_source=42541&utm_medium=partner",
              "metroArea": {
                "displayName": "Miami",
                "country": {
                  "displayName": "US"
                },
                "uri": "http://www.songkick.com/metro_areas/9776-us-miami?utm_source=42541&utm_medium=partner",
                "id": 9776,
                "state": {
                  "displayName": "FL"
                }
              },
              "id": 2589333
            },
            "popularity": 0.000003,
            "uri": "http://www.songkick.com/concerts/28839514-leo-medina-at-e11even-miami?utm_source=42541&utm_medium=partner",
            "id": 28839514
          },
          {
            "type": "Concert",
            "performance": [
              {
                "billing": "headline",
                "displayName": "Puma & Harry",
                "billingIndex": 1,
                "artist": {
                  "displayName": "Puma & Harry",
                  "uri": "http://www.songkick.com/artists/8882514-puma-and-harry?utm_source=42541&utm_medium=partner",
                  "id": 8882514,
                  "identifier": [],
                  "imageUrl": "http://images.sk-static.com/images/media/profile_images/artists/8882514/huge_avatar"
                },
                "id": 56407329
              }
            ],
            "status": "ok",
            "displayName": "Puma & Harry at Bardot (January 24, 2017)",
            "start": {
              "time": "22:00:00",
              "datetime": "2017-01-24T22:00:00-0500",
              "date": "2017-01-24"
            },
            "ageRestriction": null,
            "location": {
              "lat": 25.8092934,
              "lng": -80.195584,
              "city": "Miami, FL, US"
            },
            "venue": {
              "lat": 25.8092934,
              "lng": -80.195584,
              "displayName": "Bardot",
              "uri": "http://www.songkick.com/venues/808731-bardot?utm_source=42541&utm_medium=partner",
              "metroArea": {
                "displayName": "Miami",
                "country": {
                  "displayName": "US"
                },
                "uri": "http://www.songkick.com/metro_areas/9776-us-miami?utm_source=42541&utm_medium=partner",
                "id": 9776,
                "state": {
                  "displayName": "FL"
                }
              },
              "id": 808731
            },
            "popularity": 0,
            "uri": "http://www.songkick.com/concerts/29084089-puma-and-harry-at-bardot?utm_source=42541&utm_medium=partner",
            "id": 29084089
          },
          {
            "type": "Concert",
            "performance": [
              {
                "billing": "headline",
                "displayName": "Run The Jewels",
                "billingIndex": 1,
                "artist": {
                  "displayName": "Run The Jewels",
                  "uri": "http://www.songkick.com/artists/6846999-run-the-jewels?utm_source=42541&utm_medium=partner",
                  "id": 6846999,
                  "identifier": [
                    {
                      "href": "http://api.songkick.com/api/3.0/artists/mbid:a80c5dc5-b12e-4667-9f5a-b568961f3839.json",
                      "mbid": "a80c5dc5-b12e-4667-9f5a-b568961f3839"
                    }
                  ],
                  "imageUrl": "http://images.sk-static.com/images/media/profile_images/artists/6846999/huge_avatar"
                },
                "id": 55323609
              },
              {
                "billing": "headline",
                "displayName": "The Gaslamp Killer",
                "billingIndex": 2,
                "artist": {
                  "displayName": "The Gaslamp Killer",
                  "uri": "http://www.songkick.com/artists/1993625-gaslamp-killer?utm_source=42541&utm_medium=partner",
                  "id": 1993625,
                  "identifier": [
                    {
                      "href": "http://api.songkick.com/api/3.0/artists/mbid:6ad95b5d-6ae9-45e3-847a-121d2b32dadc.json",
                      "mbid": "6ad95b5d-6ae9-45e3-847a-121d2b32dadc"
                    }
                  ],
                  "imageUrl": "http://images.sk-static.com/images/media/profile_images/artists/1993625/huge_avatar"
                },
                "id": 55323614
              },
              {
                "billing": "headline",
                "displayName": "Spark Master Tape",
                "billingIndex": 3,
                "artist": {
                  "displayName": "Spark Master Tape",
                  "uri": "http://www.songkick.com/artists/8926159-spark-master-tape?utm_source=42541&utm_medium=partner",
                  "id": 8926159,
                  "identifier": [
                    {
                      "href": "http://api.songkick.com/api/3.0/artists/mbid:b83d4d61-e118-4360-b613-43229fe5207e.json",
                      "mbid": "b83d4d61-e118-4360-b613-43229fe5207e"
                    }
                  ],
                  "imageUrl": "http://images.sk-static.com/images/media/profile_images/artists/8926159/huge_avatar"
                },
                "id": 55356224
              },
              {
                "billing": "headline",
                "displayName": "Cuz",
                "billingIndex": 4,
                "artist": {
                  "displayName": "Cuz",
                  "uri": "http://www.songkick.com/artists/4076581-cuz?utm_source=42541&utm_medium=partner",
                  "id": 4076581,
                  "identifier": [
                    {
                      "href": "http://api.songkick.com/api/3.0/artists/mbid:36644261-06e7-42a6-be8f-4c681288e147.json",
                      "mbid": "36644261-06e7-42a6-be8f-4c681288e147"
                    }
                  ],
                  "imageUrl": "http://images.sk-static.com/images/media/profile_images/artists/4076581/huge_avatar"
                },
                "id": 55356229
              },
              {
                "billing": "headline",
                "displayName": "Gangsta Boo",
                "billingIndex": 5,
                "artist": {
                  "displayName": "Gangsta Boo",
                  "uri": "http://www.songkick.com/artists/5586-gangsta-boo?utm_source=42541&utm_medium=partner",
                  "id": 5586,
                  "identifier": [
                    {
                      "href": "http://api.songkick.com/api/3.0/artists/mbid:39964eb9-3bf1-42c2-9cd6-b14079aef98c.json",
                      "mbid": "39964eb9-3bf1-42c2-9cd6-b14079aef98c"
                    }
                  ],
                  "imageUrl": "http://images.sk-static.com/images/media/profile_images/artists/5586/huge_avatar"
                },
                "id": 56094864
              },
              {
                "billing": "headline",
                "displayName": "Nick Hook",
                "billingIndex": 6,
                "artist": {
                  "displayName": "Nick Hook",
                  "uri": "http://www.songkick.com/artists/1824243-nick-hook?utm_source=42541&utm_medium=partner",
                  "id": 1824243,
                  "identifier": [
                    {
                      "href": "http://api.songkick.com/api/3.0/artists/mbid:d32be65d-d71c-4d0c-ae3c-92b74073418a.json",
                      "mbid": "d32be65d-d71c-4d0c-ae3c-92b74073418a"
                    },
                    {
                      "href": "http://api.songkick.com/api/3.0/artists/mbid:afb007d5-02aa-47ae-839a-06671a152e03.json",
                      "mbid": "afb007d5-02aa-47ae-839a-06671a152e03"
                    }
                  ],
                  "imageUrl": "http://images.sk-static.com/images/media/profile_images/artists/1824243/huge_avatar"
                },
                "id": 56094869
              }
            ],
            "status": "ok",
            "displayName": "Run The Jewels, The Gaslamp Killer, Spark Master Tape, Cuz, and 2 more… at Fillmore Miami Beach, Jackie Gleason Theater (January 25, 2017)",
            "start": {
              "time": "20:00:00",
              "datetime": "2017-01-25T20:00:00-0500",
              "date": "2017-01-25"
            },
            "ageRestriction": null,
            "location": {
              "lat": 25.792917,
              "lng": -80.13314,
              "city": "Miami Beach, FL, US"
            },
            "venue": {
              "lat": 25.792917,
              "lng": -80.13314,
              "displayName": "Fillmore Miami Beach, Jackie Gleason Theater",
              "uri": "http://www.songkick.com/venues/244628-fillmore-miami-beach-jackie-gleason-theater?utm_source=42541&utm_medium=partner",
              "metroArea": {
                "displayName": "Miami",
                "country": {
                  "displayName": "US"
                },
                "uri": "http://www.songkick.com/metro_areas/9776-us-miami?utm_source=42541&utm_medium=partner",
                "id": 9776,
                "state": {
                  "displayName": "FL"
                }
              },
              "id": 244628
            },
            "popularity": 0.034392,
            "uri": "http://www.songkick.com/concerts/28466634-run-the-jewels-at-fillmore-miami-beach-jackie-gleason-theater?utm_source=42541&utm_medium=partner",
            "id": 28466634
          },
          {
            "type": "Concert",
            "venue": {
              "lng": -80.177482,
              "uri": "http://www.songkick.com/venues/816866-groove-cruise?utm_source=42541&utm_medium=partner",
              "id": 816866,
              "metroArea": {
                "uri": "http://www.songkick.com/metro_areas/9776-us-miami?utm_source=42541&utm_medium=partner",
                "country": {
                  "displayName": "US"
                },
                "id": 9776,
                "state": {
                  "displayName": "FL"
                },
                "displayName": "Miami"
              },
              "lat": 25.778349,
              "displayName": "Groove Cruise"
            },
            "status": "ok",
            "performance": [
              {
                "artist": {
                  "identifier": [
                    {
                      "href": "http://api.songkick.com/api/3.0/artists/mbid:a2507d4d-3387-4d31-a6e8-f2c9794fb37e.json",
                      "mbid": "a2507d4d-3387-4d31-a6e8-f2c9794fb37e"
                    }
                  ],
                  "uri": "http://www.songkick.com/artists/8075378-jax-jones?utm_source=42541&utm_medium=partner",
                  "id": 8075378,
                  "displayName": "Jax Jones",
                  "imageUrl": "http://images.sk-static.com/images/media/profile_images/artists/8075378/huge_avatar"
                },
                "billing": "headline",
                "id": 55849259,
                "billingIndex": 1,
                "displayName": "Jax Jones"
              }
            ],
            "popularity": 0.01202,
            "start": {
              "time": null,
              "date": "2017-01-25",
              "datetime": null
            },
            "ageRestriction": null,
            "location": {
              "lng": -80.177482,
              "city": "Miami, FL, US",
              "lat": 25.778349
            },
            "uri": "http://www.songkick.com/concerts/28771254-jax-jones-at-groove-cruise?utm_source=42541&utm_medium=partner",
            "id": 28771254,
            "displayName": "Jax Jones at Groove Cruise (January 25, 2017)"
          },
          {
            "type": "Concert",
            "performance": [
              {
                "billing": "headline",
                "displayName": "Iron Lyon",
                "billingIndex": 1,
                "artist": {
                  "displayName": "Iron Lyon",
                  "uri": "http://www.songkick.com/artists/2555221-iron-lyon?utm_source=42541&utm_medium=partner",
                  "id": 2555221,
                  "identifier": [
                    {
                      "href": "http://api.songkick.com/api/3.0/artists/mbid:b7118cd4-3058-41b6-8765-2130bb31621c.json",
                      "mbid": "b7118cd4-3058-41b6-8765-2130bb31621c"
                    }
                  ],
                  "imageUrl": "http://images.sk-static.com/images/media/profile_images/artists/2555221/huge_avatar"
                },
                "id": 55968599
              }
            ],
            "status": "ok",
            "displayName": "Iron Lyon at E11even Miami (January 25, 2017)",
            "start": {
              "time": "10:00:00",
              "datetime": "2017-01-25T10:00:00-0500",
              "date": "2017-01-25"
            },
            "ageRestriction": null,
            "location": {
              "lat": 25.7847879,
              "lng": -80.1933997,
              "city": "Miami, FL, US"
            },
            "venue": {
              "lat": 25.7847879,
              "lng": -80.1933997,
              "displayName": "E11even Miami",
              "uri": "http://www.songkick.com/venues/2589333-e11even-miami?utm_source=42541&utm_medium=partner",
              "metroArea": {
                "displayName": "Miami",
                "country": {
                  "displayName": "US"
                },
                "uri": "http://www.songkick.com/metro_areas/9776-us-miami?utm_source=42541&utm_medium=partner",
                "id": 9776,
                "state": {
                  "displayName": "FL"
                }
              },
              "id": 2589333
            },
            "popularity": 0.000093,
            "uri": "http://www.songkick.com/concerts/28839519-iron-lyon-at-e11even-miami?utm_source=42541&utm_medium=partner",
            "id": 28839519
          },
          {
            "type": "Concert",
            "performance": [
              {
                "billing": "headline",
                "displayName": "Graham Funke",
                "billingIndex": 1,
                "artist": {
                  "displayName": "Graham Funke",
                  "uri": "http://www.songkick.com/artists/2350679-graham-funke?utm_source=42541&utm_medium=partner",
                  "id": 2350679,
                  "identifier": [],
                  "imageUrl": "http://images.sk-static.com/images/media/profile_images/artists/2350679/huge_avatar"
                },
                "id": 55820729
              }
            ],
            "status": "ok",
            "displayName": "Graham Funke at E11even Miami (January 26, 2017)",
            "start": {
              "time": "10:00:00",
              "datetime": "2017-01-26T10:00:00-0500",
              "date": "2017-01-26"
            },
            "ageRestriction": null,
            "location": {
              "lat": 25.7847879,
              "lng": -80.1933997,
              "city": "Miami, FL, US"
            },
            "venue": {
              "lat": 25.7847879,
              "lng": -80.1933997,
              "displayName": "E11even Miami",
              "uri": "http://www.songkick.com/venues/2589333-e11even-miami?utm_source=42541&utm_medium=partner",
              "metroArea": {
                "displayName": "Miami",
                "country": {
                  "displayName": "US"
                },
                "uri": "http://www.songkick.com/metro_areas/9776-us-miami?utm_source=42541&utm_medium=partner",
                "id": 9776,
                "state": {
                  "displayName": "FL"
                }
              },
              "id": 2589333
            },
            "popularity": 0.000004,
            "uri": "http://www.songkick.com/concerts/28754184-graham-funke-at-e11even-miami?utm_source=42541&utm_medium=partner",
            "id": 28754184
          },
          {
            "type": "Concert",
            "performance": [
              {
                "billing": "headline",
                "displayName": "Airic Diaz",
                "billingIndex": 1,
                "artist": {
                  "displayName": "Airic Diaz",
                  "uri": "http://www.songkick.com/artists/8846244-airic-diaz?utm_source=42541&utm_medium=partner",
                  "id": 8846244,
                  "identifier": [],
                  "imageUrl": "http://images.sk-static.com/images/media/profile_images/artists/8846244/huge_avatar"
                },
                "id": 56027794
              }
            ],
            "status": "ok",
            "displayName": "Airic Diaz at Miami Live (January 26, 2017)",
            "start": {
              "time": "19:00:00",
              "datetime": "2017-01-26T19:00:00-0500",
              "date": "2017-01-26"
            },
            "ageRestriction": "21+",
            "location": {
              "lat": 25.8554782,
              "lng": -80.1281136,
              "city": "Miami Beach, FL, US"
            },
            "venue": {
              "lat": 25.8554782,
              "lng": -80.1281136,
              "displayName": "Miami Live",
              "uri": "http://www.songkick.com/venues/3401744-miami-live?utm_source=42541&utm_medium=partner",
              "metroArea": {
                "displayName": "Miami",
                "country": {
                  "displayName": "US"
                },
                "uri": "http://www.songkick.com/metro_areas/9776-us-miami?utm_source=42541&utm_medium=partner",
                "id": 9776,
                "state": {
                  "displayName": "FL"
                }
              },
              "id": 3401744
            },
            "popularity": 0,
            "uri": "http://www.songkick.com/concerts/28871654-airic-diaz-at-miami-live?utm_source=42541&utm_medium=partner",
            "id": 28871654
          },
          {
            "type": "Concert",
            "performance": [
              {
                "billing": "headline",
                "displayName": "Reagan Youth",
                "billingIndex": 1,
                "artist": {
                  "displayName": "Reagan Youth",
                  "uri": "http://www.songkick.com/artists/375217-reagan-youth?utm_source=42541&utm_medium=partner",
                  "id": 375217,
                  "identifier": [
                    {
                      "href": "http://api.songkick.com/api/3.0/artists/mbid:5654b011-23a6-4306-9326-409c31f7dfea.json",
                      "mbid": "5654b011-23a6-4306-9326-409c31f7dfea"
                    }
                  ],
                  "imageUrl": "http://images.sk-static.com/images/media/profile_images/artists/375217/huge_avatar"
                },
                "id": 56125524
              }
            ],
            "status": "ok",
            "displayName": "Reagan Youth at Churchill's Pub (January 26, 2017)",
            "start": {
              "time": "08:00:00",
              "datetime": "2017-01-26T08:00:00-0500",
              "date": "2017-01-26"
            },
            "ageRestriction": null,
            "location": {
              "lat": 25.826174,
              "lng": -80.191811,
              "city": "Miami, FL, US"
            },
            "venue": {
              "lat": 25.826174,
              "lng": -80.191811,
              "displayName": "Churchill's Pub",
              "uri": "http://www.songkick.com/venues/13682-churchills-pub?utm_source=42541&utm_medium=partner",
              "metroArea": {
                "displayName": "Miami",
                "country": {
                  "displayName": "US"
                },
                "uri": "http://www.songkick.com/metro_areas/9776-us-miami?utm_source=42541&utm_medium=partner",
                "id": 9776,
                "state": {
                  "displayName": "FL"
                }
              },
              "id": 13682
            },
            "popularity": 0.003655,
            "uri": "http://www.songkick.com/concerts/28926909-reagan-youth-at-churchills-pub?utm_source=42541&utm_medium=partner",
            "id": 28926909
          },
          {
            "type": "Concert",
            "performance": [
              {
                "billing": "headline",
                "displayName": "Day Day Life",
                "billingIndex": 1,
                "artist": {
                  "displayName": "Day Day Life",
                  "uri": "http://www.songkick.com/artists/8971129-day-day-life?utm_source=42541&utm_medium=partner",
                  "id": 8971129,
                  "identifier": [],
                  "imageUrl": "http://images.sk-static.com/images/media/profile_images/artists/8971129/huge_avatar"
                },
                "id": 56201414
              }
            ],
            "status": "ok",
            "displayName": "Day Day Life at Miami Live (January 26, 2017)",
            "start": {
              "time": "07:00:00",
              "datetime": "2017-01-26T07:00:00-0500",
              "date": "2017-01-26"
            },
            "ageRestriction": "21",
            "location": {
              "lat": 25.8554782,
              "lng": -80.1281136,
              "city": "Miami Beach, FL, US"
            },
            "venue": {
              "lat": 25.8554782,
              "lng": -80.1281136,
              "displayName": "Miami Live",
              "uri": "http://www.songkick.com/venues/3401744-miami-live?utm_source=42541&utm_medium=partner",
              "metroArea": {
                "displayName": "Miami",
                "country": {
                  "displayName": "US"
                },
                "uri": "http://www.songkick.com/metro_areas/9776-us-miami?utm_source=42541&utm_medium=partner",
                "id": 9776,
                "state": {
                  "displayName": "FL"
                }
              },
              "id": 3401744
            },
            "popularity": 0,
            "uri": "http://www.songkick.com/concerts/28969619-day-day-life-at-miami-live?utm_source=42541&utm_medium=partner",
            "id": 28969619
          },
          {
            "type": "Concert",
            "performance": [
              {
                "billing": "headline",
                "displayName": "Lil Wayne",
                "billingIndex": 1,
                "artist": {
                  "displayName": "Lil Wayne",
                  "uri": "http://www.songkick.com/artists/65557-lil-wayne?utm_source=42541&utm_medium=partner",
                  "id": 65557,
                  "identifier": [
                    {
                      "href": "http://api.songkick.com/api/3.0/artists/mbid:ac9a487a-d9d2-4f27-bb23-0f4686488345.json",
                      "mbid": "ac9a487a-d9d2-4f27-bb23-0f4686488345"
                    }
                  ],
                  "imageUrl": "http://images.sk-static.com/images/media/profile_images/artists/65557/huge_avatar"
                },
                "id": 56274119
              }
            ],
            "status": "ok",
            "displayName": "Lil Wayne at Story Nightclub (January 26, 2017)",
            "start": {
              "time": "11:00:00",
              "datetime": "2017-01-26T11:00:00-0500",
              "date": "2017-01-26"
            },
            "ageRestriction": null,
            "location": {
              "lat": 25.770503,
              "lng": -80.13421,
              "city": "Miami Beach, FL, US"
            },
            "venue": {
              "lat": 25.770503,
              "lng": -80.13421,
              "displayName": "Story Nightclub",
              "uri": "http://www.songkick.com/venues/2095239-story-nightclub?utm_source=42541&utm_medium=partner",
              "metroArea": {
                "displayName": "Miami",
                "country": {
                  "displayName": "US"
                },
                "uri": "http://www.songkick.com/metro_areas/9776-us-miami?utm_source=42541&utm_medium=partner",
                "id": 9776,
                "state": {
                  "displayName": "FL"
                }
              },
              "id": 2095239
            },
            "popularity": 0.609818,
            "uri": "http://www.songkick.com/concerts/29009874-lil-wayne-at-story-nightclub?utm_source=42541&utm_medium=partner",
            "id": 29009874
          },
          {
            "type": "Concert",
            "performance": [
              {
                "billing": "headline",
                "displayName": "MR. MAURICIO",
                "billingIndex": 1,
                "artist": {
                  "displayName": "MR. MAURICIO",
                  "uri": "http://www.songkick.com/artists/931726-mr-mauricio?utm_source=42541&utm_medium=partner",
                  "id": 931726,
                  "identifier": [],
                  "imageUrl": "http://images.sk-static.com/images/media/profile_images/artists/931726/huge_avatar"
                },
                "id": 56387934
              },
              {
                "billing": "headline",
                "displayName": "Uncle Luke",
                "billingIndex": 2,
                "artist": {
                  "displayName": "Uncle Luke",
                  "uri": "http://www.songkick.com/artists/525929-uncle-luke?utm_source=42541&utm_medium=partner",
                  "id": 525929,
                  "identifier": [
                    {
                      "href": "http://api.songkick.com/api/3.0/artists/mbid:348b83d8-cd7c-4548-9e57-946c462743b3.json",
                      "mbid": "348b83d8-cd7c-4548-9e57-946c462743b3"
                    }
                  ],
                  "imageUrl": "http://images.sk-static.com/images/media/profile_images/artists/525929/huge_avatar"
                },
                "id": 56387939
              }
            ],
            "status": "ok",
            "displayName": "MR. MAURICIO and Uncle Luke at The Wall, W Hotel (January 26, 2017)",
            "start": {
              "time": "23:00:00",
              "datetime": "2017-01-26T23:00:00-0500",
              "date": "2017-01-26"
            },
            "ageRestriction": null,
            "location": {
              "lat": 25.797829,
              "lng": -80.127861,
              "city": "Miami, FL, US"
            },
            "venue": {
              "lat": 25.797829,
              "lng": -80.127861,
              "displayName": "The Wall, W Hotel",
              "uri": "http://www.songkick.com/venues/915731-wall-w-hotel?utm_source=42541&utm_medium=partner",
              "metroArea": {
                "displayName": "Miami",
                "country": {
                  "displayName": "US"
                },
                "uri": "http://www.songkick.com/metro_areas/9776-us-miami?utm_source=42541&utm_medium=partner",
                "id": 9776,
                "state": {
                  "displayName": "FL"
                }
              },
              "id": 915731
            },
            "popularity": 0.001083,
            "uri": "http://www.songkick.com/concerts/29072894-mr-mauricio-at-wall-w-hotel?utm_source=42541&utm_medium=partner",
            "id": 29072894
          },
          {
            "type": "Concert",
            "performance": [
              {
                "billing": "headline",
                "displayName": "Kevin Reinoso",
                "billingIndex": 1,
                "artist": {
                  "displayName": "Kevin Reinoso",
                  "uri": "http://www.songkick.com/artists/8914639-kevin-reinoso?utm_source=42541&utm_medium=partner",
                  "id": 8914639,
                  "identifier": [],
                  "imageUrl": "http://images.sk-static.com/images/media/profile_images/artists/8914639/huge_avatar"
                },
                "id": 56413799
              }
            ],
            "status": "ok",
            "displayName": "Kevin Reinoso at Twelve Miami (January 26, 2017)",
            "start": {
              "time": "21:30:00",
              "datetime": "2017-01-26T21:30:00-0500",
              "date": "2017-01-26"
            },
            "ageRestriction": "18+",
            "location": {
              "lat": 25.8103453,
              "lng": -80.3157419,
              "city": "Miami, FL, US"
            },
            "venue": {
              "lat": 25.8103453,
              "lng": -80.3157419,
              "displayName": "Twelve Miami",
              "uri": "http://www.songkick.com/venues/3298924-twelve-miami?utm_source=42541&utm_medium=partner",
              "metroArea": {
                "displayName": "Miami",
                "country": {
                  "displayName": "US"
                },
                "uri": "http://www.songkick.com/metro_areas/9776-us-miami?utm_source=42541&utm_medium=partner",
                "id": 9776,
                "state": {
                  "displayName": "FL"
                }
              },
              "id": 3298924
            },
            "popularity": 0,
            "uri": "http://www.songkick.com/concerts/29087924-kevin-reinoso-at-twelve-miami?utm_source=42541&utm_medium=partner",
            "id": 29087924
          },
          {
            "type": "Concert",
            "performance": [
              {
                "billing": "headline",
                "displayName": "Valentino Khan",
                "billingIndex": 1,
                "artist": {
                  "displayName": "Valentino Khan",
                  "uri": "http://www.songkick.com/artists/5644459-valentino-khan?utm_source=42541&utm_medium=partner",
                  "id": 5644459,
                  "identifier": [
                    {
                      "href": "http://api.songkick.com/api/3.0/artists/mbid:dc11d177-f625-40bc-95fa-972b20ae8149.json",
                      "mbid": "dc11d177-f625-40bc-95fa-972b20ae8149"
                    }
                  ],
                  "imageUrl": "http://images.sk-static.com/images/media/profile_images/artists/5644459/huge_avatar"
                },
                "id": 56424104
              }
            ],
            "status": "ok",
            "displayName": "Valentino Khan at LIV Nightclub, Fontainebleau (January 26, 2017)",
            "start": {
              "time": "11:00:00",
              "datetime": "2017-01-26T11:00:00-0500",
              "date": "2017-01-26"
            },
            "ageRestriction": null,
            "location": {
              "lat": 25.8179722,
              "lng": -80.1223898,
              "city": "Miami Beach, FL, US"
            },
            "venue": {
              "lat": 25.8179722,
              "lng": -80.1223898,
              "displayName": "LIV Nightclub, Fontainebleau",
              "uri": "http://www.songkick.com/venues/233538-liv-nightclub-fontainebleau?utm_source=42541&utm_medium=partner",
              "metroArea": {
                "displayName": "Miami",
                "country": {
                  "displayName": "US"
                },
                "uri": "http://www.songkick.com/metro_areas/9776-us-miami?utm_source=42541&utm_medium=partner",
                "id": 9776,
                "state": {
                  "displayName": "FL"
                }
              },
              "id": 233538
            },
            "popularity": 0.007329,
            "uri": "http://www.songkick.com/concerts/29094049-valentino-khan-at-liv-nightclub-fontainebleau?utm_source=42541&utm_medium=partner",
            "id": 29094049
          },
          {
            "type": "Concert",
            "ageRestriction": null,
            "status": "ok",
            "performance": [
              {
                "billingIndex": 1,
                "billing": "headline",
                "artist": {
                  "identifier": [
                    {
                      "mbid": "53f5c37f-8516-46d4-b66e-bf008cea9433",
                      "href": "http://api.songkick.com/api/3.0/artists/mbid:53f5c37f-8516-46d4-b66e-bf008cea9433.json"
                    }
                  ],
                  "displayName": "Brujeria",
                  "uri": "http://www.songkick.com/artists/384585-brujeria?utm_source=42541&utm_medium=partner",
                  "id": 384585,
                  "imageUrl": "http://images.sk-static.com/images/media/profile_images/artists/384585/huge_avatar"
                },
                "displayName": "Brujeria",
                "id": 55505714
              },
              {
                "billingIndex": 2,
                "billing": "headline",
                "artist": {
                  "identifier": [
                    {
                      "mbid": "d2bf45ea-1d83-4fa7-9613-459071a08cf1",
                      "href": "http://api.songkick.com/api/3.0/artists/mbid:d2bf45ea-1d83-4fa7-9613-459071a08cf1.json"
                    }
                  ],
                  "displayName": "The Casualties",
                  "uri": "http://www.songkick.com/artists/551924-casualties?utm_source=42541&utm_medium=partner",
                  "id": 551924,
                  "imageUrl": "http://images.sk-static.com/images/media/profile_images/artists/551924/huge_avatar"
                },
                "displayName": "The Casualties",
                "id": 55505719
              },
              {
                "billingIndex": 3,
                "billing": "headline",
                "artist": {
                  "identifier": [
                    {
                      "mbid": "1b501189-d56f-46b6-bf6d-1daca034314d",
                      "href": "http://api.songkick.com/api/3.0/artists/mbid:1b501189-d56f-46b6-bf6d-1daca034314d.json"
                    }
                  ],
                  "displayName": "Piñata Protest",
                  "uri": "http://www.songkick.com/artists/932252-pinata-protest?utm_source=42541&utm_medium=partner",
                  "id": 932252,
                  "imageUrl": "http://images.sk-static.com/images/media/profile_images/artists/932252/huge_avatar"
                },
                "displayName": "Piñata Protest",
                "id": 55505724
              }
            ],
            "venue": {
              "lng": -80.191811,
              "displayName": "Churchill's Pub",
              "uri": "http://www.songkick.com/venues/13682-churchills-pub?utm_source=42541&utm_medium=partner",
              "metroArea": {
                "displayName": "Miami",
                "uri": "http://www.songkick.com/metro_areas/9776-us-miami?utm_source=42541&utm_medium=partner",
                "id": 9776,
                "state": {
                  "displayName": "FL"
                },
                "country": {
                  "displayName": "US"
                }
              },
              "id": 13682,
              "lat": 25.826174
            },
            "start": {
              "time": "20:00:00",
              "date": "2017-01-27",
              "datetime": "2017-01-27T20:00:00-0500"
            },
            "location": {
              "lng": -80.191811,
              "city": "Miami, FL, US",
              "lat": 25.826174
            },
            "displayName": "Brujeria, The Casualties, and Piñata Protest at Churchill's Pub (January 27, 2017)",
            "uri": "http://www.songkick.com/concerts/28571224-brujeria-at-churchills-pub?utm_source=42541&utm_medium=partner",
            "popularity": 0.010414,
            "id": 28571224
          },
          {
            "type": "Concert",
            "venue": {
              "lng": -80.1281136,
              "uri": "http://www.songkick.com/venues/3401744-miami-live?utm_source=42541&utm_medium=partner",
              "id": 3401744,
              "metroArea": {
                "uri": "http://www.songkick.com/metro_areas/9776-us-miami?utm_source=42541&utm_medium=partner",
                "country": {
                  "displayName": "US"
                },
                "id": 9776,
                "state": {
                  "displayName": "FL"
                },
                "displayName": "Miami"
              },
              "lat": 25.8554782,
              "displayName": "Miami Live"
            },
            "status": "ok",
            "performance": [
              {
                "artist": {
                  "identifier": [],
                  "uri": "http://www.songkick.com/artists/8940839-nyne7?utm_source=42541&utm_medium=partner",
                  "id": 8940839,
                  "displayName": "Nyne-7",
                  "imageUrl": "http://images.sk-static.com/images/media/profile_images/artists/8940839/huge_avatar"
                },
                "billing": "headline",
                "id": 55752464,
                "billingIndex": 1,
                "displayName": "Nyne-7"
              }
            ],
            "popularity": 0.000003,
            "start": {
              "time": "09:00:00",
              "date": "2017-01-27",
              "datetime": "2017-01-27T09:00:00-0500"
            },
            "ageRestriction": "21",
            "location": {
              "lng": -80.1281136,
              "city": "Miami Beach, FL, US",
              "lat": 25.8554782
            },
            "uri": "http://www.songkick.com/concerts/28714399-nyne7-at-miami-live?utm_source=42541&utm_medium=partner",
            "id": 28714399,
            "displayName": "Nyne-7 at Miami Live (January 27, 2017)"
          },
          {
            "type": "Concert",
            "performance": [
              {
                "billing": "headline",
                "displayName": "Chad Andrew",
                "billingIndex": 1,
                "artist": {
                  "displayName": "Chad Andrew",
                  "uri": "http://www.songkick.com/artists/3331251-chad-andrew?utm_source=42541&utm_medium=partner",
                  "id": 3331251,
                  "identifier": [],
                  "imageUrl": "http://images.sk-static.com/images/media/profile_images/artists/3331251/huge_avatar"
                },
                "id": 55865804
              },
              {
                "billing": "headline",
                "displayName": "Randall M",
                "billingIndex": 2,
                "artist": {
                  "displayName": "Randall M",
                  "uri": "http://www.songkick.com/artists/6026294-randall-m?utm_source=42541&utm_medium=partner",
                  "id": 6026294,
                  "identifier": [],
                  "imageUrl": "http://images.sk-static.com/images/media/profile_images/artists/6026294/huge_avatar"
                },
                "id": 55865809
              },
              {
                "billing": "headline",
                "displayName": "Hector",
                "billingIndex": 3,
                "artist": {
                  "displayName": "Hector",
                  "uri": "http://www.songkick.com/artists/164452-hector?utm_source=42541&utm_medium=partner",
                  "id": 164452,
                  "identifier": [
                    {
                      "href": "http://api.songkick.com/api/3.0/artists/mbid:c7c19398-f083-4f31-a1c8-966ed9b177f5.json",
                      "mbid": "c7c19398-f083-4f31-a1c8-966ed9b177f5"
                    },
                    {
                      "href": "http://api.songkick.com/api/3.0/artists/mbid:600bec42-17d9-432b-949c-9ec362b13348.json",
                      "mbid": "600bec42-17d9-432b-949c-9ec362b13348"
                    },
                    {
                      "href": "http://api.songkick.com/api/3.0/artists/mbid:c385b87b-ba41-418b-b39d-135267bf0671.json",
                      "mbid": "c385b87b-ba41-418b-b39d-135267bf0671"
                    },
                    {
                      "href": "http://api.songkick.com/api/3.0/artists/mbid:6df10562-4438-464d-ba61-4f0ab92b2b08.json",
                      "mbid": "6df10562-4438-464d-ba61-4f0ab92b2b08"
                    },
                    {
                      "href": "http://api.songkick.com/api/3.0/artists/mbid:595b8113-3fea-46de-bfb9-5e3ce3e5fd16.json",
                      "mbid": "595b8113-3fea-46de-bfb9-5e3ce3e5fd16"
                    },
                    {
                      "href": "http://api.songkick.com/api/3.0/artists/mbid:6fff2845-ee50-419f-9d97-f7efbca736a3.json",
                      "mbid": "6fff2845-ee50-419f-9d97-f7efbca736a3"
                    }
                  ],
                  "imageUrl": "http://images.sk-static.com/images/media/profile_images/artists/164452/huge_avatar"
                },
                "id": 55865814
              },
              {
                "billing": "headline",
                "displayName": "David Gtronic",
                "billingIndex": 4,
                "artist": {
                  "displayName": "David Gtronic",
                  "uri": "http://www.songkick.com/artists/7068864-david-gtronic?utm_source=42541&utm_medium=partner",
                  "id": 7068864,
                  "identifier": [
                    {
                      "href": "http://api.songkick.com/api/3.0/artists/mbid:6279141f-52dc-4c39-8159-4f6be38b0c1a.json",
                      "mbid": "6279141f-52dc-4c39-8159-4f6be38b0c1a"
                    }
                  ],
                  "imageUrl": "http://images.sk-static.com/images/media/profile_images/artists/7068864/huge_avatar"
                },
                "id": 55865819
              }
            ],
            "status": "ok",
            "displayName": "Chad Andrew, Randall M, Hector, and David Gtronic at Heart Nightclub (January 27, 2017)",
            "start": {
              "time": "23:00:00",
              "datetime": "2017-01-27T23:00:00-0500",
              "date": "2017-01-27"
            },
            "ageRestriction": null,
            "location": {
              "lat": 25.784523,
              "lng": -80.19291,
              "city": "Miami, FL, US"
            },
            "venue": {
              "lat": 25.784523,
              "lng": -80.19291,
              "displayName": "Heart Nightclub",
              "uri": "http://www.songkick.com/venues/3084684-heart-nightclub?utm_source=42541&utm_medium=partner",
              "metroArea": {
                "displayName": "Miami",
                "country": {
                  "displayName": "US"
                },
                "uri": "http://www.songkick.com/metro_areas/9776-us-miami?utm_source=42541&utm_medium=partner",
                "id": 9776,
                "state": {
                  "displayName": "FL"
                }
              },
              "id": 3084684
            },
            "popularity": 0.001547,
            "uri": "http://www.songkick.com/concerts/28780939-chad-andrew-at-heart-nightclub?utm_source=42541&utm_medium=partner",
            "id": 28780939
          },
          {
            "type": "Concert",
            "performance": [
              {
                "billing": "headline",
                "displayName": "Bonefish Johnny",
                "billingIndex": 1,
                "artist": {
                  "displayName": "Bonefish Johnny",
                  "uri": "http://www.songkick.com/artists/4149021-bonefish-johnny?utm_source=42541&utm_medium=partner",
                  "id": 4149021,
                  "identifier": [],
                  "imageUrl": "http://images.sk-static.com/images/media/profile_images/artists/4149021/huge_avatar"
                },
                "id": 55959394
              }
            ],
            "status": "ok",
            "displayName": "Bonefish Johnny at Fritz & Franz Bierhaus (January 27, 2017)",
            "start": {
              "time": "21:00:00",
              "datetime": "2017-01-27T21:00:00-0500",
              "date": "2017-01-27"
            },
            "ageRestriction": null,
            "location": {
              "lat": 25.7510127,
              "lng": -80.2559875,
              "city": "Miami, FL, US"
            },
            "venue": {
              "lat": 25.7510127,
              "lng": -80.2559875,
              "displayName": "Fritz & Franz Bierhaus",
              "uri": "http://www.songkick.com/venues/948816-fritz-and-franz-bierhaus?utm_source=42541&utm_medium=partner",
              "metroArea": {
                "displayName": "Miami",
                "country": {
                  "displayName": "US"
                },
                "uri": "http://www.songkick.com/metro_areas/9776-us-miami?utm_source=42541&utm_medium=partner",
                "id": 9776,
                "state": {
                  "displayName": "FL"
                }
              },
              "id": 948816
            },
            "popularity": 0.000003,
            "uri": "http://www.songkick.com/concerts/28834159-bonefish-johnny-at-fritz-and-franz-bierhaus?utm_source=42541&utm_medium=partner",
            "id": 28834159
          },
          {
            "type": "Concert",
            "performance": [
              {
                "billing": "headline",
                "displayName": "Ruckus",
                "billingIndex": 1,
                "artist": {
                  "displayName": "Ruckus",
                  "uri": "http://www.songkick.com/artists/462659-ruckus?utm_source=42541&utm_medium=partner",
                  "id": 462659,
                  "identifier": [
                    {
                      "href": "http://api.songkick.com/api/3.0/artists/mbid:007ac622-b839-4ce9-8107-38cf49210623.json",
                      "mbid": "007ac622-b839-4ce9-8107-38cf49210623"
                    },
                    {
                      "href": "http://api.songkick.com/api/3.0/artists/mbid:33869e66-6e3b-46a0-8967-1c0a14fa447c.json",
                      "mbid": "33869e66-6e3b-46a0-8967-1c0a14fa447c"
                    }
                  ],
                  "imageUrl": "http://images.sk-static.com/images/media/profile_images/artists/462659/huge_avatar"
                },
                "id": 56068714
              }
            ],
            "status": "ok",
            "displayName": "Ruckus at LIV Nightclub, Fontainebleau (January 27, 2017)",
            "start": {
              "time": "10:00:00",
              "datetime": "2017-01-27T10:00:00-0500",
              "date": "2017-01-27"
            },
            "ageRestriction": null,
            "location": {
              "lat": 25.8179722,
              "lng": -80.1223898,
              "city": "Miami Beach, FL, US"
            },
            "venue": {
              "lat": 25.8179722,
              "lng": -80.1223898,
              "displayName": "LIV Nightclub, Fontainebleau",
              "uri": "http://www.songkick.com/venues/233538-liv-nightclub-fontainebleau?utm_source=42541&utm_medium=partner",
              "metroArea": {
                "displayName": "Miami",
                "country": {
                  "displayName": "US"
                },
                "uri": "http://www.songkick.com/metro_areas/9776-us-miami?utm_source=42541&utm_medium=partner",
                "id": 9776,
                "state": {
                  "displayName": "FL"
                }
              },
              "id": 233538
            },
            "popularity": 0.000795,
            "uri": "http://www.songkick.com/concerts/28894954-ruckus-at-liv-nightclub-fontainebleau?utm_source=42541&utm_medium=partner",
            "id": 28894954
          },
          {
            "type": "Concert",
            "performance": [
              {
                "billing": "headline",
                "displayName": "Elephante",
                "billingIndex": 1,
                "artist": {
                  "displayName": "Elephante",
                  "uri": "http://www.songkick.com/artists/4375943-elephante?utm_source=42541&utm_medium=partner",
                  "id": 4375943,
                  "identifier": [
                    {
                      "href": "http://api.songkick.com/api/3.0/artists/mbid:24f22a9d-19d2-4a4a-97f7-fe4c34731a19.json",
                      "mbid": "24f22a9d-19d2-4a4a-97f7-fe4c34731a19"
                    }
                  ],
                  "imageUrl": "http://images.sk-static.com/images/media/profile_images/artists/4375943/huge_avatar"
                },
                "id": 56085749
              }
            ],
            "status": "ok",
            "displayName": "Elephante at E11even Miami (January 27, 2017)",
            "start": {
              "time": null,
              "datetime": null,
              "date": "2017-01-27"
            },
            "ageRestriction": null,
            "location": {
              "lat": 25.7847879,
              "lng": -80.1933997,
              "city": "Miami, FL, US"
            },
            "venue": {
              "lat": 25.7847879,
              "lng": -80.1933997,
              "displayName": "E11even Miami",
              "uri": "http://www.songkick.com/venues/2589333-e11even-miami?utm_source=42541&utm_medium=partner",
              "metroArea": {
                "displayName": "Miami",
                "country": {
                  "displayName": "US"
                },
                "uri": "http://www.songkick.com/metro_areas/9776-us-miami?utm_source=42541&utm_medium=partner",
                "id": 9776,
                "state": {
                  "displayName": "FL"
                }
              },
              "id": 2589333
            },
            "popularity": 0.003668,
            "uri": "http://www.songkick.com/concerts/28905109-elephante-at-e11even-miami?utm_source=42541&utm_medium=partner",
            "id": 28905109
          },
          {
            "type": "Concert",
            "performance": [
              {
                "billing": "headline",
                "displayName": "Spam Allstars",
                "billingIndex": 1,
                "artist": {
                  "displayName": "Spam Allstars",
                  "uri": "http://www.songkick.com/artists/299511-spam-allstars?utm_source=42541&utm_medium=partner",
                  "id": 299511,
                  "identifier": [
                    {
                      "href": "http://api.songkick.com/api/3.0/artists/mbid:e92755bd-20fd-48ce-879d-8b66598ea66b.json",
                      "mbid": "e92755bd-20fd-48ce-879d-8b66598ea66b"
                    }
                  ],
                  "imageUrl": "http://images.sk-static.com/images/media/profile_images/artists/299511/huge_avatar"
                },
                "id": 56158719
              }
            ],
            "status": "ok",
            "displayName": "Spam Allstars at Ball & Chain (January 27, 2017)",
            "start": {
              "time": "22:00:00",
              "datetime": "2017-01-27T22:00:00-0500",
              "date": "2017-01-27"
            },
            "ageRestriction": null,
            "location": {
              "lat": 25.7658649,
              "lng": -80.2197635,
              "city": "Miami, FL, US"
            },
            "venue": {
              "lat": 25.7658649,
              "lng": -80.2197635,
              "displayName": "Ball & Chain",
              "uri": "http://www.songkick.com/venues/2760953-ball-and-chain?utm_source=42541&utm_medium=partner",
              "metroArea": {
                "displayName": "Miami",
                "country": {
                  "displayName": "US"
                },
                "uri": "http://www.songkick.com/metro_areas/9776-us-miami?utm_source=42541&utm_medium=partner",
                "id": 9776,
                "state": {
                  "displayName": "FL"
                }
              },
              "id": 2760953
            },
            "popularity": 0.000702,
            "uri": "http://www.songkick.com/concerts/28945969-spam-allstars-at-ball-and-chain?utm_source=42541&utm_medium=partner",
            "id": 28945969
          },
          {
            "type": "Concert",
            "performance": [
              {
                "billing": "headline",
                "displayName": "Cedric Gervais",
                "billingIndex": 1,
                "artist": {
                  "displayName": "Cedric Gervais",
                  "uri": "http://www.songkick.com/artists/566827-cedric-gervais?utm_source=42541&utm_medium=partner",
                  "id": 566827,
                  "identifier": [
                    {
                      "href": "http://api.songkick.com/api/3.0/artists/mbid:c9073012-4547-4a72-8963-738d9f8503cc.json",
                      "mbid": "c9073012-4547-4a72-8963-738d9f8503cc"
                    }
                  ],
                  "imageUrl": "http://images.sk-static.com/images/media/profile_images/artists/566827/huge_avatar"
                },
                "id": 56186919
              }
            ],
            "status": "ok",
            "displayName": "Cedric Gervais at Story Nightclub (January 27, 2017)",
            "start": {
              "time": "11:00:00",
              "datetime": "2017-01-27T11:00:00-0500",
              "date": "2017-01-27"
            },
            "ageRestriction": null,
            "location": {
              "lat": 25.770503,
              "lng": -80.13421,
              "city": "Miami Beach, FL, US"
            },
            "venue": {
              "lat": 25.770503,
              "lng": -80.13421,
              "displayName": "Story Nightclub",
              "uri": "http://www.songkick.com/venues/2095239-story-nightclub?utm_source=42541&utm_medium=partner",
              "metroArea": {
                "displayName": "Miami",
                "country": {
                  "displayName": "US"
                },
                "uri": "http://www.songkick.com/metro_areas/9776-us-miami?utm_source=42541&utm_medium=partner",
                "id": 9776,
                "state": {
                  "displayName": "FL"
                }
              },
              "id": 2095239
            },
            "popularity": 0.036857,
            "uri": "http://www.songkick.com/concerts/28961374-cedric-gervais-at-story-nightclub?utm_source=42541&utm_medium=partner",
            "id": 28961374
          },
          {
            "type": "Concert",
            "performance": [
              {
                "billing": "headline",
                "displayName": "Kevin Reinoso",
                "billingIndex": 1,
                "artist": {
                  "displayName": "Kevin Reinoso",
                  "uri": "http://www.songkick.com/artists/8914639-kevin-reinoso?utm_source=42541&utm_medium=partner",
                  "id": 8914639,
                  "identifier": [],
                  "imageUrl": "http://images.sk-static.com/images/media/profile_images/artists/8914639/huge_avatar"
                },
                "id": 56413809
              }
            ],
            "status": "ok",
            "displayName": "Kevin Reinoso at Heart Nightclub (January 27, 2017)",
            "start": {
              "time": "21:30:00",
              "datetime": "2017-01-27T21:30:00-0500",
              "date": "2017-01-27"
            },
            "ageRestriction": "18+",
            "location": {
              "lat": 25.784523,
              "lng": -80.19291,
              "city": "Miami, FL, US"
            },
            "venue": {
              "lat": 25.784523,
              "lng": -80.19291,
              "displayName": "Heart Nightclub",
              "uri": "http://www.songkick.com/venues/3084684-heart-nightclub?utm_source=42541&utm_medium=partner",
              "metroArea": {
                "displayName": "Miami",
                "country": {
                  "displayName": "US"
                },
                "uri": "http://www.songkick.com/metro_areas/9776-us-miami?utm_source=42541&utm_medium=partner",
                "id": 9776,
                "state": {
                  "displayName": "FL"
                }
              },
              "id": 3084684
            },
            "popularity": 0,
            "uri": "http://www.songkick.com/concerts/29087934-kevin-reinoso-at-heart-nightclub?utm_source=42541&utm_medium=partner",
            "id": 29087934
          },
          {
            "type": "Concert",
            "performance": [
              {
                "billing": "headline",
                "displayName": "David Tort",
                "billingIndex": 1,
                "artist": {
                  "displayName": "David Tort",
                  "uri": "http://www.songkick.com/artists/773032-david-tort?utm_source=42541&utm_medium=partner",
                  "id": 773032,
                  "identifier": [
                    {
                      "href": "http://api.songkick.com/api/3.0/artists/mbid:beff808a-444c-4f7c-9321-42ae5c69d346.json",
                      "mbid": "beff808a-444c-4f7c-9321-42ae5c69d346"
                    }
                  ],
                  "imageUrl": "http://images.sk-static.com/images/media/profile_images/artists/773032/huge_avatar"
                },
                "id": 56424199
              }
            ],
            "status": "ok",
            "displayName": "David Tort at W Miami Hotel (January 27, 2017)",
            "start": {
              "time": "22:30:00",
              "datetime": "2017-01-27T22:30:00-0500",
              "date": "2017-01-27"
            },
            "ageRestriction": null,
            "location": {
              "lat": 25.7687617,
              "lng": -80.1889081,
              "city": "Miami, FL, US"
            },
            "venue": {
              "lat": 25.7687617,
              "lng": -80.1889081,
              "displayName": "W Miami Hotel",
              "uri": "http://www.songkick.com/venues/3405369-w-miami-hotel?utm_source=42541&utm_medium=partner",
              "metroArea": {
                "displayName": "Miami",
                "country": {
                  "displayName": "US"
                },
                "uri": "http://www.songkick.com/metro_areas/9776-us-miami?utm_source=42541&utm_medium=partner",
                "id": 9776,
                "state": {
                  "displayName": "FL"
                }
              },
              "id": 3405369
            },
            "popularity": 0.003396,
            "uri": "http://www.songkick.com/concerts/29094114-david-tort-at-w-miami-hotel?utm_source=42541&utm_medium=partner",
            "id": 29094114
          },
          {
            "type": "Festival",
            "performance": [
              {
                "billing": "headline",
                "displayName": "Young Thug",
                "billingIndex": 1,
                "artist": {
                  "displayName": "Young Thug",
                  "uri": "http://www.songkick.com/artists/6761084-young-thug?utm_source=42541&utm_medium=partner",
                  "id": 6761084,
                  "identifier": [
                    {
                      "href": "http://api.songkick.com/api/3.0/artists/mbid:800760de-bdf8-43a2-8fe0-44a2401a5515.json",
                      "mbid": "800760de-bdf8-43a2-8fe0-44a2401a5515"
                    }
                  ],
                  "imageUrl": "http://images.sk-static.com/images/media/profile_images/artists/6761084/huge_avatar"
                },
                "id": 56142284
              },
              {
                "billing": "headline",
                "displayName": "Doctor P",
                "billingIndex": 2,
                "artist": {
                  "displayName": "Doctor P",
                  "uri": "http://www.songkick.com/artists/2884861-doctor-p?utm_source=42541&utm_medium=partner",
                  "id": 2884861,
                  "identifier": [
                    {
                      "href": "http://api.songkick.com/api/3.0/artists/mbid:569f11cd-2d27-40da-9b01-237f7837db77.json",
                      "mbid": "569f11cd-2d27-40da-9b01-237f7837db77"
                    }
                  ],
                  "imageUrl": "http://images.sk-static.com/images/media/profile_images/artists/2884861/huge_avatar"
                },
                "id": 56142309
              },
              {
                "billing": "headline",
                "displayName": "Desiigner",
                "billingIndex": 3,
                "artist": {
                  "displayName": "Desiigner",
                  "uri": "http://www.songkick.com/artists/8761459-desiigner?utm_source=42541&utm_medium=partner",
                  "id": 8761459,
                  "identifier": [
                    {
                      "href": "http://api.songkick.com/api/3.0/artists/mbid:05b75ee5-98cd-430e-b1ec-ec0f61fdabda.json",
                      "mbid": "05b75ee5-98cd-430e-b1ec-ec0f61fdabda"
                    }
                  ],
                  "imageUrl": "http://images.sk-static.com/images/media/profile_images/artists/8761459/huge_avatar"
                },
                "id": 56142294
              },
              {
                "billing": "headline",
                "displayName": "Carnage",
                "billingIndex": 4,
                "artist": {
                  "displayName": "Carnage",
                  "uri": "http://www.songkick.com/artists/1528099-carnage?utm_source=42541&utm_medium=partner",
                  "id": 1528099,
                  "identifier": [
                    {
                      "href": "http://api.songkick.com/api/3.0/artists/mbid:8435e420-259c-4608-a11b-700e88e78bff.json",
                      "mbid": "8435e420-259c-4608-a11b-700e88e78bff"
                    },
                    {
                      "href": "http://api.songkick.com/api/3.0/artists/mbid:9dd2db89-3b61-4b4e-8bd1-07efd2cf209e.json",
                      "mbid": "9dd2db89-3b61-4b4e-8bd1-07efd2cf209e"
                    },
                    {
                      "href": "http://api.songkick.com/api/3.0/artists/mbid:8ed71994-3e79-4185-ada8-e0cdb2b70030.json",
                      "mbid": "8ed71994-3e79-4185-ada8-e0cdb2b70030"
                    },
                    {
                      "href": "http://api.songkick.com/api/3.0/artists/mbid:71886201-e917-4c81-b26e-999e4a317c49.json",
                      "mbid": "71886201-e917-4c81-b26e-999e4a317c49"
                    },
                    {
                      "href": "http://api.songkick.com/api/3.0/artists/mbid:596b12e3-ceae-4fba-bd50-61ed5ba10e98.json",
                      "mbid": "596b12e3-ceae-4fba-bd50-61ed5ba10e98"
                    }
                  ],
                  "imageUrl": "http://images.sk-static.com/images/media/profile_images/artists/1528099/huge_avatar"
                },
                "id": 55914374
              },
              {
                "billing": "headline",
                "displayName": "Tritonal",
                "billingIndex": 5,
                "artist": {
                  "displayName": "Tritonal",
                  "uri": "http://www.songkick.com/artists/2631576-tritonal?utm_source=42541&utm_medium=partner",
                  "id": 2631576,
                  "identifier": [
                    {
                      "href": "http://api.songkick.com/api/3.0/artists/mbid:bbee6bad-1904-460e-b9f7-9e61fc890673.json",
                      "mbid": "bbee6bad-1904-460e-b9f7-9e61fc890673"
                    }
                  ],
                  "imageUrl": "http://images.sk-static.com/images/media/profile_images/artists/2631576/huge_avatar"
                },
                "id": 56128794
              },
              {
                "billing": "headline",
                "displayName": "Seven Lions",
                "billingIndex": 6,
                "artist": {
                  "displayName": "Seven Lions",
                  "uri": "http://www.songkick.com/artists/4517963-seven-lions?utm_source=42541&utm_medium=partner",
                  "id": 4517963,
                  "identifier": [
                    {
                      "href": "http://api.songkick.com/api/3.0/artists/mbid:75c016da-48e4-4992-8a10-b7128189b272.json",
                      "mbid": "75c016da-48e4-4992-8a10-b7128189b272"
                    }
                  ],
                  "imageUrl": "http://images.sk-static.com/images/media/profile_images/artists/4517963/huge_avatar"
                },
                "id": 55772214
              },
              {
                "billing": "headline",
                "displayName": "Marshmello",
                "billingIndex": 7,
                "artist": {
                  "displayName": "Marshmello",
                  "uri": "http://www.songkick.com/artists/8613384-marshmello?utm_source=42541&utm_medium=partner",
                  "id": 8613384,
                  "identifier": [
                    {
                      "href": "http://api.songkick.com/api/3.0/artists/mbid:301b45a4-b8b9-410e-8344-4b4eaf96691a.json",
                      "mbid": "301b45a4-b8b9-410e-8344-4b4eaf96691a"
                    }
                  ],
                  "imageUrl": "http://images.sk-static.com/images/media/profile_images/artists/8613384/huge_avatar"
                },
                "id": 56142279
              },
              {
                "billing": "headline",
                "displayName": "Throwdown",
                "billingIndex": 8,
                "artist": {
                  "displayName": "Throwdown",
                  "uri": "http://www.songkick.com/artists/216502-throwdown?utm_source=42541&utm_medium=partner",
                  "id": 216502,
                  "identifier": [
                    {
                      "href": "http://api.songkick.com/api/3.0/artists/mbid:af7c56d2-8584-424a-97f9-f365f50e8868.json",
                      "mbid": "af7c56d2-8584-424a-97f9-f365f50e8868"
                    }
                  ],
                  "imageUrl": "http://images.sk-static.com/images/media/profile_images/artists/216502/huge_avatar"
                },
                "id": 56142359
              },
              {
                "billing": "headline",
                "displayName": "Ookay",
                "billingIndex": 9,
                "artist": {
                  "displayName": "Ookay",
                  "uri": "http://www.songkick.com/artists/5948934-ookay?utm_source=42541&utm_medium=partner",
                  "id": 5948934,
                  "identifier": [
                    {
                      "href": "http://api.songkick.com/api/3.0/artists/mbid:8e048814-812a-4f48-a265-63593bb74f48.json",
                      "mbid": "8e048814-812a-4f48-a265-63593bb74f48"
                    }
                  ],
                  "imageUrl": "http://images.sk-static.com/images/media/profile_images/artists/5948934/huge_avatar"
                },
                "id": 56142304
              },
              {
                "billing": "headline",
                "displayName": "ILLENIUM",
                "billingIndex": 10,
                "artist": {
                  "displayName": "ILLENIUM",
                  "uri": "http://www.songkick.com/artists/7668859-illenium?utm_source=42541&utm_medium=partner",
                  "id": 7668859,
                  "identifier": [
                    {
                      "href": "http://api.songkick.com/api/3.0/artists/mbid:5f43abf6-92a5-468a-a633-b73f94627972.json",
                      "mbid": "5f43abf6-92a5-468a-a633-b73f94627972"
                    }
                  ],
                  "imageUrl": "http://images.sk-static.com/images/media/profile_images/artists/7668859/huge_avatar"
                },
                "id": 56142289
              },
              {
                "billing": "headline",
                "displayName": "Rampage",
                "billingIndex": 11,
                "artist": {
                  "displayName": "Rampage",
                  "uri": "http://www.songkick.com/artists/36000-rampage?utm_source=42541&utm_medium=partner",
                  "id": 36000,
                  "identifier": [
                    {
                      "href": "http://api.songkick.com/api/3.0/artists/mbid:25b06ebb-aa50-4a01-a2e6-febfb84337e9.json",
                      "mbid": "25b06ebb-aa50-4a01-a2e6-febfb84337e9"
                    },
                    {
                      "href": "http://api.songkick.com/api/3.0/artists/mbid:2381d868-d4fb-43de-ab19-74f6920fcb6d.json",
                      "mbid": "2381d868-d4fb-43de-ab19-74f6920fcb6d"
                    },
                    {
                      "href": "http://api.songkick.com/api/3.0/artists/mbid:c6c80060-6312-49d2-91bc-4932acee398d.json",
                      "mbid": "c6c80060-6312-49d2-91bc-4932acee398d"
                    },
                    {
                      "href": "http://api.songkick.com/api/3.0/artists/mbid:8d3fb4af-ec79-4b59-a863-c11cd3798117.json",
                      "mbid": "8d3fb4af-ec79-4b59-a863-c11cd3798117"
                    }
                  ],
                  "imageUrl": "http://images.sk-static.com/images/media/profile_images/artists/36000/huge_avatar"
                },
                "id": 56142354
              },
              {
                "billing": "headline",
                "displayName": "Mija",
                "billingIndex": 12,
                "artist": {
                  "displayName": "Mija",
                  "uri": "http://www.songkick.com/artists/375766-mija?utm_source=42541&utm_medium=partner",
                  "id": 375766,
                  "identifier": [
                    {
                      "href": "http://api.songkick.com/api/3.0/artists/mbid:07fb51c4-d0f9-4b5c-a37e-a1436dcfb00c.json",
                      "mbid": "07fb51c4-d0f9-4b5c-a37e-a1436dcfb00c"
                    }
                  ],
                  "imageUrl": "http://images.sk-static.com/images/media/profile_images/artists/375766/huge_avatar"
                },
                "id": 56142299
              },
              {
                "billing": "headline",
                "displayName": "Capone",
                "billingIndex": 13,
                "artist": {
                  "displayName": "Capone",
                  "uri": "http://www.songkick.com/artists/383954-capone?utm_source=42541&utm_medium=partner",
                  "id": 383954,
                  "identifier": [
                    {
                      "href": "http://api.songkick.com/api/3.0/artists/mbid:89eef384-c3be-4317-ae25-a6a837b90f48.json",
                      "mbid": "89eef384-c3be-4317-ae25-a6a837b90f48"
                    },
                    {
                      "href": "http://api.songkick.com/api/3.0/artists/mbid:f7d291c4-18e6-48e2-abed-78c09a91c63b.json",
                      "mbid": "f7d291c4-18e6-48e2-abed-78c09a91c63b"
                    },
                    {
                      "href": "http://api.songkick.com/api/3.0/artists/mbid:f6cd412b-7bab-4ef5-8fcc-c521806b91d1.json",
                      "mbid": "f6cd412b-7bab-4ef5-8fcc-c521806b91d1"
                    },
                    {
                      "href": "http://api.songkick.com/api/3.0/artists/mbid:9f3f55fd-5287-4ee9-9958-9187ce8c7d2c.json",
                      "mbid": "9f3f55fd-5287-4ee9-9958-9187ce8c7d2c"
                    }
                  ],
                  "imageUrl": "http://images.sk-static.com/images/media/profile_images/artists/383954/huge_avatar"
                },
                "id": 56142334
              },
              {
                "billing": "headline",
                "displayName": "Codeko",
                "billingIndex": 14,
                "artist": {
                  "displayName": "Codeko",
                  "uri": "http://www.songkick.com/artists/8510878-codeko?utm_source=42541&utm_medium=partner",
                  "id": 8510878,
                  "identifier": [
                    {
                      "href": "http://api.songkick.com/api/3.0/artists/mbid:c72def34-7abf-4b3d-9e15-61e8fea584a3.json",
                      "mbid": "c72def34-7abf-4b3d-9e15-61e8fea584a3"
                    }
                  ],
                  "imageUrl": "http://images.sk-static.com/images/media/profile_images/artists/8510878/huge_avatar"
                },
                "id": 56142329
              },
              {
                "billing": "headline",
                "displayName": "070 Shake",
                "billingIndex": 15,
                "artist": {
                  "displayName": "070 Shake",
                  "uri": "http://www.songkick.com/artists/8830634-070-shake?utm_source=42541&utm_medium=partner",
                  "id": 8830634,
                  "identifier": [
                    {
                      "href": "http://api.songkick.com/api/3.0/artists/mbid:741dbc8e-1cd5-4a66-b2b8-43bbad87ae12.json",
                      "mbid": "741dbc8e-1cd5-4a66-b2b8-43bbad87ae12"
                    }
                  ],
                  "imageUrl": "http://images.sk-static.com/images/media/profile_images/artists/8830634/huge_avatar"
                },
                "id": 56142339
              },
              {
                "billing": "headline",
                "displayName": "Solano",
                "billingIndex": 16,
                "artist": {
                  "displayName": "Solano",
                  "uri": "http://www.songkick.com/artists/116490-solano?utm_source=42541&utm_medium=partner",
                  "id": 116490,
                  "identifier": [
                    {
                      "href": "http://api.songkick.com/api/3.0/artists/mbid:0cc1c447-6354-4330-a802-8a8846022a70.json",
                      "mbid": "0cc1c447-6354-4330-a802-8a8846022a70"
                    }
                  ],
                  "imageUrl": "http://images.sk-static.com/images/media/profile_images/artists/116490/huge_avatar"
                },
                "id": 55784454
              },
              {
                "billing": "headline",
                "displayName": "Bonnie X Clyde",
                "billingIndex": 17,
                "artist": {
                  "displayName": "Bonnie X Clyde",
                  "uri": "http://www.songkick.com/artists/8726619-bonnie-x-clyde?utm_source=42541&utm_medium=partner",
                  "id": 8726619,
                  "identifier": [],
                  "imageUrl": "http://images.sk-static.com/images/media/profile_images/artists/8726619/huge_avatar"
                },
                "id": 56142314
              },
              {
                "billing": "headline",
                "displayName": "Luccio",
                "billingIndex": 18,
                "artist": {
                  "displayName": "Luccio",
                  "uri": "http://www.songkick.com/artists/1883995-luccio?utm_source=42541&utm_medium=partner",
                  "id": 1883995,
                  "identifier": [],
                  "imageUrl": "http://images.sk-static.com/images/media/profile_images/artists/1883995/huge_avatar"
                },
                "id": 56142324
              },
              {
                "billing": "headline",
                "displayName": "Flapo",
                "billingIndex": 19,
                "artist": {
                  "displayName": "Flapo",
                  "uri": "http://www.songkick.com/artists/8937814-flapo?utm_source=42541&utm_medium=partner",
                  "id": 8937814,
                  "identifier": [],
                  "imageUrl": "http://images.sk-static.com/images/media/profile_images/artists/8937814/huge_avatar"
                },
                "id": 56142349
              },
              {
                "billing": "headline",
                "displayName": "Xplicid",
                "billingIndex": 20,
                "artist": {
                  "displayName": "Xplicid",
                  "uri": "http://www.songkick.com/artists/7874659-xplicid?utm_source=42541&utm_medium=partner",
                  "id": 7874659,
                  "identifier": [],
                  "imageUrl": "http://images.sk-static.com/images/media/profile_images/artists/7874659/huge_avatar"
                },
                "id": 56142364
              },
              {
                "billing": "headline",
                "displayName": "Fresko",
                "billingIndex": 21,
                "artist": {
                  "displayName": "Fresko",
                  "uri": "http://www.songkick.com/artists/6891259-fresko?utm_source=42541&utm_medium=partner",
                  "id": 6891259,
                  "identifier": [],
                  "imageUrl": "http://images.sk-static.com/images/media/profile_images/artists/6891259/huge_avatar"
                },
                "id": 56142319
              },
              {
                "billing": "headline",
                "displayName": "Corrupt Criminal",
                "billingIndex": 22,
                "artist": {
                  "displayName": "Corrupt Criminal",
                  "uri": "http://www.songkick.com/artists/8566644-corrupt-criminal?utm_source=42541&utm_medium=partner",
                  "id": 8566644,
                  "identifier": [],
                  "imageUrl": "http://images.sk-static.com/images/media/profile_images/artists/8566644/huge_avatar"
                },
                "id": 56142344
              }
            ],
            "status": "ok",
            "series": {
              "displayName": "Life in Color Miami"
            },
            "displayName": "Life in Color Miami 2017",
            "start": {
              "time": null,
              "datetime": null,
              "date": "2017-01-28"
            },
            "end": {
              "time": null,
              "datetime": null,
              "date": "2017-01-28"
            },
            "ageRestriction": null,
            "location": {
              "lat": 25.7980897,
              "lng": -80.2020656,
              "city": "Miami, FL, US"
            },
            "venue": {
              "lat": 25.7980897,
              "lng": -80.2020656,
              "displayName": "Mana Wynwood",
              "uri": "http://www.songkick.com/venues/2897028-mana-wynwood?utm_source=42541&utm_medium=partner",
              "metroArea": {
                "displayName": "Miami",
                "country": {
                  "displayName": "US"
                },
                "uri": "http://www.songkick.com/metro_areas/9776-us-miami?utm_source=42541&utm_medium=partner",
                "id": 9776,
                "state": {
                  "displayName": "FL"
                }
              },
              "id": 2897028
            },
            "popularity": 0.089729,
            "uri": "http://www.songkick.com/festivals/1426484-life-in-color-miami/id/28137779-life-in-color-miami-2017?utm_source=42541&utm_medium=partner",
            "id": 28137779,
            "imageUrl": "http://images.sk-static.com/images/media/profile_images/events/28137779/large_avatar"
          },
          {
            "type": "Festival",
            "performance": [
              {
                "billing": "headline",
                "displayName": "Hot Chip",
                "billingIndex": 1,
                "artist": {
                  "displayName": "Hot Chip",
                  "uri": "http://www.songkick.com/artists/256535-hot-chip?utm_source=42541&utm_medium=partner",
                  "id": 256535,
                  "identifier": [
                    {
                      "href": "http://api.songkick.com/api/3.0/artists/mbid:d8915e13-d67a-4aa0-9c0b-1f126af951af.json",
                      "mbid": "d8915e13-d67a-4aa0-9c0b-1f126af951af"
                    }
                  ],
                  "imageUrl": "http://images.sk-static.com/images/media/profile_images/artists/256535/huge_avatar"
                },
                "id": 55965704
              },
              {
                "billing": "headline",
                "displayName": "Ghostface Killah",
                "billingIndex": 2,
                "artist": {
                  "displayName": "Ghostface Killah",
                  "uri": "http://www.songkick.com/artists/391840-ghostface-killah?utm_source=42541&utm_medium=partner",
                  "id": 391840,
                  "identifier": [
                    {
                      "href": "http://api.songkick.com/api/3.0/artists/mbid:3b39abeb-0064-4eed-9ddd-ee47a45c54cb.json",
                      "mbid": "3b39abeb-0064-4eed-9ddd-ee47a45c54cb"
                    }
                  ],
                  "imageUrl": "http://images.sk-static.com/images/media/profile_images/artists/391840/huge_avatar"
                },
                "id": 55965714
              },
              {
                "billing": "headline",
                "displayName": "Nosaj Thing",
                "billingIndex": 3,
                "artist": {
                  "displayName": "Nosaj Thing",
                  "uri": "http://www.songkick.com/artists/375762-nosaj-thing?utm_source=42541&utm_medium=partner",
                  "id": 375762,
                  "identifier": [
                    {
                      "href": "http://api.songkick.com/api/3.0/artists/mbid:b476bc5e-19ca-4e5a-82c8-1a068d601a7d.json",
                      "mbid": "b476bc5e-19ca-4e5a-82c8-1a068d601a7d"
                    }
                  ],
                  "imageUrl": "http://images.sk-static.com/images/media/profile_images/artists/375762/huge_avatar"
                },
                "id": 55965724
              },
              {
                "billing": "headline",
                "displayName": "Slow Magic",
                "billingIndex": 4,
                "artist": {
                  "displayName": "Slow Magic",
                  "uri": "http://www.songkick.com/artists/4661543-slow-magic?utm_source=42541&utm_medium=partner",
                  "id": 4661543,
                  "identifier": [
                    {
                      "href": "http://api.songkick.com/api/3.0/artists/mbid:20cb03e2-acfd-439f-9db2-ce8fcc67b220.json",
                      "mbid": "20cb03e2-acfd-439f-9db2-ce8fcc67b220"
                    }
                  ],
                  "imageUrl": "http://images.sk-static.com/images/media/profile_images/artists/4661543/huge_avatar"
                },
                "id": 55958114
              },
              {
                "billing": "headline",
                "displayName": "Los Amigos Invisibles",
                "billingIndex": 5,
                "artist": {
                  "displayName": "Los Amigos Invisibles",
                  "uri": "http://www.songkick.com/artists/290133-los-amigos-invisibles?utm_source=42541&utm_medium=partner",
                  "id": 290133,
                  "identifier": [
                    {
                      "href": "http://api.songkick.com/api/3.0/artists/mbid:c694bf65-83e9-47d5-aeb3-bb68f78ef981.json",
                      "mbid": "c694bf65-83e9-47d5-aeb3-bb68f78ef981"
                    }
                  ],
                  "imageUrl": "http://images.sk-static.com/images/media/profile_images/artists/290133/huge_avatar"
                },
                "id": 55940579
              },
              {
                "billing": "headline",
                "displayName": "Bomba Estéreo",
                "billingIndex": 6,
                "artist": {
                  "displayName": "Bomba Estéreo",
                  "uri": "http://www.songkick.com/artists/1071095-bomba-estereo?utm_source=42541&utm_medium=partner",
                  "id": 1071095,
                  "identifier": [
                    {
                      "href": "http://api.songkick.com/api/3.0/artists/mbid:aea8576d-7ad5-4430-bf2e-63725d80f05c.json",
                      "mbid": "aea8576d-7ad5-4430-bf2e-63725d80f05c"
                    }
                  ],
                  "imageUrl": "http://images.sk-static.com/images/media/profile_images/artists/1071095/huge_avatar"
                },
                "id": 55965709
              },
              {
                "billing": "headline",
                "displayName": "Millionyoung",
                "billingIndex": 7,
                "artist": {
                  "displayName": "Millionyoung",
                  "uri": "http://www.songkick.com/artists/2928041-millionyoung?utm_source=42541&utm_medium=partner",
                  "id": 2928041,
                  "identifier": [
                    {
                      "href": "http://api.songkick.com/api/3.0/artists/mbid:ba0eb739-583a-456b-ac82-77b43716ab0c.json",
                      "mbid": "ba0eb739-583a-456b-ac82-77b43716ab0c"
                    }
                  ],
                  "imageUrl": "http://images.sk-static.com/images/media/profile_images/artists/2928041/huge_avatar"
                },
                "id": 55965754
              },
              {
                "billing": "headline",
                "displayName": "Amtrac",
                "billingIndex": 8,
                "artist": {
                  "displayName": "Amtrac",
                  "uri": "http://www.songkick.com/artists/4069036-amtrac?utm_source=42541&utm_medium=partner",
                  "id": 4069036,
                  "identifier": [
                    {
                      "href": "http://api.songkick.com/api/3.0/artists/mbid:348c486f-3d12-4361-8cc7-37b3c93f0aed.json",
                      "mbid": "348c486f-3d12-4361-8cc7-37b3c93f0aed"
                    }
                  ],
                  "imageUrl": "http://images.sk-static.com/images/media/profile_images/artists/4069036/huge_avatar"
                },
                "id": 55965729
              },
              {
                "billing": "headline",
                "displayName": "Jacuzzi Boys",
                "billingIndex": 9,
                "artist": {
                  "displayName": "Jacuzzi Boys",
                  "uri": "http://www.songkick.com/artists/1947460-jacuzzi-boys?utm_source=42541&utm_medium=partner",
                  "id": 1947460,
                  "identifier": [
                    {
                      "href": "http://api.songkick.com/api/3.0/artists/mbid:b8bd23d1-2b87-445f-855c-3401ff32bf30.json",
                      "mbid": "b8bd23d1-2b87-445f-855c-3401ff32bf30"
                    },
                    {
                      "href": "http://api.songkick.com/api/3.0/artists/mbid:022a372c-a83b-4ce3-8717-990caade5753.json",
                      "mbid": "022a372c-a83b-4ce3-8717-990caade5753"
                    }
                  ],
                  "imageUrl": "http://images.sk-static.com/images/media/profile_images/artists/1947460/huge_avatar"
                },
                "id": 55965739
              },
              {
                "billing": "headline",
                "displayName": "Steven A. Clark",
                "billingIndex": 10,
                "artist": {
                  "displayName": "Steven A. Clark",
                  "uri": "http://www.songkick.com/artists/4924613-steven-a-clark?utm_source=42541&utm_medium=partner",
                  "id": 4924613,
                  "identifier": [
                    {
                      "href": "http://api.songkick.com/api/3.0/artists/mbid:080badc0-6fe8-43a9-8d29-add0c5d55ba5.json",
                      "mbid": "080badc0-6fe8-43a9-8d29-add0c5d55ba5"
                    }
                  ],
                  "imageUrl": "http://images.sk-static.com/images/media/profile_images/artists/4924613/huge_avatar"
                },
                "id": 55965744
              },
              {
                "billing": "headline",
                "displayName": "Arthur Baker",
                "billingIndex": 11,
                "artist": {
                  "displayName": "Arthur Baker",
                  "uri": "http://www.songkick.com/artists/528501-arthur-baker?utm_source=42541&utm_medium=partner",
                  "id": 528501,
                  "identifier": [
                    {
                      "href": "http://api.songkick.com/api/3.0/artists/mbid:6b6c5ce7-7a49-463a-ac9f-ba97c953a77e.json",
                      "mbid": "6b6c5ce7-7a49-463a-ac9f-ba97c953a77e"
                    }
                  ],
                  "imageUrl": "http://images.sk-static.com/images/media/profile_images/artists/528501/huge_avatar"
                },
                "id": 55965734
              },
              {
                "billing": "headline",
                "displayName": "Mr. Pauer",
                "billingIndex": 12,
                "artist": {
                  "displayName": "Mr. Pauer",
                  "uri": "http://www.songkick.com/artists/3058726-mr-pauer?utm_source=42541&utm_medium=partner",
                  "id": 3058726,
                  "identifier": [
                    {
                      "href": "http://api.songkick.com/api/3.0/artists/mbid:c30c3989-e773-4a8c-b8d9-5d6605cd7d7a.json",
                      "mbid": "c30c3989-e773-4a8c-b8d9-5d6605cd7d7a"
                    }
                  ],
                  "imageUrl": "http://images.sk-static.com/images/media/profile_images/artists/3058726/huge_avatar"
                },
                "id": 55965749
              },
              {
                "billing": "headline",
                "displayName": "The Tremends",
                "billingIndex": 13,
                "artist": {
                  "displayName": "The Tremends",
                  "uri": "http://www.songkick.com/artists/3698081-tremends?utm_source=42541&utm_medium=partner",
                  "id": 3698081,
                  "identifier": [],
                  "imageUrl": "http://images.sk-static.com/images/media/profile_images/artists/3698081/huge_avatar"
                },
                "id": 55965759
              }
            ],
            "status": "ok",
            "series": {
              "displayName": "FM Festival"
            },
            "displayName": "FM Festival 2017",
            "start": {
              "time": "14:00:00",
              "datetime": "2017-01-28T14:00:00-0500",
              "date": "2017-01-28"
            },
            "end": {
              "time": null,
              "datetime": null,
              "date": "2017-01-29"
            },
            "ageRestriction": null,
            "location": {
              "lat": 25.8578699,
              "lng": -80.1203753,
              "city": "Miami Beach, FL, US"
            },
            "venue": {
              "lat": 25.8578699,
              "lng": -80.1203753,
              "displayName": "Bandshell Park",
              "uri": "http://www.songkick.com/venues/3422439-bandshell-park?utm_source=42541&utm_medium=partner",
              "metroArea": {
                "displayName": "Miami",
                "country": {
                  "displayName": "US"
                },
                "uri": "http://www.songkick.com/metro_areas/9776-us-miami?utm_source=42541&utm_medium=partner",
                "id": 9776,
                "state": {
                  "displayName": "FL"
                }
              },
              "id": 3422439
            },
            "popularity": 0.172029,
            "uri": "http://www.songkick.com/festivals/1726474-fm/id/28833394-fm-festival-2017?utm_source=42541&utm_medium=partner",
            "id": 28833394,
            "imageUrl": "http://images.sk-static.com/images/media/profile_images/events/28833394/large_avatar"
          },
          {
            "type": "Concert",
            "performance": [
              {
                "billing": "headline",
                "displayName": "Green Velvet",
                "billingIndex": 1,
                "artist": {
                  "displayName": "Green Velvet",
                  "uri": "http://www.songkick.com/artists/423930-green-velvet?utm_source=42541&utm_medium=partner",
                  "id": 423930,
                  "identifier": [
                    {
                      "href": "http://api.songkick.com/api/3.0/artists/mbid:e425b041-c28a-4ae8-9d5c-997890433cd4.json",
                      "mbid": "e425b041-c28a-4ae8-9d5c-997890433cd4"
                    }
                  ],
                  "imageUrl": "http://images.sk-static.com/images/media/profile_images/artists/423930/huge_avatar"
                },
                "id": 56002034
              }
            ],
            "status": "ok",
            "displayName": "Green Velvet at Space (January 28, 2017)",
            "start": {
              "time": "23:00:00",
              "datetime": "2017-01-28T23:00:00-0500",
              "date": "2017-01-28"
            },
            "ageRestriction": null,
            "location": {
              "lat": 25.7844757,
              "lng": -80.1931356,
              "city": "Miami, FL, US"
            },
            "venue": {
              "lat": 25.7844757,
              "lng": -80.1931356,
              "displayName": "Space",
              "uri": "http://www.songkick.com/venues/11045-space?utm_source=42541&utm_medium=partner",
              "metroArea": {
                "displayName": "Miami",
                "country": {
                  "displayName": "US"
                },
                "uri": "http://www.songkick.com/metro_areas/9776-us-miami?utm_source=42541&utm_medium=partner",
                "id": 9776,
                "state": {
                  "displayName": "FL"
                }
              },
              "id": 11045
            },
            "popularity": 0.015859,
            "uri": "http://www.songkick.com/concerts/28856779-green-velvet-at-space?utm_source=42541&utm_medium=partner",
            "id": 28856779
          },
          {
            "type": "Concert",
            "performance": [
              {
                "billing": "headline",
                "displayName": "Cocodrills",
                "billingIndex": 1,
                "artist": {
                  "displayName": "Cocodrills",
                  "uri": "http://www.songkick.com/artists/1807797-cocodrills?utm_source=42541&utm_medium=partner",
                  "id": 1807797,
                  "identifier": [
                    {
                      "href": "http://api.songkick.com/api/3.0/artists/mbid:f5c3154e-be77-47c0-8755-437406dab5b5.json",
                      "mbid": "f5c3154e-be77-47c0-8755-437406dab5b5"
                    }
                  ],
                  "imageUrl": "http://images.sk-static.com/images/media/profile_images/artists/1807797/huge_avatar"
                },
                "id": 56013799
              },
              {
                "billing": "headline",
                "displayName": "Technasia",
                "billingIndex": 2,
                "artist": {
                  "displayName": "Technasia",
                  "uri": "http://www.songkick.com/artists/431998-technasia?utm_source=42541&utm_medium=partner",
                  "id": 431998,
                  "identifier": [
                    {
                      "href": "http://api.songkick.com/api/3.0/artists/mbid:e0d60456-7353-4013-b8e2-966b1a2e21c4.json",
                      "mbid": "e0d60456-7353-4013-b8e2-966b1a2e21c4"
                    }
                  ],
                  "imageUrl": "http://images.sk-static.com/images/media/profile_images/artists/431998/huge_avatar"
                },
                "id": 56013804
              },
              {
                "billing": "headline",
                "displayName": "Oscar G",
                "billingIndex": 3,
                "artist": {
                  "displayName": "Oscar G",
                  "uri": "http://www.songkick.com/artists/29337-oscar-g?utm_source=42541&utm_medium=partner",
                  "id": 29337,
                  "identifier": [
                    {
                      "href": "http://api.songkick.com/api/3.0/artists/mbid:5a803ee3-64c1-43ca-b7ab-323d1ac14474.json",
                      "mbid": "5a803ee3-64c1-43ca-b7ab-323d1ac14474"
                    },
                    {
                      "href": "http://api.songkick.com/api/3.0/artists/mbid:f5951aae-7132-4d0f-ad70-200e0f0b3dbc.json",
                      "mbid": "f5951aae-7132-4d0f-ad70-200e0f0b3dbc"
                    }
                  ],
                  "imageUrl": "http://images.sk-static.com/images/media/profile_images/artists/29337/huge_avatar"
                },
                "id": 56306244
              }
            ],
            "status": "ok",
            "displayName": "Cocodrills, Technasia, and Oscar G at Heart Nightclub (January 28, 2017)",
            "start": {
              "time": "23:00:00",
              "datetime": "2017-01-28T23:00:00-0500",
              "date": "2017-01-28"
            },
            "ageRestriction": null,
            "location": {
              "lat": 25.784523,
              "lng": -80.19291,
              "city": "Miami, FL, US"
            },
            "venue": {
              "lat": 25.784523,
              "lng": -80.19291,
              "displayName": "Heart Nightclub",
              "uri": "http://www.songkick.com/venues/3084684-heart-nightclub?utm_source=42541&utm_medium=partner",
              "metroArea": {
                "displayName": "Miami",
                "country": {
                  "displayName": "US"
                },
                "uri": "http://www.songkick.com/metro_areas/9776-us-miami?utm_source=42541&utm_medium=partner",
                "id": 9776,
                "state": {
                  "displayName": "FL"
                }
              },
              "id": 3084684
            },
            "popularity": 0.002471,
            "uri": "http://www.songkick.com/concerts/28864039-cocodrills-at-heart-nightclub?utm_source=42541&utm_medium=partner",
            "id": 28864039
          },
          {
            "type": "Concert",
            "performance": [
              {
                "billing": "headline",
                "displayName": "Green Jellÿ",
                "billingIndex": 1,
                "artist": {
                  "displayName": "Green Jellÿ",
                  "uri": "http://www.songkick.com/artists/187054-green-jelly?utm_source=42541&utm_medium=partner",
                  "id": 187054,
                  "identifier": [
                    {
                      "href": "http://api.songkick.com/api/3.0/artists/mbid:f291ffa8-891c-46ae-ba5e-fd3c53db56f0.json",
                      "mbid": "f291ffa8-891c-46ae-ba5e-fd3c53db56f0"
                    }
                  ],
                  "imageUrl": "http://images.sk-static.com/images/media/profile_images/artists/187054/huge_avatar"
                },
                "id": 56021974
              },
              {
                "billing": "support",
                "displayName": "Otto Von Schirach",
                "billingIndex": 2,
                "artist": {
                  "displayName": "Otto Von Schirach",
                  "uri": "http://www.songkick.com/artists/511151-otto-von-schirach?utm_source=42541&utm_medium=partner",
                  "id": 511151,
                  "identifier": [
                    {
                      "href": "http://api.songkick.com/api/3.0/artists/mbid:1f3b044c-8671-4958-ac9f-96e61d5341b2.json",
                      "mbid": "1f3b044c-8671-4958-ac9f-96e61d5341b2"
                    }
                  ],
                  "imageUrl": "http://images.sk-static.com/images/media/profile_images/artists/511151/huge_avatar"
                },
                "id": 56021979
              }
            ],
            "status": "ok",
            "displayName": "Green Jellÿ with Otto Von Schirach at Churchill's Pub (January 28, 2017)",
            "start": {
              "time": "19:00:00",
              "datetime": "2017-01-28T19:00:00-0500",
              "date": "2017-01-28"
            },
            "ageRestriction": null,
            "location": {
              "lat": 25.826174,
              "lng": -80.191811,
              "city": "Miami, FL, US"
            },
            "venue": {
              "lat": 25.826174,
              "lng": -80.191811,
              "displayName": "Churchill's Pub",
              "uri": "http://www.songkick.com/venues/13682-churchills-pub?utm_source=42541&utm_medium=partner",
              "metroArea": {
                "displayName": "Miami",
                "country": {
                  "displayName": "US"
                },
                "uri": "http://www.songkick.com/metro_areas/9776-us-miami?utm_source=42541&utm_medium=partner",
                "id": 9776,
                "state": {
                  "displayName": "FL"
                }
              },
              "id": 13682
            },
            "popularity": 0.005188,
            "uri": "http://www.songkick.com/concerts/28868629-green-jelly-at-churchills-pub?utm_source=42541&utm_medium=partner",
            "id": 28868629
          },
          {
            "type": "Concert",
            "performance": [
              {
                "billing": "headline",
                "displayName": "Whetherman",
                "billingIndex": 1,
                "artist": {
                  "displayName": "Whetherman",
                  "uri": "http://www.songkick.com/artists/672851-whetherman?utm_source=42541&utm_medium=partner",
                  "id": 672851,
                  "identifier": [],
                  "imageUrl": "http://images.sk-static.com/images/media/profile_images/artists/672851/huge_avatar"
                },
                "id": 56054094
              }
            ],
            "status": "ok",
            "displayName": "Whetherman at Unknown venue (January 28, 2017)",
            "start": {
              "time": null,
              "datetime": null,
              "date": "2017-01-28"
            },
            "ageRestriction": null,
            "location": {
              "lat": 25.7616798,
              "lng": -80.1917902,
              "city": "Miami, FL, US"
            },
            "venue": {
              "lat": 25.7616798,
              "lng": -80.1917902,
              "displayName": "Unknown venue",
              "uri": null,
              "metroArea": {
                "displayName": "Miami",
                "country": {
                  "displayName": "US"
                },
                "uri": "http://www.songkick.com/metro_areas/9776-us-miami?utm_source=42541&utm_medium=partner",
                "id": 9776,
                "state": {
                  "displayName": "FL"
                }
              },
              "id": null
            },
            "popularity": 0.000174,
            "uri": "http://www.songkick.com/concerts/28886489-whetherman-at-unknown-venue?utm_source=42541&utm_medium=partner",
            "id": 28886489
          },
          {
            "type": "Concert",
            "performance": [
              {
                "billing": "headline",
                "displayName": "DJ HOLIDAY",
                "billingIndex": 1,
                "artist": {
                  "displayName": "DJ HOLIDAY",
                  "uri": "http://www.songkick.com/artists/1728274-dj-holiday?utm_source=42541&utm_medium=partner",
                  "id": 1728274,
                  "identifier": [
                    {
                      "href": "http://api.songkick.com/api/3.0/artists/mbid:c6d08ca0-3b17-4015-9aef-2ae31354adcc.json",
                      "mbid": "c6d08ca0-3b17-4015-9aef-2ae31354adcc"
                    }
                  ],
                  "imageUrl": "http://images.sk-static.com/images/media/profile_images/artists/1728274/huge_avatar"
                },
                "id": 56136559
              }
            ],
            "status": "ok",
            "displayName": "DJ HOLIDAY at E11even Miami (January 28, 2017)",
            "start": {
              "time": "08:00:00",
              "datetime": "2017-01-28T08:00:00-0500",
              "date": "2017-01-28"
            },
            "ageRestriction": null,
            "location": {
              "lat": 25.7847879,
              "lng": -80.1933997,
              "city": "Miami, FL, US"
            },
            "venue": {
              "lat": 25.7847879,
              "lng": -80.1933997,
              "displayName": "E11even Miami",
              "uri": "http://www.songkick.com/venues/2589333-e11even-miami?utm_source=42541&utm_medium=partner",
              "metroArea": {
                "displayName": "Miami",
                "country": {
                  "displayName": "US"
                },
                "uri": "http://www.songkick.com/metro_areas/9776-us-miami?utm_source=42541&utm_medium=partner",
                "id": 9776,
                "state": {
                  "displayName": "FL"
                }
              },
              "id": 2589333
            },
            "popularity": 0.001233,
            "uri": "http://www.songkick.com/concerts/28933244-dj-holiday-at-e11even-miami?utm_source=42541&utm_medium=partner",
            "id": 28933244
          },
          {
            "type": "Concert",
            "performance": [
              {
                "billing": "headline",
                "displayName": "Puma & Harry",
                "billingIndex": 1,
                "artist": {
                  "displayName": "Puma & Harry",
                  "uri": "http://www.songkick.com/artists/8882514-puma-and-harry?utm_source=42541&utm_medium=partner",
                  "id": 8882514,
                  "identifier": [],
                  "imageUrl": "http://images.sk-static.com/images/media/profile_images/artists/8882514/huge_avatar"
                },
                "id": 56176344
              },
              {
                "billing": "headline",
                "displayName": "Mikey Lion",
                "billingIndex": 2,
                "artist": {
                  "displayName": "Mikey Lion",
                  "uri": "http://www.songkick.com/artists/3057031-mikey-lion?utm_source=42541&utm_medium=partner",
                  "id": 3057031,
                  "identifier": [],
                  "imageUrl": "http://images.sk-static.com/images/media/profile_images/artists/3057031/huge_avatar"
                },
                "id": 56176349
              },
              {
                "billing": "headline",
                "displayName": "Deep Jesus",
                "billingIndex": 3,
                "artist": {
                  "displayName": "Deep Jesus",
                  "uri": "http://www.songkick.com/artists/7385044-deep-jesus?utm_source=42541&utm_medium=partner",
                  "id": 7385044,
                  "identifier": [],
                  "imageUrl": "http://images.sk-static.com/images/media/profile_images/artists/7385044/huge_avatar"
                },
                "id": 56176354
              },
              {
                "billing": "headline",
                "displayName": "Porkchop",
                "billingIndex": 4,
                "artist": {
                  "displayName": "Porkchop",
                  "uri": "http://www.songkick.com/artists/384016-porkchop?utm_source=42541&utm_medium=partner",
                  "id": 384016,
                  "identifier": [
                    {
                      "href": "http://api.songkick.com/api/3.0/artists/mbid:e8888d36-20c5-47f5-aa6c-f9a08e307ad1.json",
                      "mbid": "e8888d36-20c5-47f5-aa6c-f9a08e307ad1"
                    }
                  ],
                  "imageUrl": "http://images.sk-static.com/images/media/profile_images/artists/384016/huge_avatar"
                },
                "id": 56176359
              },
              {
                "billing": "headline",
                "displayName": "Lee Reynolds",
                "billingIndex": 5,
                "artist": {
                  "displayName": "Lee Reynolds",
                  "uri": "http://www.songkick.com/artists/7385039-lee-reynolds?utm_source=42541&utm_medium=partner",
                  "id": 7385039,
                  "identifier": [
                    {
                      "href": "http://api.songkick.com/api/3.0/artists/mbid:8c6bcbd4-538c-4596-8a2d-120a2280320d.json",
                      "mbid": "8c6bcbd4-538c-4596-8a2d-120a2280320d"
                    },
                    {
                      "href": "http://api.songkick.com/api/3.0/artists/mbid:e9562fd6-0292-49af-af11-8a52292c0fb7.json",
                      "mbid": "e9562fd6-0292-49af-af11-8a52292c0fb7"
                    }
                  ],
                  "imageUrl": "http://images.sk-static.com/images/media/profile_images/artists/7385039/huge_avatar"
                },
                "id": 56176364
              },
              {
                "billing": "headline",
                "displayName": "Jeremy Ismael",
                "billingIndex": 6,
                "artist": {
                  "displayName": "Jeremy Ismael",
                  "uri": "http://www.songkick.com/artists/7435214-jeremy-ismael?utm_source=42541&utm_medium=partner",
                  "id": 7435214,
                  "identifier": [],
                  "imageUrl": "http://images.sk-static.com/images/media/profile_images/artists/7435214/huge_avatar"
                },
                "id": 56176369
              }
            ],
            "status": "ok",
            "displayName": "Puma & Harry, Mikey Lion, Deep Jesus, Porkchop, and 2 more… at Unknown venue (January 28, 2017)",
            "start": {
              "time": "19:00:00",
              "datetime": "2017-01-28T19:00:00-0500",
              "date": "2017-01-28"
            },
            "ageRestriction": null,
            "location": {
              "lat": 25.7616798,
              "lng": -80.1917902,
              "city": "Miami, FL, US"
            },
            "venue": {
              "lat": 25.7616798,
              "lng": -80.1917902,
              "displayName": "Unknown venue",
              "uri": null,
              "metroArea": {
                "displayName": "Miami",
                "country": {
                  "displayName": "US"
                },
                "uri": "http://www.songkick.com/metro_areas/9776-us-miami?utm_source=42541&utm_medium=partner",
                "id": 9776,
                "state": {
                  "displayName": "FL"
                }
              },
              "id": null
            },
            "popularity": 0.000202,
            "uri": "http://www.songkick.com/concerts/28955519-puma-and-harry-at-unknown-venue?utm_source=42541&utm_medium=partner",
            "id": 28955519
          },
          {
            "type": "Concert",
            "performance": [
              {
                "billing": "headline",
                "displayName": "Rony Seikaly",
                "billingIndex": 1,
                "artist": {
                  "displayName": "Rony Seikaly",
                  "uri": "http://www.songkick.com/artists/3789546-rony-seikaly?utm_source=42541&utm_medium=partner",
                  "id": 3789546,
                  "identifier": [
                    {
                      "href": "http://api.songkick.com/api/3.0/artists/mbid:86945d2e-0ab1-4790-902b-f1981ab16a9c.json",
                      "mbid": "86945d2e-0ab1-4790-902b-f1981ab16a9c"
                    }
                  ],
                  "imageUrl": "http://images.sk-static.com/images/media/profile_images/artists/3789546/huge_avatar"
                },
                "id": 56387944
              }
            ],
            "status": "ok",
            "displayName": "Rony Seikaly at The Wall, W Hotel (January 28, 2017)",
            "start": {
              "time": "23:00:00",
              "datetime": "2017-01-28T23:00:00-0500",
              "date": "2017-01-28"
            },
            "ageRestriction": null,
            "location": {
              "lat": 25.797829,
              "lng": -80.127861,
              "city": "Miami, FL, US"
            },
            "venue": {
              "lat": 25.797829,
              "lng": -80.127861,
              "displayName": "The Wall, W Hotel",
              "uri": "http://www.songkick.com/venues/915731-wall-w-hotel?utm_source=42541&utm_medium=partner",
              "metroArea": {
                "displayName": "Miami",
                "country": {
                  "displayName": "US"
                },
                "uri": "http://www.songkick.com/metro_areas/9776-us-miami?utm_source=42541&utm_medium=partner",
                "id": 9776,
                "state": {
                  "displayName": "FL"
                }
              },
              "id": 915731
            },
            "popularity": 0.000718,
            "uri": "http://www.songkick.com/concerts/29072899-rony-seikaly-at-wall-w-hotel?utm_source=42541&utm_medium=partner",
            "id": 29072899
          },
          {
            "type": "Concert",
            "popularity": 0.12739,
            "status": "ok",
            "ageRestriction": null,
            "start": {
              "time": null,
              "date": "2017-01-29",
              "datetime": null
            },
            "performance": [
              {
                "billingIndex": 1,
                "artist": {
                  "identifier": [
                    {
                      "href": "http://api.songkick.com/api/3.0/artists/mbid:e45692e4-69f6-4493-888b-7ab89d21d0a4.json",
                      "mbid": "e45692e4-69f6-4493-888b-7ab89d21d0a4"
                    }
                  ],
                  "uri": "http://www.songkick.com/artists/176989-joe-nichols?utm_source=42541&utm_medium=partner",
                  "id": 176989,
                  "displayName": "Joe Nichols",
                  "imageUrl": "http://images.sk-static.com/images/media/profile_images/artists/176989/huge_avatar"
                },
                "billing": "headline",
                "id": 55706454,
                "displayName": "Joe Nichols"
              },
              {
                "billingIndex": 2,
                "artist": {
                  "identifier": [
                    {
                      "href": "http://api.songkick.com/api/3.0/artists/mbid:c16817df-0160-490d-a437-c128cbca9218.json",
                      "mbid": "c16817df-0160-490d-a437-c128cbca9218"
                    }
                  ],
                  "uri": "http://www.songkick.com/artists/4160206-florida-georgia-line?utm_source=42541&utm_medium=partner",
                  "id": 4160206,
                  "displayName": "Florida Georgia Line",
                  "imageUrl": "http://images.sk-static.com/images/media/profile_images/artists/4160206/huge_avatar"
                },
                "billing": "headline",
                "id": 55706459,
                "displayName": "Florida Georgia Line"
              },
              {
                "billingIndex": 3,
                "artist": {
                  "identifier": [
                    {
                      "href": "http://api.songkick.com/api/3.0/artists/mbid:48a6d065-1fda-4280-ae39-df1394d419cd.json",
                      "mbid": "48a6d065-1fda-4280-ae39-df1394d419cd"
                    }
                  ],
                  "uri": "http://www.songkick.com/artists/348762-lee-brice?utm_source=42541&utm_medium=partner",
                  "id": 348762,
                  "displayName": "Lee Brice",
                  "imageUrl": "http://images.sk-static.com/images/media/profile_images/artists/348762/huge_avatar"
                },
                "billing": "headline",
                "id": 55706464,
                "displayName": "Lee Brice"
              },
              {
                "billingIndex": 4,
                "artist": {
                  "identifier": [
                    {
                      "href": "http://api.songkick.com/api/3.0/artists/mbid:d0134923-5506-4768-b8d0-6eb318005707.json",
                      "mbid": "d0134923-5506-4768-b8d0-6eb318005707"
                    }
                  ],
                  "uri": "http://www.songkick.com/artists/230481-granger-smith?utm_source=42541&utm_medium=partner",
                  "id": 230481,
                  "displayName": "Granger Smith",
                  "imageUrl": "http://images.sk-static.com/images/media/profile_images/artists/230481/huge_avatar"
                },
                "billing": "headline",
                "id": 55706469,
                "displayName": "Granger Smith"
              },
              {
                "billingIndex": 5,
                "artist": {
                  "identifier": [
                    {
                      "href": "http://api.songkick.com/api/3.0/artists/mbid:d0e6b927-bb1c-43f1-9c88-e3e4a131c042.json",
                      "mbid": "d0e6b927-bb1c-43f1-9c88-e3e4a131c042"
                    }
                  ],
                  "uri": "http://www.songkick.com/artists/1574625-chris-lane?utm_source=42541&utm_medium=partner",
                  "id": 1574625,
                  "displayName": "Chris Lane",
                  "imageUrl": "http://images.sk-static.com/images/media/profile_images/artists/1574625/huge_avatar"
                },
                "billing": "headline",
                "id": 55706474,
                "displayName": "Chris Lane"
              }
            ],
            "venue": {
              "metroArea": {
                "uri": "http://www.songkick.com/metro_areas/9776-us-miami?utm_source=42541&utm_medium=partner",
                "id": 9776,
                "state": {
                  "displayName": "FL"
                },
                "country": {
                  "displayName": "US"
                },
                "displayName": "Miami"
              },
              "lat": 26.0149546,
              "lng": -80.3152406,
              "uri": "http://www.songkick.com/venues/13671-cb-smith-park?utm_source=42541&utm_medium=partner",
              "id": 13671,
              "displayName": "C.B. Smith Park"
            },
            "location": {
              "city": "Pembroke Pines, FL, US",
              "lat": 26.0149546,
              "lng": -80.3152406
            },
            "uri": "http://www.songkick.com/concerts/28687174-joe-nichols-at-cb-smith-park?utm_source=42541&utm_medium=partner",
            "id": 28687174,
            "displayName": "Joe Nichols, Florida Georgia Line, Lee Brice, Granger Smith, and 1 more… at C.B. Smith Park (January 29, 2017)"
          },
          {
            "type": "Concert",
            "venue": {
              "lng": -80.19658,
              "uri": "http://www.songkick.com/venues/3134264-wynwood-yard?utm_source=42541&utm_medium=partner",
              "id": 3134264,
              "metroArea": {
                "uri": "http://www.songkick.com/metro_areas/9776-us-miami?utm_source=42541&utm_medium=partner",
                "country": {
                  "displayName": "US"
                },
                "id": 9776,
                "state": {
                  "displayName": "FL"
                },
                "displayName": "Miami"
              },
              "lat": 25.803629,
              "displayName": "The Wynwood Yard"
            },
            "status": "ok",
            "performance": [
              {
                "artist": {
                  "identifier": [
                    {
                      "href": "http://api.songkick.com/api/3.0/artists/mbid:cf3c580b-503c-437d-9897-cd21f057fe58.json",
                      "mbid": "cf3c580b-503c-437d-9897-cd21f057fe58"
                    }
                  ],
                  "uri": "http://www.songkick.com/artists/221437-predator-dub-assassins?utm_source=42541&utm_medium=partner",
                  "id": 221437,
                  "displayName": "Predator Dub Assassins",
                  "imageUrl": "http://images.sk-static.com/images/media/profile_images/artists/221437/huge_avatar"
                },
                "billing": "headline",
                "id": 55852409,
                "billingIndex": 1,
                "displayName": "Predator Dub Assassins"
              }
            ],
            "popularity": 0.000072,
            "start": {
              "time": "17:00:00",
              "date": "2017-01-29",
              "datetime": "2017-01-29T17:00:00-0500"
            },
            "ageRestriction": null,
            "location": {
              "lng": -80.19658,
              "city": "Miami, FL, US",
              "lat": 25.803629
            },
            "uri": "http://www.songkick.com/concerts/28773079-predator-dub-assassins-at-wynwood-yard?utm_source=42541&utm_medium=partner",
            "id": 28773079,
            "displayName": "Predator Dub Assassins at The Wynwood Yard (January 29, 2017)"
          },
          {
            "type": "Concert",
            "performance": [
              {
                "billing": "headline",
                "displayName": "Damaged Goods",
                "billingIndex": 1,
                "artist": {
                  "displayName": "Damaged Goods",
                  "uri": "http://www.songkick.com/artists/329561-damaged-goods?utm_source=42541&utm_medium=partner",
                  "id": 329561,
                  "identifier": [
                    {
                      "href": "http://api.songkick.com/api/3.0/artists/mbid:3d7e8e8a-cb76-40d9-a18d-2e01ebb36bb6.json",
                      "mbid": "3d7e8e8a-cb76-40d9-a18d-2e01ebb36bb6"
                    }
                  ],
                  "imageUrl": "http://images.sk-static.com/images/media/profile_images/artists/329561/huge_avatar"
                },
                "id": 55968604
              }
            ],
            "status": "ok",
            "displayName": "Damaged Goods at E11even Miami (January 29, 2017)",
            "start": {
              "time": "10:00:00",
              "datetime": "2017-01-29T10:00:00-0500",
              "date": "2017-01-29"
            },
            "ageRestriction": null,
            "location": {
              "lat": 25.7847879,
              "lng": -80.1933997,
              "city": "Miami, FL, US"
            },
            "venue": {
              "lat": 25.7847879,
              "lng": -80.1933997,
              "displayName": "E11even Miami",
              "uri": "http://www.songkick.com/venues/2589333-e11even-miami?utm_source=42541&utm_medium=partner",
              "metroArea": {
                "displayName": "Miami",
                "country": {
                  "displayName": "US"
                },
                "uri": "http://www.songkick.com/metro_areas/9776-us-miami?utm_source=42541&utm_medium=partner",
                "id": 9776,
                "state": {
                  "displayName": "FL"
                }
              },
              "id": 2589333
            },
            "popularity": 0.000369,
            "uri": "http://www.songkick.com/concerts/28839524-damaged-goods-at-e11even-miami?utm_source=42541&utm_medium=partner",
            "id": 28839524
          },
          {
            "type": "Concert",
            "performance": [
              {
                "billing": "headline",
                "displayName": "Bonefish Johnny",
                "billingIndex": 1,
                "artist": {
                  "displayName": "Bonefish Johnny",
                  "uri": "http://www.songkick.com/artists/4149021-bonefish-johnny?utm_source=42541&utm_medium=partner",
                  "id": 4149021,
                  "identifier": [],
                  "imageUrl": "http://images.sk-static.com/images/media/profile_images/artists/4149021/huge_avatar"
                },
                "id": 56173854
              }
            ],
            "status": "ok",
            "displayName": "Bonefish Johnny at Unknown venue (January 29, 2017)",
            "start": {
              "time": "21:00:00",
              "datetime": "2017-01-29T21:00:00-0500",
              "date": "2017-01-29"
            },
            "ageRestriction": null,
            "location": {
              "lat": 26.0196241,
              "lng": -80.223766,
              "city": "West Hollywood, FL, US"
            },
            "venue": {
              "lat": 26.0196241,
              "lng": -80.223766,
              "displayName": "Unknown venue",
              "uri": null,
              "metroArea": {
                "displayName": "Miami",
                "country": {
                  "displayName": "US"
                },
                "uri": "http://www.songkick.com/metro_areas/9776-us-miami?utm_source=42541&utm_medium=partner",
                "id": 9776,
                "state": {
                  "displayName": "FL"
                }
              },
              "id": null
            },
            "popularity": 0.000003,
            "uri": "http://www.songkick.com/concerts/28954059-bonefish-johnny-at-unknown-venue?utm_source=42541&utm_medium=partner",
            "id": 28954059
          },
          {
            "type": "Concert",
            "performance": [
              {
                "billing": "headline",
                "displayName": "Puma & Harry",
                "billingIndex": 1,
                "artist": {
                  "displayName": "Puma & Harry",
                  "uri": "http://www.songkick.com/artists/8882514-puma-and-harry?utm_source=42541&utm_medium=partner",
                  "id": 8882514,
                  "identifier": [],
                  "imageUrl": "http://images.sk-static.com/images/media/profile_images/artists/8882514/huge_avatar"
                },
                "id": 56176394
              }
            ],
            "status": "ok",
            "displayName": "Puma & Harry at Electric Pickle (January 29, 2017)",
            "start": {
              "time": "18:00:00",
              "datetime": "2017-01-29T18:00:00-0500",
              "date": "2017-01-29"
            },
            "ageRestriction": null,
            "location": {
              "lat": 25.8035582,
              "lng": -80.1952986,
              "city": "Miami, FL, US"
            },
            "venue": {
              "lat": 25.8035582,
              "lng": -80.1952986,
              "displayName": "Electric Pickle",
              "uri": "http://www.songkick.com/venues/1262111-electric-pickle?utm_source=42541&utm_medium=partner",
              "metroArea": {
                "displayName": "Miami",
                "country": {
                  "displayName": "US"
                },
                "uri": "http://www.songkick.com/metro_areas/9776-us-miami?utm_source=42541&utm_medium=partner",
                "id": 9776,
                "state": {
                  "displayName": "FL"
                }
              },
              "id": 1262111
            },
            "popularity": 0,
            "uri": "http://www.songkick.com/concerts/28955534-puma-and-harry-at-electric-pickle?utm_source=42541&utm_medium=partner",
            "id": 28955534
          },
          {
            "type": "Concert",
            "performance": [
              {
                "billing": "headline",
                "displayName": "Electric Kif",
                "billingIndex": 1,
                "artist": {
                  "displayName": "Electric Kif",
                  "uri": "http://www.songkick.com/artists/4743933-electric-kif?utm_source=42541&utm_medium=partner",
                  "id": 4743933,
                  "identifier": [],
                  "imageUrl": "http://images.sk-static.com/images/media/profile_images/artists/4743933/huge_avatar"
                },
                "id": 56248314
              }
            ],
            "status": "ok",
            "displayName": "Electric Kif at Ball & Chain (January 29, 2017)",
            "start": {
              "time": "16:00:00",
              "datetime": "2017-01-29T16:00:00-0500",
              "date": "2017-01-29"
            },
            "ageRestriction": null,
            "location": {
              "lat": 25.7658649,
              "lng": -80.2197635,
              "city": "Miami, FL, US"
            },
            "venue": {
              "lat": 25.7658649,
              "lng": -80.2197635,
              "displayName": "Ball & Chain",
              "uri": "http://www.songkick.com/venues/2760953-ball-and-chain?utm_source=42541&utm_medium=partner",
              "metroArea": {
                "displayName": "Miami",
                "country": {
                  "displayName": "US"
                },
                "uri": "http://www.songkick.com/metro_areas/9776-us-miami?utm_source=42541&utm_medium=partner",
                "id": 9776,
                "state": {
                  "displayName": "FL"
                }
              },
              "id": 2760953
            },
            "popularity": 0.000027,
            "uri": "http://www.songkick.com/concerts/28995374-electric-kif-at-ball-and-chain?utm_source=42541&utm_medium=partner",
            "id": 28995374
          },
          {
            "type": "Concert",
            "performance": [
              {
                "billing": "headline",
                "displayName": "Robbie Rivera",
                "billingIndex": 1,
                "artist": {
                  "displayName": "Robbie Rivera",
                  "uri": "http://www.songkick.com/artists/410858-robbie-rivera?utm_source=42541&utm_medium=partner",
                  "id": 410858,
                  "identifier": [
                    {
                      "href": "http://api.songkick.com/api/3.0/artists/mbid:d884fcb3-7471-48bc-9730-645b5833bf43.json",
                      "mbid": "d884fcb3-7471-48bc-9730-645b5833bf43"
                    }
                  ],
                  "imageUrl": "http://images.sk-static.com/images/media/profile_images/artists/410858/huge_avatar"
                },
                "id": 56405464
              }
            ],
            "status": "ok",
            "displayName": "Robbie Rivera at The River Yacht Club (January 29, 2017)",
            "start": {
              "time": "19:00:00",
              "datetime": "2017-01-29T19:00:00-0500",
              "date": "2017-01-29"
            },
            "ageRestriction": null,
            "location": {
              "lat": 25.7693923,
              "lng": -80.1989203,
              "city": "Miami, FL, US"
            },
            "venue": {
              "lat": 25.7693923,
              "lng": -80.1989203,
              "displayName": "The River Yacht Club",
              "uri": "http://www.songkick.com/venues/3364574-river-yacht-club?utm_source=42541&utm_medium=partner",
              "metroArea": {
                "displayName": "Miami",
                "country": {
                  "displayName": "US"
                },
                "uri": "http://www.songkick.com/metro_areas/9776-us-miami?utm_source=42541&utm_medium=partner",
                "id": 9776,
                "state": {
                  "displayName": "FL"
                }
              },
              "id": 3364574
            },
            "popularity": 0.014002,
            "uri": "http://www.songkick.com/concerts/29082864-robbie-rivera-at-river-yacht-club?utm_source=42541&utm_medium=partner",
            "id": 29082864
          },
          {
            "type": "Concert",
            "performance": [
              {
                "billing": "headline",
                "displayName": "DJ AFFECT",
                "billingIndex": 1,
                "artist": {
                  "displayName": "DJ AFFECT",
                  "uri": "http://www.songkick.com/artists/1474379-dj-affect?utm_source=42541&utm_medium=partner",
                  "id": 1474379,
                  "identifier": [],
                  "imageUrl": "http://images.sk-static.com/images/media/profile_images/artists/1474379/huge_avatar"
                },
                "id": 55968504
              }
            ],
            "status": "ok",
            "displayName": "DJ AFFECT at E11even Miami (January 30, 2017)",
            "start": {
              "time": "10:00:00",
              "datetime": "2017-01-30T10:00:00-0500",
              "date": "2017-01-30"
            },
            "ageRestriction": null,
            "location": {
              "lat": 25.7847879,
              "lng": -80.1933997,
              "city": "Miami, FL, US"
            },
            "venue": {
              "lat": 25.7847879,
              "lng": -80.1933997,
              "displayName": "E11even Miami",
              "uri": "http://www.songkick.com/venues/2589333-e11even-miami?utm_source=42541&utm_medium=partner",
              "metroArea": {
                "displayName": "Miami",
                "country": {
                  "displayName": "US"
                },
                "uri": "http://www.songkick.com/metro_areas/9776-us-miami?utm_source=42541&utm_medium=partner",
                "id": 9776,
                "state": {
                  "displayName": "FL"
                }
              },
              "id": 2589333
            },
            "popularity": 0.000008,
            "uri": "http://www.songkick.com/concerts/28839439-dj-affect-at-e11even-miami?utm_source=42541&utm_medium=partner",
            "id": 28839439
          },
          {
            "type": "Concert",
            "performance": [
              {
                "billing": "headline",
                "displayName": "The Swamp Rats",
                "billingIndex": 1,
                "artist": {
                  "displayName": "The Swamp Rats",
                  "uri": "http://www.songkick.com/artists/2094537-swamp-rats?utm_source=42541&utm_medium=partner",
                  "id": 2094537,
                  "identifier": [
                    {
                      "href": "http://api.songkick.com/api/3.0/artists/mbid:7d255906-7bea-44b7-b8d2-a4ae34609297.json",
                      "mbid": "7d255906-7bea-44b7-b8d2-a4ae34609297"
                    }
                  ],
                  "imageUrl": "http://images.sk-static.com/images/media/profile_images/artists/2094537/huge_avatar"
                },
                "id": 56045559
              },
              {
                "billing": "headline",
                "displayName": "Alex Culbreth",
                "billingIndex": 2,
                "artist": {
                  "displayName": "Alex Culbreth",
                  "uri": "http://www.songkick.com/artists/4560218-alex-culbreth?utm_source=42541&utm_medium=partner",
                  "id": 4560218,
                  "identifier": [],
                  "imageUrl": "http://images.sk-static.com/images/media/profile_images/artists/4560218/huge_avatar"
                },
                "id": 56045564
              }
            ],
            "status": "ok",
            "displayName": "The Swamp Rats and Alex Culbreth at Churchill's Pub (January 31, 2017)",
            "start": {
              "time": null,
              "datetime": null,
              "date": "2017-01-31"
            },
            "ageRestriction": null,
            "location": {
              "lat": 25.826174,
              "lng": -80.191811,
              "city": "Miami, FL, US"
            },
            "venue": {
              "lat": 25.826174,
              "lng": -80.191811,
              "displayName": "Churchill's Pub",
              "uri": "http://www.songkick.com/venues/13682-churchills-pub?utm_source=42541&utm_medium=partner",
              "metroArea": {
                "displayName": "Miami",
                "country": {
                  "displayName": "US"
                },
                "uri": "http://www.songkick.com/metro_areas/9776-us-miami?utm_source=42541&utm_medium=partner",
                "id": 9776,
                "state": {
                  "displayName": "FL"
                }
              },
              "id": 13682
            },
            "popularity": 0.000235,
            "uri": "http://www.songkick.com/concerts/28881619-swamp-rats-at-churchills-pub?utm_source=42541&utm_medium=partner",
            "id": 28881619
          },
          {
            "type": "Concert",
            "performance": [
              {
                "billing": "headline",
                "displayName": "Electric Kif",
                "billingIndex": 1,
                "artist": {
                  "displayName": "Electric Kif",
                  "uri": "http://www.songkick.com/artists/4743933-electric-kif?utm_source=42541&utm_medium=partner",
                  "id": 4743933,
                  "identifier": [],
                  "imageUrl": "http://images.sk-static.com/images/media/profile_images/artists/4743933/huge_avatar"
                },
                "id": 56248329
              }
            ],
            "status": "ok",
            "displayName": "Electric Kif at Jada Cole's (January 31, 2017)",
            "start": {
              "time": null,
              "datetime": null,
              "date": "2017-01-31"
            },
            "ageRestriction": null,
            "location": {
              "lat": 25.7503679,
              "lng": -80.2402848,
              "city": "Miami, FL, US"
            },
            "venue": {
              "lat": 25.7503679,
              "lng": -80.2402848,
              "displayName": "Jada Cole's",
              "uri": "http://www.songkick.com/venues/2389709-jada-coles?utm_source=42541&utm_medium=partner",
              "metroArea": {
                "displayName": "Miami",
                "country": {
                  "displayName": "US"
                },
                "uri": "http://www.songkick.com/metro_areas/9776-us-miami?utm_source=42541&utm_medium=partner",
                "id": 9776,
                "state": {
                  "displayName": "FL"
                }
              },
              "id": 2389709
            },
            "popularity": 0.000027,
            "uri": "http://www.songkick.com/concerts/28995389-electric-kif-at-jada-coles?utm_source=42541&utm_medium=partner",
            "id": 28995389
          },
          {
            "type": "Concert",
            "performance": [
              {
                "billing": "headline",
                "displayName": "Iron Lyon",
                "billingIndex": 1,
                "artist": {
                  "displayName": "Iron Lyon",
                  "uri": "http://www.songkick.com/artists/2555221-iron-lyon?utm_source=42541&utm_medium=partner",
                  "id": 2555221,
                  "identifier": [
                    {
                      "href": "http://api.songkick.com/api/3.0/artists/mbid:b7118cd4-3058-41b6-8765-2130bb31621c.json",
                      "mbid": "b7118cd4-3058-41b6-8765-2130bb31621c"
                    }
                  ],
                  "imageUrl": "http://images.sk-static.com/images/media/profile_images/artists/2555221/huge_avatar"
                },
                "id": 56424109
              }
            ],
            "status": "ok",
            "displayName": "Iron Lyon at E11even Miami (January 31, 2017)",
            "start": {
              "time": "10:00:00",
              "datetime": "2017-01-31T10:00:00-0500",
              "date": "2017-01-31"
            },
            "ageRestriction": null,
            "location": {
              "lat": 25.7847879,
              "lng": -80.1933997,
              "city": "Miami, FL, US"
            },
            "venue": {
              "lat": 25.7847879,
              "lng": -80.1933997,
              "displayName": "E11even Miami",
              "uri": "http://www.songkick.com/venues/2589333-e11even-miami?utm_source=42541&utm_medium=partner",
              "metroArea": {
                "displayName": "Miami",
                "country": {
                  "displayName": "US"
                },
                "uri": "http://www.songkick.com/metro_areas/9776-us-miami?utm_source=42541&utm_medium=partner",
                "id": 9776,
                "state": {
                  "displayName": "FL"
                }
              },
              "id": 2589333
            },
            "popularity": 0.000091,
            "uri": "http://www.songkick.com/concerts/29094054-iron-lyon-at-e11even-miami?utm_source=42541&utm_medium=partner",
            "id": 29094054
          },
          {
            "type": "Concert",
            "venue": {
              "lng": -80.1223054,
              "uri": "http://www.songkick.com/venues/2565329-liv?utm_source=42541&utm_medium=partner",
              "id": 2565329,
              "metroArea": {
                "uri": "http://www.songkick.com/metro_areas/9776-us-miami?utm_source=42541&utm_medium=partner",
                "country": {
                  "displayName": "US"
                },
                "id": 9776,
                "state": {
                  "displayName": "FL"
                },
                "displayName": "Miami"
              },
              "lat": 25.8179734,
              "displayName": "L.i.v."
            },
            "status": "ok",
            "performance": [
              {
                "artist": {
                  "identifier": [
                    {
                      "href": "http://api.songkick.com/api/3.0/artists/mbid:cef964b5-6f27-4a79-ac78-26b9e05c44c8.json",
                      "mbid": "cef964b5-6f27-4a79-ac78-26b9e05c44c8"
                    }
                  ],
                  "uri": "http://www.songkick.com/artists/3254241-wax-motif?utm_source=42541&utm_medium=partner",
                  "id": 3254241,
                  "displayName": "Wax Motif",
                  "imageUrl": "http://images.sk-static.com/images/media/profile_images/artists/3254241/huge_avatar"
                },
                "billing": "headline",
                "id": 55690604,
                "billingIndex": 1,
                "displayName": "Wax Motif"
              },
              {
                "artist": {
                  "identifier": [
                    {
                      "href": "http://api.songkick.com/api/3.0/artists/mbid:015c7544-cffe-4f5f-a679-b63070a03fe3.json",
                      "mbid": "015c7544-cffe-4f5f-a679-b63070a03fe3"
                    }
                  ],
                  "uri": "http://www.songkick.com/artists/4488133-wuki?utm_source=42541&utm_medium=partner",
                  "id": 4488133,
                  "displayName": "Wuki",
                  "imageUrl": "http://images.sk-static.com/images/media/profile_images/artists/4488133/huge_avatar"
                },
                "billing": "headline",
                "id": 55782304,
                "billingIndex": 2,
                "displayName": "Wuki"
              },
              {
                "artist": {
                  "identifier": [],
                  "uri": "http://www.songkick.com/artists/4250556-mike-deuce?utm_source=42541&utm_medium=partner",
                  "id": 4250556,
                  "displayName": "Mike Deuce",
                  "imageUrl": "http://images.sk-static.com/images/media/profile_images/artists/4250556/huge_avatar"
                },
                "billing": "support",
                "id": 55782309,
                "billingIndex": 3,
                "displayName": "Mike Deuce"
              },
              {
                "artist": {
                  "identifier": [],
                  "uri": "http://www.songkick.com/artists/7439644-dj-ruen?utm_source=42541&utm_medium=partner",
                  "id": 7439644,
                  "displayName": "DJ Ruen",
                  "imageUrl": "http://images.sk-static.com/images/media/profile_images/artists/7439644/huge_avatar"
                },
                "billing": "support",
                "id": 55782314,
                "billingIndex": 4,
                "displayName": "DJ Ruen"
              }
            ],
            "popularity": 0.002385,
            "start": {
              "time": "23:00:00",
              "date": "2017-02-01",
              "datetime": "2017-02-01T23:00:00-0500"
            },
            "ageRestriction": null,
            "location": {
              "lng": -80.1223054,
              "city": "Miami, FL, US",
              "lat": 25.8179734
            },
            "uri": "http://www.songkick.com/concerts/28678344-wax-motif-at-liv?utm_source=42541&utm_medium=partner",
            "id": 28678344,
            "displayName": "Wax Motif and Wuki with Mike Deuce and DJ Ruen at L.i.v. (February 1, 2017)"
          },
          {
            "type": "Concert",
            "performance": [
              {
                "billing": "headline",
                "displayName": "Wax Motif",
                "billingIndex": 1,
                "artist": {
                  "displayName": "Wax Motif",
                  "uri": "http://www.songkick.com/artists/3254241-wax-motif?utm_source=42541&utm_medium=partner",
                  "id": 3254241,
                  "identifier": [
                    {
                      "href": "http://api.songkick.com/api/3.0/artists/mbid:cef964b5-6f27-4a79-ac78-26b9e05c44c8.json",
                      "mbid": "cef964b5-6f27-4a79-ac78-26b9e05c44c8"
                    }
                  ],
                  "imageUrl": "http://images.sk-static.com/images/media/profile_images/artists/3254241/huge_avatar"
                },
                "id": 56068719
              },
              {
                "billing": "headline",
                "displayName": "Wuki",
                "billingIndex": 2,
                "artist": {
                  "displayName": "Wuki",
                  "uri": "http://www.songkick.com/artists/4488133-wuki?utm_source=42541&utm_medium=partner",
                  "id": 4488133,
                  "identifier": [
                    {
                      "href": "http://api.songkick.com/api/3.0/artists/mbid:015c7544-cffe-4f5f-a679-b63070a03fe3.json",
                      "mbid": "015c7544-cffe-4f5f-a679-b63070a03fe3"
                    }
                  ],
                  "imageUrl": "http://images.sk-static.com/images/media/profile_images/artists/4488133/huge_avatar"
                },
                "id": 56068724
              }
            ],
            "status": "ok",
            "displayName": "Wax Motif and Wuki at LIV Nightclub, Fontainebleau (February 1, 2017)",
            "start": {
              "time": "10:00:00",
              "datetime": "2017-02-01T10:00:00-0500",
              "date": "2017-02-01"
            },
            "ageRestriction": null,
            "location": {
              "lat": 25.8179722,
              "lng": -80.1223898,
              "city": "Miami Beach, FL, US"
            },
            "venue": {
              "lat": 25.8179722,
              "lng": -80.1223898,
              "displayName": "LIV Nightclub, Fontainebleau",
              "uri": "http://www.songkick.com/venues/233538-liv-nightclub-fontainebleau?utm_source=42541&utm_medium=partner",
              "metroArea": {
                "displayName": "Miami",
                "country": {
                  "displayName": "US"
                },
                "uri": "http://www.songkick.com/metro_areas/9776-us-miami?utm_source=42541&utm_medium=partner",
                "id": 9776,
                "state": {
                  "displayName": "FL"
                }
              },
              "id": 233538
            },
            "popularity": 0.002445,
            "uri": "http://www.songkick.com/concerts/28894959-wax-motif-at-liv-nightclub-fontainebleau?utm_source=42541&utm_medium=partner",
            "id": 28894959
          }
        ],
        "meta": {
          "total_pages": 5,
          "current_page": 1,
          "location": ""
        }
    };
  });
}
