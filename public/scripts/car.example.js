class Car {
  static list = [];

  static init(cars) {
    this.list = cars.map((i) => new this(i));
  }

  constructor({
    id,
    plate,
    manufacture,
    model,
    image,
    rentPerDay,
    capacity,
    description,
    transmission,
    available,
    type,
    year,
    options,
    specs,
    availableAt,
  }) {
    this.id = id;
    this.plate = plate;
    this.manufacture = manufacture;
    this.model = model;
    this.image = image;
    this.rentPerDay = rentPerDay;
    this.capacity = capacity;
    this.description = description;
    this.transmission = transmission;
    this.available = available;
    this.type = type;
    this.year = year;
    this.options = options;
    this.specs = specs;
    this.availableAt = availableAt;
  }

  render() {
    return `
    <div class="col-12 col-md-4 col-lg-4 mb-4">
    <div class="border rounded p-3">
          <div class="position-relative mb-4">
            <img class="img-fluid" src="${this.image}" alt="" style="height:70vh;">
          </div>
          <p class="text-muted custom-paragraf">${this.manufacture}/${this.type}</p>
          <h6 class="h6 fw-bold">${this.rentPerDay} / hari
          </h6>
          <p class="text-muted custom-paragraf">${this.description}</p>
          <p class="text-muted custom-paragraf"><img src="images/fi_users.png" alt=""><span class="ps-2">${this.capacity} Orang</span>
          </p>
          <p class="text-muted custom-paragraf"><img src="images/fi_settings.png" alt=""><span
              class="ps-2">${this.transmission}</span></p>
          <p class="text-muted custom-paragraf"><img src="images/fi_calendar.png" alt=""><span class="ps-2">Tahun
              ${this.year}</span></p>
          <a class="d-flex align-items-center justify-content-center" href="#" style="text-decoration: none;">
            <button type="button" class="btn btn-success w-100">Pilih Mobil</button>
          </a>
        </div>
        </div>
    `;
  }
}
