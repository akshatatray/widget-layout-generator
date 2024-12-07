import './AddWidgetContainer.css'

import React, {useState} from 'react'

function AddWidgetContainer({setAddANewWidget}) {
  const [selectedIcon, setSelectedIcon] = useState('');
  return (
    <div className="add-a-widget-container">
        <div className="heading">Add a new navigation item</div>
        <div className="label">Label <span>*</span></div>
        <md-input />
        <div className="label">Icon <span>*</span></div>
        {
          selectedIcon && <div className='icon-preview'>
          <md-icon iconSet="preferMomentumDesign" name="home_16" />
        </div>
        }
        <div className="selection-container">
            <div className='options'>Select from Momentum</div>
            <div >or</div>
            <div className='options'>Upload an image</div>
        </div>
        <div className="default-selection">
            <input type='checkbox' /> Set as the default landing page
        </div>
        <div className="actions">
        <md-button onClick={() => setAddANewWidget(false)} color="white" outline><span slot="text">Cancel</span></md-button>
        <md-button disabled><span slot="text">Add</span></md-button>
        </div>
    </div>
  )
}

export default AddWidgetContainer