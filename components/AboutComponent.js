import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import { Card, ListItem } from 'react-native-elements';
import { Text } from 'react-native';
import { PARTNERS } from '../shared/partners';
import { FlatList } from 'react-native';

function Mission() {
    return (
        <Text>
            We present a curated database of the best campsites in the vast woods and backcoun
            try of the World Wide Web Wilderness. We increase access to adventure for the public
            while promoting safe and respectful use of resources. The expert wilderness trekkers
            on our staff personally verify each campsite to make sure that they are up to our
            standards. We also present a platform for campers to share reviews on campsites
            they have visited with each other.
        </Text>
    )
}

class About extends Component {

    constructor(props) {
        super(props);
        this.state = {
            partners: PARTNERS
        }
    }

    static navigationOptions = {
        title: 'About Us'
    }

    render() {
        const renderPartner = ({ item }) => {
            return (
                <ListItem
                    title={item.name}
                    subtitle={item.description}
                    leftAvatar={{ source: require('./images/bootstrap-logo.png') }}
                />
            );
        }
        console.log("Partners",this.state.partners)
        return (
            <ScrollView>
                <Card
                    title={"Our Mission"}
                    wrapperStyle={{ margin: 10 }}
                >
                    <Mission />
                </Card>
                <Card
                    title={"Community Partners"}
                    wrapperStyle={{ margin: 10 }}
                >
                    <FlatList
                        data={this.state.partners}
                        renderItem={renderPartner}
                        keyExtractor={item => item.id.toString()}
                    />
                </Card>
            </ScrollView>
        );
    }
}

export default About;