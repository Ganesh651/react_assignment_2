import './index.css'

const PasswordManager = props => {
      const {eachItem,isClicked,onRevomeDetails} = props
      const {id,website,userName,password} = eachItem

      const logo = website.slice(0,1)

      const arrayOfClass = ["logo-1","logo-2","logo-3","logo-4","logo-5","logo-6"]

      const randomClassName = arrayOfClass[Math.ceil(Math.random()*arrayOfClass.length-1)]
      

      const onDelete = () =>{
            onRevomeDetails(id)
      }
      

      return (
            <li>
                  <div className='password-list'>
                        <div className={`${randomClassName}`}>
                              <p className='logo'>{logo}</p>
                              <div className='details-container'>
                              <p className='logo'>{website}</p>
                              <p className='logo'>{userName}</p>
                              {isClicked ? <p className='logo'>{password}</p> : <img src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png" alt="stars" className='stars'/>}
                        </div>
                        </div>
                              <button type="button" 
                              className='delete-btn'
                              onClick={onDelete}>
                              <img src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png" 
                                    alt="delete" className='delete-icon' />
                              </button>
                  </div>
            </li>
      )
}




export default PasswordManager