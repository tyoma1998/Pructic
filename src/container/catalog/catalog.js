import React, {Component} from 'react'
import classes from './catalog.module.css'
import Icon from '../../component/icon/icon'
import axios from 'axios'

class Catalog extends Component {
    state = {
        products: [
            // {
            //   id: 12,
            //   sku: 12064273040195392,
            //   title: "Cat Tee Black T-Shirt",
            //   description: "4 MSL",
            //   availableSizes: ["S", "XS"],
            //   style: "Black with custom print",
            //   price: 10.9,
            //   installments: 9,
            //   currencyId: "USD",
            //   currencyFormat: "$",
            //   isFreeShipping: true
            // },
        
            // {
            //     id: 13,
            //     sku: 51498472915966366,
            //     title: "Dark Thug Blue-Navy T-Shirt",
            //     description: "",
            //     availableSizes: ["M"],
            //     style: "Front print and paisley print",
            //     price: 29.45,
            //     installments: 5,
            //     currencyId: "USD",
            //     currencyFormat: "$",
            //     isFreeShipping: true
            //   },

            //   {
            //     id: 13,
            //     sku: 51498472915966366,
            //     title: "Dark Thug Blue-Navy T-Shirt",
            //     description: "",
            //     availableSizes: ["M"],
            //     style: "Front print and paisley print",
            //     price: 29.45,
            //     installments: 5,
            //     currencyId: "USD",
            //     currencyFormat: "$",
            //     isFreeShipping: true
            //   },
              
            ],
    }
    

    async componentDidMount() {
        try{
            const response = await axios.get('https://simplereactshop.herokuapp.com/api/products')
            
            const products = []

            Object.keys(response.data).forEach((key, index) =>{
                products.push({ 
                    key,
                    index
                })
                
            })

            this.setState({
                products
            })

            
            console.log(this.state.products)

        } catch (e) {
            console.log("error!!!!!!!!!!!!")
        }
        
    }

    render() {
        return (
            <div className={classes.catalog}>
                <div className={classes.head}>
                    <p>Sizes:</p>
                    <button>xs</button>
                    <button>s</button>
                    <button>m</button>
                    <button>l</button>
                    <button>xl</button>
                    <button>xxl</button>
                </div>
                <div className={classes.filter}>
                    <p>gdfgfd</p>
                </div>
                <div className={classes.iconCont}>

                  {this.state.products.map((answer, index) =>
                   {return(
                     <Icon className={classes.icon}
                        answer = {answer}
                     // value = {this.state.products.map((value) => {return })}
                      />
                   )})
    }
                </div>
            </div>
        );
    }
    
}

export default Catalog