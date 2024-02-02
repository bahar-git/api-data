const productsData = [
  {
    category: "soup",
    price: 10.0,
    strMeal: "Rosół (Polish Chicken Soup)",
    imgMeal:
      "https://www.themealdb.com/images/media/meals/lx1kkj1593349302.jpg",
    idMeal: "53020",
  },
  {
    category: "soup",
    price: 8.0,
    strMeal: "French Onion Soup",
    imgMeal:
      "https://www.themealdb.com/images/media/meals/xvrrux1511783685.jpg",
    idMeal: "52903",
  },
  {
    category: "soup",
    price: 7.5,
    strMeal: "Broccoli & Stilton soup",
    imgMeal:
      "https://www.themealdb.com/images/media/meals/tvvxpv1511191952.jpg",
    idMeal: "52842",
  },
  {
    category: "soup",
    price: 9.0,
    strMeal: "Clam chowder",
    imgMeal:
      "https://www.themealdb.com/images/media/meals/rvtvuw1511190488.jpg",
    idMeal: "52840",
  },
  {
    category: "soup",
    price: 7.0,
    strMeal: "Creamy Tomato Soup",
    imgMeal:
      "https://www.themealdb.com/images/media/meals/stpuws1511191310.jpg",
    idMeal: "52841",
  },
  {
    category: "soup",
    price: 8.5,
    strMeal: "Mulukhiyah",
    imgMeal:
      "https://www.themealdb.com/images/media/meals/x372ug1598733932.jpg",
    idMeal: "53029",
  },
  {
    category: "soup",
    price: 10.5,
    strMeal: "Oxtail with broad beans",
    imgMeal: "https://www.themealdb.com/images/media/meals/1520083578.jpg",
    idMeal: "52943",
  },
  {
    category: "soup",
    price: 7.0,
    strMeal: "Red Peas Soup",
    imgMeal:
      "https://www.themealdb.com/images/media/meals/sqpqtp1515365614.jpg",
    idMeal: "52941",
  },
  {
    category: "soup",
    price: 7.0,
    strMeal: "Corba",
    imgMeal:
      "https://www.themealdb.com/images/media/meals/58oia61564916529.jpg",
    idMeal: "52977",
  },
  {
    category: "soup",
    price: 10.0,
    strMeal: "Mushroom soup with buckwheat",
    imgMeal:
      "https://www.themealdb.com/images/media/meals/1ngcbf1628770793.jpg",
    idMeal: "53059",
  },
  {
    category: "soup",
    price: 7.5,
    strMeal: "Prawn & Fennel Bisque",
    imgMeal:
      "https://www.themealdb.com/images/media/meals/rtwwvv1511799504.jpg",
    idMeal: "52922",
  },
  {
    category: "soup",
    price: 7.0,
    strMeal: "Split Pea Soup",
    imgMeal:
      "https://www.themealdb.com/images/media/meals/xxtsvx1511814083.jpg",
    idMeal: "52925",
  },

  {
    category: "salad",
    price: 15.5,
    strMeal: "Beef Banh Mi Bowls with Sriracha Mayo, Carrot & Pickled Cucumber",
    imgMeal:
      "https://www.themealdb.com/images/media/meals/z0ageb1583189517.jpg",
    idMeal: "52997",
  },
  {
    category: "salad",
    price: 14.0,
    strMeal: "Corned Beef and Cabbage",
    imgMeal:
      "https://www.themealdb.com/images/media/meals/xb97a81583266727.jpg",
    idMeal: "52998",
  },
  {
    category: "salad",
    price: 16.0,
    strMeal: "Chicken Quinoa Greek Salad",
    imgMeal:
      "https://www.themealdb.com/images/media/meals/k29viq1585565980.jpg",
    idMeal: "53011",
  },
  {
    category: "salad",
    price: 12.5,
    strMeal: "Kung Pao Chicken",
    imgMeal: "https://www.themealdb.com/images/media/meals/1525872624.jpg",
    idMeal: "52945",
  },

  {
    category: "appetizer",
    price: 16.0,
    strMeal: "Pierogi (Polish Dumplings)",
    imgMeal:
      "https://www.themealdb.com/images/media/meals/45xxr21593348847.jpg",
    idMeal: "53019",
  },
  {
    category: "appetizer",
    price: 15.5,
    strMeal: "Gołąbki (cabbage roll)",
    imgMeal:
      "https://www.themealdb.com/images/media/meals/q8sp3j1593349686.jpg",
    idMeal: "53021",
  },
  {
    category: "appetizer",
    price: 12.0,
    strMeal: "Sledz w Oleju (Polish Herrings)",
    imgMeal:
      "https://www.themealdb.com/images/media/meals/7ttta31593350374.jpg",
    idMeal: "53023",
  },
  {
    category: "appetizer",
    price: 13.0,
    strMeal: "Bitterballen (Dutch meatballs)",
    imgMeal:
      "https://www.themealdb.com/images/media/meals/lhqev81565090111.jpg",
    idMeal: "52979",
  },
  {
    category: "appetizer",
    price: 15.5,
    strMeal: "Cevapi Sausages",
    imgMeal:
      "https://www.themealdb.com/images/media/meals/vc08jn1628769553.jpg",
    idMeal: "53055",
  },
  {
    category: "appetizer",
    price: 14.5,
    strMeal: "Boulangère Potatoes",
    imgMeal:
      "https://www.themealdb.com/images/media/meals/qywups1511796761.jpg",
    idMeal: "52914",
  },
  {
    category: "appetizer",
    price: 11.5,
    strMeal: "Fresh sardines",
    imgMeal:
      "https://www.themealdb.com/images/media/meals/nv5lf31628771380.jpg",
    idMeal: "53061",
  },
  {
    category: "appetizer",
    price: 13.0,
    strMeal: "Kumpir",
    imgMeal:
      "https://www.themealdb.com/images/media/meals/mlchx21564916997.jpg",
    idMeal: "52978",
  },
  {
    category: "appetizer",
    price: 11.0,
    strMeal: "Crispy Eggplant",
    imgMeal:
      "https://www.themealdb.com/images/media/meals/c7lzrl1683208757.jpg",
    idMeal: "53072",
  },
  {
    category: "appetizer",
    price: 14.5,
    strMeal: "Kentucky Fried Chicken",
    imgMeal:
      "https://www.themealdb.com/images/media/meals/xqusqy1487348868.jpg",
    idMeal: "52813",
  },

  {
    category: "dish",
    price: 22.5,
    strMeal: "Beef Asado",
    imgMeal:
      "https://www.themealdb.com/images/media/meals/pkopc31683207947.jpg",
    idMeal: "53071",
  },
  {
    category: "dish",
    price: 22.0,
    strMeal: "Beef Bourguignon",
    imgMeal:
      "https://www.themealdb.com/images/media/meals/vtqxtu1511784197.jpg",
    idMeal: "52904",
  },
  {
    category: "dish",
    price: 23.4,
    strMeal: "Beef Brisket Pot Roast",
    imgMeal:
      "https://www.themealdb.com/images/media/meals/ursuup1487348423.jpg",
    idMeal: "52812",
  },
  {
    category: "dish",
    price: 17.5,
    strMeal: "Beef Dumpling Stew",
    imgMeal:
      "https://www.themealdb.com/images/media/meals/uyqrrv1511553350.jpg",
    idMeal: "52873",
  },
  {
    category: "dish",
    price: 17.5,
    strMeal: "Beef Lo Mein",
    imgMeal: "https://www.themealdb.com/images/media/meals/1529444830.jpg",
    idMeal: "52952",
  },
  {
    category: "dish",
    price: 16.0,
    strMeal: "Beef stroganoff",
    imgMeal:
      "https://www.themealdb.com/images/media/meals/svprys1511176755.jpg",
    idMeal: "52834",
  },
  {
    category: "dish",
    price: 17.0,
    strMeal: "Irish stew",
    imgMeal:
      "https://www.themealdb.com/images/media/meals/sxxpst1468569714.jpg",
    idMeal: "52781",
  },
  {
    category: "dish",
    price: 23.0,
    strMeal:
      "Soy-Glazed Meatloaves with Wasabi Mashed Potatoes & Roasted Carrots",
    imgMeal:
      "https://www.themealdb.com/images/media/meals/o2wb6p1581005243.jpg",
    idMeal: "52992",
  },
  {
    category: "dish",
    price: 24.0,
    strMeal: "Steak Diane",
    imgMeal:
      "https://www.themealdb.com/images/media/meals/vussxq1511882648.jpg",
    idMeal: "52935",
  },
  {
    category: "dish",
    price: 22.5,
    strMeal: "Szechuan Beef",
    imgMeal: "https://www.themealdb.com/images/media/meals/1529443236.jpg",
    idMeal: "52950",
  },

  {
    category: "dish",
    price: 20.5,
    strMeal: "Chicken Alfredo Primavera",
    imgMeal:
      "https://www.themealdb.com/images/media/meals/syqypv1486981727.jpg",
    idMeal: "52796",
  },
  {
    category: "dish",
    price: 18.5,
    strMeal: "Chicken Basquaise",
    imgMeal:
      "https://www.themealdb.com/images/media/meals/wruvqv1511880994.jpg",
    idMeal: "52934",
  },
  {
    category: "dish",
    price: 17.0,
    strMeal: "Chicken Couscous",
    imgMeal:
      "https://www.themealdb.com/images/media/meals/qxytrx1511304021.jpg",
    idMeal: "52850",
  },
  {
    category: "dish",
    price: 17.0,
    strMeal: "Chicken Marengo",
    imgMeal:
      "https://www.themealdb.com/images/media/meals/qpxvuq1511798906.jpg",
    idMeal: "52920",
  },
  {
    category: "dish",
    price: 21.0,
    strMeal: "French Onion Chicken with Roasted Carrots & Mashed Potatoes",
    imgMeal:
      "https://www.themealdb.com/images/media/meals/b5ft861583188991.jpg",
    idMeal: "52996",
  },
  {
    category: "dish",
    price: 20.0,
    strMeal: "General Tso's Chicken",
    imgMeal: "https://www.themealdb.com/images/media/meals/1529444113.jpg",
    idMeal: "52951",
  },
  {
    category: "dish",
    price: 21.5,
    strMeal: "Honey Balsamic Chicken with Crispy Broccoli & Potatoes",
    imgMeal:
      "https://www.themealdb.com/images/media/meals/kvbotn1581012881.jpg",
    idMeal: "52993",
  },
  {
    category: "dish",
    price: 22.5,
    strMeal: "Jerk chicken with rice & peas",
    imgMeal:
      "https://www.themealdb.com/images/media/meals/tytyxu1515363282.jpg",
    idMeal: "52937",
  },
  {
    category: "dish",
    price: 18.0,
    strMeal: "Potato Gratin with Chicken",
    imgMeal:
      "https://www.themealdb.com/images/media/meals/qwrtut1468418027.jpg",
    idMeal: "52780",
  },
  {
    category: "dish",
    price: 19.0,
    strMeal: "Piri-piri chicken and slaw",
    imgMeal:
      "https://www.themealdb.com/images/media/meals/hglsbl1614346998.jpg",
    idMeal: "53039",
  },

  {
    category: "burger",
    price: 18.0,
    strMeal: "Big Mac",
    imgMeal:
      "https://www.themealdb.com/images/media/meals/urzj1d1587670726.jpg",
    idMeal: "53013",
  },
  {
    category: "burger",
    price: 17.0,
    strMeal: "Portuguese prego with green piri-piri",
    imgMeal:
      "https://www.themealdb.com/images/media/meals/ewcikl1614348364.jpg",
    idMeal: "53042",
  },
  {
    category: "sandwich",
    price: 14.0,
    strMeal: "Chick-Fil-A Sandwich",
    imgMeal:
      "https://www.themealdb.com/images/media/meals/sbx7n71587673021.jpg",
    idMeal: "53016",
  },
  {
    category: "sandwich",
    price: 16.0,
    strMeal: "Chivito uruguayo",
    imgMeal:
      "https://www.themealdb.com/images/media/meals/n7qnkb1630444129.jpg",
    idMeal: "53063",
  },
  {
    category: "sandwich",
    price: 15.0,
    strMeal: "Montreal Smoked Meat",
    imgMeal:
      "https://www.themealdb.com/images/media/meals/uttupv1511815050.jpg",
    idMeal: "52927",
  },

  {
    category: "pie",
    price: 20.8,
    strMeal: "Beef and Mustard Pie",
    imgMeal:
      "https://www.themealdb.com/images/media/meals/sytuqu1511553755.jpg",
    idMeal: "52874",
  },
  {
    category: "pie",
    price: 21.5,
    strMeal: "Beef and Oyster pie",
    imgMeal:
      "https://www.themealdb.com/images/media/meals/wrssvt1511556563.jpg",
    idMeal: "52878",
  },
  {
    category: "pie",
    price: 20.8,
    strMeal: "Minced Beef Pie",
    imgMeal:
      "https://www.themealdb.com/images/media/meals/xwutvy1511555540.jpg",
    idMeal: "52876",
  },
  {
    category: "pie",
    price: 20.8,
    strMeal: "Steak and Kidney Pie",
    imgMeal:
      "https://www.themealdb.com/images/media/meals/qysyss1511558054.jpg",
    idMeal: "52881",
  },
  {
    category: "pie",
    price: 17.5,
    strMeal: "Vegetable Shepherd's Pie",
    imgMeal:
      "https://www.themealdb.com/images/media/meals/w8umt11583268117.jpg",
    idMeal: "53000",
  },
  {
    category: "pie",
    price: 16.0,
    strMeal: "Brie wrapped in prosciutto & brioche",
    imgMeal:
      "https://www.themealdb.com/images/media/meals/qqpwsy1511796276.jpg",
    idMeal: "52913",
  },
  {
    category: "pie",
    price: 16.0,
    strMeal: "Burek",
    imgMeal:
      "https://www.themealdb.com/images/media/meals/tkxquw1628771028.jpg",
    idMeal: "53060",
  },
  {
    category: "pie",
    price: 17.0,
    strMeal: "Chicken Ham and Leek Pie",
    imgMeal:
      "https://www.themealdb.com/images/media/meals/xrrtss1511555269.jpg",
    idMeal: "52875",
  },

  {
    category: "patties",
    price: 14.0,
    strMeal: "Beef Wellington",
    imgMeal:
      "https://www.themealdb.com/images/media/meals/vvpprx1487325699.jpg",
    idMeal: "52803",
  },
  {
    category: "patties",
    price: 12.5,
    strMeal: "Jamaican Beef Patties",
    imgMeal:
      "https://www.themealdb.com/images/media/meals/wsqqsw1515364068.jpg",
    idMeal: "52938",
  },
  {
    category: "patties",
    price: 13.0,
    strMeal: "Paszteciki (Polish Pasties)",
    imgMeal:
      "https://www.themealdb.com/images/media/meals/c9a3l31593261890.jpg",
    idMeal: "53017",
  },

  {
    category: "dessert",
    price: 7.5,
    strMeal: "Rogaliki (Polish Croissant Cookies)",
    imgMeal:
      "https://www.themealdb.com/images/media/meals/7mxnzz1593350801.jpg",
    idMeal: "53024",
  },
  {
    category: "dessert",
    price: 7.5,
    strMeal: "Polskie Naleśniki (Polish Pancakes)",
    imgMeal:
      "https://www.themealdb.com/images/media/meals/58bkyo1593350017.jpg",
    idMeal: "53022",
  },
  {
    category: "dessert",
    price: 8.9,
    strMeal: "Banana Pancakes",
    imgMeal:
      "https://www.themealdb.com/images/media/meals/sywswr1511383814.jpg",
    idMeal: "52855",
  },
  {
    category: "dessert",
    price: 6.5,
    strMeal: "Apple Frangipan Tart",
    imgMeal:
      "https://www.themealdb.com/images/media/meals/wxywrq1468235067.jpg",
    idMeal: "52768",
  },
  {
    category: "dessert",
    price: 6.5,
    strMeal: "Chinon Apple Tarts",
    imgMeal:
      "https://www.themealdb.com/images/media/meals/qtqwwu1511792650.jpg",
    idMeal: "52910",
  },
  {
    category: "dessert",
    price: 6.5,
    strMeal: "Pear Tarte Tatin",
    imgMeal:
      "https://www.themealdb.com/images/media/meals/rxvxrr1511797671.jpg",
    idMeal: "52916",
  },
  {
    category: "dessert",
    price: 7.0,
    strMeal: "Choc Chip Pecan Pie",
    imgMeal:
      "https://www.themealdb.com/images/media/meals/rqvwxt1511384809.jpg",
    idMeal: "52856",
  },
  {
    category: "dessert",
    price: 7.0,
    strMeal: "Key Lime Pie",
    imgMeal:
      "https://www.themealdb.com/images/media/meals/qpqtuu1511386216.jpg",
    idMeal: "52859",
  },
  {
    category: "dessert",
    price: 7.2,
    strMeal: "New York cheesecake",
    imgMeal:
      "https://www.themealdb.com/images/media/meals/swttys1511385853.jpg",
    idMeal: "52858",
  },
  {
    category: "dessert",
    price: 5.5,
    strMeal: "Battenberg Cake",
    imgMeal:
      "https://www.themealdb.com/images/media/meals/ywwrsp1511720277.jpg",
    idMeal: "52894",
  },
  {
    category: "dessert",
    price: 5.5,
    strMeal: "Carrot Cake",
    imgMeal:
      "https://www.themealdb.com/images/media/meals/vrspxv1511722107.jpg",
    idMeal: "52897",
  },
  {
    category: "dessert",
    price: 5.0,
    strMeal: "Summer Pudding",
    imgMeal:
      "https://www.themealdb.com/images/media/meals/rsqwus1511640214.jpg",
    idMeal: "52889",
  },
  {
    category: "dessert",
    price: 5.0,
    strMeal: "Sticky Toffee Pudding Ultimate",
    imgMeal:
      "https://www.themealdb.com/images/media/meals/xrptpq1483909204.jpg",
    idMeal: "52793",
  },
  {
    category: "dessert",
    price: 7.2,
    strMeal: "Chocolate Raspberry Brownies",
    imgMeal:
      "https://www.themealdb.com/images/media/meals/yypvst1511386427.jpg",
    idMeal: "52860",
  },
  {
    category: "dessert",
    price: 6.0,
    strMeal: "Chocolate Souffle",
    imgMeal:
      "https://www.themealdb.com/images/media/meals/twspvx1511784937.jpg",
    idMeal: "52905",
  },
  {
    category: "dessert",
    price: 6.0,
    strMeal: "White chocolate creme brulee",
    imgMeal:
      "https://www.themealdb.com/images/media/meals/uryqru1511798039.jpg",
    idMeal: "52917",
  },
];

module.exports = productsData;
