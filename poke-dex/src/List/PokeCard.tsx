import styled from "@emotion/styled"
import PokeNameChip from "../Common/PokeNameChip"

const TempImgUrl = 'https://upload.wikimedia.org/wikipedia/ko/thumb/a/a6/Pok%C3%A9mon_Pikachu_art.png/200px-Pok%C3%A9mon_Pikachu_art.png'
const PokeCard = () => {
  return (
    <Item>
      <Header>
        <PokeNameChip/>
      </Header>
      <Body>
        <img src={TempImgUrl} alt='pokemon'></img>
      </Body>
      <Footer>

      </Footer>
    </Item>
  )
}

const Item = styled.li`
display : flex;
flex-direction : column ; 
padding : 8px;
width : 250px ;
height : 300px;

border : 1px solid #c0c0c0;
box-shadow : 1px 1px 3px 1px #c0c0c0 ;
`


const Header = styled.section`
  display : flex;
  flex-direction : row;
`

const Body = styled.section`
`

const Footer = styled.section`
`

export default PokeCard