import React, { Component } from 'react'
import Link from 'next/link'
import { withRouter } from "next/router"
 class Header extends Component {

  render() {
    return (
      <div>
        <Link href={`${this.props.router.pathname}`}> 
            <a>Vi</a>
        </Link>
        <br/>
        <Link href={`${this.props.router.pathname}?lang=en`}> 
            <a>En</a>
        </Link>
        <br/>
        <Link href={`${this.props.router.pathname}?lang=ja`}> 
            <a>Ja</a>
        </Link>
        
      </div>
    )
  }
}
export default withRouter(Header);