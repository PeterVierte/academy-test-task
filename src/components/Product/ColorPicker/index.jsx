import React, {useState} from 'react';
import s from './colorPicker.module.scss';

const getColorClass = (color) => {
    switch (color) {
        case 'черный':
            return 'black';
        case 'серый':
            return 'gray';
        case 'белый':
            return 'white';
        case 'желтый':
            return 'yellow';
        case 'синий':
            return 'blue';
    }
}

const ColorPicker = ({colors, pickProductColor, activeColor}) => {

    return (
        <div className={s.colorPicker}>
            <span>Выберите цвет:</span>
            <div className={s.colors}>
                {colors.map(color => {
                    return (
                        <div
                            className={`${s.item} ${s[getColorClass(color.name)]} ${activeColor.id === color.id ? s.active : ''}`}
                            key={color.id} onClick={() =>  pickProductColor(color.id)}
                        />
                    )
                })}
            </div>
        </div>
    );
};

export default ColorPicker;