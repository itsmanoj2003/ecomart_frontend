import React, { useEffect, useState } from "react";
import axios from 'axios';
import "./AdminOffers.css";
import { useNavigate } from "react-router-dom";

export default function AdminOffers() {

  const navigate=useNavigate()

  const[quantity,setQuantity]=useState(['1Kg','500g'])

  const [formData, setFormData] = useState({
    offerName: "",
    percentage: "",
    startDate: "",
    endDate: "",
    products: [{ id: 1, productName: "", originalPrice: "", discountPrice: "", image: "", quantity:""}]
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleProductChange = (index, e) => {
    const { name, value } = e.target;
    const updatedProducts = [...formData.products];
    updatedProducts[index][name] = value;
    setFormData({ ...formData, products: updatedProducts });
  };

  const addProduct = (e) => {
    e.preventDefault();
    setFormData({
      ...formData,
      products: [
        ...formData.products,
        { id: formData.products.length + 1, productName: "", originalPrice: "", discountPrice: "", image: "", quantity:"" }
      ]
    });
  };

  const [offers, setOffers] = useState([]);

  useEffect(() => {
    axios.get('https://ecomart-api-c4er.onrender.com/ecomart/getoffers')
      .then(res => setOffers(res.data));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('https://ecomart-api-c4er.onrender.com/ecomart/postoffers', formData)
      .then(res => alert('Offers Posted'));

    setFormData({
      offerName: "",
      percentage: "",
      startDate: "",
      endDate: "",
      products: [{ id: 1, productName: "", originalPrice: "", discountPrice: "", image: "", quantity:"" }]
    });
  };

  const handleDeleteProduct = (index) => {
    setFormData((prevState) => ({
      ...prevState,
      products: prevState.products.filter((_, i) => i !== index),
    }));
  };


  // Delete Offers

  const handleDelete = async (id) => {
    try {
      await axios.delete(`https://ecomart-api-c4er.onrender.com/ecomart/deleteoffer/${id}`);
      alert("Offer Deleted Successfully");
      setOffers(prev => prev.filter(offer => offer._id !== id));
    } catch (err) {
      console.error("Delete failed", err);
    }
  };
  

  return (
    <div className="adminoffers">
      <div className="offers-formcontainer">
      <button className='offersback-btn' onClick={()=>navigate(-1)}>Back</button>
        <h1 className="adminofferpage-heading">Special Offers Control Panel</h1><br/>
        <form className="offers-form" onSubmit={handleSubmit}>
          <input type="text" name="offerName" placeholder="Name of the Offer" className="admin-offersinput" value={formData.offerName} required onChange={handleInputChange} /><br />
          <input type="number" name="percentage" placeholder="Percentage" className="admin-offersinput" value={formData.percentage} required onChange={handleInputChange} min="1"/><br />
          <input type="date" name="startDate" className="admin-offersinput" value={formData.startDate} required onChange={handleInputChange} /><br />
          <input type="date" name="endDate" className="admin-offersinput" value={formData.endDate} required onChange={handleInputChange} /><br />

          <div className="adminoffers-container">
            {formData.products.map((product, index) => (
              <div key={index} className="adminoffers-productdetails">
                <div className="adminoffers-productslist">
                  <h2 className="product-headcount">Product {index + 1}</h2>
                  <input type="text" name="productName" placeholder="Product Name" className="admin-productoffersinput" value={product.productName} onChange={(e) => handleProductChange(index, e)} required /><br />
                  <input type="number" name="originalPrice" placeholder="Original Price" className="admin-productoffersinput" value={product.originalPrice} onChange={(e) => handleProductChange(index, e)} min="1" required /><br />
                  <input type="number" name="discountPrice" placeholder="Discount Price" className="admin-productoffersinput" value={product.discountPrice} onChange={(e) => handleProductChange(index, e)} min="1" required /><br />
                  <input type="text" name="image" placeholder="Image" className="admin-productoffersinput" value={product.image} onChange={(e) => handleProductChange(index, e)} required /><br />
                  <select name="quantity" value={product.quantity} className="admin-productoffersselect" onChange={(e)=>handleProductChange(index,e)} required>
                    <option value={''}>Select Quantity</option>
                    {quantity.map(x=>(<option value={x}>{x}</option>))}
                  </select>
                  <button onClick={() => handleDeleteProduct(index)} className="offersproductdelete-btn">Delete</button>
                </div>
              </div>
            ))}
          </div>

          <button onClick={addProduct} className="addproducts-btn">Add Product</button><br />
          <button type="submit" className="postorders-btn">Post Offer</button>
        </form>
        <hr/>
      </div>

      <div className="offerslist">
        <h1 className="offerslist-heading">Offers List</h1>
        {offers.map((x, key) => (
          <div className="offers-container" key={key}>
            <h1>{x.offerName}</h1>
            <button onClick={() => handleDelete(x._id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}