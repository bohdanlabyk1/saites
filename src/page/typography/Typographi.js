import React from 'react'
import './typography.scss'
import imagefon from './../about/image/about.jpg'

const Typographi = () => {
  return (
    <div >
     
        <div className="fon" style={{
                backgroundImage: `url(${imagefon})`,
            }}> </div>
        <div className='typo'>
   <div className='typo-content'>
     <h1>H1 HEADING</h1>
     <p>Welcome to our wonderful world. We sincerely hope that each and every user entering our website will find exactly what he/she is looking for. With advanced features of activating account and new login widgets, you will definitely have a great experience of using our web page.</p>
   </div>
   <div className='typo-content'>
     <h2>H2 Heading</h2>
     <p>Welcome to our wonderful world. We sincerely hope that each and every user entering our website will find exactly what he/she is looking for. With advanced features of activating account and new login widgets, you will definitely have a great experience of using our web page.</p>
   </div>
   <div className='typo-content'>
     <h3>H3 Heading</h3>
     <p>Welcome to our wonderful world. We sincerely hope that each and every user entering our website will find exactly what he/she is looking for. With advanced features of activating account and new login widgets, you will definitely have a great experience of using our web page.</p>
   </div>
   <div className='typo-content'>
     <h4>H4 HEADING</h4>
     <p>Welcome to our wonderful world. We sincerely hope that each and every user entering our website will find exactly what he/she is looking for. With advanced features of activating account and new login widgets, you will definitely have a great experience of using our web page.</p>
   </div>
   <div className='typo-content'>
     <h5>H5 Heading</h5>
     <p>Welcome to our wonderful world. We sincerely hope that each and every user entering our website will find exactly what he/she is looking for. With advanced features of activating account and new login widgets, you will definitely have a great experience of using our web page.</p>
   </div>
   <div className='typo-content'>
     <h6>H6 Heading</h6>
     <p>Welcome to our wonderful world. We sincerely hope that each and every user entering our website will find exactly what he/she is looking for. With advanced features of activating account and new login widgets, you will definitely have a great experience of using our web page.</p>
   </div>
   <div className='typo-content'>
     <h2>HTML Text Elements</h2>
     <p>Welcome to our wonderful world. This is a bold text This is a highlighted textWe sincerely hope that each and every user entering our website will find exactly what he/she is looking for. With advanced features of activating account and new loginTooltipswidgets, you will definitely have a great experience of using our web page.This is a strickethrough text This is an underlined text.Hover linkPress link</p>
   </div>
   <div className='typo-text'>
    <h1>Ordered & Unordered Lists</h1>
    <div className='text'>
    <div className='text1'>
    <ul>
  <li>High Professionalism</li>
  <li>Customer Service</li>
  <li>Innovation</li>
  <li>Ethics</li>
  <li>Management</li>
</ul>
      </div>
      <div className='text2'>
      <ol>
  <li>High Professionalism</li>
  <li>Customer Service</li>
  <li>Innovation</li>
  <li>Ethics</li>
  <li>Management</li>
</ol>
    </div>
    </div>
   </div>
   <div className='typo-content'>
     <h2>Blockquote</h2>
     <p>Morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, tristique senectus et netus et malesuada fames ac turpis egestas</p>
   </div>
     </div>
   </div>
  )
}

export default Typographi