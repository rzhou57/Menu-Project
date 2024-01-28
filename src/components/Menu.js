import React from 'react'
import MenuItem from './MenuItem'
import Receipt from './Receipt'

const menuItems = [
  {
    name: '2 Chili Dogs',
    price: '$6.99',
    picture:
      'https://res.cloudinary.com/bog/image/upload/v1568150191/chili-dogs.jpg',
  },
  {
    name: 'Classic Hamburger',
    price: '$5.49',
    picture:
      'https://res.cloudinary.com/bog/image/upload/v1568150440/hamburger.jpg',
  },
  {
    name: 'Glorified Bacon Cheeseburger',
    price: '$6.99',
    picture:
      'https://res.cloudinary.com/bog/image/upload/v1568150499/bacon-cheese.jpg',
  },
  {
    name: 'Chicken sandwich',
    price: '$7.12',
    picture:
      'https://res.cloudinary.com/bog/image/upload/v1568150467/chicken-sammy.jpg',
  },
  {
    name: 'Classic Dog',
    price: '$4.49',
    picture:
      'https://res.cloudinary.com/bog/image/upload/v1568150520/classic-dog.jpg',
  },
  {
    name: 'Classic cheeseburger',
    price: '$5.99',
    picture:
      'https://res.cloudinary.com/bog/image/upload/v1568150542/classic-cheese.jpg',
  },
]

function Menu() {
  const[purchasedItems, setPurchasedItem] = React.useState([])

  const addPurchasedItems = purchasedItem => 
  {setPurchasedItem([...purchasedItems, purchasedItem])}

  const removePurchasedItems = name =>
  {setPurchasedItem(purchasedItems.filter(item => name !== item.name))}

  //pass down the function to update the state in the MenuItem component, and pass the state variable as a prop to Receipt, as something 
  // to be updated

  return (
    <section>
      <dl>
        {menuItems.map(menuItem => {
          return (
            <MenuItem
              name={menuItem.name}
              price={menuItem.price}
              picture={menuItem.picture}
              addPurchasedItems = {addPurchasedItems}
              removePurchasedItems = {removePurchasedItems}
            />
          )
        })}
      </dl>
      <Receipt purchasedItems={purchasedItems} />
    </section>
  )
}

export default Menu
