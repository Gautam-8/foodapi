//getdata
async function foodshow(url){

    let res = await fetch(url);
    let fdata = await res.json();

    return fdata.meals;

   }

   
//append in container
   function append(fdata,container) {

    container.innerHTML = null;

    fdata.forEach(( {strMeal,strMealThumb,strArea,strCategory,strInstructions,strYoutube} ) => {
    
    let div = document.createElement('div');  div.setAttribute('id','mealdiv')
    
    let p1 = document.createElement('p');  p1.setAttribute('id','meal')
    p1.innerText = strMeal;

    let p2 = document.createElement('p');
    p2.innerText = "Origin :" +" "+strArea; p2.setAttribute('id','origin')

    let p3 = document.createElement('p');
    p3.innerText = "Type :" +" "+strCategory; p3.setAttribute('id','origin')

    let p4 = document.createElement('p');  p4.setAttribute('id','instructions')
    p4.innerText = strInstructions;
    
    let img = document.createElement('img');
    img.src = strMealThumb;
    
    let imgdiv = document.createElement('div');
    imgdiv.append(img);

    let inst = document.createElement('p');
    inst.innerText = "Instructions :";

    let yt = document.createElement('a');
    yt.innerHTML = "video link";
    yt.href= strYoutube;

    let pdiv = document.createElement('div');
    pdiv.append(p1,p2,p3,inst,p4,yt);
    
    div.append(imgdiv,pdiv);
    container.append(div);
    
    })
    
    }


    //for any search to display food
    function foodd(){
  
        let food = document.getElementById('food').value;
        
        let response = foodshow(`https://themealdb.com/api/json/v1/1/search.php?s=${food}`);
        
        response.then( (res) => {
            console.log(res);
   
            let container = document.getElementById('container');
           append(res,container);
        
        })
        
        .catch( (err)=> {
            console.log(err);
        });
   
   }


//recipe of day (random)
   function fooddr(){
  
    let response = foodshow(`https://themealdb.com/api/json/v1/1/random.php`);
    
    response.then( (res) => {
        console.log(res);

        let container = document.getElementById('container');
       append(res,container);
    
    
    })
    
    .catch( (err)=> {
        console.log(err);
    });

}
    
    
    export {foodshow,append,foodd,fooddr}