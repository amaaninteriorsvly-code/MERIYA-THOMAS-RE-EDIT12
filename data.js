var APP_DATA = {
  "scenes": [
    {
      "id": "0-living-1",
      "name": "LIVING 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.3365071038314758
      },
      "linkHotspots": [
        {
          "yaw": 0.0819775464769279,
          "pitch": 0.6235372543254609,
          "rotation": 0,
          "target": "1-living-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-living-2",
      "name": "LIVING 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.42165560173548755,
          "pitch": 0.4226780247158093,
          "rotation": 0,
          "target": "3-dining-1"
        },
        {
          "yaw": -1.0561260129496954,
          "pitch": 0.7030538495932568,
          "rotation": 0,
          "target": "2-prayer-area"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-prayer-area",
      "name": "PRAYER AREA",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.3365071038314758
      },
      "linkHotspots": [
        {
          "yaw": 0.9361242015190445,
          "pitch": 0.49311870037571204,
          "rotation": 0.7853981633974483,
          "target": "3-dining-1"
        },
        {
          "yaw": -3.1309023711045327,
          "pitch": 1.032996765570818,
          "rotation": 5.497787143782138,
          "target": "1-living-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-dining-1",
      "name": "DINING 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.3365071038314758
      },
      "linkHotspots": [
        {
          "yaw": -0.022202158469283972,
          "pitch": 0.6117510419680503,
          "rotation": 0,
          "target": "4-dining-2"
        },
        {
          "yaw": 1.0252230499951072,
          "pitch": 0.5462317952524209,
          "rotation": 0,
          "target": "0-living-1"
        },
        {
          "yaw": 2.407612904887376,
          "pitch": 0.5979166428527272,
          "rotation": 0,
          "target": "5-wash-area"
        },
        {
          "yaw": -2.9109243176065682,
          "pitch": 0.4545268718777251,
          "rotation": 0,
          "target": "20-bedroom-2"
        },
        {
          "yaw": -2.33013717964414,
          "pitch": 0.7374307908037139,
          "rotation": 0.7853981633974483,
          "target": "6-family-living-1"
        },
        {
          "yaw": -0.6077055892668497,
          "pitch": 0.5585250008666129,
          "rotation": 5.497787143782138,
          "target": "8-courtyard-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-dining-2",
      "name": "DINING 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.3365071038314758
      },
      "linkHotspots": [
        {
          "yaw": 2.2919319065105395,
          "pitch": 1.0177419374457415,
          "rotation": 0,
          "target": "15-bedroom-1"
        },
        {
          "yaw": -2.159450352942617,
          "pitch": 0.542159483602429,
          "rotation": 6.283185307179586,
          "target": "25-bedroom-3"
        },
        {
          "yaw": -0.07093932579209117,
          "pitch": 0.22430495597849642,
          "rotation": 0,
          "target": "3-dining-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-wash-area",
      "name": "WASH AREA",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.3365071038314758
      },
      "linkHotspots": [
        {
          "yaw": 0.028859542861306764,
          "pitch": 0.48427513466951844,
          "rotation": 0,
          "target": "10-kitchen-1"
        },
        {
          "yaw": -1.5326801820262368,
          "pitch": 0.37685063112774486,
          "rotation": 0,
          "target": "3-dining-1"
        },
        {
          "yaw": -0.992167097204149,
          "pitch": 0.36156866915884933,
          "rotation": 12.566370614359176,
          "target": "0-living-1"
        },
        {
          "yaw": -3.1129392309305857,
          "pitch": 0.7238960677244552,
          "rotation": 0,
          "target": "6-family-living-1"
        },
        {
          "yaw": 1.8045584485650954,
          "pitch": 0.7375051717111063,
          "rotation": 0,
          "target": "20-bedroom-2"
        },
        {
          "yaw": -1.924925377217507,
          "pitch": 0.32918540985861,
          "rotation": 4.71238898038469,
          "target": "8-courtyard-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-family-living-1",
      "name": "FAMILY LIVING 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.3365071038314758
      },
      "linkHotspots": [
        {
          "yaw": -0.03551433964490869,
          "pitch": 0.5889053570536582,
          "rotation": 0,
          "target": "7-family-living-2"
        },
        {
          "yaw": 1.4576729298396423,
          "pitch": 0.40556785913754645,
          "rotation": 0,
          "target": "3-dining-1"
        },
        {
          "yaw": -3.0672152015990317,
          "pitch": 0.6064343518430881,
          "rotation": 0,
          "target": "10-kitchen-1"
        },
        {
          "yaw": -2.18286369415328,
          "pitch": 0.8109581091058224,
          "rotation": 0,
          "target": "5-wash-area"
        },
        {
          "yaw": 1.9576169627714206,
          "pitch": 0.4330392240503915,
          "rotation": 7.0685834705770345,
          "target": "0-living-1"
        },
        {
          "yaw": 1.0732360061553692,
          "pitch": 0.3700261064821859,
          "rotation": 5.497787143782138,
          "target": "8-courtyard-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-family-living-2",
      "name": "FAMILY LIVING 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.3365071038314758
      },
      "linkHotspots": [
        {
          "yaw": 0.15854014162226449,
          "pitch": 0.29985232700852293,
          "rotation": 0,
          "target": "5-wash-area"
        },
        {
          "yaw": -0.5876616517011115,
          "pitch": 0.2687002396709879,
          "rotation": 4.71238898038469,
          "target": "3-dining-1"
        },
        {
          "yaw": 0.3706418724023077,
          "pitch": 0.41696232914340925,
          "rotation": 1.5707963267948966,
          "target": "20-bedroom-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-courtyard-1",
      "name": "COURTYARD 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.3365071038314758
      },
      "linkHotspots": [
        {
          "yaw": 0.06209640592986432,
          "pitch": 0.5944152197544099,
          "rotation": 0,
          "target": "9-courtyard-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-courtyard-2",
      "name": "COURTYARD 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.3365071038314758
      },
      "linkHotspots": [
        {
          "yaw": -1.3027625555702151,
          "pitch": 0.6242505176937332,
          "rotation": 0,
          "target": "3-dining-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "10-kitchen-1",
      "name": "KITCHEN 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.3365071038314758
      },
      "linkHotspots": [
        {
          "yaw": -0.03773200343466954,
          "pitch": 0.5098677746484981,
          "rotation": 0,
          "target": "11-kitchen-2"
        },
        {
          "yaw": 2.024872324360003,
          "pitch": 1.4368204776004774,
          "rotation": 0,
          "target": "3-dining-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "11-kitchen-2",
      "name": "KITCHEN 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": -0.004105641305685026,
        "pitch": 0.006897957695578327,
        "fov": 1.3365071038314758
      },
      "linkHotspots": [
        {
          "yaw": 0.05440780179343285,
          "pitch": 0.7019437173525009,
          "rotation": 0,
          "target": "12-kitchen-3"
        },
        {
          "yaw": -1.139089809648656,
          "pitch": 0.7679518757453003,
          "rotation": 0,
          "target": "10-kitchen-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "12-kitchen-3",
      "name": "KITCHEN 3",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.3365071038314758
      },
      "linkHotspots": [
        {
          "yaw": 0.47219875636134034,
          "pitch": 0.4415207570779991,
          "rotation": 0,
          "target": "13-work-area-1"
        },
        {
          "yaw": -0.0819773392594989,
          "pitch": 0.6043167995001806,
          "rotation": 0,
          "target": "11-kitchen-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "13-work-area-1",
      "name": "WORK AREA 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.3365071038314758
      },
      "linkHotspots": [
        {
          "yaw": 0.0841826102123786,
          "pitch": 0.6364534165707383,
          "rotation": 0,
          "target": "14-work-area-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "14-work-area-2",
      "name": "WORK AREA 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.3365071038314758
      },
      "linkHotspots": [
        {
          "yaw": -1.4240698927655409,
          "pitch": 0.6963819870951582,
          "rotation": 0,
          "target": "11-kitchen-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "15-bedroom-1",
      "name": "BEDROOM 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.0056855075111866
      },
      "linkHotspots": [
        {
          "yaw": -0.5383502953906429,
          "pitch": 0.40528467444729444,
          "rotation": 0,
          "target": "16-bedroom-12"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "16-bedroom-12",
      "name": "BEDROOM 1.2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.3365071038314758
      },
      "linkHotspots": [
        {
          "yaw": -0.5539443012244227,
          "pitch": 0.5398018380358351,
          "rotation": 6.283185307179586,
          "target": "17-bedroom-13"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "17-bedroom-13",
      "name": "BEDROOM 1.3",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.4232636590038101,
          "pitch": 0.6599489866209538,
          "rotation": 0,
          "target": "3-dining-1"
        },
        {
          "yaw": -0.20790677574158245,
          "pitch": 0.5433737927015052,
          "rotation": 4.71238898038469,
          "target": "18-toilet-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "18-toilet-1",
      "name": "TOILET 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.3365071038314758
      },
      "linkHotspots": [
        {
          "yaw": -1.3355532824584877,
          "pitch": 0.9694575868513997,
          "rotation": 0,
          "target": "19-toilet-12"
        },
        {
          "yaw": -2.174547011430107,
          "pitch": 1.3432329480251894,
          "rotation": 4.71238898038469,
          "target": "17-bedroom-13"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "19-toilet-12",
      "name": "TOILET 1.2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.5257415134268246,
          "pitch": 1.1954808871106533,
          "rotation": 0,
          "target": "18-toilet-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "20-bedroom-2",
      "name": "BEDROOM 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": -0.12409022647744017,
        "pitch": -0.00340140362138186,
        "fov": 1.1501679088852763
      },
      "linkHotspots": [
        {
          "yaw": 0.5771937642141385,
          "pitch": 0.37627230705653325,
          "rotation": 0,
          "target": "21-bedroom-22"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "21-bedroom-22",
      "name": "BEDROOM 2.2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.3365071038314758
      },
      "linkHotspots": [
        {
          "yaw": -0.34924693343143964,
          "pitch": 0.5487239665897903,
          "rotation": 0,
          "target": "22-bedroom-23"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "22-bedroom-23",
      "name": "BEDROOM 2.3",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.796761148833891,
          "pitch": 0.9926488905024264,
          "rotation": 5.497787143782138,
          "target": "3-dining-1"
        },
        {
          "yaw": 0.2238209095579009,
          "pitch": 0.9216582929881696,
          "rotation": 1.5707963267948966,
          "target": "23-toilet-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "23-toilet-2",
      "name": "TOILET 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.3126003349820525,
          "pitch": 1.1440968324025178,
          "rotation": 4.71238898038469,
          "target": "22-bedroom-23"
        },
        {
          "yaw": 1.524244603234986,
          "pitch": 0.9409568055739861,
          "rotation": 7.0685834705770345,
          "target": "24-toilet-22"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "24-toilet-22",
      "name": "TOILET 2.2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.388230357331004,
          "pitch": 1.1667936782176902,
          "rotation": 0,
          "target": "23-toilet-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "25-bedroom-3",
      "name": "BEDROOM 3",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.3363734918092707
      },
      "linkHotspots": [
        {
          "yaw": 0.43993205186773565,
          "pitch": 0.5154215088536205,
          "rotation": 0,
          "target": "26-bedroom-32"
        },
        {
          "yaw": -2.4303190340083773,
          "pitch": 0.37784465827324354,
          "rotation": 0,
          "target": "3-dining-1"
        },
        {
          "yaw": -1.901761268805343,
          "pitch": 0.6801882225993836,
          "rotation": 1.5707963267948966,
          "target": "27-toilet-3"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "26-bedroom-32",
      "name": "BEDROOM 3.2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.1027398436102511
      },
      "linkHotspots": [
        {
          "yaw": 0.29238173281594015,
          "pitch": 0.47702345923503664,
          "rotation": 0,
          "target": "27-toilet-3"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "27-toilet-3",
      "name": "TOILET 3",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.0263851372646826,
          "pitch": 1.1880663485234901,
          "rotation": 10.995574287564278,
          "target": "25-bedroom-3"
        },
        {
          "yaw": 1.2723890723985853,
          "pitch": 0.9729927700789744,
          "rotation": 0.7853981633974483,
          "target": "28-toilet-32"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "28-toilet-32",
      "name": "TOILET 3.2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.3365071038314758
      },
      "linkHotspots": [
        {
          "yaw": -1.5622307316676753,
          "pitch": 1.1702506629440066,
          "rotation": 0,
          "target": "27-toilet-3"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "MERIYA THOMAS RE-EDIT12",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
