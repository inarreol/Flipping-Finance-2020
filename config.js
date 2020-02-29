var config = {
    style: 'mapbox://styles/inarreol/ck75p3ncw10r71ip85pq46jfx',
    accessToken: 'pk.eyJ1IjoiaW5hcnJlb2wiLCJhIjoiY2p1ZnB2MWh5MGd1NDQ0cGozN29kYmR3NSJ9.14s63N3V8r2xcufGCZrnqw',
    showMarkers: false,
    theme: 'dark',
    alignment: 'left',
    title: 'Opportunity Zones in Bloomington',
    subtitle: 'Flipping Finance 2020',
    byline: 'By Ingrid Arreola & Roger Lee',
    footer: 'Source: Source: State of Indiana, Bloomington Data',
    chapters: [
        {
            id: 'slug-style-id',
            title: 'Opportunity Zones',
            image: 'btown.jpg',
            description: 'Opportunity Zones are capable of positive social impact. While challenges exist, there are novel solutions to help bridge gaps between investors and the Bloomington community. The lack of communication between investors and community can cause difficulty with navigating economic development programs, this can be challenging. There is disconnect in the ability for investors’ to have a positive “social impact". Opportunity Zone investors have clear federal incentives, as well as state & local.',
            location: {
                center: [-86.59049, 39.16653],
                zoom: 11.79,
                pitch: 0.00,
                bearing: 0.00
            },
            onChapterEnter: [
                 {
                     layer: 'opportunity',
                     opacity: 1
                 }
            ],
            onChapterExit: [
                 {
                     layer: 'opportunity',
                     opacity: 0
                 }
            ]
        },
        {
            id: 'identifier-2',
            title: 'The TIF Social Impact',
            image: '',
            description: 'This is the first part of the map that shows the intersection of TIF and OZ.',
            location: {
                center: [-86.54725, 39.16859],
                zoom: 14.14,
                pitch: 0.00,
                bearing: 0.00
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'identifier-3',
            title: 'Benefits of TIF in the OZ',
            image: '',
            description: 'This is the second part of the map that shows intersection of TIF and OZ. ',
            location: {
                center: [-86.54808, 39.16449],
                zoom: 14.26,
                pitch: 60.00,
                bearing: 7.20
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'identifier-4',
            title: 'TIF and the OZ',
            image: '',
            description: 'This is the third part of the map that shows intersection of TIF and OZ.',
            location: {
                center: [-86.54830, 39.15683],
                zoom: 14.11,
                pitch: 49.00,
                bearing: 0.00
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'identifier-5',
            title: 'Community Benefits from TIF and OZ',
            image: '',
            description: 'This is the fourth part of the map that shows intersection of TIF and OZ.',
            location: {
                center: [-86.55073, 39.14456],
                zoom: 14.41,
                pitch: 60.00,
                bearing: -76.80
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'identifier-6',
            title: 'CRED',
            image: '',
            description: 'This is the CRED part of the map.',
            location: {
                center: [-86.53791, 39.16865],
                zoom: 15.29,
                pitch: 44.00,
                bearing: 0.00
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'identifier-7',
            title: 'UEZ',
            image: '',
            description: 'This is the UEZ part of the map.',
            location: {
                center: [-86.55454, 39.15552],
                zoom: 12.80,
                pitch: 0.00,
                bearing: 0.00
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'identifier-8',
            title: 'Certified Technology Park',
            image: '',
            description: 'This is the fifth part of the map that shows intersection of TIF and OZ within the Certified Technology Park.',
            location: {
                center: [-86.55046, 39.17362],
                zoom: 14.40,
                pitch: 60,
                bearing: 67.20
            },
            onChapterEnter: [],
            onChapterExit: []
        }
    ]
};