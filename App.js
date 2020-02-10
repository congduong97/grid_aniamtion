import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Button,
  View,
  Text,
  Dimensions,
  Platform,
  UIManager,
  LayoutAnimation,
} from 'react-native';

const {height, width} = Dimensions.get('window');
if (
  Platform.OS === 'android' &&
  UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

class App extends Component {
  state = {
    widthScale: 0.4,
    widthTitle: '50%',
    widthContent: '50%',
    widthBottom: '100%',
    heightItem: '50%',
  };

  onPress = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
    if (this.state.widthScale === 0.4) {
      this.setState({
        widthScale: 0.8,
        widthTitle: '25%',
        widthContent: '50%',
        widthBottom: '25%',
        heightItem: '100%',
      });
    } else {
      this.setState({
        widthScale: 0.4,
        widthTitle: '50%',
        widthContent: '50%',
        widthBottom: '100%',
        heightItem: '50%',
      });
    }
  };

  render() {
    const {
      widthScale,
      widthTitle,
      widthContent,
      widthBottom,
      heightItem,
    } = this.state;
    return (
      <View style={{flex: 1, paddingTop: 0.1 * height}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            flexWrap: 'wrap',
          }}>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              elevation: 4,
              width: width * widthScale,
              height: 0.25 * width,
              borderRadius: 4,
              backgroundColor: 'red',
              margin: 0.05 * width,
              flexDirection: 'row',
              flexWrap: 'wrap',
            }}>
            <View
              style={{
                width: widthTitle,
                height: heightItem,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={{color: 'white'}}>Title</Text>
            </View>
            <View
              style={{
                width: widthContent,
                height: heightItem,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={{color: 'white'}}>Box1</Text>
            </View>
            <View
              style={{
                width: widthBottom,
                height: heightItem,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={{color: 'white'}}>Bottom</Text>
            </View>
          </View>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              elevation: 4,
              width: width * widthScale,
              height: 0.25 * width,
              borderRadius: 4,
              backgroundColor: 'green',
              margin: 0.05 * width,
              flexDirection: 'row',
              flexWrap: 'wrap',
            }}>
            <View
              style={{
                width: widthTitle,
                height: heightItem,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={{color: 'white'}}>Title</Text>
            </View>
            <View
              style={{
                width: widthContent,
                height: heightItem,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={{color: 'white'}}>Box2</Text>
            </View>
            <View
              style={{
                width: widthBottom,
                height: heightItem,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={{color: 'white'}}>Bottom</Text>
            </View>
          </View>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              elevation: 4,
              width: width * widthScale,
              height: 0.25 * width,
              borderRadius: 4,
              backgroundColor: 'orange',
              margin: 0.05 * width,
              flexDirection: 'row',
              flexWrap: 'wrap',
            }}>
            <View
              style={{
                width: widthTitle,
                height: heightItem,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={{color: 'white'}}>Title</Text>
            </View>
            <View
              style={{
                width: widthContent,
                height: heightItem,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={{color: 'white'}}>Box3</Text>
            </View>
            <View
              style={{
                width: widthBottom,
                height: heightItem,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={{color: 'white'}}>Bottom</Text>
            </View>
          </View>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              elevation: 4,
              width: width * widthScale,
              height: 0.25 * width,
              borderRadius: 4,
              backgroundColor: 'blue',
              margin: 0.05 * width,
              flexDirection: 'row',
              flexWrap: 'wrap',
            }}>
            <View
              style={{
                width: widthTitle,
                height: heightItem,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={{color: 'white'}}>Title</Text>
            </View>
            <View
              style={{
                width: widthContent,
                height: heightItem,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={{color: 'white'}}>Box4</Text>
            </View>
            <View
              style={{
                width: widthBottom,
                height: heightItem,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={{color: 'white'}}>Bottom</Text>
            </View>
          </View>
        </View>
        <Button title="Press" onPress={this.onPress} />
      </View>
    );
  }
}

const styles = StyleSheet.create({});

export default App;
