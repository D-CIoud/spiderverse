const spiderman = require("../app/spiderman");

describe("Unit Tests for Spider-Man Class", () => {
  test("1) Create an Spider-Man object", () => {
    //Instanciamos un objeto de la clase Spider-Man y lo cargamos con datos
    const andrewGarfield = new spiderman("Spider-Man Sony",31,"Andrew Garfield",2,"Sony Pictures")
    expect(andrewGarfield.name).toBe("Spider-Man Sony")
    expect(andrewGarfield.age).toBe(31)
    expect(andrewGarfield.actor).toBe("Andrew Garfield")
    expect(andrewGarfield.nummovies).toBe(2)
    expect(andrewGarfield.production).toBe("Sony Pictures")
  });

  test("2) Use the method GetInfo", () => {
    //Instanciamos un objeto de la clase Spider-Man y lo cargamos con datos
    const tomHolland = new spiderman("Spider-Man Marvel",25,"Tom Holland",5,"Marvel Studios")
    expect(tomHolland.getInfo()).toBe("Hey, I'm Tom Holland from Marvel Studios.")
  });
});
