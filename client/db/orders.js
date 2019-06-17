export default (Orders = [
  {
    id: 1,
    price: 30,
    orderedDate: "02/04/2021",
    orderStatus: "Completed",
    customerEmail: "customer@cust.com",
    customerAddress: "7a Glory St, New York, NY, 10001",
    products: [
      {
        id: 1,
        name: "simple prod",
        quantity: 1,
        price: 10
      },
      {
        id: 2,
        name: "dif prod",
        quantity: 2,
        price: 10
      },
      {
        id: 3,
        name: "other prod",
        quantity: 3,
        price: 10
      }
    ]
  },
  {
    id: 2,
    price: 30,
    orderedDate: "02/04/2021",
    orderStatus: "In Process",
    customerEmail: "new@new.com",
    customerAddress: "7a Glory St, New York, NY, 10001",
    products: [
      {
        id: 4,
        name: "super prod",
        quantity: 4,
        price: 10
      },
      {
        id: 2,
        name: "dif prod",
        quantity: 2,
        price: 10
      },
      {
        id: 4,
        name: "extra prod",
        quantity: 4,
        price: 10
      }
    ]
  }
]);
