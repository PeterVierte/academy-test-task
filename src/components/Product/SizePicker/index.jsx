import React from 'react';
import s from './sizePicker.module.scss';

const isDisabledSize = (size, availableSizes) => {
    return !availableSizes.includes(size);
}

const SizePicker = ({sizes, availableSizes, selectedSize, pickProductSize}) => {
    return (
        <div className={s.sizePicker}>
            <span>Выберите размер:</span>
            <div className={s.sizes}>
                {sizes.map(size => {
                    return (
                        <button onClick={() => pickProductSize(size)}
                                disabled={isDisabledSize(size.id, availableSizes)} key={size.id}
                                className={`${s.item} ${selectedSize?.id === size.id ? s.active : ''}`}>{size.label}
                        </button>
                    )
                })}
            </div>
        </div>
    );
};

export default SizePicker;