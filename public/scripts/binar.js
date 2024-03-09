function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

class Binar {
  static populateCars = (cars) => {
    return cars.map((car) => {
      const isPositive = getRandomInt(0, 1) === 1;
      const timeAt = new Date();
      const mutator = getRandomInt(1000000, 100000000);
      const availableAt = new Date(timeAt.getTime() + (isPositive ? mutator : -1 * mutator))

      return {
        ...car,
        availableAt,
      };
    })
  }

  static async listCars(penumpang) {
    let cars;
    let cachedCarsString = localStorage.getItem("CARS");

    if (!!cachedCarsString) {
      const cacheCars = JSON.parse(cachedCarsString);
      cars = this.populateCars(cacheCars);
    } else {
      const response = await fetch(
        "https://raw.githubusercontent.com/fnurhidayat/probable-garbanzo/main/data/cars.min.json"
      );
      const body = await response.json();
      cars = this.populateCars(body)

      localStorage.setItem("CARS", JSON.stringify(cars));
    }

    // if (filterer instanceof Function) cars = cars.filter(filterer);
    if (penumpang > 0){
      cars = cars.filter((car)=>car.capacity >= penumpang)

    }
    return cars;
  }
}

async function filteredCars(){
  let inputPenumpang = document.getElementById("Penumpang").value;
  let carContainerElement = document.getElementById("cars-container");
  carContainerElement.innerHTML = "";
  let filterCar = await Binar.listCars(inputPenumpang);
  console.log(filterCar)
  if(filterCar.length < 1){
    carContainerElement.innerHTML = "Tidak ada hasil"
    return;
  }
  filterCar.forEach(car => {
    let carObj = new Car(car);
    carContainerElement.innerHTML += carObj.render()
  });
  return;
}
function isValueExist() {
  let inputPenumpang = document.getElementById("Penumpang").value;
  let button = document.getElementById("btn-cari");

  if (inputPenumpang) {
    button.disabled = false;
  } else {
    button.disabled = true;
  }
}
