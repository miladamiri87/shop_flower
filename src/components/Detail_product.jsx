import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";
import { getProduct } from "../services/contactService"
import Loader_Spinner from "./Loader_Spinner"
import Footer from "./Footer"


export default function Detail_product() {
  const { id_product } = useParams()
  const [state, setState] = useState({
    loading: false,
    product: {}
  })
  useEffect(() => {
    const fetchData = async () => {
      try {
        setState({ ...state, loading: true })
        const { data: productData } = await getProduct(id_product)
        setState({ ...state, loading: false, product: productData })


      } catch (err) {
        console.log(err)
        setState({ ...state, loading: false })
      }
    }
    fetchData()
  }
    , []
  )
  const { loading, product } = state

  return (
    <div id='container_detail_page'>{
      loading ? (<Loader_Spinner />) : (<div id='container_detail_card'>
        <img src={product.img_new_arrival_card} alt="" />
        <div id='detail_content_detail_card'>
          <h2>{product.title_new_arrival_card}</h2>
          <p>{product.cost_new_arrival_card}</p>
          <p>Pay in 4 interest-free installments of $18.75 with  </p>
          <button>Add To Cart</button>
          <p>Imagine this gorgeous flower wrap getting delivered to your door... dreamy! Flowers have a way of making any day extra special. Our Medium sized wrap is a beautiful gift for birthdays, anniversaries, or anytime you wanna show your appreciation.

          </p>
        </div>
      </div>)
    }

      <Footer />

    </div>

  )
}

