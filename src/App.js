import logo from './logo.svg';
import './App.css';
import {useSelector} from 'react-redux'
import {useDispatch} from 'react-redux'
import {getStores, Customers, getItems, getOrders, placeOrders, putItemsAPI} from './state/action-creators/index'

function App() {
  const dispatch = useDispatch()
  const data = useSelector((state)=>state.store)
  const customer = useSelector((state)=>state.customer)
  const items = useSelector((state)=>state.items)
  const orders = useSelector((state)=>state.orders)
  const placeorder = useSelector((state)=>state.placeorder)
  const putItems = useSelector((state)=>state.putItems)
  return (
    <div>
      <button
        onClick={() => {
        dispatch(getStores());
        }}
      >
        store
      </button>
      {JSON.stringify(data, null, 2)}
      <br/>
      <button
        onClick={() => {
        dispatch(Customers());
        }}
      >
        customer
      </button>
      {JSON.stringify(customer, null, 2)}
      <br/>
      <button
        onClick={() => {
        dispatch(getItems());
        }}
      >
        getItems
      </button>
      {JSON.stringify(items, null, 2)}
      <br/>
      <button
        onClick={() => {
        dispatch(getOrders());
        }}
      >
        getOrders
      </button>
      {JSON.stringify(orders, null, 2)}
      <br/>
      <button
        onClick={() => {
        dispatch(placeOrders());
        }}
      >
        placeOrders
      </button>
      {JSON.stringify(placeorder, null, 2)}
      <br/>
      <button
        onClick={() => {
        dispatch(putItemsAPI());
        }}
      >
        putItems
      </button>
      {JSON.stringify(putItems, null, 2)}
    </div>
  );
}

export default App;
