import React, {useState} from 'react';
import {getProductColor} from "../../../services/api";
import s from './productDescription.module.scss';
import ColorPicker from "../ColorPicker";
import SizePicker from "../SizePicker";
import Store from "../../../store";

const checkIsDisabledCart = (selectedSize, activeColor) => {
    return Object.keys(selectedSize).length && Object.keys(activeColor).length
}

const ProductDescription = ({productId, sizes, name, colors}) => {
    const [availableSizes, setAvailableSizes] = useState([]);
    const [selectedSize, setSelectedSize] = useState({});
    const [selectedColor, setSelectedColor] = useState({});

    const {addProductToCart} = Store;

    const pickProductColor = async (colorId) => {
        try {
            const color = await getProductColor(productId, colorId);
            setAvailableSizes(color.sizes);
            setSelectedSize({});
            setSelectedColor(color);
        } catch (e) {
            console.log('Error: ', e);
        }
    }

    const pickProductSize = (size) => {
        setSelectedSize(size);
    }

    const onAddProductToCart = () => {
        const product = {
            id: `${productId}-${selectedColor.id}-${selectedSize.label}`,
            name,
            color: selectedColor.name,
            size: selectedSize.label,
            price: selectedColor.price,
            image: selectedColor.images[0]
        }
        addProductToCart(product);
    }
    return (
        <div>
            <h1 className={s.title}>{name}</h1>
            <ColorPicker colors={colors} pickProductColor={pickProductColor} activeColor={selectedColor}/>
            <SizePicker sizes={sizes} availableSizes={availableSizes} selectedSize={selectedSize} pickProductSize={pickProductSize}/>
            {Object.keys(selectedColor).length > 0 && (
                <div className={s.description}>
                    <div className={s.descriptionItem}>
                        <span>Описание:</span>
                        <div>{selectedColor.description}</div>
                    </div>

                    <div className={s.descriptionItem}>
                        <span>Цена:</span>
                        <div>{selectedColor.price} Р</div>
                    </div>
                </div>
            )}
            <button className={s.btn} disabled={!checkIsDisabledCart(selectedSize, selectedColor)} onClick={onAddProductToCart}>В корзину</button>
        </div>
    );
};

export default ProductDescription;