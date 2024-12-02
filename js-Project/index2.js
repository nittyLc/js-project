//speed of a
function checkSpeed() {
    const speed = Number(prompt("Enter the speed of the car (in km/h):"));

    if (isNaN(speed) || speed < 0) {
        alert("Please enter a valid speed.");
        return;
    }

    const speedLimit = 70;
    const kmPerPoint = 5;

    if (speed <= speedLimit) {
        alert("Ok");
    } else {
        const demeritPoints = Math.floor((speed - speedLimit) / kmPerPoint);

        if (demeritPoints > 12) {
            alert("License suspended");
        } else {
            alert(`Points: ${demeritPoints}`);
        }
    }
}

checkSpeed();
