import React from 'react'
import './Home.css'





// import homeimage from '../Components/assets/homeimg.png'
import homeimage from '../Components/assets/groceries.png'
import cartimg from '../Components/assets/cart.png'
import dryproducts from '../Components/assets/dryproducts.png'
import sauce from '../Components/assets/sause.png'
import snacks from '../Components/assets/snacks.png'
import women from '../Components/assets/ladiesbeauty.png'
import men from '../Components/assets/menbeauty.png'
import healthcare from '../Components/assets/healthcare.png'
import dairy from '../Components/assets/dairy.png'
import cleaners from '../Components/assets/cleaners.png'
import devotional from '../Components/assets/devotional.png'
import baby from '../Components/assets/baby.png'
import toys from '../Components/assets/toys.png'
import homeproducts from '../Components/assets/homeproducts.png'
import { useNavigate } from 'react-router-dom'



export default function Home() {
    const navigate=useNavigate()
  return (
    <div className='home'>

        <div className='home-first'>

        <div className='homemain'>

        <div className='homecontent'>

        {/* Mobile Home Image */}
        {/* <div className='mobilehomeimg-container'>
          <img src={homeimage} className='mobilehome-img'/>
        </div> */}
        
        <h1 className='home-title'>EcoMart For<br/>Fresh Grocery</h1>
        <p className='home-description'>Inroduced a new model for online grocery<br/>shopping and convenient home delivery</p>
        <button className='shopnow-btn' onClick={()=>navigate('/products')}>Shop Now ➟</button>

        </div>

        {/* Desktop Home image */}
        <div className='home-img'> 
          <img src={homeimage}/>
        </div>

        </div>

        </div>

        <div className='home-second'> 
              <img src={cartimg} className='home-cartimg'/>

              <div className='homesecond-content'>
              <h2 className='homesecond-title'>Welcome to Eco Mart</h2>
              <p className='homesecond-description'>Get the Fresh Groceries and Goods</p>
              </div>
              <button className='catogiries-btn'>Categories</button>
        </div>


        {/* Categories */}

        <h2 className='categories-title'>Categories</h2>

        <div className='categories'>

        <div className='categories-list'>

              {/* Dry Products */}
            <div className='category'>
                <div className='categories-content'>
                    <div className='categories-desccont'>
                        <h2 className='categories-heading'>Dry and Packed Products</h2>
                        <p className='categories-para'>Grains and Cereals, Flours and Baking Mixes, Legumes and Beans, Nuts, and Seeds</p>
                    </div>
                    <button className='categories-shopbtn' onClick={()=>navigate('/products')}>Shop Now ➟</button>
                </div>
                <img src={dryproducts} className='categories-img'/>
            </div>

            {/* Sauce Products */}
            <div className='category'>
                <div className='categories-content'>
                    <div className='categories-desccont'>
                        <h2 className='categories-heading'>Sauces<br/><br/></h2>
                        <p className='categories-para'>Mayonnaise, Ketchup, Soy Sauce, Hot Sauce, and Mixed Fruit Jam<br/><br/></p>
                    </div>
                    <button className='categories-shopbtn' onClick={()=>navigate('/products')}>Shop Now ➟</button>              
                 </div>
                <img src={sauce} className='categories-img'/>
            </div>

             {/* Snacks Products */} 
            <div className='category'>
                <div className='categories-content'>
                    <div className='categories-desccont'>
                        <h2 className='categories-heading'>Snacks<br/><br/></h2>
                        <p className='categories-para'>Savory Snacks, Sweet Snacks, Homemade Snacks, and Healthy Snacks</p>
                    </div>
                    <button className='categories-shopbtn' onClick={()=>navigate('/products')}>Shop Now ➟</button>
                </div>
                <img src={snacks} className='categories-img'/>
            </div>

            {/* Women beauty products */}
            <div className='category'>
                <div className='categories-content'>
                    <div className='categories-desccont'>
                        <h2 className='categories-heading'>Women's beauty products</h2>
                        <p className='categories-para'>Moisturizers, Sunscreens, Shampoos and Conditioners, Lip Care, and Nail Care</p>
                        <button className='categories-shopbtn' onClick={()=>navigate('/products')}>Shop Now ➟</button>
                    </div>
                </div>
                <img src={women} className='categories-img'/>
            </div>

            {/* Mens beauty products */}
            <div className='category'>
                <div className='categories-content'>
                    <div className='categories-desccont'>
                        <h2 className='categories-heading'>Men's beauty products</h2>
                        <p className='categories-para'>Facial Cleansers, Shaving Products, Hair Care, Body Care, Fragrances, Soap, and Hair Oil</p>
                    </div>
                    <button className='categories-shopbtn' onClick={()=>navigate('/products')}>Shop Now ➟</button>
                </div>
                <img src={men} className='categories-img'/>
            </div>

            {/* Health and care products */}
            <div className='category'>
                <div className='categories-content'>
                    <div className='categories-desccont'>
                        <h2 className='categories-heading'>Health care products</h2>
                        <p className='categories-para'>Over-the-Counter Medicines, and First Aid Products<br/><br/></p>
                        <button className='categories-shopbtn' onClick={()=>navigate('/products')}>Shop Now ➟</button>
                    </div>
                </div>
                <img src={healthcare} className='categories-img'/>
            </div>

            {/* Dairy and Beverages products */}
            <div className='category'>
                <div className='categories-content'>
                    <div className='categories-desccont'>
                        <h2 className='categories-heading'>Dairy and Beverages</h2>
                        <p className='categories-para'>Milk, Cheese, Butter and Ghee, Ice Cream, Soft Drinks, Juices, and Energy and Sports Drinks</p>
                    </div>
                    <button className='categories-shopbtn' onClick={()=>navigate('/products')}>Shop Now ➟</button>
                </div>
                <img src={dairy} className='categories-img'/>
            </div>

            {/* Cleaning products */}
            <div className='category'>
                <div className='categories-content'>
                    <div className='categories-desccont'>
                        <h2 className='categories-heading'>Cleaning products<br/></h2>
                        <p className='categories-para'>Toilet Cleaners, Scrub Pads and Brushes, Floor Cleaners, Glass Cleaners, and Toilet Brushes<br/><br/></p>
                    </div>
                    <button className='categories-shopbtn' onClick={()=>navigate('/products')}>Shop Now ➟</button>
                </div>
                <img src={cleaners} className='categories-img'/>
            </div>
            
            {/* Devotional products */}
            <div className='category'>
                <div className='categories-content'>
                    <div className='categories-desccont'>
                        <h2 className='categories-heading'>Devotional products </h2>
                        <p className='categories-para'>Incense Sticks, and Champer<br/><br/><br/></p>
                    </div>    
                    <button className='categories-shopbtn' onClick={()=>navigate('/products')}>Shop Now ➟</button>
                </div>
                <img src={devotional} className='categories-img'/>
            </div>

            {/* Baby products */}
            <div className='category'>
                <div className='categories-content'>
                    <div className='categories-desccont'>
                        <h2 className='categories-heading'>Baby products</h2>
                        <p className='categories-para'>Diapers, Cashews, Baby Wipes, Diaper Rash Cream, Bottles, Baby Lotion, and Baby Soap/Shampoo</p>
                    </div>
                    <button className='categories-shopbtn' onClick={()=>navigate('/products')}>Shop Now ➟</button>
                </div>
                <img src={baby} className='categories-img'/>
            </div>

            {/* Toys and gifts */}
            <div className='category'>
                <div className='categories-content'>
                    <div className='categories-desccont'>
                        <h2 className='categories-heading'>Toys and gifts</h2>
                        <p className='categories-para'>MyBoxPrinter Custom Clock Packaging Boxes<br/><br/><br/></p>
                    </div>
                    <button className='categories-shopbtn' onClick={()=>navigate('/products')}>Shop Now ➟</button>
                </div>
                <img src={toys} className='categories-img'/>
            </div>

            {/* Home products */}
            <div className='category'>
                <div className='categories-content'>
                    <div className='categories-desccont'>
                        <h2 className='categories-heading'>Home products</h2>
                        <p className='categories-para'>Storage Containers, Kitchenware,Bathroom Accessories, Home Decor, and Cleaning Tools</p>
                    </div>
                    <button className='categories-shopbtn' onClick={()=>navigate('/products')}>Shop With Us</button>
                </div>
                <img src={homeproducts} className='categories-img'/>
            </div>

        </div>

        </div>

        <br/>
        <br/>
        <br/>
        <br/>
        <br/>


    </div>
  )
}
