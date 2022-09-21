function checkTriangle (x, y, z){

    if(x===y && y===z){
        console.log("All Sides are Equal - Equilateral Trianle")
    }
    else if(x===y || y===z|| x===z){
        console.log("Two sides are Equal - Isocoles Traingle")
    }

    else{
        console.log("None of the sides are equal - Scalene Traingle")
    }
    
}

checkTriangle(5,5,5)