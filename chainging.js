const maiyaManus = {
    name:'dibo na',
    address:"jana nai",
    ags:"bola jabe na",
    phone:987633983039,
    others: {
        father:'baba',
        prof:'Boka deya',
        property:{
            first:'bari',
            second:'food',
            third:'dominated',
        }
    }

}

const home = maiyaManus?.others?.property?.first;
// console.log(home);


const products = [
    {name: "shirt",price:5900,quantity:55},
    {name: "T-shirt",price:900,quantity:5},
    {name: "moner manus",price:100,quantity:10},
]
for(const product of products){
    console.log(product.price);
}