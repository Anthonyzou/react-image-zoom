import React,{Component} from 'react';
import {
  View,
  ScrollView,
  Image
} from 'react-native';

export default class ImageViewZoom extends Component {
  render() {
    return (
      <View style={{flex:1}}>
        <ScrollView
          maximumZoomScale={this.props.maximumZoomScale}
          minimumZoomScale={this.props.minimumZoomScale}
          centerContent
          <Image {...this.props}/>
        </ScrollView>
      </View>
    );
  }
}
