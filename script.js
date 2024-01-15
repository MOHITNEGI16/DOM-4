const products = [
    {id: 1, name: "Product-1", price:100},
    {id: 2, name: "Product-2", price:200},
    {id: 3, name: "Product-3", price:300},
    ];

const product = document.getElementById("product");
const minus = document.getElementsByClassName("minus");
const add = document.getElementsByClassName("add");
const cart = document.getElementById("cart");
const cartContainer = document.getElementById("cartContainer");
let arr = [];
let newArr=[];
products.forEach((element)=>{

    let div = document.createElement("div");
    div.className = "proContainer"
     div.innerHTML = `
    
    <div >
        <h3 class="name">${element.name}</h3>
    </div>
    <div >
        <h4 class="price">${element.price}</h4>
    </div>
    <div class="count">
        <span class="minus">-</span>
        <span class="counter">0</span>
        <span class="add">+</span>
      
    </div>

    `

    product.appendChild(div);

    const counterElement = div.querySelector('.counter');
    const minusButton = div.querySelector('.minus');
    const addButton = div.querySelector('.add');

    let counterValue = 0;

    minusButton.addEventListener('click', () => {
        if (counterValue > 0) {
            counterValue--;
            counterElement.textContent = counterValue;
            // console.log(element.name,counterValue);/
            updateCartsContainer({name:element.name,price:element.price,quan:counterValue});
        }
    });

    addButton.addEventListener('click', () => {
        counterValue++;
        counterElement.textContent = counterValue;
        console.log(element.name,counterValue);
        // let obj = {name:element.name,price:element.price,quan:counterValue};
        // console.log(obj);
        updateCartsContainer({name:element.name,price:element.price,quan:counterValue});
        });

   })


   

function updateCartsContainer(obj){
    let flag = false;
    
    if(arr.length===0)arr.push(obj);

    for(let i=0; i<arr.length; i++){
        if(arr[i].name == obj.name){
            arr[i].quan = obj.quan;
            flag = true;
            break;
        }
        else if(arr[i].name != obj.name)flag = false;
        
    }
    
    if(flag == false)arr.push(obj);

    // console.log(arr);
    // console.log("arr" , arr)

     newArr = arr.filter(ele=>ele.quan!=0);
     console.log(newArr)
    if(newArr.length>0){
        uiContainerCart(true);
    }
    else{
        uiContainerCart(false)
    }

//    createUIOfCart(newArr);
}









  

const noProduct = document.getElementById('noProduct');

let added = 0;
const totalPrice = document.getElementById("totalPrice");
// cart dom ui creating 
function uiContainerCart(val){
    // let cartProDiv = document.createElement("div");
    // cartProDiv.className = "cartPro";
    let total =0;
    let cartProDiv='';
    if(val){
    for(let i=0; i<newArr.length;i++){
    // total = 0;
    total += (newArr[i].quan*newArr[i].price);
    cartProDiv += `
    <div class='cartPro'>
    <div class="proInfo"><h3>${newArr[i].name}</h3></div>
    <div class="proQuan"><h3>${newArr[i].quan} X ${newArr[i].price}</h3></div></div>
    `
    // added+=total;
    totalPrice.innerText = total;
}

cartContainer.innerHTML = cartProDiv;

}
else {
    totalPrice.innerText = 0;
    cartContainer.innerHTML = `  
     
     <h4 id="noProduct">No Product added to the cart</h4>
     `;
}

}
 


    