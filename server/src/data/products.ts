export type Product = {
  id: number;
  title: string;
  description: string;
  price: number;
  category: string;
  image: string;
};

export const PRODUCTS: Product[] = [
  {
    id: 1,
    title: 'Шоколад Milka',
    description: 'Нежный молочный шоколад 100г',
    price: 150,
    category: 'Шоколад',
    image: '🍫',
  },
  {
    id: 2,
    title: 'Мармелад Haribo',
    description: 'Классический мармелад 200г',
    price: 220,
    category: 'Мармелад',
    image: '🍬',
  },
  {
    id: 3,
    title: 'Печенье Oreo',
    description: 'Хрустящее печенье с кремом 150г',
    price: 180,
    category: 'Печенье',
    image: '🍪',
  },
  {
    id: 4,
    title: 'Конфеты Raffaello',
    description: 'Кокосовые конфеты премиум 150г',
    price: 350,
    category: 'Конфеты',
    image: '🥥',
  },
  {
    id: 5,
    title: 'Шоколад Lindt',
    description: 'Темный шоколад 70% какао 100г',
    price: 280,
    category: 'Шоколад',
    image: '🍫',
  },
  {
    id: 6,
    title: 'Мармелад Trolli',
    description: 'Фигурный мармелад 200г',
    price: 240,
    category: 'Мармелад',
    image: '🍭',
  },
  {
    id: 7,
    title: 'Печенье Юбилейное',
    description: 'Классическое сдобное 200г',
    price: 120,
    category: 'Печенье',
    image: '🍪',
  },
  {
    id: 8,
    title: 'АКЦИЯ! Kinder Surprise',
    description: 'Шоколадная игрушка 20г',
    price: 90,
    category: 'Акции',
    image: '🎁',
  },
  {
    id: 9,
    title: 'Шоколад Alpen Gold',
    description: 'Молочный с орехами 90г',
    price: 135,
    category: 'Шоколад',
    image: '🍫',
  },
  {
    id: 10,
    title: 'Snickers батончик',
    description: 'Нуга, карамель и арахис 50г',
    price: 95,
    category: 'Шоколад',
    image: '🍫',
  },
  {
    id: 11,
    title: 'Twix',
    description: 'Печенье с карамелью в шоколаде 55г',
    price: 92,
    category: 'Шоколад',
    image: '🍫',
  },
  {
    id: 12,
    title: 'Bounty',
    description: 'Кокос в молочном шоколаде 57г',
    price: 98,
    category: 'Шоколад',
    image: '🥥',
  },
  {
    id: 13,
    title: 'Mars',
    description: 'Нуга с карамелью 51г',
    price: 94,
    category: 'Шоколад',
    image: '🍫',
  },
  {
    id: 14,
    title: 'Мармелад жевательный Mamba',
    description: 'Ассорти фруктовых вкусов 150г',
    price: 165,
    category: 'Мармелад',
    image: '🍬',
  },
  {
    id: 15,
    title: 'Пастила Белёвская',
    description: 'Яблочная без сахара 200г',
    price: 210,
    category: 'Мармелад',
    image: '📜',
  },
  {
    id: 16,
    title: 'Печенье Choco Pie',
    description: 'Зефир в шоколаде 12 шт',
    price: 320,
    category: 'Печенье',
    image: '🍪',
  },
  {
    id: 17,
    title: 'Печенье с шоколадной крошкой',
    description: 'Домашний стиль 180г',
    price: 145,
    category: 'Печенье',
    image: '🍪',
  },
  {
    id: 18,
    title: 'Конфеты Ferrero Rocher',
    description: 'Лесной орех 200г',
    price: 890,
    category: 'Конфеты',
    image: '🌰',
  },
  {
    id: 19,
    title: 'Конфеты M&M’s',
    description: 'Драже в шоколаде 200г',
    price: 275,
    category: 'Конфеты',
    image: '🟤',
  },
  {
    id: 20,
    title: 'Конфеты Коровка',
    description: 'Ирис с молочным вкусом 250г',
    price: 195,
    category: 'Конфеты',
    image: '🐄',
  },
  {
    id: 21,
    title: 'АКЦИЯ! Набор «Сладкий микс»',
    description: 'Ассорти конфет 400г',
    price: 449,
    category: 'Акции',
    image: '🎁',
  },
  {
    id: 22,
    title: 'АКЦИЯ! Два по цене одного — Oreo',
    description: 'Две упаковки печенья 150г',
    price: 180,
    category: 'Акции',
    image: '🍪',
  },
  {
    id: 23,
    title: 'Вафли Loacker',
    description: 'Ореховый крем 175г',
    price: 310,
    category: 'Вафли',
    image: '🧇',
  },
  {
    id: 24,
    title: 'Вафли «Артек»',
    description: 'Классические со сгущёнкой 250г',
    price: 125,
    category: 'Вафли',
    image: '🧇',
  },
  {
    id: 25,
    title: 'Вафельный торт',
    description: 'Слоёный с какао 300г',
    price: 420,
    category: 'Вафли',
    image: '🎂',
  },
  {
    id: 26,
    title: 'Леденцы Halls',
    description: 'Ментол и эвкалипт 34г',
    price: 75,
    category: 'Леденцы',
    image: '🧊',
  },
  {
    id: 27,
    title: 'Chupa Chups ассорти',
    description: 'Леденцы на палочке 12 шт',
    price: 180,
    category: 'Леденцы',
    image: '🍭',
  },
  {
    id: 28,
    title: 'Леденцы «Барбарис»',
    description: 'Ностальгия 100г',
    price: 65,
    category: 'Леденцы',
    image: '🍬',
  },
  {
    id: 29,
    title: 'Жвачка Orbit',
    description: 'Мята без сахара 14 пластин',
    price: 89,
    category: 'Жвачка',
    image: '🫧',
  },
  {
    id: 30,
    title: 'Жвачка Hubba Bubba',
    description: 'Клубника 56г',
    price: 110,
    category: 'Жвачка',
    image: '🫧',
  },
  {
    id: 31,
    title: 'Шоколад Ritter Sport',
    description: 'Миндаль 100г',
    price: 265,
    category: 'Шоколад',
    image: '🍫',
  },
  {
    id: 32,
    title: 'Шоколадные яйца',
    description: 'Пасхальный набор 150г',
    price: 340,
    category: 'Конфеты',
    image: '🥚',
  },
  {
    id: 33,
    title: 'Зефир «Облако»',
    description: 'Ванильный 300г',
    price: 155,
    category: 'Мармелад',
    image: '☁️',
  },
  {
    id: 34,
    title: 'Халва подсолнечная',
    description: 'Тахинная классика 250г',
    price: 140,
    category: 'Конфеты',
    image: '🟤',
  },
  {
    id: 35,
    title: 'Карамель лимонная',
    description: 'Кисло-сладкая 180г',
    price: 88,
    category: 'Леденцы',
    image: '🍋',
  },
];

const ALL_LABEL = 'Все';

export function getCategories(): string[] {
  const unique = new Set(PRODUCTS.map((p) => p.category));
  return [ALL_LABEL, ...Array.from(unique)];
}

export function getProducts(category?: string, search?: string): Product[] {
  let list = [...PRODUCTS];
  if (category && category !== ALL_LABEL) {
    list = list.filter((p) => p.category === category);
  }
  const q = search?.trim().toLowerCase();
  if (q) {
    list = list.filter(
      (p) => p.title.toLowerCase().includes(q) || p.description.toLowerCase().includes(q)
    );
  }
  return list;
}

export function getProductById(id: number): Product | undefined {
  return PRODUCTS.find((p) => p.id === id);
}
