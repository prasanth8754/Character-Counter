import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import {
  BgCont,
  Cont,
  LeftCont,
  RightCont,
  Heading,
  ResultCont,
  Img,
  InputCont,
  SearchInput,
  Button,
  UlCont,
  ListItem,
} from './styledComponents'

class CharacterCounter extends Component {
  state = {lengthList: [], textInput: ''}

  onChangeInput = event => {
    this.setState({textInput: event.target.value})
  }

  onSubmitForm = event => {
    event.preventDefault()
    const {textInput} = this.state
    if (textInput !== '') {
      const newText = {
        id: uuidv4(),
        text: textInput,
      }

      this.setState(prevState => ({
        lengthList: [...prevState.lengthList, newText],
        textInput: '',
      }))
    }
  }

  render() {
    const {lengthList, textInput} = this.state

    return (
      <BgCont>
        <Cont>
          <LeftCont>
            <Heading>Count the characters like a Boss...</Heading>

            <ResultCont>
              {lengthList.length === 0 && (
                <Img
                  src="https://assets.ccbp.in/frontend/react-js/no-user-inputs-img.png"
                  alt="no user inputs"
                />
              )}
              {lengthList.length > 0 && (
                <UlCont>
                  {lengthList.map(eachItem => (
                    <ListItem key={eachItem.id}>
                      <Heading as="p">
                        {eachItem.text} : {eachItem.text.length}
                      </Heading>
                    </ListItem>
                  ))}
                </UlCont>
              )}
            </ResultCont>
          </LeftCont>
          <RightCont>
            <Heading right>Character Counter</Heading>
            <InputCont as="form" onSubmit={this.onSubmitForm}>
              <SearchInput
                value={textInput}
                type="text"
                placeholder="Enter the Characters here"
                onChange={this.onChangeInput}
              />
              <Button type="submit">Add</Button>
            </InputCont>
          </RightCont>
        </Cont>
      </BgCont>
    )
  }
}

export default CharacterCounter
