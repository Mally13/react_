import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import { notify } from 'react-notify-toast'
import Spinner from '../../components/Spinner'

const confirm_url="https://demo.fybomidetravel.com/fybomide-31353973c9/api/confirm/emailverification.php"


export default class Confirm extends Component {
  state = {
    confirming: true
  }

  componentDidMount = () => {
    const { id } = this.props.match.params
    fetch(`${confirm_url}/${id}`)
      .then(res => res.json())
      .then(data => {
        this.setState({ confirming: false })
        notify.show(data.msg)
      })
      .catch(err => console.log(err))
  }

  render = () =>
    <div className='confirm'>
      {this.state.confirming
        ? <Spinner size='8x' spinning={'spinning'} /> 
        : <Link to='/sign-in'>
            <Spinner size='8x' spinning={''} /> 
          </Link>
      }
    </div>
}