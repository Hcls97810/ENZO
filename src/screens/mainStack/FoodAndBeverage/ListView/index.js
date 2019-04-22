import React, { Component } from "react";
import { View, FlatList, RefreshControl, Text } from "react-native";
import ListItem from "../../../../components/ListItem";
import { Theme } from "@theme";
import styles from "./styles";

import { connect } from "react-redux";
import { getAllDeal } from "../../../../store/deal";

class ListView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      refreshing: false
    };
  }

  onRefresh() {
    this.props.dispatch(getAllDeal());
  }

  sortDealDate(list) {
    if (!list && list.length === 0) {
      return [];
    }
    list.sort((a, b) => {
      return new Date(b.created_at) - new Date(a.created_at);
    });
    return list;
  }

  render() {
    let count = 0;
    this.props.dealData.map((item, index) => {
      if (item.city === this.props.areaName) {
        count++;
      }
    })
    return (
      <View style={styles.listView}>
        {
          count > 0 &&
          <FlatList
            showsVerticalScrollIndicator={false}
            keyExtractor={(item, index) => index.toString()}
            data={this.sortDealDate(this.props.dealData)}
            refreshControl={
              <RefreshControl
                refreshing={this.props.deal.isFetching}
                onRefresh={() => this.onRefresh()}
              />
            }
            renderItem={({ item }) =>
              item.city === this.props.areaName ? (
                <ListItem
                  {...this.props}
                  image={item.image}
                  title={item.title}
                  time={item.created_at}
                  date={item.created_at}
                  rating={item.rating}
                  dealData={item}
                />
              ) : null
            }
          />
        }
        {
          count === 0 &&
          <View
            style={{
              padding: Theme.padding.pad2,
              justifyContent: 'center'
            }}
          >
            <Text
              style={{
                fontSize: Theme.fontSize.p1,
                textAlign: 'center',
                color: Theme.colors.Tango
              }}
            >{`No deals available in ${this.props.areaName}`}</Text>
          </View>
        }
      </View>
    );
  }
}

export default connect()(ListView);
