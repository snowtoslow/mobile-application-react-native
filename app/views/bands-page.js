import React, {useEffect, useState} from 'react';
import {ActivityIndicator, FlatList, Text, View} from 'react-native';
import Button from '../components/button';
import Right from '../components/left';

const BandsPage = ({navigation}) => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [selectedItem, setSelectedItem] = useState({});

  const getBandsFromApiAsync = async () => {
    try {
      let response = await fetch(
        'https://us-central1-bandsproject-d33f4.cloudfunctions.net/GetBands',
      );
      return await response.json();
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getBandsFromApiAsync().then((res) => {
      console.log(res);
      setData(res);
      setLoading(false);
    });
  }, []);

  return (
    <View style={{flex: 1, padding: 24}}>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          data={data}
          keyExtractor={({item}) => data[item]}
          renderItem={({item}) => (
            <View>
              <Text>{item.name}</Text>
              <Right>
                <View style={{marginTop: 70}}>
                  <Button
                    text="view"
                    type="filled"
                    bordered
                    size="small"
                    onPress={() => {
                      setSelectedItem(item);
                      navigation.navigate('BandsViewPage', {
                        dataForView: selectedItem,
                      });
                    }}
                  />
                </View>
              </Right>
            </View>
          )}
        />
      )}
    </View>
  );
};

export default BandsPage;
