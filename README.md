# hooks-store

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
import {StateComponent, DataWidget} from 'hooks-widget';
import ProjectStore from './ProjectStore';

let store = null;

const FunctionPage = () => {
  store = new ProjectStore();
  return <StateComponent store={store} children={renderView} />;
};

function renderView() {
  return (
    <View style={styles.page}>
      <DataWidget data={store.curDate} child={dateView} />
    </View>
  );
};

function dateView(date) {
  return (
    <Button onPress={store.onChangeDate}>
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

export default FunctionPage;

/**  =============== */

//
import { Store, Datagram } from "../src/hooks-store/index"

export default class ProjectStore extends Store {

  curDate = new Datagram(Date.now());

  onCreate(props) {
    console.log('===========> create: ProjectStore')
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
import {StateComponent, DataWidget} from '../src/hooks-store/index';
import ProjectStore from './ProjectStore';

export default class ClassPage extends StateComponent {
  constructor(props) {
    super(props);
    this._store = new ProjectStore();
  }

  render() {
    return (
      <View style={styles.container}>
        {this.dateView()}
      </View>
    );
  }

  dateView = () => {
    const date = this._store.curDate;
    return <Button onPress={this._store.onChangeDate}>
      <Text style={styles.date}>{date}</Text>
    </Button>
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

//
import { Store, Datagram } from "../src/hooks-store/index"

export default class ProjectStore extends Store {

  curDate = new Datagram(Date.now());

  onCreate(props) {
    console.log('===========> create: ProjectStore')
  }

  onChangeDate = () => {
    this.curDate.next(Date.now());
  }
}

```
