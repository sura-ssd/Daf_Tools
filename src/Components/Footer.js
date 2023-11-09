import {Link} from 'react-router-dom'

const Footer = () => {
  return (
    <div className='page_footer' >
      <div>
        <p className='copyright_info'>&copy; 2023 DAF TECH. All rights reserved.</p>
        <p className='author_link'>
          Designed by
          <Link to='/' target='_blank'>Bereket Kinfe, Surafel seyoum, Temesgen debebe</Link>
        </p>
      </div>
    </div>
  )
}

export default Footer