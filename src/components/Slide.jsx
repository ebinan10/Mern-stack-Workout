import React from 'react'
import styledComponents from 'styled-components'

const Component = styledComponents.div``

const Wrapper = styledComponents.div`
display:flex;
flex-wrap: wrap;
`

const Right = styledComponents.div`
flex:1
`
const Center = styledComponents.div`
flex:1
`
const Left = styledComponents.div`
flex:1
`
const Slide = () => {
    return (
        <div>
            <Component>
            <Wrapper>
            <Right>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam voluptas reiciendis consequatur quos enim? Tempora eveniet culpa natus ex ut quibusdam iure voluptate at, rem quo, facere reiciendis, beatae tenetur.</Right>
            <Center>Center</Center>
            <Left>Left</Left>
            </Wrapper>
            </Component>
        </div>
    )
}

export default Slide
