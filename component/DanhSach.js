import React, { Component } from 'react';
import { Text, View, FlatList, StyleSheet, Image, Alert, TouchableHighlight, Button } from 'react-native';
import listData from '../data/listData';
import Swipeout from 'react-native-swipeout';

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

//import DetailsScreen from './AddStudent';
import ThemMoi from './AddStudent';
import CapNhap from './Edit';
import { TouchableOpacity } from 'react-native-gesture-handler';


class DanhSach extends Component {
    static navigationOptions =
        {
            title: 'Danh Sách Sinh Viên',

        };
    constructor(props) {
        super(props);
        this.state = ({
            deletedRowKey: null,
            myData: [],
        });
        this._onPressAdd = this._onPressAdd.bind(this);
    }
    refreshFlatList = (deletedKey) => {
        this.setState((prevState) => {
            return {
                deletedRowKey: deletedKey
            };
        });
        // this.refs.flatList.scrollToEnd();
    }
    _onPressAdd() {
        alert("You add Item");
        //this.refs.addModal.showAddModal();
    }
    // ham load du lieu tu server
    loadDataFromServer = () => {

        fetch('http://192.168.0.116/react/test.php')
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({
                    myData: responseJson,
                });
            })
            .catch((e) => {
                alert(e)
            });
    }
    componentDidMount() {
        this.loadDataFromServer();
    }
    //Lay du lieu sv theo id
    GetStudentIDFunction = (id, hoten, lop, masv, anh) => {
        this.props.navigation.navigate('Sua', {
            id: id,
            hoten: hoten,
            lop: lop,
            masv: masv,
            anh: anh
        });
    }
    render() {
        return (
            <View style={{ flex: 1 }}>
                <View style={styles.hearder}>
                    {/* <Text style={{fontSize: 20}}>DANH SACH SINH VIEN</Text> */}
                    <TouchableHighlight
                        style={{ marginRight: 10 }}
                        underlayColor='tomato'
                        //onPress={this._onPressAdd}
                        onPress={() => this.props.navigation.navigate('Them')}

                    >
                        <Image
                            style={{ width: 35, height: 35 }}
                            source={require('../icons/icons-add.png')}
                        />
                    </TouchableHighlight>
                </View>

                <FlatList
                    ref={"flatList"}
                    data={this.state.myData}
                    // renderItem = {({item, index}) => {
                    //     return(
                    //     <FlatListItem item={item} index={index} parentFlatList={this}>  

                    //     </FlatListItem>);
                    // }}
                    // keyExtractor={({id}, index) => id}
                    renderItem={({ item }) => (
                        <View style={styles.item}>
                            <View style={styles.viewItem}>
                                <Image
                                    source={{ uri: item.anh }}
                                    style={styles.anh}
                                >
                                </Image>
                                <View style={styles.textItem}>
                                    <Text style={styles.text}>{item.hoten}</Text>
                                    <Text style={styles.text}>{item.masv}</Text>
                                    <Text style={styles.text}>{item.lop}</Text>
                                </View>
                                <TouchableHighlight
                                    onPress={this.GetStudentIDFunction.bind(
                                        this, item.id,
                                        item.hoten,
                                        item.lop,
                                        item.masv,

                                    )} >
                                    <Image
                                        style={{ width: 35, height: 35 }}
                                        source={require('../icons/edit.png')}
                                    />
                                    {/* <Text style={{ fontSize: 18, color: 'red', margin: 10, justifyContent: 'center', alignItems: 'center' }}>Sửa</Text> */}
                                </TouchableHighlight>

                            </View>

                            <View style={styles.vien}>

                            </View>
                        </View>
                    )}

                >


                </FlatList>




            </View>
        );
    }
}
const styles = StyleSheet.create({
    item: {
        flex: 1,
        flexDirection: 'column',
    },
    text: {
        color: 'white',
        padding: 5,
        fontSize: 16,
    },
    textItem: {
        height: 100,
        flexDirection: 'column',
        flex: 1,
    },
    viewItem: {
        flex: 1,
        backgroundColor: 'mediumseagreen',
        flexDirection: 'row',
    },
    anh: {
        height: 100,
        width: 100,
        margin: 5,
    },
    vien: {
        height: 1,
        backgroundColor: 'white',
    },
    hearder: {
        backgroundColor: 'red',
        height: 40,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',

    },
})

const RootStack = createStackNavigator(
    {
        Home: DanhSach,
        Them: ThemMoi,
        Sua: CapNhap,


    },
    {
        initialRouteName: 'Home',
    }
);

const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
    render() {
        return <AppContainer />;
    }
}




