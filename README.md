# hooks-liveModel

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
import DemoLiveModel from './DemoLiveModel';

let liveModel = null;

const DemoPage = () => {
  liveModel = new DemoLiveModel();
  return <LiveComponent liveModel={liveModel} children={renderView} />;
};

const DemoPage2 = () => {
  liveModel = new DemoLiveModel();
  return <LiveComponent liveModel={liveModel}>
    {renderView()}
  </LiveComponent>;
};

function renderView() {
  return (
    <View style={styles.page}>
      <HooksWidget data={liveModel.curDate} child={dateView} />
    </View>
  );
};

function dateView(date) {
  return (
    <Button onPress={liveModel.onChangeDate}>
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

import { LiveModel, LiveData } from "hooks-widget"

export default class DemoLiveModel extends LiveModel {

  curDate = new LiveData(Date.now());

  onCreate(props) {
    console.log('===========> create: DataLiveModel')
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
import DataLiveModel from './DataLiveModel';

export default class ClassPage extends LiveComponent {
  constructor(props) {
    super(props);
    this.liveModel = new DataLiveModel();
  }

  render() {
    return (
      <View style={styles.container}>
        <HooksWidget data={liveModel.curDate} child={this.dateView} />
      </View>
    );
  }

  dateView = (date) => {
    return (
      <Button onPress={this.liveModel.onChangeDate}>
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

import { LiveModel, LiveData } from "hooks-widget"

export default class DemoLiveModel extends LiveModel {

  curDate = new LiveData(Date.now());

  onCreate(props) {
    console.log('===========> create: DataLiveModel')
  }

  onChangeDate = () => {
    this.curDate.next(Date.now());
  }
}

```
