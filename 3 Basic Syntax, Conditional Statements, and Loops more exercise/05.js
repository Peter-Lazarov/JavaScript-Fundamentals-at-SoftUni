function pointsDistance(x1, y1, x2, y2){   
    let distance = Math.pow(x2-x1, 2) + Math.pow(y2-y1,2);
    distance = Math.sqrt(distance);

    console.log(distance);
}

pointsDistance(2, 4, 5, 0);
