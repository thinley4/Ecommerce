const imagesArray = [
    {
        url: 'https://images-eu.ssl-images-amazon.com/images/G/3…QC-PC-186x116--B08RDL6H79._SY116_CB667322346_.jpg'
    },
    {
        url: 'https://images-eu.ssl-images-amazon.com/images/G/3…QC-PC-186x116--B08345R1ZW._SY116_CB667322346_.jpg'
    },
    {
        url: 'https://images-eu.ssl-images-amazon.com/images/G/3…QC-PC-186x116--B07G5J5FYP._SY116_CB667322346_.jpg'
    },
    {
        url: 'https://images-eu.ssl-images-amazon.com/images/G/3…/GATEWAY/MSO/186x116---wm._SY116_CB667322346_.jpg'
    }
]
const arr = [
    {
      url: 'https://images-eu.ssl-images-amazon.com/images/G/31/OHL/24/BAU/feb/PC_hero_1_2x_1._CB582889946_.jpg'
    },
    {
      url: 'https://images-eu.ssl-images-amazon.com/images/G/31/img22/Toys/GW/GW-Hero-PC_BBAug23_Soft-toys_with-Apay_Lifestyle_2x._CB597740150_.jpg'
    },
    {
      url: 'https://images-eu.ssl-images-amazon.com/images/G/31/OHL/24/BAU/feb/PC_hero_1_2x_1._CB582889946_.jpg'
    },
    {
      url: 'https://images-eu.ssl-images-amazon.com/images/G/31/img22/Toys/GW/GW-Hero-PC_BBAug23_Soft-toys_with-Apay_Lifestyle_2x._CB597740150_.jpg'
    },
    {
      url: 'https://images-eu.ssl-images-amazon.com/images/G/31/INSLGW/ubs_pc_unrec._CB558367776_.png'
    }
  ]

let random = Math.floor(Math.random() * arr.length);
let currentImage = arr[random];

export default currentImage;
// export default arr;