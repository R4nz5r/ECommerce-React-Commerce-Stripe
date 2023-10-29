import React from 'react'
import { Grid } from '@material-ui/core'
import Product from './Product/Product'
 

const products = [
    {id:1, name:'Shoes' ,description:'Running shoes' ,price: "$5" ,image:"https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=1170&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {id:2, name:'Macbook' ,description:'Apple mackbook' ,price: "$15", image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRI5H7inY9J3CV5Ft9zud3jHH7Ed5PDpJm3PxNHrN1XaaexfBCtl38br-k8ex-yjeYjyZo&usqp=CAU"},
] 

const Products = () => {
  return (
    <main>
        <Grid container justify='center' spacing={4}>
            {products.map((product) =>(
                <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                    <Product product={product} />
                </Grid>
            ))}
        </Grid>
    </main>
  )
}

export default Products