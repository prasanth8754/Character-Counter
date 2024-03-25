import styled from 'styled-components'

// {BgCont, Cont, LeftCont, RightCont,InputCont,
//   SearchInput,
//   Button,UlCont,ListItem,}

export const BgCont = styled.div`
    background-color:#ffffff;
    min-height:100vh;
    height:100%;
    display:flex;
    justify-content:center;
    align-items:center;
`
export const Cont = styled.div`
    width:90%;
    height:80vh;
    display:flex;
    align-items:center;
    
    @media screen and (min-width:992px){
        width:70%;
    }
`
export const LeftCont = styled.div`
    background-color:#ffbf1f;
    width:50%;
    height:100%;
    border-top-left-radius:15px;
    border-bottom-left-radius:15px;
    display:flex;
    flex-direction:column;
    flex-grow:1;
`
export const RightCont = styled(LeftCont)`
    background-color:#0f172a;
    border:0px;
    border-top-left-radius:0px;
    border-bottom-left-radius:0px;
    border-top-right-radius:15px;
    border-bottom-right-radius:15px;
    padding:20px;
`
export const Heading = styled.h1`
    color:${props => (props.right ? '#ffc533' : '#334155')};
    font-size:25px;
    padding:20px;
    text-align:${props => (props.right ? 'center' : 'start')};
`
export const ResultCont = styled.div`
    background-color:#ffc533;
    height:100%;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
`
export const Img = styled.img`
    width:50%;
    align-self:center;
    
`
export const InputCont = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    gap:10px;
    margin-top:40px;
`
export const SearchInput = styled.input`
    width:100%;
    height:40px;
    backgroun-color:#ffffff;
    padding-left:20px;
    outline:none;
    border:0px;
    border-radius:5px;
`
export const Button = styled.button`
    background-color:#ffbf1f;
    border:0px;
    outline:none;
    cursor:pointer;
    color:#475569;
    width:80px;
    height:40px;
    font-weight:600;
    border-radius:5px;
`
export const UlCont = styled.ul`
    list-style-type:none;
    align-self:flex-start;
`
export const ListItem = styled.li`
    color:#1e293b;
    font-size:20px;
    font-weight:bold;
    padding-bottom:10px;
`
