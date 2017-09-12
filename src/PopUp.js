import React from 'react';
import {Text, View,Alert,ActionSheetIOS } from 'react-native';
import { Button} from 'native-base';
var DESTRUCTIVE_INDEX = 3;
var CANCEL_INDEX = 4;

var BUTTONS = [
'Option 0',
'Option 1',
'Option 2',
'Delete',
'Cancel',
];
const stateName = {
      selected:''
};

const PopUp = () => {

      return(
        <View>
          <Button onPress={()=> showActionSheet()}>
            <Text>More</Text>
          </Button>
        </View>
      );
}
export default PopUp;
