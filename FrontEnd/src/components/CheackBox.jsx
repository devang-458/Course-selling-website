import React from 'react'

export default function CheckBox({onChange}) {
  return (
    <div>
        <div className='flex items-center mt-4'>
            <input
              type='checkbox'
              id='termsCheckbox'
              className='mr-2'
              onChange={onChange}
            />
            <label htmlFor='termsCheckbox' className='text-sm text-gray-600'>
              Accept terms and conditions
            </label>
          </div>
    </div>
  )
}
