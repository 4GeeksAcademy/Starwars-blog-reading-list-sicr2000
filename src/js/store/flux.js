const baseURL = "https://www.swapi.tech/api";

const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      demo: [
        {
          title: "FIRST",
          background: "white",
          initial: "white",
        },
        {
          title: "SECOND",
          background: "white",
          initial: "white",
        },
      ],
      people: [],
      vehicles: [],
      planets: [],
      personCache: new Map(),
      vehicleCache: new Map(),
      planetCache: new Map(),
    },
    actions: {
      // Use getActions to call a function within a function
      exampleFunction: () => {
        getActions().changeColor(0, "green");
      },
      loadFirstPage: async () => {
        const loadPeople = (await (await fetch(`${baseURL}/people`)).json())
          .results;
        const loadVehicles = (await (await fetch(`${baseURL}/vehicles`)).json())
          .results;
        const loadPlanets = (await (await fetch(`${baseURL}/planets`)).json())
          .results;

        let store = getStore();
        store.people = store.people.concat(loadPeople);
        store.vehicles = store.vehicles.concat(loadVehicles);
        store.planets = store.planets.concat(loadPlanets);
        setStore(store);

        /**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
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
			"height": "...",
			"mass": "...",
			"hair_color": "...",
			"skin_color": "...",
			"eye_color": "...",
			"birth_year": "...",
			"gender": "...",
			"created": "...",
			"edited": "...",
			"name": "...",
			"homeworld": "...",
			"url": "..."
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
