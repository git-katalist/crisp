import {useState} from 'react'
import Link from 'next/link'
import styled from 'styled-components'



const Links = [
  {
    url:"/",
    name:"Home",
  },
  {
    url:"/about",
    name: "About"
  }
]


const Nav = () => {
const [Nav, setNav] = useState(" ")
const ChangeNav = () =>
      {
        setNav(!Nav)
      }
  return (
    <>
      <Header>
        <button onClick={ChangeNav}>Good Morning</button>
        {Nav ?
          <ul>
            <li>        {Links.map((page, index) => (

              <Link key={index} href={page.url}>
                <a>
                  {page.name}
                </a>
              </Link> ))}
            </li>
        <h1>Good Day from the Nav Page</h1>
          </ul>
         : ""}
      </Header>
    </>
 )
}

export default Nav


const Header = styled.header``
