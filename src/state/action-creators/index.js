// Handle HTTP errors since fetch won't.
function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}


//get Stores API
export function getStores() {
  return dispatch => {
    dispatch(fetchProductsBegin());
    return fetch("https://jsonplaceholder.typicode.com/posts")
      .then(handleErrors)
      .then(res => res.json())
      .then(json => {
        dispatch(fetchProductsSuccess(json));
        return json;
      })
      .catch(error => dispatch(fetchProductsFailure(error)));
  };
}

export const FETCH_PRODUCTS_BEGIN   = 'FETCH_PRODUCTS_BEGIN';
export const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS';
export const FETCH_PRODUCTS_FAILURE = 'FETCH_PRODUCTS_FAILURE';

export const fetchProductsBegin = () => ({
  type: FETCH_PRODUCTS_BEGIN
});

export const fetchProductsSuccess = products => ({
  type: FETCH_PRODUCTS_SUCCESS,
  payload: { products }
});

export const fetchProductsFailure = error => ({
  type: FETCH_PRODUCTS_FAILURE,
  payload: { error }
});

//post customers API
export function Customers() {
  return dispatch => {
    dispatch(CustomerBegin());
    return fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify({
        customer_id: 0,
        full_name: "Sheharyaar",
        phone: "9934112987",
        email: "xyz@abc.com",
        password: "okserver",
        street: "Lal Bahadur Shastri Hall of Residence",
        city: "Kharagpur",
        state: "West Bengal",
        pincode: 721302,
      }),
      headers: {
        "Content-type": "application/json",
      },
    })
      .then(handleErrors)
      .then((res) => res.json())
      .then((json) => {
        dispatch(CustomerSuccess(json));
        return json;
      })
      .catch((error) => dispatch(CustomerFailure(error)));
  };
}

export const CUSTOMER_BEGIN   = 'CUSTOMER_BEGIN';
export const CUSTOMER_SUCCESS = 'CUSTOMER_SUCCESS';
export const CUSTOMER_FAILURE = 'CUSTOMER_FAILURE';

export const CustomerBegin = () => ({
  type: CUSTOMER_BEGIN
});

export const CustomerSuccess = products => ({
  type: CUSTOMER_SUCCESS,
  payload: { products }
});

export const CustomerFailure = error => ({
  type: CUSTOMER_FAILURE,
  payload: { error }
});

//getItems API
export function getItems() {
  return dispatch => {
    dispatch(fetchItemsBegin());
    return fetch("https://jsonplaceholder.typicode.com/posts/1")
      .then(handleErrors)
      .then(res => res.json())
      .then(json => {
        dispatch(fetchItemsSuccess(json));
        return json;
      })
      .catch(error => dispatch(fetchItemsFailure(error)));
  };
}

export const FETCH_ITEMS_BEGIN   = 'FETCH_ITEMS_BEGIN';
export const FETCH_ITEMS_SUCCESS = 'FETCH_ITEMS_SUCCESS';
export const FETCH_ITEMS_FAILURE = 'FETCH_ITEMS_FAILURE';

export const fetchItemsBegin = () => ({
  type: FETCH_ITEMS_BEGIN
});

export const fetchItemsSuccess = products => ({
  type: FETCH_ITEMS_SUCCESS,
  payload: { products }
});

export const fetchItemsFailure = error => ({
  type: FETCH_ITEMS_FAILURE,
  payload: { error }
});


//post getorders API
export function getOrders() {
  return dispatch => {
    dispatch(getOrderBegin());
    return fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify({
        orderID: 0,
      }),
      headers: {
        "Content-type": "application/json",
      },
    })
      .then(handleErrors)
      .then((res) => res.json())
      .then((json) => {
        dispatch(getOrderSuccess(json));
        return json;
      })
      .catch((error) => dispatch(getOrderFailure(error)));
  };
}

export const ORDER_BEGIN   = 'ORDER_BEGIN';
export const ORDER_SUCCESS = 'ORDER_SUCCESS';
export const ORDER_FAILURE = 'ORDER_FAILURE';

export const getOrderBegin = () => ({
  type: ORDER_BEGIN
});

export const getOrderSuccess = products => ({
  type: ORDER_SUCCESS,
  payload: { products }
});

export const getOrderFailure = error => ({
  type: ORDER_FAILURE,
  payload: { error }
});


//post placeOrder API
export function placeOrders() {
  return dispatch => {
    dispatch(placeOrderBegin());
    return fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify({
        store_id: 0,
        OrderItems: [
          {
            item: {
              item_id: 12345,
              price: 69.68,
              name: "Rajma",
            },
            quantity: 0,
            order_id: 1,
          },
        ],
      }),
      headers: {
        "Content-type": "application/json",
      },
    })
      .then(handleErrors)
      .then((res) => res.json())
      .then((json) => {
        dispatch(placeOrderSuccess(json));
        return json;
      })
      .catch((error) => dispatch(placeOrderFailure(error)));
  };
}

export const PLACE_ORDER_BEGIN   = 'PLACE_ORDER_BEGIN';
export const PLACE_ORDER_SUCCESS = 'PLACE_ORDER_SUCCESS';
export const PLACE_ORDER_FAILURE = 'PLACE_ORDER_FAILURE';

export const placeOrderBegin = () => ({
  type: PLACE_ORDER_BEGIN
});

export const placeOrderSuccess = products => ({
  type: PLACE_ORDER_SUCCESS,
  payload: { products }
});

export const placeOrderFailure = error => ({
  type: PLACE_ORDER_FAILURE,
  payload: { error }
});

//put Items API
export function putItemsAPI() {
  return dispatch => {
    dispatch(putItemsBegin());
    return fetch("https://jsonplaceholder.typicode.com/posts/1", {
      method: "PUT",
      body: JSON.stringify({
        item_id: 12345,
      }),
      headers: {
        "Content-type": "application/json",
      },
    })
      .then(handleErrors)
      .then((res) => res.json())
      .then((json) => {
        dispatch(putItemsSuccess(json));
        return json;
      })
      .catch((error) => dispatch(putItemsFailure(error)));
  };
}

export const PUT_ITEMS_BEGIN   = 'PUT_ITEMS_BEGIN';
export const PUT_ITEMS_SUCCESS = 'PUT_ITEMS_SUCCESS';
export const PUT_ITEMS_FAILURE = 'PUT_ITEMS_FAILURE';

export const putItemsBegin = () => ({
  type: PUT_ITEMS_BEGIN
});

export const putItemsSuccess = products => ({
  type: PUT_ITEMS_SUCCESS,
  payload: { products }
});

export const putItemsFailure = error => ({
  type: PUT_ITEMS_FAILURE,
  payload: { error }
});