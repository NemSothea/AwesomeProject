import React,{
  Component
} from 'react';
import { Image,Alert } from 'react-native';
import {
  Container,Header,Content,List,Left,
  Right,ListItem,Thumbnail,Text,Body,Title,
  Icon,Segment,Button
} from 'native-base';
import { TouchableHighlight } from 'react-native';
const DATA =[
{id:0,title:'lexus RX 300',uri:'../../img/lexusrx300.jpg',price:25000,decription:'Hey okay, Please wait me, I hope some day you will be own it.'},
{id:1,title:'iPhone 8',uri:'../../img/iphone8.jpg',price:1200,decription:'Oh boy, super Please Please wait me on next 2 month.'},
{id:2,title:'Headset Razer',uri:'../../img/headset.jpg',price:300,decription:'Oh headset, super cool ha. you will be my own soon.'}];
class DreamLister extends Component {
  constructor(props){
    super(props);
    this.state = {
      index:0
    }
  }
  renderComponents(index) {
    switch(index) {
      case 0:
            return renderByNewest
      case 1:
        return renderByTitle
      case 2:
        return renderPrice
      default:
        return renderByNewest
    }
  }
  onNewest(){
    this.setState({index:0})
  }
  onTitle(){
    this.setState({index:1})
  }
  onPrice(){
    this.setState({index:2})
  }
  renderByNewest(item){
    alert('here')
    return(
      <List dataArray={DATA}
      renderRow={(item) =>
        <View>
        <Image source={require(item.uri)}/>
        <Text>{item.title}</Text>
        <Text>{item.price}</Text>
        <Text>{item.price}</Text>
        </View>
      }/>
    )
  }
    render() {
      return(
        <Container>
          <Header>
            <Left>
              <TouchableHighlight>
              <Icon name="ios-options"/>
              </TouchableHighlight>
            </Left>
            <Body >
              <Title>
                DreamLister
              </Title>
            </Body>
            <Right>
              <TouchableHighlight>
              <Icon name="add"/>
              </TouchableHighlight>
            </Right>
          </Header>
            <Segment>
            <Button first>
                <Text>Newest</Text>
              </Button>
              <Button second>
                <Text>Title</Text>
              </Button>
              <Button last>
                <Text>Price</Text>index
              </Button>
            </Segment>
          <Content>
          {this.renderComponents}
          </Content>
        </Container>
      );
    }
}
export default DreamLister;
