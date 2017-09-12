import React,{Component} from 'react';
import {
  Container,
  Header,
  Content,
  Title,
  Left,
  Right,
  Body,
  Icon,
  Thumbnail,
  Input,
  Item,
  Button,
  Text
} from 'native-base';
import {
  TouchableHighlight
} from 'react-native';
class AddNew extends Component{
    render(){
      return(
        <Container>
          <Header>
            <Left>
              <Icon name="ios-arrow-back"/>
            </Left>
            <Body>
              <Title>
                  Add New
              </Title>
            </Body>
            <Right>
              <Icon name="ios-trash"/>
            </Right>
          </Header>
          <Content>
            <TouchableHighlight style={{
              justifyContent:'center',
              alignItems:'center',
              margin:30
            }}>
                <Thumbnail square source={require('../../img/avarta.png')}/>
            </TouchableHighlight>
            <Item>
              <Input placeholder="Enter title"/>

            </Item>
            <Item>
            <Input placeholder="Enter Price"/>
            </Item>
            <Item>
            <Input placeholder="Enter Description"/>
            </Item>
            <Button primary block style={{margin:20}}>
              <Text> Save</Text>
            </Button>
          </Content>
        </Container>
      );
    }
}
export default AddNew;
