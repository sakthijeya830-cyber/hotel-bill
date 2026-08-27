 
let total = 0;

function calculate(item) {

    if (item === 'idly') {
        total +=  10;

    } 
    else if (item === 'dosa') {
        total += 30;
    } 
    else if (item === 'pongal') {
        total += 40;
    } 
    else if (item === 'poori') {
        total += 50;
    } 
    else if(item ==='uppuma'){
        total +=35;
    }
    else if (item === 'chicken Briyani') {
        total +=120 ;
    } 
    else if (item === 'veg Meals') {
        total +=110;
    } 
    else if (item === 'Fish Rise') {
        total +=150;
    } 
    else if (item === 'Mutton Biriyani') {
        total +=180;
    } 
    else if(item ==='Curd Rise'){
        total +=50;
    }
    else if (item === 'Chicken Rise') {
        total +=130;
    } 
    else if (item === 'Veg Rise') {
        total +=100;
    } 
    else if (item === 'Parota') {
        total +=50;
    } 
    else if (item === 'noodles') {
        total += 80;
    } 
    else if(item ==='Egg Parota'){
        total +=90;
    }

    
    document.getElementById("total").innerText = total;
}


    function calculate1(item) {

    if (item === 'idly') {
        total -=  10;

    } 
    else if (item === 'dosa') {
        total -= 30;
    } 
    else if (item === 'pongal') {
        total -= 40;
    } 
    else if (item === 'poori') {
        total -= 50;
    } 
    else if(item ==='uppuma'){
        total -=35;
    }
    else if (item === 'chicken Briyani') {
        total -=120 ;
    } 
    else if (item === 'veg Meals') {
        total -=110;
    } 
    else if (item === 'Fish Rise') {
        total -=150;
    } 
    else if (item === 'Mutton Biriyani') {
        total -=180;
    } 
    else if(item ==='Curd Rise'){
        total -=50;
    }
    else if (item === 'Chicken Rise') {
        total -=130;
    } 
    else if (item === 'Veg Rise') {
        total -=100;
    } 
    else if (item === 'Parota') {
        total -=50;
    } 
    else if (item === 'noodles') {
        total -= 80;
    } 
    else if(item ==='Egg Parota'){
        total -=90;
    }






    

    document.getElementById("total").innerText = total;
}

        
          



        
    
    
