import React from 'react'
import PatchEvent, {set, unset} from 'part:@sanity/form-builder/patch-event';

//pass what the user has typed in and check if there is a value
const createPatchFromValue =(value) => {
    return PatchEvent.from(value === '' ? unset() : set(Number(value)))
}

const formatMoney = Intl.NumberFormat('en-CA', {
    style: 'currency',
    currency: 'USD',
}).format

export default function PriceInput({type, value, onChange, inputComponent}){
    return <div>
        <h2>{type.title} - { value && formatMoney(value/100)}</h2>
        <p>{type.description}</p>
    <input type={type.name}
    
    onChange={e => onChange(createPatchFromValue(e.target.value))}
ref={inputComponent}
    value={value}/>
    </div>
}

PriceInput.focus = function() {
    this._inputElement.focus();
}