import React,{ Component } from 'react';
import {
  Container,
  Header,
  Content,
  Form,
  Item,
  Input,
  Label,
  Title,
  Button,
  Text, View,
  Body
} from 'native-base';
import {Actions} from 'react-native-router-flux';
import { TouchableHighlight } from 'react-native';
class Login extends Component {
      onSignInPress(){
        Actions.navToDreamLister({type:'jump'})
      }
  render(){
     const { headerStyle, buttonStyle,textStyle,footerStyle } = loginStyle;

    return(
        <Container>
          <Header>
            <Title style={headerStyle}>SIGN IN</Title>
          </Header>
            <Content>
                <Form>
                  <Item floatingLabel>
                    <Label> UserName</Label>
                    <Input/>
                  </Item>
                  <Item floatingLabel>
                    <Label> Password</Label>
                    <Input/>
                  </Item>
                </Form>
                <Body style={buttonStyle}>
                <Button  block success style={textStyle}
                onPress={this.onSignInPress.bind(this)}>
                  <Title>SIGN IN</Title>
                </Button>
                  <View style={{
                    marginTop:10
                  }}>
                  <Text style={footerStyle}>
                  You do not have account yet?
                  </Text>
                  <TouchableHighlight>
                      <Text style={{
                        color:'blue',
                        fontStyle:'italic',
                        textDecorationLine:'underline'
                      }}>SIGN UP</Text>
                  </TouchableHighlight>
                  </View>
                </Body>
            </Content>
        </Container>
    );
  }
}
 const loginStyle = {
    headerStyle: {
      fontSize: 20,
      marginTop: 10,
      fontWeight:'600'
    },
    buttonStyle: {
      marginTop: 30,
    },
    textStyle: {
      width:200,
      alignItems:'center',
      justifyContent:'center',

    },
    footerStyle: {
      fontSize:13

    }
 }
export default Login;
