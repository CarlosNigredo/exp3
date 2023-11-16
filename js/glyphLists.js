const settings = {
    totalReversals: 14,
    reversalsSample: 10
}

const glyphLists = [
    {
        completeSet: ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','0','1','2','4','5','6','7','8','9'],
        widthA: ['B','D','H','M','N','O','Q','U'],
        widthB: ['E','G','K','R','Z','6','8','9'],
        widthC: ['A','I','S','V','W','X','2','3','5'],
        widthD: ['C','F','J','L','P','T','Y','1','4','7'],
        slantA: ['H','M','N'],
        slantB: ['B','D','E','F','I','K','L','P','R','T','1','4'],
        slantC: ['O','Q','U','0','8'],
        slantD: ['A','V','W','X','Y'],
        slantE: ['C','G','J','S','Z','2','3','5','6','7','9'],
        width: [
            ['widthA','widthA'],//facil
            ['widthA','widthB'],//facil
            ['widthA','widthC'],//regular
            ['widthB','widthC'],//regular
            ['widthA','widthD'],//dificil
            ['widthB','widthD']//dificil
        ],
        slant: [
            ['slantA','slantB'],//facil
            ['slantA','slantD'],//regular
            ['slantA','slantE'],//dificil
            ['slantB','slantC'],//facil
            ['slantB','slantD'],//regular
            ['slantB','slantE']//dificil
        ]
    },
    {
        altoFacil: ['widthA','widthA'],
        altoDificil: ['widthA','widthD'],
        medioFacil: ['widthA','widthA'],
        medioDificil: ['widthA','widthD'],
        bajoFacil: ['widthA','widthA'],
        bajoDificil: ['widthA','widthD']
    },
    {
        altoFacil: ['slantA','slantB'],
        altoDificil: ['slantA','slantE'],
        medioFacil: ['slantA','slantB'],
        medioDificil: ['slantA','slantE'],
        bajoFacil: ['slantA','slantB'],
        bajoDificil: ['slantA','slantE']
    }
]

const dataExp = {
    peso: {
        nombre: 'peso',
        pregunta: 'peso',
        atributocss: 'wght',
        index: 0,
        string: "'wdth' 575, 'slnt' 0",
        max_value: 150
    },
    ancho: {
        nombre: 'ancho',
        pregunta: 'ancho',
        atributocss: 'wdth',
        index: 1,
        string: "'wght' 95, 'slnt' 0",
        max_value: 935
    },
    inclinacion: {
        nombre: 'inclinacion',
        pregunta: 'inclinación',
        atributocss: 'slnt',
        index: 2,
        string: "'wdth' 575, 'wght' 95",
        max_value: 25
    },
}

const staircaseData = [
    // PUNTO BAJO
    {
        peso: {
            start: 40,
            standard: 70,
            step_max: 7,
            step_med: 3,
            step_min: 2
        },
        ancho: {
            start: 430,
            standard: 540,
            step_max: 31,
            step_med: 15,
            step_min: 7
        },
        inclinacion: {
            start: 1,
            standard: 6,
            step_max: 4,
            step_med: 1.5,
            step_min: .75
        }
    },
    // PUNTO MEDIO
    {
        peso: {
            start: 60,
            standard: 100,
            step_max: 9,
            step_med: 4,
            step_min: 2
        },
        ancho: {
            start: 540,
            standard: 660,
            step_max: 47,
            step_med: 23,
            step_min: 11
        },
        inclinacion: {
            start: 2,
            standard: 12,
            step_max: 4,
            step_med: 1.5,
            step_min: .75
        }
    },
    // PUNTO ALTO
    {
        peso: {
            start: 80,
            standard: 130,
            step_max: 13,
            step_med: 7,
            step_min: 3
        },
        ancho: {
            start: 660,
            standard: 780,
            step_max: 47,
            step_med: 23,
            step_min: 11
        },
        inclinacion: {
            start: 8,
            standard: 18,
            step_max: 4,
            step_med: 1.5,
            step_min: .75
        }
    }
]