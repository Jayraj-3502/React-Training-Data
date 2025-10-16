import { createContext, useContext, useEffect, useReducer } from "react";
import { useFetch } from "../data/fetchData";
import { useNavigate } from "react-router-dom";

const DataContext = createContext();

const initialStates = {
  users: [
    {
      user_name: "Jairaj rathod",
      email: "rathodjairaj805@gmail.com",
      password: "asdfghjkl",
    },
    {
      user_name: "piyush",
      emial: "piyush69@gmail.com",
      password: "piyush69",
    },
  ],
  productsData: [],
  currentUserData: {},
  currentProductData: {},
};

const reducer = (state, action) => {
  switch (action.type) {
    case "products":
      console.log("Products");
      return {
        ...state,
        productsData: action.payload,
      };
    case "editingProduct":
      console.log("Editing Product");
      return {
        ...state,
        currentProductData: action.payload,
      };
    case "edited":
      console.log("Edited");
      const newProductData = editingData(state, action);
      return {
        ...state,
        productsData: newProductData,
      };
    case "delete":
      console.log("Deleting");
      deleteData(action.payload);
      return {
        ...state,
        productsData: state.productsData.map((item) => {
          return item;
        }),
      };
    case "add":
      console.log("Adding");
      postData(action.payload);
      return {
        ...state,
        productsData: [...state.productsData, action.payload],
      };
    case "add_user":
      console.log("Adding User");
      return {
        ...state,
        users: [...state.users, action.payload],
      };
    case "current_user_update":
      console.log("Current User Update");
      updateCurrentUserData(action.payload);
      return {
        ...state,
        currentUserData: action.payload,
      };

    default:
      console.log("This is default");
      break;
  }
};

function updateCurrentUserData(data) {
  localStorage.setItem("currentUserDetails", JSON.stringify(data));
}

function setCurrentUserData() {}

// Editing Data
function editingData(state, action) {
  const data = state.productsData.map((item) => {
    if (item.id === action.payload.id) {
      console.log("runed");
      return action.payload;
    } else {
      console.log("runed");
      return item;
    }
  });

  putData(action.payload, `products/${action.payload.id}`);

  return data;
}

// Deleting the item using ID
async function deleteData({ id, dispatch }) {
  try {
    const responce = useFetch({
      mainURL: `products/${id}`,
      method: "DELETE",
    });
    const res = await responce;
    if (res) {
      fetchProductsData(dispatch);
    }
  } catch (err) {
    console.log(err);
  }
}

async function putData(data, mainURL) {
  console.log(data);
  try {
    const responce = useFetch({
      mainURL: mainURL,
      method: "PUT",
      header: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    const res = await responce;
  } catch (err) {
    console.log(err);
  }
}

async function postData(data) {
  console.log(data);
  try {
    const responce = useFetch({
      mainURL: "products",
      method: "POST",
      header: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    const res = await responce;
  } catch (err) {
    console.log(err);
  }
}

function fetchingCurrentUserData(dispatch) {
  const data = JSON.parse(localStorage.getItem("currentUserDetails"));
  dispatch({ type: "current_user_update", payload: data });
}

// Fetching data for initial use
async function fetchProductsData(dispatch) {
  const data = await useFetch({ mainURL: "products", method: "GET" });
  dispatch({ type: "products", payload: data });
}

export const DataContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialStates);

  useEffect(() => {
    fetchProductsData(dispatch);
    fetchingCurrentUserData(dispatch);
  }, []);

  return (
    <DataContext.Provider value={{ state, dispatch }}>
      {children}
    </DataContext.Provider>
  );
};

export const useProductContext = () => useContext(DataContext);
