console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

function printOdds(count) {
    for (let i = 0; i < count; i++) {
        if (i % 2 != 0) {
            console.log(i);
        }
    }
}

printOdds(48);
printOdds(11);

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

function checkAge(userName, age) {
    let aboveSixteen = `Congrats ${userName}, you can drive !`;
    let belowSixteen = `Sorry ${userName}, but you need to wait until you are 16`;
    if (age > 16) {
        console.log(aboveSixteen);
    } else {
        console.log(belowSixteen);
    }
}
console.log(checkAge("Sam", 18));

//Exercise 3 

function whichQuadrant(x, y) {
    if (x > 0 && y > 0) {
        console.log("Quadrant1");
    } else if (x < 0 && y > 0) {
        console.log("Quadrant 2");
    } else if (x < 0 && y < 0) {
        console.log("Quadrant 3");
    } else if (x < 0 && y < 0) {
        console.log("Quadrant 4");
    } else if (x == 0 && y == 0){
        console.log("origin")
    } else if (x == 0){
        console.log("X axis")
    } else if (y == 0){
        console.log("Y axis")
    } else {
        console.log("Not in any quadrant");
    }
}

whichQuadrant(-7, 33);

//Exercise 4

function whichTriangle(side1, side2, side3) {
    let triangleType = "";
    if (side1 == side2 && side1 == side3) {
        triangleType = "equilateral";
    } else if (side1 == side2 || side1 ==side3) {
        triangleType = "isosceles";
    } else {
        triangleType = "scalene"
    }
    return console.log(
        `Sides [${side1}, ${side2}, ${side3}] form a Triangle of Type : ${triangleType}`
    );
}

whichTriangle(2, 2, 3)

// Exercise 5

function dataPlan(planLimit, day, usage){
    const daysRemaining = 30 - day;
    const dataRemaining = planLimit - usage;
    const avgUsageSoFar = usage / day;
    const avgIdealusage = planLimit / 30;
    const projectedUsage = avgUsageSoFar * 30;
    const projectedDataRemaining = planLimit - (projectedUsage);
    const newIdealAvg = dataRemaining / daysRemaining;

    console.log(`${day} days used, ${daysRemaining} days remaining \n
Average daily use: ${avgIdealusage.toFixed(2)} GB/day. `);

if (projectedDataRemaining < 0) {
console.log(`You are EXCEEDING your average daily use (${avgUsageSoFar.toFixed(2)} GB/day),
continuing this high usage, you'll exceed your data plan by
${Math.abs(projectedDataRemaining)} GB.
To stay below your data plan, use no more than ${newIdealAvg.toFixed(2)} GB/day.`);
} else if (projectedDataRemaining > 0) {
        console.log(`You are Below your average daily use (${avgUsageSoFar.toFixed(2)} GB/day),
        continuing this high usage, you'll exceed your data plan by
        ${Math.abs(projectedDataRemaining)} GB.
        To stay below your data plan, use no more than ${newIdealAvg.toFixed(2)} GB/day.`);
} else { 
        console.log(`You are Perfectly matching your average daily use (${avgUsageSoFar.toFixed(2)} GB/day),
        continuing this high usage, you'll have
        ${Math.abs(projectedDataRemaining)} GB left over
        T.`);
        
}

}

dataPlan(100, 15, 56)