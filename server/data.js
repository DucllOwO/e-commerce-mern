const sliderItems = [
    {
      id: 1,
      img: "https://i.ibb.co/DG69bQ4/2.png",
      title: "SUMMER SALE",
      desc: "DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS.",
      bg: "f5fafd",
    },
    {
      id: 2,
      img: "https://i.ibb.co/DG69bQ4/2.png",
      title: "AUTUMN COLLECTION",
      desc: "DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS.",
      bg: "fcf1ed",
    },
    {
      id: 3,
      img: "https://i.ibb.co/cXFnLLV/3.png",
      title: "LOUNGE WEAR LOVE",
      desc: "DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS.",
      bg: "fbf0f4",
    },
];

const categories = [
    {
      id: 1,
      img: "https://images.pexels.com/photos/5886041/pexels-photo-5886041.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      title: "SHIRT STYLE!",
      category: 'shirt'
    },
    {
      id: 2,
      img: "https://images.pexels.com/photos/2983464/pexels-photo-2983464.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      title: "LOUNGE WEAR LOVE",
      category: 'lounge'
    },
    {
      id: 3,
      img: "https://images.pexels.com/photos/5480696/pexels-photo-5480696.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      title: "LIGHT JACKETS",
      category: 'jacket'
    },
    
  ];

const popularProducts = [
    {
      title: 'Mens Jake Guitar Vintage Crusher Tee',
      desc: 'She nervously peered over the edge. She understood in her mind that the view was supposed to be beautiful, but all she felt was fear. There had always been something about heights that disturbed her, and now she could feel the full force of this unease.',
      categories: ['shirt', 't-shirt'],
      size: ['S', 'M', 'L', 'XL'],
      price: 56,
      img:"https://d3o2e4jr3mxnm3.cloudfront.net/Mens-Jake-Guitar-Vintage-Crusher-Tee_68382_1_lg.png",
    },
    {
      title: 'Colorful shirt',
      desc:'She nervously peered over the edge. She understood in her mind that the view was supposed to be beautiful, but all she felt was fear. There had always been something about heights that disturbed her, and now she could feel the full force of this unease.',
      categories: ['shirt'],
      size:['S', 'M', 'L', 'XL'],
      price:68,
      img:"https://www.prada.com/content/dam/pradanux_products/U/UCS/UCS319/1YOTF010O/UCS319_1YOT_F010O_S_182_SLF.png",
    },
    {
      title:'BUS PAT BRUTE',
      desc:'She nervously peered over the edge. She understood in her mind that the view was supposed to be beautiful, but all she felt was fear. There had always been something about heights that disturbed her, and now she could feel the full force of this unease.',
      categories: ['dress'],
      size:['S', 'M', 'L', 'XL'],
      price:70,
      img:"https://www.burdastyle.com/pub/media/catalog/product/cache/7bd3727382ce0a860b68816435d76e26/107/BUS-PAT-BURTE-1320516/1170x1470_BS_2016_05_132_front.png",
    },
    {
      title: 'Noissue x Creatsy Tote Bag Mockup Bundle',
      desc:'She nervously peered over the edge. She understood in her mind that the view was supposed to be beautiful, but all she felt was fear. There had always been something about heights that disturbed her, and now she could feel the full force of this unease.',
      categories: ['bag'],
      size:['S', 'M', 'L', 'XL'],
      price: 67,
      img:"https://images.ctfassets.net/5gvckmvm9289/3BlDoZxSSjqAvv1jBJP7TH/65f9a95484117730ace42abf64e89572/Noissue-x-Creatsy-Tote-Bag-Mockup-Bundle-_4_-2.png",
    },
    {
      title: 'Rocket Vintage Chill Cap',
      desc:'She nervously peered over the edge. She understood in her mind that the view was supposed to be beautiful, but all she felt was fear. There had always been something about heights that disturbed her, and now she could feel the full force of this unease.',
      categories: ['cap'],
      size:['S', 'M', 'L', 'XL'],
      price:88,
      img:"https://d3o2e4jr3mxnm3.cloudfront.net/Rocket-Vintage-Chill-Cap_66374_1_lg.png",
    },
    {
      title: 'Women Leather Jacket',
      desc:'She nervously peered over the edge. She understood in her mind that the view was supposed to be beautiful, but all she felt was fear. There had always been something about heights that disturbed her, and now she could feel the full force of this unease.',
      categories: ['jacket'],
      size:['S', 'M', 'L', 'XL'],
      price: 90,
      img:"https://www.pngarts.com/files/1/Women-Leather-Jacket-PNG-Pic.png",
    },
    {
      title: 'Black Hoodie Front',
      desc:'She nervously peered over the edge. She understood in her mind that the view was supposed to be beautiful, but all she felt was fear. There had always been something about heights that disturbed her, and now she could feel the full force of this unease.',
      categories: ['hoodie'],
      size:['S', 'M', 'L', 'XL'],
      price:90,
      img:"https://www.pngarts.com/files/9/Black-Hoodie-Front-PNG-Free-Picture.png",
    },
    {
      title: 'Brown Leather Backpack',
      desc:'She nervously peered over the edge. She understood in her mind that the view was supposed to be beautiful, but all she felt was fear. There had always been something about heights that disturbed her, and now she could feel the full force of this unease.',
      categories: ['backpack'],
      size:['S', 'M', 'L', 'XL'],
      price:50,
      img:"https://www.pngarts.com/files/3/Brown-Leather-Backpack-PNG-Image.png",
    },
    {
      title: 'Women Jacket',
      desc:'She nervously peered over the edge. She understood in her mind that the view was supposed to be beautiful, but all she felt was fear. There had always been something about heights that disturbed her, and now she could feel the full force of this unease.',
      categories: ['jacket'],
      size:[ 'M', 'L', 'XL'],
      price:100,
      img:"https://www.pngarts.com/files/3/Women-Jacket-PNG-High-Quality-Image.png",
    },
    {
      title: 'Shoes',
      desc:'She nervously peered over the edge. She understood in her mind that the view was supposed to be beautiful, but all she felt was fear. There had always been something about heights that disturbed her, and now she could feel the full force of this unease.',
      categories: ['shoes'],
      size:['S', 'M', 'L', 'XL'],
      price:200,
      img:"https://www.pngarts.com/files/2/Shoes-PNG-Background-Image.png",
    },
    {
      title: 'Gucci Shoes For Women',
      desc:'She nervously peered over the edge. She understood in her mind that the view was supposed to be beautiful, but all she felt was fear. There had always been something about heights that disturbed her, and now she could feel the full force of this unease.',
      categories: ['shoes'],
      size:['S', 'M', 'L', 'XL'],
      price:45,
      img:"https://www.pngarts.com/files/2/Gucci-Shoes-For-Women-Transparent-Images.png",
    },
    {
      title: 'T-shirt aka',
      desc:'She nervously peered over the edge. She understood in her mind that the view was supposed to be beautiful, but all she felt was fear. There had always been something about heights that disturbed her, and now she could feel the full force of this unease.',
      categories: ['t-shirt'],
      size:['S', 'M', 'L', 'XL'],
      price:76,
      img:"https://www.pngarts.com/files/1/T-Shirt-PNG-Transparent-Image.png",
    },
    {
      title: 'Paint aka',
      desc:'She nervously peered over the edge. She understood in her mind that the view was supposed to be beautiful, but all she felt was fear. There had always been something about heights that disturbed her, and now she could feel the full force of this unease.',
      categories: ['pant'],
      size:['S', 'M', 'L', 'XL'],
      price:88,
      img:"https://www.pngarts.com/files/1/Pant-Transparent-Image.png",
    },
    {
      title: 'Another pant',
      desc:'She nervously peered over the edge. She understood in her mind that the view was supposed to be beautiful, but all she felt was fear. There had always been something about heights that disturbed her, and now she could feel the full force of this unease.',
      categories: ['pant'],
      size:['S', 'M', 'L', 'XL'],
      price:77,
      img:"https://www.pngarts.com/files/1/Pant-PNG-Transparent-Image.png",
    },
    {
      title: 'Women T Shirt',
      desc:'She nervously peered over the edge. She understood in her mind that the view was supposed to be beautiful, but all she felt was fear. There had always been something about heights that disturbed her, and now she could feel the full force of this unease.',
      categories: ['t-shirt'],
      size:['S', 'M', 'L', 'XL'],
      price:99,
      img:"https://www.pngarts.com/files/3/Women-T-Shirt-Transparent-Image.png",
    },
]

module.exports = { popularProducts };