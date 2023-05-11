# hooks-liveData

基于 hooks 开发的一套状态管理工具.

特点：

- 1.数据及业务逻辑与 View 的分离
- 2.类组件，与函数式组件均可使用
- 3.简单轻量化

### 使用

- 函数式组件

```js
import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import {LiveComponent, HooksWidget} from 'hooks-widget';
import DemoLiveData from './DemoLiveData';

let liveData = null;

const DemoPage = () => {
  liveData = new DemoLiveData();
  return <LiveComponent liveData={liveData} children={renderView} />;
};

function renderView() {
  return (
    <View style={styles.page}>
      <HooksWidget data={liveData.curDate} child={dateView} />
    </View>
  );
};

function dateView(date) {
  return (
    <Button onPress={liveData.onChangeDate}>
      <Text style={styles.date}>{date}</Text>
    </Button>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  date: {
    color: '#ff0099'
  }
});

export default DemoPage;

/**  =============== */

import { LiveData, Observer } from "hooks-widget"

export default class DemoLiveData extends LiveData {

  curDate = new Observer(Date.now());

  onCreate(props) {
    console.log('===========> create: DataLiveData')
  }

  onChangeDate = () => {
    this.curDate.next(Date.now());
  }
}

```

- 类组件

```js
import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import {LiveComponent, HooksWidget} from 'hooks-widget';
import DataLiveData from './DataLiveData';

export default class ClassPage extends LiveComponent {
  constructor(props) {
    super(props);
    this.liveData = new DataLiveData();
  }

  render() {
    return (
      <View style={styles.container}>
        <HooksWidget data={liveData.curDate} child={this.dateView} />
      </View>
    );
  }

  dateView = (date) => {
    return (
      <Button onPress={this.liveData.onChangeDate}>
        <Text style={styles.date}>{date}</Text>
      </Button>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  date: {
    color: '#ff0099'
  }
})

/**  =============== */

import { LiveData, Observer } from "hooks-widget"

export default class DemoLiveData extends LiveData {

  curDate = new Observer(Date.now());

  onCreate(props) {
    console.log('===========> create: DataLiveData')
  }

  onChangeDate = () => {
    this.curDate.next(Date.now());
  }
}

```
