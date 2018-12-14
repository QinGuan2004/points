import React, {Component} from 'react'
import {View, Text, Dimensions, SafeAreaView, Image} from 'react-native'
import Svg, {
    Path,
    Rect
} from "react-native-svg";

class HouseScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
            width: Dimensions.get('window').width,
            height: Dimensions.get('window').height
        }
    }

    componentDidMount() {
        Dimensions.addEventListener('change', (e) => {
            const {width, height} = e.window;
            this.setState({width, height});
        })
    }

    render() {
        return (
            <View style={{
                backgroundColor: '#1f2833',
                flex: 1
            }}>
                <Svg style={{
                    position: 'absolute',
                    height: this.state.height,
                    width: this.state.width
                }}>
                    <Path d={`
              M0 0
              L${this.state.width} 0
              L0 ${this.state.height / 3}
              M${this.state.width} ${this.state.height / 3}
              L${this.state.width} 0
              L0 ${this.state.height / 3}
            `} fill={'white'}/>
                    <Path d={`
              M0 ${this.state.height / 3}
              C${this.state.width / 3} ${this.state.height / 4} ${this.state.width / 2} ${this.state.height / 2.5} ${this.state.width} ${this.state.height / 3}
            `} fill={'#1f2833'}/>
                    <Path d={`
              M${this.state.width} ${this.state.height / 3}
              S${this.state.width / 100 * 80} ${this.state.height / 2.6} ${this.state.width / 2.05} ${this.state.height / 3}
            `} fill={'white'}/>
                </Svg>
                <SafeAreaView style={{
                    flex: 1,
                    alignItems: 'center',
                    justifyContent: 'flex-start',
                }}>
                    <Image
                        style={{
                            width: '100%',
                            height: '60%',
                            resizeMode: 'contain',
                        }}
                        source={{
                            uri: 'https://firebasestorage.googleapis.com/v0/b/sst-house-point.appspot.com/o/black.png?alt=media&token=0a0c181b-f779-4969-ab93-7a91eb897f5b',
                        }}
                    />
                    <Text style={{
                        fontFamily: 'Avenir Next',
                        fontSize: 30,
                        fontWeight: '600'
                    }}>
                        Qin Guan Gae
                    </Text>
                </SafeAreaView>
                <View style={{
                    flex: 2
                }}>
                </View>
            </View>
        )
    }
}

export default HouseScreen