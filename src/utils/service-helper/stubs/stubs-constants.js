// @flow
import FIRST_IMAGE_FOR_GET_PRODUCT_CARDS from './assets-for-stubs/get-product-cards/first-img-for-get-product-cards.jpg';
import SECOND_IMAGE_FOR_GET_PRODUCT_CARDS from './assets-for-stubs/get-product-cards/second-img-for-get-product-cards.jpg';
import THIRD_IMAGE_FOR_GET_PRODUCT_CARDS from './assets-for-stubs/get-product-cards/third-img-for-get-product-cards.jpg';

import CORIAN_IMAGE from './assets-for-stubs/manufacturers-logos/corian.png';
import HANEX_IMAGE from './assets-for-stubs/manufacturers-logos/hanex.png';
import HIMACS_IMAGE from './assets-for-stubs/manufacturers-logos/hi-macs.png';
import KERROCK_IMAGE from './assets-for-stubs/manufacturers-logos/kerrock.png';
import MONTELLI_IMAGE from './assets-for-stubs/manufacturers-logos/montelli.png';
import STARON_IMAGE from './assets-for-stubs/manufacturers-logos/staron.png';
import TRISTONE_IMAGE from './assets-for-stubs/manufacturers-logos/tristone.png';

import CORTEZ_IMAGE from './assets-for-stubs/few-textures/cortez.jpg';
import GOLD_STRIKE_IMAGE from './assets-for-stubs/few-textures/goldstrike.jpg';
import GRAY_ONIX_IMAGE from './assets-for-stubs/few-textures/gray_onix.jpg';
import MONZA_IMAGE from './assets-for-stubs/few-textures/monza.jpg';
import TERNI_IMAGE from './assets-for-stubs/few-textures/terni.jpg';

import CLASSIC_FOUR_HUNDRED_IMAGE from './assets-for-stubs/washings/classic-400.jpg';
import GL_FOUR_HUNDRED_IMAGE from './assets-for-stubs/washings/gl-400.jpg';
import CLASSIC_FOUR_HUNDRED_FIFTY_IMAGE from './assets-for-stubs/washings/classic-450.jpg';
import GL_FOUR_HUNDRED_FIFTY_IMAGE from './assets-for-stubs/washings/gl-450.jpg';
import CLASSIC_FIVE_HUNDRED_IMAGE from './assets-for-stubs/washings/classic-500.jpg';
import GL_FIVE_HUNDRED_IMAGE from './assets-for-stubs/washings/gl-500.jpg';
import CLASSIC_FOUR_HUNDRED_TWENTY_IMAGE from './assets-for-stubs/washings/classic-420.jpg';
import GL_FOUR_HUNDRED_TWENTY_IMAGE from './assets-for-stubs/washings/gl-420.jpg';
import CIRCLE_THREE_HUNDRED_EIGHTY_IMAGE from './assets-for-stubs/washings/circle-380.jpg';
import CIRCLE_FOUR_HUNDRED_IMAGE from './assets-for-stubs/washings/circle-400.jpg';
import CIRCLE_FOUR_HUNDRED_FIFTY_IMAGE from './assets-for-stubs/washings/circle-450.jpg';
import ELLIPSE_FIVE_HUNDRED_IMAGE from './assets-for-stubs/washings/ellipse-500.jpg';
import BOWL_TWO_HUNDRED_FOURTY_EIGHT_IMAGE from './assets-for-stubs/washings/bowl-248.jpg';
import BOWL_THREE_HUNDRED_SEVENTY_IMAGE from './assets-for-stubs/washings/bowl-370.jpg';
import BOWL_FOUR_HUNDRED_FOURTY_IMAGE from './assets-for-stubs/washings/bowl-420.jpg';
import BOWL_FOUR_HUNDRED_SEVENTY_EIGHT_IMAGE from './assets-for-stubs/washings/bowl-478.jpg';
import BOWL_FIVE_HUNDRED_TWENTY_EIGHT_IMAGE from './assets-for-stubs/washings/bowl-528.jpg';
import BOWL_FIVE_HUNDRED_EIGHT_IMAGE from './assets-for-stubs/washings/bowl-508.jpg';
import MINILAKE from './assets-for-stubs/washings/minilake.jpg';
import CLASSIC_THREE_HUNDRED_V_IMAGE from './assets-for-stubs/washings/classic-300v.jpg';
import GL_THREE_HUNDRED_V_IMAGE from './assets-for-stubs/washings/gl-300v.jpg';
import CLASSIC_FOUR_HUNDRED_V_IMAGE from './assets-for-stubs/washings/classic-400v.jpg';
import GL_FOUR_HUNDRED_V_IMAGE from './assets-for-stubs/washings/gl-400v.jpg';
import CLASSIC_FOUR_HUNDRED_TWENTY_V_IMAGE from './assets-for-stubs/washings/classic-420v.jpg';
import GL_FOUR_HUNDRED_TWENTY_V_IMAGE from './assets-for-stubs/washings/gl-420v.jpg';
import CLASSIC_ONE_HUNDRED_SEVENTY_V_IMAGE from './assets-for-stubs/washings/classic-170v.jpg';

import ROUNDED_CORNER_IMAGE from './assets-for-stubs/edge-processing/round-corner.jpg';
import DOUBLE_ROUNDED_CORNER_IMAGE from './assets-for-stubs/edge-processing/double-round-corner.jpg';
import ROUNDED_HEM_IMAGE from './assets-for-stubs/edge-processing/rounded-hem.jpg';
import ROUNDED_CORNER_AND_STEP_IMAGE from './assets-for-stubs/edge-processing/round-corner-and-step.jpg';
import HEM_AND_EDGE_BOTTOM_IMAGE from './assets-for-stubs/edge-processing/hem-end-edge-bottom.jpg';
import ANTIPOUR_IMAGE from './assets-for-stubs/edge-processing/anti-pour.jpg';
import INLAY_IMAGE from './assets-for-stubs/edge-processing/inlay.jpg';
import FIGURED_CHAMFER_IMAGE from './assets-for-stubs/edge-processing/figured-chamfer.jpg';

import RADIUS_WALL_BOARD_IMAGE from './assets-for-stubs/wall-board-processing/radius-wall-board.jpg';
import LINE_WALL_BOARD_IMAGE from './assets-for-stubs/wall-board-processing/line-wall-board.jpg';

export const ProductCards = [
  {
    id: '1',
    image: FIRST_IMAGE_FOR_GET_PRODUCT_CARDS,
    title: 'Мойка из камня от компании BlackStone',
    price: '30 000 ₽',
    description: 'Компания Green stone предлагает всем желающим купить стильную и современную барную стойку. Для изготовления такой продукции мы используем только проверенное сырье и высокопрочный искусственный камень.',
    category: 'countertops',
    photos: [
      {
        id: '1',
        photo: FIRST_IMAGE_FOR_GET_PRODUCT_CARDS,
      },
      {
        id: '2',
        photo: SECOND_IMAGE_FOR_GET_PRODUCT_CARDS,
      },
      {
        id: '3',
        photo: THIRD_IMAGE_FOR_GET_PRODUCT_CARDS,
      },
      {
        id: '4',
        photo: FIRST_IMAGE_FOR_GET_PRODUCT_CARDS,
      },
    ],
  },
  {
    id: '2',
    image: SECOND_IMAGE_FOR_GET_PRODUCT_CARDS,
    title: 'Мойка из камня от компании BlackStone',
    price: '30 000 ₽',
    description: 'Компания Green stone предлагает всем желающим купить стильную и современную барную стойку. Для изготовления такой продукции мы используем только проверенное сырье и высокопрочный искусственный камень.',
    category: 'window-sills',
    photos: [
      {
        id: '1',
        photo: FIRST_IMAGE_FOR_GET_PRODUCT_CARDS,
      },
      {
        id: '2',
        photo: SECOND_IMAGE_FOR_GET_PRODUCT_CARDS,
      },
      {
        id: '3',
        photo: THIRD_IMAGE_FOR_GET_PRODUCT_CARDS,
      },
      {
        id: '4',
        photo: FIRST_IMAGE_FOR_GET_PRODUCT_CARDS,
      },
    ],
  },
  {
    id: '3',
    image: THIRD_IMAGE_FOR_GET_PRODUCT_CARDS,
    title: 'Мойка из камня от компании BlackStone',
    price: '30 000 ₽',
    description: 'Компания Green stone предлагает всем желающим купить стильную и современную барную стойку. Для изготовления такой продукции мы используем только проверенное сырье и высокопрочный искусственный камень.',
    category: 'sinks',
    photos: [
      {
        id: '1',
        photo: FIRST_IMAGE_FOR_GET_PRODUCT_CARDS,
      },
      {
        id: '2',
        photo: SECOND_IMAGE_FOR_GET_PRODUCT_CARDS,
      },
      {
        id: '3',
        photo: THIRD_IMAGE_FOR_GET_PRODUCT_CARDS,
      },
      {
        id: '4',
        photo: FIRST_IMAGE_FOR_GET_PRODUCT_CARDS,
      },
    ],
  },
  {
    id: '4',
    image: FIRST_IMAGE_FOR_GET_PRODUCT_CARDS,
    title: 'Мойка из камня от компании BlackStone',
    price: '30 000 ₽',
    description: 'Компания Green stone предлагает всем желающим купить стильную и современную барную стойку. Для изготовления такой продукции мы используем только проверенное сырье и высокопрочный искусственный камень.',
    category: 'bar-counters',
    photos: [
      {
        id: '1',
        photo: FIRST_IMAGE_FOR_GET_PRODUCT_CARDS,
      },
      {
        id: '2',
        photo: SECOND_IMAGE_FOR_GET_PRODUCT_CARDS,
      },
      {
        id: '3',
        photo: THIRD_IMAGE_FOR_GET_PRODUCT_CARDS,
      },
      {
        id: '4',
        photo: FIRST_IMAGE_FOR_GET_PRODUCT_CARDS,
      },
    ],
  },
  {
    id: '5',
    image: SECOND_IMAGE_FOR_GET_PRODUCT_CARDS,
    title: 'Мойка из камня от компании BlackStone',
    price: '30 000 ₽',
    description: 'Компания Green stone предлагает всем желающим купить стильную и современную барную стойку. Для изготовления такой продукции мы используем только проверенное сырье и высокопрочный искусственный камень.',
    category: 'tables',
    photos: [
      {
        id: '1',
        photo: FIRST_IMAGE_FOR_GET_PRODUCT_CARDS,
      },
      {
        id: '2',
        photo: SECOND_IMAGE_FOR_GET_PRODUCT_CARDS,
      },
      {
        id: '3',
        photo: THIRD_IMAGE_FOR_GET_PRODUCT_CARDS,
      },
      {
        id: '4',
        photo: FIRST_IMAGE_FOR_GET_PRODUCT_CARDS,
      },
    ],
  },
  {
    id: '6',
    image: THIRD_IMAGE_FOR_GET_PRODUCT_CARDS,
    title: 'Мойка из камня от компании BlackStone',
    price: '30 000 ₽',
    description: 'Компания Green stone предлагает всем желающим купить стильную и современную барную стойку. Для изготовления такой продукции мы используем только проверенное сырье и высокопрочный искусственный камень.',
    category: 'tables',
    photos: [
      {
        id: '1',
        photo: FIRST_IMAGE_FOR_GET_PRODUCT_CARDS,
      },
      {
        id: '2',
        photo: SECOND_IMAGE_FOR_GET_PRODUCT_CARDS,
      },
      {
        id: '3',
        photo: THIRD_IMAGE_FOR_GET_PRODUCT_CARDS,
      },
      {
        id: '4',
        photo: FIRST_IMAGE_FOR_GET_PRODUCT_CARDS,
      },
    ],
  },
  {
    id: '7',
    image: THIRD_IMAGE_FOR_GET_PRODUCT_CARDS,
    title: 'Мойка из камня от компании BlackStone',
    price: '30 000 ₽',
    description: 'Компания Green stone предлагает всем желающим купить стильную и современную барную стойку. Для изготовления такой продукции мы используем только проверенное сырье и высокопрочный искусственный камень.',
    category: 'tables',
    photos: [
      {
        id: '1',
        photo: FIRST_IMAGE_FOR_GET_PRODUCT_CARDS,
      },
      {
        id: '2',
        photo: SECOND_IMAGE_FOR_GET_PRODUCT_CARDS,
      },
      {
        id: '3',
        photo: THIRD_IMAGE_FOR_GET_PRODUCT_CARDS,
      },
      {
        id: '4',
        photo: FIRST_IMAGE_FOR_GET_PRODUCT_CARDS,
      },
    ],
  },
  {
    id: '8',
    image: FIRST_IMAGE_FOR_GET_PRODUCT_CARDS,
    title: 'Мойка из камня от компании BlackStone',
    price: '30 000 ₽',
    description: 'Компания Green stone предлагает всем желающим купить стильную и современную барную стойку. Для изготовления такой продукции мы используем только проверенное сырье и высокопрочный искусственный камень.',
    category: 'sinks',
    photos: [
      {
        id: '1',
        photo: FIRST_IMAGE_FOR_GET_PRODUCT_CARDS,
      },
      {
        id: '2',
        photo: SECOND_IMAGE_FOR_GET_PRODUCT_CARDS,
      },
      {
        id: '3',
        photo: THIRD_IMAGE_FOR_GET_PRODUCT_CARDS,
      },
      {
        id: '4',
        photo: FIRST_IMAGE_FOR_GET_PRODUCT_CARDS,
      },
    ],
  },
];

export const Comments = [
  {
    id: '1',
    autor: 'Наташа Лютая',
    text: 'Привет всем ! Сегодня расскажу о своём опыте перманентного макияжа бровей. О моих бровях: от природы темные, средней густоты, посреди брови имеется большой шрам, на котором волоски не растут. Обычно я красила их сама в домашних условиях, либо каждое утро подводила карандашом.',
  },
  {
    id: '2',
    autor: 'Мария Лютая',
    text: 'Привет всем ! Сегодня расскажу о своём опыте перманентного макияжа бровей. О моих бровях: от природы темные, средней густоты, посреди брови имеется большой шрам, на котором волоски не растут. Обычно я красила их сама в домашних условиях, либо каждое утро подводила карандашом.',
  },
  {
    id: '3',
    autor: 'Людмила Лютая',
    text: 'Привет всем ! Сегодня расскажу о своём опыте перманентного макияжа бровей. О моих бровях: от природы темные, средней густоты, посреди брови имеется большой шрам, на котором волоски не растут. Обычно я красила их сама в домашних условиях, либо каждое утро подводила карандашом.',
  },
  {
    id: '4',
    autor: 'Алла Лютая',
    text: 'Привет всем ! Сегодня расскажу о своём опыте перманентного макияжа бровей. О моих бровях: от природы темные, средней густоты, посреди брови имеется большой шрам, на котором волоски не растут. Обычно я красила их сама в домашних условиях, либо каждое утро подводила карандашом.',
  },
  {
    id: '5',
    autor: 'Жанна Лютая',
    text: 'Привет всем ! Сегодня расскажу о своём опыте перманентного макияжа бровей. О моих бровях: от природы темные, средней густоты, посреди брови имеется большой шрам, на котором волоски не растут. Обычно я красила их сама в домашних условиях, либо каждое утро подводила карандашом.',
  },
];

export const PriceList = {
  servicesPriceList: {
    cornerProcessing: '700',
    installation: '5000',
    wallBoards: [
      {
        id: '1',
        price: '1200',
        title: 'Радиусный бортик',
        image: RADIUS_WALL_BOARD_IMAGE,
      },
      {
        id: '2',
        price: '300',
        title: ' Прямой бортик',
        image: LINE_WALL_BOARD_IMAGE,
      },
    ],
    edgeProcessing: [
      {
        id: '1',
        price: '0',
        title: 'Скругление верхнего угла',
        image: ROUNDED_CORNER_IMAGE,
      },
      {
        id: '2',
        price: '800',
        title: 'Скругление верхнего и нижнего угла',
        image: DOUBLE_ROUNDED_CORNER_IMAGE,
      },
      {
        id: '3',
        price: '1500',
        title: 'Округлая кромка',
        image: ROUNDED_HEM_IMAGE,
      },
      {
        id: '4',
        price: '500',
        title: 'Скругление верхнего угла и ступенька',
        image: ROUNDED_CORNER_AND_STEP_IMAGE,
      },
      {
        id: '5',
        price: '950',
        title: 'Подгиб торцевой крокми снизу',
        image: HEM_AND_EDGE_BOTTOM_IMAGE,
      },
      {
        id: '6',
        price: '1500',
        title: '"Антиперелив"',
        image: ANTIPOUR_IMAGE,
      },
      {
        id: '7',
        price: '2000',
        title: 'Инкрустация',
        image: INLAY_IMAGE,
      },
      {
        id: '8',
        price: '1000',
        title: 'Фигурная фаска',
        image: FIGURED_CHAMFER_IMAGE,
      },
    ],
    additionalServices: [
      {
        id: '1',
        price: '1000',
        title: 'Вырез под мойку',
        systemTitle: 'isNeedCutoutUnderTheSink',
      },
      {
        id: '2',
        price: '1000',
        title: 'Вырез под варочную панель',
        systemTitle: 'isNeedCutoutUnderTheHob',
      },
      {
        id: '3',
        price: '2000',
        title: 'Вклейка мойки под столешницу',
        systemTitle: 'isNeedGluingTheSinkUnderTheTabletop',
      },
      {
        id: '4',
        price: '2000',
        title: 'Проточки для стока воды комплект',
        systemTitle: 'isNeedGroovesForWaterDrainSet',
      },
      {
        id: '5',
        price: '3000',
        title: 'Прутья под горячее',
        systemTitle: 'isNeedHotRods',
      },
      {
        id: '6',
        price: '2500',
        title: 'Доставка в пределах МКАД + 50 км',
        systemTitle: 'isNeedDelivery',
        additionalOneKilometerPrice: '30',
      },
      {
        id: '7',
        price: '1500',
        title: 'Замер и изготовление шаблона в пределах МКАД + 50 км',
        systemTitle: 'isNeedMeasurement',
        additionalOneKilometerPrice: '30',
      },
    ],
  },
  bowlsPriceList: {
    mainBowls: [
      {
        id: '1',
        price: '8000',
        title: 'Мойка Classic 400',
        image: CLASSIC_FOUR_HUNDRED_IMAGE,
      },
      {
        id: '2',
        price: '8000',
        title: 'Мойка GL 400',
        image: GL_FOUR_HUNDRED_IMAGE,
      },
      {
        id: '3',
        price: '8000',
        title: 'Мойка Classic 450',
        image: CLASSIC_FOUR_HUNDRED_FIFTY_IMAGE,
      },
      {
        id: '4',
        price: '8000',
        title: 'Мойка GL 450',
        image: GL_FOUR_HUNDRED_FIFTY_IMAGE,
      },
      {
        id: '5',
        price: '8000',
        title: 'Мойка Classic 500',
        image: CLASSIC_FIVE_HUNDRED_IMAGE,
      },
      {
        id: '6',
        price: '8000',
        title: 'Мойка GL 500',
        image: GL_FIVE_HUNDRED_IMAGE,
      },
      {
        id: '7',
        price: '8000',
        title: 'Мойка Classic 420',
        image: CLASSIC_FOUR_HUNDRED_TWENTY_IMAGE,
      },
      {
        id: '8',
        price: '8000',
        title: 'Мойка GL 420',
        image: GL_FOUR_HUNDRED_TWENTY_IMAGE,
      },
      {
        id: '9',
        price: '8000',
        title: 'Мойка Circle 380',
        image: CIRCLE_THREE_HUNDRED_EIGHTY_IMAGE,
      },
      {
        id: '10',
        price: '8000',
        title: 'Мойка Circle 400',
        image: CIRCLE_FOUR_HUNDRED_IMAGE,
      },
      {
        id: '11',
        price: '8000',
        title: 'Мойка Circle 450',
        image: CIRCLE_FOUR_HUNDRED_FIFTY_IMAGE,
      },
      {
        id: '12',
        price: '8000',
        title: 'Мойка Ellipse 500',
        image: ELLIPSE_FIVE_HUNDRED_IMAGE,
      },
      {
        id: '13',
        price: '8000',
        title: 'Раковина Bowl 248',
        image: BOWL_TWO_HUNDRED_FOURTY_EIGHT_IMAGE,
      },
      {
        id: '14',
        price: '8000',
        title: 'Раковина Bowl 370',
        image: BOWL_THREE_HUNDRED_SEVENTY_IMAGE,
      },
      {
        id: '15',
        price: '8000',
        title: 'Раковина Bowl 420',
        image: BOWL_FOUR_HUNDRED_FOURTY_IMAGE,
      },
      {
        id: '16',
        price: '8000',
        title: 'Раковина Bowl 478',
        image: BOWL_FOUR_HUNDRED_SEVENTY_EIGHT_IMAGE,
      },
      {
        id: '17',
        price: '8000',
        title: 'Раковина Bowl 528',
        image: BOWL_FIVE_HUNDRED_TWENTY_EIGHT_IMAGE,
      },
      {
        id: '18',
        price: '8000',
        title: 'Раковина Bowl 508',
        image: BOWL_FIVE_HUNDRED_EIGHT_IMAGE,
      },
      {
        id: '19',
        price: '8000',
        title: 'Раковина Minilake',
        image: MINILAKE,
      },
    ],
    additionalBowls: [
      {
        id: '1',
        price: '6000',
        title: 'Мойка Classic 300 C-V',
        image: CLASSIC_THREE_HUNDRED_V_IMAGE,
      },
      {
        id: '2',
        price: '6000',
        title: 'Мойка GL 300 C-V',
        image: GL_THREE_HUNDRED_V_IMAGE,
      },
      {
        id: '3',
        price: '6000',
        title: 'Мойка Classic 400 C-V',
        image: CLASSIC_FOUR_HUNDRED_V_IMAGE,
      },
      {
        id: '4',
        price: '6000',
        title: 'Мойка GL 400 C-V',
        image: GL_FOUR_HUNDRED_V_IMAGE,
      },
      {
        id: '5',
        price: '6000',
        title: 'Мойка Classic 420 C-V',
        image: CLASSIC_FOUR_HUNDRED_TWENTY_V_IMAGE,
      },
      {
        id: '6',
        price: '6000',
        title: 'Мойка GL 420 C-V',
        image: GL_FOUR_HUNDRED_TWENTY_V_IMAGE,
      },
      {
        id: '7',
        price: '6000',
        title: 'Мойка Classic 170 C-V',
        image: CLASSIC_ONE_HUNDRED_SEVENTY_V_IMAGE,
      },
    ],
  },
  manufacturersPriceList: [
    {
      id: '1',
      title: 'Hi-Macs',
      image: HIMACS_IMAGE,
      priceListValues: [
        {
          series: 'Solid',
          price: '12700',
        },
        {
          series: 'Sand&Perl/Lucent',
          price: '13500',
        },
        {
          series: 'Marmo',
          price: '22000',
        },
        {
          series: 'Galaxy',
          price: '24000',
        },
        {
          series: 'Quartz/Granite',
          price: '15000',
        },
        {
          series: 'Lucia',
          price: '16700',
        },
        {
          series: 'Volcanics',
          price: '22500',
        },
      ],
    },
    {
      id: '2',
      title: 'Kerrock',
      image: KERROCK_IMAGE,
      priceListValues: [
        {
          series: 'Lumino/Uni',
          price: '13000',
        },
        {
          series: 'Granite',
          price: '14100',
        },
        {
          series: 'Terraco',
          price: '15300',
        },
        {
          series: 'Luminaco/Marble',
          price: '18300',
        },
        {
          series: 'Luminaco S',
          price: '20500',
        },
      ],
    },
    {
      id: '3',
      title: 'Corian',
      image: CORIAN_IMAGE,
      priceListValues: [
        {
          series: 'Серия 1',
          price: '15500',
        },
        {
          series: 'Серия 2',
          price: '17500',
        },
        {
          series: 'Серия 3',
          price: '19300',
        },
        {
          series: 'Серия 4',
          price: '21000',
        },
      ],
    },
    {
      id: '4',
      title: 'Staron',
      image: STARON_IMAGE,
      priceListValues: [
        {
          series: 'Solid/Sanded',
          price: '13500',
        },
        {
          series: 'Aspen/Metallic',
          price: '14700',
        },
        {
          series: 'Pebble',
          price: '15200',
        },
        {
          series: 'Mosaic/Quarry',
          price: '20000',
        },
        {
          series: 'Tempest',
          price: '23000',
        },
      ],
    },
    {
      id: '5',
      title: 'Tristone',
      image: TRISTONE_IMAGE,
      priceListValues: [
        {
          series: 'Modern',
          price: '12000',
        },
        {
          series: 'Classical/Renaissance',
          price: '13000',
        },
        {
          series: 'Romantic',
          price: '14000',
        },
        {
          series: 'Baroque/Romanesque',
          price: '17000',
        },
        {
          series: 'Byzantine',
          price: '19600',
        },
        {
          series: 'Marble',
          price: '20600',
        },
      ],
    },
    {
      id: '6',
      title: 'Hanex',
      image: HANEX_IMAGE,
      priceListValues: [
        {
          series: 'Solo',
          price: '12500',
        },
        {
          series: 'Magic',
          price: '12800',
        },
        {
          series: 'Duo/Pearl',
          price: '13500',
        },
        {
          series: 'Trio/Cubic',
          price: '14500',
        },
        {
          series: 'Terapy',
          price: '14500',
        },
        {
          series: 'Galleria',
          price: '19500',
        },
        {
          series: 'Belassimo/Brionne',
          price: '21000',
        },
        {
          series: 'Glittering',
          price: '21000',
        },
        {
          series: 'Nativo',
          price: '25000',
        },
      ],
    },
    {
      id: '7',
      title: 'Montelli',
      image: MONTELLI_IMAGE,
      priceListValues: [
        {
          series: 'Группа А',
          price: '13000',
        },
        {
          series: 'Группа В',
          price: '15000',
        },
        {
          series: 'Группа С',
          price: '24000',
        },
      ],
    },
  ],
};

export const Textures = [
  {
    id: '1',
    title: 'Акриловый камень Hi-Macs',
    image: HIMACS_IMAGE,
    description: 'Искусственный камень для декора интерьера с повышенной твердостью, превосходящий по прочности мрамор, гранит, керамику и стекло. В основу состава входит акриловая смола. Может использоваться для реализации самых смелых дизайнерских решений при оформлении поверхностей.',
    subspecies: [
      {
        title: 'Solid',
        images: [
          {
            image: CORTEZ_IMAGE,
          },
          {
            image: GOLD_STRIKE_IMAGE,
          },
          {
            image: GRAY_ONIX_IMAGE,
          },
          {
            image: MONZA_IMAGE,
          },
          {
            image: TERNI_IMAGE,
          },
          {
            image: CORTEZ_IMAGE,
          },
          {
            image: GOLD_STRIKE_IMAGE,
          },
          {
            image: GRAY_ONIX_IMAGE,
          },
          {
            image: MONZA_IMAGE,
          },
          {
            image: TERNI_IMAGE,
          },
        ],
      },
      {
        title: 'Sand&Perl',
        images: [
          {
            image: TERNI_IMAGE,
          },
          {
            image: GOLD_STRIKE_IMAGE,
          },
          {
            image: GRAY_ONIX_IMAGE,
          },
          {
            image: MONZA_IMAGE,
          },
          {
            image: CORTEZ_IMAGE,
          },
          {
            image: CORTEZ_IMAGE,
          },
          {
            image: GOLD_STRIKE_IMAGE,
          },
          {
            image: GRAY_ONIX_IMAGE,
          },
          {
            image: MONZA_IMAGE,
          },
          {
            image: TERNI_IMAGE,
          },
        ],
      },
      {
        title: 'Lucent',
        images: [
          {
            image: CORTEZ_IMAGE,
          },
          {
            image: GOLD_STRIKE_IMAGE,
          },
          {
            image: GRAY_ONIX_IMAGE,
          },
          {
            image: MONZA_IMAGE,
          },
          {
            image: TERNI_IMAGE,
          },
          {
            image: CORTEZ_IMAGE,
          },
          {
            image: GOLD_STRIKE_IMAGE,
          },
          {
            image: GRAY_ONIX_IMAGE,
          },
          {
            image: MONZA_IMAGE,
          },
          {
            image: TERNI_IMAGE,
          },
        ],
      },
      {
        title: 'Marmo',
        images: [
          {
            image: TERNI_IMAGE,
          },
          {
            image: GOLD_STRIKE_IMAGE,
          },
          {
            image: GRAY_ONIX_IMAGE,
          },
          {
            image: MONZA_IMAGE,
          },
          {
            image: CORTEZ_IMAGE,
          },
          {
            image: CORTEZ_IMAGE,
          },
          {
            image: GOLD_STRIKE_IMAGE,
          },
          {
            image: GRAY_ONIX_IMAGE,
          },
          {
            image: MONZA_IMAGE,
          },
          {
            image: TERNI_IMAGE,
          },
        ],
      },
      {
        title: 'Galaxy',
        images: [
          {
            image: CORTEZ_IMAGE,
          },
          {
            image: GOLD_STRIKE_IMAGE,
          },
          {
            image: GRAY_ONIX_IMAGE,
          },
          {
            image: MONZA_IMAGE,
          },
          {
            image: TERNI_IMAGE,
          },
          {
            image: CORTEZ_IMAGE,
          },
          {
            image: GOLD_STRIKE_IMAGE,
          },
          {
            image: GRAY_ONIX_IMAGE,
          },
          {
            image: MONZA_IMAGE,
          },
          {
            image: TERNI_IMAGE,
          },
        ],
      },
      {
        title: 'Granite',
        images: [
          {
            image: TERNI_IMAGE,
          },
          {
            image: GOLD_STRIKE_IMAGE,
          },
          {
            image: GRAY_ONIX_IMAGE,
          },
          {
            image: MONZA_IMAGE,
          },
          {
            image: CORTEZ_IMAGE,
          },
          {
            image: CORTEZ_IMAGE,
          },
          {
            image: GOLD_STRIKE_IMAGE,
          },
          {
            image: GRAY_ONIX_IMAGE,
          },
          {
            image: MONZA_IMAGE,
          },
          {
            image: TERNI_IMAGE,
          },
        ],
      },
      {
        title: 'Quartz',
        images: [
          {
            image: CORTEZ_IMAGE,
          },
          {
            image: GOLD_STRIKE_IMAGE,
          },
          {
            image: GRAY_ONIX_IMAGE,
          },
          {
            image: MONZA_IMAGE,
          },
          {
            image: TERNI_IMAGE,
          },
          {
            image: CORTEZ_IMAGE,
          },
          {
            image: GOLD_STRIKE_IMAGE,
          },
          {
            image: GRAY_ONIX_IMAGE,
          },
          {
            image: MONZA_IMAGE,
          },
          {
            image: TERNI_IMAGE,
          },
        ],
      },
      {
        title: 'Lucia',
        images: [
          {
            image: TERNI_IMAGE,
          },
          {
            image: GOLD_STRIKE_IMAGE,
          },
          {
            image: GRAY_ONIX_IMAGE,
          },
          {
            image: MONZA_IMAGE,
          },
          {
            image: CORTEZ_IMAGE,
          },
          {
            image: CORTEZ_IMAGE,
          },
          {
            image: GOLD_STRIKE_IMAGE,
          },
          {
            image: GRAY_ONIX_IMAGE,
          },
          {
            image: MONZA_IMAGE,
          },
          {
            image: TERNI_IMAGE,
          },
        ],
      },
      {
        title: 'Volcanics',
        images: [
          {
            image: CORTEZ_IMAGE,
          },
          {
            image: GOLD_STRIKE_IMAGE,
          },
          {
            image: GRAY_ONIX_IMAGE,
          },
          {
            image: MONZA_IMAGE,
          },
          {
            image: TERNI_IMAGE,
          },
          {
            image: CORTEZ_IMAGE,
          },
          {
            image: GOLD_STRIKE_IMAGE,
          },
          {
            image: GRAY_ONIX_IMAGE,
          },
          {
            image: MONZA_IMAGE,
          },
          {
            image: TERNI_IMAGE,
          },
        ],
      },
    ],
  },
  {
    id: '2',
    title: 'Акриловый камень Kerrock',
    image: KERROCK_IMAGE,
    description: 'Недорогой искусственный материал для декорирования с высокими эксплуатационными характеристиками на базе акрила. Идеальное соотношение цены и качества сделало его популярным в Европе. Нагрев до определенной температуры, можно придавать невероятные формы. Экологически чист и безопасен.',
    subspecies: [
      {
        title: 'Solid',
        images: [
          {
            image: CORTEZ_IMAGE,
          },
          {
            image: GOLD_STRIKE_IMAGE,
          },
          {
            image: GRAY_ONIX_IMAGE,
          },
          {
            image: MONZA_IMAGE,
          },
          {
            image: TERNI_IMAGE,
          },
          {
            image: CORTEZ_IMAGE,
          },
          {
            image: GOLD_STRIKE_IMAGE,
          },
          {
            image: GRAY_ONIX_IMAGE,
          },
          {
            image: MONZA_IMAGE,
          },
          {
            image: TERNI_IMAGE,
          },
        ],
      },
      {
        title: 'Sand&Perl',
        images: [
          {
            image: TERNI_IMAGE,
          },
          {
            image: GOLD_STRIKE_IMAGE,
          },
          {
            image: GRAY_ONIX_IMAGE,
          },
          {
            image: MONZA_IMAGE,
          },
          {
            image: CORTEZ_IMAGE,
          },
          {
            image: CORTEZ_IMAGE,
          },
          {
            image: GOLD_STRIKE_IMAGE,
          },
          {
            image: GRAY_ONIX_IMAGE,
          },
          {
            image: MONZA_IMAGE,
          },
          {
            image: TERNI_IMAGE,
          },
        ],
      },
      {
        title: 'Lucent',
        images: [
          {
            image: CORTEZ_IMAGE,
          },
          {
            image: GOLD_STRIKE_IMAGE,
          },
          {
            image: GRAY_ONIX_IMAGE,
          },
          {
            image: MONZA_IMAGE,
          },
          {
            image: TERNI_IMAGE,
          },
          {
            image: CORTEZ_IMAGE,
          },
          {
            image: GOLD_STRIKE_IMAGE,
          },
          {
            image: GRAY_ONIX_IMAGE,
          },
          {
            image: MONZA_IMAGE,
          },
          {
            image: TERNI_IMAGE,
          },
        ],
      },
      {
        title: 'Marmo',
        images: [
          {
            image: TERNI_IMAGE,
          },
          {
            image: GOLD_STRIKE_IMAGE,
          },
          {
            image: GRAY_ONIX_IMAGE,
          },
          {
            image: MONZA_IMAGE,
          },
          {
            image: CORTEZ_IMAGE,
          },
          {
            image: CORTEZ_IMAGE,
          },
          {
            image: GOLD_STRIKE_IMAGE,
          },
          {
            image: GRAY_ONIX_IMAGE,
          },
          {
            image: MONZA_IMAGE,
          },
          {
            image: TERNI_IMAGE,
          },
        ],
      },
      {
        title: 'Galaxy',
        images: [
          {
            image: CORTEZ_IMAGE,
          },
          {
            image: GOLD_STRIKE_IMAGE,
          },
          {
            image: GRAY_ONIX_IMAGE,
          },
          {
            image: MONZA_IMAGE,
          },
          {
            image: TERNI_IMAGE,
          },
          {
            image: CORTEZ_IMAGE,
          },
          {
            image: GOLD_STRIKE_IMAGE,
          },
          {
            image: GRAY_ONIX_IMAGE,
          },
          {
            image: MONZA_IMAGE,
          },
          {
            image: TERNI_IMAGE,
          },
        ],
      },
      {
        title: 'Granite',
        images: [
          {
            image: TERNI_IMAGE,
          },
          {
            image: GOLD_STRIKE_IMAGE,
          },
          {
            image: GRAY_ONIX_IMAGE,
          },
          {
            image: MONZA_IMAGE,
          },
          {
            image: CORTEZ_IMAGE,
          },
          {
            image: CORTEZ_IMAGE,
          },
          {
            image: GOLD_STRIKE_IMAGE,
          },
          {
            image: GRAY_ONIX_IMAGE,
          },
          {
            image: MONZA_IMAGE,
          },
          {
            image: TERNI_IMAGE,
          },
        ],
      },
      {
        title: 'Quartz',
        images: [
          {
            image: CORTEZ_IMAGE,
          },
          {
            image: GOLD_STRIKE_IMAGE,
          },
          {
            image: GRAY_ONIX_IMAGE,
          },
          {
            image: MONZA_IMAGE,
          },
          {
            image: TERNI_IMAGE,
          },
          {
            image: CORTEZ_IMAGE,
          },
          {
            image: GOLD_STRIKE_IMAGE,
          },
          {
            image: GRAY_ONIX_IMAGE,
          },
          {
            image: MONZA_IMAGE,
          },
          {
            image: TERNI_IMAGE,
          },
        ],
      },
      {
        title: 'Lucia',
        images: [
          {
            image: TERNI_IMAGE,
          },
          {
            image: GOLD_STRIKE_IMAGE,
          },
          {
            image: GRAY_ONIX_IMAGE,
          },
          {
            image: MONZA_IMAGE,
          },
          {
            image: CORTEZ_IMAGE,
          },
          {
            image: CORTEZ_IMAGE,
          },
          {
            image: GOLD_STRIKE_IMAGE,
          },
          {
            image: GRAY_ONIX_IMAGE,
          },
          {
            image: MONZA_IMAGE,
          },
          {
            image: TERNI_IMAGE,
          },
        ],
      },
      {
        title: 'Volcanics',
        images: [
          {
            image: CORTEZ_IMAGE,
          },
          {
            image: GOLD_STRIKE_IMAGE,
          },
          {
            image: GRAY_ONIX_IMAGE,
          },
          {
            image: MONZA_IMAGE,
          },
          {
            image: TERNI_IMAGE,
          },
          {
            image: CORTEZ_IMAGE,
          },
          {
            image: GOLD_STRIKE_IMAGE,
          },
          {
            image: GRAY_ONIX_IMAGE,
          },
          {
            image: MONZA_IMAGE,
          },
          {
            image: TERNI_IMAGE,
          },
        ],
      },
    ],
  },
  {
    id: '3',
    title: 'Акриловый камень Du Pont Corian',
    image: CORIAN_IMAGE,
    description: 'Искусственный современный материал для декора, наполнит интерьер яркими красками и подлинной изысканностью. Был специально разработан в лабораториях с учетом всех пожеланий потребителя. Обладает уникальной красотой и функциональностью. Экологически чист, легок в уходе, представлен в широкой цветовой палитре.',
    subspecies: [
      {
        title: 'Solid',
        images: [
          {
            image: CORTEZ_IMAGE,
          },
          {
            image: GOLD_STRIKE_IMAGE,
          },
          {
            image: GRAY_ONIX_IMAGE,
          },
          {
            image: MONZA_IMAGE,
          },
          {
            image: TERNI_IMAGE,
          },
          {
            image: CORTEZ_IMAGE,
          },
          {
            image: GOLD_STRIKE_IMAGE,
          },
          {
            image: GRAY_ONIX_IMAGE,
          },
          {
            image: MONZA_IMAGE,
          },
          {
            image: TERNI_IMAGE,
          },
        ],
      },
      {
        title: 'Sand&Perl',
        images: [
          {
            image: TERNI_IMAGE,
          },
          {
            image: GOLD_STRIKE_IMAGE,
          },
          {
            image: GRAY_ONIX_IMAGE,
          },
          {
            image: MONZA_IMAGE,
          },
          {
            image: CORTEZ_IMAGE,
          },
          {
            image: CORTEZ_IMAGE,
          },
          {
            image: GOLD_STRIKE_IMAGE,
          },
          {
            image: GRAY_ONIX_IMAGE,
          },
          {
            image: MONZA_IMAGE,
          },
          {
            image: TERNI_IMAGE,
          },
        ],
      },
      {
        title: 'Lucent',
        images: [
          {
            image: CORTEZ_IMAGE,
          },
          {
            image: GOLD_STRIKE_IMAGE,
          },
          {
            image: GRAY_ONIX_IMAGE,
          },
          {
            image: MONZA_IMAGE,
          },
          {
            image: TERNI_IMAGE,
          },
          {
            image: CORTEZ_IMAGE,
          },
          {
            image: GOLD_STRIKE_IMAGE,
          },
          {
            image: GRAY_ONIX_IMAGE,
          },
          {
            image: MONZA_IMAGE,
          },
          {
            image: TERNI_IMAGE,
          },
        ],
      },
      {
        title: 'Marmo',
        images: [
          {
            image: TERNI_IMAGE,
          },
          {
            image: GOLD_STRIKE_IMAGE,
          },
          {
            image: GRAY_ONIX_IMAGE,
          },
          {
            image: MONZA_IMAGE,
          },
          {
            image: CORTEZ_IMAGE,
          },
          {
            image: CORTEZ_IMAGE,
          },
          {
            image: GOLD_STRIKE_IMAGE,
          },
          {
            image: GRAY_ONIX_IMAGE,
          },
          {
            image: MONZA_IMAGE,
          },
          {
            image: TERNI_IMAGE,
          },
        ],
      },
      {
        title: 'Galaxy',
        images: [
          {
            image: CORTEZ_IMAGE,
          },
          {
            image: GOLD_STRIKE_IMAGE,
          },
          {
            image: GRAY_ONIX_IMAGE,
          },
          {
            image: MONZA_IMAGE,
          },
          {
            image: TERNI_IMAGE,
          },
          {
            image: CORTEZ_IMAGE,
          },
          {
            image: GOLD_STRIKE_IMAGE,
          },
          {
            image: GRAY_ONIX_IMAGE,
          },
          {
            image: MONZA_IMAGE,
          },
          {
            image: TERNI_IMAGE,
          },
        ],
      },
      {
        title: 'Granite',
        images: [
          {
            image: TERNI_IMAGE,
          },
          {
            image: GOLD_STRIKE_IMAGE,
          },
          {
            image: GRAY_ONIX_IMAGE,
          },
          {
            image: MONZA_IMAGE,
          },
          {
            image: CORTEZ_IMAGE,
          },
          {
            image: CORTEZ_IMAGE,
          },
          {
            image: GOLD_STRIKE_IMAGE,
          },
          {
            image: GRAY_ONIX_IMAGE,
          },
          {
            image: MONZA_IMAGE,
          },
          {
            image: TERNI_IMAGE,
          },
        ],
      },
      {
        title: 'Quartz',
        images: [
          {
            image: CORTEZ_IMAGE,
          },
          {
            image: GOLD_STRIKE_IMAGE,
          },
          {
            image: GRAY_ONIX_IMAGE,
          },
          {
            image: MONZA_IMAGE,
          },
          {
            image: TERNI_IMAGE,
          },
          {
            image: CORTEZ_IMAGE,
          },
          {
            image: GOLD_STRIKE_IMAGE,
          },
          {
            image: GRAY_ONIX_IMAGE,
          },
          {
            image: MONZA_IMAGE,
          },
          {
            image: TERNI_IMAGE,
          },
        ],
      },
      {
        title: 'Lucia',
        images: [
          {
            image: TERNI_IMAGE,
          },
          {
            image: GOLD_STRIKE_IMAGE,
          },
          {
            image: GRAY_ONIX_IMAGE,
          },
          {
            image: MONZA_IMAGE,
          },
          {
            image: CORTEZ_IMAGE,
          },
          {
            image: CORTEZ_IMAGE,
          },
          {
            image: GOLD_STRIKE_IMAGE,
          },
          {
            image: GRAY_ONIX_IMAGE,
          },
          {
            image: MONZA_IMAGE,
          },
          {
            image: TERNI_IMAGE,
          },
        ],
      },
      {
        title: 'Volcanics',
        images: [
          {
            image: CORTEZ_IMAGE,
          },
          {
            image: GOLD_STRIKE_IMAGE,
          },
          {
            image: GRAY_ONIX_IMAGE,
          },
          {
            image: MONZA_IMAGE,
          },
          {
            image: TERNI_IMAGE,
          },
          {
            image: CORTEZ_IMAGE,
          },
          {
            image: GOLD_STRIKE_IMAGE,
          },
          {
            image: GRAY_ONIX_IMAGE,
          },
          {
            image: MONZA_IMAGE,
          },
          {
            image: TERNI_IMAGE,
          },
        ],
      },
    ],
  },
  {
    id: '4',
    title: 'Акриловый камень Staron',
    image: STARON_IMAGE,
    description: 'Модный, красивый, экологически чистый искусственный материал для декорирования интерьера. Эстетически привлекательная поверхность подарит приятные тактильные ощущения за счет отсутствия трещин. Представлен в широкой цветовой палитре, позволит сформировать элегантный и презентабельный интерьер в любом помещении.',
    subspecies: [
      {
        title: 'Solid',
        images: [
          {
            image: CORTEZ_IMAGE,
          },
          {
            image: GOLD_STRIKE_IMAGE,
          },
          {
            image: GRAY_ONIX_IMAGE,
          },
          {
            image: MONZA_IMAGE,
          },
          {
            image: TERNI_IMAGE,
          },
          {
            image: CORTEZ_IMAGE,
          },
          {
            image: GOLD_STRIKE_IMAGE,
          },
          {
            image: GRAY_ONIX_IMAGE,
          },
          {
            image: MONZA_IMAGE,
          },
          {
            image: TERNI_IMAGE,
          },
        ],
      },
      {
        title: 'Sand&Perl',
        images: [
          {
            image: TERNI_IMAGE,
          },
          {
            image: GOLD_STRIKE_IMAGE,
          },
          {
            image: GRAY_ONIX_IMAGE,
          },
          {
            image: MONZA_IMAGE,
          },
          {
            image: CORTEZ_IMAGE,
          },
          {
            image: CORTEZ_IMAGE,
          },
          {
            image: GOLD_STRIKE_IMAGE,
          },
          {
            image: GRAY_ONIX_IMAGE,
          },
          {
            image: MONZA_IMAGE,
          },
          {
            image: TERNI_IMAGE,
          },
        ],
      },
      {
        title: 'Lucent',
        images: [
          {
            image: CORTEZ_IMAGE,
          },
          {
            image: GOLD_STRIKE_IMAGE,
          },
          {
            image: GRAY_ONIX_IMAGE,
          },
          {
            image: MONZA_IMAGE,
          },
          {
            image: TERNI_IMAGE,
          },
          {
            image: CORTEZ_IMAGE,
          },
          {
            image: GOLD_STRIKE_IMAGE,
          },
          {
            image: GRAY_ONIX_IMAGE,
          },
          {
            image: MONZA_IMAGE,
          },
          {
            image: TERNI_IMAGE,
          },
        ],
      },
      {
        title: 'Marmo',
        images: [
          {
            image: TERNI_IMAGE,
          },
          {
            image: GOLD_STRIKE_IMAGE,
          },
          {
            image: GRAY_ONIX_IMAGE,
          },
          {
            image: MONZA_IMAGE,
          },
          {
            image: CORTEZ_IMAGE,
          },
          {
            image: CORTEZ_IMAGE,
          },
          {
            image: GOLD_STRIKE_IMAGE,
          },
          {
            image: GRAY_ONIX_IMAGE,
          },
          {
            image: MONZA_IMAGE,
          },
          {
            image: TERNI_IMAGE,
          },
        ],
      },
      {
        title: 'Galaxy',
        images: [
          {
            image: CORTEZ_IMAGE,
          },
          {
            image: GOLD_STRIKE_IMAGE,
          },
          {
            image: GRAY_ONIX_IMAGE,
          },
          {
            image: MONZA_IMAGE,
          },
          {
            image: TERNI_IMAGE,
          },
          {
            image: CORTEZ_IMAGE,
          },
          {
            image: GOLD_STRIKE_IMAGE,
          },
          {
            image: GRAY_ONIX_IMAGE,
          },
          {
            image: MONZA_IMAGE,
          },
          {
            image: TERNI_IMAGE,
          },
        ],
      },
      {
        title: 'Granite',
        images: [
          {
            image: TERNI_IMAGE,
          },
          {
            image: GOLD_STRIKE_IMAGE,
          },
          {
            image: GRAY_ONIX_IMAGE,
          },
          {
            image: MONZA_IMAGE,
          },
          {
            image: CORTEZ_IMAGE,
          },
          {
            image: CORTEZ_IMAGE,
          },
          {
            image: GOLD_STRIKE_IMAGE,
          },
          {
            image: GRAY_ONIX_IMAGE,
          },
          {
            image: MONZA_IMAGE,
          },
          {
            image: TERNI_IMAGE,
          },
        ],
      },
      {
        title: 'Quartz',
        images: [
          {
            image: CORTEZ_IMAGE,
          },
          {
            image: GOLD_STRIKE_IMAGE,
          },
          {
            image: GRAY_ONIX_IMAGE,
          },
          {
            image: MONZA_IMAGE,
          },
          {
            image: TERNI_IMAGE,
          },
          {
            image: CORTEZ_IMAGE,
          },
          {
            image: GOLD_STRIKE_IMAGE,
          },
          {
            image: GRAY_ONIX_IMAGE,
          },
          {
            image: MONZA_IMAGE,
          },
          {
            image: TERNI_IMAGE,
          },
        ],
      },
      {
        title: 'Lucia',
        images: [
          {
            image: TERNI_IMAGE,
          },
          {
            image: GOLD_STRIKE_IMAGE,
          },
          {
            image: GRAY_ONIX_IMAGE,
          },
          {
            image: MONZA_IMAGE,
          },
          {
            image: CORTEZ_IMAGE,
          },
          {
            image: CORTEZ_IMAGE,
          },
          {
            image: GOLD_STRIKE_IMAGE,
          },
          {
            image: GRAY_ONIX_IMAGE,
          },
          {
            image: MONZA_IMAGE,
          },
          {
            image: TERNI_IMAGE,
          },
        ],
      },
      {
        title: 'Volcanics',
        images: [
          {
            image: CORTEZ_IMAGE,
          },
          {
            image: GOLD_STRIKE_IMAGE,
          },
          {
            image: GRAY_ONIX_IMAGE,
          },
          {
            image: MONZA_IMAGE,
          },
          {
            image: TERNI_IMAGE,
          },
          {
            image: CORTEZ_IMAGE,
          },
          {
            image: GOLD_STRIKE_IMAGE,
          },
          {
            image: GRAY_ONIX_IMAGE,
          },
          {
            image: MONZA_IMAGE,
          },
          {
            image: TERNI_IMAGE,
          },
        ],
      },
    ],
  },
  {
    id: '5',
    title: 'Акриловый камень Tristone',
    image: TRISTONE_IMAGE,
    description: 'Искусственный камень на акриловой основе разработан по новейшим современным технологиям. Высокие технические и эксплуатационные характеристики сделали его идеальным материалом для декора интерьера по соотношению цена-качество на просторах СНГ. Эстетически привлекателен, экологически безопасен, широкий выбор цветовой палитры.',
    subspecies: [
      {
        title: 'Solid',
        images: [
          {
            image: CORTEZ_IMAGE,
          },
          {
            image: GOLD_STRIKE_IMAGE,
          },
          {
            image: GRAY_ONIX_IMAGE,
          },
          {
            image: MONZA_IMAGE,
          },
          {
            image: TERNI_IMAGE,
          },
          {
            image: CORTEZ_IMAGE,
          },
          {
            image: GOLD_STRIKE_IMAGE,
          },
          {
            image: GRAY_ONIX_IMAGE,
          },
          {
            image: MONZA_IMAGE,
          },
          {
            image: TERNI_IMAGE,
          },
        ],
      },
      {
        title: 'Sand&Perl',
        images: [
          {
            image: TERNI_IMAGE,
          },
          {
            image: GOLD_STRIKE_IMAGE,
          },
          {
            image: GRAY_ONIX_IMAGE,
          },
          {
            image: MONZA_IMAGE,
          },
          {
            image: CORTEZ_IMAGE,
          },
          {
            image: CORTEZ_IMAGE,
          },
          {
            image: GOLD_STRIKE_IMAGE,
          },
          {
            image: GRAY_ONIX_IMAGE,
          },
          {
            image: MONZA_IMAGE,
          },
          {
            image: TERNI_IMAGE,
          },
        ],
      },
      {
        title: 'Lucent',
        images: [
          {
            image: CORTEZ_IMAGE,
          },
          {
            image: GOLD_STRIKE_IMAGE,
          },
          {
            image: GRAY_ONIX_IMAGE,
          },
          {
            image: MONZA_IMAGE,
          },
          {
            image: TERNI_IMAGE,
          },
          {
            image: CORTEZ_IMAGE,
          },
          {
            image: GOLD_STRIKE_IMAGE,
          },
          {
            image: GRAY_ONIX_IMAGE,
          },
          {
            image: MONZA_IMAGE,
          },
          {
            image: TERNI_IMAGE,
          },
        ],
      },
      {
        title: 'Marmo',
        images: [
          {
            image: TERNI_IMAGE,
          },
          {
            image: GOLD_STRIKE_IMAGE,
          },
          {
            image: GRAY_ONIX_IMAGE,
          },
          {
            image: MONZA_IMAGE,
          },
          {
            image: CORTEZ_IMAGE,
          },
          {
            image: CORTEZ_IMAGE,
          },
          {
            image: GOLD_STRIKE_IMAGE,
          },
          {
            image: GRAY_ONIX_IMAGE,
          },
          {
            image: MONZA_IMAGE,
          },
          {
            image: TERNI_IMAGE,
          },
        ],
      },
      {
        title: 'Galaxy',
        images: [
          {
            image: CORTEZ_IMAGE,
          },
          {
            image: GOLD_STRIKE_IMAGE,
          },
          {
            image: GRAY_ONIX_IMAGE,
          },
          {
            image: MONZA_IMAGE,
          },
          {
            image: TERNI_IMAGE,
          },
          {
            image: CORTEZ_IMAGE,
          },
          {
            image: GOLD_STRIKE_IMAGE,
          },
          {
            image: GRAY_ONIX_IMAGE,
          },
          {
            image: MONZA_IMAGE,
          },
          {
            image: TERNI_IMAGE,
          },
        ],
      },
      {
        title: 'Granite',
        images: [
          {
            image: TERNI_IMAGE,
          },
          {
            image: GOLD_STRIKE_IMAGE,
          },
          {
            image: GRAY_ONIX_IMAGE,
          },
          {
            image: MONZA_IMAGE,
          },
          {
            image: CORTEZ_IMAGE,
          },
          {
            image: CORTEZ_IMAGE,
          },
          {
            image: GOLD_STRIKE_IMAGE,
          },
          {
            image: GRAY_ONIX_IMAGE,
          },
          {
            image: MONZA_IMAGE,
          },
          {
            image: TERNI_IMAGE,
          },
        ],
      },
      {
        title: 'Quartz',
        images: [
          {
            image: CORTEZ_IMAGE,
          },
          {
            image: GOLD_STRIKE_IMAGE,
          },
          {
            image: GRAY_ONIX_IMAGE,
          },
          {
            image: MONZA_IMAGE,
          },
          {
            image: TERNI_IMAGE,
          },
          {
            image: CORTEZ_IMAGE,
          },
          {
            image: GOLD_STRIKE_IMAGE,
          },
          {
            image: GRAY_ONIX_IMAGE,
          },
          {
            image: MONZA_IMAGE,
          },
          {
            image: TERNI_IMAGE,
          },
        ],
      },
      {
        title: 'Lucia',
        images: [
          {
            image: TERNI_IMAGE,
          },
          {
            image: GOLD_STRIKE_IMAGE,
          },
          {
            image: GRAY_ONIX_IMAGE,
          },
          {
            image: MONZA_IMAGE,
          },
          {
            image: CORTEZ_IMAGE,
          },
          {
            image: CORTEZ_IMAGE,
          },
          {
            image: GOLD_STRIKE_IMAGE,
          },
          {
            image: GRAY_ONIX_IMAGE,
          },
          {
            image: MONZA_IMAGE,
          },
          {
            image: TERNI_IMAGE,
          },
        ],
      },
      {
        title: 'Volcanics',
        images: [
          {
            image: CORTEZ_IMAGE,
          },
          {
            image: GOLD_STRIKE_IMAGE,
          },
          {
            image: GRAY_ONIX_IMAGE,
          },
          {
            image: MONZA_IMAGE,
          },
          {
            image: TERNI_IMAGE,
          },
          {
            image: CORTEZ_IMAGE,
          },
          {
            image: GOLD_STRIKE_IMAGE,
          },
          {
            image: GRAY_ONIX_IMAGE,
          },
          {
            image: MONZA_IMAGE,
          },
          {
            image: TERNI_IMAGE,
          },
        ],
      },
    ],
  },
  {
    id: '6',
    title: 'Акриловый камень Hanex',
    image: HANEX_IMAGE,
    description: 'Искусственный материал для отделки и декора интерьера, обладает эстетически привлекательным внешним видом и высокими эксплуатационными характеристиками. Производится на основе акрила с добавлением глины и мрамора, экологически безопасен и легок в уходе. Прочный, практичный и функциональный.',
    subspecies: [
      {
        title: 'Solid',
        images: [
          {
            image: CORTEZ_IMAGE,
          },
          {
            image: GOLD_STRIKE_IMAGE,
          },
          {
            image: GRAY_ONIX_IMAGE,
          },
          {
            image: MONZA_IMAGE,
          },
          {
            image: TERNI_IMAGE,
          },
          {
            image: CORTEZ_IMAGE,
          },
          {
            image: GOLD_STRIKE_IMAGE,
          },
          {
            image: GRAY_ONIX_IMAGE,
          },
          {
            image: MONZA_IMAGE,
          },
          {
            image: TERNI_IMAGE,
          },
        ],
      },
      {
        title: 'Sand&Perl',
        images: [
          {
            image: TERNI_IMAGE,
          },
          {
            image: GOLD_STRIKE_IMAGE,
          },
          {
            image: GRAY_ONIX_IMAGE,
          },
          {
            image: MONZA_IMAGE,
          },
          {
            image: CORTEZ_IMAGE,
          },
          {
            image: CORTEZ_IMAGE,
          },
          {
            image: GOLD_STRIKE_IMAGE,
          },
          {
            image: GRAY_ONIX_IMAGE,
          },
          {
            image: MONZA_IMAGE,
          },
          {
            image: TERNI_IMAGE,
          },
        ],
      },
      {
        title: 'Lucent',
        images: [
          {
            image: CORTEZ_IMAGE,
          },
          {
            image: GOLD_STRIKE_IMAGE,
          },
          {
            image: GRAY_ONIX_IMAGE,
          },
          {
            image: MONZA_IMAGE,
          },
          {
            image: TERNI_IMAGE,
          },
          {
            image: CORTEZ_IMAGE,
          },
          {
            image: GOLD_STRIKE_IMAGE,
          },
          {
            image: GRAY_ONIX_IMAGE,
          },
          {
            image: MONZA_IMAGE,
          },
          {
            image: TERNI_IMAGE,
          },
        ],
      },
      {
        title: 'Marmo',
        images: [
          {
            image: TERNI_IMAGE,
          },
          {
            image: GOLD_STRIKE_IMAGE,
          },
          {
            image: GRAY_ONIX_IMAGE,
          },
          {
            image: MONZA_IMAGE,
          },
          {
            image: CORTEZ_IMAGE,
          },
          {
            image: CORTEZ_IMAGE,
          },
          {
            image: GOLD_STRIKE_IMAGE,
          },
          {
            image: GRAY_ONIX_IMAGE,
          },
          {
            image: MONZA_IMAGE,
          },
          {
            image: TERNI_IMAGE,
          },
        ],
      },
      {
        title: 'Galaxy',
        images: [
          {
            image: CORTEZ_IMAGE,
          },
          {
            image: GOLD_STRIKE_IMAGE,
          },
          {
            image: GRAY_ONIX_IMAGE,
          },
          {
            image: MONZA_IMAGE,
          },
          {
            image: TERNI_IMAGE,
          },
          {
            image: CORTEZ_IMAGE,
          },
          {
            image: GOLD_STRIKE_IMAGE,
          },
          {
            image: GRAY_ONIX_IMAGE,
          },
          {
            image: MONZA_IMAGE,
          },
          {
            image: TERNI_IMAGE,
          },
        ],
      },
      {
        title: 'Granite',
        images: [
          {
            image: TERNI_IMAGE,
          },
          {
            image: GOLD_STRIKE_IMAGE,
          },
          {
            image: GRAY_ONIX_IMAGE,
          },
          {
            image: MONZA_IMAGE,
          },
          {
            image: CORTEZ_IMAGE,
          },
          {
            image: CORTEZ_IMAGE,
          },
          {
            image: GOLD_STRIKE_IMAGE,
          },
          {
            image: GRAY_ONIX_IMAGE,
          },
          {
            image: MONZA_IMAGE,
          },
          {
            image: TERNI_IMAGE,
          },
        ],
      },
      {
        title: 'Quartz',
        images: [
          {
            image: CORTEZ_IMAGE,
          },
          {
            image: GOLD_STRIKE_IMAGE,
          },
          {
            image: GRAY_ONIX_IMAGE,
          },
          {
            image: MONZA_IMAGE,
          },
          {
            image: TERNI_IMAGE,
          },
          {
            image: CORTEZ_IMAGE,
          },
          {
            image: GOLD_STRIKE_IMAGE,
          },
          {
            image: GRAY_ONIX_IMAGE,
          },
          {
            image: MONZA_IMAGE,
          },
          {
            image: TERNI_IMAGE,
          },
        ],
      },
      {
        title: 'Lucia',
        images: [
          {
            image: TERNI_IMAGE,
          },
          {
            image: GOLD_STRIKE_IMAGE,
          },
          {
            image: GRAY_ONIX_IMAGE,
          },
          {
            image: MONZA_IMAGE,
          },
          {
            image: CORTEZ_IMAGE,
          },
          {
            image: CORTEZ_IMAGE,
          },
          {
            image: GOLD_STRIKE_IMAGE,
          },
          {
            image: GRAY_ONIX_IMAGE,
          },
          {
            image: MONZA_IMAGE,
          },
          {
            image: TERNI_IMAGE,
          },
        ],
      },
      {
        title: 'Volcanics',
        images: [
          {
            image: CORTEZ_IMAGE,
          },
          {
            image: GOLD_STRIKE_IMAGE,
          },
          {
            image: GRAY_ONIX_IMAGE,
          },
          {
            image: MONZA_IMAGE,
          },
          {
            image: TERNI_IMAGE,
          },
          {
            image: CORTEZ_IMAGE,
          },
          {
            image: GOLD_STRIKE_IMAGE,
          },
          {
            image: GRAY_ONIX_IMAGE,
          },
          {
            image: MONZA_IMAGE,
          },
          {
            image: TERNI_IMAGE,
          },
        ],
      },
    ],
  },
  {
    id: '7',
    title: 'Акриловый камень Du Pont Montelli',
    image: MONTELLI_IMAGE,
    description: 'Искусственный материал, удешевленный аналог серии Corian, при этом максимально сохранивший высокие эксплуатационные характеристики. Эстетически привлекательный, экологически чистый, прочный и функциональный. Идеально подходит для создания уникальных конфигураций интерьера. Меняя под нагревом форму, открывает огромный простор для реализации дизайнерских задумок и смелых решений.',
    subspecies: [
      {
        title: 'Solid',
        images: [
          {
            image: CORTEZ_IMAGE,
          },
          {
            image: GOLD_STRIKE_IMAGE,
          },
          {
            image: GRAY_ONIX_IMAGE,
          },
          {
            image: MONZA_IMAGE,
          },
          {
            image: TERNI_IMAGE,
          },
          {
            image: CORTEZ_IMAGE,
          },
          {
            image: GOLD_STRIKE_IMAGE,
          },
          {
            image: GRAY_ONIX_IMAGE,
          },
          {
            image: MONZA_IMAGE,
          },
          {
            image: TERNI_IMAGE,
          },
        ],
      },
      {
        title: 'Sand&Perl',
        images: [
          {
            image: TERNI_IMAGE,
          },
          {
            image: GOLD_STRIKE_IMAGE,
          },
          {
            image: GRAY_ONIX_IMAGE,
          },
          {
            image: MONZA_IMAGE,
          },
          {
            image: CORTEZ_IMAGE,
          },
          {
            image: CORTEZ_IMAGE,
          },
          {
            image: GOLD_STRIKE_IMAGE,
          },
          {
            image: GRAY_ONIX_IMAGE,
          },
          {
            image: MONZA_IMAGE,
          },
          {
            image: TERNI_IMAGE,
          },
        ],
      },
      {
        title: 'Lucent',
        images: [
          {
            image: CORTEZ_IMAGE,
          },
          {
            image: GOLD_STRIKE_IMAGE,
          },
          {
            image: GRAY_ONIX_IMAGE,
          },
          {
            image: MONZA_IMAGE,
          },
          {
            image: TERNI_IMAGE,
          },
          {
            image: CORTEZ_IMAGE,
          },
          {
            image: GOLD_STRIKE_IMAGE,
          },
          {
            image: GRAY_ONIX_IMAGE,
          },
          {
            image: MONZA_IMAGE,
          },
          {
            image: TERNI_IMAGE,
          },
        ],
      },
      {
        title: 'Marmo',
        images: [
          {
            image: TERNI_IMAGE,
          },
          {
            image: GOLD_STRIKE_IMAGE,
          },
          {
            image: GRAY_ONIX_IMAGE,
          },
          {
            image: MONZA_IMAGE,
          },
          {
            image: CORTEZ_IMAGE,
          },
          {
            image: CORTEZ_IMAGE,
          },
          {
            image: GOLD_STRIKE_IMAGE,
          },
          {
            image: GRAY_ONIX_IMAGE,
          },
          {
            image: MONZA_IMAGE,
          },
          {
            image: TERNI_IMAGE,
          },
        ],
      },
      {
        title: 'Galaxy',
        images: [
          {
            image: CORTEZ_IMAGE,
          },
          {
            image: GOLD_STRIKE_IMAGE,
          },
          {
            image: GRAY_ONIX_IMAGE,
          },
          {
            image: MONZA_IMAGE,
          },
          {
            image: TERNI_IMAGE,
          },
          {
            image: CORTEZ_IMAGE,
          },
          {
            image: GOLD_STRIKE_IMAGE,
          },
          {
            image: GRAY_ONIX_IMAGE,
          },
          {
            image: MONZA_IMAGE,
          },
          {
            image: TERNI_IMAGE,
          },
        ],
      },
      {
        title: 'Granite',
        images: [
          {
            image: TERNI_IMAGE,
          },
          {
            image: GOLD_STRIKE_IMAGE,
          },
          {
            image: GRAY_ONIX_IMAGE,
          },
          {
            image: MONZA_IMAGE,
          },
          {
            image: CORTEZ_IMAGE,
          },
          {
            image: CORTEZ_IMAGE,
          },
          {
            image: GOLD_STRIKE_IMAGE,
          },
          {
            image: GRAY_ONIX_IMAGE,
          },
          {
            image: MONZA_IMAGE,
          },
          {
            image: TERNI_IMAGE,
          },
        ],
      },
      {
        title: 'Quartz',
        images: [
          {
            image: CORTEZ_IMAGE,
          },
          {
            image: GOLD_STRIKE_IMAGE,
          },
          {
            image: GRAY_ONIX_IMAGE,
          },
          {
            image: MONZA_IMAGE,
          },
          {
            image: TERNI_IMAGE,
          },
          {
            image: CORTEZ_IMAGE,
          },
          {
            image: GOLD_STRIKE_IMAGE,
          },
          {
            image: GRAY_ONIX_IMAGE,
          },
          {
            image: MONZA_IMAGE,
          },
          {
            image: TERNI_IMAGE,
          },
        ],
      },
      {
        title: 'Lucia',
        images: [
          {
            image: TERNI_IMAGE,
          },
          {
            image: GOLD_STRIKE_IMAGE,
          },
          {
            image: GRAY_ONIX_IMAGE,
          },
          {
            image: MONZA_IMAGE,
          },
          {
            image: CORTEZ_IMAGE,
          },
          {
            image: CORTEZ_IMAGE,
          },
          {
            image: GOLD_STRIKE_IMAGE,
          },
          {
            image: GRAY_ONIX_IMAGE,
          },
          {
            image: MONZA_IMAGE,
          },
          {
            image: TERNI_IMAGE,
          },
        ],
      },
      {
        title: 'Volcanics',
        images: [
          {
            image: CORTEZ_IMAGE,
          },
          {
            image: GOLD_STRIKE_IMAGE,
          },
          {
            image: GRAY_ONIX_IMAGE,
          },
          {
            image: MONZA_IMAGE,
          },
          {
            image: TERNI_IMAGE,
          },
          {
            image: CORTEZ_IMAGE,
          },
          {
            image: GOLD_STRIKE_IMAGE,
          },
          {
            image: GRAY_ONIX_IMAGE,
          },
          {
            image: MONZA_IMAGE,
          },
          {
            image: TERNI_IMAGE,
          },
        ],
      },
    ],
  },
];
