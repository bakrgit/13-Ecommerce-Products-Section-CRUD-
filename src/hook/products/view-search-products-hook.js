import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from '../../redux/actions/productsAction';
import { getAllProductsPage } from './../../redux/actions/productsAction';

const ViewSearchProductsHook = () => {

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAllProducts(12))
    }, [])

    const allProducts = useSelector((state) => state.allproducts.allProducts)

    let items = [];
    if (allProducts.data)
        items = allProducts.data;
    else
        items = []

    let pagination = [];
    if (allProducts.paginationResult)
        pagination = allProducts.paginationResult.numberOfPages;
    else
        pagination = []

    const onPress = async (page) => {
        await dispatch(getAllProductsPage(page, 12))
    }

    return [items, pagination, onPress]

}

export default ViewSearchProductsHook