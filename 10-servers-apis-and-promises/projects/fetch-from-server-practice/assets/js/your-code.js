const getAllDogs = () => fetch("/dogs");

const getDogNumberTwo = () => fetch("/dogs/2");

const postNewDog = () => fetch("/dogs", {
  method: "POST",
  headers: { "Content-Type": "application/x-www-form-urlencoded" },
  body: new URLSearchParams({
    name: "Sabel",
    age: 12
  })
});

const postNewDogV2 = (name, age) => fetch("/dogs", {
  method: "POST",
  headers: { "Content-Type": "application/x-www-form-urlencoded" },
  body: new URLSearchParams({
    name: name,
    age: age
  })
});

const deleteDog = (id) => fetch(`/dogs/${id}/delete`, {
  method: "POST",
  headers: { AUTH: "ckyut5wau0000jyv5bsrud90y" },
  body: ""
});


export { getAllDogs, getDogNumberTwo, postNewDog, postNewDogV2, deleteDog };