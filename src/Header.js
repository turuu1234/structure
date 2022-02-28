import Button from './Button'
const Header = ({title, onAdd, changeTitle}) => {
  return (
    <div className='header'>
        <h1>{title}</h1>
        <Button color = {changeTitle ? 'red' : 'green'} text = {changeTitle ? 'Close' : 'Add'} onAdd={onAdd}/>
    </div>
  )
}

export default Header