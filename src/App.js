import {useState} from 'react'
import {v4 as uuidv4} from 'uuid'
import PasswordManager from './components/PasswordManager'
import './App.css'





const App = () => {
  const [count,setCount] = useState(0)
  const [website,setWebSite] = useState("")
  const [userName,setUserName] = useState("")
  const [password,setPassword] = useState("")
  const [userDetails, setUserDetails] = useState([])
  const [isClicked,setIsClicked] = useState(false)
  const [search,setSearch] = useState("")

  const onChangeWebSite = (e)=>{
    setWebSite(e.target.value)
  }

  const onChangeUserName = (e) =>{
    setUserName(e.target.value)
  }

  const onChangePassword = (e)=>{
    setPassword(e.target.value)
  }

  const onFormSubmit = (e)=>{
    e.preventDefault()
    const newUserDetails = {
      id: uuidv4(),
      website,
      userName,
      password
    }
setUserDetails((prevState)=> [...prevState, newUserDetails])
setCount(prevState=> prevState + 1)
setWebSite("")
setUserName("")
setPassword("")
}

const isMasked = ()=>{
  setIsClicked(prevState=> !prevState)
}

const onChangeSearch = (e)=>{
  setSearch(e.target.value)
}


const searchRsults = userDetails.filter(each=>each.website.toLowerCase().includes(search.toLocaleLowerCase()))

const onRemoveDetails = (id) => {
    setUserDetails((prevState) => prevState.filter((each) => each.id !== id));
    setCount((prevState) => prevState - 1);
  };

  return(
  <div className='app-container'>
    <img src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png" 
    alt="app logo" 
    className='app-logo'/>
    <div className='form-container'>
    <form onSubmit={onFormSubmit} className='form' >
      <h1 className='password-heading'>Add New Password</h1>
      <div className='user-name-container'>
        <img src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png" 
        alt="website" className='logo' />
        <input type="text"
         placeholder='Enter Website'
        className='input' 
        onChange={onChangeWebSite}
        value={website} />
        
      </div>
      <div className='user-name-container'>
        <img src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png" 
        alt="website" className='logo' />
        <input type="text" 
        placeholder='Enter Username' 
        className='input' 
        onChange={onChangeUserName}
        value={userName}/>
      </div>
      <div className='user-name-container'>
        <img src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png" 
        alt="website" className='logo' />
        <input type="password" 
        placeholder='Enter password' 
        className='input' 
        onChange={onChangePassword}
        value={password}/>
      </div>
      <div className='add-btn-container'>
      <button type="submit" className='add-btn'>
        Add
      </button>
      </div>
    </form>
    <img src="https://assets.ccbp.in/frontend/react-js/password-manager-sm-img.png" 
    alt="password manager"
    className='password-manager' />
    </div>
      <div className='password-container'>
        <p className='password'>Your Password <span className='count'>{count}</span></p>
        <div className='search-container'>
          <img src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png" 
          alt="search" className='logo'/>
          <input onChange={onChangeSearch} value={search} type="search" placeholder='search' className='input'/>
        </div>
        <hr />
        <div className='checbox-container'>
        <input onClick={isMasked} id="checkbox" type="checkbox" value={isClicked}
        className='checkbox' />
        <label htmlFor='checkbox' 
        className='show-password-text'>Show password</label>
        </div>
        {searchRsults.length === 0 ? 
        <div className='no-passwords-conatiner'>
              <img src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png" 
              alt="no passwords"
              className='no-passwords-image' /> 
              <p className='para'>No passwords to show </p>
        </div>  : 
        <ul className='passsword-list-container'>
          {searchRsults.map(eachItem=>(
            <PasswordManager 
            eachItem={eachItem} 
            isClicked={isClicked}
            key={eachItem.id} 
            onRevomeDetails={onRemoveDetails}
            />
          ))}
        </ul>}
      </div>
  </div>
)
  }


export default App 