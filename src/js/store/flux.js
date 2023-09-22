const baseURL = "https://www.swapi.tech/api";

const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      favorites: [],
      people: {
        items: [],
        next: "",
      },
      vehicles: {
        items: [],
        next: "",
      },
      planets: {
        items: [],
        next: "",
      },
      personCache: new Map(),
      vehicleCache: new Map(),
      planetCache: new Map(),
    },
    actions: {
      // Use getActions to call a function within a function
      // exampleFunction: () => {
      //   getActions().changeColor(0, "green");
      // },
      toggleFavorite: (type, uid, object) => {
        let store = getStore();
        console.log(
          `Toggle ${JSON.stringify({ type: type, uid: uid, value: object })}`
        );
        console.log(store.favorites);

        const itemInFavorites = (fav) => fav.type === type && fav.uid === uid;
        if (store.favorites.some(itemInFavorites)) {
          console.log("exists, will be deleted");
          store.favorites = store.favorites.toSpliced(
            store.favorites.findIndex(itemInFavorites),
            1
          );
        } else {
          console.log("does not exist, will be created");
          store.favorites = store.favorites.concat({
            type: type,
            uid: uid,
            value: object,
          });
        }

        console.log(store.favorites);

        setStore(store);
      },
      removeFromFavorites: (type, uid) => {
        let store = getStore();
        store.favorites = store.favorites.filter(
          (fav) => fav.type !== type || fav.uid !== uid
        );
        setStore(store);
      },
      loadFirstPage: async () => {
        const loadPeople = await (await fetch(`${baseURL}/people`)).json();
        const loadVehicles = await (await fetch(`${baseURL}/vehicles`)).json();
        const loadPlanets = await (await fetch(`${baseURL}/planets`)).json();

        let store = getStore();
        store.people.items = store.people.items.concat(loadPeople.results);
        store.people.next = loadPeople.next;

        store.vehicles.items = store.vehicles.items.concat(
          loadVehicles.results
        );
        store.vehicles.next = loadVehicles.next;

        store.planets.items = store.planets.items.concat(loadPlanets.results);
        store.planets.next = loadPlanets.next;

        setStore(store);

        /**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
      },
      loadNextPeople: async () => {
        let store = getStore();

        const loadPeople = await (await fetch(`${store.people.next}`)).json();
        store.people.items = store.people.items.concat(loadPeople.results);
        store.people.next = loadPeople.next;

        setStore(store);
      },
      loadNextVehicles: async () => {
        let store = getStore();

        const loadVehicles = await (
          await fetch(`${store.vehicles.next}`)
        ).json();
        store.vehicles.items = store.vehicles.items.concat(
          loadVehicles.results
        );
        store.vehicles.next = loadVehicles.next;

        setStore(store);
      },
      loadNextPlanets: async () => {
        let store = getStore();

        const loadPlanets = await (await fetch(`${store.planets.next}`)).json();
        store.planets.items = store.planets.items.concat(loadPlanets.results);
        store.planets.next = loadPlanets.next;

        setStore(store);
      },
      loadPerson: (uid) => {
        const store = getStore();
        if (store.personCache.has(uid)) {
          return store.personCache.get(uid);
        }

        const personPromise = async () => {
          const person = (
            await (await fetch(`${baseURL}/people/${uid}`)).json()
          ).result.properties;

          let store = getStore();
          store.personCache.set(uid, person);
          setStore(store);
        };
        personPromise();

        return {
          height: "Loading...",
          mass: "Loading...",
          hair_color: "Loading...",
          skin_color: "Loading...",
          eye_color: "Loading...",
          birth_year: "Loading...",
          gender: "Loading...",
          created: "Loading...",
          edited: "Loading...",
          name: "Loading...",
          homeworld: "Loading...",
          url: "Loading...",
        };
      },
      loadVehicle: (uid) => {
        const store = getStore();
        if (store.vehicleCache.has(uid)) {
          return store.vehicleCache.get(uid);
        }

        const vehiclePromise = async () => {
          const person = (
            await (await fetch(`${baseURL}/vehicles/${uid}`)).json()
          ).result.properties;

          let store = getStore();
          store.vehicleCache.set(uid, person);
          setStore(store);
        };
        vehiclePromise();

        return {
          model: "Loading...",
          vehicle_class: "Loading...",
          manufacturer: "Loading...",
          cost_in_credits: "Loading...",
          length: "Loading...",
          crew: "Loading...",
          passengers: "Loading...",
          max_atmosphering_speed: "Loading...",
          cargo_capacity: "Loading...",
          consumables: "Loading...",
          films: [],
          pilots: [],
          created: "Loading...",
          edited: "Loading...",
          name: "Loading...",
          url: "Loading...",
        };
      },
      loadPlanet: (uid) => {
        const store = getStore();
        if (store.planetCache.has(uid)) {
          return store.planetCache.get(uid);
        }

        const planetPromise = async () => {
          const person = (
            await (await fetch(`${baseURL}/planets/${uid}`)).json()
          ).result.properties;

          let store = getStore();
          store.planetCache.set(uid, person);
          setStore(store);
        };
        planetPromise();

        return {
          diameter: "Loading...",
          rotation_period: "Loading...",
          orbital_period: "Loading...",
          gravity: "Loading...",
          population: "Loading...",
          climate: "Loading...",
          terrain: "Loading...",
          surface_water: "Loading...",
          created: "Loading...",
          edited: "Loading...",
          name: "Loading...",
          url: "Loading...",
        };
      },
      //   changeColor: (index, color) => {
      //     //get the store
      //     const store = getStore();

      //     //we have to loop the entire demo array to look for the respective index
      //     //and change its color
      //     const demo = store.demo.map((elm, i) => {
      //       if (i === index) elm.background = color;
      //       return elm;
      //     });

      //     //reset the global store
      //     setStore({ demo: demo });
      //   },
    },
  };
};

export default getState;
