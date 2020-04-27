import React, {Component} from 'react'
import classes from './catalog.module.css'
import Icon from '../../component/icon/icon'
import BtnFilter from '../../component/btnFilter/btnFilter'
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
            //     id: 12,
            //     sku: 12064273040195392,
            //     title: "Cat Tee Black T-Shirt",
            //     description: "4 MSL",
            //     availableSizes: ["S", "XS"],
            //     style: "Black with custom print",
            //     price: 10.9,
            //     installments: 9,
            //     currencyId: "USD",
            //     currencyFormat: "$",
            //     isFreeShipping: true
            //   },
          
            //   {
            //       id: 13,
            //       sku: 51498472915966366,
            //       title: "Dark Thug Blue-Navy T-Shirt",
            //       description: "",
            //       availableSizes: ["M"],
            //       style: "Front print and paisley print",
            //       price: 29.45,
            //       installments: 5,
            //       currencyId: "USD",
            //       currencyFormat: "$",
            //       isFreeShipping: true
            //     },
             
              
            ],

            buttonFilter: ['XS', 'S', 'M', 'L', 'XL', 'XXL']
    }
    

   
    async componentDidMount() {
        try{
            const response = await axios.get('https://simplereactshop.herokuapp.com/api/products')
            
            const prod = []

            response.data.products.forEach((key) =>{
                prod.push(key)    
            })

            this.setState({
                products: prod,
            })

        

        } catch (e) {
            console.log("error!!!!!!!!!!!!")
        }
        
    }

    qwers = () =>{
        console.log("ggg")
    }


    render() {
        return (
            <div className={classes.catalog}>
                <div className={classes.head}>

                <p>Sizes:</p>
                    {
                        this.state.buttonFilter.map((answerBtn, index) =>{
                            // {console.log(answerBtn, index)}
                            return(
                            <BtnFilter 
                            key = {index}
                            index= {index}
                            answerBtn = {answerBtn}
                            />
                        )})
                    }


                   
                    {/* <button>xs</button>
                    <button>s</button>
                    <button>m</button>
                    <button>l</button>
                    <button>xl</button>
                    <button>xxl</button> */}
                </div>
                <div className={classes.filter}>
                    <div>
                      <p>16 Product(s)</p>
                    </div>
                    <div>
                      <p>Order</p>
                      <select>
                        <option>select</option>
                        <option>select1</option>
                        <option>select2</option>                    
                      </select>  
                    </div>
                   
                </div>
                <div className={classes.iconCont}>

                  {this.state.products.map((answer, index) =>
                   {return(
                     <Icon 
                        key = {index}
                        answer = {answer}
                
                      />
                   )})
    }
                </div>
            </div>
        );
    }
    
}

export default Catalog